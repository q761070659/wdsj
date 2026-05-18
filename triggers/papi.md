# PlaceholderAPI 触发器

需要服务器安装 PlaceholderAPI 插件。

## papi_check

定期轮询 PlaceholderAPI 占位符，当表达式为 `true` 时触发。

```yaml
trigger:
  type: papi_check
  placeholder: "%player_level%"
  operator: ">="
  value: "30"
```

| 参数 | 说明 |
|------|------|
| `placeholder` | PAPI 占位符 |
| `operator` | 比较运算符：`==` `!=` `>` `>=` `<` `<=` |
| `value` | 比较目标值（字符串） |

轮询间隔由插件内部控制，满足条件后自动授予成就。

<RandomPig />
