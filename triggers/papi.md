# PlaceholderAPI 触发器

需要服务器安装 PlaceholderAPI 插件。

## papi_check

定期轮询 PlaceholderAPI 占位符，当表达式为 `true` 时触发。

推荐写法是把完整条件写到 `id`：

```yaml
trigger:
  type: papi_check
  id: "%player_level%>=30"
```

也兼容编辑器里的三段式写法：

```yaml
trigger:
  type: papi_check
  placeholder: "%player_level%"
  operator: ">="
  value: "30"
```

| 参数 | 说明 |
|------|------|
| `id` | 完整 PAPI 条件表达式，例如 `%player_level%>=30` |
| `placeholder` | PAPI 占位符，三段式写法使用 |
| `operator` | 比较运算符：`=` `==` `!=` `>` `>=` `<` `<=` |
| `value` | 比较目标值，三段式写法使用 |

数字会按数值比较；非数字只支持 `=` / `==` / `!=` 字符串比较。轮询间隔由插件内部控制，满足条件后自动授予成就。

<RandomPig />
