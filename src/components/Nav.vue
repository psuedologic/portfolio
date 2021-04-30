<template>
  <div class="nav">
    <a>
      <span class="outer-circle">
        <span class="inner-circle">
          <span class="material-icons">account_circle</span>
        </span>
      </span>
    </a>
    <a>
      <span class="outer-circle">
        <span class="inner-circle">
          <span class="material-icons">email</span>
        </span>
      </span>
    </a>
    <a href="https://github.com/psuedologic/portfolio"  target="_blank">
      <span class="outer-circle">
        <span class="inner-circle">
          <span class="material-icons">code</span>
        </span>
      </span>
    </a>
  </div>
</template>

<script>

export default {
  name: 'Nav',
  props: {
  },
  components: {

  },
  
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.nav {
  padding-top: 12px;
  width: 30%;
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
  height: 50px;
  width: 50px;
  margin: 12px;
}
.inner-circle {
  background-color:rgb(23, 45, 68);
  height: 40px;
  width: 40px;
  margin-top: 5px;
}
.inner-circle > span {
  display: inline-block;
  margin-top: 8px;
}
</style>
