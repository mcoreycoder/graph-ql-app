import React, { useState } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
// import Dogs from './Dogs'



const ADD_DOG = gql`
  mutation CreateDog($breed: String!, $age: Int!){
  addDog(breed: $breed, age: $age){
    breed
    id
    age
  }}
`;

const NewDog = () => {
  const [breed, setBreed] = useState("")
  const [age, setAge] = useState(0)

  // console.log("age", age)
  return (
    <Mutation mutation={ADD_DOG}>
      {(addDog, { data }) => {


        return (
          <form onSubmit={async(e) => {
            e.preventDefault()
            await addDog({ variables: { breed: breed, age: parseInt(age) } })
            await window.location.replace("/");
            // await ;
          }}>
            <input
              type="text"
              placeholder="Breed"
              value={breed}
              onChange={e => setBreed(e.target.value)}
            />
            <input
              type="number"
              placeholder="Age"
              onChange={e => setAge(e.target.value)}
            />

            <button type="submit">Submit It</button>
          </form>
        )
      }}



    </Mutation>
  )
}

export default NewDog