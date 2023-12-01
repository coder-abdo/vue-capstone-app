<template>
  <div class="layout">
    <header
      class="h-14 text-xl flex items-center justify-center border-b border-gray-200 w-full"
    >
      <slot name="header" />
    </header>
    <aside class="border-r border-gray-200 h-screen py-2">
      <slot name="aside" />
    </aside>
    <main class="border-l border-gray-200 h-screen p-2">
      <slot name="main" />
    </main>
  </div>
</template>
<style scoped>
.layout {
  display: grid;
  grid-temmplate-columns: repeat(3, 1fr);
}
header {
  grid-column: 1 / 4;
}
aside {
  grid-column: 1 / 2;
}
main {
  grid-column: 2 / 4;
}
</style>
