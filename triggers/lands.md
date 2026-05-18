# Lands 触发器

## lands_area_enter

当玩家进入 Lands 领地中的任意区域时触发。

## lands_area_leave

当玩家离开 Lands 领地中的任意区域时触发。

## lands_first_enter

当玩家首次进入某个 Land（领地）时触发。每个玩家对每个领地只会触发一次，记录会持久化保存。

## 依赖

- Lands 插件

## 基础写法

```yaml
trigger:
  type: lands_area_enter
  id: spawn_area
```

```yaml
trigger:
  type: lands_first_enter
  id: 我的领地
```

## 参数说明

| 字段 | 说明 |
|------|------|
| `type` | `lands_area_enter`、`lands_area_leave` 或 `lands_first_enter` |
| `id` | `lands_area_enter/leave` 对应区域名称（Area Name），`lands_first_enter` 对应领地名称（Land Name） |

## 示例

### 进入区域

```yaml
lands_enter_demo:
  parent: root
  title: "<green>领地探索者</green>"
  description:
    - "<gray>进入名为 <white>spawn_area</white> 的区域</gray>"
  icon: MAP
  rarity: common
  x: 5
  y: 2
  show-toast: true
  announce-chat: false
  hidden: false
  trigger:
    type: lands_area_enter
    id: spawn_area
```

### 首次进入领地

```yaml
lands_first_visit:
  parent: root
  title: "<gold>初次造访</gold>"
  description:
    - "<gray>第一次踏入 <white>王城</white> 领地</gray>"
  icon: COMPASS
  rarity: uncommon
  x: 6
  y: 2
  show-toast: true
  announce-chat: true
  hidden: false
  trigger:
    type: lands_first_enter
    id: 王城
```

## 触发规则

- 需要服务器安装 Lands 插件
- `lands_area_enter` / `lands_area_leave` 的 `id` 对应 Lands 管理界面中显示的区域名称（Area Name）
- `lands_first_enter` 的 `id` 对应领地名称（Land Name），每个玩家对每个领地只触发一次
- 首次进入记录持久化保存在 `progress/<uuid>.yml` 中
- 支持 `repeatable` 和 `daily-limit` 配置（但 `lands_first_enter` 本身就是一次性的，通常不需要 repeatable）

## 接入说明

成就插件会监听 Lands API 的 `PlayerAreaEnterEvent` 和 `PlayerAreaLeaveEvent`：
- `LANDS_AREA_ENTER` / `LANDS_AREA_LEAVE` 使用 `Area.getName()` 作为触发目标
- `LANDS_FIRST_ENTER` 使用 `Area.getLand().getName()` 作为触发目标，并通过 `PlayerProgressStore` 追踪是否为首次访问

<RandomPig />
