# 修道管理命令使用说明

## 打开界面

打开修道界面：

```text
/xiudao open
```

或：

```text
/xiudao gui
```

## 查看功法

查看所有功法 ID：

```text
/xiudao info
```

查看指定功法信息：

```text
/xiudao info 功法id
```

示例：

```text
/xiudao info cangtian
```

完整 ID 也可以：

```text
/xiudao info xiudao_passive:cangtian
```

## 解锁功法

给玩家解锁功法：

```text
/xiudao unlock 玩家名 功法id
```

示例：

```text
/xiudao unlock Yearning_World cangtian
```

完整 ID：

```text
/xiudao unlock Yearning_World xiudao_passive:cangtian
```

## 道行管理

查看自己的道行：

```text
/xiudao dao get
```

查看指定玩家道行：

```text
/xiudao dao get 玩家名
```

增加道行：

```text
/xiudao dao add 玩家名 数量
```

示例：

```text
/xiudao dao add Yearning_World 1000
```

设置道行：

```text
/xiudao dao set 玩家名 数量
```

示例：

```text
/xiudao dao set Yearning_World 5000
```

## 突破

玩家自己突破指定功法：

```text
/xiudao breakthrough 功法id
```

示例：

```text
/xiudao breakthrough cangtian
```

说明：

```text
突破会消耗道行。
玩家最多学习 100 个子节点。
达到 100 个后，需要先用遗忘符删除节点。
```

## 遗忘符

给予遗忘符：

```text
/give 玩家名 xiudao_passive:node_forget_token 数量
```

示例：

```text
/give Yearning_World xiudao_passive:node_forget_token 1
```

遗忘符作用：

```text
删除当前功法最后一个已学习子节点。
删除后不返还道行。
如果节点上有宝石，会自动取回。
```

## 宝石

给予 TaCZ 弹匣恢复宝石：

```text
/xiudao gem ammo_recovery 玩家名 数量
```

示例：

```text
/xiudao gem ammo_recovery Yearning_World 1
```

给予 TaCZ 装弹速度宝石：

```text
/xiudao gem reload_speed 玩家名 数量
```

示例：

```text
/xiudao gem reload_speed Yearning_World 1
```

## 重置玩家数据

重置指定玩家的修道数据：

```text
/xiudao reset 玩家名
```

示例：

```text
/xiudao reset Yearning_World
```

## 重载数据

重载功法数据：

```text
/xiudao reload
```

适用于手动修改功法配置后刷新。

## 调试属性

查看当前玩家修道属性统计：

```text
/xiudao debug stats
```

## 编辑命令

设置功法名称：

```text
/xiudao edit set 功法id name 新名称
```

设置功法描述：

```text
/xiudao edit set 功法id description 新描述
```

设置功法图标：

```text
/xiudao edit set 功法id icon 物品id
```

设置功法位置：

```text
/xiudao edit set 功法id pos x y
```

设置阶段消耗：

```text
/xiudao edit stage set-cost 功法id 阶段序号 消耗
```

给阶段添加属性：

```text
/xiudao edit stage add-attr 功法id 阶段序号 属性文本
```

示例：

```text
/xiudao edit stage add-attr cangtian 1 攻击伤害: 5
```

删除阶段属性：

```text
/xiudao edit stage remove-attr 功法id 阶段序号 属性序号
```

添加阶段：

```text
/xiudao edit stage add 功法id 境界 阶段 消耗
```

示例：

```text
/xiudao edit stage add cangtian 1 2 100
```
