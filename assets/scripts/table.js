$(document).ready(function(){

	let table = [

		[
			{
				symb: 'H',
				name: 'Водород',
				number: 1,
				weight: 1.0087,
				composition: 1 + 's' + '<sup>1</sup>',
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
				weight: 4.0028,
				composition: 1 + 's' + '<sup>2</sup>',
				type: 'NobleGas'
			}

		],

		[
			{
				symb: 'Li',
				name: 'Литий',
				number: 3,
				weight: 6.941,
				composition: 2 + 's' + '<sup>1</sup>',
				type: 'AlMe'
			},
			{
				symb: 'Be',
				name: 'Берилий',
				number: 4,
				weight: 9.012,
				composition: 2 + 's' + '<sup>2</sup>',
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
				weight: 10.811,
				composition: 2 + 's' + '<sup>2</sup>' + 2 + 'p' + '<sup>1</sup>',
				type: 'Metalloid'
			},
			{
				symb: 'C',
				name: 'Углерод',
				number: 6,
				weight: 12.01,
				composition: 2 + 's' + '<sup>2</sup>' + 2 + 'p' + '<sup>2</sup>',
				type: 'otherNotMe'
			},
			{
				symb: 'N',
				name: 'Азот',
				number: 7,
				weight: 14,
				composition: 2 + 's' + '<sup>2</sup>' + 2 + 'p' + '<sup>3</sup>',
				type: 'otherNotMe'
			},
			{
				symb: 'O',
				name: 'Кислород',
				number: 8,
				composition: 2 + 's' + '<sup>2</sup>' + 2 + 'p' + '<sup>4</sup>',
				type: 'otherNotMe'
			},
			{
				symb: 'F',
				name: 'Фтор',
				number: 9,
				composition: 2 + 's' + '<sup>2</sup>' + 2 + 'p' + '<sup>5</sup>',
				type: 'Gallogen'
			},
			{
				symb: 'Ne',
				name: 'Неон',
				number: 10,
				composition: 2 + 's' + '<sup>2</sup>' + 2 + 'p' + '<sup>6</sup>',
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
				number: 45,
				type: 'Trans'
			},
			{
				symb: 'Pd',
				name: 'Паладий',
				number: 46,
				type: 'Trans'
			},
			{
				symb: 'Ag',
				name: 'Серебро',
				number: 47,
				type: 'Trans'
			},
			{
				symb: 'Cd',
				name: 'Кадмий',
				number: 48,
				type: 'Trans'
			},
			{
				symb: 'In',
				name: 'Индий',
				number: 49,
				type: 'Post'
			},
			{
				symb: 'Sn',
				name: 'Олово',
				number: 50,
				type: 'Post'
			},
			{
				symb: 'Sb',
				name: 'Сурьма',
				number: 51,
				type: 'Metalloid'
			},
			{
				symb: 'Te',
				name: 'Теллур',
				number: 52,
				type: 'Metalloid'
			},
			{
				symb: 'I',
				name: 'Йод',
				number: 53,
				type: 'Gallogen'
			},
			{
				symb: 'Xe',
				name: 'Ксенон',
				number: 54,
				type: 'NobleGas'
			}

		],
		[
			{

				symb: 'Cs',
				name: 'Цезий',
				number: 55,
				type: 'AlMe'
			},
			{
				symb: 'Ba',
				name: 'Барий',
				number: 56,
				type: 'AlErMe',
			},
			{
				isEmpty: 'true'
			},
			{
				symb: 'Lu',
				name: 'Лютенций',
				number: 71,
				type: 'Trans'
			},
			{
				symb: 'Hf',
				name: 'Гафний',
				number: 72,
				type: 'Trans'
			},
			{
				symb: 'Ta',
				name: 'Тантал',
				number: 73,
				type: 'Trans'
			},
			{
				symb: 'W',
				name: 'Вольфрам',
				number: 74,
				type: 'Trans'
			},
			{
				symb: 'Re',
				name: 'Рений',
				number: 75,
				type: 'Trans'
			},
			{
				symb: 'Os',
				name: 'Осмий',
				number: 76,
				type: 'Trans'
			},
			{
				symb: 'Ir',
				name: 'Иридий',
				number: 77,
				type: 'Trans'
			},
			{
				symb: 'Pt',
				name: 'Платина',
				number: 78,
				type: 'Trans'
			},
			{
				symb: 'Au',
				name: 'Золото',
				number: 79,
				type: 'Trans'
			},
			{
				symb: 'Hg',
				name: 'Ртуть',
				number: 80,
				type: 'Trans'
			},
			{
				symb: 'Tl',
				name: 'Таллий',
				number: 81,
				type: 'Post'
			},
			{
				symb: 'Pb',
				name: 'Свинец',
				number: 82,
				type: 'Post'
			},
			{
				symb: 'Bi',
				name: 'Висмут',
				number: 83,
				type: 'Post'
			},
			{
				symb: 'Po',
				name: 'Полоний',
				number: 84,
				type: 'Metalloid'
			},
			{
				symb: 'At',
				name: 'Астат',
				number: 85,
				type: 'Gallogen'
			},
			{
				symb: 'Rn',
				name: 'Радон',
				number: 86,
				type: 'NobleGas'
			}

		],
		[
			{
				symb: 'Fr',
				name: 'Франций',
				number: 87,
				type: 'AlMe'
			},
			{
				symb: 'Ra',
				name: 'Радий',
				number: 88,
				type: 'AlErMe'
			},
			{
				isEmpty: 'true'
			},
			{
				symb: 'Lr',
				name: 'Лоуренсий',
				number: 103,
				type: 'Trans'
			},
			{
				symb: 'Rf',
				name: 'РЕзерфордий',
				number: 104,
				type: 'Trans'
			},
			{
				symb: 'Ta',
				name: 'Тантал',
				number: 105,
				type: 'Trans'
			},
			{
				symb: 'Db',
				name: 'Дубний',
				number: 106,
				type: 'Trans'
			},
			{
				symb: 'Sg',
				name: 'Сиборгий',
				number: 106,
				type: 'Trans'
			},
			{
				symb: 'Bh',
				name: 'Борий',
				number: 107,
				type: 'Trans'
			},
			{
				symb: 'Ir',
				name: 'Иридий',
				number: 108,
				type: 'Trans'
			},
			{
				symb: 'Pt',
				name: 'Платина',
				number: 109,
				type: 'Trans'
			},
			{
				symb: 'Au',
				name: 'Золото',
				number: 110,
				type: 'Trans'
			},
			{
				symb: 'Hg',
				name: 'Ртуть',
				number: 111,
				type: 'Trans'
			},
			{
				symb: 'Tl',
				name: 'Таллий',
				number: 112,
				type: 'Post'
			},
			{
				symb: 'Pb',
				name: 'Свинец',
				number: 113,
				type: 'Post'
			},
			{
				symb: 'Bi',
				name: 'Висмут',
				number: 114,
				type: 'Post'
			},
			{
				symb: 'Lv',
				name: 'Ливерморий',
				number: 115,
				type: 'Post'
			},
			{
				symb: 'Uus',
				name: 'Астат',
				number: 116,
				type: 'Gallogen'
			},
			{
				symb: 'Uuo',
				name: 'Радон',
				number: 117,
		 		type: 'NobleGas'
			},

		],
	];

	let extraIsOpen = false;


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



	$('.elem').click(function() {

		clearAll();
		let elem = {};
		let rowCount = $(this).parent().index();
		let symb = $(this).find('.elem-symb').text();

		for ( let i = 0; i < table[rowCount].length; ++i) {
			if (table[rowCount][i].symb === symb) {
				elem = table[rowCount][i];
			}
		}
		$('.js-darknessWannaShy').addClass('-darkness_appears_and_nobody_has_been_expected_that');
		$('.js-darknessWannaShy').click(function(){
			$('.js-darknessWannaShy').removeClass('-darkness_appears_and_nobody_has_been_expected_that');
			$('.js-show-info').removeClass('-show');
		});
	  	$('.js-show-info').addClass('-show');
	  	$('.elem-logo').append('<img src="assets/elements/' + elem.symb + '.jpg">');
	  	$('.elem-info').append('<h3>' + elem.symb + ' ' + elem.name + '</h3><br><h3>Масса:' + elem.weight + '</h3><br><h3>Строение: ' + elem.composition + '</h3>') 
	  	extraIsOpen = true;
	});

	function clearAll() {
	  	$('.js-show-info').html('');
	  	$('.elem-logo').html('');
	  	$('.elem-info').html('');
	  	}

	function getFirstElem(){
		return $('.js-first-calc-elem').val();
	} 

	function getSecondElem(){
		return $('.js-second-calc-elem').val();
	}

	function getThirdElem(){
		return $('.js-third-calc-elem').val();
	}

	$('.calc-count').click(function(){
  		calc();	
  	})

	function calc(){

		let first = 0,
			firstElem = 0,
		  	second = 0,
		  	secondElem = 0,
		  	third = 0,
		  	thirdElem = 0;

	  	for(let j = 0; j < table.length; j++){
			for(let i = 0; i < table[j].length; i++){
				let tableElem = table[j][i].symb
				if (getFirstElem() == tableElem) {
					first = table[j][i].symb
					firstElem = table[j][i]
				} else {
					$('.calc-elem').addClass('-wrong-value')
					setTimeout( function(){$('.calc-elem').removeClass('-wrong-value')}, 5000)
				}
				if (getSecondElem() == tableElem) {
					second = table[j][i].symb
					secondElem = table[j][i]
				}
				if (getThirdElem() == tableElem) {
					third = table[i][i].symb
					thirdElem = table[j][i]
				}
			};
		};
		
		if (first == 0 || second == 0){
			$('.calc-result').text('Либо такого элемента нет, либо вы ничего не ввели')
		}
		else{
			if (third == 0){
				$('.calc-result').text(first + second);
			}
			else{
				$('.calc-result').text(first + second + third);
			}
		}
		return;
	}
});


