const products = [
  {
    id: 1,
    category: 'camisetas',
    name: 'Polera Sin Mangas / Musculosa Negra',
    description: 'Musculosa deportiva de corte atlético fabricada en tejido técnico elástico y respirable, que maximiza la libertad de movimiento en el gimnasio.',
    price: 9990,
    image: 'img/camiseta1.jpg'
  },
  {
    id: 2,
    category: 'camisetas',
    name: 'Polera Manga Larga Gris',
    description: 'Polera de manga larga con protección y tejido de secado rápido. Excelente para entrenamientos en días frescos o al aire libre, ayudando a proteger de la radiación solar.',
    price: 12990,
    image: 'img/camiseta2.jpg'
  },
  {
    id: 3,
    category: 'camisetas',
    name: 'Polera Manga Corta Negra',
    description: 'Polera deportiva básica de manga corta, confeccionada con tela respirable anti-humedad para mantener el cuerpo seco durante entrenamientos intensos.',
    price: 10990,
    image: 'img/camiseta3.jpg'
  },
  {
    id: 4,
    category: 'pantalones',
    name: 'Pantalón Jogger Deportivo Negro',
    description: 'Pantalón largo de entrenamiento con ajuste cómodo en los tobillos y bolsillos laterales con cierre. Ideal para running, calentamientos o uso casual urbano-deportivo.',
    price: 14990,
    image: 'img/pantalon1.jpg'
  },
  {
    id: 5,
    category: 'pantalones',
    name: 'Short Deportivo Gris',
    description: 'Short corto liviano con cintura elástica y cordón ajustable. Diseñado para ofrecer máxima frescura y movilidad en deportes de alta intensidad.',
    price: 9990,
    image: 'img/pantalon2.jpg'
  },
  {
    id: 6,
    category: 'pantalones',
    name: 'Short Deportivo Azul con Franjas Rojas',
    description: 'Short deportivo de diseño clásico con detalles laterales en contraste. Confeccionado en tela ligera de secado rápido, perfecto para fútbol, running o entrenamiento funcional.',
    price: 9990,
    image: 'img/pantalon3.jpg'
  },
  {
    id: 7,
    category: 'accesorios',
    name: 'Visera Deportiva Negra',
    description: 'Visera ultraligera y transpirable de secado rápido, ideal para running, ciclismo o entrenamientos al aire libre. Cuenta con ajuste posterior para mayor comodidad.',
    price: 7990,
    image: 'img/accesorio1.jpg'
  },
  {
    id: 8,
    category: 'accesorios',
    name: 'Botella de Acero Inoxidable',
    description: 'Botella térmica reutilizable de acero inoxidable con boquilla deportiva. Diseñada para mantener tus líquidos frescos durante la rutina de ejercicio o paseos largos.',
    price: 9990,
    image: 'img/accesorio2.jpg'
  },
  {
    id: 9,
    category: 'accesorios',
    name: 'Straps / Correas de Sujeción',
    description: 'Correas de soporte y agarre para entrenamiento de fuerza y halterofilia. Ayudan a reducir la fatiga en el antebrazo y mejoran el agarre en barras y mancuernas.',
    price: 6990,
    image: 'img/accesorio3.jpg'
  }
];

let cart = [];
let auth0Client = null;

const auth0Domain = 'dev-cujndlx7ty5poa86.us.auth0.com';
const auth0ClientId = 'osEIt1P7MXCMZ96GSh1AtFHYCqN948Ib';

function loadCartFromSession() {
  const stored = sessionStorage.getItem('cart');
  cart = stored ? JSON.parse(stored) : [];
}

function saveCartToSession() {
  sessionStorage.setItem('cart', JSON.stringify(cart));
}

function formatPrice(value) {
  return new Intl.NumberFormat('es-CL').format(value);
}

function renderProducts() {
  const container = document.getElementById('product-list');
  container.innerHTML = '';

  const categories = [
    { id: 'camisetas', label: 'Camisetas deportivas' },
    { id: 'pantalones', label: 'Pantalones deportivos' },
    { id: 'accesorios', label: 'Accesorios de deporte' }
  ];

  categories.forEach(cat => {
    const title = document.createElement('h3');
    title.className = 'category-title';
    title.textContent = cat.label;
    container.appendChild(title);

    const row = document.createElement('div');
    row.className = 'category-row';

    const items = products.filter(product => product.category === cat.id);

    items.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';

      card.innerHTML = `
        <img
          src="${product.image}"
          alt="${product.name}"
          class="product-image"
          data-image="${product.image}"
          data-name="${product.name}"
        >
        <div class="product-info">
          <h4>${product.name}</h4>
          <p class="product-desc">${product.description}</p>
          <p class="product-price">Precio: $${formatPrice(product.price)}</p>
        </div>
        <button class="btn-add-cart" data-id="${product.id}">Agregar al carrito</button>
      `;

      row.appendChild(card);
    });

    container.appendChild(row);
  });

  document.querySelectorAll('.btn-add-cart').forEach(button => {
    button.addEventListener('click', () => {
      const id = Number(button.dataset.id);
      addToCart(id);
    });
  });

  initImageZoom();
}

