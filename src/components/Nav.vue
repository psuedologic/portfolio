<template>
  <div class="nav">
    <div id="navBar">
      <a href="GonyeauResume.pdf" target="_blank">
        <span class="outer-circle">
          <span class="inner-circle">
            <q-icon name="account_circle" />
          </span>
        </span>
      </a>
      <a id="emailLink" href="" @click.prevent="toggleEmail">
        <span class="outer-circle">
          <span class="inner-circle">
            <q-icon name="email" />
          </span>
        </span>
      </a>
      <a href="https://github.com/psuedologic/portfolio" target="_blank">
        <span class="outer-circle">
          <span class="inner-circle">
            <q-icon name="code" />
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

@media screen and (max-width: 850px) {
  div#navBar {
    width: 90px;
    border-bottom-right-radius: 40px;
    background-color: var(--headerPrimary);
    padding-bottom: 10px;
  }
}
#navBar {
  position: absolute;
  float: left;
  z-index: 5;
  margin: 0;
  padding: max(12px,1vw) max(12px,1vw) 0 max(12px,1vw);
  font-size: 22px;
  background-color: var(--headerPrimary);
  color: var(--headerBackground);
}
#navBar > span:hover {
  cursor: pointer;
}
a {
  color: inherit;
  text-decoration: none;
}
.outer-circle, .inner-circle, .material-icons {
  display: inline-flex !important;
  justify-content: center;
  align-items: center;
}
.outer-circle, .inner-circle {
  border-radius: 50%;
  display: inline-block;
}
.outer-circle {
  background-color: var(--headerBackground);
  height: max(2.5vw, 48px);
  width: max(2.5vw, 48px);
  margin: max(.5vw, 12px);
}
.inner-circle {
  background-color: var(--headerPrimary);
  height: max(2vw, 40px);
  width: max(2vw, 40px);
}
.material-icons {
  font-size: max(1.33vw, 24px);
}
</style>
