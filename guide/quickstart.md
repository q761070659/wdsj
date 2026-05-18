# 快速开始

## 创建第一个成就页面

在 `plugins/CustomAdvancements/advancements/` 下新建 `my_page.yml`：

```yaml
page:
  namespace: my_page
  background: minecraft:textures/block/stone.png
  auto-show-tab: true
  auto-grant-root: true

advancements:
  root:
    root: true
    title: "&6我的成就"
    description:
      - "&7欢迎来到成就系统"
    icon: NETHER_STAR
    rarity: legendary
    x: 0
    y: 0
    show-toast: false
    announce-chat: false

  first_join:
    parent: root
    title: "&a初来乍到"
    description:
      - "&7第一次加入服务器"
    icon: GRASS_BLOCK
    rarity: common
    x: 1
    y: 0
    trigger:
      type: player_join_first
```

保存后执行 `/customadv reload` 即可生效。

## 成就树布局

`x` / `y` 字段控制成就在 GUI 中的坐标位置（单位：格），`parent` 字段指定父成就 ID，根成就需设置 `root: true`。

## 假方块爆破触发器示例

如果你同时安装了 `YearningWorldFakeBlocks`，也可以直接把“成功炸掉指定假方块组”作为成就条件：

```yaml
fake_block_bomb_demo:
  parent: first_join
  title: "<light_purple>幻墙爆破手</light_purple>"
  description:
    - "<gray>用专用爆炸物炸掉 <white>spawn_wall</white> 这个假方块组</gray>"
  icon: TNT
  rarity: epic
  x: 2
  y: 1
  show-toast: true
  announce-chat: true
  trigger:
    type: fake_block_bomb_break
    id: spawn_wall
```

这里的 `id` 就是 YearningWorldFakeBlocks 里的组名。

<RandomPig />
