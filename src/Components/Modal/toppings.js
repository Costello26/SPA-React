import React from 'react';
import styled from 'styled-components';

const ToppingWrap = styled.div`
    column-count: 3;
    text-align: left;
    padding: 0 10px;
    font-size: 16px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    h2{
        display: block;
        width: 100%;
        text-align: center;
    }
`;
const ToppingLabel = styled.label`
    display: block;
    width: 30%;
`;
const ToppingCheckbox = styled.input``;

export const Toppings = ({toppings, checkToppings}) => {
    return(
        <ToppingWrap>
            <h2>Toppings:</h2>
            { toppings.map((item, i) => (
                <ToppingLabel key={i}>
                <ToppingCheckbox type="checkbox"
                checked={item.checked}
                onChange={() => checkToppings(i)} /> {item.name}
            </ToppingLabel>
            )) }
            
           
        </ToppingWrap>
    )
};