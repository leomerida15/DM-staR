const DM_config = {
	star: {
		icon_pre_define: true,
		type: 'material',
		chip: { state: false, class: 'chip' },
		class: { on: 'yellow-text text-accent-3', off: 'yellow-text text-accent-3' },
		// custon: {
		// 	on: `star.png`,
		// 	off: `star_off.png`,
		// 	dimension: { x: '', y: '' },
		// },
	},
};

const star_action = (a) => {
	console.warn('Datos que retorna cada campo Select a la funcion callback~~!');
	console.table(a);
	alert('Hola soy la estrella ' + a.lvl);
};
