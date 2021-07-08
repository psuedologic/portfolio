<template>
  <div class="nav">
    <a href="GonyeauResume.pdf" target="_blank">
      <span class="outer-circle">
        <span class="inner-circle">
          <span class="material-icons">account_circle</span>
        </span>
      </span>
    </a>
    <a id="emailLink" href="" @click.prevent="this.isFormHidden = !this.isFormHidden">
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
    <ContactForm :isHidden="isFormHidden"
      @click-out="isFormHidden = true"></ContactForm>
  </div>
</template>

<script>
import ContactForm from './ContactForm.vue'

export default {
  name: 'Nav',
  props: {
  },
  components: {
    ContactForm
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
  div.nav {
    width: 70px;
    border-bottom-right-radius: 40px;
    background-color: rgb(23, 45, 68);
    padding-bottom: 10px;
  }
}
.nav {
  font-size: 18px;
  position: absolute;
  background-color: rgb(23, 45, 68);
  color: rgb(212, 226, 245);
  z-index: 1000;
  padding: 12px 12px 0 12px;
  margin: 0;
  width: 26%;
  float: left;
}
.nav > span:hover {
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
  background-color: rgb(212, 226, 245);
  height: 48px;
  width: 48px;
  margin: 12px 8px;
}
.inner-circle {
  background-color:rgb(23, 45, 68);
  height: 40px;
  width: 40px;
  margin-top: 4px;
}
.inner-circle > span {
  display: inline-block;
  margin-top: 8px;
}
</style>
