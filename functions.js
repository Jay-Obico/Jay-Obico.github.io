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

    }else if (instance==="F-btn"){
        document.getElementById("F-btn").disabled = true;
        document.getElementById("OC-btn").disabled = false;
        document.getElementById("R-btn").disabled = false;
        document.getElementById("Faculty").classList.remove("d-none");
        document.getElementById("Organizational").classList.add("d-none");

        var home;
        home=document.getElementsByClassName("col-2");
    
        for (var i=0; i<home.length; i++){
            home[i].classList.remove("d-none");
        }

    }else if (instance==="OC-btn"){
        document.getElementById("F-btn").disabled = false;
        document.getElementById("OC-btn").disabled = true;
        document.getElementById("R-btn").disabled = false;
        document.getElementById("Faculty").classList.add("d-none");
        document.getElementById("Organizational").classList.remove("d-none");
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

function filter(){
    document.getElementById("F-btn").disabled = false;
    document.getElementById("OC-btn").disabled = false;
    document.getElementById("R-btn").disabled = true;
    document.getElementById("Faculty").classList.remove("d-none");
    document.getElementById("Organizational").classList.add("d-none");

    // Searching
    // var home ,card_body, card_title;
    // home = document.getElementsByClassName("card");
    // card_body = home[0].getElementsByClassName("card-body");
    // card_title = card_body[0].getElementsByClassName("card-title");
    // console.log(card_title[0].innerHTML);

    // Find those that dont have a researhc class
    var home;
    home=document.getElementsByClassName("N_research");

    // Hide them
    for (var i=0; i<home.length; i++){
        home[i].classList.add("d-none");
    }
    
}

function search(){
    // Searching

    var home ,card_body, card_title, fix, name;
    home = document.getElementsByClassName("card");
    input = document.getElementById("data_in");
    fix = input.value.toUpperCase();
    console.log(fix);
    for (var i=0; i<home.length; i++){
        card_body = home[i].getElementsByClassName("card-body");
        card_title = card_body[0].getElementsByClassName("card-title");
        
        name = card_title[0].textContent || card_title[0].innerText;
        console.log(name);
        if (name.toUpperCase().indexOf(fix) > -1){
            home[i].parentElement.parentElement.classList.remove("d-none");
        }else{
            home[i].parentElement.parentElement.classList.add("d-none");
        }
    }

    
}

 