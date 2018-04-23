$(document).ready(function(){

	let table = [

		[
			{
				symb: 'H',
				name: 'Водород',
				number: 1,
				main: 'true',
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
				main: 'true',
				type: 'NobleGas'
			}

		]
	]

	console.log(table);


	function createBlock(elem) {
		$('.table-row').append('<div class="elem"><h3 class="elem-number">' + elem.number + '</h3><h3 class="elem-symb">' + elem.symb + '</h3><h3 class="elem-name">' + elem.name + '</h3></div>')
	}

	for(let i = 0; i<=table[0].length; i++){
		if (table[0][i].isEmpty) {
			console.log('empty');
		} else {
			createBlock(table[0][i]);
		}
	};
	
});