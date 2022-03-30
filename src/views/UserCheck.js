import React from "react";
import { useStateMachine } from "little-state-machine";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

//children
import FancyCheckbox from "../components/form/FancyCheckbox.js";

//styled components
import {MyButton, MySubmit, MyForm, MyRow} from "../components/MyStyled.js";
import ProgressBar from "../components/genreal/ProgressBar.js";

const Info = styled.div`
    margin-bottom: 1em;
    &:last-of-type {
        margin-bottom: 2.7em;
    }
`

//template
const UserCheck = props => {

    const { state } = useStateMachine();
    const { 
        firstName, 
        lastName, 
        email, 
        value, 
        customValue, 
        shelterID, 
        phone, 
        helpOne 
    } = state.yourDetails;

    const navigate = useNavigate();

    //click back
    const handleBack = () => {
        navigate('/UserInfo');
    }

    // create new contribution
    const handleSubmit = (e) => {

        e.preventDefault();

        axios.post('https://frontend-assignment-api.goodrequest.dev/api/v1/shelters/contribute', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone:"0" + phone,
            value: value || customValue,
            shelterID: shelterID? shelterID.split(',')[0] : null
          })
          .then(function (response) {
            navigate('/UserSuccess') 
          })
          .catch(function (error) {
            console.log(error);
            alert("Niečo sa pokazilo")
          });
    }

    return (

        <>
            <ProgressBar activeEl={3}/>

            <h2 className="heading">Skontrolujte si zadané údaje</h2>
            
            <Info>
                <h4 className="title">Akou formou chcem pomôcť</h4>
                <p>{helpOne? 
                    "Chcem finančne prispieť konkrétnemu útulku" : 
                    "Chcem finančne prispieť celej nadácii"}
                </p>
            </Info>

            {shelterID?
                <Info>
                    <h4 className="title">Najviac mi záleží na útulku</h4>
                    <p>{shelterID.split(',')[1]}</p>
                </Info> : null
            }

            <Info>
                <h4 className="title">Suma ktorou chcem pomôcť</h4>
                <p>{customValue? customValue: value} €</p>
            </Info>


            <Info>
                <h4 className="title">Meno a priezvisko</h4>
                <p>{firstName} {lastName}</p>
            </Info>
        
            {email?
                <Info>
                    <h4 className="title">E-mailová adresa</h4>
                    <p>{email}</p>
                </Info> : null
            }

            {phone?
                <Info>
                    <h4 className="title">Telefónne číslo</h4>
                    <p>{phone}</p>
                </Info> : null
            }
   
            <MyForm onSubmit={handleSubmit}>
                <FancyCheckbox required text="Súhlasím so spracovaním mojich osobných údajov"/>
                <MyRow>
                    <MyButton className="button" onClick={handleBack}>Späť</MyButton>
                    <MySubmit type="submit" value="Odoslať formulár"/>
                </MyRow>
            </MyForm>
        </>

    )

}

export default UserCheck;