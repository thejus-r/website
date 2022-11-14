<script>
  import { routes } from "../../config/routes"
  import MobileMenu from "./MobileMenu.svelte"
  import NavMenuButton from "./NavMenuButton.svelte"
  import { isNavOpen } from "../../sharedStore"
</script>

<nav
  class="flex z-30 bg-stone-100 text-base px-12 lg:px-20 items-center justify-between sticky top-0 left-0"
>
  <div class="font-medium py-10">
    <a href="/">Thejus Rajendran</a>
  </div>
  <div class="font-normal">
    <div class="lg:hidden">
      <NavMenuButton />
    </div>
    <ul class="hidden lg:flex space-x-16 items-center">
      {#each routes as route}
        <li class="nav-item">
          <a href={route.href}>{route.name}</a>
          <div class="text-underline" />
        </li>
      {/each}
      <li class="bg-stone-800 text-stone-50 px-4 py-2 rounded-xl font-bold">
        <a href="mailto:thejusr1999@gmail.com">Hire Me!</a>
      </li>
    </ul>
  </div>
</nav>
{#if $isNavOpen}
  <MobileMenu />
{/if}

<style>
  .text-underline {
    background: #000;
    width: 0%;
    height: 2px;
    position: relative;
    bottom: 0;
    transition: width 0.5s ease-in-out;
  }

  .nav-item:hover .text-underline {
    width: 100%;
  }
</style>
