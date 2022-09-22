<script>
  import works from "$lib/works";
  import { fly } from "svelte/transition";
  let allCategoryFilters = [...new Set(works.map((el) => el.category))];
  let allTechFilters = [...new Set(works.map((el) => el.tech).flat(1))];
  let filter = { techFilter: [], categoryFilter: [] };
  let filteredList = works;

  const refreshList = (type) => {
    if (filter.techFilter.length === 0 && filter.categoryFilter.length === 0) {
      filteredList = works;
    } else {
      if (type === "category") {
        for (let i = 0; i < filter.categoryFilter.length; i++) {
          filteredList = works.filter((e) =>
            e.category.includes(filter.categoryFilter[i])
          );
        }
        filteredList = filteredList;
      } else {
        for (let i = 0; i < filter.techFilter.length; i++) {
          filteredList = works.filter((e) =>
            e.tech.includes(filter.techFilter[i])
          );
        }
        filteredList = filteredList;
      }
    }
  };

  const addFilter = (type, fil) => {
    switch (type) {
      case "category":
        if (!filter.categoryFilter.includes(fil)) {
          filter.categoryFilter = [...filter.categoryFilter, fil];
          allCategoryFilters = allCategoryFilters.filter((el) => el !== fil);
          refreshList("category");
        }
        break;
      case "tech":
        if (!filter.techFilter.includes(fil)) {
          filter.techFilter = [...filter.techFilter, fil];
          allTechFilters = allTechFilters.filter((el) => el !== fil);
          refreshList("tech");
        }
        break;
    }
  };
  const removeFilter = (type, fil) => {
    switch (type) {
      case "category":
        for (let i = 0; i < filter.categoryFilter.length; i++) {
          if (filter.categoryFilter[i] === fil) {
            filter.categoryFilter.splice(i, 1);
            refreshList("category");
          }
        }
        allCategoryFilters = [...allCategoryFilters, fil];
        break;
      case "tech":
        for (let i = 0; i < filter.techFilter.length; i++) {
          if (filter.techFilter[i] === fil) {
            filter.techFilter.splice(i, 1);
            refreshList("tech");
          }
        }
        allTechFilters = [...allTechFilters, fil];
        break;
    }
    filter = filter;
  };
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
    <div>
      <h4 class="heading">Filters</h4>
      {#if allTechFilters.length > 0 || allCategoryFilters.length > 0}
        <div class="filters">
          {#each allTechFilters as tech}
            <button
              in:fly
              class="tech"
              on:click={() => addFilter("tech", tech)}
              title={`Filter by ${tech}`}>{tech}</button
            >
          {/each}
          {#each allCategoryFilters as category}
            <button
              in:fly
              on:click={() => addFilter("category", category)}
              class="category"
              title={`Filter by ${category}`}>{category}</button
            >
          {/each}
        </div>
      {/if}
      <h4>
        Applied filters: {#if filter.techFilter.length === 0 && filter.categoryFilter.length === 0}
          None
        {:else}
          {#each filter.techFilter as item}
            <button
              class="tech"
              in:fly
              on:click={() => removeFilter("tech", item)}>{item}</button
            >
          {/each}
          {#each filter.categoryFilter as item}
            <button
              class="category"
              in:fly
              on:click={() => removeFilter("category", item)}>{item}</button
            >
          {/each}
        {/if}
      </h4>
    </div>
    <div class="works">
      {#each filteredList as work}
        <div class="work-card">
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
  main .filters {
    padding: 0.3rem 0.2rem;
    background: var(--clr-lightblur-bg);
    backdrop-filter: blur(10px);
    overflow-x: auto;
    white-space: nowrap;
  }
  main .filters button.tech {
    margin: 0.2rem;
    padding: 0.25rem 0.3rem;
    border-radius: 0.5rem;
    font-weight: 600;
  }
  main .filters button.tech::after {
    content: "+";
    padding-inline: 0.2rem 0.4rem;
    background: var(--clr-bg-1);
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    margin-inline: 0.6rem 0.1rem;
  }
  main .filters button.category {
    margin: 0.2rem;
    padding: 0.25rem 0.3rem;
    border-radius: 0.5rem;
    font-weight: 600;
    background: var(--clr-bg-1);
    border: 2px var(--clr-text-1) solid;
    text-transform: capitalize;
  }
  main .filters button.category::after {
    content: "+";
    padding-inline: 0.2rem 0.4rem;
    background: var(--clr-link-hvr-1);
    color: var(--clr-bg-1);
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    margin-inline: 0.6rem 0.1rem;
  }
  main .works_system h4 {
    font-size: clamp(1rem, 1.6vw, 2.725rem);
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
  main .works_system h4.heading {
    margin-bottom: 0;
  }
  main .works_system h4 button.tech {
    margin: 0.2rem;
    padding: 0.25rem 0.3rem;
    border-radius: 0.5rem;
    font-weight: 600;
  }
  main .works_system h4 button.tech::after {
    content: "×";
    padding-inline: 0.2rem 0.4rem;
    background: var(--clr-bg-1);
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    margin-inline: 0.6rem 0.1rem;
  }
  main .works_system h4 button.category {
    margin: 0.2rem;
    padding: 0.25rem 0.3rem;
    border-radius: 0.5rem;
    font-weight: 600;
    background: var(--clr-bg-1);
    border: 2px var(--clr-text-1) solid;
    text-transform: capitalize;
  }
  main .works_system h4 button.category::after {
    content: "×";
    padding-inline: 0.2rem 0.4rem;
    background: var(--clr-link-hvr-1);
    color: var(--clr-bg-1);
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    margin-inline: 0.6rem 0.1rem;
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
  main .works_system .works .work-card .desc .category {
    margin-block: 0.4rem;
    display: block;
    background: var(--clr-bg-1);
    display: inline-block;
    text-transform: capitalize;
    font-size: clamp(0.7rem, 0.7vw, 1rem);
    font-weight: 600;
    border: 2px var(--clr-text-1) solid;
    border-radius: 0.5rem;
    padding: 0.2rem;
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
