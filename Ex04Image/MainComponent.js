import React,{Component} from 'react' 
import {View,Image,Button,Text,StyleSheet,Alert, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, ScrollView, ImageBackground} from 'react-native'

export default class MainComponent extends Component{

    // 화면에 영향을 미치는 값을 가진 아주 특별한 멤버변수
    state={
        img:require("./image/content4.jpg"), 
        imgArr: [
            require("./image/content1.jpg"),
            require("./image/content2.jpg"),
            require("./image/content3.jpg"),
            require("./image/content4.jpg"),
            require("./image/content5.jpg"),
            {uri:"https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445__340.jpg"}
        ], 
        imgNum:0, //현재 보여줄 이미지의 배열 인덱스번호
    }
    render(){
        return(
            <ImageBackground style={style.root} source={require("./image/content1.jpg")}>

                {/* 전체 배경이미지를 주고 싶다면... backgroundImage스타일이 존재하지 않음.*/}
                {/* 배경 이미지용 컴포넌트가 별도로 존재함.  */}

                {/* 그림이미지 source 값은 이미지객체이며 require()함수를 통해 객체 생성 가능함 */}
                {/* 스타일이 없으면 원본사이즈로 만듦 */}
                <Image 
                    style={{width:200, height:100}}
                    source={require("./image/content1.jpg")}>
                </Image>

                {/* 네트워크(인터넷)상에 있는 이미지를 보여주기 */}
                {/* 네트워크이미지는 반드시 {uri:} 이라는 리터럴객체로 만들어야 함 */}
                {/* 네트워크이미지 사이즈 지정이 없으면 보이지 않음 */}
                <Image 
                    style={{width:200,height:100}}
                    source={{uri:"https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445__340.jpg"}}>
                </Image>

                {/* 이미지 컴포넌트를 클릭했을때 반응하기 */}
                {/* 애석하게.. RN는 클릭되는 컴포넌트들이 별도로 정해져 있음. */}
                {/* 즉, 기본적인 컴포넌트들을 모두 클릭이 되지 않음. */}
                {/* 클릭이벤트에 반응하는 컴포넌트들 : Button, TouchableXXX 클래스들 */}
                {/* Button은 글씨만 보여주기에 그렇지 않은 경우는 모두 TouchableXXXX로 감싸야 함 */}
                <TouchableOpacity onPress={this.clickImage}>
                    <Image
                        style={{width:200,height:100}}
                        source={require("./image/content2.jpg")}></Image>
                </TouchableOpacity>

                {/* 다른 종류의 리액션을 가진 TouchableXXXX */}
                {/* TouchableXXX 클래스들은 계속 개발중이어서 특정 버전에서 동작이 안될 수도 있음. */}
                {/* TouchableHighligh 는 onPress 속성이 지정되어 있지 않으면 효과가 보이지 않음 */}
                <TouchableHighlight 
                    onPress={this.clickImage}
                    style={{padding:4, width:208}}>
                    <Image
                        style={{width:200,height:100}}
                        source={require("./image/content3.jpg")}></Image>
                </TouchableHighlight>

                {/* 이미지를 클릭했을때 다른 이미지로 변경 */}
                <TouchableNativeFeedback
                    onPress={this.changeImage}
                    style={{padding:4, width:208}}
                    background={TouchableNativeFeedback.SelectableBackground()}>

                    {/* 이미지를 변경하려면 source속성에 고정된 값이 있으면 안됨 */}
                    {/* 이미지뷰가 보여줄 이미지객체를 아주 특별한 변수가 가지고 있어야 함. */}
                    <Image
                        style={{width:200,height:100}}
                        source={this.state.imgArr[this.state.imgNum]}></Image>
                
                </TouchableNativeFeedback>

                {/* 이미지가 많아서 화면밖으로 나가면? 자동 스크롤 안됨 -> ScrollView 사용하기*/}
                <ScrollView>
                    <Image source={require("./image/content1.jpg")} style={{width:200, height:100}}></Image>
                    <Image source={require("./image/content2.jpg")} style={{width:200, height:100}}></Image>
                    <Image source={require("./image/content3.jpg")} style={{width:200, height:100}}></Image>
                    <Image source={require("./image/content4.jpg")} style={{width:200, height:100}}></Image>
                    <Image source={require("./image/content5.jpg")} style={{width:200, height:100}}></Image>
                </ScrollView>
            </ImageBackground>
        )
    }//render method 

    clickImage= ()=>{
        alert("clicked image")
    }
    
    changeImage= ()=>{
        //화면갱신이 자동으로 이루어지도록 만든 특별한 변수 state값을 변경하기 
        // this.setState({img:require("./image/content5.jpg")})
        let num=this.state.imgNum+1;
        if(num>5)num=0
        this.setState({imgNum:num})
    }
}

//style object 
const style= StyleSheet.create({
    root:{flex:1, padding:16}, 
})