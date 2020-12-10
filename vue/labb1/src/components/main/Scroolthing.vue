<template>
  <div @scroll="handleScroll" class="scroolthing">i</div>
</template>

<script>
export default {
	data () {
		return {
			scrolled:false
		}
	},
	methods: {
		handleScroll () {
			//Skulle man kunna koppla detta likt man kan koppla class till event
			const imageAnimation = document.querySelector('.intro-img');
			const sectionIntro = document.querySelector('.intro-section');
			if (this.scrolled === window.scrollY > 0) {
				imageAnimation.classList.remove('intro-img-toexperience');
				sectionIntro.classList.remove('new-vh');
			} else {
				imageAnimation.classList.add('intro-img-toexperience');
				sectionIntro.classList.add('new-vh');
			}
		}
	},
	created () {
		window.addEventListener('scroll', this.handleScroll);
	},
	destroyed () {
		window.removeEventListener('scroll', this.handleScroll);
	}
}
</script>

<style>

</style>