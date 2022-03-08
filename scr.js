


var estoyenescultura=true;
function aquienllamomiaplicaci(thiss){
    try {
        
        noverregistro();
        if(estoyenescultura){
            noversculptura();
           
        }
      
    } catch (error) {
        console.log("error aquienllamomiaplicaci ");
        console.log(error);
    }
  
    if("idregistropanel"==thiss.id){
        verregistro();
    }
    if("idpanelscultura"==thiss.id){
        versculptura();
    }
    
}



function versculptura(){
    var addm=' <div id="idsculptura"></div>';
    $("body").append(addm);
    $("#idsculptura").addClass("ampliar");

   var irfra=' <iframe id="idyoirame" onload="cargoiframe()" src="https://unonubes4.github.io/arutpulse/" title=""></iframe>'

   $("#idsculptura").append(irfra);
   $("#idyoirame").addClass("ampliar");



}
function noversculptura(){
    $("#idyoirame").removeClass("ampliar");
    $("#idyoirame").remove();
    
    $("#idsculptura").removeClass("ampliar");

    $("#idsculptura").remove();
    $("#idbtcerrarsculp").remove();

    
}


function cargoiframe(){
    var bt='<button id="idbtcerrarsculp" onclick="cerrarsculpt();">cerrar</button>';
    $("body").append(bt);
}




function cerrarsculpt () { 
    noversculptura();
 }

 function saliendodelprograma() {
    return "vasa a salir del sitio";
  }

  

  
/* setTimeout(function(){
   // alert("inicia");
window.location="https://www.google.com/search?q=casa&oq=casa&aqs=chrome..69i57j35i39i362l6j35i39l2j0i433i512.706j0j15&sourceid=chrome&ie=UTF-8";
},10000) */


/* const firebaseConfig = {  orugnal
    apiKey: "AIzaSyBCt5zHMpW-dmRNUBAUJAmk10MwZtBUgoM",
    authDomain: "giovannimensajes.firebaseapp.com",
    databaseURL: "https://giovannimensajes.firebaseio.com",
    projectId: "giovannimensajes",
    storageBucket: "giovannimensajes.appspot.com",
    messagingSenderId: "349767130638",
    appId: "1:349767130638:web:7b11090858de1a9d27e65f",
    measurementId: "G-TF45QPB31Z"
  };

 */
/*   const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

 */
var firebase;
  var config = {
   
  
   
 



    apiKey: "AIzaSyBCt5zHMpW-dmRNUBAUJAmk10MwZtBUgoM",
    authDomain: "giovannimensajes.firebaseapp.com",
    databaseURL: "https://giovannimensajes.firebaseio.com",
    projectId: "giovannimensajes",
    storageBucket: "giovannimensajes.appspot.com",
    messagingSenderId: "349767130638",
    appId: "1:349767130638:web:7b11090858de1a9d27e65f",
    measurementId: "G-TF45QPB31Z"



  };
  firebase.initializeApp(config);

var  apellido="";
var  apellido2="";
var  celular="";
var  clave="";
var  correo="";
var  cursocodigo="";
var  id="";
var  nombre="";
var  saldos="";
var  usuario="";

function limpiarfirebsenombreusuario(){
    apellido = "";
    apellido2 = "";
    celular = "";
    clave = "";
    correo = "";
    cursocodigo = "";
    id = "";
    nombre = "";
    saldos = "";
    usuario = "";

}

function llenarfirebsenombreusuario(){
    apellido = "aaa";
    apellido2 = "aaa";
    celular = "aaa";
    clave = "aa";
    correo = "aa";
    cursocodigo = "aa";
    id = "aa";
    nombre = "";
    saldos = "aa";
    usuario = "aa";

}

function subirinformacionafr(){
  
    

    var objetoasubirpersona={
        apellido :apellido2,
        apellido2 :apellido,
        celular :celular,
        clave :clave,
        correo :correo,
        cursocodigo :cursocodigo,
        id :id,
        nombre :nombre,
        saldos :saldos,
        usuario :usuario

    }
try {

    

    
  firebase.database().ref("raizd").child("usuarios").child("ano").child("2022").push(objetoasubirpersona);

    alert("suibio");
  
} catch (error) {
    console.log(error);
}
  

}





