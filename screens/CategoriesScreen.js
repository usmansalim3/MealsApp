import {CATEGORIES} from '../data/dummy-data';
import { FlatList, Pressable,View,Text,StyleSheet } from 'react-native';


export default function CategoriesScreen({navigation}){
    function categoryItem(itemData){
        function helper(){
            navigation.navigate('MealOverView',{
               categoryID: itemData.item.id
            }); 
        }
        const color=itemData.item.color;
        return(
            <View style={[styles.GridItem,{backgroundColor:color}]}>
                <Pressable style={styles.button} android_ripple={{color:"#ccc"}} onPress={helper}>
                    <View style={styles.innerContainer}>
                        <Text style={styles.font}>{itemData.item.title}</Text>
                    </View>
                </Pressable>
            </View>
        );
    }
    return(
        <FlatList
        data={CATEGORIES}
        renderItem={categoryItem}
        keyExtractor={(item)=>item.id}
        numColumns={2}
        />
    );
}
const styles=StyleSheet.create({
    GridItem:{
        backgroundColor:"white",
        flex:1,
        margin:16,
        height:150,
        elevation:5,
        borderRadius:5,  
    },
    button:{
        flex:1,
    },
    font:{
        fontWeight:'bold',
        fontSize:15,
    },
    innerContainer:{
        padding:30,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});