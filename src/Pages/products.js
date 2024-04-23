import React from 'react';
import { Link } from 'react-router-dom';// Import Link from react-router-dom
import { useState } from "react"; 
import Navigation from '../Components/Navigation';
import Footer from '../Components/footer';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import laitue from '../Images/laitue.jpg';
import banane from '../Images/banane.jpg';
import concombre from '../Images/concombre.jpg';
import brocoli from '../Images/brocoli.jpg';
import pomme from '../Images/toufa7.jpg';
import carotte from '../Images/carotte.jpg';
import patates from '../Images/patates.png';
c

const App = () => {
  const { t } = useTranslation(); 

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Laitue',
      price: 50,
      description: 'Base de salade fraîche et croquante.',
      image: laitue,
    },
    {
      id: 2,
      name: 'Concombres',
      price: 75,
      description: 'Ajout croquant et rafraîchissant aux salades et sandwichs.',
      image: concombre,
    },
    {
      id: 3,
      name: 'Bananes',
      price: 100,
      description: 'En-cas pratique et sucré.',
      image: banane,
    },
    {
      id: 4,
      name: 'Pommes de terre',
      price: 150,
      description: 'Légume racine polyvalent, idéal pour de nombreux plats.',
      image: patates,
    },
    {
      id: 5,
      name: 'Oranges',
      price: 120,
      description: 'Fruit citrique riche en vitamine C et en saveur.',
      image: orange,
    },
    {
      id: 6,
      name: 'Carottes',
      price: 200,
      description: 'Légume racine croquant et riche en nutriments.',
      image: carotte,
    },
    {
      id: 7,
      name: 'Pommes',
      price: 250,
      description: 'Délicieuses et juteuses.',
      image: pomme,
    },
    {
      id: 8,
      name: 'Brocoli',
      price: 150,
      description: 'Superaliment nutritif.',
      image: brocoli,
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
                <p className="card-text">Price: {product.price} Da</p> {/* Displaying the price */}
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
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="grid gap-1">
              <h1 className="text-2xl font-bold tracking-tight text-center md:text-left">
                {t('Fruits et Légumes')}
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-center md:text-left">
                {t('Frais et sains')}
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