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
      name: 'tracteur',
      price: 250,
      description: 'location only',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      name: 'Souffleur',
      price: 150,
      description: 'prix negociable',
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
    return (
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img
                alt={product.name}
                className="card-img-top"
                src={product.image}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price:{product.price} Da</p> {/* Displaying the price */}
                <div className="d-flex justify-content-end align-items-center">
                  <button
                    onClick={() => addToCart(product)}
                    className="btn btn-success"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="w-full py-12">
        <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 bg-green-100 p-8 rounded-lg">
            <div className="grid gap-1">
              <h1 className="text-2xl font-bold tracking-tight text-center md:text-left text-green-800">
                {t('Equipements')}
              </h1>
              <p className="text-green-700 dark:text-gray-400 text-center md:text-left">
                {t('shop.description')}
              </p>
            </div>
          </div>

          <div className="mt-8">
            {renderProducts()}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;