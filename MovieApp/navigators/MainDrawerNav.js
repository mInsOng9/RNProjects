import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

// #####  reanimated1 --> reaniamted2 로 변경되면서 Babel config 에러 발생.. ###############
// babel.config.js 에 플러그인 추가해도 해결 안됨.

// 우선은 낮은 버전으로 실행.. reanimated 설치.. 에러메세지 무시..  npm install react-native-reanimated@2.2.4

//Drawer Navigator에 의해 전환될 스크린(컴포넌트) or Navigator 들 import
import MovieStackNav from './MovieStackNav';
import CommunityTabNav from './CommunityTabNav';

//Drawer Navigator 객체 생성
const Drawer= createDrawerNavigator();

//단순 Navigator이기에 간단한 함수형 컴포넌트 제작
export default function MainDrawerNav(){
    return (

        // <Drawer.Navigator>
        //     <Drawer.Screen name="MovieStackNav" component={ MovieStackNav }></Drawer.Screen>            
        //     <Drawer.Screen name="CommunityTabNav" component={ CommunityTabNav }></Drawer.Screen>
        // </Drawer.Navigator>

        //Drawer Navigator의 기본 Header영역이 보이면 개별 화면 Stack 헤더와 중복으로 표시되어.. Drawer의 헤더는 제거
        <Drawer.Navigator screenOptions={{headerShown:false}}>
            <Drawer.Screen name="MovieStackNav" component={ MovieStackNav }></Drawer.Screen>            
            <Drawer.Screen name="CommunityTabNav" component={ CommunityTabNav }></Drawer.Screen>
        </Drawer.Navigator>
    );
}