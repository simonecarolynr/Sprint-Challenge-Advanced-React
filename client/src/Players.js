import React from 'react';

export default function Players(props){
    
    return (

        <div className='player-cards' key={props.id}>
            <h1>{props.name}</h1>
            <h3>{props.country}</h3>
            <h4>{props.searches}</h4>
        </div>
    )

};