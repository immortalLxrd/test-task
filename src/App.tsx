import React from 'react';
import './styles/App.scss';
import FormComponent from "./components/FormComponent";

function App() {
  return (
      <div className="App">
          <FormComponent action={() => null}/>
      </div>
  );
}

export default App;
