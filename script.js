let currentItem = {};
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function openModal(title, price, description, imageSrc, rating, views) {
      currentItem = { title, price, description, imageSrc, rating, views };
      document.getElementById('modal').style.display = 'flex';
      document.getElementById('modal-title').innerText = title;
      document.getElementById('modal-price').innerText = price;
      document.getElementById('modal-desc').innerText = description;
      document.getElementById('modal-img').src = imageSrc;
      document.getElementById('modal-rating').innerText = '⭐ ${rating}';
      document.getElementById('modal-views').innerText = '👁 ${views} views';
    }

    function closeModal() {
      document.getElementById('modal').style.display = 'none';
    }

    function addToCart() {
      cart.push(currentItem);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      closeModal();
      alert('${currentItem.title} added to cart!');
    }

    function updateCartCount() {
      document.getElementById('cart-items').innerText = cart.length;
    }

    function increment(btn) {
    let count = btn.previousElementSibling;
    count.textContent = parseInt(count.textContent) + 1;
  }

  function decrement(btn) {
    let count = btn.nextElementSibling;
    let val = parseInt(count.textContent);
    if (val > 1) count.textContent = val - 1;
  }

  let count = 0;
    let cartItems = [];

    function updateCartDisplay() {
      const cartItemsSpan = document.getElementById('cart-items');
      const cartList = document.getElementById('cart-list');

      cartItemsSpan.textContent = cartItems.length;

      cartList.innerHTML = 'Added items';

      if (cartItems.length === 0) {
        cartList.innerHTML = 'No items';
        return;
      }

       cartItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'cart-item';

        const nameSpan = document.createElement('span');
        nameSpan.textContent = item;

        const removeBtn = document.createElement('span');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = '✖';
        removeBtn.addEventListener('click', () => {
          removeItem(index);
        });

        div.appendChild(nameSpan);
        div.appendChild(removeBtn);
        cartList.appendChild(div); 
      });
    }

    function addToCart(itemName) {
      cartItems.push(itemName);
      updateCartDisplay();
    }

    function removeItem(index) {
      cartItems.splice(index, 1);
      updateCartDisplay();
    }

    // Initialize cart count on load
    updateCartCount();