import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { getStore } from 'http://localhost:4001/framework.js';

const App = () => {
  const [image, setImage] = useState(getStore().getImage());
  const addToCart = () => {
    getStore().incrementCount();
  };

  getStore().subscribe(() => {
    setImage(getStore().getImage());
  });

  return (
    <div style={{ margin: '2em' }} className="mui-panel mui--text-center">
      <div className="mui--text-headline">Buy Tools React</div>
      <div className="mui-divider"></div>
      <img src={image} style={{ marginTop: '1em', marginBottom: '1em', height: 200 }}></img>
      <div className="mui-divider"></div>
      <button onClick={addToCart} className="mui-btn mui-btn--accent" style={{ width: '100%' }}>Add</button>
    </div>
  )
};

export default (el) => {
  ReactDOM.render(<App />, el);
};
