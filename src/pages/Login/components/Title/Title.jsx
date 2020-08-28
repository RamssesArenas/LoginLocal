import React from 'react';
import './Title.css';


const Title = ({text}) => {
    return(
        <div className='titleContainer'>
            {text}
        </div>
    )
};

export default Title;