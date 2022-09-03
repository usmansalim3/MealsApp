import { View,Text, Pressable ,Image, StyleSheet} from "react-native";

function Mealitem({title,imageUrl,duration,complexity,affordability}){
    return(
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color:"#ccc"}}>
                <View>
                    <Image source={{uri:imageUrl}} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailsItem}>{duration}m</Text>
                    <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
                    <Text style={styles.detailsItem}>{affordability.toUpperCase()}</Text>
                </View>
            </Pressable>
        </View>
    );
}
export default Mealitem;
const styles=StyleSheet.create({
    image:{
        width:'100%',
        height:200
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        margin:8,
    },
    mealItem:{
        margin:16,
        borderRadius:8,
        backgroundColor:'white',
        overflow:"hidden",
        elevation:4
    },
    details:{
        flexDirection:'row',
        alignItems:'center',
        padding:8,
        justifyContent:'center'
    },
    detailsItem:{
        fontSize:12,
        marginHorizontal:4,
    }
})