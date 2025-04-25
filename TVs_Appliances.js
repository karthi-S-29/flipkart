import {Products} from "./datas.js"

let tv = document.getElementById("tv"); 

for (let data of Products) {
//  console.log(data["category"]);
  data["category"]
  if(data["category"]==="tv"){
  tv.innerHTML += `
    <div class="mobile_box ">
      <img src="${data.image}" alt="${data.name}" />
      <h5>${data.name}</h5>
      <p> ★ | Brand: ${data.brand}</p>
      <p>₹ ${data["price"]}</p>
    </div>
  `;
}
}

  