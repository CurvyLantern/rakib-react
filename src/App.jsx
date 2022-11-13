
import styles from './App.module.css';

// console.log( styles );

import { useState, useEffect } from 'react';

const List = ( { products } ) => {
  return <ul>
    {
      products.map( product => (
        <div key={ product.id } className={ styles.singleProduct }>
          <img src={ product.thumbnail } alt={ product.title } className={ styles.productImg } />
          <li>{ product.brand }</li>
        </div>
      ) )
    }
  </ul>;
};



const App = () => {
  let [ count, setCount ] = useState( 100 );
  let [ productsData, setProductsData ] = useState( [] );

  useEffect( () => {
    fetch( 'https://dummyjson.com/products' )
      .then( res => res.json() )
      .then( data => {
        setProductsData( data.products );
      } );
  }, [] );

  const handleClick = () => {
    setCount( count + 1 );
  };

  return (
    <div className="App">
      Hello World
      <List products={ productsData } />
      <p>{ count }</p>
      <p>{ count }</p>
      <button className={ styles.button }
        onClick={ handleClick }
      >
        Press Me
      </button>
    </div>
  );
};

export default App;
