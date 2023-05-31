import { View, Text,  StyleSheet} from 'react-native';

function List( {data} ){
    return(
        data.map( (dataPoint)=> (
            <View style= {styles.listItem} key={dataPoint}> 
                <Text style= {styles.itemText} > {dataPoint} </Text> 
            </View>
            ) ) 
        )

}
export default List;

const styles= StyleSheet.create({
    listItem: {
        borderRadius: 7,
        paddingVertical: 4,
        paddingHorizontal: 3,
        marginVertical: 3,
        marginHorizontal: 11,
        backgroundColor: '#770737',
    },
    itemText:{
        color: 'white',
        textAlign: 'center',
    }
}
)