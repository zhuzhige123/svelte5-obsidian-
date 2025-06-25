<script lang="ts">
  let svelteUrl = "https://svelte.dev/";
  let unocssUrl = "https://unocss.dev/";
  let input = $state("");
</script>

<div class="p-4 space-y-4">
  <h1 class="text-2xl font-bold">Svelte 5 Example View</h1>
  <p class="text-gray-700">
    This is an example of an Obsidian View made with 
    <a href={svelteUrl} class="text-blue-600 hover:underline">Svelte 5</a>
    and <a href={unocssUrl} class="text-blue-600 hover:underline">UnoCSS</a>.
  </p>

  <div class="border rounded-lg p-4">
    <h2 class="text-lg font-semibold mb-2">Svelte 5 Reactivity with $state()</h2>
    <div class="space-y-2">
      <label for="example-input" class="block text-sm font-medium">Input:</label>
      <input
        id="example-input"
        type="text"
        placeholder="Write here to see Svelte 5 reactivity..."
        maxlength="115"
        bind:value={input}
        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p class="text-sm">
        <strong>Output:</strong> 
        <span class="font-mono bg-gray-100 px-2 py-1 rounded">{input || "(empty)"}</span>
      </p>
    </div>
  </div>

  <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
    <h3 class="font-semibold text-blue-800 mb-2">✨ Svelte 5 Features Used:</h3>
    <ul class="text-sm text-blue-700 space-y-1">
      <li>• <code class="bg-blue-100 px-1 rounded">$state()</code> for reactive state management</li>
      <li>• Modern component instantiation with compatibility mode</li>
      <li>• UnoCSS for styling</li>
    </ul>
  </div>
</div>
