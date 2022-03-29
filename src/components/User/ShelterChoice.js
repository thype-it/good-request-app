import React, {useState, useEffect} from "react";
import { MyRow } from "../MyStyled";
import axios from "axios";

const ShelterChoice = ({register, require, title}) => {

    // handle GET of shelter list
    const [sheltersList, setSheltersList] = useState([]);

    useEffect(async () => {
        const result = await axios(
            `https://frontend-assignment-api.goodrequest.dev/api/v1/shelters`,
        );
        setSheltersList(result.data.shelters);
    }, []);
    return (
        <>
            <MyRow>
                <h4 className="title">{title}</h4>
                <small>{require? "*Povinné" : "Nepovinné"}</small>
            </MyRow>
            <label>
                <span>Útulok</span>
                <select {...register ("shelterID", {required: {
                    value: require,
                    message: "Ktorému útulku si želáte prispieť ? Vyberte zo zoznamu"
                }})}>
                    <option value="" disabled selected>Vyberte útulok zo zoznamu</option>
                    {
                        sheltersList.map((e, i) => 
                            <option value={`${e.id},${e.name}`} key={i}>{e.name}</option>
                        )
                    }
                </select>  
            </label>
        </>
    )
  }
  
  export default ShelterChoice;