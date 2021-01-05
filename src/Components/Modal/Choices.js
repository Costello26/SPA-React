import React from 'react';
import styled from 'styled-components';

const ChoicesWrap = styled.div`
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
const ChoiceLabel = styled.label`
    display: block;
    width: 30%;
`;
const ChoiceCheckbox = styled.input``;

export const Choices = ({openItem, choice, changeChoices}) => {
    return(
        <ChoicesWrap>
            <h2>Select:</h2>
            { openItem.choices.map((item, i) => (
                <ChoiceLabel key={i}>
                <ChoiceCheckbox type="radio"
                name={item}
                value={item}
                onChange={changeChoices}
                checked={choice === item} /> {item}
                </ChoiceLabel>
                )) 
            }
            
           
        </ChoicesWrap>
    )
};