# 安装

## 环境要求

| 依赖 | 版本 | 必须 |
|------|------|------|
| Paper / Spigot | 1.21+ | 是 |
| Java | 21+ | 是 |
| UltimateAdvancementAPI | 3.0.0-beta-1+ | 是 |
| PlaceholderAPI | 任意 | 否 |
| CraftEngine | 任意 | 否 |
| MythicMobs | 5.x | 否 |
| WorldGuard | 7.x | 否 |

## 安装步骤

1. 将 `UltimateAdvancementAPI-Plugin-x.x.x.jar` 放入 `plugins/` 目录
2. 将 `custom-advancements-x.x.x.jar` 放入 `plugins/` 目录
3. 启动服务器，插件会在 `plugins/CustomAdvancements/` 生成默认配置
4. 编辑 `config.yml` 和 `advancements/` 下的成就文件
5. 执行 `/customadv reload` 热重载配置

## 目录结构

```
plugins/CustomAdvancements/
├── config.yml          # 全局设置
└── advancements/
    ├── example.yml     # 示例成就页面
    └── your_page.yml   # 自定义页面
```

<RandomPig />
