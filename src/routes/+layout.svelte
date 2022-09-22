<script>
  import { page } from "$app/stores";
  import Header from "$lib/comps/Header.svelte";
  import "../app.css";
  import Transition from "$lib/comps/Transition.svelte";
</script>

<Header />
<Transition url={$page.url}>
  <slot />
</Transition>
