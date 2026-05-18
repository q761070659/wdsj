# 假方块爆破触发器

## fake_block_bomb_break

当玩家使用 YearningWorldFakeBlocks 提供的专用爆炸物，并且**成功破坏指定假方块组**后，就会触发这个成就条件。

这不是普通 TNT，也不是“炸到附近就算”。只有 YearningWorldFakeBlocks 真正判定该组被成功击破后，成就插件才会收到事件。

## 依赖

- YearningWorldFakeBlocks

## 基础写法

```yaml
trigger:
  type: fake_block_bomb_break
  id: spawn_wall
```

## 参数说明

| 字段 | 说明 |
|------|------|
| `type` | 固定写 `fake_block_bomb_break` |
| `id` | YearningWorldFakeBlocks 中的假方块组名 |

## 示例

```yaml
fake_block_bomb_demo:
  parent: root
  title: "<light_purple>幻墙爆破手</light_purple>"
  description:
    - "<gray>用专用爆炸物炸掉名为 <white>spawn_wall</white> 的假方块组</gray>"
  icon: TNT
  rarity: epic
  x: 4
  y: 1
  show-toast: true
  announce-chat: true
  hidden: false
  trigger:
    type: fake_block_bomb_break
    id: spawn_wall
```

## 触发规则

- 必须是 YearningWorldFakeBlocks 自己的专用爆炸物
- 必须成功命中并破坏目标组
- 普通 TNT 不会触发
- 炸偏、未成功破坏时不会触发
- `id` 按组名匹配

## 接入说明

成就插件会监听 YearningWorldFakeBlocks 抛出的 `FakeBlockBombBreakSuccessEvent`，并把事件中的组名作为触发目标。

如果你的组名是 `spawn_wall`，那成就配置里的 `trigger.id` 也就写 `spawn_wall`。

<RandomPig />
