import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';
// Initial state will be useful
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
        ]
}

// Create global context

export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //Action to our reducer
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        
        })
    }

    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}