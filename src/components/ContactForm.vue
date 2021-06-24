<template>
  <div class="contactForm" id="contactFormContainer" 
    :class="{ hideForm: isHidden}">
    <!-- 
      If you modify <form>, update the public/index.html file and include a skeleton of the
      form as per https://www.netlify.com/blog/2018/09/07/how-to-integrate-netlify-forms-in-a-vue-app/#stand-in-static-forms
      due to netlify's dependency on the form being present statically.
    --> 
    <form id="contactForm" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
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
        <button id="submitButton" type="submit">Submit</button>
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

#contactForm input {
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
