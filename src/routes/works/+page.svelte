<script>
  import works from "$lib/works";
  import { result } from "$lib/stores";
  import WorkFilter from "$lib/comps/WorkFilter.svelte";
  import { fade } from "svelte/transition";
</script>

<svelte:head>
  <title>Pritish | Works</title>
</svelte:head>

<main id="main">
  <h1>Things I've worked on</h1>
  <p class="desc">
    Here are some of the the projects i've made using some very interesting
    techonologies. Apart from these listed projects i've also worked on multiple
    projects as a QA Engineer with as big as 40 members team. I've also managed
    group of 5-8 members in my team as a POC.
  </p>
  <section class="works_system">
    <WorkFilter data={works} />
    <div class="works">
      {#each $result as work (work.id)}
        <div class="work-card" transition:fade>
          <a href={`/works/${work.slug}`}>
            <img
              src={work.img
                ? `/asset/works/${work.img}`
                : `/asset/works/placeholder.png`}
              alt={work.title}
            /></a
          >
          <div class="desc">
            <a href={`/works/${work.slug}`}> <h4>{work.title}</h4></a>
            <a href={`/works/${work.slug}`}>
              <p>
                {work.desc.slice(0, 100)}...see more
              </p></a
            >
          </div>
        </div>
      {:else}
        <h2>
          No items found. Try removing filters or please visit <a href="/"
            >Home</a
          >
        </h2>
      {/each}
    </div>
    <div class="info">
      DISCLAIMER: Supabase and MongoDB services might get paused due to it's
      policy to reserve resources for community users. Please feel free to
      <a href="/contact">contact me</a> if some of the systems in my projects are
      not working for you.
    </div>
  </section>
</main>

<style>
  main {
    margin-top: 2rem;
  }
  main h1 {
    font-weight: 400;
    font-size: clamp(1.6rem, 2.2vw, 3.125rem);
    margin-bottom: 0.5rem;
  }
  main .desc {
    font-size: clamp(0.8rem, 1.2vw, 1.925rem);
    margin-bottom: 2rem;
  }
  main .works_system h4 {
    font-size: clamp(1rem, 1.6vw, 2.725rem);
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
  main .works_system .works {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2.5rem;
    row-gap: 1.5rem;
  }
  @media only screen and (max-width: 1080px) {
    main .works_system .works {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (max-width: 620px) {
    main .works_system .works {
      grid-template-columns: 1fr;
    }
  }
  main .works_system .works .work-card {
    min-width: 6.25rem;
    transition: transform 0.3s ease;
    border: 1px var(--clr-bg-2) solid;
  }
  @media only screen and (min-width: 769px) {
    main .works_system .works .work-card:hover {
      background: var(--clr-bg-1);
      transform: scale(1.1);
    }
  }
  main .works_system .works .work-card img {
    width: 100%;
  }
  main .works_system .works .work-card .desc {
    padding: 0.5rem;
  }
  main .works_system .works .work-card .desc h4 {
    font-weight: 400;
    font-size: clamp(1rem, 1.6vw, 2.725rem);
    margin-bottom: 0.2rem;
  }
  main .works_system .works .work-card .desc p {
    font-size: clamp(0.8rem, 0.9vw, 1.925rem);
    line-height: 1.2;
    opacity: 0.7;
  }
  main .info {
    font-size: clamp(0.6rem, 1vw, 1.5rem);
    margin-block: 1rem;
  }
</style>
