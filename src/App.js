import React from 'react';
import Dogs from './components/Dogs'
import NewDog from './components/AddDog'


function App() {
  return (
    <div className="App">
      <Dogs onDogSelected = {e => console.log(e)}/>
      <NewDog/>
    </div>
  );
}

export default App;
