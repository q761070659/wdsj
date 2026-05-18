# WorldGuard 触发器

需要服务器安装 WorldGuard 插件。

## worldguard_region

玩家进入指定 WorldGuard 区域时触发。仅在跨方块移动时检测，性能开销较低。

```yaml
trigger:
  type: worldguard_region
  id: spawn_area
```

| 参数 | 说明 |
|------|------|
| `id` | WorldGuard 区域 ID |

::: tip 说明
触发器在玩家**首次进入**区域时触发，已在区域内移动不会重复触发。玩家离开后再次进入会再次触发。
:::

<RandomPig />
