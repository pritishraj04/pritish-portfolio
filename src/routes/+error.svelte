<script>
  import { page } from "$app/stores";
</script>

<main>
  <h1>{$page.status}</h1>
  {#if $page.status == 404}
    <h4>NOT FOUND</h4>
    <p>Seems like you are lost. Here take my hand</p>
    <a href="/">🤚</a>
  {:else}
    <p>error: {$page.error.message}</p>
  {/if}
</main>

<style>
  main {
    text-align: center;
  }
  main h1 {
    color: #c03f3f;
    font-weight: 800;
    font-size: clamp(2rem, 6vw, 10.25rem);
    margin-top: 2rem;
  }
  main h4 {
    font-weight: 700;
    font-size: clamp(0.8rem, 1.4vw, 3.25rem);
    margin-top: 0.5rem;
  }
  main p {
    display: inline;
    font-size: clamp(0.5rem, 1vw, 1.925rem);
    opacity: 0.6;
    margin-top: 1rem;
    max-width: 50rem;
    max-height: 20rem;
    overflow-y: auto;
    overflow-x: visible;
    margin-inline: auto;
  }
  main a {
    font-size: clamp(0.8rem, 1vw, 1.925rem);
    display: inline-block;
  }
</style>