function subirinformacionafr2(){
    apellido = "aaa";
    apellido2 = "aaa";
    celular = "aaa";
    clave = "aa";
    correo = "aa";
    cursocodigo = "aa";
    id = "aa";
    nombre = "";
    saldos = "aa";
    usuario = "aa";

    var objetoasubirpersona={
        apellido :apellido2,
        apellido2 :apellido,
        celular :celular,
        clave :clave,
        correo :correo,
        cursocodigo :cursocodigo,
        id :id,
        nombre :nombre,
        saldos :saldos,
        usuario :usuario

    }
try {

    

    
  //  firebase.database().ref("raizd").child("usuarios").child("ano").child("2022").push(objetoasubirpersona);

    
  
} catch (error) {
    console.log(error);
}
  

}
/* 
setTimeout(function(){
    subirinformacionafr()
},20000); */
var  yaentrereg=false;

function etoyregis (param) {
  document.getElementById("papellido").value=apellido;
 document.getElementById("dosapellido").valu=apellido2e;
    document.getElementById("celular").value=celular;
  document.getElementById("clavereg").value=clave;
 document.getElementById("correoreg").value=correo;
  
    
   document.getElementById("cedulareg").value=id;
document.getElementById("nombrereg").value=nombre;
  
    
document.getElementById("usuarioreg").value=usuario;

  }
function registrarn(){
    var todobien=true;
    if(yaentrereg){
        etoyregis ("");
    }
    apellido = document.getElementById("papellido").value;
    apellido2 = document.getElementById("dosapellido").value;
    celular = document.getElementById("celular").value;
    clave =document.getElementById("clavereg").value;
    correo = document.getElementById("correoreg").value;
  
    
    id =document.getElementById("cedulareg").value;
    nombre = document.getElementById("nombrereg").value;
  
    
    usuario =document.getElementById("usuarioreg").value;
    if(apellido==""){
        alert("primer apellido sin registar");
        todobien=false;

    }
    if(apellido2==""){
        alert("segundo apellido sin registar");
        todobien=false;

    }
    if(celular==""){
        alert("celular apellido sin registar");
        todobien=false;

    }
    if(correo==""){
        alert("correo  sin registar");
        todobien=false;

    }
    if(clave==""){
        alert("clave apellido sin registar");
        todobien=false;

    }

    if(id==""){
        alert("id  sin registar");
        todobien=false;

    }
    if(nombre==""){
        alert("nombre sin registar");
        todobien=false;

    }
    if(usuario==""){
        alert("usuario sin registar");
        todobien=false;

    }
    if(todobien){
        subirinformacionafr();
        todobien=false;
    }
    yaentrereg=true;


}




function verregistro(){
    

var unstri = '<div id="idloginpanelreg">' +

'<div class="vid-container maximo">' +
'   <video class="bgvid maximo" autoplay="autoplay" muted="muted" preload="auto" loop>' +
' <source src="https://mazwai.com/videvo_files/video/free/2015-09/small_watermarked/postcard_from_big_sur_preview.webm" type="video/webm">' +
'    </video>' +
'   <div class="inner-container maximo">' +


'  <br>' +
' <div id="divloginpaparent">' +

'   <div class="box">' +
'           <h1>Registro</h1>' +
' <input id="nombrereg" type="text" placeholder="nombre"/>' +
'  <input id="papellido"  type="text" placeholder="primer apellido"/>' +
'             <input id="dosapellido"  type="text" placeholder="segundo apellido"/>' +
'   <input id="correoreg" type="text" placeholder="correo"/>' +


' <p><span></span></p>' +
' </div>' +
'  <div class="box2">' +
'      <h1></h1>' +
'  <input id="celular" type="text" placeholder="celular"/>' +
'  <input id="usuarioreg" type="text" placeholder="usuario"/>' +
'  <input id="clavereg" type="text" placeholder="clave"/>' +
'  <input  id="cedulareg" type="text" placeholder="cedula"/>' +
'                <button onclick="registrarn();">registrar</button>' +
'  <br>' +
'<button onclick="noverregistro();">cerrar</button>'+

'       </div>' +
' </div>' +

' </div>' +
'   </div>' +


'</div>';



$("body").append(unstri);



 
  



}
function noverregistro(){

    
    $("#idloginpanelreg").remove();

    
}


