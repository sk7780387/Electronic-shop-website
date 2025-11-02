// ========================================
// PRODUCTS DATABASE
// ========================================
const products = [
  
    {
        id: 1,
        name: "Samsung Galaxy S24 Ultra",
        category: "smartphones",
        brand: "Samsung",
        price: 1099,
        originalPrice: 1299,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500",
        discount: "15%",
        description: "Ultimate smartphone with AI-powered features and S Pen.",
        features: ["6.8-inch Dynamic AMOLED display", "Snapdragon 8 Gen 3", "200MP camera", "S Pen included"],
        reviews: [
            { user: "Mike R.", rating: 5, comment: "Love the S Pen functionality!" },
            { user: "Lisa K.", rating: 5, comment: "Best Android phone ever!" }
        ],
        stock: 30
    },
    {
        id: 2,
        name: "MacBook Pro 16\"",
        category: "laptops",
        brand: "Apple",
        price: 2499,
        originalPrice: 2799,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
        discount: "10%",
        description: "Supercharged by M3 Pro or M3 Max chip for extreme performance.",
        features: ["M3 Pro chip", "16-inch Liquid Retina XDR display", "Up to 22 hours battery", "96W USB-C Power Adapter"],
        reviews: [
            { user: "Alex T.", rating: 5, comment: "Perfect for video editing!" },
            { user: "Emma W.", rating: 5, comment: "Worth every penny!" }
        ],
        stock: 15
    },
    {
        id: 3,
        name: "Dell XPS 15",
        category: "laptops",
        brand: "Dell",
        price: 1799,
        originalPrice: 1999,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500",
        discount: "10%",
        description: "Premium laptop with stunning InfinityEdge display.",
        features: ["15.6-inch OLED display", "Intel Core i7", "NVIDIA RTX 4050", "32GB RAM"],
        reviews: [
            { user: "Tom H.", rating: 5, comment: "Great for development work!" }
        ],
        stock: 20
    },
    {
        id: 4,
        name: "Sony WH-1000XM5",
        category: "headphones",
        brand: "Sony",
        price: 399,
        originalPrice: 449,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500",
        discount: "11%",
        description: "Industry-leading noise canceling with premium sound quality.",
        features: ["30-hour battery life", "Multipoint connection", "Speak-to-chat", "LDAC audio"],
        reviews: [
            { user: "Chris P.", rating: 5, comment: "Best noise cancellation ever!" }
        ],
        stock: 50
    },
    {
        id: 5,
        name: "AirPods Pro (2nd Gen)",
        category: "headphones",
        brand: "Apple",
        price: 249,
        originalPrice: 279,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500",
        discount: "10%",
        description: "Active Noise Cancellation with Adaptive Audio.",
        features: ["Active Noise Cancellation", "Adaptive Audio", "Up to 6 hours listening", "MagSafe charging"],
        reviews: [
            { user: "Nina S.", rating: 5, comment: "Perfect for iPhone users!" }
        ],
        stock: 60
    },
    {
        id: 6,
        name: "Sony Alpha A7 IV",
        category: "cameras",
        brand: "Sony",
        price: 2299,
        originalPrice: 2499,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500",
        discount: "8%",
        description: "Versatile full-frame camera for photo and video.",
        features: ["33MP full-frame sensor", "4K 60p video", "Real-time tracking", "5-axis stabilization"],
        reviews: [
            { user: "Rachel B.", rating: 5, comment: "Amazing for videography!" }
        ],
        stock: 12
    },
    {
        id: 7,
        name: "Apple Watch Series 9",
        category: "smartwatch",
        brand: "Apple",
        price: 429,
        originalPrice: 479,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500",
        discount: "10%",
        description: "Most advanced Apple Watch with brightest display.",
        features: ["S9 chip", "Double tap gesture", "Always-On Retina display", "Advanced health features"],
        reviews: [
            { user: "Peter M.", rating: 5, comment: "Essential health companion!" }
        ],
        stock: 40
    },
    {
        id: 8,
        name: "Samsung Galaxy Watch 6",
        category: "smartwatch",
        brand: "Samsung",
        price: 329,
        originalPrice: 379,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        discount: "13%",
        description: "Premium smartwatch with personalized heart rate zones.",
        features: ["Advanced sleep coaching", "Body composition", "40mm/44mm sizes", "Wear OS powered"],
        reviews: [
            { user: "Karen J.", rating: 4, comment: "Great fitness tracking!" }
        ],
        stock: 35
    },
    {
        id: 9,
        name: "Anker PowerBank 20000mAh",
        category: "accessories",
        brand: "Anker",
        price: 59,
        originalPrice: 79,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500",
        discount: "25%",
        description: "High-capacity portable charger with fast charging.",
        features: ["20000mAh capacity", "USB-C PD 20W", "Dual USB ports", "Charges 3 devices"],
        reviews: [
            { user: "Steve A.", rating: 5, comment: "Lasts for days!" }
        ],
        stock: 100
    },
    {
        id: 10,
        name: "Logitech MX Master 3S",
        category: "accessories",
        brand: "Logitech",
        price: 99,
        originalPrice: 119,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
        discount: "17%",
        description: "Ultra-quiet clicks with 8K DPI sensor precision.",
        features: ["8K DPI sensor", "Quiet clicks", "USB-C charging", "Multi-device connectivity"],
        reviews: [
            { user: "James F.", rating: 5, comment: "Best mouse for productivity!" }
        ],
        stock: 80
    }
    
];

