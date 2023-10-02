import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPlayFill } from "react-icons/bs";
function DebutAlbums() {
    const [debutList, setDebutList] = useState([
        {
            id: 1,
            debut_list_image: require("../../assets/img/bebut-albums/1.jpg"),
            titile: "Angele",
            date: "October 1, 2018",
        },
        {
            id: 2,
            debut_list_image: require("../../assets/img/bebut-albums/2.jpg"),
            titile: "Parcels",
            date: "October 1, 2018",
        },
        {
            id: 3,
            debut_list_image: require("../../assets/img/bebut-albums/3.jpg"),
            titile: "Jess glynne",
            date: "October 1, 2018",
        },
    ]);
    return (
        <DebutAlbumsContainer>
            <DebutHeader>
                <DebutHead>
                    <DebutName>Debut Albums</DebutName>
                    <DebutIcon>
                        <DebutIconAll>
                            <HeadIconNameAll to="/">All</HeadIconNameAll>
                        </DebutIconAll>
                        <Hamburger />
                    </DebutIcon>
                </DebutHead>
            </DebutHeader>
            <DebutBox>
                {debutList.map((each) => (
                    <DebutAlbumImage key={each.id}>
                        <AlbumImageBox>
                            <img src={each.debut_list_image} alt="" />
                            <AlbumTitileBox>
                                <h4>{each.titile}</h4>
                                <h5>{each.date}</h5>
                            </AlbumTitileBox>
                            <DebutIconBox className="icon">
                                <Icon />
                            </DebutIconBox>
                        </AlbumImageBox>
                    </DebutAlbumImage>
                ))}
            </DebutBox>
        </DebutAlbumsContainer>
    );
}

export default DebutAlbums;
const Icon = styled(BsPlayFill)`
    width: 50px;
    position: absolute;
    left: 10px;
    top: 10px;
    height: 50px;
    z-index: 30;
    color: #fff;
`;

const DebutIconBox = styled.span`
    position: absolute;
    z-index: 30;
    background-color: #00000078;
    top: 45%;
    left: 45%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    width: 70px;
    height: 70px;
    display: inline-block;
    transition: 0.3s ease all;
    transform: scale(0);
`;
const AlbumTitileBox = styled.div`
    position: absolute;
    top: 0px;
    right: 14px;
    text-align: end;
    h4 {
        margin-top: 20px;
        font-size: 30px;
        color: #fff;
    }
    h5 {
        margin-top: 5px;
        color: #757272;
        font-family: "noto_sansextralight";
        font-size: 10px;
        color: #fff;
    }
`;
const AlbumImageBox = styled.div`
    position: relative;
    width: 380px;
    height: 425px;
    margin-left: 50px;
    img {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 10px;
    }
    &:hover span.icon {
        transform: scale(1);
    }
`;
const DebutAlbumImage = styled.div``;
const DebutBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 35px;
`;
const DebutHeader = styled.div``;
const Hamburger = styled(GiHamburgerMenu)`
    width: 40px;
    height: 36px;
    padding: 10px;
    border: 1px solid #f0f0f0;
    border-radius: 10%;
    margin-left: 10px;
    &:hover {
        background-color: #e5607e;
    }
`;
const HeadIconNameAll = styled(Link)``;
const DebutHead = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 40px 10px 10px 40px;
`;
const DebutAlbumsContainer = styled.div``;
const DebutName = styled.h4`
    font-size: 30px;
`;
const DebutIcon = styled.div`
    display: flex;
`;
const DebutIconAll = styled.div`
    width: 40px;
    height: 36px;
    padding: 10px;
    border: 1px solid #f0f0f0;
    border-radius: 10%;
    margin-left: 10px;
    &:hover {
        background-color: #e5607e;
    }
    a {
        color: #000;
        text-decoration: none;
    }
`;
