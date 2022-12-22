import  React from 'react' 
import { StyleSheet,TouchableOpacity, Text,Image,View } from 'react-native'

export default ItemView=(props)=>{
    return(
        <TouchableOpacity style={style.item} onPress={()=>{alert(props.item.name)}}>
            <Image style={style.itemImg} source={props.item.img}></Image>
            <View>
                <Text style={style.itemName}>{props.item.name}</Text>
                <Text style={style.itemMessage}>{props.item.message}</Text>
            </View>
        </TouchableOpacity>
    )
}

const style=StyleSheet.create({
    item:{
        flexDirection:'row', 
        borderWidth:1, 
        borderRadius:4, 
        padding:8, 
        marginBottom:10
    },
    itemImg:{
        width:120, 
        height:100, 
        resizeMode:'cover',
        marginRight:8,
    },
    itemName:{
        fontSize:24, 
        color:'black', 
        fontWeight:'bold'
    },
    itemMessage:{
        fontSize:16, 
        fontStyle:'italic', 
    }
})