# 触发器概览

触发器定义成就的达成条件，配置在成就的 `trigger` 字段下。

```yaml
trigger:
  type: <触发器类型>
  # 其他参数因类型而异
```

## 触发器类型列表

| 类型 | 说明 | 依赖 |
|------|------|------|
| `vanilla_advancement` | 完成原版成就 | 无 |
| `player_join_first` | 首次加入服务器 | 无 |
| `player_death` | 玩家死亡 | 无 |
| `block_break` | 破坏原版方块 | 无 |
| `block_interact` | 与原版方块交互 | 无 |
| `offhand_swap` | 切换副手物品 | 无 |
| `ce_block_place` | 放置 CraftEngine 方块 | CraftEngine |
| `ce_block_break` | 破坏 CraftEngine 方块 | CraftEngine |
| `ce_block_interact` | 与 CraftEngine 方块交互 | CraftEngine |
| `ce_furniture_place` | 放置 CraftEngine 家具 | CraftEngine |
| `ce_furniture_break` | 破坏 CraftEngine 家具 | CraftEngine |
| `ce_furniture_interact` | 与 CraftEngine 家具交互 | CraftEngine |
| `ce_item_get` | 获得 CraftEngine 物品 | CraftEngine |
| `bartershop_trade_success` | 指定商店条目累计成功交易次数 | BarterShop |
| `bartershop_trade_fail` | 指定商店条目累计失败交易次数 | BarterShop |
| `bartershop_trade_attempt` | 指定商店条目累计尝试交易次数 | BarterShop |
| `player_statistic` | 玩家原版统计值达到指定累计次数 | 无 |
| `mythicmobs_kill` | 击杀 MythicMobs 怪物 | MythicMobs |
| `papi_check` | PlaceholderAPI 条件轮询 | PlaceholderAPI |
| `player_command` | 玩家执行指定命令 | 无 |
| `worldguard_region` | 进入 WorldGuard 区域 | WorldGuard |
| `fake_block_bomb_break` | 用 YearningWorldFakeBlocks 专用爆炸物成功破坏指定假方块组 | YearningWorldFakeBlocks |
| `craft_item` | 合成指定物品 | 无 |
| `fish_item` | 钓到指定物品 | 无 |
| `enchant_item` | 在附魔台附魔指定物品 | 无 |
| `lands_area_enter` | 进入 Lands 领地/区域 | Lands |
| `lands_area_leave` | 离开 Lands 领地/区域 | Lands |
| `lands_first_enter` | 首次进入 Lands 领地（按领地名称，每人每领地仅一次） | Lands |

## 多触发器补充说明

- `triggers` 默认是 **ordered** 模式，必须按列表顺序依次完成。
- 如果成就配置里写了 `triggers-mode: unordered`，那么列表中的步骤可以**任意顺序**完成，全部完成后才授予成就。
- 对于 CraftEngine / 原版成就这类使用 `namespace:id` 的触发器，现在也支持只写 `namespace` 作为命名空间通配，例如 `craftengine` 可以匹配 `craftengine:*` 下的全部内容。

<RandomPig />
