const techDescription = document.getElementById('techDescription');

const techs = [
	{ iconId: 'inoTechIcon', description: 'Arduino: Proyectos de electrónica y prototipos' },
	{ iconId: 'cTechIcon', description: 'C: Mi lenguaje de programación principal' },
	{ iconId: 'gitTechIcon', description: 'Git: Control de versiones de mis proyectos' },
	{ iconId: 'linuxTechIcon', description: 'Linux: Uso diario y administración' },
	{ iconId: 'rpiTechIcon', description: 'Raspberry Pi: Servidores caseros y homelabs' }
];
if(!techDescription){
	alert('ERROR: No se ha encontrado el elemento "techDescription"')
} else {
	techs.forEach( tech => {
		const icon = document.getElementById(tech.iconId);

		if(!icon){
			alert('ERROR: elemento con ID ${tech.iconID} no encontrado');
			return;
		}

		icon.addEventListener('mouseenter', () => {
			techDescription.innerText = tech.description;
			switch (tech.iconId) {
				case 'inoTechIcon':
					techDescription.style.color = 'aqua';
					break;
				case 'cTechIcon':
					techDescription.style.color = '#1578fa';
					break;
				case 'gitTechIcon':
					techDescription.style.color = 'orangered';
					break;
				case 'linuxTechIcon':
					techDescription.style.color = 'yellow';
					break;
				case 'rpiTechIcon':
					techDescription.style.color = '#FB266A';
					break;
				default:
					break;
			}
		});

	});
}