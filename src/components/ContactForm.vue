<template>
  <div id="contactFormWrapper">
    <div class="hideForm" id="contactFormContainer" 
    ref="contactForm" @focusout="checkClickOut" tabindex="0" >
      <!-- 
        If you modify <form>, update the public/index.html file and include a skeleton of the
        form as per https://www.netlify.com/blog/2018/09/07/how-to-integrate-netlify-forms-in-a-vue-app/#stand-in-static-forms
        due to netlify's dependency on the form being present statically.
      --> 
      <form id="contactForm" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <h2>Contact Me</h2>
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
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  props: {
    isHidden: Boolean
  },
  methods: {
    checkClickOut(event) {
      let contactForm = this.$refs.contactForm
      let emailLink = document.querySelector("a#emailLink")
      /* Check if the intended click is either the contactForm (or child), the email link (or child) or
         if the target is outside the browser window. If none of these are true, then close form
      */
      if (!contactForm.contains(event.relatedTarget) &&
          !emailLink.contains(event.relatedTarget) &&
          document.hasFocus()) {
        this.$emit('click-out')
        this.$refs.contactForm.classList.add("hideForm")
      }
    },
    focusForm() {
      this.$refs.contactForm.classList.remove("hideForm")
      document.querySelector("input[name=name]").focus()
      document.body.style.backgroundColor = "rgba(225, 0, 0, .3)"
    },
    blurForm() {
      this.$refs.contactForm.classList.add("hideForm")
      document.body.style.background = "default"
    }
  },
  watch: {
    isHidden: function (isHidden) {
      (isHidden) ? this.blurForm() : this.focusForm()
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.hideForm {
  display: none;
}

#contactFormWrapper, #contactFormWrapper > div {
  position: absolute;
  z-index: 10;
  margin: 4em 2em;
  min-width: 20em;
}

#contactForm {
  font-size: 18px;
  background-color: var(--formMedium);
  color: var(--formLight);
  border-radius: 12px;
  font-weight: 700;
}

#contactForm label {
  color: var(--formExtraDark);
}

#contactForm input {
  width: 13em;
  border-radius: 6px;
}
#contactForm input, #contactForm textarea {
  background-color: var(--formLight);
}

h2 {
  padding: 0.6em;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: var(--formDark);
}

.messageLabel textarea {
  height: 12em;
  min-height: 12em;
  max-height: 40em;
  width: 20em;
  min-width: 20em;
  max-width: 30em;
  border-radius: 10px;
  margin-top: 6px;
}

#submitButton {
  padding: 0.6em;
  border-radius: 6px;
  background-color: var(--formLight);
  color: var(--formExtraDark);
  border-top-left-radius: 10px;
  margin-bottom: 1em;
  font-weight: 800;
}

</style>
