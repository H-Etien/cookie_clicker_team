var counter;
var total = 0;
var obj_boost ={
    multiplicateur_by_click : 1,
    multiplicateur_auto_clicker : 0,

};

var prix_boost_1 = 10;
var prix_auto_clicker = 10;

let counter_id = document.getElementById("counter")


let interval_auto_click = setInterval(() => {
    total = total + obj_boost.multiplicateur_auto_clicker ;
    counter_id.innerHTML ="Cookies : " + total;
}, 10000);

//cookie +1
document.getElementById("clicker").addEventListener("click",() =>{
    total = total + obj_boost.multiplicateur_by_click ;
    counter_id.innerHTML = "Cookies : " + total;
})

//booster 1
document.getElementById("boost-1").addEventListener("click", () =>{
    
    if (total >= prix_boost_1){
        total -= prix_boost_1;

        prix_boost_1 *= 2 ;

        obj_boost.multiplicateur_by_click++;
        counter_id.innerHTML ="Cookies : " + total;

        //affichage
        document.getElementById("prix-1").innerText ="prix : " + prix_boost_1;
        document.getElementById("multiplicateur").innerHTML = "Boost : " + obj_boost.multiplicateur_by_click;

    }
})

//booster 2
document.getElementById("auto-click").addEventListener("click", () =>{
    if(total >= prix_auto_clicker){
        total -= prix_auto_clicker;
        counter_id.innerHTML ="Cookies : " + total;

        prix_auto_clicker *= 2;
        document.getElementById("prix_auto_click").innerHTML = "Prix : "+ prix_auto_clicker;

        obj_boost.multiplicateur_auto_clicker++;
        let interval_time = 1000 / obj_boost.multiplicateur_auto_clicker;

        //fonction pour boucler auto click
        clearInterval(interval_auto_click);

        interval_auto_click = setInterval(() => {
            total = total + 1 ;
            counter_id.innerHTML ="Cookies : " + total;
        }, interval_time);


    }
})

//booster 3
