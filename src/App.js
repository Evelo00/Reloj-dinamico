import ReactDOM from 'react-dom/client';
import React from 'react';
import './App.css';

function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'));

  let localtime = new Date();
  let utc = new Date(localtime.getTime() + (3600000*8));
  const titulo  = React.createElement(
    'h1',
    {},
    'La hora es: ',
  )
  root.render(titulo);

  const element = (
    <div className="App">
      <header className="App-header">
        <h1>La hora es: </h1>
        <h2>En Colombia son las {new Date().toLocaleTimeString('es-CO')}</h2>
        <h2>En Qatar: {utc.toLocaleTimeString('es-CO')}</h2>
      </header>
    </div>
  );

  root.render(element)
}

export default App;
