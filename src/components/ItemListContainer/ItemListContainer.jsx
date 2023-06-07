/* eslint-disable react/prop-types */

// import React from 'react'

// props es un objeto
const ItemListContainer = (props) => {

    return (
        <div>
            <h1 className="text-center">
                {props.greeting}
            </h1>
            
        </div>
    )
}

export default ItemListContainer