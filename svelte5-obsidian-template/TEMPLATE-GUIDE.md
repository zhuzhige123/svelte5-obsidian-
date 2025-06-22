# Svelte 5 Obsidian 插件模板使用指南

## 简介

本模板提供了使用Svelte 5开发Obsidian插件的完整框架。它集成了最新的Svelte 5功能，包括Runes响应式系统和Snippets，以及TypeScript和UnoCSS，帮助您快速构建高质量的Obsidian插件。

## 开发环境设置

### 前提条件

- Node.js 18+
- npm 或 yarn
- 一个代码编辑器（推荐VSCode）

### 推荐的VSCode插件

- Svelte for VS Code
- TypeScript and JavaScript Language Features
- Biome

## 开发流程

### 1. 克隆模板并安装依赖

```bash
git clone https://github.com/yourusername/svelte5-obsidian-template.git your-plugin-name
cd your-plugin-name
npm install
```

### 2. 自定义插件信息

编辑 `public/manifest.json` 文件，更新以下字段：

```json
{
  "id": "你的插件ID",
  "name": "你的插件名称",
  "description": "插件描述",
  "author": "你的名字",
  "authorUrl": "你的网站URL"
}
```

### 3. 开发模式

```bash
npm run dev
```

这将启动开发服务器，并将插件构建到 `test-vault/.obsidian/plugins/svelte5-obsidian` 目录。

### 4. 在Obsidian中测试

1. 打开Obsidian
2. 点击"打开其它保险库"
3. 选择"打开文件夹作为保险库"
4. 导航到项目中的 `test-vault` 文件夹并选择它
5. 启用社区插件
6. 启用您的插件

## 使用Svelte 5的Runes

Runes是Svelte 5中的一个核心新特性，提供了更明确的响应式状态管理方式。

### 基本用法

```svelte
<svelte:options runes={true} />

<script lang="ts">
  // 声明响应式状态
  let count = $state(0);
  
  // 派生状态
  let doubled = $derived(count * 2);
  
  // 副作用
  $effect(() => {
    console.log(`计数更新为: ${count}`);
  });
  
  // 组件属性
  let { title = "默认标题" } = $props();
  
  function increment() {
    count += 1;
  }
</script>
```

## 使用Snippets

Snippets是Svelte 5中替代Slots的新功能，提供了更灵活的UI组合方式。

### 基本用法

```svelte
<svelte:options runes={true} />

<script lang="ts">
  let { items } = $props<{ items: string[] }>();
</script>

<!-- 定义snippet -->
{#snippet itemTemplate(text, index)}
  <li>{index + 1}. {text}</li>
{/snippet}

<!-- 使用snippet -->
<ul>
  {#each items as item, i}
    {@render itemTemplate(item, i)}
  {/each}
</ul>
```

## 在Obsidian视图中使用Svelte组件

Svelte 5改变了组件的挂载方式，使用`mount`和`unmount`函数：

```typescript
import { ItemView } from "obsidian";
import { mount, unmount } from "svelte";
import MyComponent from "../components/MyComponent.svelte";

export class MyView extends ItemView {
  component: any;

  async onOpen() {
    this.component = mount(MyComponent, {
      target: this.contentEl,
      props: { 
        // 传递给组件的属性
        data: "示例数据"
      }
    });
  }

  async onClose() {
    unmount(this.component);
  }
}
```

## 构建与发布

### 生产构建

```bash
npm run build
```

这将生成优化的生产构建到 `build` 目录。

### 发布到Obsidian社区插件

1. 确保您的插件符合[Obsidian插件指南](https://docs.obsidian.md/Plugins/Releasing/Plugin+guidelines)
2. 创建一个GitHub仓库
3. 发布您的插件到[Obsidian插件目录](https://github.com/obsidianmd/obsidian-releases)

## 文件结构说明

- `public/` - 包含插件的静态资源
  - `manifest.json` - 插件清单
  - `versions.json` - 版本兼容信息
- `src/` - 源代码
  - `components/` - Svelte组件
  - `views/` - Obsidian视图
  - `main.ts` - 插件主入口
- `svelte.config.js` - Svelte配置
- `tsconfig.json` - TypeScript配置
- `uno.config.ts` - UnoCSS配置
- `vite.config.ts` - Vite构建配置 