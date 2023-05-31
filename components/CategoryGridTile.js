import { useState } from 'react';
import {View, Pressable, Text, StyleSheet, Platform} from 'react-native';

function CategoryGridTile( {title, color, onPress} ) {
    
    return(
        <View style= {styles.gridItem} >
            <Pressable android_ripple={ {color: '#ccc'} } 
                style= { ( {pressed} )=> [styles.pressableButtons, pressed ? styles.buttonsPressed : null ] }
                onPress= {onPress}   
            >
                <View style= {[styles.innerContainer, {backgroundColor: color} ]}>
                    <Text style= {styles.title} >{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}
export default CategoryGridTile;

const styles= StyleSheet.create({
    gridItem:{
        flex: 1,
        margin: 17,
        height: 151,
        borderRadius: 8,
        elevation: 3,
        overflow: Platform.OS=== 'android' ? 'hidden' : 'visible',
    },
    pressableButtons:{
        flex: 1,
    },
    buttonsPressed:{
        opacity: 0.5,
    },
    innerContainer:{
        flex: 1,
        padding: 17,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 17,
        
    }
})