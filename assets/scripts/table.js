$(document).ready(function(){

	let table = [

		[
			{
				symb: 'H',
				name: 'Водород',
				number: 1,
				type: 'otherNotMe'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				symb: 'He',
				name: 'Гелий',
				number: 2,
				type: 'NobleGas'
			}

		],

		[
			{
				symb: 'Li',
				name: 'Литий',
				number: 3,
				type: 'AlMe'
			},
			{
				symb: 'Be',
				name: 'Берилий',
				number: 4,
				type: 'AlErMe'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				symb: 'B',
				name: 'бор',
				number: 5,
				type: 'Metalloid'
			},
			{
				symb: 'C',
				name: 'Углерод',
				number: 6,
				type: 'otherNotMe'
			},
			{
				symb: 'N',
				name: 'Азот',
				number: 7,
				type: 'otherNotMe'
			},
			{
				symb: 'O',
				name: 'Кислород',
				number: 8,
				type: 'otherNotMe'
			},
			{
				symb: 'F',
				name: 'Фтор',
				number: 9,
				type: 'Gallogen'
			},
			{
				symb: 'Ne',
				name: 'Неон',
				number: 10,
				type: 'NobleGas'
			}

		],

		[
			{
				symb: 'Na',
				name: 'Натрий',
				number: 11,
				type: 'AlMe'
			},
			{
				symb: 'Mg',
				name: 'Магний',
				number: 12,
				type: 'AlErMe'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				isEmpty: 'true'
			},
			{
				symb: 'Al',
				name: 'Алюминий',
				number: 13,
				type: 'Post'
			},
			{
				symb: 'Si',
				name: 'Кремний',
				number: 14,
				type: 'Metalloid'
			},
			{
				symb: 'P',
				name: 'Фосфор',
				number: 15,
				type: 'otherNotMe'
			},
			{
				symb: 'S',
				name: 'Сера',
				number: 16,
				type: 'otherNotMe'
			},
			{
				symb: 'Cl',
				name: 'Хлор',
				number: 17,
				type: 'Gallogen'
			},
			{
				symb: 'Ar',
				name: 'Аргон',
				number: 18,
				type: 'NobleGas'
			}

		],

		[
			{
				symb: 'K',
				name: 'Калий',
				number: 19,
				type: 'AlMe'
			},
			{
				symb: 'Ca',
				name: 'Кальций',
				number: 20,
				type: 'AlErMe'
			},
			{
				isEmpty: 'true'
			},
			{
				symb: 'Sc',
				name: 'Скандий',
				number: 21,
				type: 'Trans'
			},
			{
				symb: 'Ti',
				name: 'Титан',
				number: 22,
				type: 'Trans'
			},
			{
				symb: 'V',
				name: 'Ванадий',
				number: 23,
				type: 'Trans'
			},
			{
				symb: 'Cr',
				name: 'Хром',
				number: 24,
				type: 'Trans'
			},
			{
				symb: 'Mn',
				name: 'Марганец',
				number: 25,
				type: 'Trans'
			},
			{
				symb: 'Fe',
				name: 'Железо',
				number: 26,
				type: 'Trans'
			},
			{
				symb: 'Co',
				name: 'Кобальт',
				number: 27,
				type: 'Trans'
			},
			{
				symb: 'Ni',
				name: 'Никель',
				number: 28,
				type: 'Trans'
			},
			{
				symb: 'Cu',
				name: 'Медь',
				number: 29,
				type: 'Trans'
			},
			{
				symb: 'Zn',
				name: 'Цинк',
				number: 30,
				type: 'Trans'
			},
			{
				symb: 'Ga',
				name: 'Галлий',
				number: 31,
				type: 'Post'
			},
			{
				symb: 'Ge',
				name: 'Германий',
				number: 32,
				type: 'Metalloid'
			},
			{
				symb: 'As',
				name: 'Мышьяк',
				number: 33,
				type: 'Metalloid'
			},
			{
				symb: 'Se',
				name: 'Селен',
				number: 34,
				type: 'otherNotMe'
			},
			{
				symb: 'Br',
				name: 'Бром',
				number: 35,
				type: 'Gallogen'
			},
			{
				symb: 'Kr',
				name: 'Криптон',
				number: 36,
				type: 'NobleGas'
			}

		],
		[
			{
				symb: 'Rb',
				name: 'Рубидий',
				number: 37,
				type: 'AlMe'
			},
			{
				symb: 'Sr',
				name: 'Стронций',
				number: 38,
				type: 'AlErMe'
			},
			{
				isEmpty: 'true'
			},
			{
				symb: 'Y',
				name: 'Итрий',
				number: 39,
				type: 'Trans'
			},
			{
				symb: 'Zr',
				name: 'Циркорий',
				number: 40,
				type: 'Trans'
			},
			{
				symb: 'Nb',
				name: 'Ниобий',
				number: 41,
				type: 'Trans'
			},
			{
				symb: 'Mo',
				name: 'Молибден',
				number: 42,
				type: 'Trans'
			},
			{
				symb: 'Tc',
				name: 'Техниций',
				number: 43,
				type: 'Trans'
			},
			{
				symb: 'Ru',
				name: 'Рутений',
				number: 44,
				type: 'Trans'
			},
			{
				symb: 'Rh',
				name: 'Родий',
				number: 28,
				type: 'Trans'
			},
			{
				symb: 'Pd',
				name: 'Паладий',
				number: 29,
				type: 'Trans'
			},
			{
				symb: 'Ag',
				name: 'Серебро',
				number: 30,
				type: 'Trans'
			},
			{
				symb: 'Cd',
				name: 'Кадмий',
				number: 31,
				type: 'Trans'
			},
			{
				symb: 'In',
				name: 'Индий',
				number: 32,
				type: 'Post'
			},
			{
				symb: 'Sn',
				name: 'Олово',
				number: 32,
				type: 'Post'
			},
			{
				symb: 'Sb',
				name: 'Сурьма',
				number: 33,
				type: 'Metalloid'
			},
			{
				symb: 'Te',
				name: 'Теллур',
				number: 34,
				type: 'Metalloid'
			},
			{
				symb: 'I',
				name: 'Йод',
				number: 35,
				type: 'Gallogen'
			},
			{
				symb: 'Xe',
				name: 'Ксенон',
				number: 36,
				type: 'NobleGas'
			}

		],
	];

	console.log(table);


	function createBlock(elem, rowIndex) {
		$('.table-row.-row-' + rowIndex	).append('<div class="elem -' + elem.type + '"><h3 class="elem-number">' + elem.number + '</h3><h3 class="elem-symb">' + elem.symb + '</h3><h3 class="elem-name">' + elem.name + '</h3></div>')
	}

	function createEmptyBlock(elem, rowIndex) {
		$('.table-row.-row-' + rowIndex).append('<div class="elem"><h3 class="elem-number"></h3><h3 class="elem-symb"></h3><h3 class="elem-name"></h3></div>')
	}

	function createRow(index){
		$('.table-content').append('<div class="table-row -row-' + index + '"></div>');

	}

		for(let j = 0; j < table.length; j++){
			createRow(j);
			for(let i = 0; i < table[j].length; i++){
				if (table[j][i].isEmpty) {
					createEmptyBlock(table[j][i], j);
				} else {
					createBlock(table[j][i], j);
				}
			};
		};
});