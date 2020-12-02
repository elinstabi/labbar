<template>
	<form class="p-4 d-flex flex-column" @submit.prevent="login" action="#">
		<div class="form-group">
			<label for="name" class="text-secondary">Namn</label>
			<input id="name" class="form-control" :class="{'is-invalid': err}" type="text" value="" placeholder="Fyll i ditt inloggningsnamn" v-model="newName">
			<div class="invalid-feedback">Vänligen fyll i namn</div>
		</div>	
		<div class="form-group">
			<label class="text-secondary">Lösenord</label>
			<input class="form-control" :class="{'is-invalid': err}" type="password" value="" placeholder="Fyll i ditt lösenord" v-model="password">
			<div class="invalid-feedback">Vänligen fyll i lösenord</div>
		</div>
		<button :disabled="name === '' ? false : true" class="btn btn-sm btn-outline-info col-6 mt-4" type="submit">Logga in</button>
	</form>
</template>

<script>
export default {
	props: ['name'],
	data() {
		return{
			newName:this.name,
			password:'',
			err: false
		}
	},
	methods: {
		login(e) {
			e.target.forEach(input => {
				input.classList.remove('is-invalid')
				if(this.name === '' && this.password === '') {
					if(input.value == '') {
						input.classList.add('is-invalid')
					}
				} else {
					input.classList.remove('is-invalid')
					let user = {
						name: this.newName
					}
					this.newName = ''
					this.password = ''
					this.$emit('user', user)
				}
			})
		}
	}
}
</script>

<style>
</style>