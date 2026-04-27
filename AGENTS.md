<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## 项目结构

### 边学边玩模块
- 入口页面: `src/app/play/page.tsx`
- 3500词功能: `src/app/play/vocab/page.tsx`
- 单词数据源: `vocabulary_with_examples.js` (项目根目录)
- 数据接口: `src/lib/vocab-words.ts`

### 导航栏
位置: `src/components/common/Header.tsx`
- 首页 `/`
- 冲刺 `/exam`
- 提分 `/target`
- 天地 `/world`
- 游戏 `/play`
- 智脑 `/brain`

### 卡片组件
- `MainCard`: 首页大卡片，带顶部彩色进度条
  - 支持颜色: `blue`, `orange`, `red`, `pink`, `green`, `purple`
  - 位置: `src/components/common/MainCard.tsx`
- `Card`: 通用小卡片，无顶部进度条
  - 位置: `src/components/common/Card.tsx`

### 游戏文件
位置: `game/` 目录
- `成语星际闯关.html` - 成语学习闯关游戏
- `数学计算大冒险.html` - 数学口算练习游戏
- `红楼梦人物关系.html` - 人物关系可视化图谱

## 数据导入规范

外部JS数据文件需使用命名导出:
```js
// vocabulary_with_examples.js
export const VOCABULARY = [...]
```

导入时使用命名导入:
```ts
// src/lib/vocab-words.ts
import { VOCABULARY } from '@/../vocabulary_with_examples.js'
```
