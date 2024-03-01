
let latestItemConatainer = document.querySelector(
  "#latest-item-list .items-row .owl"
);
let fruitsItemConatainer = document.querySelector(
  "#fruits-item-list .items-row .owl"
);
let vegetablesItemConatainer = document.querySelector(
  "#vegetables-item-list .items-row .owl"
);
let dairyItemConatainer = document.querySelector(
  "#dairy-item-list .items-row .owl"
);

let latestItem = Allitems.filter((value) => {
  return (value.latest == true);
});
let fruitsItem = Allitems.filter((value) => {
  return (value.category == "fruit");
});
let vegetablesItem = Allitems.filter((value) => {
  return (value.category == "vegetable");
});
let dairyItem = Allitems.filter((value) => {
  return (value.category == "dairy");
});

latestItem.forEach((item) => {
  let card = `<div class="item">
<div class="card shadow-sm" style="width: 10rem; height: 12rem;">
  <img src=${item.img} height="100px" class="card-img-top" alt="...">
  <div class="card-body">
    <h6 class="card-title">${item.title}</h6>
    <div class="car-bottom">
      <span>₹${item.amount}</span>
      <button type="button" class="btn btn-outline-success float-end " onclick="addToCart(${item.id})">Add</button>
    </div>
  </div>
</div>
</div>`;
  latestItemConatainer.insertAdjacentHTML("beforeend", card);
});

fruitsItem.forEach((item) => {
  let card = `<div class="item">
    <div class="card shadow-sm" style="width: 10rem; height: 12rem;">
      <img src=${item.img} height="100px" class="card-img-top" alt="...">
      <div class="card-body">
        <h6 class="card-title">${item.title}</h6>
        <div class="car-bottom">
          <span>₹${item.amount}</span>
          <button type="button" class="btn btn-outline-success float-end  " onclick="addToCart(${item.id})">Add</button>
        </div>
      </div>
    </div>
    </div>`;
  fruitsItemConatainer.insertAdjacentHTML("beforeend", card);
});
vegetablesItem.forEach((item) => {
  let card = `<div class="item">
        <div class="card shadow-sm" style="width: 10rem; height: 12rem;">
          <img src=${item.img} height="100px" class="card-img-top" alt="...">
          <div class="card-body">
            <h6 class="card-title">${item.title}</h6>
            <div class="car-bottom">
              <span>₹${item.amount}</span>
              <button type="button" class="btn btn-outline-success float-end  " onclick="addToCart(${item.id})">Add</button>
            </div>
          </div>
        </div>
        </div>`;
  vegetablesItemConatainer.insertAdjacentHTML("beforeend", card);
});
dairyItem.forEach((item) => {
  let card = `<div class="item">
            <div class="card shadow-sm" style="width: 10rem; height: 12rem;">
              <img src=${item.img} height="100px" class="card-img-top" alt="...">
              <div class="card-body">
                <h6 class="card-title">${item.title}</h6>
                <div class="car-bottom">
                  <span>₹${item.amount}</span>
                  <button type="button" class="btn btn-outline-success float-end " onclick="addToCart(${item.id})" >Add</button>
                </div>
              </div>
            </div>
            </div>`;
  dairyItemConatainer.insertAdjacentHTML("beforeend", card);
});


//cart

let cartItemCount = 0;
// Array to store cart items
const cartItems = [];

// Function to update the offcanvas content with current cart items
function updateOffcanvas() {
  const offcanvasBody = document.querySelector('#cart-items');
  if (!offcanvasBody) return; // Check if offcanvasBody exists

  offcanvasBody.innerHTML = '';

  cartItems.forEach(item => {
    const cardHtml = `
      <div class="card mb-3 mx-5" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-6 col-6">
            <img src="${item.img}" class="img-fluid rounded-start h-100 w-100" alt="...">
          </div>
          <div class="col-md-6 col-6">
            <div class="card-body">
              <h6 class="card-title" style="height: 50px;">${item.title}</h6>
              <p class="card-text"><small class="text-body-secondary">₹ ${item.amount}</small></p>
              <button type="button" class="btn btn-sm btn-danger" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
          </div>
        </div>
      </div>
    `;
    offcanvasBody.insertAdjacentHTML('beforeend', cardHtml);
  });

  // update total price
  const totalPrice = cartItems.reduce((total, item) => total + item.amount, 0);
  document.getElementById('total-price').innerText = totalPrice;
}

// function to add item to cart
function addToCart(itemId) {

  const selectedItem = Allitems.find(item => item.id === itemId);
  if (selectedItem) {
    cartItems.push(selectedItem);
   
    updateOffcanvas();
  }
  cartItemCount++; // Increment the cart item count
  updateCartItemCount(); // Update the displayed count
}

// Function to remove item from cart
function removeFromCart(itemId) {
  const index = cartItems.findIndex(item => item.id === itemId);
  if (index !== -1) {
    cartItems.splice(index, 1);
    updateOffcanvas();
  }
  if (cartItemCount > 0) {
    cartItemCount--; // Decrement the cart item count
    updateCartItemCount(); // Update the displayed count
}
}



// Initial rendering of offcanvas
updateOffcanvas();
updateCartItemCount();




// item count

function updateCartItemCount() {
  const cartItemCountElement = document.getElementById('item-count');
  cartItemCountElement.textContent = cartItemCount; // Update the text content with the current count
}





let cardsContainer = document.getElementById('search-con');
let main = document.getElementById('maincon');

function renderCards(filteredData) {

  cardsContainer.innerHTML='';

  filteredData.forEach((item) => {
    const cardHtml = `
    <div class="item">
    <div class="card shadow-sm" style="width: 10rem; height: 12rem;">
      <img src=${item.img} height="100px" class="card-img-top" alt="...">
      <div class="card-body">
        <h6 class="card-title">${item.title}</h6>
        <div class="car-bottom">
          <span>₹${item.amount}</span>
          <button type="button" class="btn btn-outline-success float-end " onclick="addToCart(${item.id})">Add</button>
        </div>
      </div>
    </div>
    </div>
        `;
    cardsContainer.insertAdjacentHTML("afterbegin", cardHtml);
  });
}

function filterData(query) {
  query = query.toLowerCase();
  return Allitems.filter((cardData) =>
    cardData.title.toLowerCase().includes(query)
  );
}

const searchInput = document.getElementById('searchbar');

searchInput.addEventListener('input', function(event) {
  main.innerHTML = "";
    const query = event.target.value.trim();
    const filteredData = filterData(query);
    renderCards(filteredData);
});



renderCards(cardDataArray);