import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from './../updateAction.js';

//components
import ContributionChoice from "../components/User/ContributionChoice.js";
import ShelterChoice from "../components/User/ShelterChoice.js";
import AmountChoice from "../components/User/AmountChoice.js";

//styled components
import {MySubmit, MyForm, MyRow} from "../components/MyStyled.js";

//component
const UserChoice = props => {

    // handle form and global store state
    const { actions, state } = useStateMachine({updateAction}); //load current state, initiate update action
    const { register, formState: { errors }, handleSubmit, setValue } = useForm({
        defaultValues: state.yourDetails // connect form with data object
    });
    const navigate = useNavigate(); // router navigation
    const onSubmit = data => {
        data.helpOne = shelters;
        actions.updateAction(data); // update data object with form values
       navigate('/UserInfo'); //navigate to next view
       
    }
    //highlight button
    const [isActive, setActive] = useState(false);
    const handleToggle = () => {
        setActive(true);
    };

    // handle optional select requirement
    const [shelters, setShelters] = useState(false);
    const handleContributionClick = (data) => {
        setShelters(data);
    }

    //template
    return (

        <>
            <h2 className="heading">Vyberte si možnosť, ako chcete pomôcť</h2>
            <ContributionChoice ContributionClick={handleContributionClick} />
            <MyForm onSubmit={handleSubmit(onSubmit)} onClick={handleToggle} className="choice">
                <ShelterChoice 
                    register={register} 
                    require={shelters} 
                    title="O projekte"
                />
                <h4 className="title">*Suma, ktorou chcem prispieť</h4>
                <AmountChoice register={register} setValue={setValue}/>
                <p className="error">{errors.shelterID?.message}</p>
                <p className="error">{errors.value?.message}{errors.customValue?.message}</p>
                <MyRow singleChild>
                    <MySubmit type="submit" className={isActive ? "active" : null} value = "Pokračovať"/>
                </MyRow>
            </MyForm>
        </>

    )

}

export default UserChoice;