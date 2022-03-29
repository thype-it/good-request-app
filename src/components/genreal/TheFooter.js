import React from "react";
import { useNavigate } from "react-router-dom";
//assests
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
//styled components
import { MyRow, MyColumn } from "../MyStyled";


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
                <MyColumn maxWidth="200px">
                    <h5 className="title">Nadácia Good boy</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. </p>
                </MyColumn>
                <MyColumn maxWidth="200px">
                    <h5 className="title">Nadácia Good boy</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. </p>
                </MyColumn>
                <MyColumn maxWidth="200px">
                    <h5 className="title">Nadácia Good boy</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. </p>
                </MyColumn>
            </MyRow>
        </MyRow>
    )
}

export default TheFooter;