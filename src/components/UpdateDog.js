import React, { useState } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const UPDATE_DOG = gql`
  mutation ReviseDog($breed: String!, $age: Int!, $id: ID){
    updateDog(breed: $breed, age: $age, id: $id){
    breed
    age
    id
  }}
`;

const UpdateDog = (props) => {
    const [breed, setBreed] = useState("")
    const [age, setAge] = useState(0)
    const [editing, setEdit] = useState(false)

    let id = props.id
    // console.log("age", age)
    return (
        <Mutation mutation={UPDATE_DOG}>
            {(updateDog, { data }) => {

               if (editing === true) {
                   return (
                    <form onSubmit={async (e) => {
                        console.log("props.id", id)

                        e.preventDefault()
                        await updateDog({ variables: { breed: breed, age: parseInt(age), id: id } })
                        setEdit(false)
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

                        <button type="submit">Update</button>
                    </form>
                )}
                return (
                    <form onSubmit={async (e) => {
                        console.log("props.id", id)
                        e.preventDefault()
                        setEdit(true)
                    }}>
                        <button type="submit">Edit</button>
                    </form>
                )

            }}
        </Mutation>
    )
}

export default UpdateDog