/*var ruudukonKoko = prompt("Kuinka ison ruudukot haluat?(esim. syöte 5 tekee 5x5 kokoisen ruudukon)");
	var numeroSkaala = prompt("Kuinka suuren numeroskaalan haluat?(Huom. määrän tulee olla vähintään yhtä paljon kuin ruudukon solujen lukumäärä eli tässä tapauksessa >= " + (ruudukonKoko * ruudukonKoko));

	var lkmRuudukko = document.getElementsByName("lkmRuudukko");
	document.getElementById.innerHTML = lkmRuudukko;
	console.log(lkmRuudukko);*/
	
	var randomList = new Array();	
	var scaleMin = 1;
	var scaleMax = 75;
	var size = 5;	
	
	function generateRandomList(scaleMin, scaleMax){	
		for(var i=scaleMin;i<=scaleMax;i++){
		randomList.push(i);
		}		
			for(var j, x, i = randomList.length; i; j = Math.floor(Math.random() * i), x = randomList[--i], randomList[i] = randomList[j], randomList[j] = x);
			return randomList;	
	}	
	
	function generateValuesForGrid(size, scaleMin, scaleMax){
		generateRandomList(scaleMin, scaleMax);		
		var slicedList = randomList.slice(scaleMin-1, (size*size));
		return slicedList;
	}	
	
	function generateGrid(size, scaleMin, scaleMax){
		var valuesForGrid = generateValuesForGrid(size, scaleMin, scaleMax);
		console.log(valuesForGrid);
		for (var i=0; i<valuesForGrid.length; i++){			
			if (i % size == 0){
				console.log("rivinvaihto");
			}
			console.log(valuesForGrid[i]);
		}
	}

	generateGrid(size, scaleMin, scaleMax);
		
	
	