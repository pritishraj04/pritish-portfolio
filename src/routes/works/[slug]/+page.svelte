<script>
  import { page } from "$app/stores";
  import works from "$lib/works";

  const work = works.filter((el) => el.slug == $page.params.slug)[0];
</script>

<svelte:head>
  <title>Pritish | Works</title>
</svelte:head>

<main id="main">
  <h1>Work</h1>
  <div class="work-details">
    <img
      src={work.img
        ? `/asset/works/${work.img}`
        : `/asset/works/placeholder.png`}
      alt={work.title}
    />
    <div class="info">
      <h2>Project name: {work.title}</h2>
      <h3 class={`category cat-${work.category}`}>{work.category}</h3>
      <div class="technologies">
        <h3>Techonologies Used:</h3>
        <ul>
          {#each work.tech as tech}
            <li
              style={`list-style-image: url(/asset/svgs/${tech.toLowerCase()}.svg);`}
            >
              {tech}
            </li>
          {/each}
        </ul>
      </div>
      <h3>Description:</h3>
      <p class="desc">
        {work.desc}
      </p>
      <h3>Demo Link:</h3>
      <a href={work.link} target="_blank">{work.link}</a>
    </div>
  </div>
  <!-- <div class="discuss">
    <h2>Comments</h2>
    <div class="thread">
      <h4 class="name">Thomas</h4>
      <p class="time">Thrusday, 2:10PM</p>
      <p class="comment">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorem
        odio possimus placeat esse exercitationem, a eveniet reprehenderit
        aliquam tempora nostrum cumque adipisci laudantium rem? Facilis
        perferendis praesentium nisi porro?
      </p>
    </div>
    <form>
      <textarea
        name="comment"
        id="comment"
        cols="30"
        rows="7"
        placeholder="Type your comment here"
      />
      <button class="submit">Send</button>
    </form>
  </div> -->
</main>

<style>
  main {
    margin-top: 2rem;
  }
  main h1 {
    font-weight: 400;
    font-size: clamp(1.6rem, 2.2vw, 3.125rem);
    margin-bottom: 1rem;
  }
  main h2 {
    font-size: clamp(1.1rem, 1.8vw, 2.125rem);
    margin-block: 0.5rem;
  }
  .category {
    display: inline-block;
    padding: 0.3rem 0.8rem;
    font-size: clamp(0.6rem, 0.7vw, 1rem);
    background: slategray;
  }
  .cat-frontend {
    background: cadetblue;
  }
  .cat-fullstack {
    background: seagreen;
  }
  main img {
    width: 100%;
    padding: 1.3rem;
    border: 1px solid var(--clr-bg-2);
  }
  @media only screen and (max-width: 620px) {
    main img {
      padding: 0;
    }
  }
  main .desc {
    font-size: clamp(0.8rem, 1.2vw, 1.925rem);
    margin-bottom: 2rem;
  }
  .technologies {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    padding: 0.3rem;
    border: 1px var(--clr-bg-2) dashed;
    /* gap: 1rem; */
  }
  .technologies ul {
    list-style: circle;
    margin-left: 1.5rem;
    font-size: clamp(0.8rem, 1.2vw, 1.925rem);
  }
  ul li::marker {
    font-size: clamp(1.6rem, 1.8vw, 2.4rem);
  }
  h3,
  a {
    font-size: clamp(0.8rem, 1.2vw, 1.925rem);
  }
  /* .discuss {
    margin: 1.8rem 0;
    padding-top: 1.8rem;
    border-top: 1px solid var(--clr-lightblur-bg);
  }
  @media only screen and (max-width: 540px) {
    .discuss {
      margin-bottom: 1rem;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .thread {
    background: var(--clr-lightblur-bg);
    margin: 1.2rem 0.5rem;
    padding: 0.4rem;
  }
  .time {
    color: var(--clr-lightblur-bg);
    font-size: clamp(0.4rem, 0.8vw, 1.125rem);
  }
  .comment {
    padding: 0.4rem 0.3rem;
  }
  #comment {
    width: 100%;
    color: var(--clr-text-1);
    background: rgba(255, 255, 255, 0.25);
    font-size: clamp(0.8rem, 1.1vw, 1.7rem);
    padding: 0.6rem 0.4rem;
    border: none;
  }
  #comment::placeholder {
    color: rgba(255, 255, 255, 0.377);
  }
  .submit {
    font-weight: 600;
    color: var(--clr-link-hvr-1);
    background: var(--clr-bg-2);
    padding: 0.4rem 0.3rem;
    cursor: pointer;
    align-self: end;
    width: max-content;
  }
  .submit:hover {
    color: var(--clr-bg-1);
    background: var(--clr-comp-1);
  } */
</style>
