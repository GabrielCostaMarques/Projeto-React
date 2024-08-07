import { useState, useEffect } from "react";
import { db } from '../firebase/config'
import { collection, query, orderBy, onSnapshot, where } from "firebase/firestore";



export const useFetchDocuments = (docColletion, search = null, uid = null) => {
    const [documents, setDocuments] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [cancelled, setCancelled] = useState(false)


    useEffect(() => {
        async function loadData() {
            if (cancelled) return;

            setLoading(true)
            const collectionRef = await collection(db, docColletion)

            try {
                let q;

                q = await query(collectionRef, orderBy("createdAt", "desc"));

                await onSnapshot(q, (querySnapshot) => {
                    setDocuments(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        })
                        )
                    )
                })
                console.log(documents);
                
                setLoading(false)
                
            } catch (error) {

                setError(error.message)
                setLoading(false)

            }
        }
        loadData()
    }, [docColletion, search, uid, cancelled,documents])
    
    useEffect(()=>{
        return ()=>setCancelled(true)
    },[])
    return{documents,loading,error}
}