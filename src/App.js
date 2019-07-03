import React from 'react';
import Dogs from './components/Dogs'
import NewDog from './components/AddDog'


function App() {
  return (
    <div className="App">
      <Dogs onDogSelected = {e => console.log("event", e)}/>
      <NewDog onDogSelected = {e => console.log(e)}/>
    </div>
  );
}

export default App;
