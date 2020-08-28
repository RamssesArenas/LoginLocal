import React from 'react';
import './Input.css';

const Input = ({atribute, handleChange, param}) =>{
    return(
        <div className='divinput'>
            <input
                id={atribute.id}
                name={atribute.name}
                placeholder={atribute.placeholder}
                type={atribute.type}         
                onChange={(e)=> handleChange(e.target.name, e.target.value)}
                className={param ? 'errorStyle' :'regularStyle'}
            />
        </div>
    )
};

export default Input;