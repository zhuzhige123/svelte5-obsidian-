<svelte:options runes={true} />

<script lang="ts">
  // 使用$props接收属性
  let { items = ["项目1", "项目2", "项目3"] } = $props();
  
  // 使用$state声明响应式状态
  let selectedItem = $state<string | null>(null);
  
  // 处理项目点击
  function handleItemClick(item: string) {
    selectedItem = item;
  }
</script>

<div class="p-4 border rounded">
  <h2 class="text-lg font-bold mb-4">Svelte 5 Snippets 示例</h2>
  
  {#snippet itemTemplate(item: string, isSelected: boolean)}
    <div 
      class="p-2 my-1 border rounded cursor-pointer {isSelected ? 'bg-blue-100 border-blue-500' : 'hover:bg-gray-100'}"
      onclick={() => handleItemClick(item)}
      role="button"
      tabindex="0"
      onkeypress={(e) => e.key === 'Enter' && handleItemClick(item)}
    >
      {item}
      {#if isSelected}
        <span class="ml-2 text-blue-500">✓</span>
      {/if}
    </div>
  {/snippet}
  
  <div class="mb-4">
    <h3 class="font-semibold mb-2">项目列表</h3>
    {#each items as item}
      {@render itemTemplate(item, item === selectedItem)}
    {/each}
  </div>
  
  {#if selectedItem}
    <div class="mt-4 p-3 bg-gray-100 rounded">
      <p>当前选择: <strong>{selectedItem}</strong></p>
    </div>
  {:else}
    <div class="mt-4 p-3 bg-gray-100 rounded text-gray-500">
      <p>请选择一个项目</p>
    </div>
  {/if}
</div> 