import React from "react";
import { useNavigate } from "react-router-dom";
import { MyFlex, MyButton } from "../components/MyStyled";

const NoMatch = props => {

    //click back
    const navigate = useNavigate(); // router navigation
    const handleBack = () => {
        navigate('/');
    }

    return (
        <MyFlex>
            <h2>Zdá sa že tu sa nič nenachádza</h2>
            <MyButton className="button" onClick={handleBack}>Na začiatok</MyButton>
        </MyFlex>
    )
}

export default NoMatch;