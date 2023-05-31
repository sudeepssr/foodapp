import {Text, View, StyleSheet, Image, ScrollView, Button} from 'react-native';
import { MEALS } from '../data/dummy-data';
import Subtitle from '../components/MealDesc/Subtitle';
import List from '../components/MealDesc/List';
import { useContext, useLayoutEffect } from 'react';
import IconButton from '../components/IconButton';
// import { FavouritesContextProvider } from '../store/context/FavouritesContextProvider';

function MealDescriptionScreen( {route, navigation} ){

    const mealId= route.params.mealId;
    const selectedMeal= MEALS.find((meal)=> meal.id=== mealId);

    // const context_favMeals= useContext( FavouritesContext );        //useContext hook
    
    // const mealIsFav= context_favMeals.ids.includes(mealId);     //to check if this is a fav meal, based on this we show star icon as gold or normal colour
    

    // function changeFavStatusHandler(){
    //     if(mealIsFav){
    //         //then un-fav it
    //         context_favMeals.removeFavourite(mealId);
    //     }
    //     else{
    //         //fav it
    //         context_favMeals.addFavourite(mealId);
    //     }
    // }

    // useLayoutEffect( ()=> {
    //     navigation.setOptions({
    //         headerRight: ()=> {
    //             return(
    //                 <IconButton title= 'Tap' onTap= {changeFavStatusHandler} 
    //                             icon= {mealIsFav ? 'star' : 'star-outline' }
    //                             color= "white"
    //                 />
    //             );
    //         }
    //     }
    //     );
    // },[navigation, changeFavStatusHandler]);

    return(
        <ScrollView style= {styles.mainContainer} >
            <View style= {StyleSheet.container} >
                <Image style= {styles.imgContainer} source={ {uri: selectedMeal.imageUrl} }/>
                <Text style= {styles.title} > {selectedMeal.title} </Text>
            </View>
            <View style= {styles.detailsContainer} >
                <Text style= {styles.detailsText} >{selectedMeal.duration} Minutes</Text>
                <Text style= {styles.detailsText} >{selectedMeal.complexity.toUpperCase()}</Text>
                <Text style= {styles.detailsText} >{selectedMeal.affordability.toUpperCase()}</Text>
            </View>
            <View style= {styles.outerListContainer}>
                <View  style= {styles.listContainer} >
                    <Subtitle> Ingredients </Subtitle>
                    <List data= {selectedMeal.ingredients }> </List>
                    <Subtitle> Steps </Subtitle>
                    <List data= {selectedMeal.steps} > </List>
                </View>
            </View>
            
        </ScrollView>
    )
}
export default MealDescriptionScreen;

const styles= StyleSheet.create({
    mainContainer:{
        marginBottom: 31,
    },
    container:{
        margin: 21,
    },
    
    listContainer:{
        width: '80%',
    },
    outerListContainer:{
        alignItems: 'center',
    },
    title:{
        fontWeight: 'bold',
        fontSize: 25,
        margin: 7,
        textAlign: 'center',
        color: 'white',
    },
    imgContainer:{
        width: '100%',
        height: 351,
    },
    detailsContainer: {
        padding: 11,
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 3,
    },
    detailsText:{
        padding: 7,
        fontSize: 15,
        color: '#702963',
        fontWeight: 'bold',
    },

})