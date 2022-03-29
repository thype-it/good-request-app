import React from "react";
import { useNavigate } from "react-router-dom";
import { MyFlex, MyButton } from "../components/MyStyled";

//template
const UserSuccess = props => {

    //click back
    const navigate = useNavigate(); // router navigation
    const handleBack = () => {
        navigate('/');
    }

    return (
        <MyFlex>
            <h2>Ďakujeme, že ste sa rozhodli pomôcť</h2>
            <MyButton className="button" onClick={handleBack}>Na začiatok</MyButton>
        </MyFlex>
    )

}

export default UserSuccess;