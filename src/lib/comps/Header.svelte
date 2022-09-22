<script>
  import { page } from "$app/stores";
  let x;
</script>

<svelte:window bind:innerWidth={x} />

<header>
  <div class="logo"><a href="/">PR</a></div>
  <a class="skip-to-content-link" href="#main"> Skip to content </a>
  <nav>
    <ul>
      <li>
        <a
          data-sveltekit-prefetch
          class:active={$page.url.pathname == "/about"}
          href="/about">about</a
        >
      </li>
      <li>
        <a
          data-sveltekit-prefetch
          class:active={$page.url.pathname.includes("/works")}
          href="/works">works</a
        >
      </li>
      {#if $page.url.pathname == "/contact" && x <= 540}
        <div />
      {:else}
        <li>
          <a data-sveltekit-prefetch href="/contact" class="cta">contact</a>
        </li>
      {/if}
    </ul>
  </nav>
</header>

<style>
  .skip-to-content-link {
    background: var(--clr-secondary-bg);
    height: 30px;
    left: 50%;
    padding: 8px;
    position: absolute;
    transform: translateY(-200%);
    transition: transform 0.3s;
  }

  .skip-to-content-link:focus {
    transform: translateY(0%);
  }
  header {
    display: flex;
    width: 80%;
  }
  header {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 75%;
  }
  @media only screen and (max-width: 425px) {
    header {
      max-width: 93%;
    }
  }
  @media only screen and (max-width: 1440px) {
    header {
      max-width: 85%;
    }
  }
  header ul {
    display: flex;
    align-items: center;
    min-height: 4.2rem;
    gap: 3rem;
  }
  @media only screen and (max-width: 540px) {
    header ul {
      gap: 0;
    }
  }
  @media only screen and (max-width: 540px) {
    header ul li {
      margin-right: 1.4rem;
    }
    header ul li:last-child {
      margin-right: 0;
    }
    header ul li:nth-last-child(2) {
      margin-right: 0;
    }
  }
  header ul li a {
    font-size: clamp(0.9rem, 1.6vw, 2.5rem);
    font-weight: 500;
  }
  header ul li a.active {
    font-weight: 600;
    text-decoration: underline;
  }
  .logo {
    font-size: clamp(1.5rem, 2.9vw, 4.5rem);
    font-weight: 700;
    margin-block: auto;
  }
  .cta {
    background: var(--clr-bg-2);
    padding-inline: 0.563rem;
    padding-block: 3rem 0.188rem;
  }
  .cta:hover {
    color: var(--clr-bg-1);
    background: var(--clr-comp-1);
  }
  @media only screen and (max-width: 540px) {
    .cta {
      position: fixed;
      bottom: 0.5rem;
      left: 50%;
      transform: translateX(-50%);
      padding-block: 0.8rem;
      width: 90%;
      text-align: center;
      z-index: 99;
    }
    .cta::before {
      content: "";
      position: absolute;
      background: var(--clr-bg-1);
      width: 100%;
      height: 10px;
      left: 0;
      top: 99%;
    }
  }
</style>
