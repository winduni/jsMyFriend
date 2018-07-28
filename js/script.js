function myFirstApp(name, age){
	alert("Привет, меня зовут " + name +" и это моя первая программа!");

	function showSkills(){
		let skills = [
'HTML',
'CSS',
'Photoshop'
		];

		for (let i = 0; i < skills.length; i++){
			document.write('Я владею ' + skills[i] + '<br>');
		}
	}

showSkills();


	function checkAge(){
		if (age > 18){
			document.write('Мне больше 18 лет');
		}
		else{
			document.write('Мне еще нет 18 лет');
		}
	}
	checkAge()

	function calcPow(num){
		console.log(num**2)
	}
	calcPow(4)
}

myFirstApp("Дарья", 26)