<svelte:options runes={true} />

<script lang="ts">
  // 使用$state声明响应式状态
  let svelteUrl = $state("https://svelte.dev/");
  let tailwindcssUrl = $state("https://unocss.dev/");
  let input = $state("");
  let clickCount = $state(0);
  
  // 使用$derived创建派生状态
  let inputLength = $derived(input.length);
  let maxLength = $state(115);
  let remainingChars = $derived(maxLength - inputLength);
  
  // 使用$effect创建副作用
  $effect(() => {
    if (clickCount > 0) {
      console.log(`按钮被点击了${clickCount}次`);
    }
  });
  
  // 事件处理函数
  function handleClick() {
    clickCount += 1;
  }
</script>

<div class="break-words p-4">
  <h1 class="text-xl font-bold mb-4">Svelte 5 示例</h1>
  <p class="mb-4">
    这是使用 <a href={svelteUrl} class="text-blue-500 hover:underline">Svelte 5</a>
    和 <a href={tailwindcssUrl} class="text-blue-500 hover:underline">UnoCSS</a> 制作的Obsidian视图示例。
  </p>

  <h2 class="text-lg font-bold mt-6 mb-2">Runes响应式</h2>
  <h3 class="text-md font-semibold mb-2">输入框</h3>
  <input
    type="text"
    placeholder="在此处输入"
    maxlength={maxLength}
    bind:value={input}
    class="border p-2 w-full mb-2 rounded"
  />
  <p class="mb-4">输入内容: {input}</p>
  <p class="text-sm text-gray-500">剩余字符: {remainingChars}/{maxLength}</p>
  
  <h3 class="text-md font-semibold mt-4 mb-2">事件处理</h3>
  <button 
    onclick={handleClick} 
    class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
  >
    点击我 ({clickCount})
  </button>
  
  {#if clickCount > 0}
    <p class="mt-2 text-green-600">你已经点击了按钮 {clickCount} 次!</p>
  {/if}
</div> 