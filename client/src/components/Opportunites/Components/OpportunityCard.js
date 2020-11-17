import React from 'react';

function OpportunityCard(props){
    return(
        <div className="Opportunity-Content-elements">
            <div className='Opportunity-Detail-part'>
                <h2>{props.item.name}</h2>
                <br/>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}

export default OpportunityCard;