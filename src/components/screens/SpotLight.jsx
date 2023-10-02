import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiBarChart } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { BsPlayFill } from "react-icons/bs";
import redheart from "../assets/img/heart-red.png";
import grayheart from "../assets/img/heart -gray.png";
import { Link } from "react-router-dom";
import NewReleases from "../includes/spotlight/NewReleases";
import DebutAlbums from "../includes/spotlight/DebutAlbums";
import MusicPlayer from "../includes/MusicPlayer";

// =========================================================================

const topChartsFrance = [
    {
        id: 1,
        feature_image: require("../assets/img/music-img-1.png"),
        year: 2018,
        title: "Petit Biscuit",
        description: "Suffer / Safe",
    },
    {
        id: 2,
        feature_image: require("../assets/img/music-img-2.png"),
        year: 2018,
        title: "Nili Hadida",
        description: "Nili Hadida",
    },
    {
        id: 3,
        feature_image: require("../assets/img/music-img-3.png"),
        year: 2018,
        title: "Hyphen Hyphen",
        description: "HH ",
    },
];
// =======================================================================
const topChartsEurope = [
    {
        id: 1,
        feature_image: require("../assets/img/music-eur-1.jpg"),
        year: 2018,
        title: "Parcels",
        description: "Parcels",
    },
    {
        id: 2,
        feature_image: require("../assets/img/music-eur-2.jpg"),
        year: 2018,
        title: "Lady Gaga & Bradley Cooper",
        description: "A Star Is Bron OST",
    },
    {
        id: 3,
        feature_image: require("../assets/img/music-eur-3.jpg"),
        year: 2018,
        title: "David Bowie",
        description: "Loving The Alien",
    },
];
// =================================================================
function SpotLight() {
    const [heartId, setHeartId] = useState([]);
    const [isLiked, setIsLiked] = useState(false);

    const toggleId = (id, item) => {
        if (!topChartsFrance.includes(item)) {
            if (!heartId.includes(id)) {
                setHeartId([...heartId, id]);
            } else {
                let filtered = heartId.filter((filteritem) => filteritem !== id);
                setHeartId(filtered);
            }
        } else {
            if (topChartsFrance.includes(item) && isLiked) {
                let deletedid = heartId.find((i) => i === id);
                setHeartId(topChartsFrance.filter((item) => item.id !== deletedid));
            }
        }
    };
    const [RightNow, setRightNow] = useState([
        {
            id: 5,
            art_image: require("../assets/img/right-now11.png"),
            title: "Deftones",
            lyrics: "My Own Summer - Around...",
            music_image: require("../assets/img/right-now1.jpg"),
            isLiked: false,
        },
        {
            id: 6,
            art_image: require("../assets/img/right-now22.png"),
            title: "311",
            lyrics: "Stealing happy hours, stea..",
            music_image: require("../assets/img/right-now2.jpg"),
            isLiked: false,
        },
        {
            id: 7,
            art_image: require("../assets/img/right-now33.png"),
            title: "Incubus",
            lyrics: "Nowhere Fast - Make Your...",
            music_image: require("../assets/img/right-now3.jpg"),
            isLiked: false,
        },
    ]);
    // =========================================================================
    const [TodayList, setTodayList] = useState([
        {
            id: 1,
            art_image: require("../assets/img/Today-11.png"),
            title: "Opeth",
            lyrics: "Ghost Of Perdition - Ghost...",
            music_image: require("../assets/img/Today-1.png"),
            isLiked: false,
        },
        {
            id: 2,
            art_image: require("../assets/img/Today-22.png"),
            title: "Beach Home",
            lyrics: "Spark - Depression Cheroy...",
            music_image: require("../assets/img/Today-2.png"),
            isLiked: false,
        },
        {
            id: 3,
            art_image: require("../assets/img/Today-33.png"),
            title: "The Expansions",
            lyrics: "Cannonball - murmuration...",
            music_image: require("../assets/img/Today-3.png"),
            isLiked: false,
        },
        {
            id: 4,
            art_image: require("../assets/img/Today-44.png"),
            title: "Paradis",
            lyrics: "Recto verso - Recto verso.....",
            music_image: require("../assets/img/Today-4.png"),
            isLiked: false,
        },
    ]);
    // ===========================================================================

    //  =====================================================   ====
    return (
        <>
            <SpotLightBox>
                <SpotLightLeft>
                    <SpotHeader>
                        <SpotListBox>
                            <SpotNames to="/">This Week</SpotNames>
                        </SpotListBox>
                        <SpotListBox>
                            <SpotNames to="/">This Month</SpotNames>
                        </SpotListBox>
                        <SpotListBox>
                            <SpotNames to="/">This Year</SpotNames>
                        </SpotListBox>
                    </SpotHeader>
                    {/* ======================================================== */}
                    <TopList>
                        <ListName>
                            Top Charts: <br />
                            France
                        </ListName>
                        <ListOpption>
                            <ListOpptionAll>
                                <ListoptionIcon to="/">All</ListoptionIcon>
                            </ListOpptionAll>
                            <Hamburger />
                        </ListOpption>
                    </TopList>

                    {/* ========================================================= */}
                    <MusicListNames>
                        {topChartsFrance.map((each) => (
                            <MusicListName key={each.id}>
                                <MusicListOrder>
                                    <MusicListOrderBox to="/">
                                        <MusicListNumber>{each.id}</MusicListNumber>
                                        <MusicImgContainer>
                                            <img src={each.feature_image} alt="musiclogo" />
                                        </MusicImgContainer>
                                        <MusicListTitile>
                                            <h4>{each.title}</h4>
                                            <h5>
                                                {each.description} - {each.year}
                                            </h5>
                                        </MusicListTitile>
                                    </MusicListOrderBox>
                                </MusicListOrder>
                            </MusicListName>
                        ))}
                    </MusicListNames>
                    {/* ============================================================ */}
                    <TopListEurope>
                        <ListName>
                            Top Charts: <br />
                            Europe
                        </ListName>
                        <ListOpption>
                            <ListOpptionAll>
                                <ListOptionBox to="/">All</ListOptionBox>
                            </ListOpptionAll>
                            <Hamburger />
                        </ListOpption>
                    </TopListEurope>
                    {/* ============================================================ */}
                    <MusicListNames>
                        {topChartsEurope.map((each) => (
                            <MusicListName key={each.id}>
                                <MusicListOrder>
                                    <MusicBoxList to="/">
                                        <MusicListNumber>{each.id}</MusicListNumber>
                                        <MusicImgContainer>
                                            <img src={each.feature_image} alt="musiclogo" />
                                        </MusicImgContainer>
                                        <MusicListTitile>
                                            <h4>{each.title}</h4>
                                            <h5>
                                                {each.description} - {each.year}
                                            </h5>
                                        </MusicListTitile>
                                    </MusicBoxList>
                                </MusicListOrder>
                            </MusicListName>
                        ))}
                    </MusicListNames>
                    {/* ============================================================== */}
                    <TopFriends>
                        <ListName>Friends</ListName>
                        <ListOpption>
                            <ListOpptionAll>
                                <OptionAll to="/">All</OptionAll>
                            </ListOpptionAll>
                            <Hamburger />
                        </ListOpption>
                    </TopFriends>
                    {/* ============================================================== */}
                    <Now>
                        <BiBarChart />
                        <h6>Right Now</h6>
                    </Now>
                    {RightNow.map((each) => (
                        <RightNowLeft key={each.id}>
                            <RightNowImg>
                                <img src={each.art_image} alt="" />
                            </RightNowImg>
                            <RightNowTitile>
                                <h4>{each.title}</h4>
                                <h5>{each.lyrics}</h5>
                            </RightNowTitile>
                            <RightNowImgTwo>
                                <img src={each.music_image} alt="" />
                            </RightNowImgTwo>
                            <HeartBox onClick={() => toggleId(each.id, each)}>
                                <Heart src={heartId.includes(each.id) ? redheart : grayheart} />
                            </HeartBox>
                        </RightNowLeft>
                    ))}
                    {/* ============================================================================ */}
                    <Now>
                        <h6>Today</h6>
                    </Now>
                    {TodayList.map((each) => (
                        <TodayLeft key={each.id}>
                            <TodayImg>
                                <img src={each.art_image} alt="" />
                            </TodayImg>
                            <TodayTitile>
                                <h4>{each.title}</h4>
                                <h5>{each.lyrics}</h5>
                            </TodayTitile>
                            <TodayImgTwo>
                                <img src={each.music_image} alt="" />
                            </TodayImgTwo>
                            <HeartBox onClick={() => toggleId(each.id, each)}>
                                <Heart src={heartId.includes(each.id) ? redheart : grayheart} />
                            </HeartBox>
                        </TodayLeft>
                    ))}
                    {/* ============================================================================== */}
                </SpotLightLeft>
                <SpotLightRight>
                    <NewReleases />
                    <DebutAlbums />
                </SpotLightRight>
            </SpotLightBox>
            <MusicTab>
                <MusicPlayer />
            </MusicTab>
        </>
    );
}
export default SpotLight;

