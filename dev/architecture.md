# 架构说明

## 模块结构

```
cn.narra.customadvancements/
├── CustomAdvancementsPlugin   # 插件入口，初始化各服务
├── command/                   # 指令处理
├── config/                    # 配置加载与模型
├── model/                     # 数据模型（成就、页面、奖励等）
├── rarity/                    # 稀有度枚举
├── service/                   # 核心业务逻辑
│   ├── AdvancementService     # 成就授予/撤销/查询
│   ├── PlayerProgressStore    # 玩家进度持久化
│   ├── VanillaTriggerListener # 原版事件监听
│   ├── CraftEngineTriggerListener
│   ├── MythicMobsTriggerListener
│   └── PapiCheckTask          # PAPI 轮询任务
├── trigger/                   # 触发器类型定义
└── util/                      # 工具类
```

## 数据流

1. 服务器启动 → `ConfigLoader` 读取 `config.yml` 和 `advancements/*.yml`
2. 构建 `AdvancementPage` 和 `AdvancementDefinition` 对象树
3. 通过 UltimateAdvancementAPI 注册成就到客户端
4. 事件触发 → 对应 Listener 调用 `AdvancementService.grantAdvancement()`
5. `PlayerProgressStore` 持久化进度
