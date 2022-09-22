<form
  name="contact"
  autocomplete="off"
  action="/contact/success"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
>
  <input type="hidden" name="form-name" value="contact" />
  <p hidden>
    <label>
      Don't fill this out: <input name="bot-field" />
    </label>
  </p>
  <div class="form-group">
    <label for="name"> Name </label>
    <input
      type="text"
      required
      id="name"
      name="name"
      placeholder="Enter your name here."
    />
  </div>
  <div class="form-group">
    <label for="email"> Email </label>
    <input
      type="email"
      required
      id="email"
      name="email"
      placeholder="Enter your email here."
    />
  </div>
  <div class="form-group">
    <label for="category"> Category </label>
    <select name="category" id="category">
      <option value="personal">Personal</option>
      <option value="bussines">Talk bussines</option>
      <option value="project">Related to Listed Projects</option>
      <option value="hiring">Want to Hire</option>
      <option value="chat">Friendly Chat</option>
    </select>
  </div>
  <div class="form-group">
    <label for="comments"> Comments </label>
    <textarea
      required
      type="comments"
      id="comments"
      name="comments"
      rows="8"
      placeholder="Enter your comments here."
    />
  </div>
  <div class="form-group">
    <input type="submit" id="submit" />
  </div>
</form>

<style>
  form .form-group {
    margin-bottom: 1rem;
  }
  form .form-group label {
    display: block;
    font-size: clamp(0.8rem, 1.2vw, 1.925rem);
    margin-bottom: 0.2rem;
  }
  form .form-group input,
  form .form-group textarea,
  form .form-group select {
    width: 100%;
    color: var(--clr-text-1);
    background: rgba(255, 255, 255, 0.25);
    font-size: clamp(0.8rem, 1.1vw, 1.7rem);
    padding: 0.6rem 0.4rem;
    border: none;
  }
  form .form-group input:focus,
  form .form-group textarea:focus,
  form .form-group select:focus {
    outline: var(--clr-link-hvr-1) 2px solid;
  }
  form .form-group input::placeholder,
  form .form-group textarea::placeholder,
  form .form-group select::placeholder {
    color: rgba(255, 255, 255, 0.377);
  }
  form .form-group textarea {
    max-width: 100%;
    resize: vertical;
  }
  form .form-group select {
    background: rgba(255, 255, 255, 0.39);
  }
  form .form-group select option {
    color: black;
  }
  form .form-group #submit {
    font-weight: 600;
    color: var(--clr-link-hvr-1);
    background: var(--clr-bg-2);
  }
  form .form-group #submit:hover {
    color: var(--clr-bg-1);
    background: var(--clr-comp-1);
  }
</style>
