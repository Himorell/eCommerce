

function loadHtmlCatalog(){
    fetch('/eCommerce/catalog.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('homePage').innerHTML = text);
  }
  function loadHtmlProduct(){
    fetch('/eCommerce/product.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('homePage').innerHTML = text);
  }