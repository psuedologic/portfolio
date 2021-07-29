<template>
  <div class="nav">
    <div id="navBar">
      <a href="GonyeauResume.pdf" target="_blank">
        <span class="outer-circle">
          <span class="inner-circle">
            <span class="material-icons">account_circle</span>
          </span>
        </span>
      </a>
      <a id="emailLink" href="" @click.prevent="toggleEmail">
        <span class="outer-circle">
          <span class="inner-circle">
            <span class="material-icons">email</span>
          </span>
        </span>
      </a>
      <a href="https://github.com/psuedologic/portfolio" target="_blank">
        <span class="outer-circle">
          <span class="inner-circle">
            <span class="material-icons">code</span>
          </span>
        </span>
      </a>
    </div>  
  <ContactForm :isHidden="isFormHidden"
      @click-out="handleClickOut"></ContactForm>
  </div>
</template>

<script>
import ContactForm from './ContactForm.vue'

export default {
  name: 'Nav',
  components: {
    ContactForm
  },
  methods: {
    toggleEmail() {
      this.isFormHidden = !this.isFormHidden
      this.$emit("toggle-form")
    },
    handleClickOut() {
      this.isFormHidden = true
      this.$emit('close-form')
    }
  },
  data() {
    return {
      isFormHidden: true
    }
  }  
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

@media screen and (max-width: 770px) {
  div#navBar {
    width: 65px;
    border-bottom-right-radius: 40px;
    background-color: var(--headerPrimary);
    padding-bottom: 10px;
  }
}
#navBar {
  font-size: 18px;
  position: absolute;
  background-color: var(--headerPrimary);
  color: var(--headerBackground);
  z-index: 5;
  padding: 12px 12px 0 12px;
  margin: 0;
  width: 26%;
  float: left;
}
#navBar > span:hover {
  cursor: pointer;
}
a {
  color: inherit;
}
.outer-circle, .inner-circle {
  border-radius: 50%;
  display: inline-block;
}
.outer-circle {
  background-color: var(--headerBackground);
  height: 48px;
  width: 48px;
  margin: 12px 8px;
}
.inner-circle {
  background-color: var(--headerPrimary);
  height: 40px;
  width: 40px;
  margin-top: 4px;
}
.inner-circle > span {
  display: inline-block;
  margin-top: 8px;
}
</style>
