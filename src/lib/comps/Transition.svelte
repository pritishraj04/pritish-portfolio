<script>
  import { blur } from "svelte/transition";
  export let url;
</script>

{#key url}
  <div in:blur={{ duration: 550 }}>
    <slot />
  </div>
{/key}
