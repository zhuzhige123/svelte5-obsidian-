import { ItemView, WorkspaceLeaf } from "obsidian";
import { mount, unmount } from "svelte";

import Example from "../components/Example.svelte";
import SnippetsDemo from "../components/SnippetsDemo.svelte";

export const VIEW_TYPE_EXAMPLE = "svelte5-example-view";

export class ExampleView extends ItemView {
	exampleComponent: any;
	snippetsComponent: any;

	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

	getViewType() {
		return VIEW_TYPE_EXAMPLE;
	}

	getDisplayText() {
		return "Svelte 5 示例";
	}

	getIcon() {
		return "code";
	}

	async onOpen() {
		// 创建一个容器用于放置组件
		const container = this.contentEl.createDiv({ cls: "svelte5-container" });
		
		// 使用Svelte 5的mount函数挂载组件
		this.exampleComponent = mount(Example, {
			target: container.createDiv({ cls: "example-component" })
		});
		
		// 添加一个分隔线
		container.createEl("hr", { cls: "my-4" });
		
		// 挂载Snippets示例组件
		this.snippetsComponent = mount(SnippetsDemo, {
			target: container.createDiv({ cls: "snippets-demo-component" }),
			props: {
				items: ["Obsidian", "Svelte 5", "Runes", "Snippets", "UnoCSS"]
			}
		});
	}

	async onClose() {
		// 在Svelte 5中，使用unmount卸载组件
		if (this.exampleComponent) {
			try {
				unmount(this.exampleComponent);
			} catch (e) {
				console.error("Error unmounting component:", e);
			}
		}
		
		if (this.snippetsComponent) {
			try {
				unmount(this.snippetsComponent);
			} catch (e) {
				console.error("Error unmounting component:", e);
			}
		}
	}
} 