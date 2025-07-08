
import assert from '../lib/assert';
import { XMap } from '../lib/XMap';
import { XNode } from '../lib/XNode';


const BASE_OPTIMALITY = 1;

/*
 * Candidate optimality between "xNew" and "xOld" as described in "Phase
 * 3" of sec. 5.2.
 * This also uses the heuristic described in "Tuning" for how many
 * levels to search upward.
 */

function optimality(xOld: XNode, xNew: XNode, xOldMap: XMap, xNewMap: XMap) {
  let opt = BASE_OPTIMALITY;


  /* Height: log(n) * W/W_0 or at least 1. */
  const depth = Math.max(
    1,
    Math.ceil(Math.log(xNewMap.maxNodes) * xNew.weight / xNewMap.maxWeight),
  );

  /* FIXME: are we supposed to bound to "d"? */

  for (let i = 0; i < depth; i++) {
    const xOldParent = xOld.node?._parent?._xNode;
    const xNewParent = xNew.node?._parent?._xNode;
    if (
      xOldParent &&
      xNewParent &&
      xNewParent.match &&
      xNewParent.match === xOldParent.node
    ) {
      opt += 1;
    }
  }
  
  return opt;
}


/*
 * Compute the candidacy of "xNew" to "xOld" as described in "Phase 3"
 * of sec. 5.2 and using the optimality() function as a basis.
 * If "xNew" does not have a match assigned (no prior candidacy), assign
 * it immediately to "xOld".
 * If it does, then compute the optimality and select the greater of the
 * two optimalities.
 * As an extension to the paper, if the optimalities are equal, use the
 * "closer" node to the current identifier.
 */
export function candidate(xOld: XNode, xOldMap: XMap, xNew: XNode, xNewMap: XMap) {
  assert(xOld.node);
  assert(xNew.node);

  if (!xNew.optMatch) {
    xNew.optMatch = xOld.node;
    xNew.opt = optimality(xOld, xNew, xOldMap, xNewMap);
    return;
  }

  const opt = optimality(xOld, xNew, xOldMap, xNewMap);

  if (opt === xNew.opt) {
    /*
     * Use a simple norm over the identifier space.
     * Choose the lesser of the norms.
     */
    const dOld = Math.abs(xNew.optMatch._id! - xNew.node._id!);
    const dNew = Math.abs(xOld.node._id! - xNew.node._id!);
    if (dOld > dNew) {
      xNew.optMatch = xOld.node;
      xNew.opt = opt;
    }
  } else if (opt > xNew.opt) {
    xNew.optMatch = xOld.node;
    xNew.opt = opt;
  }
}
