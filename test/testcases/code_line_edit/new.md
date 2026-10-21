# 火锅涮煮控制系统

## 设计思路

火锅涮煮是一门精密的时间管理艺术。不同食材对温度和时长的要求天差地别——毛肚讲究七上八下十五秒，菌菇要慢炖四分钟以上才能释放鲜味，而嫩牛肉片超过三十秒口感就会变柴发硬。本系统为每种食材提供精确的涮煮计时方案，彻底告别"凭感觉捞"的蛮荒时代。

核心涮煮函数接收食材清单，根据食材类别、切片厚度和锅底类型，计算每样食材的最佳涮煮秒数。对于冷冻未解冻的食材会直接拒绝入锅，避免溅油烫伤事故。

```javascript
/**
 * 火锅涮煮时间计算器
 * 根据食材属性和锅底类型计算最佳涮煮方案
 * @param {Array} items - 待涮食材列表
 * @param {string} broth - 锅底类型：'清汤' | '麻辣' | '番茄'
 * @returns {Array} 涮煮方案
 */
function calculateCookingPlan(items, broth) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new TypeError('食材列表不能为空');
  }

  const plan = [];
  const brothFactor = broth === '麻辣' ? 1.2 : 1.0;
  // 番茄锅底酸度会加速蛋白质变性，适当缩短肉类时间
  const tomatoReduction = broth === '番茄' ? 0.85 : 1.0;

  for (const item of items) {
    if (!item.name || !item.type) {
      continue;
    }

    // 冷冻食材安全检查
    if (item.frozen && !item.thawed) {
      plan.push({
        food: item.name,
        time: -1,
        warning: '冻货直接下锅会溅油，请先解冻',
      });
      continue;
    }

    let baseSeconds = 60;
    if (item.type === '肉片') {
      baseSeconds = item.thickness > 3 ? 90 : 30;
      baseSeconds = Math.round(baseSeconds * tomatoReduction);
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
    } else if (item.type === '粉类') {
      baseSeconds = 180;
    }

    const finalSeconds = Math.round(baseSeconds * brothFactor);
    const tip = finalSeconds >= 60 ? '慢煮入味' : '七上八下';

    plan.push({
      food: item.name,
      time: finalSeconds,
      tip: tip,
      dipping: item.spicy ? '干碟海椒面' : '油碟蒜泥香菜',
    });
  }

  return plan;
}
```

## 辅助工具函数

涮煮过程中经常需要格式化倒计时显示。以下函数将秒数转换为可读的计时文本，并在食材即将出锅时发出提醒：

```javascript
/**
 * 将涮煮秒数格式化为倒计时文本
 * @param {number} seconds - 剩余秒数
 * @param {string} foodName - 食材名称
 * @returns {string} 格式化的提示文本
 */
function formatCountdown(seconds, foodName) {
  if (seconds <= 0) {
    return `🔥 ${foodName} 可以捞了！`;
  }
  if (seconds <= 5) {
    return `⚡ ${foodName} 还剩 ${seconds} 秒，准备捞！`;
  }
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  if (min > 0) {
    return `${foodName}: ${min}分${sec}秒`;
  }
  return `${foodName}: ${sec}秒`;
}
```

## 使用须知

上面的函数返回的涮煮方案中，`time` 字段单位为秒。当 `time` 为 -1 时表示该食材不适合当前状态下锅。建议调用方在收到 -1 时弹出提示框，引导用户先做解冻处理。

## 支持的食材类型

当前系统支持以下类别的涮煮时间计算：

- **肉片类**：包括肥牛、嫩牛肉、羊肉等薄切片，涮煮时间受切片厚度影响
- **内脏类**：毛肚、黄喉等，讲究快速涮烫，口感爽脆
- **丸滑类**：虾滑、鱼丸等，需要完全煮透浮起才能食用
- **蔬菜类**：各种叶菜下锅即熟，切忌久煮发黄
- **豆制品**：老豆腐和嫩豆腐时间差异大，老豆腐需久煮吸味
- **菌菇类**：香菇、平菇、杏鲍菇等需要长时间炖煮释放鲜味
- **粉类**：红薯粉、土豆粉等需煮三分钟以上才能透心

## 后续规划

下一步计划支持自动识别食材照片来推断涮煮参数，以及接入智能锅具的温度传感器实现闭环控制。在蘸料推荐方面，也准备引入用户口味偏好模型，根据历史数据动态调整蘸料搭配建议。
