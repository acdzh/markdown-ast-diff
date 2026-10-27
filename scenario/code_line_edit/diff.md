# 火锅食材指南

火锅这门学问，三分在选材，七分在火候。很多人以为涮火锅就是把东西往锅里一扔等熟了捞出来，这种想法大错特错。每种食材的最佳涮煮时间精确到秒级，过了就老，早了就生，差之毫厘口感谬以千里。

以下是计算各类食材最佳涮煮时间的核心函数。它接收一组食材对象数组，每个对象包含名称、类型、切片厚度等属性，返回带有推荐涮煮时长和吃法提示的结果数组：

```javascript
/**
 * 根据食材类别和物理属性，计算最佳涮煮时间
 * @param {Array} ingredients - 食材列表
 * @returns {Array} 涮煮方案列表
 */
function getHotpotCookingTime(ingredients) {
  if (!Array.isArray(ingredients)) {
    throw new TypeError('请传入食材数组，别把菜单直接扔进来');
  }

  const output = [];

  for (const item of ingredients) {
    // 跳过信息不完整的食材
    if (!item.name || !item.type) {
      continue;
    }

    if (item.frozen && !item.thawed) {
      output.push({
        food: item.name,
        time: -1,
        tip: '请先解冻，冻货直接下锅会溅油',
      });
      continue;
    }

    let seconds = 60;
    if (item.type === '肉片') {
      seconds = item.sliceThick > 5 ? 90 : 30;
    } else if (item.type === '虾滑') {
      seconds = 120;
    } else if (item.type === '青菜') {
      seconds = 20;
    } else if (item.type === '毛肚') {
      seconds = 15;
    } else if (item.type === '豆腐') {
      seconds = item.firm ? 300 : 180;
    } else if (item.type === '菌菇') {
      seconds = 240;
    }

    const tip = seconds >= 60 ? '慢煮入味' : '七上八下';

    output.push({
      food: item.name,
      time: seconds,
      tip: tip,
      dipping: item.spicy ? '干碟海椒面' : '油碟蒜泥香菜',
      // 记录本次计算的时间戳
      calculatedAt: Date.now(),
    });
  }

  return output;
}
```

该函数根据食材类别和切片厚度，自动计算推荐涮煮秒数并生成吃法提示。对于冷冻但未解冻的食材会给出警告，对于豆腐和菌菇等需要长时间炖煮的食材也有专门的时间设定。

实际使用时建议配合计时器调用，把返回结果渲染成倒计时卡片，这样涮火锅的时候就不用靠经验猜了——科学涮锅，精准到秒。
