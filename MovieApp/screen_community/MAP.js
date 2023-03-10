import { createStackNavigator } from '@react-navigation/stack';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

//탭으로 전환되는 화면이지만 ActionBar(헤더바)를 가지려면 Stack Navigator여야 함 - (물론 헤더바모양으로 컴포넌트로 만들 수도 있지만.. 여기서는 Navigator로 해보기)
//단, StackNavigator로 하되 실제 Stack Navigator로 전환될 스크린은 없으므로 1개짜리 스크린 Stack Navigator 제작
const Stack= createStackNavigator();

//제목줄을 가지위해 Screen을 1개만 가지는 Stack Navigator를 리턴하는 함수형 컴포넌트
// React 에 이미 Map 이라는 이름의 interface 가 존재하기에 가급적 이름을 다르게 하되, 
// 같게 하고자 한다면  export default 를 별도로 하고  const Map=()=>{} 으로 해야 함. [전역으로 함수를 만들면 import  우선순위가 밀리는 듯 함]
export default MAP= ()=>{
    return (        
        <Stack.Navigator>
            <Stack.Screen name="MAP" component={ Screen }></Stack.Screen>
        </Stack.Navigator>
    );
}

//실제 화면 컴포넌트
class Screen extends Component{
    render(){
        return (
            <View style={styles.root}>
                <Text>MAP</Text>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    root:{flex:1, justifyContent:'center', alignItems:'center'},
});