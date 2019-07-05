import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import DogGone from "./DeleteDog"
import UpdateDog from "./UpdateDog"

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
        {/* <select name="dog" onChange={onDogSelected}>
          {data.dogs.map(dog => (
            <option key={dog.id} value={dog.breed}>
              {dog.breed}
            </option>
          ))}
        </select> */}

        {data.dogs.map(dog => (
            <li key={dog.id} value={dog.breed}>
              Breed: {dog.breed}
              <br/>
              Age: {dog.age}
              <br/>
              ID: {dog.id}
              <br/>
              <DogGone id={dog.id}/>
              <UpdateDog id={dog.id}/>
            </li>
          ))}

        </>
      );
    }}
  </Query>
);

export default Dogs