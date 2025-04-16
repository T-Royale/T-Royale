const techDescription = document.getElementById('techDescription');

const techs = [
	{ iconId: 'inoTechIcon', description: 'Descripción de Arduino (ino)' },
	{ iconId: 'cTechIcon', description: 'Descripción de C' },
	{ iconId: 'gitTechIcon', description: 'Descripción de Git' },
	{ iconId: 'linuxTechIcon', description: 'Descripción de Linux' },
	{ iconId: 'rpiTechIcon', description: 'Descripción de Raspberry Pi' }
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
					techDescription.style.color = 'lightskyblue';
					break;
				case 'cTechIcon':
					techDescription.style.color = '#0051FF';
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