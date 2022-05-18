



import React from "react";


export const  Servises = (props) => {
    return (
        
        <>
        <ul>
            {props.servises.map((el, key) => {
                return <li key={key}>(el)</li>
            })}
        </ul>
        </>
    )
}
