import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsScreen from './screens/MealsScreen';
import MealDescriptionScreen from './screens/MealDescriptionScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import FavouritesScreen from './screens/FavouritesScreen';
// import FavouritesContextProvider from './store/context/FavouritesContextProvider';

const Stack= createNativeStackNavigator();

const Drawer= createDrawerNavigator();

function DrawerNavigator(){
  return(
    <Drawer.Navigator screenOptions={{
            headerStyle: {backgroundColor: 'black'},
            headerTintColor: '#00FF00',
            sceneContainerStyle: {backgroundColor: 'grey'},
          }}>
                <Drawer.Screen name= "CategoriesMenu" component= {CategoriesScreen}></Drawer.Screen>
                {/* <Drawer.Screen name= "FavouritesScreen" component= {FavouritesScreen}></Drawer.Screen> */}
    </Drawer.Navigator>
  );
}


export default function App() {
  return (
    <>
      <StatusBar style= 'light'/>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                                            headerStyle: {backgroundColor: 'black'},
                                            headerTintColor: '#00FF00',
                                            contentStyle: {backgroundColor: 'grey'},
                                          }}
            >
                <Stack.Screen name= "Drawer" component={DrawerNavigator}
                              // options= { {title: "Categories Available",
                              //             headerStyle: {backgroundColor: 'black'},
                              //             headerTintColor: '#00FF00',
                              //             contentStyle: {backgroundColor: 'grey'}
                              //           }}
                              options={{
                                        headerShown: false,
                              }}
                              
                />

                <Stack.Screen name= "MealsMenu" component={MealsScreen} />



                <Stack.Screen name= "MealDescriptionScreen" component= {MealDescriptionScreen}/>


            </Stack.Navigator>

        </NavigationContainer>
        
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
