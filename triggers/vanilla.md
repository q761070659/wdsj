# 原版触发器

## vanilla_advancement

完成指定原版成就时触发。

```yaml
trigger:
  type: vanilla_advancement
  id: minecraft:story/mine_stone
```

| 参数 | 说明 |
|------|------|
| `id` | 原版成就的命名空间 ID |

## player_join_first

玩家首次加入服务器时触发，无需额外参数。

```yaml
trigger:
  type: player_join_first
```

## player_death

玩家死亡时触发，无需额外参数。

```yaml
trigger:
  type: player_death
```

## block_break

破坏指定原版方块时触发。

```yaml
trigger:
  type: block_break
  id: DIAMOND_ORE
```

## block_interact

与指定原版方块交互时触发。

```yaml
trigger:
  type: block_interact
  id: CRAFTING_TABLE
```

## offhand_swap

切换副手物品时触发，无需额外参数。

```yaml
trigger:
  type: offhand_swap
```

## player_command

玩家执行指定命令时触发。

```yaml
trigger:
  type: player_command
  id: /spawn
```

| 参数 | 说明 |
|------|------|
| `id` | 命令字符串（可带或不带 `/` 前缀） |

## craft_item

合成指定物品时触发。

```yaml
trigger:
  type: craft_item
  id: diamond_sword
```

| 参数 | 说明 |
|------|------|
| `id` | Bukkit Material 名称（小写），如 `diamond_sword`、`cake` |

## fish_item

钓到指定物品时触发（仅在成功钓起物品时计数）。

```yaml
trigger:
  type: fish_item
  id: cod
  count: 10
```

| 参数 | 说明 |
|------|------|
| `id` | 钓到的物品 Material 名称（小写），如 `cod`、`salmon`、`enchanted_book` |

## enchant_item

在附魔台附魔时触发，按每个附魔效果分别计数。

```yaml
trigger:
  type: enchant_item
  id: sharpness
```

| 参数 | 说明 |
|------|------|
| `id` | 附魔效果的 key 名（小写），如 `sharpness`、`efficiency`、`unbreaking`、`fortune` |

<RandomPig />
