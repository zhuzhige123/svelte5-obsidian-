<script lang="ts">
  // Svelte 5 runes examples
  let count = $state(0);
  let name = $state("World");
  let items = $state([
    { id: 1, text: "Learn Svelte 5", completed: false },
    { id: 2, text: "Build Obsidian Plugin", completed: true },
    { id: 3, text: "Use Runes", completed: false }
  ]);

  // Derived state using $derived
  let greeting = $derived(`Hello, ${name}!`);
  let completedCount = $derived(items.filter(item => item.completed).length);
  let totalCount = $derived(items.length);

  function increment() {
    count++;
  }

  function decrement() {
    count--;
  }

  function toggleItem(id: number) {
    const item = items.find(item => item.id === id);
    if (item) {
      item.completed = !item.completed;
    }
  }

  function addItem() {
    const newId = Math.max(...items.map(item => item.id)) + 1;
    items.push({
      id: newId,
      text: `New item ${newId}`,
      completed: false
    });
  }
</script>

<div class="p-4 space-y-6">
  <h1 class="text-2xl font-bold text-center">Svelte 5 Features Demo</h1>
  
  <!-- State example -->
  <div class="border rounded-lg p-4">
    <h2 class="text-lg font-semibold mb-2">$state() - Reactive State</h2>
    <div class="flex items-center gap-2 mb-2">
      <button 
        onclick={decrement}
        class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
      >
        -
      </button>
      <span class="text-xl font-mono">{count}</span>
      <button 
        onclick={increment}
        class="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
      >
        +
      </button>
    </div>
    <p class="text-sm text-gray-600">Click the buttons to see reactive updates</p>
  </div>

  <!-- Derived state example -->
  <div class="border rounded-lg p-4">
    <h2 class="text-lg font-semibold mb-2">$derived() - Computed Values</h2>
    <div class="space-y-2">
      <input 
        bind:value={name}
        placeholder="Enter your name"
        class="w-full px-3 py-2 border rounded"
      />
      <p class="text-lg">{greeting}</p>
      <p class="text-sm text-gray-600">
        Tasks completed: {completedCount} / {totalCount}
      </p>
    </div>
  </div>

  <!-- Todo list example -->
  <div class="border rounded-lg p-4">
    <h2 class="text-lg font-semibold mb-2">Interactive Todo List</h2>
    <div class="space-y-2">
      {#each items as item (item.id)}
        <div class="flex items-center gap-2">
          <input 
            type="checkbox" 
            checked={item.completed}
            onchange={() => toggleItem(item.id)}
            class="rounded"
          />
          <span class:line-through={item.completed} class:text-gray-500={item.completed}>
            {item.text}
          </span>
        </div>
      {/each}
      <button 
        onclick={addItem}
        class="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Item
      </button>
    </div>
  </div>

  <!-- Info section -->
  <div class="border rounded-lg p-4 bg-blue-50">
    <h2 class="text-lg font-semibold mb-2">About This Demo</h2>
    <ul class="text-sm space-y-1">
      <li>• <code>$state()</code> creates reactive state variables</li>
      <li>• <code>$derived()</code> creates computed values that update automatically</li>
      <li>• All updates are automatically tracked and efficient</li>
      <li>• Compatible with Obsidian's plugin environment</li>
    </ul>
  </div>
</div>
