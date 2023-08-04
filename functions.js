window.onload = (function(){
    try{
        document.getElementById("ECE-btn").disabled = true;
        
    }catch(e){}

    try{
        document.getElementById("ECE-btn-CSO").disabled = true;
    }catch(e){}
    
});

function getID(clicked){
    var instance = clicked.id;

    console.log(instance);

    if(instance==="ECE-btn"){

        document.getElementById("ECE").style.display = 'block';
        document.getElementById("CpE").style.display = 'none';
        document.getElementById("ECE-btn").disabled = true;
        document.getElementById("CpE-btn").disabled = false;
    
        
    }
    else if(instance==="CpE-btn"){
        
        document.getElementById("ECE").style.display = 'none';
        document.getElementById("CpE").style.display = 'block';
        document.getElementById("CpE-btn").disabled = true;
        document.getElementById("ECE-btn").disabled = false;
        
        
    }else if (instance==="ECE-btn-CSO"){

        document.getElementById("ECE").classList.remove("d-none");
        document.getElementById("CpE").classList.add("d-none");
        document.getElementById("ECE-btn-CSO").disabled = true;
        document.getElementById("CpE-btn-CSO").disabled = false;

    }else if (instance==="CpE-btn-CSO"){
        document.getElementById("ECE").classList.add("d-none");
        document.getElementById("CpE").classList.remove("d-none");
        document.getElementById("CpE-btn-CSO").disabled = true;
        document.getElementById("ECE-btn-CSO").disabled = false;

    }
 }


 