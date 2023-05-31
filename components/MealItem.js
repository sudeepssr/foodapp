import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function MealItem( {id, title, imageUrl, duration, complexity, affordability} ) {
    
    const navigation= useNavigation();

    function mealPressHandler(){
        navigation.navigate("MealDescriptionScreen", {mealId: id});
    }

    return(
        <View style= {styles.mainContainer} >
            <Pressable android_ripple= { {color: 'grey' } }  
                       style= {( {pressed} )=> ( pressed ? styles.buttonPressed : null )  }
                       onPress={mealPressHandler}
                        >
                <View style= {styles.innerContainer}>
                    <View>
                        <Image source= { {uri: imageUrl } }  style= {styles.imageContainer}  />
                        <Text style= {styles.textContainer} >{title}</Text>
                    </View>
                    <View style= {styles.detailsContainer} >
                        <Text style= {styles.detailsText} >{duration} Minutes</Text>
                        <Text style= {styles.detailsText} >{complexity.toUpperCase()}</Text>
                        <Text style= {styles.detailsText} >{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
    
}
export default MealItem;

const styles= StyleSheet.create({
    mainContainer:{
        margin: 17,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 3,
        opacity: 0.9,
    },
    innerContainer:{
        borderRadius: 8,
        
    },
    imageContainer:{
        width: '100%',
        height: 200,
    },
    textContainer:{
        fontWeight: 'bold',
        fontSize: 27,
        textAlign: 'center',
        margin: 7,
        
    },
    detailsContainer: {
        padding: 11,
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 3,
    },
    detailsText:{
        padding: 7,
        fontSize: 14,
        
    },
    buttonPressed:{
        opacity: 0.9,
    }
})