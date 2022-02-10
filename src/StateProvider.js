// setup data layer
// we need this to track basket
import React,{createContext, useContext, useReducer} from "react";

// This is the DATA LAYER
export const StateContext = createContext();

// BUILD THE PROVIDER
export const StateProvider = ({ reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// This is how we use it inside of component
export const useStateValue = () => useContext(StateContext);