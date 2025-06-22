import { Plugin } from "obsidian";
import { ExampleView, VIEW_TYPE_EXAMPLE } from "./views/ExampleView";
import "virtual:uno.css";

interface PluginSettings {
  mySetting: string;
}

const DEFAULT_SETTINGS: PluginSettings = {
  mySetting: "default",
};

export default class Svelte5Plugin extends Plugin {
  settings!: PluginSettings;

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  async onload() {
    console.log("Loading Svelte 5 plugin");
    
    await this.loadSettings();

    // 注册视图
    this.registerView(
      VIEW_TYPE_EXAMPLE,
      (leaf) => new ExampleView(leaf)
    );

    // 添加功能区图标
    this.addRibbonIcon("dice", "Open Svelte 5 Example", () => {
      this.activateView();
    });

    // 添加设置选项卡
    this.addSettingTab(new SettingsTab(this.app, this));
  }

  async onunload() {
    console.log("Unloading Svelte 5 plugin");
  }

  async activateView() {
    const { workspace } = this.app;
    
    // 如果视图已经打开，激活它
    const existingLeaf = workspace.getLeavesOfType(VIEW_TYPE_EXAMPLE)[0];
    if (existingLeaf) {
      workspace.revealLeaf(existingLeaf);
      return;
    }
    
    // 否则创建新视图
    const leaf = workspace.getLeaf("split", "vertical");
    await leaf.setViewState({
      type: VIEW_TYPE_EXAMPLE,
      active: true,
    });
    
    workspace.revealLeaf(leaf);
  }
}

// 设置选项卡
import { App, PluginSettingTab, Setting } from "obsidian";

class SettingsTab extends PluginSettingTab {
  plugin: Svelte5Plugin;

  constructor(app: App, plugin: Svelte5Plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();

    containerEl.createEl("h2", { text: "Svelte 5 Plugin Settings" });

    new Setting(containerEl)
      .setName("Example Setting")
      .setDesc("This is an example setting.")
      .addText((text) =>
        text
          .setPlaceholder("Enter your setting")
          .setValue(this.plugin.settings.mySetting)
          .onChange(async (value) => {
            this.plugin.settings.mySetting = value;
            await this.plugin.saveSettings();
          })
      );
  }
} 