import "./input.css";
import axios from "axios";

const btn = document.getElementById("btn");
const num = document.getElementById("id");
const text = document.getElementById("advice");


const url = "https://api.adviceslip.com/advice";

async function getData() {
   await axios
      .get(url)
      .then(function ({ data }) {
         const { id, advice } = data.slip;

         num.innerHTML = id;
         text.innerHTML = `"${advice}"`;
      })
      .catch((err) => {
         console.log("You have an error", err);
      });
}



btn.addEventListener("click", function () {
   getData();
});
