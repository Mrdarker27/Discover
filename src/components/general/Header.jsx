import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <MainContainer>
                <LeftContainer>
                    <LogoBox to="/">
                        <LogoImage src={require("../assets/img/logo.png")} alt="Logo" />
                    </LogoBox>
                </LeftContainer>
                <MidileContainer>
                    <MidileOption to="/">Library</MidileOption>
                    <MidileOption to="/">For You</MidileOption>
                    <MidileOption to="/">Discover</MidileOption>
                    <MidileOption to="/">Radio</MidileOption>
                    <MidileOption to="/">Connect</MidileOption>
                </MidileContainer>
                <RightContainer>
                    <form>
                        <HeaderSearchBox className="search">
                            <input type="search" placeholder="Search Apple Music" />
                            <Searchlink to="">
                                <SearchIcon />
                            </Searchlink>
                        </HeaderSearchBox>
                    </form>
                    <BellIcon />
                    <UserBox>
                        <img src={require("../assets/img/user-img.jpg")} alt="" />
                    </UserBox>
                </RightContainer>
            </MainContainer>
            <Outlet />
        </>
    );
}

export default Header;
const LogoBox = styled(Link)``;
const LogoImage = styled.img``;
const MidileOption = styled(Link)``;
const HeaderSearchBox = styled.div``;
const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px solid #f0f0f0;
`;
const LeftContainer = styled.div`
    width: 150px;
    img {
        width: 100%;
        display: block;
        margin-left: 50px;
    }
`;
const MidileContainer = styled.div`
    justify-content: space-between;
    width: 450px;
    display: flex;
    align-items: center;

    a {
        color: #000;
        border: 1px solid #f0f0f0;
        padding: 5px 10px 5px 10px;
        border-radius: 8%;
        font-size: 13px;
        font-family: "noto_sansbold";
        text-decoration: none;
        &:hover {
            background-color: #e5607e;
        }
    }
`;
const RightContainer = styled.div`
    width: 350px;
    display: flex;
    align-items: center;

    .search {
        position: relative;
        align-items: center;
        display: flex;
    }
    input {
        padding: 5px 5px 7px 10px;
        border-radius: 5px;
        border: 1px solid #f0f0f0;
    }
`;
const SearchIcon = styled(BiSearch)``;
const Searchlink = styled(Link)`
    position: absolute;
    right: 0;
    margin-right: 10px;
    color: #000;
`;
const BellIcon = styled(FaBell)`
    margin: 10px;
`;
const UserBox = styled.div`
    width: 40px;
    border-radius: 50%;
    img {
        width: 100%;
        display: block;
        border-radius: 50%;
    }
`;
