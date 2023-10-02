import React, { useState } from "react";
import { BsPlayFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";
import { Link } from "react-router-dom";

function NewReleases() {
    const [musicList, setMusicList] = useState([
        {
            id: 1,
            music_list_img: require("../../assets/img/new_releases/1.jpg"),
            titile: "Jess Glynne",
            lyrics: "Always I n Between...",
        },
        {
            id: 2,
            music_list_img: require("../../assets/img/new_releases/2.jpg"),
            titile: "Nili Hadida",
            lyrics: "Nili hadida - 2018",
        },
        {
            id: 3,
            music_list_img: require("../../assets/img/new_releases/3.jpg"),
            titile: "Jeremy Frerot",
            lyrics: "Matriochka - 2018",
        },
        {
            id: 4,
            music_list_img: require("../../assets/img/new_releases/4.jpg"),
            titile: "Ella Mai",
            lyrics: "Ella Mai - 2018...",
        },
        {
            id: 5,
            music_list_img: require("../../assets/img/new_releases/5.jpg"),
            titile: "Angele",
            lyrics: "Brol - 2018....",
        },
        {
            id: 6,
            music_list_img: require("../../assets/img/new_releases/6.jpg"),
            titile: "Alice On The Roof",
            lyrics: "Ep De Malade 2018....",
        },
        {
            id: 7,
            music_list_img: require("../../assets/img/new_releases/7.jpg"),
            titile: "Parcels",
            lyrics: "Parcels 2018....",
        },
        {
            id: 8,
            music_list_img: require("../../assets/img/new_releases/8.jpg"),
            titile: "St. Vincent",
            lyrics: "Mass Education - 2018....",
        },
        {
            id: 9,
            music_list_img: require("../../assets/img/new_releases/9.jpg"),
            titile: "Terenoire",
            lyrics: "Terrenoire Ep 2018....",
        },
        {
            id: 10,
            music_list_img: require("../../assets/img/new_releases/10.jpg"),
            titile: "Owlle",
            lyrics: "Heav Weather - 2018....",
        },
        {
            id: 11,
            music_list_img: require("../../assets/img/new_releases/11.jpg"),
            titile: "Connan Mockasin",
            lyrics: "Jass Busters 2018....",
        },
        {
            id: 12,
            music_list_img: require("../../assets/img/new_releases/12.jpg"),
            titile: "Yann Tiersen",
            lyrics: "Hent 2018....",
        },
    ]);
    return (
        <NewRealeseContainer>
            <SelectionList>
                <RightTopHead>
                    <TopHeadName>New Releases</TopHeadName>
                    <TopHeadIcon>
                        <TopHeadIconAll>
                            <TopHeadIconName to="/">All</TopHeadIconName>
                        </TopHeadIconAll>
                        <Hamburger />
                    </TopHeadIcon>
                </RightTopHead>
            </SelectionList>

            <MusicsBox>
                {musicList.map((each) => (
                    <MusicImgList key={each.id}>
                        <MusicImgContainer>
                            <img src={each.music_list_img} alt="" />
                            <SpanIcon className="icon">
                                <BsPlayFill className="new" />
                            </SpanIcon>
                        </MusicImgContainer>
                        <MusicNameList>
                            <h4>{each.titile}</h4>
                            <h5>{each.lyrics}</h5>
                        </MusicNameList>
                    </MusicImgList>
                ))}
            </MusicsBox>
        </NewRealeseContainer>
    );
}

export default NewReleases;

const NewRealeseContainer = styled.div``;
const TopHeadIconName = styled(Link)``;
const MusicsBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 70px;
`;
const RightTopHead = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 40px 10px 10px 40px;
`;
const TopHeadIcon = styled.div`
    display: flex;
`;

const SpanIcon = styled.span`
    display: inline-block;
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 15px;
    left: 15px;
    background-color: aliceblue;
    border-radius: 50%;
    transition: 0.3s ease all;
    transform: scale(0);
`;
const SelectionList = styled.div``;
const TopHeadName = styled.h4`
    font-size: 30px;
`;
const TopHeadIconAll = styled.div`
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
const MusicImgList = styled.div`
    margin: 10px;
`;
const MusicNameList = styled.div`
    margin-top: 10px;
    h4 {
        margin-top: 20px;
    }
    h5 {
        margin-top: 5px;
        color: #757272;
        font-family: "noto_sansextralight";
        font-size: 14px;
    }
`;

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
const MusicImgContainer = styled.div`
    position: relative;
    width: 190px;
    height: 190px;
    img {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 5%;
    }
    &:hover span.icon {
        transform: scale(1);
    }
`;
