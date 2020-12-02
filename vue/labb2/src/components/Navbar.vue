<template>
  <nav class="d-flex justify-content-between align-items-center bg-info p-3 text-white">
    <i class="fas fa-2x fa-balance-scale"></i>
    <p class="m-0 font-weight-bold" v-if="name === ''">Vänligen logga in</p>
    <div v-else class="d-flex align-items-center ">
      <p class="m-0 mr-3 font-weight-bold">{{ name }}</p>
      <form class="d-flex" @submit.prevent="logout">
        <input type="hidden" value="" v-model="newName">
        <button class="btn btn-sm btn-outline-light" type="submit">Logga ut</button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['name'],
  data() {
		return{
			newName:this.name
		}
	},
	methods: {
    logout() {
			let user = {
				name: this.newName
      }
			this.$emit('user', user)
		}
  }
}
</script>

<style>
</style>
