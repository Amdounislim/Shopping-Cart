// var btns = Array.from(document.querySelectorAll('.add'))

// btns.map(el => el.addEventListener("click", function(){
// 	el.nextElementSibling.innerHTML = Number(el.nextElementSibling.innerHTML)+ 1;
// })) 


// var trushs = document.querySelectorAll(".fa-times")

// for(let trush of trushs) {
// 	trush.addEventListener("click", function(){
// 		trush.parentNode.remove();
// 	})
// }

var btns = document.querySelectorAll(".add");

for (let btn of btns){
	btn.addEventListener("click", function () {
		// console.log(btn.nextElementSibling.innerHTML)
	btn.nextElementSibling.innerHTML= Number(btn.nextElementSibling.innerHTML)+1;
	// for (let price of prices) {
	//  price.innerHTML = btn.nextElementSibling.innerHTML*Number(price.innerHTML);
	// }
	document.getElementById('totalp').innerHTML= "Shopping Bag total : $" + sum();
});
}

var btnsminus = document.querySelectorAll(".minus");
for (let btnminu of btnsminus){
	btnminu.addEventListener("click", function () {
		// console.log(btn.nextElementSibling.innerHTML)
		if (btnminu.previousElementSibling.innerHTML>0) {
				btnminu.previousElementSibling.innerHTML= Number(btnminu.previousElementSibling.innerHTML)-1

		}
		document.getElementById('totalp').innerHTML= "Shopping Bag total : $" + sum();
});
}

var hearts = document.querySelectorAll(".fa-heart");
for (let heart of hearts){
	heart.addEventListener("click", function () {
		if (heart.style.color === "red"){
		 heart.style.color = "grey";
		}
		else heart.style.color = "red"    
});
}

var trushs = document.querySelectorAll(".fa-times");
for (let trush of trushs){
	trush.addEventListener("click", function () {
	trush.parentNode.remove();
	document.getElementById('totalp').innerHTML= "Shopping Bag total : $" + sum();
});
}


function sum() {
let prices =  document.getElementsByClassName('price')
let qtes = document.getElementsByClassName('qte')

	var sum = 0;
	for (var i = 0; i < prices.length; i++) {
		sum += prices[i].innerHTML * qtes[i].innerHTML
	}
	return sum;
	}