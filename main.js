let divData= document.getElementById("divData");


function getData(){
    const promesa= fetch("https://freetestapi.com/api/v1/products",{method:"GET"});

    promesa.then().then((response)=>{
            response.json().then((data)=>{
                console.log(data);
                createCards(data);

            }).catch((error)=> console.log("problema con el jason", error));

}).catch((er)=>console.log("existe un problema",er))
} //get data

function createCards(products){
    console.log(products.length);
    console.log(products[0].name);
    // crar una card por cada producto con sus datos esenciales
    products.forEach(p => {
       
           const card= `<div class="card col" style="width: 18rem;" style="display:inline-block">
            <img src="${p.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${p.name}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">${p.price}</h6>
              <p class="card-text">${p.description}</p>
             
            </div>
          </div>`;

        divData.insertAdjacentHTML("beforeend",card)
        
    });
  
    // de preferencia foreach: name, description, image, price
}

getData()