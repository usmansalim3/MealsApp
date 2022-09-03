import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealOverView from './screens/MealOverView';

const Stack=createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.bg}>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerTintColor:'white',
          headerStyle:{backgroundColor:'#29434e'},
          contentStyle:{backgroundColor:'#102027'}}}>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} options={{title:'Meals Categories'}}/>
          <Stack.Screen name="MealOverView" component={MealOverView} options={{title:'Meals'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    
  );
}
const styles=StyleSheet.create({
  bg:{
    paddingVertical:5,
    flex:1,
    backgroundColor:'#102027'
  }
});
