import { Pressable, StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons';

function IconButton( {onTap} ){
    return(
        <Pressable onPress= {onTap} style= {StyleSheet.pressed}>
            <Ionicons name= "star" size= {21} color= 'grey' />
        </Pressable>
    )
}
export default IconButton;

const styles= StyleSheet.create({
    pressed:{
        opacity: 0.7,
    }
})