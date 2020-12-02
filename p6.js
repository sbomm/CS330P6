function color2(){
    let whi = document.getElementById("contact-info");
    if (whi){
        whi.style.color = "white";
    }
}

function color1(){
    let whi = document.getElementById("contact-info");
    if (whi){
        whi.style.color = "deeppink";
    }
}

function switchit(){
    for(var i=900; i < 4500; i = i+900){
        setTimeout("color1()", i);
        setTimeout("color2()", i+450);
    }
}