import { defineConfig } from 'tsup';
import type { Plugin } from 'esbuild';

const stripAssert: Plugin = {
  name: 'strip-assert',
  setup(build) {
    build.onResolve({ filter: /\/lib\/assert$/ }, (args) => {
      return { path: args.path, namespace: 'strip-assert', pluginData: { resolveDir: args.resolveDir } };
    });
    build.onLoad({ filter: /.*/, namespace: 'strip-assert' }, () => {
      return {
        contents: 'export function assert(_c, _m) {}',
        loader: 'ts',
      };
    });
  },
};

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  esbuildPlugins: [stripAssert],
});
