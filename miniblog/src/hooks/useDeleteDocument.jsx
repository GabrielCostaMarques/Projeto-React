import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

//The "collection" be the tables from firebase
//The addDoc is for insert file in database
//The Timestamp is check hours register



const initialState = {
    loading: null,
    error: null
}

const deleteReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return { loading: true, error: null }
        case "DELETED_DOC":
            return { loading: false, error: null }
        case "ERROR":
            return { loading: false, error: action.payload }
        default: return state

    }
}

export const useDeleteDocument = (docCollection) => {
    const [response, dispatch] = useReducer(deleteReducer, initialState)

    //deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const checkCancelledBeforeDispatch = (action) => {
        if (!cancelled) {
            dispatch(action)
        }
    }
    const deleteDocument = async (id) => {

        checkCancelledBeforeDispatch({
            type: "LOADING",
        })
        try {
            const deleteDocument = await deleteDoc(doc(db,docCollection, id))

            checkCancelledBeforeDispatch({
                type: "DELETED_DOC",
                payload: deleteDocument,
            })
        } catch (error) {

            checkCancelledBeforeDispatch({
                type: "ERROR",
                payload: error.message,
            })
        }
    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return { deleteDocument, response }
}

