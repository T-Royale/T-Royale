"use strict";
const techDescription_en = document.getElementById('techDescription');
const techs_en = [
    { iconId: 'inoTechIcon', description: 'Arduino: Electronics projects and prototyping' },
    { iconId: 'cTechIcon', description: 'C: My main programming language' },
    { iconId: 'gitTechIcon', description: 'Git: Version control for all my projects' },
    { iconId: 'linuxTechIcon', description: 'Linux: Daily use and administration' },
    { iconId: 'rpiTechIcon', description: 'Raspberry Pi: Home servers and homelabs' }
];
if (!techDescription_en) {
    alert('ERROR: No se ha encontrado el elemento "techDescription"');
}
else {
    techs_en.forEach(tech => {
        const icon = document.getElementById(tech.iconId);
        if (!icon) {
            alert('ERROR: elemento con ID ${tech.iconID} no encontrado');
            return;
        }
        icon.addEventListener('mouseenter', () => {
            techDescription_en.innerText = tech.description;
            switch (tech.iconId) {
                case 'inoTechIcon':
                    techDescription_en.style.color = 'aqua';
                    break;
                case 'cTechIcon':
                    techDescription_en.style.color = '#1578fa';
                    break;
                case 'gitTechIcon':
                    techDescription_en.style.color = 'orangered';
                    break;
                case 'linuxTechIcon':
                    techDescription_en.style.color = 'yellow';
                    break;
                case 'rpiTechIcon':
                    techDescription_en.style.color = '#FB266A';
                    break;
                default:
                    break;
            }
        });
    });
}
