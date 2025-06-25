import { defineConfig } from "unocss";
import extractorSvelte from "@unocss/extractor-svelte";

export default defineConfig({
	extractors: [extractorSvelte()],
});
