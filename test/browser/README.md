# Markdown Diff Viewer

这是一个简单的Markdown差异查看器，基于Vite和React构建。

## 功能

- 查看不同测试用例的Markdown差异
- 支持多种Markdown元素的差异展示（标题、列表、代码块、表格等）

## 开发

在项目根目录下运行以下命令启动开发服务器：

```bash
npm run dev
```

或者使用pnpm：

```bash
pnpm dev
```

## 构建

构建生产版本：

```bash
npm run build
```

预览构建结果：

```bash
npm run preview
```

## TypeScript

运行类型检查：

```bash
npm run type-check
```

本项目使用TypeScript进行开发，提供了完整的类型定义，增强了代码的可维护性和可靠性。

## 项目结构

- `index.html` - HTML入口文件
- `main.tsx` - React应用入口
- `App.tsx` - 主应用组件
- `testcases.ts` - 测试用例数据
- `types.ts` - TypeScript类型定义
- `vite.config.ts` - Vite配置文件
- `tsconfig.json` - TypeScript配置文件