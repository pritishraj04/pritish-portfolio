<script>
  import Icon from "@iconify/svelte";
  import filterAlt from "@iconify/icons-bx/filter-alt";
  import searchIcon from "@iconify/icons-bx/search";
  import { result } from "$lib/stores";
  export let data;
  let isFocus = false;
  let searchText = "";
  const searchWorks = (query) => {
    $result = data.filter(
      (el) =>
        el.title.toLowerCase().includes(query.toLowerCase()) ||
        el.category.toLowerCase().includes(query.toLowerCase())
    );
    console.log($result);
  };
</script>

<div class="filter">
  <div class={isFocus ? "search-bar outline" : "search-bar"}>
    <label class="search_label" for="search"><Icon icon={searchIcon} /></label>
    <input
      id="search"
      type="text"
      on:focus={() => {
        isFocus = true;
      }}
      on:blur={() => {
        isFocus = false;
      }}
      bind:value={searchText}
      on:keyup={() => searchWorks(searchText)}
      placeholder="Type to start searching..."
    />
  </div>
  <!-- <div class="filter-drop">
    <button class="filter-button"><Icon icon={filterAlt} /></button>
    <div class="backdrop" />
    <div class="filter-options">
      <h1>Hello</h1>
    </div>
  </div> -->
</div>

<style>
  .filter {
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
  }
  .search-bar {
    background: rgba(255, 255, 255, 0.25);
    width: 80%;
    display: flex;
    align-items: center;
  }
  .search-bar label {
    background: transparent;
    font-size: clamp(0.8rem, 1.1vw, 1.7rem);
    padding: 0.6rem 0 0.6rem 0.4rem;
  }
  .search-bar input {
    color: var(--clr-text-1);
    background: transparent;
    font-size: clamp(0.8rem, 1.1vw, 1.7rem);
    border: none;
    padding: 0.6rem 0.4rem;
    width: 100%;
  }
  .search-bar input:focus {
    outline: none;
  }
  .outline {
    outline: 2px var(--clr-link-hvr-1) solid;
  }
  .search-bar input::placeholder {
    color: rgba(255, 255, 255, 0.377);
  }
  .filter-button {
    padding: 0.6rem 0.4rem;
  }
  .filter-button:first-child {
    font-size: clamp(0.8rem, 1.1vw, 1.7rem);
  }
  .filter-drop {
    position: relative;
  }
  .backdrop {
    position: absolute;
    background: var(--clr-darkblur-bg);
    backdrop-filter: blur(10px);
    width: 100%;
    height: 1vh;
  }
  .filter-options {
    background-color: var(--clr-bg-1);
    position: absolute;
    padding: 0.6rem;
    right: 0;
  }
</style>
