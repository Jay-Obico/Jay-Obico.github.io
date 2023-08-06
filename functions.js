window.onload = (function(){
    try{
        document.getElementById("ECE-btn").disabled = true;
        
    }catch(e){}

    try{
        document.getElementById("ECE-btn-CSO").disabled = true;
        document.getElementById("CpE").classList.add("d-none");
    }catch(e){}
    
    try{
        document.getElementById("Faculty-btn").disabled = true;
        document.getElementById("Student_Achievement").classList.add("d-none");
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

    }else if (instance==="Faculty-btn"){

        document.getElementById("Student_Achievement").classList.add("d-none");
        document.getElementById("Faculty_Achievement").classList.remove("d-none");
        document.getElementById("Faculty-btn").disabled = true;
        document.getElementById("Student-btn").disabled = false;

    }else if (instance==="Student-btn"){

        document.getElementById("Faculty_Achievement").classList.add("d-none");
        document.getElementById("Student_Achievement").classList.remove("d-none");
        document.getElementById("Student-btn").disabled = true;
        document.getElementById("Faculty-btn").disabled = false;

    }
 }

function on_Click_Disable(clicked){

    var childrenList = document.getElementById("Thesis-btn-group").children;
    
    // document.getElementById(clicked.id).disabled=true;
    for(var i=0; i <childrenList.length; i++){
        console.log(clicked.textContent === childrenList[i].textContent);
        
        if(clicked.textContent === childrenList[i].textContent){
            childrenList[i].disabled=true;
            
        }else{
            childrenList[i].disabled=false;
        }
    }


}

 