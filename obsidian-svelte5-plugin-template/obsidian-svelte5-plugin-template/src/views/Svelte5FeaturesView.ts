import { ItemView } from "obsidian";

import Component from "../components/Svelte5Features.svelte";

export const VIEW_TYPE_SVELTE5_FEATURES = "svelte5-features-view";

export class Svelte5FeaturesView extends ItemView {
	component!: Component;

	getViewType() {
		return VIEW_TYPE_SVELTE5_FEATURES;
	}

	getDisplayText() {
		return "Svelte 5 Features";
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
