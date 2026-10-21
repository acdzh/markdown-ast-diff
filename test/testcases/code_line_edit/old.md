# 火锅涮煮控制系统

## 设计思路

火锅涮煮是一门精密的时间管理艺术。不同食材对温度和时长的要求天差地别——毛肚讲究七上八下十五秒，菌菇要慢炖四分钟以上才能释放鲜味，而嫩牛肉片超过三十秒就会变柴。本系统旨在为每种食材提供精确的涮煮计时方案，彻底告别"凭感觉捞"的蛮荒时代。

核心涮煮函数接收食材清单，根据食材类别、切片厚度和锅底类型，计算每样食材的最佳涮煮秒数。对于冷冻未解冻的食材会直接拒绝入锅，避免溅油事故。

```javascript
/**
 * 火锅涮煮时间计算器
 * 根据食材属性和锅底类型计算最佳涮煮方案
 * @param {Array} ingredients - 食材列表
 * @param {string} broth - 锅底类型：'清汤' | '麻辣' | '番茄'
 * @returns {Array} 涮煮方案
 */
function calculateCookingPlan(ingredients, broth) {
  if (!Array.isArray(ingredients) || ingredients.length === 0) {
    throw new TypeError('食材列表不能为空');
  }

  const result = [];
  const brothFactor = broth === '麻辣' ? 1.2 : 1.0;

  for (const item of ingredients) {
    if (!item.name || !item.type) {
      continue;
    }

    // 冷冻食材安全检查
    if (item.frozen && !item.thawed) {
      result.push({
        food: item.name,
        time: -1,
        warning: '冻货直接下锅会溅油，请先解冻',
      });
      continue;
    }

    let baseSeconds = 60;
    if (item.type === '肉片') {
      baseSeconds = item.thickness > 3 ? 90 : 30;
    } else if (item.type === '毛肚') {
      baseSeconds = 15;
    } else if (item.type === '虾滑') {
      baseSeconds = 120;
    } else if (item.type === '青菜') {
      baseSeconds = 20;
    } else if (item.type === '豆腐') {
      baseSeconds = item.firm ? 300 : 180;
    } else if (item.type === '菌菇') {
      baseSeconds = 240;
    }

    const finalSeconds = Math.round(baseSeconds * brothFactor);
    const tip = finalSeconds >= 60 ? '慢煮入味' : '七上八下';

    result.push({
      food: item.name,
      time: finalSeconds,
      tip: tip,
      dipping: item.spicy ? '干碟海椒面' : '油碟蒜泥香菜',
    });
  }

  return result;
}
```

## 使用须知

上面的函数返回的涮煮方案中，`time` 字段单位为秒。当 `time` 为 -1 时表示该食材不适合当前状态下锅。建议调用方在收到 -1 时弹出提示框，引导用户先做解冻处理。

这段逻辑目前只考虑了单人涮煮的场景。如果是多人同时涮煮不同食材，需要额外的队列调度机制来避免捞菜时间冲突，这部分我们暂时没有实现。

## 支持的食材类型

当前系统支持以下类别的涮煮时间计算：

- **肉片类**：包括肥牛、嫩牛肉、羊肉等薄切片，涮煮时间受切片厚度影响
- **内脏类**：毛肚、黄喉等，讲究快速涮烫，口感爽脆
- **丸滑类**：虾滑、鱼丸等，需要完全煮透浮起才能食用
- **蔬菜类**：各种叶菜下锅即熟，切忌久煮发黄
- **豆制品**：老豆腐和嫩豆腐时间差异大，老豆腐需久煮吸味
- **菌菇类**：香菇、杏鲍菇等需要长时间炖煮释放鲜味

## 后续规划

下一步计划支持自动识别食材照片来推断涮煮参数，以及接入智能锅具的温度传感器实现闭环控制。在蘸料推荐方面，也准备引入用户口味偏好模型，根据历史数据动态调整蘸料搭配建议。