// ========================================
// GLOBAL STATE MANAGEMENT
// ========================================
let cart = JSON.parse(localStorage.getItem('electrohub_cart')) || [];
let currentUser = JSON.parse(localStorage.getItem('electrohub_currentUser')) || null;
let users = JSON.parse(localStorage.getItem('electrohub_users')) || [];
let orders = JSON.parse(localStorage.getItem('electrohub_orders')) || [];
let adminProducts = JSON.parse(localStorage.getItem('electrohub_adminProducts')) || [...products];

// Admin credentials
const ADMIN_EMAIL = 'admin@electrohub.com';
const ADMIN_PASSWORD = 'admin123';

// Filter state
let currentCategory = 'all';
let currentPriceMax = 3000;
let currentRatingMin = 0;
let currentSort = 'default';

// ========================================
// PASSWORD HASHING (SHA-256)
// ========================================
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

// ========================================
// INITIALIZATION WITH ANIMATIONS
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize products
    if (!localStorage.getItem('electrohub_adminProducts')) {
        localStorage.setItem('electrohub_adminProducts', JSON.stringify(products));
    }
    
    // Display products with fade-in animation
    displayProducts(adminProducts);
    
    // Update UI
    updateCartUI();
    updateUserMenu();
    
    // Set current year in footer
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Add scroll animations
    observeElements();
    
    // Add parallax effect to hero
    addParallaxEffect();
});

