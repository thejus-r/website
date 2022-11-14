<script>
  import { routes } from "../../config/routes"
  import { slide, fade, fly } from "svelte/transition"
  import { quintInOut } from "svelte/easing"
</script>

<div
  transition:fade
  class=" bg-stone-100 absolute top-0 left-0 z-20 flex flex-col w-screen h-screen pt-24 text-center"
>
  <ul
    transition:fly={{
      duration: 1000,
      y: -500,
      opacity: 0,
      easing: quintInOut,
    }}
  >
    {#each routes as route}
      <li class="mt-8">
        <a href={route.href}>{route.name}</a>
      </li>
    {/each}
    <li class="mt-8 font-bold">
      <a href="mailto:thejusr1999@gmail.com">Hire Me!</a>
    </li>
  </ul>
</div>
