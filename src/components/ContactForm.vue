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
        <div id="contactFormLabel">Contact Me</div>
        <div>
          <label>Name: <input type="text" name="name" /></label>
        </div>
        <div>
          <label>Email: <input type="email" name="email" /></label>
        </div>
        <div>
          <label class="messageLabel">Message: <textarea name="message"></textarea></label>
        </div>
        <div>
          <button id="submitButton" type="submit">Submit</button>
        </div>
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
  z-index: 100;
  margin: 4em 2em;
  min-width: 20em;
}

#contactForm {
  font-size: 18px;
  background-color: var(--formBody);
  color: var(--formField);
  border-radius: 12px;
  font-weight: 700;
}
#contactForm div {
  margin: 18px 0px;
}

#contactForm label {
  color: var(--formText);
  font-size: 16px;
}

#contactForm input {
  width: 13em;
  height: 1.5em;
  border-radius: 6px;
}
#contactForm input, #contactForm textarea {
  background-color: var(--formField);
}

#contactFormLabel {
  padding: 0.6em;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: var(--formHeader);
  color: var(--formHeaderText);
  font-size: 31px;
}

.messageLabel textarea {
  height: 10em;
  min-height: 10em;
  max-height: 30em;
  width: 18em;
  min-width: 15em;
  max-width: 25em;
  border-radius: 10px;
  margin: 8px 32px 0px 32px;

}

#submitButton {
  padding: 0.6em;
  border-radius: 6px;
  background-color: var(--formField);
  color: var(--formButtonText);
  border-top-left-radius: 10px;
  margin-bottom: 1em;
  font-weight: 800;
  font-size: 16px;
}

</style>
