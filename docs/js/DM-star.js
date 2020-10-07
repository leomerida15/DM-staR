const obj_DM_star = {
	material: {
		view(point, rank, lvl, class_on, class_off) {
			for (let j = 1; j <= rank; j++) {
				if (lvl >= j) {
					point.innerHTML += `<i class='${class_on} material-icons' >star</i>`;
				} else {
					point.innerHTML += `<i class='${class_off} material-icons' >star_border</i>`;
				}
			}
		},
		select(data, point, action, chip) {
			let { locate, rank, lvl, id, class_on, class_off } = data;

			point.innerHTML = '';
			let valid_chip = chip ? `,'${chip}'` : '';

			for (let j = 1; j <= rank; j++) {
				let info = `{ locate: '${locate}', rank: ${rank}, lvl: ${j}, id: '${id}', class_on: '${class_on}', class_off: '${class_off}' }`;
				if (lvl > j) {
					point.innerHTML += `<i class='${class_on} material-icons' onmouseover="DMstar.select(${info},'${action}'${valid_chip})">star</i>`;
				} else if (lvl === j) {
					point.innerHTML += `<i class='${class_on} material-icons' onclick="${action}(${info},'${action}'${valid_chip})" >star</i>`;
				} else {
					point.innerHTML += `<i class='${class_off} material-icons' onmouseover="DMstar.select(${info},'${action}'${valid_chip})">star_border</i>`;
				}
			}
			if (chip) {
				point.innerHTML += `<span class="${chip}">${lvl}</span>`;
			} else if (DM_config) {
				if (DM_config.star) {
					if (DM_config.star.chip.state) {
						if (DM_config.star.chip.class && DM_config.star.chip.class != '') {
							point.innerHTML += `<span class="${DM_config.star.chip.class}">${lvl}</span>`;
						}
					}
				}
			}
		},
	},
	feather: {
		view(point, rank, lvl, class_on, class_off) {
			for (let j = 1; j <= rank; j++) {
				if (lvl >= j) {
					point.innerHTML += `<i class='${class_on}' data-feather="star" ></i>`;
				} else {
					point.innerHTML += `<i class='${class_off}' data-feather="star" ></i>`;
				}
			}
		},
		select(data, point, action, chip) {
			let { locate, rank, lvl, id, class_on, class_off } = data;
			point.innerHTML = '';
			let valid_chip = chip ? `,'${chip}'` : '';

			for (let j = 1; j <= rank; j++) {
				let info = `{ locate: '${locate}', rank: ${rank}, lvl: ${j}, id: '${id}', class_on: '${class_on}', class_off: '${class_off}', type:'feather' }`;
				if (lvl > j) {
					point.innerHTML += `<i class='${class_on}' data-feather="star" onmouseover="DMstar.select(${info},'${action}'${valid_chip})"></i>`;
				} else if (lvl === j) {
					point.innerHTML += `<i class='${class_on}' data-feather="star" onclick="${action}(${info},'${action}'${valid_chip})" ></i>`;
				} else {
					point.innerHTML += `<i class='${class_off}' data-feather="star" onmouseover="DMstar.select(${info},'${action}'${valid_chip})"></i>`;
				}
			}
			if (DM_config) {
				if (DM_config.star) {
					if (DM_config.star.chip) {
						if (DM_config.star.chip.state || chip) {
							if (DM_config.star.chip.class && DM_config.star.chip.class != '') {
								point.innerHTML += `<span class="${DM_config.star.chip.class}">${lvl}</span>`;
							} else {
								point.innerHTML += `<span class="chip">${lvl}</span>`;
							}
						}
					}
				}
			}
		},
	},
	custon: {
		view(point, rank, lvl, class_on, class_off, chip, on, off, x, y) {
			if (DM_config) {
				if (DM_config.star) {
					if (DM_config.star.custon) {
						on = DM_config.star.custon.on;
						off = DM_config.star.custon.off;
						x = DM_config.star.custon.dimension.x;
						y = DM_config.star.custon.dimension.y;
					}
				}
			}

			x = x === '' || !x ? '2.5rem' : x;
			y = y === '' || !y ? '2.5rem' : y;
			for (let j = 1; j <= rank; j++) {
				if (lvl >= j) {
					point.innerHTML += `<img class='${class_on}' style="width: ${x}; height: ${y}" src='${on}' />`;
				} else {
					point.innerHTML += `<img class='${class_off}' style="width: ${x}; height: ${y}" src='${off}' />`;
				}
			}
		},
		select(data, point, action, chip, on, off, x, y) {
			if (DM_config) {
				if (DM_config.star) {
					if (DM_config.star.custon) {
						on = DM_config.star.custon.on;
						off = DM_config.star.custon.off;
						x = DM_config.star.custon.dimension.x;
						y = DM_config.star.custon.dimension.y;
					}
				}
			}

			x = x === '' || !x ? '2.5rem' : x;
			y = y === '' || !y ? '2.5rem' : y;

			let { locate, rank, lvl, id, class_on, class_off } = data;
			point.innerHTML = '';
			let valid_chip = chip ? `,${chip}` : '';
			for (let j = 1; j <= rank; j++) {
				let info = `{ locate: '${locate}', rank: ${rank}, lvl: ${j}, id: '${id}', class_on: '${class_on}', class_off: '${class_off}',	type: 'custon', custon: { on: '${on}', off: '${off}', x:'${x}', y:'${y}' }, }`;
				if (lvl > j) {
					point.innerHTML += `<img class='${class_on}' src='${on}' style="width: ${x}; height: ${y}" onmouseover="DMstar.select(${info},'${action}'${valid_chip})" />`;
				} else if (lvl === j) {
					point.innerHTML += `<img class='${class_on}' src='${on}' style="width: ${x}; height: ${y}" onclick="${action}(${info},'${action}'${valid_chip})"/>`;
				} else {
					point.innerHTML += `<img class='${class_off}' src='${off}' style="width: ${x}; height: ${y}" onmouseover="DMstar.select(${info},'${action}'${valid_chip})" />`;
				}
			}

			if (DM_config) {
				if (DM_config.star) {
					if (DM_config.star.chip) {
						if (DM_config.star.chip.state || chip) {
							if (DM_config.star.chip.class && DM_config.star.chip.class != '') {
								point.innerHTML += `<span class="${DM_config.star.chip.class}">${lvl}</span>`;
							} else {
								point.innerHTML += `<span class="chip">${lvl}</span>`;
							}
						}
					}
				}
			}
		},
	},
};
const Define_confi_star = (type) => {
	if (type) return type;
	if (DM_config) {
		if (DM_config.star) {
			const { icon_pre_define, type, custon } = DM_config.star;
			if (icon_pre_define) return type;
			else if (icon_pre_define === undefined) return 'material';
			else if (icon_pre_define === false) return 'custon';
		} else return 'material';
	} else return 'material';
};
const Define_ponit = (point) => {
	if (typeof point === 'string') return document.querySelector(point);
	else if (typeof point === 'object') return point;
	else return !1;
};
const DMstar = {
	view(data, chip) {
		let { locate, rank, lvl, class_on, class_off, type } = data;

		let point = Define_ponit(locate);
		let resp = Define_confi_star(type);

		if (typeof resp === 'string') {
			if (data.class_on != 'init_star' && data.class_off != 'init_star') {
				if (DM_config) {
					if (DM_config.star) {
						if (class_on == undefined) class_on = DM_config.star.class.on ? DM_config.star.class.on : '';
						if (class_off == undefined) class_off = DM_config.star.class.off ? DM_config.star.class.off : '';
					}
				} else {
					class_on = '';
					class_off = '';
				}
			}
		}
		if (!lvl) data.lvl = 1;

		if (DM_config) {
			if (DM_config.star) {
				if (type === 'custon' || DM_config.star.icon_pre_define === false) {
					if (!point) console.error('WE CANNOT LOCATE THE SELECTED ELEMENT');
					else if (data.custon) {
						let { on, off, x, y } = data.custon;
						obj_DM_star.custon.view(point, rank, lvl, class_on, class_off, chip, on, off, x, y);
					} else console.error('ERROR OF CONFIG');
				} else if (DM_config.star.icon_pre_define || DM_config.star.icon_pre_define === undefined) {
					if (!point) console.error('WE CANNOT LOCATE THE SELECTED ELEMENT');
					else obj_DM_star[resp].view(point, rank, lvl, class_on, class_off, chip);
				} else console.error('WE CANNOT LOCATE THE SELECTED ELEMENT');
			} else {
				if (!point) console.error('WE CANNOT LOCATE THE SELECTED ELEMENT');
				else obj_DM_star[resp].view(point, rank, lvl, class_on, class_off);
			}
		} else {
			if (!point) console.error('WE CANNOT LOCATE THE SELECTED ELEMENT');
			else obj_DM_star[resp].view(point, rank, lvl, class_on, class_off);
		}

		if (resp === 'feather') feather.replace();
	},
	select(data, action, chip) {
		if (!data.rank) data.rank = 5;
		if (typeof data === 'string' || (!data.locate && typeof data === 'object')) data = { locate: data, rank: 5 };

		let point = Define_ponit(data.locate);
		let resp = Define_confi_star(data.type);

		if (typeof resp === 'string') {
			if (data.class_on != 'init_star' && data.class_off != 'init_star') {
				if (DM_config) {
					if (DM_config.star) {
						if (data.class_on == undefined) data.class_on = DM_config.star.class.on ? DM_config.star.class.on : '';
						if (data.class_off == undefined) data.class_off = DM_config.star.class.off ? DM_config.star.class.off : '';
					}
				} else {
					data.class_on = '';
					data.class_off = '';
				}
			}
		}
		if (!data.lvl) data.lvl = 1;
		if (DM_config) {
			if (DM_config.star) {
				if (data.type === 'custon' || DM_config.star.icon_pre_define === false) {
					if (data.custon) {
						let { on, off, x, y } = data.custon;
						if (!point) console.error('WE CANNOT LOCATE THE SELECTED ELEMENT');
						else obj_DM_star.custon.select(data, point, action, chip, on, off, x, y);
					} else console.error('ERROR OF CONFIG');
				} else if (DM_config.star.icon_pre_define || DM_config.star.icon_pre_define === undefined) {
					if (!point) console.error('WE CANNOT LOCATE THE SELECTED ELEMENT');
					else obj_DM_star[resp].select(data, point, action, chip);
				}
			} else {
				if (!point) console.error('WE CANNOT LOCATE THE SELECTED ELEMENT');
				else obj_DM_star[resp].select(data, point, action, chip);
			}
		} else {
			if (!point) console.error('WE CANNOT LOCATE THE SELECTED ELEMENT');
			else obj_DM_star[resp].select(data, point, action, chip);
		}

		if (resp === 'feather') feather.replace();
	},
};

