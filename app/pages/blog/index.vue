<script setup lang="ts">
const route = useRoute();
const { data } = await useAsyncData(route.path, () => {
  return queryCollection("blog")
    .order("date", "DESC")
    .where("published", "=", true)
    .all();
});
</script>
<template>
  <div v-if="data" class="grow flex flex-col w-full">
    <div v-if="data.length < 1">Empty</div>
    <div v-else class="mb-20 mt-12">
      <h2 class="text-2xl font-semibold">Things I've published</h2>
      <p></p>
    </div>
    <ul class="flex flex-col gap-8">
      <li v-for="item in data">
        <NuxtLink :to="item.path">
          <div
            class="p-4 flex flex-col gap-1 border-l-2 border-stone-700 hover:border-emerald-500 appearance-none hover:brightness-120 bg-stone-900"
          >
            <span
              class="mb-2 uppercase font-medium tracking-wide text-sm text-stone-400"
            >
              {{ item.date }}</span
            >
            <h3 class="text-lg font-medium">
              {{ item.title }}
            </h3>
            <p class="text-stone-400 truncate">
              {{ item.description }}
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
  <div v-else>no thing found</div>
</template>
