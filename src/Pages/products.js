import React from 'react';
import { Link } from 'react-router-dom';// Import Link from react-router-dom
import { useState } from "react"; 
import Navigation from '../Components/Navigation';
import Footer from '../Components/footer';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook


const App = () => {
  const { t } = useTranslation(); 

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Apples',
      price: 250,
      description: 'Crisp and juicy goodness.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      name: 'Broccoli',
      price: 150,
      description: 'Nutrient-packed superfood.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      name: 'Carrots',
      price: 200,
      description: 'Crunchy and packed with vitamins.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 4,
      name: 'Spinach',
      price: 300,
      description: 'Nutrient-dense leafy green.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 5,
      name: 'Tomatoes',
      price: 200,
      description: 'Juicy and bursting with flavor.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 6,
      name: 'Blueberries',
      price: 250,
      description: 'Sweet and antioxidant-rich.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 7,
      name: 'Avocado',
      price: 200,
      description: 'Creamy and nutrient-dense.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 8,
      name: 'Kale',
      price: 300,
      description: 'Nutrient-packed leafy green.',
      image: 'https://via.placeholder.com/300',
    },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  
  const renderProducts = () => {
    const rows = [];
    for (let i = 0; i < products.length; i += 3) {
      const rowProducts = products.slice(i, i + 3);
      rows.push(
        <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rowProducts.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
              <Link to="#" className="block">
                <img
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                  src={product.image}
                />
              </Link>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-500 mb-4">{product.description}</p>
              <div className="flex justify-between">
                <Link
                  to="/"
                  className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-200"
                >
                  Shop
                </Link>
                <button
  onClick={() => addToCart(product)}
  style={{
    backgroundColor: 'green',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease-in-out',
  }}
>
  Add to Cart
</button>

              </div>
            </div>
          ))}
        </div>
      );
    }
    return rows;
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="w-full py-12">
        <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-xl mx-auto lg:max-w-none">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="grid gap-1">
              <h1 className="text-2xl font-bold tracking-tight text-center md:text-left">
                {t('shop.title')}
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-center md:text-left">
                {t('shop.description')}
              </p>
            </div>
          </div>
          {renderProducts()}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;