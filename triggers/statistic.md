# Statistic 触发器

基于 Bukkit / Paper 的玩家原版统计系统。

需要使用：

```yaml
trigger:
  type: player_statistic
  id: <统计键>
  count: <目标累计值>
```

## id 格式

### 1. 无子类型统计

直接写统计名的小写形式：

```yaml
trigger:
  type: player_statistic
  id: jump
  count: 1000
```

常见示例：
- `jump`
- `deaths`
- `play_one_minute`
- `walk_one_cm`

更多例子：

```yaml
trigger:
  type: player_statistic
  id: deaths
  count: 10
```

```yaml
trigger:
  type: player_statistic
  id: play_one_minute
  count: 72000
```

```yaml
trigger:
  type: player_statistic
  id: walk_one_cm
  count: 100000
```

### 2. 方块 / 物品统计

格式：

```text
<statistic>:<material>
```

示例：

```yaml
trigger:
  type: player_statistic
  id: mine_block:stone
  count: 256
```

```yaml
trigger:
  type: player_statistic
  id: use_item:diamond_sword
  count: 50
```

```yaml
trigger:
  type: player_statistic
  id: break_item:iron_pickaxe
  count: 3
```

```yaml
trigger:
  type: player_statistic
  id: craft_item:bread
  count: 32
```

### 3. 实体统计

格式：

```text
<statistic>:<entity_type>
```

示例：

```yaml
trigger:
  type: player_statistic
  id: kill_entity:zombie
  count: 30
```

```yaml
trigger:
  type: player_statistic
  id: entity_killed_by:skeleton
  count: 10
```

```yaml
trigger:
  type: player_statistic
  id: kill_entity:warden
  count: 1
```

## 说明

- 统计值使用的是玩家当前**累计统计值**。
- 只要对应 statistic 再次变化，插件就会用最新累计值判断是否达成。
- `id` 建议全部使用小写。
- 无子类型统计直接写 `jump` 这类名字；带子类型统计写成 `mine_block:stone`、`kill_entity:zombie` 这种格式。
- 这类触发器非常适合配合 `count` 使用。
