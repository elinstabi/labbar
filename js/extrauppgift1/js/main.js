/* Labb 12
Du ska i denna laborationsuppgift göra följande:
I den här uppgiften ska du bygga en navbar som visar en logotype på vänster sida och 
4 stycken länkar på höger sida.
Länkarna ska vara:
- Products
- About
- Contact us
- Features
När man gör webläsaren mindre än 768 pixlar i bredd så ska länkarna döljas och en 
hamburgerikon dyka upp istället.
När man trycker på hamburgerikonen så ska en lista visas med dessa länkar i.
Du bör använda dig av mediaqueries för att skapa en brytpunkt i den här uppgiften och 
hamburgerikonen kan du hämta antingen på fontawesome, där den heter bars.
Eller så gör du en egen med hjälp av css. Det är upp till dig att styla navbaren så den
blir “snygg” och användarvänlig.
*/


const toogleItem = document.querySelectorAll('[data-tooglesidebar]');

for (item of toogleItem) {
    item.addEventListener('click', function() {
		
		const techstacksidebar = document.getElementById('techstackSidebar');
			techstacksidebar.classList.toggle('techstack-sidebar-show');
		
		const techstackmenu = document.getElementById('techstackMenu');
			techstackmenu.classList.toggle('techstack-menu-close');

		const techstackmenusidebar = document.getElementById('techstackMenuSidebar');
			techstackmenusidebar.classList.toggle('techstack-menu-open');

		const techstackmenudots = document.getElementById('techstackMenuDots');
			techstackmenudots.classList.toggle('techstack-menu-dots-x');
    });
}