import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

document.getElementById("checkout").addEventListener("click",check)
let check=()=>{
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let user=JSON.parse(localStorage.getItem("user"))||[];
    if(user.username===name){
        alert(`${name} ${" "} , your order is successful!`);
    }else{
        window.location.href("login.html")
    }
}
check()