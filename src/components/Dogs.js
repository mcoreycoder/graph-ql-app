import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
      age
    }
  }
`;

const Dogs = ({ onDogSelected }) => (
  <Query query={GET_DOGS}>
    {({ loading, error, data }) => {
      if (loading) {
        console.log("Loading...")
        return "Loading..."};
      if (error) return `Error! ${error.message}`;

      return (
        <>
        <select name="dog" onChange={onDogSelected}>
          {data.dogs.map(dog => (
            <option key={dog.id} value={dog.breed}>
              {dog.breed}
            </option>
          ))}
        </select>

        {data.dogs.map(dog => (
            <li key={dog.id} value={dog.breed}>
              Breed: {dog.breed}
              <br/>
              Age: {dog.age}
              <br/>
              ID: {dog.id}
              <br/>
            </li>
          ))}

        </>
      );
    }}
  </Query>
);

export default Dogs