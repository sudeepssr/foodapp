import MealItem from "../components/MealItem";
import {MEALS, CATEGORIES} from "../data/dummy-data";
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { useLayoutEffect } from "react";


function mealRenderHandler(itemData){
    
    return(
        <MealItem title= {itemData.item.title} 
                    id= {itemData.item.id}
                    imageUrl= {itemData.item.imageUrl} 
                    duration= {itemData.item.duration}
                    complexity= {itemData.item.complexity}
                    affordability= {itemData.item.affordability}
                    ></MealItem>
    )
}

function MealsScreen({route, navigation}){          //route is provided to all screen registered components by react native just like the navigation prop

    const catId= route.params.categoryId;

    const mealsToBeDisplayed= MEALS.filter((mealItem)=> { return mealItem.categoryIds.indexOf(catId)>= 0; }
                                        );
    
    
    // const catTitle= CATEGORIES.find( (cat)=> cat.id === catId).title;                                    
    // navigation.setOptions({
    //     title: catTitle,
    // });              // we should not directly set it like this in the component,  instead use useEffect().

    useLayoutEffect(()=>{
        const catTitle= CATEGORIES.find( (cat)=> cat.id === catId).title;  
        navigation.setOptions({
            title: catTitle,
        });
    },[catId, navigation]);
                                        
    return(
        <View style= {styles.container}>
            <FlatList data= {mealsToBeDisplayed}
                      renderItem= {mealRenderHandler}
                      keyExtractor= {item => item.id}
            />
        </View>
    );
}
export default MealsScreen;

const styles= StyleSheet.create({
    container:{
        flex: 1,
        padding: 11,
    }
})

