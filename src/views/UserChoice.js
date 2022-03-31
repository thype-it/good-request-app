import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
    chooseValue,
    chooseCustomValue,
    chooseShelterID,
    chooseHelpOne,
} from '../redux-state/yourDetailsSlice'

//components
import ContributionChoice from "../components/User/ContributionChoice.js";
import ShelterChoice from "../components/User/ShelterChoice.js";
import AmountChoice from "../components/User/AmountChoice.js";

//styled components
import {MySubmit, MyForm, MyRow} from "../components/MyStyled.js";
import ProgressBar from "../components/genreal/ProgressBar.js";

//component
const UserChoice = props => {

    const dispatch = useDispatch(); //updating store
    const navigate = useNavigate(); // router navigation
    //store values
    const value = useSelector(state => state.value);
    const customValue = useSelector(state => state.customValue);
    const shelterID = useSelector(state => state.shelterID);
    //register to hook
    const { register, formState: { errors }, handleSubmit, setValue } = useForm({
        defaultValues: { value, customValue, shelterID} // connect form with data object
    });
    //handle submit
    const onSubmit = data => {
        //set values to store
        dispatch(chooseValue(data.value))
        dispatch(chooseCustomValue(data.customValue))
        dispatch(chooseShelterID(data.shelterID))
        dispatch(chooseHelpOne(shelters))
        //navigate to next view
        navigate('/UserInfo'); 
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
             <ProgressBar activeEl={1}/>
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
                <MyRow singleChild  className="buttons-row">
                    <MySubmit type="submit" className={isActive ? "active" : null} value = "Pokračovať"/>
                </MyRow>
            </MyForm>
        </>

    )

}

export default UserChoice;