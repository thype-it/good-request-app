import React ,{ useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
    chooseFirstName,
    chooseLastName,
    chooseEmail,
    choosePhone,
    chooseCountryCode
} from '../redux-state/yourDetailsSlice'

//children
import NumberInfo from "../components/form/NumberInfo.js";

//styled components
import { MyForm, MyButton, MySubmit, MyRow } from "../components/MyStyled.js";
import ProgressBar from "../components/genreal/ProgressBar.js";

const UserInfo = props => {

    const dispatch = useDispatch(); //updating store
    const navigate = useNavigate(); // router navigation
    //store values
    const firstName = useSelector(state => state.firstName,);
    const lastName = useSelector(state => state.lastName,);
    const email = useSelector(state => state.email,);
    const phone = useSelector(state => state.phone,);
    //register to hook
    const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: { firstName, lastName, email, phone } // connect form with data object
    });

    //handle submit
    const onSubmit = data => {
        //set values to store
        dispatch(chooseFirstName(data.firstName))
        dispatch(chooseLastName(data.lastName))
        dispatch(chooseEmail(data.email))
        dispatch(choosePhone(data.phone))
        dispatch(chooseCountryCode(countryCode))
        //navigate to next view
        navigate('/UserCheck'); 
    }

    //highlight button
    const [isActive, setActive] = useState(false);
    const handleToggle = () => {
        setActive(true);
    };

    //country code
    const [countryCode, setCountryCode] = useState("+421");
    const getCountryCode = (data) => {
        setCountryCode(data)
    }

    //click back
    const handleBack = () => {
        navigate('/');
    }

    //template
    return (

    <>
        <ProgressBar activeEl={2}/>
        <h2 className="heading">Potrebujeme od Vás zopár informácií</h2>
        <MyForm onSubmit={handleSubmit(onSubmit)} onClick={handleToggle}>

            <h4 className="title">O Vás</h4>

            <label>
                <span>Meno</span>
                <input
                {...register ("firstName",{
                    pattern: {
                        value: /^([^0-9|<>{}[:"'!?()$%^\.\/<>@#&*\-\_=+\\\]\[]*)$/,
                        message: "Meno nemôže obsahovať číslice a špeciálne znaky"
                    },                   
                    minLength:{
                        value: 2,
                        message: "Meno musí obshahovať apoň dva znaky"
                    },
                    maxLength:{
                        value: 20,
                        message: "Meno môže obsahovať maximálne 20 znakov"
                    }
                })}
                placeholder="Zadajte Vaše meno"
                name="firstName"
                autoFocus
                />
                <p className="error">{errors.firstName?.message}</p>
            </label>
            
            <label>
                <span>Priezvisko*</span>
                <input
                {...register ("lastName",{
                    required: "Vyplňte prosím Vaše priezvisko",
                    pattern: {
                        value: /^([^0-9|<>{}[:"'!?()$%^\.\/<>@#&*\-\_=+\\\]\[]*)$/,
                        message: "Priezvisko nemôže obsahovať číslice a špeciálne znaky"
                    },
                    minLength:{
                        value: 2,
                        message: "Meno musí obshahovať apoň dva znaky"
                    },
                    maxLength:{
                        value: 30,
                        message: "Meno môže obsahovať maximálne 30 znakov"
                    }
                })}
                placeholder="Zadajte Vaše priezvisko"
                name="lastName"
                />
                <p className="error">{errors.lastName?.message}</p>
            </label>

            <label>
                <span>E-mailová adresa*</span>
                <input
                {...register ("email", {
                    required: "Zadajte Váš e-mail",
                    pattern: {
                        value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|sk|cz|online|web|game|com|hu|at|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/,
                        message: "Nesprávny formát emailovej adresy"
                    }
                })}
                placeholder="Zadajte Váš e-mail"
                name='email'
                />
                <p className="error">{errors.email?.message}</p>
            </label>

            <label>
                <NumberInfo register={register} title="Telefónne číslo" textClass="light" onCountryChange={getCountryCode}/>
            </label>
            <p className="error">{errors.phone?.message}</p>

            <MyRow className="buttons-row">
                <MyButton className="button" onClick={handleBack}>Späť</MyButton>
                <MySubmit type="submit" className={isActive ? "active" : null} value = "Pokračovať"/>
            </MyRow>

        </MyForm>

    </>
    
    )
}

export default UserInfo;