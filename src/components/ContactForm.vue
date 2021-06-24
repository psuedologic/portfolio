<template>
  <div class="contactForm" id="contactFormContainer" 
    :class="{ hideForm: isHidden}">
    <form id="contactForm" name="contact" method="POST" data-netlify="true">
      <h2>
        Contact Me
      </h2>
      <p>
        <label>Name: <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label class="messageLabel">Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <input id="submitButton" type="submit" value="Submit" />
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  props: {
    isHidden: Boolean
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.hideForm {
  opacity: 0;
}

#contactFormContainer {
  position: absolute;
  z-index: 10;
  margin: 3em;
  width: 20em;
}

#contactForm {
  background-color: #3D8C72;
  color: #e0faf2;
  padding: 0.8em;
  border-radius: 12px;
}

#contactForm input:not([type=submit]) {
  width: 13em;
  border-radius: 6px;
}

.messageLabel textarea {
  height: 12em;
  width: 20em;
  border-radius: 12px;
  margin-top: 6px;
}

#submitButton {
  padding: 0.6em;
  border-radius: 6px;
  background-color: #0D5C42;
  color: #e0faf2;
}

</style>
