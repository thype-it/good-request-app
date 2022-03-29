import React ,{ useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from './../updateAction.js';

//children
import NumberInfo from "../components/form/NumberInfo.js";

//styled components
import { MyForm, MyButton, MySubmit, MyRow } from "../components/MyStyled.js";

const UserInfo = props => {
        
    //handle submit
    const { actions, state } = useStateMachine({updateAction}); //load current state, initiate update action
    const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: state.yourDetails // connect form with data object
    });
    const navigate = useNavigate(); // router navigation
    const onSubmit = data => {
        actions.updateAction(data); // update data object with form values
        navigate('/UserCheck'); //navigate to next view
    }

    //highlight button
    const [isActive, setActive] = useState(false);
    const handleToggle = () => {
        setActive(true);
    };

    //click back
    const handleBack = () => {
        navigate('/');
    }

    //template
    return (

    <>
        <h2 className="heading">Potrebujeme od Vás zopár informácií</h2>
        <MyForm onSubmit={handleSubmit(onSubmit)} onClick={handleToggle}>

            <h4 className="title">O Vás</h4>

            <label>
                <span>Meno</span>
                <input
                {...register ("firstName",{
                    minLength:{
                        value: 2,
                        message: "Meno musí obshahovať apoň dva znaky"
                    }
                })}
                placeholder="Zadajte Vaše meno"
                name="firstName"
                />
                <p className="error">{errors.firstName?.message}</p>
            </label>

            <label>
                <span>Priezvisko</span>
                <input
                {...register ("lastName",{
                    required: "Vyplňte porsím Vaše priezvisko",
                    minLength:{
                        value: 2,
                        message: "Meno musí obshahovať apoň dva znaky"
                    }
                })}
                placeholder="Zadajte Vaše priezvisko"
                name="lastName"
                />
                <p className="error">{errors.lastName?.message}</p>
            </label>

            <label>
                <span>E-mailová adresa</span>
                <input
                {...register ("email", {
                    pattern: {
                        value:  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Nesprávny formát emailovej adresy"
                    }
                })}
                placeholder="Zadajte Váš e-mail"
                name='email'
                />
                <p className="error">{errors.email?.message}</p>
            </label>

            <label>
                <NumberInfo register={register} title="Telefónne číslo" textClass="light"/>
            </label>
            <p className="error">{errors.phone?.message}</p>

            <MyRow>
                <MyButton className="button" onClick={handleBack}>Späť</MyButton>
                <MySubmit type="submit" className={isActive ? "active" : null} value = "Pokračovať"/>
            </MyRow>

        </MyForm>

    </>
    
    )
}

export default UserInfo;