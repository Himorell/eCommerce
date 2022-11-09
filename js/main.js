function loadHtmlCatalog(){
    fetch('../catalog.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('homePage').innerHTML = text);
  }
  
  
  function loadHtmlProduct(){
    fetch('../product.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('homePage').innerHTML = text);
  }