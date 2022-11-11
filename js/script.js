//-----------navigation----------------//
var bar = document.getElementById('bar');
var close = document.getElementById('close');

var mu = document.getElementById('menu');

if (bar){
    bar.addEventListener('click',()=> {
        mu.classList.add('active');
    })
}
if (close){
    close.addEventListener('click',()=> {
        mu.classList.remove('active');
    })
}


//=========active scroll navigation=================//
var section = document.querySelectorAll('section');
var navbar = document.querySelectorAll('section nav a');

window.onscroll = () =>{
    section.forEach(sec =>{
        var top = window.scrollY;
        var offset = sec.offsetTop - 100;
        var height = sec.offsetHeight;
        var id = sec.getAttribute('id');


        if (top >= offset && top <offset + height){
            navbar.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('section nav a[href*=' + id + ']').classList.add
                ('active');
            });
           };
    });
};







//===========popup======//
var popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
    
}

//===========popup end======//

//===========quad bike======//

var bikeimage = document.getElementById("bikeimg");
var bike1 = document.getElementById("bike1");
var bike2 = document.getElementById("bike2");
var model = document.getElementById("model");
var km = document.getElementById("km");
var speed = document.getElementById("speed");
var engin = document.getElementById("cc");





bike1.onclick = function(){
   bikeimg.style.backgroundImage = "url(img/bike/png/bike1.png)";
   model.innerHTML="BIKE 1";
   km.innerHTML="12 sec";
   speed.innerHTML="150 km/h";
   engin.innerHTML="300cc";


}

bike2.onclick = function(){
    bikeimg.style.backgroundImage = "url(img/bike/png/bike2.png)";
    model.innerHTML="BIKE 2";
    km.innerHTML="8 sec"
    speed.innerHTML="180 km/h";
    engin.innerHTML="450cc";

}
//======================quad bike end========================//


//=====================track start==========================//

var trackimage = document.getElementById("trackimg");
var track1 = document.getElementById("Track1");
var track2 = document.getElementById("Track2");
var track3 = document.getElementById("Track3");
var race = document.getElementById("race");
var easy = document.getElementById("ea");
var surface = document.getElementById("di");
var dis = document.getElementById("k");





track1.onclick =function(){
    trackimage.style.backgroundImage = "url(img/map/m1.png)";
    race.innerHTML="TRACK 1";
    easy.innerHTML="Easy";
    surface.innerHTML="Dirt";
    dis.innerHTML="1.5 km"
}

track2.onclick =function(){
    trackimage.style.backgroundImage = "url(img/map/m2.png)";
    race.innerHTML="TRACK 2";
    easy.innerHTML="Medium";
    surface.innerHTML="Turf";
    dis.innerHTML="2.5 km";
}
track3.onclick =function(){
    trackimage.style.backgroundImage = "url(img/map/m3.png)";
    race.innerHTML="TRACK 3";
    easy.innerHTML="Difficult";
    surface.innerHTML="Artificial";
    dis.innerHTML="4.8 km";

}
//=====================track end==========================//


//=====================form start=========================//
function validation(){
    var use = document.getElementById("user").value;
    var em = document.getElementById("email").value;
    var mas = document.getElementById("massage").value;




    if (use ==""){
        document.getElementById("uname").innerHTML="User name required";
        return false;
    }
    if (em==""){
        document.getElementById("mail").innerHTML="email required";
        return false;
    }
    if(mas==""){
        document.getElementById("mass").innerHTML="type your massage";
        return false;
    }
    else{
        document.write("<h5>Thankyou</h5>")
    }
}




