import React from 'react';

// Define a reusable Product component
const Product = ({ name, image, price }) => {
  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <div className="info">
          <span>{name}</span>
          <div className="price">
            <span className="dollar">{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function products() {
  const products = [
    // Define product data here
    { name: 'Pomme vert', image: 'path/to/image.jpg', price: 100 },
    // ... add more products
  ];

  return (
    <div className="main-container">
      <header className="header">
        <div className="logo">FarmConnect</div>
        <nav className="nav">
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Produits</a></li>
            {/* Add more navigation links */}
          </ul>
        </nav>
      </header>
      <section className="banner">
        {/* Banner content */}
      </section>
      <section className="categories">
        <h2>Categories</h2>
        <div className="category-grid">
          {/* Render category components here */}
        </div>
      </section>
      <section className="products">
        <h2>Fruits et Légumes</h2>
        <div className="product-grid">
          {products.map((product) => (
            <Product key={product.name} {...product} />
          ))}
        </div>
      </section>
      <footer className="footer">
        {/* Footer content */}
      </footer>
    </div>
  );
}
