  var container = document.createElement("div");
  container.setAttribute("class", "container mt-5");
  container.setAttribute("id", "main-body");

  var maindiv = document.createElement("div");
  maindiv.setAttribute("class", "row");

  let res;

  async function fetchdata() {
      var url = `https://makeup-api.herokuapp.com/api/v1/products.json`;
      let result = await fetch(url);
      res = await result.json();
      res.forEach(item => {

          var coldiv = document.createElement("div");
          coldiv.setAttribute("class", "col-sm-4");

          var div = document.createElement("div");
          div.setAttribute("class", "card");

          var image = document.createElement("IMG");
          image.setAttribute("src", item.image_link);
          image.setAttribute("alt", item.name);
          div.appendChild(image);

          var innerdiv = document.createElement("div");
          innerdiv.setAttribute("class", "card-body");

          var ancher = document.createElement("A");
          ancher.setAttribute("href", item.product_link);

          var product = document.createElement("h2");
          product.setAttribute("class", "card-title text-capitalize");
          product.textContent = item.brand + ' - ' + item.name;

          ancher.appendChild(product);

          innerdiv.appendChild(ancher);

          var price = document.createElement("h3");
          price.textContent = item.price + ' ' + item.price_sign;
          innerdiv.appendChild(price);

          var par = document.createElement("P");
          par.textContent = item.description;
          innerdiv.appendChild(par);

          div.appendChild(innerdiv);

          coldiv.appendChild(div);

          maindiv.appendChild(coldiv);
      });
      container.appendChild(maindiv);
      document.body.appendChild(container);
  }

  fetchdata();

  function searchData() {
      var searchValue = document.getElementById("sValue").value;

      var filterdata = [];
      res.map(item => {
          let brandValue = item.brand;
          if (brandValue && brandValue.toLowerCase().includes(searchValue.toLowerCase())) {
              filterdata.push(item);
          }
      });

      const element = document.getElementById("main-body");
      element.remove();

      var container = document.createElement("div");
      container.setAttribute("class", "container mt-5");
      container.setAttribute("id", "main-body");

      var maindiv = document.createElement("div");
      maindiv.setAttribute("class", "row");

      filterdata.forEach(item => {

          var coldiv = document.createElement("div");
          coldiv.setAttribute("class", "col-sm-3");

          var div = document.createElement("div");
          div.setAttribute("class", "card");

          var image = document.createElement("IMG");
          image.setAttribute("src", item.image_link);
          image.setAttribute("alt", item.name);
          div.appendChild(image);

          var innerdiv = document.createElement("div");
          innerdiv.setAttribute("class", "card-body");

          var ancher = document.createElement("A");
          ancher.setAttribute("href", item.product_link);

          var product = document.createElement("h2");
          product.setAttribute("class", "card-title text-capitalize");
          product.textContent = item.brand + ' - ' + item.name;

          ancher.appendChild(product);

          innerdiv.appendChild(ancher);

          var price = document.createElement("h3");
          price.textContent = item.price + ' ' + item.price_sign;
          innerdiv.appendChild(price);

          var par = document.createElement("P");
          par.textContent = item.description;
          innerdiv.appendChild(par);

          div.appendChild(innerdiv);

          coldiv.appendChild(div);

          maindiv.appendChild(coldiv);
      });
      container.appendChild(maindiv);
      document.body.appendChild(container);
  }


  async function getData(ele) {
      resultarea.innerHTML = `<button id="btn" onclick="getBrands()">Back</button>`;
      try {
          let data = await fetch(url + `?brand=${ele}`);
          let data1 = await data.json();
          data1.forEach(ele => {
              resultarea.innerHTML += `            
            <div class="container">
            <h3>Brand :${element.brand}</h3>
             <h3>Name :${element.name}</h3>
             <h3>Price :${element.price}</h3>
             <h3>Image :${element.image_link}</h3>
            <img src="${element.image_link} alt="image" width="100" heigth="100">
             <h3>Product Link :${element.product_link}</h3>
             <h3>Description :${element.description}</h3>
             </div>
              `;
          })
      } catch (error) {
          resultarea.innerHTML += `<div class="catch">There is some problem...Please try again later<h2>`;
      }
      console.log(data1);
  };