// =================================================================================
const RightTopHead = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 40px 10px 10px 40px;
`;
const MusicTab = styled.div``;
const OptionAll = styled(Link)``;
const MusicBoxList = styled(Link)``;
const ListOptionBox = styled(Link)``;
const MusicListOrderBox = styled(Link)``;
const ListoptionIcon = styled(Link)``;
const SpotListBox = styled.li``;
const SpotNames = styled(Link)``;

const musicList = styled.div`
    display: flex;
`;
const SpanIcon = styled.span``;
const SelectionList = styled.div``;
const TopHeadName = styled.h4`
    font-size: 30px;
`;

const MusicImgList = styled.div``;
const MusicNameList = styled.div``;
const SpotLightBox = styled.div`
    display: flex;
    flex-direction: row;
`;
const SpotLightLeft = styled.div`
    border-right: 0.5px solid #f0f0f0;
    width: 25%;
    overflow-y: scroll;
    height: 600px;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const SpotHeader = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 40px;
    border-bottom: 0.5px solid #f0f0f0;
    a {
        color: #000;
        border: 1px solid #f0f0f0;
        padding: 5px 10px 5px 10px;
        border-radius: 8%;
        font-size: 13px;
        text-decoration: none;
        font-family: "noto_sansbold";

        &:hover {
            background-color: #e5607e;
        }
    }
