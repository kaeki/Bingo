/*var ruudukonKoko = prompt("Kuinka ison ruudukot haluat?(esim. syöte 5 tekee 5x5 kokoisen ruudukon)");
	var numeroSkaala = prompt("Kuinka suuren numeroskaalan haluat?(Huom. määrän tulee olla vähintään yhtä paljon kuin ruudukon solujen lukumäärä eli tässä tapauksessa >= " + (ruudukonKoko * ruudukonKoko));

	var lkmRuudukko = document.getElementsByName("lkmRuudukko");
	document.getElementById.innerHTML = lkmRuudukko;
	console.log(lkmRuudukko);*/
	var randomList = new Array();
	
	function createGrid(){		
	var numberOfGrids = document.getElementById("numberOfGrids").value;			
	var scaleMin = document.getElementById("scaleMin").value;
	var scaleMax = document.getElementById("scaleMax").value;
	var size = document.getElementById("size").value;
	generateGrid(size, scaleMin, scaleMax, numberOfGrids);
	
	}
	
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
		console.log((size*size));
		return slicedList;
	}	
	
	function generateGrid(size, scaleMin, scaleMax, numberOfGrids){
		console.log(numberOfGrids);
		for (var i=0; i<numberOfGrids; i++){
			var valuesForGrid = generateValuesForGrid(size, scaleMin, scaleMax);
			console.log(valuesForGrid);
			document.getElementById("grids").innerHTML += "<table border='1'><tr>";
			for (var j=0; j<valuesForGrid.length; j++){	
				document.getElementById("grids").innerHTML += "<td>" + valuesForGrid[j] + "</td>";
				console.log(valuesForGrid[j]);			
				if (j != 0 && j % size == 0){
					console.log("Rivi vaihtuu");
					document.getElementById("grids").innerHTML += "MORO</tr>";
				}
				
			}
			document.getElementById("grids").innerHTML += "</table>";
		}
		
	}

	
		
	
	