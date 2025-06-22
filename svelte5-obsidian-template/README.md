# Svelte 5 Obsidian 插件模板

一个使用Svelte 5构建Obsidian插件的现代化开发模板，集成了Runes响应式系统、Snippets功能、TypeScript和UnoCSS。

## 特性

- 🔥 **Svelte 5** - 使用最新的Svelte 5框架及其Runes响应式系统
- 🧩 **Snippets** - 使用Svelte 5的新Snippets功能替代传统的Slots
- 🛠️ **TypeScript** - 完整的类型支持，提高开发效率和代码质量
- 🎨 **UnoCSS** - 类似Tailwind的实用优先CSS框架，无需配置
- ⚡ **Vite** - 快速的开发体验和热重载
- 📦 **开箱即用** - 预配置的开发环境，立即开始构建

## 快速开始

1. 克隆此仓库
   ```bash
   git clone https://github.com/yourusername/svelte5-obsidian-template.git your-plugin-name
   cd your-plugin-name
   ```

2. 安装依赖
   ```bash
   npm install
   ```

3. 开发模式
   ```bash
   npm run dev
   ```

4. 生产构建
   ```bash
   npm run build
   ```

## 项目结构

```
svelte5-obsidian-template/
├── public/                 # 静态资源
│   ├── manifest.json       # 插件清单
│   └── versions.json       # 版本兼容信息
├── src/                    # 源代码
│   ├── components/         # Svelte组件
│   │   ├── Example.svelte  # 示例组件，展示Runes功能
│   │   └── SnippetsDemo.svelte # 示例组件，展示Snippets功能
│   ├── views/              # Obsidian视图
│   │   └── ExampleView.ts  # 示例视图
│   └── main.ts             # 插件主入口
├── svelte.config.js        # Svelte配置
├── tsconfig.json           # TypeScript配置
├── uno.config.ts           # UnoCSS配置
└── vite.config.ts          # Vite构建配置
```

## Svelte 5 新特性

### Runes

Runes是Svelte 5中的一个核心新特性，提供了更明确的响应式状态管理方式：

```svelte
<script>
  // 声明响应式状态
  let count = $state(0);
  
  // 派生状态
  let doubled = $derived(count * 2);
  
  // 副作用
  $effect(() => {
    console.log(`计数更新为: ${count}`);
  });
</script>
```

### Snippets

Snippets是Svelte 5中替代Slots的新功能，提供了更灵活的UI组合方式：

```svelte
<!-- 定义一个snippet -->
{#snippet item(text)}
  <div class="item">{text}</div>
{/snippet}

<!-- 使用snippet -->
{@render item("Hello World")}
```

## 许可证

MIT 