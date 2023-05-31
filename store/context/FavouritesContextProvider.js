import { createContext, useState } from "react";

export const FavouritesContext = createContext({
    ids: [],
    addFavourite: (id)=> {},
    removeFavourite: (id)=> {}
});

function FavouritesContextProvider( {children} ){

    const[favouriteMealId, setFavouriteMealId]= useState( [] );

    function addFavourite(id){
        setFavouriteMealId( (currentFavIds)=> [...currentFavIds, id] );
    }

    function removeFavourite(id){
        setFavouriteMealId( (currentFavIds)=> currentFavIds.filter( (mealId)=> mealId !== id) );
    }

    const value= {
        ids: favouriteMealId,
        addFavourite: addFavourite,
        removeFavourite: removeFavourite,
    }

    return(
        <FavouritesContext.Provider value= {value} > {children} </FavouritesContext.Provider>
    );
}
export default FavouritesContextProvider;