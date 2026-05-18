# 全局配置 config.yml

```yaml
settings:
  namespace: customadv                        # 全局命名空间前缀
  tab-background: minecraft:textures/block/deepslate.png  # 默认标签页背景
  auto-show-tab: true                         # 自动显示成就标签页
  auto-grant-root: true                       # 自动授予根成就
  show-toast-to-team: false                   # Toast 仅显示给队伍成员
  announce-chat-only-to-team: false           # 聊天公告仅发给队伍
  use-custom-toast-on-grant: true             # 使用自定义 Toast 样式
  custom-toast-title: "&6[成就达成] &f%title%"  # Toast 标题格式，%title% 为成就名
  custom-toast-frame-by-rarity: true          # Toast 框样式跟随稀有度
```

## 字段说明

| 字段 | 类型 | 说明 |
|------|------|------|
| `namespace` | String | 全局命名空间，影响成就 ID 前缀 |
| `tab-background` | String | 成就 GUI 背景贴图路径 |
| `auto-show-tab` | Boolean | 玩家加入时自动打开成就标签页 |
| `auto-grant-root` | Boolean | 自动授予每个页面的根成就 |
| `show-toast-to-team` | Boolean | Toast 弹窗是否只对队伍可见 |
| `announce-chat-only-to-team` | Boolean | 聊天公告是否只对队伍可见 |
| `use-custom-toast-on-grant` | Boolean | 启用自定义 Toast 替代原版 |
| `custom-toast-title` | String | 自定义 Toast 标题，支持 `%title%` 占位符和颜色代码 |
| `custom-toast-frame-by-rarity` | Boolean | Toast 框类型根据稀有度自动选择 |

<RandomPig />
