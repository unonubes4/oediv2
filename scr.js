
function versculptura(){
    var addm=' <div id="idsculptura"></div>';
    $("body").append(addm);
    $("#idsculptura").addClass("ampliar");

   var irfra=' <iframe id="idyoirame" onload="cargoiframe" src="https://stephaneginier.com/sculptgl/" title=""></iframe>'

   $("#idsculptura").append(irfra);
   $("#idyoirame").addClass("ampliar");
}
function noversculptura(){
    $("#idyoirame").removeClass("ampliar");
    $("#idyoirame").remove();
    
    $("#idsculptura").removeClass("ampliar");

    $("#idsculptura").remove();

    
}


function cargoiframe(){
    alert("iframe cargo");
}

setTimeout(function(){versculptura();
    setTimeout(function(){noversculptura();},5000)
},9000)