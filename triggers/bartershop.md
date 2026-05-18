# BarterShop 触发器

需要服务器安装 BarterShop 插件，并确保本插件能读取 `bartershop-1.0.0.jar` 中的 API。

这 3 个触发器都基于 **玩家在某个商店某个条目上的累计次数**。

`id` 的格式统一为：

```text
<shopId>:<entryId>
```

例如：

```text
starter:copper_to_emerald
```

## bartershop_trade_success

指定商店条目的**累计成功交易次数**达到要求时触发。

```yaml
trigger:
  type: bartershop_trade_success
  id: starter:copper_to_emerald
  count: 10
```

上例表示：玩家在 `starter` 商店的 `copper_to_emerald` 条目上累计成功 10 次后触发。

更多例子：

```yaml
trigger:
  type: bartershop_trade_success
  id: starter:iron_to_gold
  count: 50
```

```yaml
trigger:
  type: bartershop_trade_success
  id: daily_shop:apple_bundle
  count: 1
```

## bartershop_trade_fail

指定商店条目的**累计失败交易次数**达到要求时触发。

```yaml
trigger:
  type: bartershop_trade_fail
  id: starter:copper_to_emerald
  count: 3
```

更多例子：

```yaml
trigger:
  type: bartershop_trade_fail
  id: black_market:unstable_trade
  count: 5
```

```yaml
trigger:
  type: bartershop_trade_fail
  id: starter:cheap_lottery
  count: 20
```

## bartershop_trade_attempt

指定商店条目的**累计尝试交易次数**达到要求时触发。

```yaml
trigger:
  type: bartershop_trade_attempt
  id: starter:copper_to_emerald
  count: 20
```

更多例子：

```yaml
trigger:
  type: bartershop_trade_attempt
  id: starter:iron_to_gold
  count: 100
```

```yaml
trigger:
  type: bartershop_trade_attempt
  id: event_shop:token_box
  count: 10
```

## 说明

- `count` 读取的是 BarterShop 提供的累计计数，不是本插件额外单独统计的一份数据。
- 如果玩家以前已经有历史交易记录，那么下一次对应事件触发时，会按最新累计值判断是否达成。
- 这类触发器最适合做单步累计目标；如果你要做复杂顺序链，尽量避免对同一个 `shopId:entryId` 重复使用多段累计阈值。
