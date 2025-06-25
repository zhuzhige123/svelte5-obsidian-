import { Plugin } from "obsidian";
import { ExampleView, VIEW_TYPE_EXAMPLE } from "./views/ExampleView";
import { Svelte5FeaturesView, VIEW_TYPE_SVELTE5_FEATURES } from "./views/Svelte5FeaturesView";
import "virtual:uno.css";

interface MyPluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
	mySetting: "default",
};

export default class MyPlugin extends Plugin {
	settings!: MyPluginSettings;

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	async onload() {
		await this.loadSettings();

		// Register views
		this.registerView(VIEW_TYPE_EXAMPLE, (leaf) => new ExampleView(leaf));
		this.registerView(VIEW_TYPE_SVELTE5_FEATURES, (leaf) => new Svelte5FeaturesView(leaf));

		// Add ribbon icons
		this.addRibbonIcon("dice", "Open Example View", () => {
			this.activateView(VIEW_TYPE_EXAMPLE);
		});

		this.addRibbonIcon("sparkles", "Open Svelte 5 Features", () => {
			this.activateView(VIEW_TYPE_SVELTE5_FEATURES);
		});

		// Add commands
		this.addCommand({
			id: "open-example-view",
			name: "Open Example View",
			callback: () => {
				this.activateView(VIEW_TYPE_EXAMPLE);
			}
		});

		this.addCommand({
			id: "open-svelte5-features",
			name: "Open Svelte 5 Features",
			callback: () => {
				this.activateView(VIEW_TYPE_SVELTE5_FEATURES);
			}
		});
	}

	onunload() {
		console.log("Unloading plugin");
	}

	async activateView(viewType: string) {
		this.app.workspace.detachLeavesOfType(viewType);

		await this.app.workspace.getRightLeaf(false).setViewState({
			type: viewType,
			active: true,
		});

		this.app.workspace.revealLeaf(
			this.app.workspace.getLeavesOfType(viewType)[0],
		);
	}
}
