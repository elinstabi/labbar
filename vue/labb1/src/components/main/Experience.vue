<template>
	<section class="section-experience">
		<article class="experience-list">
			<h2 class="h2 experience">Experience</h2>
			<ul class="ul-custom-dot">
				<li @click="changeinfo()"
					data-heading="Lexicon" 
					data-text="Modules:<br>
					-UX-UI<br>
					-JavaScript<br>
					-Vue.js<br>
					-React<br>
					-Backend / Node.js, MongoDB<br>
					-Agile Project Management" 
					data-img="/img/lexicon.jpg" 
					data-alt="lexiconimage">
					<h3 class="h3 pointer-none">Frontend Javascript</h3>
					<p class="p pointer-none">Student at Lexicon 2020-ongoing</p>
				</li>
				<li @click="changeinfo" 
					data-heading="Airtours" 
					data-text="A collection of my assignments:<br>
					- Together with back-end developers I <br>
					modernised and built a responsive website<br>
					- Implemented local environments/workflows <br>
					- Contributed to the UX/UI journey for an improved digital experience <br>
					- Google Ad Manager and Google Analytics " 
					data-img="/img/airtours.jpg" 
					data-alt="airtoursimage">
					<h3 class="h3 pointer-none">Front-end Developer</h3>
					<p class="p pointer-none">Airtours 2014-2020</p>
				</li>
				<li @click="changeinfo" 
					data-heading="Hyper Island DDS" 
					data-text="Selection areas of study: <br>
					- Digital storytelling and data visualization<br>
					- Using APIs when creating prototypes of software systems<br>
					- Group dynamics and self leadership<br>
					- Project management<br>
					- Business transformation and brand awareness" 
					data-img="/img/hyperisland.jpg" 
					data-alt="hyperislandimage">
					<h3 class="h3 pointer-none">Digital Data Strategist</h3>
					<p class="p pointer-none">Student at Hyperisland 2013-2014</p>
				</li>
				<li @click="changeinfo" 
					data-heading="Canapé Catering" 
					data-text="As Co-founder and Marketing Manager at 
					Canapé Catering I was in charge of: concept development, 
					digital design, website, coding, business strategy and analysis, 
					costumer contacts and accounts." 
					data-img="/img/canapecatering.jpg" 
					data-alt="canapeimage">
					<h3 class="h3 pointer-none">Marketing Manager</h3>
					<p class="p pointer-none">Canapé Catering 2010-2014</p>
				</li>
				<li @click="changeinfo" 
					data-heading="Forsbergs:" 
					data-text="
					Introduction to graphic design and PR.<br>
					Selection of course content:<br> 
					- Typography <br>
					- Logotype Design<br>
					- Package Design<br>
					" 
					data-img="/img/forsbergs.jpg" 
					data-alt="forsbergs">
					<h3 class="h3 pointer-none">Introduction to graphic design and PR</h3>
					<p class="p pointer-none">Forsbergs school 2010</p>
				</li>
				<li @click="changeinfo" 
					data-heading="Bachelor of Science" 
					data-text="
					Selection of courses:<br> 
					- Social Anthropology - Basic Course
					- Anthropological Theory and method 2<br> 
					- Global Flows of Culture - Anthropological Perspectives On Sociocultural Change<br>
					- Social Anthropology III<br>
					- Psychology A & B
					" 
					data-img="/img/bachelor.jpg" 
					data-alt="bachelor">
					<h3 class="h3 pointer-none">Bachelor of Science - Anthropology</h3>
					<p class="p pointer-none">Stockholm University 2010</p>
				</li>
			</ul>
		</article>
		
			<article class="experience-info">
				<transition name="fade-slide">
				<h2 v-if="show" data-experience="changeheading" class="h2">Intro</h2>
				</transition>
				<br>
				<p data-experience="changetext" class="p">During my 6 years working in the 
					field of front-end I have particularly 
					appreciated the space for creativity, 
					the problem solving and the 
					constant need for new learning.
					<br><br>
					<span class="bold">Click on the timeline</span> to know more 
					about the experience.</p>
			</article>
	</section>
</template>

<script>
export default {
	data() {
		return {
			fadein: false,
			show: true
		}
	},
	methods: {
		secondfunc(){
			console.log('test');
		},
		changeinfo(e) {
			const changeHeadingContainer = document.querySelector('[data-experience="changeheading"]');
			const changeTextContainer = document.querySelector('[data-experience="changetext"]');
			const changeImgContainer = document.querySelector('[data-experience="changeimg"]');
			
			changeHeadingContainer.innerHTML = e.target.dataset.heading;
			changeTextContainer.innerHTML = e.target.dataset.text;
			changeImgContainer.src = e.target.dataset.img;
			changeImgContainer.alt = e.target.dataset.alt;
			/*
			changeImgContainer.classList.add('fade-in');
			changeHeadingContainer.classList.add('fade-in');
			changeTextContainer.classList.add('fade-in');

			setTimeout(function() {
				changeImgContainer.classList.remove('fade-in');
				changeHeadingContainer.classList.remove('fade-in');
				changeTextContainer.classList.remove('fade-in');
			}, 500);*/

			var mediaQuery = window.matchMedia('(max-width: 719px)');

			if (mediaQuery.matches) {
				var elmnt = document.querySelector('.h1');
				elmnt.scrollIntoView({ behavior: 'smooth'});
			}
		}
	}
}
</script>

<style scoped>
	.fade-slide-enter-active, .fade-slide-leave-active {
		transition: all 2s ease;
	}
	.fade-slide-enter, .fade-slide-Leave-to {
		opacity:0;
		transition: all 2s ease;
	}
</style>