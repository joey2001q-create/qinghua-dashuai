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

#### 3500词功能详情
位置: `src/app/play/vocab/`

**页面结构**
- `page.tsx` - 主学习页面
- `settings/page.tsx` - 设置页（统计、重置）
- `review/page.tsx` - 生词专项复习页

**组件**
- `components/FlashCard.tsx` - 3D翻转闪卡
- `components/MasteryButtons.tsx` - 掌握度按钮
- `components/StatsCard.tsx` - 统计卡片
- `components/StudyChart.tsx` - 热力图/曲线图

**核心逻辑**
- `lib/ebbinghaus.ts` - 艾宾浩斯遗忘曲线算法
- `lib/storage.ts` - 数据存储与进度管理
- `lib/stats.ts` - 统计计算

**功能特性**
- 学习节奏：预设(30/60/90/180天) + 自定义(5-300天)
- 学习模式：顺序学习、随机测试、只学生词、复习模式
- 三级掌握度：不认识(+0分)、模糊(+0.5分)、认识(+1分)
- 艾宾浩斯间隔：1→2→4→7→15→30天
- 生词本：手动收藏 + 自动加入，连续3次"认识"移出
- 统计：连续天数、掌握率、热力图、曲线图

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
