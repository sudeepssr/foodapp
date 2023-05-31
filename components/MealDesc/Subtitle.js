import { View, Text, StyleSheet} from 'react-native';

function Subtitle( {children} ){
    return(
        <Text style= {styles.subTitle}> {children} </Text>
        
    )
}
export default Subtitle;

const styles= StyleSheet.create({
    subTitle:{
        fontWeight: 'bold',
        fontSize: 17,
        padding: 6,
        margin: 4,
        color: 'black',
        textAlign: 'center',
        marginHorizontal: 9,
        marginVertical: 3,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },
})