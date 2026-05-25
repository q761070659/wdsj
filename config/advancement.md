# 成就字段参考

## 完整示例

```yaml
stone_age:
  parent: first_join
  root: false
  title: "<yellow>石器时代</yellow>"
  description:
    - "<gray>挖出第一块石头</gray>"
    - "<gray>当前进度：<white>%adv_progress_line%</white></gray>"
  icon: STONE_PICKAXE
  icon-ce: craftengine:item
  rarity: uncommon
  x: 2
  y: 0
  show-toast: true
  announce-chat: false
  hidden: false
  repeatable: false
  daily-limit: 0
  toast:
    enabled: true
    title: "<gold>石器时代</gold>"
    icon: STONE_PICKAXE
  rewards:
    commands:
      - "give %player% diamond 1"
  trigger:
    type: vanilla_advancement
    id: minecraft:story/mine_stone
  triggers:
    - type: block_break
      id: STONE
```

## 字段说明

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `root` | Boolean | 否 | 根成就设为 `true` |
| `parent` | String | 否 | 父成就 ID（根成就不填） |
| `title` | String | 是 | 成就标题，支持 MiniMessage 和 `&` 颜色代码 |
| `description` | List | 是 | 成就描述，每行一条，支持 MiniMessage / `&` 颜色代码和进度占位符 |
| `icon` | String | 是 | 原版 Material 名称 |
| `icon-ce` | String | 否 | CraftEngine 物品 ID，覆盖 `icon` |
| `rarity` | String | 是 | 稀有度，见[稀有度系统](/config/rarity) |
| `x` | Integer | 是 | GUI 横坐标 |
| `y` | Integer | 是 | GUI 纵坐标 |
| `show-toast` | Boolean | 否 | 达成时显示 Toast 弹窗 |
| `announce-chat` | Boolean | 否 | 达成时在聊天栏公告 |
| `hidden` | Boolean | 否 | 未达成时隐藏成就 |
| `trigger` | Object | 否 | 单个触发器配置，见[触发器概览](/triggers/overview) |
| `triggers` | List | 否 | 多触发器列表（满足任意一个即触发） |
| `repeatable` | Boolean | 否 | 是否可重复达成，默认 `false` |
| `daily-limit` | Integer | 否 | 每日最多触发次数，`0` 表示不限制 |
| `toast.enabled` | Boolean | 否 | 是否显示自定义 Toast |
| `toast.title` | String | 否 | 自定义 Toast 标题 |
| `toast.icon` | String | 否 | 自定义 Toast 图标（Material 名） |
| `rewards.commands` | List | 否 | 达成时执行的命令列表，支持 `%player%` 占位符 |

## 描述进度占位符

`description` 可以使用插件内置的动态进度占位符，用来显示玩家个人的当前成就进度。它对所有触发器通用，不需要安装 PlaceholderAPI。

```yaml
monster_hunter:
  parent: root
  title: "&c怪物猎手"
  description:
    - "&7击杀指定怪物"
    - "&7当前进度：&f%adv_progress_line%"
  icon: IRON_SWORD
  rarity: rare
  x: 1
  y: 0
  trigger:
    type: mythicmobs_kill
    id: SkeletonKing
    count: 100
```

上面的简介会按玩家实际进度显示为 `0/100`、`1/100`、`2/100`……直到 `100/100`。

| 占位符 | 说明 |
|--------|------|
| `%adv_progress%` | 当前步骤已完成数量 |
| `%adv_required%` | 当前步骤目标数量 |
| `%adv_progress_line%` | `当前/目标`，例如 `0/100` |
| `%adv_step%` | 当前步骤序号，从 `1` 开始 |
| `%adv_steps%` | 总步骤数 |

补充规则：

- 单触发器成就显示该触发器的当前进度。
- 多步骤 `triggers` 成就显示当前正在推进的步骤。
- `triggers-mode: unordered` 会显示第一个未完成步骤。
- 成就已完成后显示满进度，例如 `100/100`。
- 没写 `count` 或 `count: 1` 时，目标会显示为 `1`。

> `fake_block_bomb_break` 这类需要目标的触发器，同样通过 `trigger.id` 指定目标值。对于假方块爆破触发器，这个 `id` 就是 YearningWorldFakeBlocks 里的组名。对于 `lands_area_enter` / `lands_area_leave`，`id` 对应 Lands 中的区域名称。

<RandomPig />
