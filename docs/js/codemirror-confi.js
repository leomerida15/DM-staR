var myCodeMirror = CodeMirror(document.querySelector('div.requere-code'), {
	value: `    /*Estos links son librerias de codigo con las que trabaja nuestra libreria. por defecto DM-staR usa materil (material-icons),
    pero se puede configurar para que use feather en solo una linea.*/
    
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    
    <!-- choose one -->
    <script src="https://unpkg.com/feather-icons"></script>
    <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>


	<script src="./DM-star.min.js"></script>

    <script>
        feather.replace()
	</script>;
	`,
	mode: 'javascript',
	theme: 'abcdef',
});
let values = [];

values[0] = /*html*/ `
<div class="star-view">5,3</div>`;
values[1] = /*html*/ `
<div dir='rtl'  class="star-view">5,3</div>`;
values[2] = /*html*/ `
<div class="star-select">function_name</div>
`;
values[3] = /*html*/ `
<div dir="rtl" class="star-select">function_name</div>
`;
values[4] = /*html*/ `
const DM_config = {
|   star: {
|   |   icon_pre_define: true,
|   |   type: '',
|   |   chip: { state: false, class: '' },
|   |   class: { on: '', off: '' },
|   |   custon: { on: '', off: '', dimension: { x: '', y: '' } },
|   },
};`;
values[5] = /*html*/ `icon_pre_define: true,
type: 'string'
`;
values[6] = /*html*/ `
{state: true, class: 'string'}
`;

values[7] = /*html*/ `
class: { on: 'yellow-text text-accent-3', off: 'yellow-text text-accent-3' }`;

values[8] = /*html*/ `/*Si icon_pre_define: false,
o no existe tenderaa buscar custon.*/
custon: {
    on: 'route',
    off: 'route',
    x: '', 
    y: '',
},
/* Los parametro X e Y son para definir 
las dimenciones de la imagen*/`;

values[9] = /*html*/ `
DMstar.select('locate_of_tag_html')`;
values[10] = /*html*/ `
DMstar.select(data:obj, 'funtion_name', 'chip_class');`;
values[11] = /*html*/ `
let data = {
	locate: '',//locate_of_tag_html string
	rank: 5, //rango numbert
	lvl: 3, //nivel numbert
	type: '', //tipo de icon string
	class_on:'', //clases string
	class_off: '',
	custon: { on: '', off: '' }, //se usara si type='custon'
};`;
values[12] = /*html*/ `
DMstar.select('locate_of_tag_html')`;
values[13] = /*html*/ `
DMstar.select('locate_of_tag_html')`;

let view_html = document.querySelectorAll('div.view_html');

view_html.forEach((html, i) => {
	CodeMirror(html, {
		value: values[i],
		mode: 'javascript',
		theme: 'abcdef',
	});
	html.querySelector('.CodeMirror').style = style = 'height: 5.4rem';
	if (i === 4) html.querySelector('.CodeMirror').style = style = 'height: 15.4rem';
	// if (i === 7) html.querySelector('.CodeMirror').style = style = 'height: 4.9rem';
	if (i === 8) html.querySelector('.CodeMirror').style = style = 'height: 19rem';
	if (i === 11) html.querySelector('.CodeMirror').style = style = 'height: 18.4rem';
});

let data = {
	locate: 'div.pluma',
	rank: 5,
	lvl: 3,
	type: 'feather',
	class_off: 'black-text',
};

DMstar.view(data);

data = {
	locate: 'div.star-muestra-chip',
	rank: 5,
	lvl: 3,
	type: 'material',
};

DMstar.select(data, 'star_action', 'chip-star');

data = {
	locate: 'div.star-muestra-chip-rtl',
	rank: 5,
	lvl: 3,
	type: 'feather',
	class_off: 'black-text',
};

DMstar.select(data, 'star_action', 'chip-star');

data = {
	locate: 'div.star-muestra-custon',
	rank: 5,
	lvl: 3,
	type: 'custon',
	custon: { on: './img/clipart44.png', off: './img/clipart.png' },
};

DMstar.view(data, 'star_action');

data = {
	locate: 'div.star-muestra-custon-select',
	rank: 5,
	lvl: 3,
	type: 'custon',
	custon: { on: './img/clipart44.png', off: './img/clipart.png' },
};

DMstar.select(data, 'star_action');

data = {
	locate: 'div.star-muestra-custon-select',
	rank: 5,
	lvl: 3,
	type: 'custon',
	custon: { on: './img/clipart44.png', off: './img/clipart.png' },
};

DMstar.select(data, 'star_action');

data = {
	locate: 'div.star_principal#star_principal',
	rank: 5,
	lvl: 3,
	type: 'custon',
	custon: { on: './img/clipart44.png', off: './img/clipart.png' },
};

DMstar.select(data, 'star_action');
