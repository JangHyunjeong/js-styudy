const produstList = document.querySelector(".jsProdustList");
const searchInput = document.querySelector("#searchInput");
const dropArea = document.querySelector(".drop-area");
let cartData = [];

// 상품리스트 데이터 받아오기 및 뿌리기
fetch("/homework5/data/store.json")
  .then((res) => res.json())
  .then((data) => {
    const products = data.products;

    // 리스트 초기 셋팅
    createProductList(products);

    // 검색
    searchInput.addEventListener("input", function (e) {
      const inputValue = e.target.value;
      const newProducts = products.filter((a) => {
        return a.title.includes(inputValue) || a.brand.includes(inputValue);
      });
      produstList.innerHTML = "";
      createProductList(newProducts);
    });

    // 담기버튼 클릭시..
    const btnAddToCart = document.querySelectorAll(".btnAddToCart");

    btnAddToCart.forEach((item) => {
      item.addEventListener("click", function () {
        const id = item.parentElement.parentElement.dataset.id;

        const idx = cartData.findIndex((item) => {
          return item.id == id;
        });

        if (idx == -1) {
          let selectedProduct = products.find(function (item) {
            return item.id == id;
          });
          selectedProduct.count = 1;
          cartData.push(selectedProduct);
        } else {
          cartData[idx].count++;
        }

        addToCart(cartData);

        // 총 가격 계산
        calsTotal(cartData);
      });
    });

    // 드래그앤 드롬
    const productItem = document.querySelectorAll(".product-item");

    productItem.forEach(function (item) {
      item.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("id", item.dataset.id);
      });
    });

    dropArea.addEventListener("dragover", function (event) {
      event.preventDefault();
    });

    dropArea.addEventListener("drop", function (event) {
      event.preventDefault();
      const id = event.dataTransfer.getData("id");
      const idx = cartData.findIndex((item) => {
        return item.id == id;
      });

      if (idx == -1) {
        let selectedProduct = products.find(function (item) {
          return item.id == id;
        });
        selectedProduct.count = 1;
        cartData.push(selectedProduct);
      } else {
        cartData[idx].count++;
      }

      addToCart(cartData);
      calcTotal(cartData);
    });
  })
  .catch((err) => console.log(err));

// 상품리스트 생성
function createProductList(item) {
  for (i = 0; i < item.length; i++) {
    produstList.innerHTML += `<li class="product-item" data-id="${item[i].id}" draggable="true" >
    <a href="/" class="image">
      <img src="./images/${item[i].photo}" alt="" />
    </a>
    <div class="product-infos">
      <a href="/" class="title">${item[i].title}</a>
      <span class="company">${item[i].brand}</span>
      <strong class="price">${item[i].price} 원</strong>
      <button type="button" class="btnAddToCart">담기</button>
    </div>
    </li>`;
  }
}

// 카트 리스트 생성
function addToCart(item) {
  dropArea.innerHTML = `<ul class="product-list"></ul>`;
  item.forEach(function (item) {
    let cartItem = `<li class="product-item" data-id="${item.id}" draggable="true">
          <a href="/" class="image">
            <img src="./images/${item.photo}" alt="" />
          </a>
          <div class="product-infos">
            <a href="/" class="title">${item.title}</a>
            <span class="company">${item.brand}</span>
            <strong class="price">${item.price} 원</strong>
            <input type="number" value="${item.count}">
          </div>
          </li>`;
    dropArea.querySelector("ul").innerHTML += cartItem;
  });
}

// 총 가격 계산
function calcTotal(cartData) {
  let totalPrice = 0;
  cartData.forEach(function (item) {
    totalPrice += item.price * item.count;
  });
  document.querySelector(".cart-total dd").innerHTML = `${totalPrice} 원`;
}
