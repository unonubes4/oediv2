
function versculptura(){
    var addm=' <div id="idsculptura"></div>';
    $("body").append(addm);
    $("#idsculptura").addClass("ampliar");

   var irfra=' <iframe id="idyoirame" onload="cargoiframe()" src="https://stephaneginier.com/sculptgl/" title=""></iframe>'

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