(() => {
	let list_views = document.querySelectorAll('div.star-view');

	list_views.forEach((item, i) => {
		let datos = item.innerHTML.split(',');
		item.id = 'star_views_id_' + i;

		datos = datos.map((e) => {
			return parseInt(e);
		});

		Promise.all(datos);

		let class_on;
		let class_off;

		if (DM_config) {
			if (DM_config.star) {
				if (DM_config.star.class) {
					class_on = DM_config.star.class.on == undefined ? 'init_star' : DM_config.star.class.on;
					class_off = DM_config.star.class.off == undefined ? 'init_star' : DM_config.star.class.off;
				} else {
					class_on = 'init_star';
					class_off = 'init_star';
				}
			} else {
				class_on = 'init_star';
				class_off = 'init_star';
			}
		} else {
			class_on = 'init_star';
			class_off = 'init_star';
		}

		item.innerHTML = '';
		DMstar.view({
			locate: item,
			rank: datos[0],
			lvl: datos[1],
			id: item.id,
			class_on,
			class_off,
		});
	});

	let list_selects = document.querySelectorAll('div.star-select');

	list_selects.forEach((item, i) => {
		item.id = 'star_select_id_' + i;

		let action = item.innerText;

		let class_on;
		let class_off;

		if (DM_config) {
			if (DM_config.star) {
				if (DM_config.star.class) {
					class_on = DM_config.star.class.on == undefined ? 'init_star' : DM_config.star.class.on;
					class_off = DM_config.star.class.off == undefined ? 'init_star' : DM_config.star.class.off;
				} else {
					class_on = 'init_star';
					class_off = 'init_star';
				}
			} else {
				class_on = 'init_star';
				class_off = 'init_star';
			}
		} else {
			class_on = 'init_star';
			class_off = 'init_star';
		}

		item.innerHTML = '';
		let data = {
			locate: 'div.star-select#' + item.id,
			id: item.id,
			class_on,
			class_off,
		};

		DMstar.select(data, action);
	});
})();
