import CategoryGridTile from "../components/CategoryGridTile";
import {CATEGORIES} from "../data/dummy-data";
import {View, FlatList, Text} from 'react-native';


function CategoriesScreen( {navigation} ) {               //navigation obj is provided to all screen components by react-native
    
    function categoriesRenderHandler(itemData ){      //itemData comes here as an object

        function pressHandler(){
            navigation.navigate("MealsMenu", {categoryId: itemData.item.id} );           //navigate is a method provided by react-native    
        }
    
        return(
            <CategoryGridTile title= {itemData.item.title} color= {itemData.item.color} onPress={pressHandler}
            >
            </CategoryGridTile>
        )
    }
    
    
    return(
        <FlatList  data= {CATEGORIES} 
                renderItem= {categoriesRenderHandler}
                keyExtractor= {item => item.id} 
                numColumns= {2}
        />
    );

}
export default CategoriesScreen;