// ========================================
// SCROLL ANIMATIONS (INTERSECTION OBSERVER)
// ========================================
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    // Observe product cards
    setTimeout(() => {
        document.querySelectorAll('.product-card, .category-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }, 100);
}

// ========================================
// PARALLAX EFFECT FOR HERO
// ========================================
function addParallaxEffect() {
    window.addEventListener('scroll', () => {
        const hero = document.getElementById('hero');
        if (hero) {
            const scrolled = window.pageYOffset;
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// ========================================
// PRODUCT DISPLAY WITH STAGGER ANIMATION
// ========================================
function displayProducts(productsToDisplay) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    if (productsToDisplay.length === 0) {
        productsGrid.innerHTML = `
            <div class="col-12 text-center py-5 fade-in">
                <i class="fas fa-box-open fa-4x text-muted mb-3"></i>
                <p class="text-muted">No products found matching your criteria.</p>
            </div>
        `;
        return;
    }
    
    productsToDisplay.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'col-md-6 col-lg-4 col-xl-3 mb-4';
        productCard.style.animationDelay = `${index * 0.1}s`;
        productCard.innerHTML = `
            <div class="card product-card h-100">
                ${product.discount ? `<span class="badge bg-danger position-absolute top-0 end-0 m-2 pulse-badge">${product.discount} OFF</span>` : ''}
                <img src="${product.image}" class="card-img-top" alt="${product.name}" style="height: 250px; object-fit: cover;">
                <div class="card-body">
                    <span class="badge bg-primary mb-2">${product.category}</span>
                    <h5 class="card-title">${product.name}</h5>
                    <div class="rating mb-2">
                        ${'⭐'.repeat(Math.floor(product.rating))} <small>${product.rating}</small>
                    </div>
                    <p class="stock-info"><i class="fas fa-box"></i> ${product.stock} in stock</p>
                    <div class="d-flex align-items-center mb-3">
                        <h4 class="text-success mb-0 me-2">$${product.price}</h4>
                        ${product.originalPrice ? `<small class="text-muted text-decoration-line-through">$${product.originalPrice}</small>` : ''}
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary btn-glow" onclick="addToCart(${product.id})">
                            <i class="fas fa-cart-plus"></i> Add to Cart
                        </button>
                        <button class="btn btn-outline-secondary btn-sm" onclick="viewProductDetails(${product.id})">
                            <i class="fas fa-eye"></i> View Details
                        </button>
                    </div>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
    
    // Re-observe new elements
    observeElements();
}

function filterByCategory(category) {
    currentCategory = category;
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.value = category;
    }
    applyFilters();
    
    // Smooth scroll with offset
    const productsSection = document.getElementById('products');
    if (productsSection) {
        const yOffset = -100;
        const y = productsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}

function updatePriceLabel() {
    const priceRange = document.getElementById('priceRange');
    currentPriceMax = parseInt(priceRange.value);
    document.getElementById('priceValue').textContent = `0 - ${currentPriceMax}`;
    applyFilters();
}

function applyFilters() {
    const category = document.getElementById('categoryFilter').value;
    const priceMax = parseInt(document.getElementById('priceRange').value);
    const ratingMin = parseFloat(document.getElementById('ratingFilter').value);
    const sortBy = document.getElementById('sortFilter').value;
    
    currentCategory = category;
    currentPriceMax = priceMax;
    currentRatingMin = ratingMin;
    currentSort = sortBy;
    
    let filtered = adminProducts;
    
    if (category !== 'all') {
        filtered = filtered.filter(p => p.category === category);
    }
    
    filtered = filtered.filter(p => p.price <= priceMax);
    
    if (ratingMin > 0) {
        filtered = filtered.filter(p => p.rating >= ratingMin);
    }
    
    switch(sortBy) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
        case 'discount':
            filtered.sort((a, b) => {
                const discountA = a.originalPrice ? ((a.originalPrice - a.price) / a.originalPrice) : 0;
                const discountB = b.originalPrice ? ((b.originalPrice - b.price) / b.originalPrice) : 0;
                return discountB - discountA;
            });
            break;
    }
    
    displayProducts(filtered);
}

function resetFilters() {
    document.getElementById('categoryFilter').value = 'all';
    document.getElementById('priceRange').value = 3000;
    document.getElementById('priceValue').textContent = '0 - 3000';
    document.getElementById('ratingFilter').value = 0;
    document.getElementById('sortFilter').value = 'default';
    
    currentCategory = 'all';
    currentPriceMax = 3000;
    currentRatingMin = 0;
    currentSort = 'default';
    
    displayProducts(adminProducts);
}

function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (!searchTerm) {
        displayProducts(adminProducts);
        return;
    }
    
    const results = adminProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    
    displayProducts(results);
    
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Search on Enter key
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchProducts();
        }
    });
}

// ========================================
// SHOPPING CART WITH ANIMATIONS
// ========================================
function addToCart(productId) {
    const product = adminProducts.find(p => p.id === productId);
    
    if (!product) {
        showNotification('Product not found!', 'error');
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        if (existingItem.quantity < product.stock) {
            existingItem.quantity += 1;
            showNotification('Product quantity updated! 🎉', 'success');
        } else {
            showNotification('Maximum stock reached! ⚠️', 'error');
            return;
        }
    } else {
        if (product.stock > 0) {
            cart.push({ ...product, quantity: 1 });
            showNotification('Product added to cart! 🛒', 'success');
            animateCartIcon();
        } else {
            showNotification('Product out of stock! 😞', 'error');
            return;
        }
    }
    
    saveCart();
    updateCartUI();
}

function animateCartIcon() {
    const cartBtn = document.querySelector('.fa-shopping-cart');
    if (cartBtn) {
        cartBtn.parentElement.classList.add('cart-bounce');
        setTimeout(() => {
            cartBtn.parentElement.classList.remove('cart-bounce');
        }, 500);
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    showNotification('Product removed from cart!', 'info');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    const product = adminProducts.find(p => p.id === productId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else if (item.quantity > product.stock) {
            item.quantity = product.stock;
            showNotification('Maximum stock reached!', 'error');
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const subtotalElement = document.getElementById('subtotal');
    const taxElement = document.getElementById('taxAmount');
    const discountElement = document.getElementById('discountAmount');
    const cartTotal = document.getElementById('cartTotal');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart text-center py-5">
                <i class="fas fa-shopping-cart fa-4x mb-3 text-muted"></i>
                <p class="text-muted">Your cart is empty</p>
                <p class="text-muted small">Add some amazing products!</p>
            </div>
        `;
        subtotalElement.textContent = '$0.00';
        taxElement.textContent = '$0.00';
        discountElement.textContent = '-$0.00';
        cartTotal.textContent = '$0.00';
        return;
    }
    
    cartItemsContainer.innerHTML = '';
    let subtotal = 0;
    
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" class="cart-item-image" alt="${item.name}">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price} × ${item.quantity}</div>
                <div class="quantity-controls">
                    <button onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="mx-2">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
    
    const tax = subtotal * 0.10;
    const discount = cart.reduce((sum, item) => {
        if (item.originalPrice) {
            return sum + ((item.originalPrice - item.price) * item.quantity);
        }
        return sum;
    }, 0);
    const total = subtotal + tax;
    
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    taxElement.textContent = `$${tax.toFixed(2)}`;
    discountElement.textContent = `-$${discount.toFixed(2)}`;
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('active');
}

function saveCart() {
    localStorage.setItem('electrohub_cart', JSON.stringify(cart));
}

function proceedToCheckout() {
    if (!currentUser) {
        showNotification('Please login to checkout!', 'error');
        toggleCart();
        const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
        loginModal.show();
        return;
    }
    
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    toggleCart();
    openCheckout();
}

// ========================================
// PRODUCT DETAILS MODAL
// ========================================
function viewProductDetails(productId) {
    const product = adminProducts.find(p => p.id === productId);
    const modalBody = document.getElementById('productModalBody');
    
    modalBody.innerHTML = `
        <div class="modal-product-details">
            <div>
                <img src="${product.image}" class="modal-product-image" alt="${product.name}">
            </div>
            <div>
                <h3>${product.name}</h3>
                <div class="rating mb-2">
                    ${'⭐'.repeat(Math.floor(product.rating))} ${product.rating}
                </div>
                <div class="d-flex align-items-center mb-3">
                    <h3 class="text-success mb-0 me-3">$${product.price}</h3>
                    ${product.originalPrice ? `<span class="text-muted text-decoration-line-through">$${product.originalPrice}</span>` : ''}
                </div>
                <p>${product.description}</p>
                
                <h5 class="mt-4">Key Features:</h5>
                <ul class="product-features-list">
                    ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                
                <p><strong>Brand:</strong> ${product.brand}</p>
                <p><strong>Stock Available:</strong> ${product.stock} units</p>
                
                ${product.reviews && product.reviews.length > 0 ? `
                    <h5 class="mt-4">Customer Reviews:</h5>
                    ${product.reviews.map(review => `
                        <div class="border-start border-primary border-3 ps-3 mb-3">
                            <div class="rating">
                                ${'⭐'.repeat(review.rating)}
                            </div>
                            <p class="mb-1">"${review.comment}"</p>
                            <small class="text-muted">- ${review.user}</small>
                        </div>
                    `).join('')}
                ` : ''}
                
                <button class="btn btn-primary btn-lg w-100 mt-4 btn-glow" onclick="addToCart(${product.id}); bootstrap.Modal.getInstance(document.getElementById('productModal')).hide();">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        </div>
    `;
    
    const productModal = new bootstrap.Modal(document.getElementById('productModal'));
    productModal.show();
}

// ========================================
// USER AUTHENTICATION
// ========================================
function updateUserMenu() {
    const userMenuContent = document.getElementById('userDropdownMenu');
    const userNameDisplay = document.getElementById('userNameDisplay');
    
    if (currentUser) {
        userNameDisplay.textContent = currentUser.name.split(' ')[0];
        
        userMenuContent.innerHTML = `
            <li><h6 class="dropdown-header">${currentUser.name}</h6></li>
            <li><span class="dropdown-item-text small text-muted">${currentUser.email}</span></li>
            <li><hr class="dropdown-divider"></li>
            ${currentUser.email === ADMIN_EMAIL ? '<li><a class="dropdown-item" href="#" onclick="openAdminPanel()"><i class="fas fa-tools"></i> Admin Panel</a></li>' : ''}
            <li><a class="dropdown-item" href="#" onclick="openOrderHistory()"><i class="fas fa-history"></i> Order History</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item text-danger" href="#" onclick="logout()"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
        `;
    } else {
        userNameDisplay.textContent = 'Account';
        userMenuContent.innerHTML = `
            <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#loginModal"><i class="fas fa-sign-in-alt"></i> Login</a></li>
            <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#registerModal"><i class="fas fa-user-plus"></i> Register</a></li>
        `;
    }
}

async function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        currentUser = {
            email: ADMIN_EMAIL,
            name: 'Admin',
            isAdmin: true
        };
        localStorage.setItem('electrohub_currentUser', JSON.stringify(currentUser));
        bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
        updateUserMenu();
        showNotification('Welcome back, Admin! 👑', 'success');
        return;
    }
    
    const hashedPassword = await hashPassword(password);
    const user = users.find(u => u.email === email && u.password === hashedPassword);
    
    if (user) {
        currentUser = { ...user };
        delete currentUser.password;
        localStorage.setItem('electrohub_currentUser', JSON.stringify(currentUser));
        bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
        updateUserMenu();
        showNotification(`Welcome back, ${user.name}! 🎉`, 'success');
    } else {
        showNotification('Invalid email or password! ❌', 'error');
    }
}

async function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const phone = document.getElementById('regPhone').value;
    const address = document.getElementById('regAddress').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    
    if (password !== confirmPassword) {
        showNotification('Passwords do not match!', 'error');
        return;
    }
    
    if (password.length < 6) {
        showNotification('Password must be at least 6 characters!', 'error');
        return;
    }
    
    if (users.find(u => u.email === email)) {
        showNotification('User with this email already exists!', 'error');
        return;
    }
    
    const hashedPassword = await hashPassword(password);
    
    const newUser = {
        id: Date.now(),
        name,
        email,
        phone,
        address,
        password: hashedPassword,
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('electrohub_users', JSON.stringify(users));
    
    showNotification('Registration successful! Please login. ✅', 'success');
    bootstrap.Modal.getInstance(document.getElementById('registerModal')).hide();
    const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
    loginModal.show();
}

function logout() {
    currentUser = null;
    localStorage.removeItem('electrohub_currentUser');
    updateUserMenu();
    showNotification('Logged out successfully! 👋', 'success');
}

// ========================================
// CHECKOUT SYSTEM
// ========================================
function openCheckout() {
    const checkoutContent = document.getElementById('checkoutContent');
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.10;
    const total = subtotal + tax;
    
    checkoutContent.innerHTML = `
        <form id="checkoutForm" onsubmit="placeOrder(event)">
            <div class="row">
                <div class="col-md-7">
                    <h5 class="mb-3"><i class="fas fa-shipping-fast"></i> Delivery Information</h5>
                    <div class="mb-3">
                        <label class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="checkoutName" value="${currentUser.name}" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" id="checkoutEmail" value="${currentUser.email}" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Phone Number</label>
                        <input type="tel" class="form-control" id="checkoutPhone" value="${currentUser.phone || ''}" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Delivery Address</label>
                        <textarea class="form-control" id="checkoutAddress" rows="3" required>${currentUser.address || ''}</textarea>
                    </div>
                    
                    <h5 class="mb-3 mt-4"><i class="fas fa-credit-card"></i> Payment Method</h5>
                    <div class="payment-method">
                        <input type="radio" name="payment" value="card" id="payCard" checked>
                        <label for="payCard"><i class="fas fa-credit-card"></i> Credit/Debit Card</label>
                    </div>
                    <div class="payment-method">
                        <input type="radio" name="payment" value="paypal" id="payPaypal">
                        <label for="payPaypal"><i class="fab fa-paypal"></i> PayPal</label>
                    </div>
                    <div class="payment-method">
                        <input type="radio" name="payment" value="cod" id="payCod">
                        <label for="payCod"><i class="fas fa-money-bill-wave"></i> Cash on Delivery</label>
                    </div>
                </div>
                
                <div class="col-md-5">
                    <h5 class="mb-3"><i class="fas fa-box"></i> Order Summary</h5>
                    <div class="card">
                        <div class="card-body">
                            ${cart.map(item => `
                                <div class="d-flex justify-content-between mb-2">
                                    <span>${item.name} × ${item.quantity}</span>
                                    <span>$${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            `).join('')}
                            <hr>
                            <div class="d-flex justify-content-between mb-2">
                                <span>Subtotal:</span>
                                <span>$${subtotal.toFixed(2)}</span>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <span>Tax (10%):</span>
                                <span>$${tax.toFixed(2)}</span>
                            </div>
                            <hr>
                            <div class="d-flex justify-content-between">
                                <strong>Total:</strong>
                                <strong class="text-primary">$${total.toFixed(2)}</strong>
                            </div>
                        </div>
                    </div>
                    
                    <button type="submit" class="btn btn-success btn-lg w-100 mt-3 btn-glow">
                        <i class="fas fa-check-circle"></i> Place Order
                    </button>
                </div>
            </div>
        </form>
    `;
    
    const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
    checkoutModal.show();
}

function placeOrder(event) {
    event.preventDefault();
    
    const name = document.getElementById('checkoutName').value;
    const email = document.getElementById('checkoutEmail').value;
    const phone = document.getElementById('checkoutPhone').value;
    const address = document.getElementById('checkoutAddress').value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.10;
    const total = subtotal + tax;
    
    const order = {
        id: 'ORD-' + Date.now(),
        userId: currentUser.id || currentUser.email,
        userName: name,
        userEmail: email,
        userPhone: phone,
        deliveryAddress: address,
        items: [...cart],
        subtotal,
        tax,
        total,
        paymentMethod,
        status: 'pending',
        orderDate: new Date().toISOString(),
        estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
    };
    
    orders.push(order);
    localStorage.setItem('electrohub_orders', JSON.stringify(orders));
    
    cart.forEach(cartItem => {
        const product = adminProducts.find(p => p.id === cartItem.id);
        if (product) {
            product.stock -= cartItem.quantity;
        }
    });
    localStorage.setItem('electrohub_adminProducts', JSON.stringify(adminProducts));
    
    cart = [];
    saveCart();
    updateCartUI();
    
    bootstrap.Modal.getInstance(document.getElementById('checkoutModal')).hide();
    showNotification('Order placed successfully! 🎉', 'success');
    
    setTimeout(() => {
        showConfirmation(`Order Confirmed!\n\nOrder ID: ${order.id}\nTotal: $${total.toFixed(2)}\n\nThank you for shopping with ElectroHub! 🎊`);
    }, 500);
}

function showConfirmation(message) {
    const confirmation = document.createElement('div');
    confirmation.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 3rem;
        border-radius: 20px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        z-index: 5000;
        text-align: center;
        max-width: 500px;
        animation: bounceIn 0.5s ease;
    `;
    confirmation.innerHTML = `
        <i class="fas fa-check-circle" style="font-size: 4rem; color: #10d164; margin-bottom: 1rem;"></i>
        <h3>Order Placed Successfully!</h3>
        <p style="white-space: pre-line; margin: 1.5rem 0;">${message}</p>
        <button class="btn btn-primary" onclick="this.parentElement.remove()">Close</button>
    `;
    document.body.appendChild(confirmation);
    
    setTimeout(() => confirmation.remove(), 8000);
}

// ========================================
// ORDER HISTORY
// ========================================
function openOrderHistory() {
    if (!currentUser) {
        showNotification('Please login to view orders!', 'error');
        return;
    }
    
    const userOrders = orders.filter(order => 
        order.userId === currentUser.id || order.userId === currentUser.email
    );
    
    const orderHistoryContent = document.getElementById('orderHistoryContent');
    
    if (userOrders.length === 0) {
        orderHistoryContent.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-shopping-bag fa-4x text-muted mb-3"></i>
                <p class="text-muted">No orders yet!</p>
                <p class="text-muted small">Start shopping to see your orders here.</p>
            </div>
        `;
    } else {
        orderHistoryContent.innerHTML = userOrders.reverse().map(order => `
            <div class="order-card">
                <div class="order-header">
                    <div>
                        <strong>Order ID: ${order.id}</strong>
                        <p class="mb-0 text-muted small">${new Date(order.orderDate).toLocaleDateString()}</p>
                    </div>
                    <span class="order-status status-${order.status}">${order.status.toUpperCase()}</span>
                </div>
                <div class="mt-3">
                    ${order.items.map(item => `
                        <div class="d-flex justify-content-between mb-2">
                            <span>${item.name} × ${item.quantity}</span>
                            <span>$${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    `).join('')}
                </div>
                <hr>
                <div class="d-flex justify-content-between">
                    <strong>Total Amount:</strong>
                    <strong class="text-primary">$${order.total.toFixed(2)}</strong>
                </div>
                <p class="mb-1 mt-3"><strong>Payment Method:</strong> ${order.paymentMethod.toUpperCase()}</p>
                <p class="mb-0"><strong>Delivery Address:</strong> ${order.deliveryAddress}</p>
            </div>
        `).join('');
    }
    
    const orderHistoryModal = new bootstrap.Modal(document.getElementById('orderHistoryModal'));
    orderHistoryModal.show();
}

// ========================================
// ADMIN PANEL
// ========================================
function openAdminPanel() {
    if (!currentUser || currentUser.email !== ADMIN_EMAIL) {
        showNotification('Access denied!', 'error');
        return;
    }
    
    const adminContent = document.getElementById('adminContent');
    
    const totalProducts = adminProducts.length;
    const totalOrders = orders.length;
    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
    const totalUsers = users.length;
    
    adminContent.innerHTML = `
        <ul class="admin-tabs nav nav-tabs">
            <li class="nav-item">
                <button class="admin-tab nav-link active" onclick="switchAdminTab(event, 'dashboard')">Dashboard</button>
            </li>
            <li class="nav-item">
                <button class="admin-tab nav-link" onclick="switchAdminTab(event, 'products')">Products</button>
            </li>
            <li class="nav-item">
                <button class="admin-tab nav-link" onclick="switchAdminTab(event, 'orders')">Orders</button>
            </li>
        </ul>
        
        <div id="adminDashboard" class="admin-content-tab active mt-4">
            <div class="admin-stats">
                <div class="stat-card">
                    <h3>${totalProducts}</h3>
                    <p>Total Products</p>
                </div>
                <div class="stat-card" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
                    <h3>${totalOrders}</h3>
                    <p>Total Orders</p>
                </div>
                <div class="stat-card" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
                    <h3>$${totalRevenue.toFixed(2)}</h3>
                    <p>Total Revenue</p>
                </div>
                <div class="stat-card" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);">
                    <h3>${totalUsers}</h3>
                    <p>Total Users</p>
                </div>
            </div>
        </div>
        
        <div id="adminProducts" class="admin-content-tab mt-4" style="display:none;">
            <div class="card mb-4">
                <div class="card-body">
                    <h5>Add New Product</h5>
                    <form id="addProductForm" onsubmit="addProduct(event)" class="row g-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" id="productName" placeholder="Product Name" required>
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" id="productBrand" placeholder="Brand" required>
                        </div>
                        <div class="col-md-4">
                            <select class="form-select" id="productCategory" required>
                                <option value="">Select Category</option>
                                <option value="smartphones">Smartphones</option>
                                <option value="laptops">Laptops</option>
                                <option value="headphones">Headphones</option>
                                <option value="cameras">Cameras</option>
                                <option value="smartwatch">Smartwatches</option>
                                <option value="accessories">Accessories</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <input type="number" class="form-control" id="productPrice" placeholder="Price" required>
                        </div>
                        <div class="col-md-4">
                            <input type="number" class="form-control" id="productStock" placeholder="Stock" required>
                        </div>
                        <div class="col-md-6">
                            <input type="number" class="form-control" id="productRating" placeholder="Rating (0-5)" step="0.1" min="0" max="5" required>
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" id="productImage" placeholder="Image URL" required>
                        </div>
                        <div class="col-12">
                            <textarea class="form-control" id="productDescription" placeholder="Description" required></textarea>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary btn-glow">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
            
            <h5>Product List</h5>
            <div id="adminProductsList"></div>
        </div>
        
        <div id="adminOrders" class="admin-content-tab mt-4" style="display:none;">
            <h5>All Orders</h5>
            <div id="adminOrdersList"></div>
        </div>
    `;
    
    updateAdminProductsList();
    updateAdminOrdersList();
    
    const adminModal = new bootstrap.Modal(document.getElementById('adminModal'));
    adminModal.show();
}

function switchAdminTab(event, tab) {
    document.querySelectorAll('.admin-tab').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    document.querySelectorAll('.admin-content-tab').forEach(content => content.style.display = 'none');
    document.getElementById(`admin${tab.charAt(0).toUpperCase() + tab.slice(1)}`).style.display = 'block';
}

function addProduct(event) {
    event.preventDefault();
    
    const name = document.getElementById('productName').value;
    const brand = document.getElementById('productBrand').value;
    const category = document.getElementById('productCategory').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const stock = parseInt(document.getElementById('productStock').value);
    const rating = parseFloat(document.getElementById('productRating').value);
    const image = document.getElementById('productImage').value;
    const description = document.getElementById('productDescription').value;
    
    const newProduct = {
        id: Date.now(),
        name,
        brand,
        category,
        price,
        stock,
        rating,
        image,
        description,
        features: ["Feature 1", "Feature 2", "Feature 3"],
        reviews: []
    };
    
    adminProducts.push(newProduct);
    localStorage.setItem('electrohub_adminProducts', JSON.stringify(adminProducts));
    
    showNotification('Product added successfully! ✅', 'success');
    document.getElementById('addProductForm').reset();
    updateAdminProductsList();
    displayProducts(adminProducts);
}

function updateAdminProductsList() {
    const list = document.getElementById('adminProductsList');
    if (!list) return;
    
    list.innerHTML = adminProducts.map(product => `
        <div class="card mb-3">
            <div class="card-body d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center gap-3">
                    <img src="${product.image}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
                    <div>
                        <strong>${product.name}</strong>
                        <p class="mb-0 small text-muted">Price: $${product.price} | Stock: ${product.stock}</p>
                    </div>
                </div>
                <div>
                    <button class="btn btn-sm btn-danger" onclick="deleteProduct(${product.id})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        adminProducts = adminProducts.filter(p => p.id !== productId);
        localStorage.setItem('electrohub_adminProducts', JSON.stringify(adminProducts));
        showNotification('Product deleted successfully!', 'success');
        updateAdminProductsList();
        displayProducts(adminProducts);
    }
}

function updateAdminOrdersList() {
    const list = document.getElementById('adminOrdersList');
    if (!list) return;
    
    if (orders.length === 0) {
        list.innerHTML = '<p class="text-center text-muted">No orders yet.</p>';
        return;
    }
    
    list.innerHTML = orders.slice().reverse().map(order => `
        <div class="order-card">
            <div class="order-header">
                <div>
                    <strong>Order ID: ${order.id}</strong>
                    <p class="mb-0 text-muted small">Customer: ${order.userName}</p>
                    <p class="mb-0 text-muted small">${new Date(order.orderDate).toLocaleDateString()}</p>
                </div>
                <select class="form-select form-select-sm order-status status-${order.status}" style="width: auto;" onchange="updateOrderStatus('${order.id}', this.value)">
                    <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>Pending</option>
                    <option value="processing" ${order.status === 'processing' ? 'selected' : ''}>Processing</option>
                    <option value="delivered" ${order.status === 'delivered' ? 'selected' : ''}>Delivered</option>
                </select>
            </div>
            <div class="mt-3">
                ${order.items.map(item => `
                    <div class="d-flex justify-content-between mb-2">
                        <span>${item.name} × ${item.quantity}</span>
                        <span>$${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                `).join('')}
            </div>
            <hr>
            <div class="d-flex justify-content-between">
                <strong>Total:</strong>
                <strong class="text-primary">$${order.total.toFixed(2)}</strong>
            </div>
            <p class="mb-1 mt-3"><strong>Payment:</strong> ${order.paymentMethod.toUpperCase()}</p>
            <p class="mb-0"><strong>Address:</strong> ${order.deliveryAddress}</p>
        </div>
    `).join('');
}

function updateOrderStatus(orderId, newStatus) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = newStatus;
        localStorage.setItem('electrohub_orders', JSON.stringify(orders));
        showNotification('Order status updated! ✅', 'success');
    }
}

// ========================================
// ENHANCED NOTIFICATION SYSTEM
// ========================================
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `toast-notification toast-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100px)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function handleContactForm(event) {
    event.preventDefault();
    showNotification('Message sent successfully! We will get back to you soon. 📧', 'success');
    event.target.reset();
}

// ========================================
// ENHANCED NAVBAR EFFECTS
// ========================================
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========================================
// ADD CUSTOM CSS CLASSES FOR ANIMATIONS
// ========================================
const style = document.createElement('style');
style.textContent = `
    .btn-glow {
        animation: glow 2s ease-in-out infinite;
    }
    
    @keyframes glow {
        0%, 100% {
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }
        50% {
            box-shadow: 0 8px 30px rgba(102, 126, 234, 0.6);
        }
    }
    
    .pulse-badge {
        animation: pulse-scale 2s ease-in-out infinite;
    }
    
    @keyframes pulse-scale {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
    }
    
    .cart-bounce {
        animation: cartBounce 0.5s ease;
    }
    
    @keyframes cartBounce {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
    }
    
    @keyframes bounceIn {
        0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.3);
        }
        50% {
            transform: translate(-50%, -50%) scale(1.05);
        }
        70% {
            transform: translate(-50%, -50%) scale(0.9);
        }
        100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
`;
document.head.appendChild(style);

// ========================================
// CONSOLE GREETING
// ========================================
console.log('%c🎨 ElectroHub E-Commerce Platform', 'color: #667eea; font-size: 24px; font-weight: bold;');
console.log('%cBuilt with ❤️ using HTML, CSS, Bootstrap & JavaScript', 'color: #764ba2; font-size: 14px;');
console.log('%c👑 Admin Login: admin@electrohub.com / admin123', 'color: #10d164; font-size: 12px;');
