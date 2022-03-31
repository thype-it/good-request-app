import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//assests
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
//styled components
import { MyRow, MyColumn } from "../MyStyled";

const FooterColumn = styled(MyColumn)`
    min-height: 130px;
    min-width: 150px;
    justify-content: space-between;
    p {
        cursor: pointer;
    }
`;


const TheFooter = () => {
    const navigate = useNavigate();

    //click error
    const handleClick = () => {
        navigate('/404');
    }


    return (
        <MyRow>
            <MyRow onClick={handleClick}>
                <Logo/>
                <h5 className="heading">Good Boy</h5>
            </MyRow>
            <MyRow onClick={handleClick}>
                <FooterColumn maxWidth="200px">
                    <h5 className="title">Nadácia Good boy</h5>
                    <p>O projekte</p>
                    <p>Ako na to</p>
                    <p>Kontakt</p>
                </FooterColumn>
                <FooterColumn maxWidth="200px">
                    <h5 className="title">Nadácia Good boy</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. </p>
                </FooterColumn>
                <FooterColumn maxWidth="200px">
                    <h5 className="title">Nadácia Good boy</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. </p>
                </FooterColumn>
            </MyRow>
        </MyRow>
    )
}

export default TheFooter;