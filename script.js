//add quantite
let btnplus=document.getElementsByClassName("add")
for(let i=0; i<btnplus.length; i++){
    btnplus[i].addEventListener("click", function(){
        btnplus[i].nextElementSibling.innerHTML++;
        somme()
    })
}

// diminue quantite
let btnminus=document.querySelectorAll(".minus")
for(let btn of btnminus){
    btn.addEventListener("click", function(){
        if(btn.previousElementSibling.innerHTML>0){
            btn.previousElementSibling.innerHTML--
            somme()
        }
        
    })
}


// supprimer row
let trush=Array.from(document.querySelectorAll(".fa-times"))
trush.map(el=>el.addEventListener("click", function(){
    el.parentNode.remove()
    somme()
}))

//fonction somme
function somme(){
    let price = document.getElementsByClassName("price")
    let qte = document.getElementsByClassName("qte")
    let sum=0
    for(let i =0; i<price.length; i++){
        sum+=price[i].innerHTML*qte[i].innerHTML
    }
    return document.getElementById("totalp").innerHTML = "Shopping Bag total : $" + sum
}


//j'ador
let hearts=document.getElementsByClassName("fa-heart")
for(let heart of hearts){
    heart.addEventListener("click", function(){
        // if(heart.style.color==="red"){
        //     heart.style.color="gray"
        // }
        // else heart.style.color="red"
        heart.classList.toggle('red')
    })
}