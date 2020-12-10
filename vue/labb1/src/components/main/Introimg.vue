<template>
	<img data-experience="changeimg" class="intro-img" :src="experienceInfo[0].extendedinfo.img" alt="introimage">
</template>

<script>
export default {
	name: 'IntroImg',
	props: ['experienceInfo']
}
</script>

<style>

</style>