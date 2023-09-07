import { dbFirestore } from "../firebase";
import { doc , getDoc , collection , getDocs , query, addDoc } from "firebase/firestore";

/**
   created by : Ludmilla
   28/08/2023
   sélectionner un élement à partir de son identifiant dans une collection
   Param :
   collectionName : "nom de la collecion"
   id : "id de la collection"
**/

export const getOneById = async (collectionName , id) => {

    //preparation de la requete
    const rq = doc(dbFirestore, collectionName, id);
    //
    const snapShot = await getDoc(rq);

    /* 
     return snapShot.exists ? snapShot.data() : null ;
    */

    //si il existe j'injecte les données
    if (snapShot.exists) {
        return snapShot.data() ;
    } else {
        return null ;
    }
}

/**
   created by : Ludmilla
   28/08/2023
   sélectionner tout les élements à partir de leur identifiant dans une collection
   Param :
   collectionName : "nom de la collecion"
   id : "id de la collection"
**/

export const getAll = async (collectionName) => {

    //preparer ma requete sur tasks
    const rq = query(collection(dbFirestore , collectionName))
    //lancer la requête
    const snapShot = await getDocs(rq) ;


    //tester que le tableau n'est pas vide 
    if (!snapShot.empty) {
        const dataTemp = snapShot.docs.map(item => {
            return {id : item.id , ...item.data()}
        })

        //mise a jour de tasks
        return dataTemp ;

    } else {

        return [] ;
    }
}


/*****************************************
 * *
 * *
 * *
 *******************************************/

export const addDataToCollection = async (collectionName , data) =>{

    
    return  await addDoc(collection(dbFirestore, collectionName), data);



}