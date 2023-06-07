console.log("hola")
const television={
    encendido:"apagado",
    volumen:0,
    canal:0,
    mute:false
}


const btnApagado= document.getElementById("encender");
const btnSubirVolumen=document.getElementById("subirVolumen");
const btnBajarVolumen=document.getElementById("bajarVolumen");
const btnAumentarCanal=document.getElementById("aumentarCanal");
const btnBajarCanal=document.getElementById("bajarCanal");
const btnMute=document.getElementById("mute");
var temporal;
btnApagado.addEventListener("click",()=>{
    if(television.encendido=="apagado"){
        console.log("television encendida")
        console.log(television);
        television.encendido="encendido";
        television.volumen=3;
        television.canal=7;
        btnSubirVolumen.disabled=false;
        btnBajarVolumen.disabled=false;
        btnAumentarCanal.disabled=false;
        btnMute.disabled=false;
        btnBajarCanal.disabled=false;

    }else if(television.encendido=="encendido"){
        console.log("television apagada")
        console.log(television);
        television.encendido="apagado";
        btnSubirVolumen.disabled=true;
        btnBajarVolumen.disabled=true;
        btnAumentarCanal.disabled=true;
        btnMute.disabled=true;
        btnBajarCanal.disabled=true;
        television.volumen=0;
        television.canal=0,
        television.mute=false
    }
},false);



btnSubirVolumen.addEventListener("click",()=>{
   
    if(television.volumen==0){
        television.mute=false;
        television.volumen=1;
    }
    if(television.volumen>=1 && television.volumen<10){
        television.volumen++
        console.log("Estas subiendo volumen");
        console.log(television);
    }else if(television.volumen>=10){
        console.log("Alcanzaste el volumen máximo")
        console.log(television);
    }
    
},false);



btnBajarVolumen.addEventListener("click",()=>{
    
    if(television.volumen==0){
        television.mute=false;
        television.volumen=1;
    }
    if(television.volumen>=2 && television.volumen<=10){
        television.volumen--
        console.log("Estas bajando volumen");
        console.log(television);
    }else if(television.volumen==1){
        console.log("Alcanzaste el volumen minimo")
        console.log(television);
    }
},false);



btnAumentarCanal.addEventListener("click",()=>{
    if(television.canal>=1 && television.canal<10){
        television.canal++
        console.log("Estas subiendo de canal");
        console.log(television);
    }else if(television.canal>=10){
        television.canal=1;
        console.log(television);
    }

},false);



btnBajarCanal.addEventListener("click",()=>{
    if(television.canal<=10 && television.canal>1){
        television.canal--;
        console.log("Estas bajando canal");
        console.log(television);
    }else if(television.canal==1){
        television.canal=10;
        console.log(television);
    }
},false);




btnMute.addEventListener("click",()=>{
    if(television.mute==false){
        television.mute=true;
        console.log("Estas en mute");
        temporal=television.volumen;
        television.volumen=0;  
    }else if(television.mute==true){
        television.mute=false;
        television.volumen=temporal;
        console.log("Quitaste el mute"); 
    }
    console.log(television);
})



