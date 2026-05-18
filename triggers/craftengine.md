# CraftEngine 触发器

需要服务器安装 CraftEngine 插件。

## ce_block_place / ce_block_break / ce_block_interact

```yaml
trigger:
  type: ce_block_place   # 或 ce_block_break / ce_block_interact
  id: craftengine:example_block
```

## ce_furniture_place / ce_furniture_break / ce_furniture_interact

```yaml
trigger:
  type: ce_furniture_place   # 或 ce_furniture_break / ce_furniture_interact
  id: craftengine:example_furniture
```

## ce_item_get

获得指定 CraftEngine 物品时触发。

```yaml
trigger:
  type: ce_item_get
  id: craftengine:example_item
```

| 参数 | 说明 |
|------|------|
| `id` | CraftEngine 物品/方块/家具的命名空间 ID，或直接填写命名空间名作为通配 |

## 命名空间通配

如果你不想只匹配一个具体 CE 对象，也可以直接写命名空间。

```yaml
trigger:
  type: ce_block_break
  id: craftengine
```

上面的写法会匹配所有 `craftengine:*` 的 CE 方块。

同样也适用于：
- `ce_block_place`
- `ce_block_interact`
- `ce_furniture_place` / `ce_furniture_break` / `ce_furniture_interact`
- `ce_item_get`

<RandomPig />
