<script>
  import { page } from "$app/stores";
  import Icon from "@iconify/svelte";
  import mailIcon from "@iconify/icons-bytesize/mail.js";
  import phoneIcon from "@iconify/icons-bi/phone.js";
  import githubOutlineFill from "@iconify/icons-akar-icons/github-outline-fill.js";
  import linkedinOutlined from "@iconify/icons-ant-design/linkedin-outlined.js";
  import Transition from "$lib/comps/Transition.svelte";
</script>

<svelte:head>
  <title>Pritish | Contact</title>
</svelte:head>

<main id="main">
  <h1>Get in touch with me</h1>
  <p class="info">Average response time: 48 Hrs.</p>
  <section class="contact">
    <div class="contact-data">
      <div class="single-contact">
        <Icon width={30} icon={mailIcon} />
        <a href="mailto:pritishraj04@gmail.com">pritishraj04@gmail.com</a>
      </div>
      <div class="single-contact">
        <Icon width={30} icon={phoneIcon} />
        <a href="tel:+919097785207">+91-9097785207</a>
      </div>
      <div class="single-contact">
        <Icon width={30} icon={githubOutlineFill} />
        <a
          href="https://www.github.com/pritishraj04"
          target="_blank"
          rel="noopener noreferrer">github.com/pritishraj04</a
        >
      </div>
      <div class="single-contact">
        <Icon width={30} icon={linkedinOutlined} />
        <a
          href="https://www.linkedin.com/in/pritishraj04"
          target="_blank"
          rel="noopener noreferrer">linkedin.com/in/pritishraj04</a
        >
      </div>
    </div>
    <Transition url={$page.url}>
      <slot />
    </Transition>
  </section>
</main>
<p class="footer-text">Designed and Developed by Pritish Raj</p>

<style>
  main {
    margin-top: 2rem;
  }
  main h1 {
    font-weight: 400;
    font-size: clamp(1.6rem, 2.2vw, 3.125rem);
  }
  main .info {
    margin-bottom: 2rem;
    font-size: clamp(0.6rem, 1vw, 1.5rem);
  }
  main a {
    font-size: clamp(0.8rem, 1.2vw, 1.925rem);
  }
  main .contact {
    display: grid;
    grid-template-columns: 2.8fr 1fr;
    column-gap: 2rem;
    grid-row: auto;
  }
  @media only screen and (max-width: 768px) {
    main .contact {
      grid-template-columns: 1fr;
    }
  }
  main .contact .contact-data {
    order: 1;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    main .contact .contact-data {
      order: 0;
    }
  }
  main .contact .contact-data .single-contact {
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
    gap: 1rem;
  }
  main .contact .contact-data .single-contact:first-child {
    margin-top: 0;
  }
  .footer-text {
    position: fixed;
    font-size: clamp(0.5rem, 1vw, 1.25rem);
    color: rgba(227, 227, 227, 0.3);
    bottom: 10rem;
    right: 1rem;
    transform: translateX(50%) rotate(-90deg);
  }
  @media only screen and (max-width: 540px) {
    .footer-text {
      bottom: 25%;
      right: -4rem;
      transform: none;
      transform: rotate(-90deg);
    }
  }
</style>
