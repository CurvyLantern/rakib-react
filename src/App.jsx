
import styles from './App.module.css';

import { useState, useEffect, useRef } from 'react';


console.log( styles );

const List = ( { list } ) => {
  return <ul>
    {
      list.map( listItem => {
        return <li key={ listItem.id }> { listItem.brand }</li>;
      } )
    }
  </ul>;
};

const App = () => {

  return (
    <div className="App">
      Hello World

      <p className={ styles.button }>This is a paragraph</p>

    </div>
  );
};

export default App;
