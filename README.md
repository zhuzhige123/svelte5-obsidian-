# Svelte 5 Obsidian 插件模板（基于https://github.com/emilio-toledo/obsidian-svelte-plugin升级而来）

# Obsidian Plugin Template with Svelte 5 and UnoCSS

A modern, production-ready template for creating Obsidian plugins using **Svelte 5** and **UnoCSS**. This template provides a solid foundation with the latest Svelte features, including runes, while maintaining compatibility with Obsidian's plugin environment.

## ✨ Features

- **Svelte 5 Integration**: Leverage the power of Svelte 5 with the new runes system (`$state()`, `$derived()`)
- **Obsidian Compatibility**: Uses compatibility mode to ensure proper functioning within Obsidian
- **UnoCSS Styling**: Utility-first CSS framework for rapid UI development
- **TypeScript Support**: Full TypeScript support with proper type definitions
- **Hot Reloading**: Fast development cycles with automatic reloading
- **Modern Build System**: Vite-powered build system with optimizations
- **Code Quality**: Biome for formatting and linting
- **Example Components**: Complete examples demonstrating Svelte 5 features

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org) (v18 or above)
- [Bun](https://bun.sh/) (recommended) or npm/yarn
- [Obsidian](https://obsidian.md/) for testing

### Installation

1. **Use this template** or clone the repository:
   ```bash
   git clone <your-repo-url>
   cd your-plugin-name
   ```

2. **Install dependencies**:
   ```bash
   bun install
   # or
   npm install
   ```

3. **Configure your plugin**:
   - Update `package.json` with your plugin details
   - Update `public/manifest.json` with your plugin metadata
   - Rename the plugin ID and name throughout the codebase

4. **Start development**:
   ```bash
   bun run dev
   # or
   npm run dev
   ```

5. **Enable in Obsidian**:
   - Open Obsidian Settings
   - Go to Community plugins
   - Enable your plugin from the installed plugins list

## 📁 Project Structure

```
├── src/
│   ├── components/          # Svelte components
│   │   ├── ExampleComponent.svelte
│   │   └── Svelte5Features.svelte
│   ├── views/              # Obsidian views
│   │   ├── ExampleView.ts
│   │   └── Svelte5FeaturesView.ts
│   └── main.ts             # Plugin entry point
├── public/
│   ├── manifest.json       # Plugin manifest
│   └── versions.json       # Version compatibility
├── package.json            # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Build configuration
├── uno.config.ts          # UnoCSS configuration
└── biome.json             # Code formatting rules
```

## 🎯 Svelte 5 Features

This template showcases several Svelte 5 features:

### Runes System
- **`$state()`**: Reactive state management
- **`$derived()`**: Computed values that update automatically
- **`$effect()`**: Side effects (use with caution in Obsidian)

### Example Usage
```svelte
<script lang="ts">
  let count = $state(0);
  let doubled = $derived(count * 2);
  
  function increment() {
    count++;
  }
</script>

<button onclick={increment}>
  Count: {count} (doubled: {doubled})
</button>
```

## 🔧 Obsidian Compatibility

This template uses Svelte 5 with compatibility mode to ensure proper functioning within Obsidian:

```typescript
// vite.config.ts
svelte({
  compilerOptions: {
    compatibility: {
      componentApi: 4
    }
  }
})
```

This allows you to:
- Use Svelte 5's new runes system
- Maintain compatibility with Obsidian's environment
- Use traditional component instantiation (`new Component()`)

## 📝 Available Scripts

- `bun run dev` - Start development with hot reloading
- `bun run build` - Build for production
- `bun run check` - Run TypeScript and Svelte checks
- `bun run format` - Format code with Biome
- `bun run lint` - Lint code with Biome

## 🎨 Styling with UnoCSS

This template uses UnoCSS for styling. You can use Tailwind-like utilities:

```svelte
<div class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
  <h2 class="text-lg font-semibold text-blue-800">Title</h2>
  <p class="text-blue-600">Content</p>
</div>
```

## 🚀 Deployment

### Development
The plugin automatically builds to `test-vault/.obsidian/plugins/your-plugin-name/` during development.

### Production
1. Run `bun run build`
2. Copy the `build/` folder contents to your vault's plugins directory
3. Or publish to the Obsidian Community Plugin store

## 🔍 Troubleshooting

### "lifecycle_function_unavailable" Error
This error occurs when Svelte 5's new component API conflicts with Obsidian's environment. This template solves this by:
- Using compatibility mode in Vite configuration
- Using traditional component instantiation
- Maintaining `$destroy()` method for cleanup

### Build Issues
- Clear dependencies: `rm -rf node_modules && bun install`
- Try manual build: `bunx vite build --mode production`
- Check TypeScript: `bun run check`

## 📚 Resources

- [Obsidian Plugin API](https://github.com/obsidianmd/obsidian-api)
- [Svelte 5 Documentation](https://svelte.dev/docs/svelte/overview)
- [UnoCSS Documentation](https://unocss.dev/)
- [Vite Documentation](https://vitejs.dev/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This template is available under the [MIT License](LICENSE).

---

## 🔄 Migration from Svelte 4

If you're migrating from Svelte 4:

1. **Update reactive declarations**: Replace `let count = 0` with `let count = $state(0)`
2. **Update computed values**: Replace `$: doubled = count * 2` with `let doubled = $derived(count * 2)`
3. **Component instantiation**: Keep using `new Component()` for Obsidian compatibility
4. **Effects**: Use `$effect()` sparingly and prefer reactive statements when possible

## 🎯 What's Included

### Example Components
- **ExampleComponent**: Basic Svelte 5 usage with `$state()`
- **Svelte5Features**: Advanced demo with `$state()`, `$derived()`, and interactive elements

### Obsidian Integration
- **Ribbon icons**: Quick access buttons in the sidebar
- **Commands**: Keyboard shortcuts and command palette integration
- **Views**: Custom views that integrate seamlessly with Obsidian

### Development Tools
- **Hot reloading**: Instant updates during development
- **TypeScript**: Full type safety and IntelliSense
- **Code quality**: Automated formatting and linting
- **Build optimization**: Efficient bundling for production

**Happy coding!** 🎉
