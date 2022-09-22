<script>
  import { scale } from "svelte/transition";
</script>

<div class="loading" out:scale={{ duration: 260 }}>
  <div class="loader">
    <h2 class="logo">PR</h2>
  </div>
</div>

<style>
  .loading {
    position: fixed;
    z-index: 9999;
    pointer-events: none;
    top: 0;
    background-color: var(--clr-bg-1);
    width: 100%;
    height: 100vh;
  }
  .loader {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--clr-bg-2);
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    animation: moveLoader 1s infinite alternate;
  }
  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: clamp(1.5rem, 2.9vw, 4.5rem);
    font-weight: 700;
    margin-block: auto;
    color: var(--clr-link-1);
  }
  @keyframes moveLoader {
    from {
      width: 10rem;
      height: 10rem;
    }
    to {
      width: 9rem;
      height: 9rem;
    }
  }
</style>
