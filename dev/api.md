# API 概览

CustomAdvancements 目前通过 `AdvancementService` 提供内部 API，可在其他插件中通过 Bukkit 服务定位器调用。

## 获取服务

```java
AdvancementService service = plugin.getAdvancementService();
```

## 主要方法

| 方法 | 说明 |
|------|------|
| `grantAdvancement(Player, String pageNs, String advId)` | 授予玩家成就 |
| `revokeAdvancement(Player, String pageNs, String advId)` | 撤销玩家成就 |
| `hasAdvancement(Player, String pageNs, String advId)` | 检查玩家是否已获得成就 |
| `reloadAll()` | 重载所有成就配置 |

<RandomPig />
