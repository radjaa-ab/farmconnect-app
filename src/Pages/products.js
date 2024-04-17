import React from 'react';
import image from '../Images/toufa7.jpg';
// Define a reusable Product component
const Product = ({ name, image, price }) => {
  return (
    <div style={styles.product}>
      <div style={styles.productImage}>
      <img src={image} alt={name} style={styles.image} />
      </div>
      <div style={styles.productInfo}>
        <div style={styles.info}>
          <span>{name}</span>
          <div style={styles.price}>
            <span style={styles.dollar}>{price}</span>
          </div>
        </div>
        <button style={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
};

export default function products() {
  const products = [
    {
      name: 'Pomme vert',
      image: image,
      price: 100,
    },
    //... add more products
  ];

  return (
    <div style={styles.mainContainer}>
      <header style={styles.header}>
        <div style={styles.logo}>FarmConnect</div>
        <nav style={styles.nav}>
        <ul style={styles.navList}>
    <li Style = {{Color : 'green'}}><a href="#">Accueil</a></li>
    <li Style = {{Color : 'green'}}><a  href="#">Produits</a></li>
</ul>

        </nav>
      </header>
      <section style={styles.banner}>
        {/* Banner content */}
      </section>
      <section style={styles.categories}>
        <h2>Categories</h2>
        <div style={styles.categoryGrid}>
          {/* Render category components here */}
        </div>
      </section>
      <section style={styles.products}>
        <h2>Fruits et Légumes</h2>
        <div style={styles.productGrid}>
          {products.map((product) => (
            <Product key={product.name} {...product} />
          ))}
        </div>
      </section>
      <footer style={styles.footer}>
        {/* Footer content */}
      </footer>
    </div>
  );
}

const styles = {
  mainContainer: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f7f7f7', // Added background color
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    backgroundColor: '#fff', // Added background color
    padding: '10px 20px', // Added padding
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Added box shadow
    borderRadius: '5px', // Added border radius
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'green',
  },
  nav: {
    marginLeft: 'auto',
  },
  navList: {
    listStyle: 'none', // Remove list bullets
    padding: 0, // Remove default padding
    margin: 0, // Remove default margin
  },
  banner: {
    marginBottom: '20px',
    backgroundColor: '#fff', // Added background color
    padding: '20px', // Added padding
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Added box shadow
    borderRadius: '5px', // Added border radius
  },
  categories: {
    marginBottom: '20px',
    backgroundColor: '#fff', // Added background color
    padding: '20px', // Added padding
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Added box shadow
    borderRadius: '5px', // Added border radius
  },
  categoryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px',
  },
  products: {
    marginBottom: '20px',
    backgroundColor: '#fff', // Added background color
    padding: '20px', // Added padding
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Added box shadow
    borderRadius: '5px', // Added border radius
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  product: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    backgroundColor: '#fff', // Added background color
  },
  productImage: {
    marginBottom: '10px',
  },
  image: {
    width: '300px',
    height: 'auto',
    borderRadius: '5px',
  },
  productInfo: {},
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontWeight: 'bold',
  },
  dollar: {
    color: 'green',
  },
  button: {
    backgroundColor: 'green',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
  },
  footer: {
    backgroundColor: '#fff', // Added background color
    padding: '20px', // Added padding
    boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)', // Added box shadow
    borderRadius: '5px', // Added border radius
  },
};
