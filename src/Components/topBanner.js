import React from 'react';
import styled from 'styled-components';

const BannerBody = styled.div`
    width: 100%;
    height: 210px;
    background: ${(props) => `url(${props.Background});`} center center no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 36px;
    h1{
        padding-top: 40px;
    }
`;

export const TopBanner = () => (
    <BannerBody Background="/topbanner/banner.png">
        <div className="mask">
            <h1>STATION 21</h1>
        </div>
    </BannerBody>
);