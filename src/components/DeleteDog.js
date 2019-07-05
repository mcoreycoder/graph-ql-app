import React from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
// import Dogs from './Dogs'



const DELETE_DOG = gql`
  mutation RemoveDog($id: String){
  deleteDog(id: $id){
    id
  }}
`;

const DogGone = (props) => {

    return (
        <Mutation mutation={DELETE_DOG}>
            {(deleteDog, { data }) => {
                return (
                    <form onSubmit={async (e) => {
                        e.preventDefault()
                        console.log(props.id)

                        await deleteDog({
                            variables: {
                                id: props.id,
                            }
                        })
                        window.location.reload(true)
                    }}>
                        {/* <input class="deletebutton" type="submit" value="Delete"/> */}
                        <button type="submit" value="Delete">Delete Dog</button>
                    </form>
                )
            }}



        </Mutation>
    )
}

export default DogGone