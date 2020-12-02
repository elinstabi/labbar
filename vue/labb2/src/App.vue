<template>
  <div class="row no-gutters mt-5">
    <div class="col-10 offset-1 col-md-4 offset-md-4 shadow-sm bg-white">
      <navbar :name="name" @user="userstatus" />
      <appForm :name="name" @user="userstatus" />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Form from './components/Form.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    appForm: Form
  }, 
  data() {
    return {
      name: ''
    }
  },
  methods: {
    userstatus(newUser) {
      this.name = newUser.name
    },
  }
}
</script>

<style>
  body {
    font-family:arial,helvetica;
    font-size:14px;
  }
</style>
