import { ItemView } from "obsidian";

import Component from "../components/ExampleComponent.svelte";

export const VIEW_TYPE_EXAMPLE = "example-view";

export class ExampleView extends ItemView {
	component!: Component;

	getViewType() {
		return VIEW_TYPE_EXAMPLE;
	}

	getDisplayText() {
		return "Example view";
	}

	async onOpen() {
		this.component = new Component({
			target: this.contentEl,
		});
	}

	async onClose() {
		if (this.component) {
			this.component.$destroy();
		}
	}
}
