import React from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const ADD_DOG = gql`
  mutation CreateDog($breed: String!, $age: Int!){
  addDog(breed: $breed, age: $age){
    breed
    id
    age
  }}
`;

const NewDog = () => (
  <Mutation mutation={ADD_DOG}>
    {(addDog, { data }) => {


      return (
        <form onSubmit={e=> {
          e.preventDefault()
          addDog({ variables: { breed: 'Peachy', age: 33 } })
          }}>
          <input>
          </input>
          <button type="submit">Submit It</button>
        </form>
        )
    }}



  </Mutation>
)

export default NewDog