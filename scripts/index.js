import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

import {data} from "../components/meal.js";

import append from "../components/append.js"

window.onload=()=>{
    append(container,data)
}