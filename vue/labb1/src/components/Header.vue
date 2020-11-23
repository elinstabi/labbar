<template>
	<header class="header">
		<i class="logo icon icon-loggaelin"></i>
		<div @click="toggle = !toggle" :class="{toggle:toggle}" class="techstack-menu">
            Tech Stack 
			<div class="techstack-menu-dots"><i class="icon icon-menu"></i><i class="icon icon-menu"></i><i class="icon icon-menu"></i></div>
		</div>
		<section :class="{toggle:toggle}" class="techstack-sidebar">
			<div @click="toggle = !toggle" :class="{toggle:toggle}" class="techstack-menu techstack-menu-sidebar">
				Tech stack
				<div :class="{toggle:toggle}" class="techstack-menu-dots">
					<i class="icon icon-menu"></i>
					<i class="icon icon-menu"></i>
					<i class="icon icon-menu"></i>
				</div>
			</div>

			<div class="techstack-sidebar-container">
				<div class="techstack-sidebar-card">
					<i class="icon icon-html5" title="html5"></i>
					<i class="icon icon-css3"></i>
					<i class="icon icon-javascript"></i>
					<i class="icon icon-typescript"></i>
				</div>

				<div class="techstack-sidebar-card">
					<i class="icon icon-jquery"></i>
					<i class="icon icon-sass"></i>
					<i class="icon icon-stylus"></i>
					<i class="icon icon-bootstrap"></i>
				</div>

				<div class="techstack-sidebar-card">
					<i class="icon icon-react"></i>
					<i class="icon icon-vuejs"></i>
					<i class="icon icon-nodejs"></i>
					<i class="icon icon-npm"></i>

				</div>

				<div class="techstack-sidebar-card">
					<i class="icon icon-mongodb"></i>
					<i class="icon icon-gulp"></i>
					<i class="icon icon-github"></i>
					<i class="icon icon-git"></i>
				</div>

				<div class="techstack-sidebar-card three-icons adobe">
					<i class="icon icon-adobe-illustrator"></i>
					<i class="icon icon-adobe-photoshop"></i>
					<i class="icon icon-adobe-xd"></i>
				</div>

				<div class="techstack-sidebar-card three-icons">
					<i class="icon icon-google-analytics google"></i>
					<i class="icon icon-google-ads google"></i>
					<i class="icon icon-trello"></i>
				</div>
			</div>
		</section>
	</header>
</template>

<script>
	export default {
		data() {
			return {
				toggle: false
			}
		}
	}
</script>

<style>
	@import '../css/header/header.scss';
	@import '../css/header/dothamburger.scss';
	@import '../css/header/techstackmenu.scss';
	@import '../css/fontello.scss';
</style>