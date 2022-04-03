import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { ReactComponent as FB } from "../../assets/icons/facebook.svg";
import { ReactComponent as Insta } from "../../assets/icons/instagram.svg";

//styled components
import { MyRow } from "../MyStyled";

const Socials = styled.div`
    & > * {
        margin-right: 1em;
        &:last-of-type{
            margin-right: 0;
        }
    }
`;

const TheHeader = () => {

    const navigate = useNavigate();
    //click error
    const handleClick = () => {
        navigate('/404');
    }
    return (
        <MyRow onClick={handleClick}>
            <p>Nadácia Good Boy</p>
            <Socials>
                <FB/><Insta/>
            </Socials>
        </MyRow>
    )
}

export default TheHeader;