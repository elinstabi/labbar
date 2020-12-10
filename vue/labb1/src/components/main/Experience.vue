<template>
	<section class="experience-section">
		<article class="experience-list">
			<h2 class="h2 experience">Experience</h2>
			<ul class="ul-custom-dot">
				<li v-for="experience in experiencesList" :key="experience.id" :experience="experience" @click="$emit('change-experience', experience.id)">
					<h3 class="h3 pointer-none">{{experience.liHeading}}</h3>
					<p class="p pointer-none">{{experience.liText}}</p>
				</li>
			</ul>
		</article>
		<article class="experience-info">
			<transition name="fade-slide">
			<h2 data-experience="changeheading" class="h2">{{experienceInfo[0].extendedinfo.heading}}</h2>
			</transition>
			<br>
			<p data-experience="changetext" class="p">{{experienceInfo[0].extendedinfo.text}}</p>
		</article>
	</section>
</template>

<script>
export default {
	name: 'Experience',
	props: ['experiencesList', 'experienceInfo', 'show']
}
</script>

<style lang="scss" scoped>	
	
	@import '../../css/experience.scss';
	@import '../../css/experiencelist.scss';

	.fade-slide-enter-active, .fade-slide-leave-active {
		transition: all 2s ease;
	}
	.fade-slide-enter, .fade-slide-leave-to {
		opacity:0;
		transition: all 2s ease;
	}
</style>