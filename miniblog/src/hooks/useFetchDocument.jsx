import { useState, useEffect } from "react";
import { db } from '../firebase/config'
import { doc,getDoc } from "firebase/firestore";



export const useFetchDocument = (docColletion,id) => {
    const [document, setDocument] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [cancelled, setCancelled] = useState(false)


    useEffect(() => {
        async function loadDocument() {
            if (cancelled) return;

            setLoading(true)
           try {
            const docRef=await doc(db,docColletion,id)
            const docSnap=await getDoc(docRef)
            setDocument(docSnap.data())
            
            setLoading(null)
            
        } catch (error) {
            setError(error.message)
            console.log(error);
            setLoading(null)
            
        }
        
        
    }
    loadDocument()
    console.log(document);
}, [docColletion,id,cancelled,document])


    useEffect(() => {
        return () => setCancelled(true)
    }, [])
    return { document, loading, error }
}