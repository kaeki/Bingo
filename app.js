/*
camelCase nätisti ja nimet selkeät,
parit sinennykset muokkailin ja 
pari varia vaihdoin consteiksi mutta muuten en muuta keksinyt
generateGrid lähti toimimaan
*/
"use strict";

var randomList = []; //JSLintti käski käyttämään tätä
var gridHtml = '';
function createGrid(){
	//Vaihdoin varit consteiksi ja lintti näköjään niistä herjaakin,
	//AirBnB ohjeen mukaan kuitenkin näin(kö?).
	const numberOfGrids = document.getElementById("numberOfGrids").value;
	const scaleMin = document.getElementById("scaleMin").value;
	const scaleMax = document.getElementById("scaleMax").value;
	const size = document.getElementById("size").value;
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
//Tämän kanssa suli aivot. Lähti toimimaan kun laittoi halutut asiat muuttujaan ja
//lopussa heitti koko rimpsun vasta html sekaan, lieneekö jokin ettei kerennyt käsitellä?
function generateGrid(size, scaleMin, scaleMax, numberOfGrids){
	console.log(numberOfGrids);

	for (var i=0; i<numberOfGrids; i++){
		var valuesForGrid = generateValuesForGrid(size, scaleMin, scaleMax);
		console.log(valuesForGrid);
		gridHtml = "<table border='1'><tr>";

		for (var j=0; j<valuesForGrid.length; j++){	
			gridHtml += "<td>" + valuesForGrid[j] + "</td>";
			console.log(valuesForGrid[j]);
			//Tähän vaihdoin j+1 niin rivivaihto menee oikein,
			//Vanhalla vaihtoi aina ensimmäisellä rivillä yhden liian myöhään riviä
			//Johtunee siitä kun j lähtee 0:sta
			if ((j + 1) % size === 0){
				console.log("Rivi vaihtuu");
				gridHtml += "</tr>";
			}
		}
		document.getElementById("grids").innerHTML += gridHtml + "</table><br>";
	}
}

	
		
	
	