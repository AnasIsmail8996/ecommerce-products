

//  fetch('https://fakestoreapi.com/products')
//  .then(res => res.json())
//  .then(data => {
//    console.log(data);

//    let productsContainer = document.getElementById('productsContainer');
   
//    data.forEach(product => {
//      const { image, title, description, price , rating, rate  } = product;
     
    
//      productsContainer.innerHTML += `
//        <div class="card mt-2" style="width: 18rem;">
//          <img src="${image}" class="card-img-top news-img" alt="...">
//          <div class="card-body">
//            <h3 class="card-title">${title.slice(0, 20)}....</h3>
//            <p class="card-text">${description.slice(0, 50)}...</p>
//            <button type="button" class="btn btn-info">$ : ${price}</button>
//            <button type="button" class="btn btn-warning">rating : ${rating.rate}</button><br>
//            <button type="button" class="btn btn-success" onclick="addToCart('${title}', '${price}')">
//         <i class="fas fa-cart-plus"> </i> Add to Cart
//       </button>

//          </div>
//        </div>
//      `;
     
//    });
//  });




















fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(data => {
  console.log(data);
  displayProducts(data)
});


const displayProducts = (data) => {
  let productsContainer = document.getElementById('productsContainer');
  let searchInput = document.querySelector('#search')
  let searchBtn = document.querySelector('#searchBtn').addEventListener('click',()=>{
    displayProducts(data)
  })

  if(searchInput.value === ""){
    data.forEach(product => {
      const { image, title, description, price , rating, rate  } = product;
  
      productsContainer.innerHTML += `
      <div class="card my-2" style="width: 18rem;">
        <img src="${image}" class="card-img-top news-img" alt="...">
        <div class="card-body">
          <h3 class="card-title">${title.slice(0, 20)}....</h3>
          <p class="card-text">${description.slice(0, 50)}...</p>
          <button type="button" class="btn btn-info">$ : ${price}</button>
          <button type="button" class="btn btn-warning">rating : ${rating.rate}</button><br>
          <button type="button" class="btn btn-success" onclick="addToCart('${title}', '${price}')">
            <i class="fas fa-cart-plus"> </i> Add to Cart
          </button>
          </div>
        </div>
        `
        }
      )
  }else{
    productsContainer.innerHTML = '';

      const searchData = data.filter(element=> element.title.toLowerCase().includes(searchInput.value.toLowerCase()))
    // const searchData = data.filter(element=> element.title.toLowerCase() === searchInput.value.toLowerCase())

    searchData.forEach(product => {
      const { image, title, description, price , rating, rate  } = product;
  
      productsContainer.innerHTML += `
      <div class="card my-2" style="width: 18rem;">
        <img src="${image}" class="card-img-top news-img" alt="...">
        <div class="card-body">
          <h3 class="card-title">${title.slice(0, 20)}....</h3>
          <p class="card-text">${description.slice(0, 50)}...</p>
          <button type="button" class="btn btn-info">$ : ${price}</button>
          <button type="button" class="btn btn-warning">rating : ${rating.rate}</button><br>
          <button type="button" class="btn btn-success" onclick="addToCart('${title}', '${price}')">
            <i class="fas fa-cart-plus"> </i> Add to Cart
          </button>
          </div>
        </div>
        `
        }
      )
    console.log(searchData);
    // console.log(searchInput);
  }
  }




