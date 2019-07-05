import React from 'react';
import Dogs from './components/Dogs'
import NewDog from './components/AddDog'


function App() {
  return (
    <div className="App">
      <NewDog onDogSelected={e => console.log(e)} />
      <hr/>
      <Dogs onDogSelected={e => console.log("event", e)} />
    </div>
  );
}

export default App;
