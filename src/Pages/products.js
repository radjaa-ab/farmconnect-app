import React from 'react';
import { useState } from 'react';
import BasicExample from '../Components/Navigation';

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 250,
      category: 'fruits',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 150,
      category: 'fruits',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 200,
      category: 'fruits',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 300,
      category: 'legumes',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 5,
      name: 'Product 5',
      price: 200,
      category: 'legumes',
      image: 'https://via.placeholder.com/300',
    },
  ]);

  const renderCategories = () => {
    const categories = [...new Set(products.map((p) => p.category))];
    return categories.map((category) => ( 
      <div key={category} className="category">
        <h3>{category}</h3>
      </div>
    ));
  };

  const renderProducts = () => {
    return products.map((product) => (
      <div key={product.id} className="product">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h3>{product.name}</h3>
          <div className="price">
            <span className="dinar">Da</span>
            <span>{product.price}</span>
          </div>
          <button className="button">Add to Cart</button>
        </div>
      </div>
    ));
  };

  return (
    
    <div style={styles.mainContainer}>
      <header style={styles.header}>
        <h1 style={styles.logo}>Store</h1>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <div style={styles.banner}>
        <h2>Welcome to the Store</h2>
        <p>The best place to find products online</p>
      </div>
      <div style={styles.categories}>{renderCategories()}</div>
      <div style={styles.products}>{renderProducts()}</div>
      <footer style={styles.footer}>
        <p>Footer Information</p>
      </footer>
    </div>
  );
};

const styles = {
  mainContainer: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f7f7f7',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    backgroundColor: '#2ecc71',
    padding: '10px 20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
  },
  navList: {
    display: 'flex',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  navListItem: {
    marginRight: '10px',
  },
  banner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#27ae60',
    padding: '20px',
    borderRadius: '5px',
    marginBottom: '20px',
  },
  categories: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '20px',
  },
  category: {
    marginRight: '20px',
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#2ecc71',
    cursor: 'pointer',
  },
  products: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  product: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  productImage: {
    width: '100%',
    height: 'auto',
  },
  productInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  price: {
    marginBottom: '10px',
  },
  dollar: {
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#2ecc71',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  footer: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#2ecc71',
    marginTop: '20px',
  },
};

export default App;
