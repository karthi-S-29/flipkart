import {Products} from "./datas.js"

let Mobile = document.getElementById("Mobile"); 


for (let data of Products) {
//  console.log(data["category"]);
  data["category"]
  if(data["category"]==="mobile"){
  Mobile.innerHTML += `
    <div class="mobile_box ">
      <img src="${data.image}" alt="${data.name}" />
      <h5>${data.name}</h5>
      <p><span>${data.rating}</span> ★ | Brand: ${data.brand}</p>
      <p>₹ ${data["price"]}</p>
    </div>
  `;
}
}




