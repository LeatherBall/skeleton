	export function getElCountsAndLayout(clas) {
		let elements = {
			// flex左右布局中，给本身没有宽度属性的元素父级添加flex:1
			clas: clas.indexOf('circle') > -1 || clas.indexOf('square') > -1 ? '' : 'ls_flex-sub',
			eles: []
		};
		if (clas.indexOf('*') > -1) {
			let group = clas.split("*");
			for (let i = 0, len = Number.parseInt(group[1]); i < len; i++) {
				elements.eles.push({
					clas: 'ls_' + group[0],
					type: 'skeleton',
					// flex左右布局中，为了保持元素垂直居中，每一列的最后一行去掉margin-bottom
					// styl: i == len - 1 ? {marginBottom: '0'} : ''
				});
			}
		} else {
			elements.eles.push({
				clas: 'ls_' + clas,
				type: 'skeleton'
			});
		}
		return elements;
	}
	
	export function getElCounts(clas) {
		let elements = [];
		if (clas.indexOf('*') > -1) {
			let group = clas.split("*");
			for (let i = 0, len = Number.parseInt(group[1]); i < len; i++) {
				elements.push({
					clas: 'ls_' + group[0],
					type: 'skeleton'
				});
			}
		} else if (clas == 'line' || clas == 'line-sm' || clas == 'line-lg' || clas == 'card' || clas == 'card-sm' || clas == 'card-lg' || clas == 'circle' || clas == 'circle-sm' || clas == 'circle-lg' || clas == 'square' || clas == 'square-sm' || clas == 'square-lg') {
			elements.push({
				clas: 'ls_' + clas,
				type: 'skeleton'
			});
		} else {
			elements.push({
				clas: '',
				type: clas
			});
		}
		return elements;
	}