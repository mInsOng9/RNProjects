// ## RN에는 갤러리앱이나 카메라 앱을 실행하는 기능이 없음. ###
//   -- 대신 외부라이브러리를 이용하여 기능들을 구현함. 이런 방식을 meta는 권장함

// react-native-image-picker 라이브러리 추가하기
// install 하는 법: npm install react-native-image-picker 

//##########################################################
import React, {Component} from 'react' 
import {View,Text,Image,StyleSheet,Button} from 'react-native'

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default class Main extends Component{
    state={
        img:{uri:"https://cdn.pixabay.com/photo/2016/02/27/06/43/cherry-blossom-tree-1225186__340.jpg"},

    }
    render(){
        return(
            <View style={{flex:1,padding:16}}>
                
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Button onPress={this.showCamera} title='show camera'></Button>
                    <Button onPress={this.showPhoto} title='show photo' color='skyblue'></Button>
                </View>

                {/* 선택한 이미지의 경로정보 */}
                <Text style={{color:'black',padding:8}}>{this.state.img.uri}</Text>
                <Image source={this.state.img} style={{marginTop:8, flex:1}}></Image>
            </View>
        )
    }

    //카메라앱을 실행하는 작업 코드 
    showCamera=()=>{
        //image picker library를 이용하여 카메라앱 실행

        //옵션객체 
        const options={
            mediaType:'photo',   // 카메라앱의 활용모드 [사진, 동영상]
            cameraType:'back',   // 전면/후면 카메라 선택 ['back','front']
            saveToPhotos:true,   // 캡처한 사진을 디바이스에 저장할지 여부 
            quality: 1.0,        // 사진 화질 0.0~1.0
            videoQuality: 'high', // 동영상 화질 
        }

        launchCamera(options,(response)=>{
            if(response.didCancel) alert('촬영을 취소했습니다.')
            else if(response.errorMessage) alert('촬영 중 오류 발생')
            else{
                // 이 곳에 왔다면 촬영 성공  
                // 응답객체의 정보 assets : 다중 선택되었을 경우를 위해 배열로 옴 
                //alert(response.assets[0].uri+"")

                // 사진경로를 state 변수값에 설정 
                const source={uri: response.assets[0].uri}
                this.setState({img:source})
            }
        })
    }

    //사진앱 실행하는 작업 코드 
    showPhoto=async()=>{
        //image picker library를 이용하여 사진앱 실행
        
        //옵션객체
        const options={
            mediaType:'photo', 
            selectionLimit:5, //최대선택가능 수 [default: 1]
        }

        const response= await launchImageLibrary(options)
        if(response.didCancel) alert('선택 취소')
        else if(response.errorMessage) alert('오류'+response.errorMessage)
        else{
            const source={uri:response.assets[0].uri}
            this.setState({img:source})
        }
    }
}