
	/*var ruudukonKoko = prompt("Kuinka ison ruudukot haluat?(esim. syöte 5 tekee 5x5 kokoisen ruudukon)");
	var numeroSkaala = prompt("Kuinka suuren numeroskaalan haluat?(Huom. määrän tulee olla vähintään yhtä paljon kuin ruudukon solujen lukumäärä eli tässä tapauksessa >= " + (ruudukonKoko * ruudukonKoko));
*/
	var lkmRuudukko = document.getElementsByName("lkmRuudukko");
	document.getElementById.innerHTML = lkmRuudukko;
	console.log(lkmRuudukko);
	var pakka = new Array();
	for(var i=1;i<=52;i++){
	pakka.push(i);
	}
	console.log(pakka);
	
	function ruudukko(){
		
	}
	function shuffle(o){
		for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	}