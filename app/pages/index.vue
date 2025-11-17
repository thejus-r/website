<script setup lang="ts">
import Github from "~/components/Icon/Github.vue";
import LinkedIn from "~/components/Icon/LinkedIn.vue";
const data = [
  {
    name: "Github",
    icon: Github,
  },
  {
    name: "LinkedIn",
    icon: LinkedIn,
  },
];
</script>
<template>
  <div cl flex-ass="grow flex flex-col w-full">
    <div class="grow mt-64">
      <div class="flex flex- gap-2 items-baseline">
        <h2 class="text-2xl font-semibold">Thejus Rajendran</h2>
        <span class="text-sm text-stone-500 font-mono"></span>
      </div>
      <div
        class="flex text-lg flex-col gap-2 mt-8 leading-leading-7 text-pretty"
      >
        <p>
          I'm a
          <span
            class="underline underline-offset-2 font-semibold text-emerald-400"
            >software engineer</span
          >, who loves making things and having lots of projects going.
        </p>
        <p>
          I'm also a creative and used to be a product designer at a Studio, but
          I've gladly left that life far behind me.
        </p>
      </div>
      <div class="mt-20">
        <span
          class="text-xs uppercase font-semibold tracking-wide text-emerald-400"
          >Find me on</span
        >
        <ul class="mt-4 grid grid-flow-col gap-2 w-fit">
          <li
            class="group transition-all duration-300 cursor-pointer"
            v-for="item in data"
          >
            <div
              class="px-2 flex transition-all group-hover:text-emerald-400 gap-2 items-center text-sm py-2 w-fit border border-stone-800"
            >
              <component
                :is="item.icon"
                class="transition-all w-4 h-4 fill-stone-200 group-hover:fill-emerald-400"
              />
              <span> {{ item.name }} </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
