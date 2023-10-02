import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Discover() {
    return (
        <DiscoverBox>
            <Div className="wrapper">
                <DiscoverLeft>Discover</DiscoverLeft>
                <DiscoverRight>
                    <DiscoverNames to="/">All</DiscoverNames>
                    <DiscoverNames to="/">New Music</DiscoverNames>
                    <DiscoverNames to="/">Music Videos</DiscoverNames>
                    <DiscoverNames to="/">Genres</DiscoverNames>
                    <DiscoverNames to="/">TV & Films</DiscoverNames>
                </DiscoverRight>
            </Div>
        </DiscoverBox>
    );
}

export default Discover;
const DiscoverNames = styled(Link)``;

const DiscoverBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px 0 30px 0px;
    font-family: "noto_sansbold";
    border-bottom: 0.5px solid #f0f0f0;
`;
const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const DiscoverLeft = styled.div`
    align-items: center;
    font-size: 60px;
`;
const DiscoverRight = styled.div`
    display: flex;
    justify-content: space-between;
    width: 450px;

    a {
        color: #000;
        border: 1px solid #f0f0f0;
        padding: 5px 10px 5px 10px;
        border-radius: 8%;
        font-size: 13px;
        text-decoration: none;

        &:hover {
            background-color: #e5607e;
        }
    }
`;
