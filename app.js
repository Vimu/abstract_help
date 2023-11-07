function myFunction(){
    let btn = document.getElementsByClassName(".buttons");

    if(btn.style.display === "block"){
        btn.style.display == "none";
    }else{
        btn.style.display = "block";
    }
}