import { createSlice } from '@reduxjs/toolkit';

const yourDetailsSlice = createSlice({
    name: "yourDetails",
    initialState: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        value: "",
        countryCode: "",
        customValue: null,
        shelterID: null,
        helpOne: false 
    },
    reducers: {
        chooseFirstName: (state, action) => {state.firstName = action.payload},
        chooseLastName: (state, action) => {state.lastName = action.payload},
        chooseEmail: (state, action) => {state.email = action.payload},
        choosePhone: (state, action) => {state.phone = action.payload},
        chooseValue: (state, action) => {state.value = action.payload},
        chooseCountryCode: (state, action) => {state.countryCode = action.payload},
        chooseCustomValue: (state, action) => {state.customValue = action.payload},
        chooseShelterID: (state, action) => {state.shelterID = action.payload},
        chooseHelpOne: (state, action) => {state.helpOne = action.payload}
    }
});

export const { 
    chooseFirstName,
    chooseLastName,
    chooseEmail,
    choosePhone,
    chooseValue,
    chooseCountryCode,
    chooseCustomValue,
    chooseShelterID,
    chooseHelpOne
} = yourDetailsSlice.actions;

export const reducer = yourDetailsSlice.reducer;