function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  const existing = cart.find(item => item.id === productId);

  if (!product) return;

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCartToSession();
  renderCart();
}

function removeFromCart(productId) {
  const itemIndex = cart.findIndex(item => item.id === productId);

  if (itemIndex === -1) return;

  if (cart[itemIndex].quantity > 1) {
    cart[itemIndex].quantity -= 1;
  } else {
    cart.splice(itemIndex, 1);
  }

  saveCartToSession();
  renderCart();
}

function renderCart() {
  const container = document.getElementById('cart-items');
  const totalSpan = document.getElementById('cart-total');
  container.innerHTML = '';

  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = '<p>Tu carrito está vacío.</p>';
    totalSpan.textContent = '0';
    return;
  }

  cart.forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;

    const row = document.createElement('div');
    row.innerHTML = `
      <span>${item.name} x ${item.quantity} - $${formatPrice(subtotal)}</span>
      <button class="btn-remove-cart" data-id="${item.id}">Quitar</button>
    `;
    container.appendChild(row);
  });

  totalSpan.textContent = formatPrice(total);

  document.querySelectorAll('.btn-remove-cart').forEach(button => {
    button.addEventListener('click', () => {
      const id = Number(button.dataset.id);
      removeFromCart(id);
    });
  });
}

function initImageZoom() {
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-image');
  const modalCaption = document.getElementById('modal-caption');
  const closeBtn = document.getElementById('modal-close');

  document.querySelectorAll('.product-image').forEach(img => {
    img.onclick = () => {
      modal.style.display = 'flex';
      modalImg.src = img.dataset.image;
      modalImg.alt = img.dataset.name;
      modalCaption.textContent = img.dataset.name;
      document.body.style.overflow = 'hidden';
    };
  });

  function closeModal() {
    modal.style.display = 'none';
    modalImg.src = '';
    modalCaption.textContent = '';
    document.body.style.overflow = '';
  }

  closeBtn.onclick = closeModal;

  modal.onclick = event => {
    if (event.target === modal) {
      closeModal();
    }
  };

  document.onkeydown = event => {
    if (event.key === 'Escape' && modal.style.display === 'flex') {
      closeModal();
    }
  };
}

async function initAuth0() {
  auth0Client = await auth0.createAuth0Client({
    domain: auth0Domain,
    clientId: auth0ClientId,
    authorizationParams: {
      redirect_uri: window.location.origin
    },
    cacheLocation: 'memory'
  });

  if (window.location.search.includes('code=')) {
    await auth0Client.handleRedirectCallback();
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  updateAuthUI();
}

async function updateAuthUI() {
  const isAuthenticated = await auth0Client.isAuthenticated();
  const loginBtn = document.getElementById('btn-login');
  const logoutBtn = document.getElementById('btn-logout');
  const welcomeMsg = document.getElementById('welcome-msg');

  if (isAuthenticated) {
    loginBtn.style.display = 'none';
    logoutBtn.style.display = 'inline-flex';

    const user = await auth0Client.getUser();
    const name = user.name || user.nickname || user.email;
    welcomeMsg.textContent = `Bienvenido(a), ${name}`;
  } else {
    loginBtn.style.display = 'inline-flex';
    logoutBtn.style.display = 'none';
    welcomeMsg.textContent = '';
  }
}

async function login() {
  await auth0Client.loginWithRedirect({
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  });
}

async function logout() {
  sessionStorage.clear();
  cart = [];
  renderCart();

  await auth0Client.logout({
    logoutParams: {
      returnTo: window.location.origin
    }
  });
}

function handleCheckoutSubmit(event) {
  event.preventDefault();

  if (cart.length === 0) {
    alert('Debes agregar al menos un producto al carrito.');
    return;
  }

  const name = document.getElementById('full-name').value.trim();
  const address = document.getElementById('address').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const phoneValid = /^[0-9]{8,15}$/.test(phone);

  if (!emailValid) {
    alert('Ingresa un correo válido.');
    return;
  }

  if (!phoneValid) {
    alert('Ingresa un teléfono válido (solo números, entre 8 y 15 dígitos).');
    return;
  }

  let summary = `Cliente: ${name}\nDirección: ${address}\nCorreo: ${email}\nTeléfono: ${phone}\n\nProductos:\n`;
  let total = 0;

  cart.forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    summary += `- ${item.name} x ${item.quantity} = $${formatPrice(subtotal)}\n`;
  });

  summary += `\nTotal: $${formatPrice(total)}`;

  document.getElementById('order-details').textContent = summary;
  document.getElementById('confirmation').style.display = 'block';

  sessionStorage.clear();
  cart = [];
  renderCart();
  document.getElementById('checkout-form').reset();
}

window.addEventListener('DOMContentLoaded', () => {
  loadCartFromSession();
  renderProducts();
  renderCart();

  document.getElementById('btn-login').addEventListener('click', login);
  document.getElementById('btn-logout').addEventListener('click', logout);
  document.getElementById('checkout-form').addEventListener('submit', handleCheckoutSubmit);

  initAuth0();
});