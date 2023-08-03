window.onload = (function(){
    document.getElementById("ECE-btn").disabled = true;
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
        
        
    }
 }


 