
import { storage } from "../firebase";

import { ref , uploadBytes , getDownloadURL } from "firebase/storage";


export const upload = async (file) => { 

    try {
        
         
        // Création de la reference
        const imageRef = ref( storage , `images/${file.name}`) ;

        // Enregistrement du fichier sur FireStorage
        const snapShot = await uploadBytes(imageRef , file );

        // Récupération de l'url du fichier 
        const url = await getDownloadURL( snapShot.ref) ;

        return url ;

    } catch (error) {

         return null    ; 

    }


 }