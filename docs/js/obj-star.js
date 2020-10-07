const obj_DM_star = {
	custon: {
		view(point, rank, lvl, class_on, class_off) {
			let { on, off } = DM_config.star.custon;

			for (let j = 1; j <= rank; j++) {
				if (lvl >= j) {
					/* html */
					point.innerHTML += `<i class='${class_on} material-icons' >${on}</i>`;
				} else {
					/* html */
					point.innerHTML += `<i class='${class_off} material-icons' >${off}</i>`;
				}
			}
		},
		select(data, point, action) {
			let { on, off } = DM_config.star.custon;

			let { locate, rank, lvl, id, class_on, class_off } = data;
			point.innerHTML = '';
			for (let j = 1; j <= rank; j++) {
				let info = `{ locate: '${locate}', rank: ${rank}, lvl: ${j}, id: ${id}, class_on: '${class_on}', class_off: '${class_off}' }`;

				if (lvl > j) {
					/* html */
					point.innerHTML += `<i class='${class_on} material-icons' onclick="alert('hola')" onmouseover="DMstar.select(${info})">${on}</i>`;
				} else if (lvl === j) {
					/* html */
					point.innerHTML += `<i class='${class_on} material-icons' onclick="action(${info})" >${on}</i>`;
				} else {
					/* html */
					point.innerHTML += `<i class='${class_off} material-icons' onmouseover="DMstar.select(${info})">${off}</i>`;
				}
			}
			if (DM_config.star.chip.state) {
				if (DM_config.star.chip.class && DM_config.star.chip.class != '') {
					/* html */
					point.innerHTML += `<span class="${DM_config.star.chip.class}">${lvl}</span>`;
				} else {
					/* html */
					point.innerHTML += `<span class="chip">${lvl}</span>`;
				}
			}
		},
	},
	material: {
		view(point, rank, lvl, class_on, class_off) {
			for (let j = 1; j <= rank; j++) {
				if (lvl >= j) {
					/* html */
					point.innerHTML += `<i class='${class_on} material-icons' >star</i>`;
				} else {
					/* html */
					point.innerHTML += `<i class='${class_off} material-icons' >star_border</i>`;
				}
			}
		},
		select(data, point, action) {
			let { locate, rank, lvl, id, class_on, class_off } = data;
			point.innerHTML = '';
			for (let j = 1; j <= rank; j++) {
				let info = `{ locate: '${locate}', rank: ${rank}, lvl: ${j}, id: ${id}, class_on: '${class_on}', class_off: '${class_off}' }`;

				if (lvl > j) {
					/* html */
					point.innerHTML += `<i class='${class_on} material-icons' onmouseover="DMstar.select(${info})">star</i>`;
				} else if (lvl === j) {
					/* html */
					point.innerHTML += `<i class='${class_on} material-icons' onclick="action(${info})" >star</i>`;
				} else {
					/* html */
					point.innerHTML += `<i class='${class_off} material-icons' onmouseover="DMstar.select(${info})">star_border</i>`;
				}
			}
			if (DM_config.star.chip.state) {
				if (DM_config.star.chip.class && DM_config.star.chip.class != '') {
					/* html */
					point.innerHTML += `<span class="${DM_config.star.chip.class}">${lvl}</span>`;
				} else {
					/* html */
					point.innerHTML += `<span class="chip">${lvl}</span>`;
				}
			}
		},
	},
	feather: {
		view(point, rank, lvl, class_on, class_off) {
			for (let j = 1; j <= rank; j++) {
				if (lvl >= j) {
					/* html */
					point.innerHTML += `<i class='${class_on}' data-feather="star" ></i>`;
				} else {
					/* html */
					point.innerHTML += `<i class='${class_off}' data-feather="star" ></i>`;
				}
			}
		},
		select(data, point, action) {
			let { locate, rank, lvl, id, class_on, class_off } = data;
			point.innerHTML = '';
			for (let j = 1; j <= rank; j++) {
				let info = `{ locate: '${locate}', rank: ${rank}, lvl: ${j}, id: ${id}, class_on: '${class_on}', class_off: '${class_off}' }`;

				if (lvl > j) {
					/* html */
					point.innerHTML += `<i class='${class_on}' data-feather="star" onmouseover="DMstar.select(${info})"></i>`;
				} else if (lvl === j) {
					/* html */
					point.innerHTML += `<i class='${class_on}' data-feather="star" onclick="action(${info})" ></i>`;
				} else {
					/* html */
					point.innerHTML += `<i class='${class_off}' data-feather="star" onmouseover="DMstar.select(${info})"></i>`;
				}
			}
			if (DM_config.star.chip.state) {
				if (DM_config.star.chip.class && DM_config.star.chip.class != '') {
					/* html */
					point.innerHTML += `<span class="${DM_config.star.chip.class}">${lvl}</span>`;
				} else {
					/* html */
					point.innerHTML += `<span class="chip">${lvl}</span>`;
				}
			}
		},
	},
	img: {
		view(point, rank, lvl, class_on, class_off) {
			let { on, off } = DM_config.star.custon;
			let { x, y } = DM_config.star.custon.dimension;

			x = x === '' ? '1.5rem' : x;
			y = y === '' ? '1.5rem' : y;

			for (let j = 1; j <= rank; j++) {
				if (lvl >= j) {
					/* html */
					point.innerHTML += `<img  class='${class_on}' style="width: ${x}; height: ${y}" src='${on}' />`;
				} else {
					/* html */
					point.innerHTML += `<img  class='${class_off}' style="width: ${x}; height: ${y}" src='${off}' />`;
				}
			}
		},
		select(data, point, action) {
			let { on, off } = DM_config.star.custon;
			let { x, y } = DM_config.star.custon.dimension;

			x = x === '' ? '1.5rem' : x;
			y = y === '' ? '1.5rem' : y;

			let { locate, rank, lvl, id, class_on, class_off } = data;
			point.innerHTML = '';
			for (let j = 1; j <= rank; j++) {
				let info = `{ locate: '${locate}', rank: ${rank}, lvl: ${j}, id: ${id}, class_on: '${class_on}', class_off: '${class_off}' }`;

				if (lvl > j) {
					/* html */
					point.innerHTML += `<img class='${class_on}' src='${on}' style="width: ${x}; height: ${y}" onmouseover="DMstar.select(${info})" />`;
				} else if (lvl === j) {
					/* html */
					point.innerHTML += `<img class='${class_on}' src='${on}' style="width: ${x}; height: ${y}" onclick="action(${info})"/>`;
				} else {
					/* html */
					point.innerHTML += `<img class='${class_off}' src='${off}' style="width: ${x}; height: ${y}" onmouseover="DMstar.select(${info})" />`;
				}
			}
			if (DM_config.star.chip.state) {
				if (DM_config.star.chip.class && DM_config.star.chip.class != '') {
					/* html */
					point.innerHTML += `<span class="${DM_config.star.chip.class}">${lvl}</span>`;
				} else {
					/* html */
					point.innerHTML += `<span class="chip">${lvl}</span>`;
				}
			}
		},
	},
};
