import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc, updateDoc, setDoc, arrayRemove, arrayUnion } from "firebase/firestore";
import { auth } from "../firebase/firebase";

const useFavJob = (id) => {
    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        const checkFavJob = async () => {
            const user = auth.currentUser;
            if (user === null) {
                console.log("No hay usuario logueado")
                return;
            }

            const uid = user.uid;
            const db = getFirestore();
            const jobRef = doc(db, "ofertas", id);

            const jobDoc = await getDoc(jobRef);
            if (!jobDoc.exists()) {
                console.log("No existe el documento de la oferta");
                return;
            }

            const favRef = doc(db, "favoritos", uid);
            const favDoc = await getDoc(favRef);

            if (favDoc.exists()) {
                const favData = favDoc.data();
                const favJobs = favData.jobs.map(job => job.id);
                setIsFav(favJobs.includes(jobRef.id));
            } else {
                setIsFav(false);
            }
        };
        checkFavJob();
    }, [id]);

    const toggleFavJob = async () => {
        const user = auth.currentUser;
        if (user === null) {
            console.log("No hay usuario logueado")
            return;
        }

        const uid = user.uid;
        const db = getFirestore();
        const jobRef = doc(db, "ofertas", id);

        const jobDoc = await getDoc(jobRef);
        if (!jobDoc.exists()) {
            console.log("No existe el documento de la oferta");
            return;
        }

        const favRef = doc(db, "favoritos", uid);
        const favDoc = await getDoc(favRef);

        if (favDoc.exists()) {
            const favData = favDoc.data();
            const favJobs = favData.jobs.map(job => job.id);
            if (favJobs.includes(jobRef.id)) {
                console.log("Ya existe el job en favoritos del usuario, lo quitamos");
                // Lo eliminamos de favoritos
                await updateDoc(favRef, {
                    jobs: favData.jobs.filter(job => job.id !== jobRef.id)
                });
                setIsFav(false);
            } else {
                // Lo añadimos a favoritos
                await updateDoc(favRef, {
                    jobs: [...favData.jobs, jobRef]
                });
                setIsFav(true);
            }
        } else {
            // El documento de favoritos del usuario no existe, lo creamos
            console.log("No existe el documento de favoritos del usuario, lo añadimos");
            await setDoc(favRef, {
                jobs: [
                    jobRef]
            });
            setIsFav(true);
        }
    };

    return { isFav, toggleFavJob };
};

export default useFavJob;