`;
const HeartBox = styled.div`
    display: inline-block;
    margin-left: 15px;
    cursor: pointer;
    width: 30px;
    height: 30px;
`;
const TopList = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0px 0 30px;
`;
const ListName = styled.h3`
    font-size: 24px;
`;
const ListOpption = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    margin-right: 30px;
`;
const ListOpptionAll = styled.li`
    justify-content: space-between;
    display: flex;
    align-items: center;
    border: 1px solid #f0f0f0;
    padding: 10px;
    border-radius: 10%;
    font-family: "noto_sansbold";
    font-size: 14px;
    cursor: pointer;
    a {
        text-decoration: none;
        color: #000;
    }
    &:hover {
        background-color: #e5607e;
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
const Heart = styled.img`
    width: 100%;
    display: block;
`;
const MusicListNames = styled.ul`
    margin-left: 5%;
`;
const MusicListName = styled.li`
    padding: 10px;
    display: flex;
`;
const MusicImgContainer = styled.div`
    width: 50px;
    img {
        width: 100%;
        display: block;
    }
`;
const MusicListNumber = styled.p`
    margin-right: 20px;
    margin-left: 10px;
`;
const MusicListOrder = styled.div`
    a {
        display: flex;
        text-decoration: none;
        align-items: center;
        &:hover {
            background-color: #f0f0f0;
            outline: 1px solid #f0f0f0;
            border-radius: 5px;
        }
        width: 450px;
    }

    img {
        width: 100%;
    }
`;
const MusicListTitile = styled.div`
    margin-left: 10px;

    h4 {
        color: #000;
        margin-bottom: 10px;
    }
    h5 {
        color: #757272;
        font-family: "noto_sansextralight";
        font-size: 14px;
    }
`;

const TopListEurope = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0px 0 30px;
`;
const TopFriends = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0px 0 30px;
`;
const LeftBar = styled(BiBarChart)``;
const Now = styled.div`
    display: flex;
    margin: 30px 0px 20px 30px;
    color: #a9aaac;
    h6 {
        font-size: 14px;
    }
`;
const RightNowLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0 auto 20px;
    width: 80%;
`;
const RightNowImg = styled.div`
    width: 70px;
    margin-right: 20px;
    img {
        border-radius: 50%;
        box-shadow: 1px 2px 7px 0px #adadad;
        width: 100%;
        display: block;
    }
`;
const RightNowTitile = styled.div`
    margin-right: 20px;
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
const RightNowImgTwo = styled.div`
    width: 60px;
    img {
        border-radius: 10%;
        box-shadow: 1px 2px 7px 0px #adadad;
        width: 100%;
    }
`;
const TodayLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0 auto 20px;
    width: 80%;
`;
const TodayImg = styled.div`
    width: 70px;
    margin-right: 20px;
    img {
        border-radius: 50%;
        box-shadow: 1px 2px 7px 0px #adadad;
        width: 100%;
        display: block;
    }
`;
const TodayTitile = styled.div`
    margin-right: 20px;
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
const TodayImgTwo = styled.div`
    width: 60px;
    img {
        border-radius: 10%;
        box-shadow: 1px 2px 7px 0px #adadad;
        width: 100%;
    }
`;

const SpotLightRight = styled.div`
    width: 75%;
    overflow-y: scroll;
    height: 600px;
    &::-webkit-scrollbar {
        display: none;
    }
`;
