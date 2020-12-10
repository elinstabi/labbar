<template>
	<main class="main">
		<Scroolthing />
		<Intro />
		<Introimg :experienceInfo="experienceInfo" @change-experience="changeinfo"/>
		<Experience :experiencesList="experiencesList" :experienceInfo="experienceInfo" @change-experience="changeinfo" />
	</main>
</template>

<script>
import Scroolthing from './Scroolthing'
import Intro from './Intro'
import Introimg from './Introimg'
import Experience from './Experience'
export default {
	components: {
		Scroolthing,
		Intro,
		Introimg,
		Experience
	},
	data() {
		return {
			//fadein: false,
			show: true,
			experienceInfo: [
				{
					extendedinfo: {
						heading: 'Intro',
						text:'During my 6 years working in the field of front-end I have particularly appreciated the space for creativity, the problem solving and the constant need for new learning.<br><br><span class="bold">Click on the timeline</span> to know more about the experience.',
						img: '/img/computer.jpg'
					}
				}
			],
			experiencesList: [
				{	
					id:1,
					liHeading: 'Frontend Javascript',
					liText: 'Student at Lexicon 2020-ongoing',
					extendedinfo: {
						heading: 'Lexicon',
						text:'Modules:<br>-UX-UI<br>-JavaScript<br>-Vue.js<br>-React<br>-Backend / Node.js, MongoDB<br>-Agile Project Management', 
						img:"/img/lexicon.jpg" 
					}
				},
				{	
					id:2,
					liHeading: 'Front-end Developer',
					liText: 'Airtours 2014-2020',
					extendedinfo: {
						heading: 'Airtours',
						text:'A collection of my assignments:<br>- Together with back-end developers I <br>modernised and built a responsive website<br>- Implemented local environments/workflows <br>- Contributed to the UX/UI journey for an improved digital experience <br>- Google Ad Manager and Google Analytics', 
						img:"/img/airtours.jpg" 
					}
				},
				{	
					id:3,
					liHeading: 'Digital Data Strategist',
					liText: 'Student at Hyperisland 2013-2014',
					extendedinfo: {
						heading: 'Hyper Island DDS',
						text:'Selection areas of study: <br>- Digital storytelling and data visualization<br>- Using APIs when creating prototypes of software systems<br>- Group dynamics and self leadership<br>- Project management<br>- Business transformation and brand awareness', 
						img:"/img/hyperisland.jpg" 
					}
				},
				{	
					id:4,
					liHeading: 'Marketing Manager',
					liText: 'Canapé Catering 2010-2014',
					extendedinfo: {
						heading: 'Canapé Catering',
						text:'As Co-founder and Marketing Manager at Canapé Catering I was in charge of: concept development, digital design, website, coding, business strategy and analysis, costumer contacts and accounts.', 
						img:"/img/canapecatering.jpg" 
					}
				},
				{	
					id:5,
					liHeading: 'Introduction to graphic design and PR',
					liText: 'Forsbergs school 2010',
					extendedinfo: {
						heading: 'Forsbergs',
						text:'Introduction to graphic design and PR.<br>Selection of course content:<br> - Typography <br>- Logotype Design<br>- Package Design', 
						img:"/img/forsbergs.jpg" 
					}
				},
				{	
					id:6,
					liHeading: 'Bachelor of Science - Anthropology',
					liText: 'Stockholm University 2010',
					extendedinfo: {
						heading: 'Bachelor of Science',
						text:'Selection of courses:<br>- Social Anthropology - Basic Course- Anthropological Theory and method 2<br> - Global Flows of Culture - Anthropological Perspectives On Sociocultural Change<br>- Social Anthropology III<br>- Psychology A & B', 
						img:"/img/bachelor.jpg" 
					}
				}
			]
		}
	},
	methods: {
		changeinfo(id) {
			this.experienceInfo = this.experiencesList.filter(experience => experience.id === id)
		}
	}
}
</script>

<style>

</style>