import { View,Text,StyleSheet, FlatList } from "react-native";
import {MEALS} from "../data/dummy-data";
import Mealitem from "./Mealitem";
function MealOverView({route}){
    const catID=route.params.categoryID;
    const displayedMeals=MEALS.filter((mealItem)=>{
        return(mealItem.categoryIds.indexOf(catID)>=0);
    });
    function renderItem(itemData){
        return(
            <Mealitem title={itemData.item.title} imageUrl={itemData.item.imageUrl} affordability={itemData.item.affordability} complexity={itemData.item.complexity} duration={itemData.item.duration} />
        );
    }
    return(
        <View style={styles.container}>
            <FlatList
            data={displayedMeals}
            keyExtractor={(item)=>item.id}
            renderItem={renderItem}
            />
        </View>
    );
}
export default MealOverView;
const styles=StyleSheet.create({
    container:{
        flex:1
    }
});