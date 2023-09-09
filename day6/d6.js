
const cart = [
    {
      name: 'shree krishna picture',
      price: 100,
      des: 'This is first product',
    },
    {
      name: 'bholenath shiva picture',
      price: 250,
      des: 'This is Second product',
    },
    {
      name: 'Hanuman picture',
      price: 150,
      des: 'This is third product',
    },
  ];
  
  const display = document.getElementById('cart');
  const btn1 = document.getElementById('one');
  const btn2 = document.getElementById('two');
  const btn3 = document.getElementById('three');
  
  btn1.addEventListener('click', () => {
    const product = cart[0];
    display.innerHTML = `
      <img src="images/product-1.jpg"> <br> ${product.name}<br>Description: ${product.des}<br>Price: Rs ${product.price}
    `;
  });
  
  btn2.addEventListener('click', () => {
    const product = cart[1];
    display.innerHTML = `
      <img src="images/product-2.jpeg"> <br> ${product.name}<br>Description: ${product.des}<br>Price: Rs ${product.price}
    `;
  });
  
  btn3.addEventListener('click', () => {
    const product = cart[2];
    display.innerHTML = `
      <img src="images/product-2.jpeg"> <br> ${product.name}<br>Description: ${product.des}<br>Price: Rs ${product.price}
    `;
  });
  