<svelte:head>
  <title>Pritish | About</title>
</svelte:head>

<main id="main">
  <h1>A Bit About Me</h1>
  <p class="desc">
    Currently, I'm a Test engineer working on perfecting user interface and
    enhancing user experince at <a
      href="https://creatiosoft.com/"
      target="_blank"
      class="creatiosoft_link"
      rel="noopener noreferrer">Creatiosoft Pvt. Ltd.</a
    >. Prior to this role i was assigned a role of FQA Tester at
    <a
      href="https://www.babelmedia.com/"
      class="babel_link"
      target="_blank"
      rel="noopener noreferrer"
    >
      Babel Media Pvt. Ltd.</a
    >. In this role i have worked on multiple projects including AAA games. I
    also have worked in Agile work environment. I am well versed in different
    testing techniques and tools. <br />
    Previously, I have done web development to build enhanced UI & UX for emerging
    companies. I was a freelance web and brand designer and developer, and worked
    with
    <a
      href="http://www.polardot.in"
      class="polardot_link"
      target="_blank"
      rel="noopener noreferrer">Polardot.in</a
    >
    to help multiple companies to build their digital footprint. I was also an intern
    at Tech4i Pvt. Ltd.. <br /><br /> Want to work together?
    <a href="/contact">Contact me</a>.
  </p>
  <h2>History</h2>
  <ul>
    <li>
      <p>Test Engineer - Creatiosoft Pvt. Ltd., Noida</p>
      <p class="time">May 2022 - Currently Working Here</p>
    </li>
    <li>
      <p>QA Tester - Babel Media Pvt. Ltd. (A Keywords Studios), Gurugram</p>
      <p class="time">Sep 2019 - May 2022</p>
    </li>
    <li>
      <p>Intern - Tech4i Pvt. Ltd., New Delhi</p>
      <p class="time">May 2018 - Jun 2018</p>
    </li>
  </ul>
  <h2>Education</h2>
  <ul>
    <li>
      <p>B. Tech - Amity University</p>
      <p class="time">Mar 2015 - May 2019</p>
    </li>
    <li>
      <p>Intermediate - D.A.V. Public School</p>
      <p class="time">2015</p>
    </li>
    <li>
      <p>Matriculation - D.A.V. Public School</p>
      <p class="time">2012</p>
    </li>
  </ul>
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
  main h2 {
    font-weight: 400;
    font-size: clamp(1.2rem, 1.9vw, 2.925rem);
    margin-bottom: 0.5rem;
  }
  main p {
    font-size: clamp(0.8rem, 1.2vw, 1.925rem);
  }
  main .desc {
    max-width: 60%;
    margin-bottom: 1.5rem;
  }
  @media only screen and (max-width: 720px) {
    main .desc {
      max-width: unset;
    }
  }
  .time {
    color: rgb(168, 168, 168);
    font-size: clamp(0.6rem, 0.8vw, 1.125rem);
  }
  main .desc .polardot_link {
    color: var(--clr-polardot-1);
  }
  main .desc .creatiosoft_link {
    color: var(--clr-creatiosoft-1);
  }
  main .desc .babel_link {
    color: var(--clr-babel-1);
  }
  main ul {
    margin-bottom: 2rem;
    border-left: white 1px solid;
    padding-left: 1.2rem;
  }
  main ul li {
    position: relative;
  }
  main ul li::before {
    content: "•";
    font-size: 4rem;
    position: absolute;
    left: -2.05rem;
    top: -1.4rem;
  }
  main ul li p:last-child {
    margin-bottom: 1.2rem;
  }
</style>
