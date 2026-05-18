# 成就页面文件

每个 `advancements/*.yml` 文件对应一个独立的成就页面。

## 页面头部 `page`

```yaml
page:
  namespace: my_page          # 页面命名空间（唯一）
  background: minecraft:textures/block/obsidian.png
  auto-show-tab: true
  auto-grant-root: true
  show-toast-to-team: false
  announce-chat-only-to-team: false
```

页面级设置会覆盖 `config.yml` 中的全局设置。

## 成就列表 `advancements`

```yaml
advancements:
  <成就ID>:
    # 见"成就字段参考"
```

每个键名即为该成就在本页面内的 ID。

<RandomPig />
