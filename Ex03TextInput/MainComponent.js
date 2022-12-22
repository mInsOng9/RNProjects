import React,{Component} from 'react' 
import {View, Text, Button, TextInput,StyleSheet,Alert} from 'react-native'

//다른 JS에선 사용할 것이므로 class를 선언하면서 export까지.. 
export default class MainComponent extends Component{

    //화면에 영향을 주는 아주 특별한 변수 
    state={
        text:"Hello", 
        text2:"Result",
        msg:"aaa"
    }

    //화면변경에 영향이 없는 일반 멤버변수 
    //TextInput의 글씨가 변경될때 마다 그 글씨를 저장하는 변수 
    data=""
    render(){
        return(
            <View style={style.root}>
                {/* 사용자 글씨 입력 컴포넌트 */}
                {/* 스타일이 없으면 존재가 안보임. */}
                {/* 기본적으로는 한줄입력 */}
                <TextInput style={style.input}></TextInput>
                
                {/* 글씨를 변경될때 마다 입력된 글씨가 아래쪽에 Text컴포넌트에 보이도록 */}
                <TextInput onChangeText={this.changeText} style={style.input}></TextInput>
                <Text style={style.txt}>{this.state.text}</Text>

                {/* 글씨를 입력하고 키보드의 완료버튼을 눌렀을때 써있는 글씨를 Text에 보여주기 */}
                <TextInput onSubmitEditing={this.submitEdit}style={style.input}></TextInput>
                <Text style={style.txt}>{this.state.text2}</Text>

                {/* 글씨를 입력하고 아래 위치한 버튼을 클릭했을때 글씨를 보여주기 */}
                {/* 여러줄 입력 속성 : multilline={true} */}
                <TextInput multiline={true} numberOfLines={4} onChangeText={this.changeText2} style={style.input}></TextInput>
                <Button title='로그인' onPress={this.clickBtn}></Button>
                <Text style={style.txt}>{this.state.msg}</Text>
            </View>
        )
    }//rendeer method

    //TextInput을 글씨가 변경될때 마다 그 글씨를 일반변수에 저장 
    changeText2=(value)=> this.data=value //화살표 함수 - 한줄일때 중괄호 생략가능 
    

    //버튼 클릭시 일반멤버변수에 저장된 글씨를 Text 컴포넌트의 state값으로 설정 
    clickBtn=()=>{
        this.setState({msg:this.data})
    }

    //TextInput컴포넌트의 입력을 완료하고 키보드의 완료버튼을 클릭했을때 반응하도록 등록한 콜백용 메소드 
    submitEdit=(obj)=>{ //완료버튼 클릭시 써있는 글씨를 가진 이벤트 객체가 파라미터로 옴. [SubmitEvent 객체라고 부름]
        this.setState({text2:obj.nativeEvent.text})
    }

    //TextInput컴포넌트의 글씨가 변경될때 마다 발동하도록 등록한 콜백용 메소드 
    changeText=(value)=>{ //변경될 글씨가 이 콜백용 메소드의 파라미터로 전달되어 옴. 
        this.setState({text:value})
    }
}//MainComponent class

//스타일 객체 
const style=StyleSheet.create({
    root:{
        flex:1, 
        padding:16,
    },
    input:{
        borderWidth:2,
        backgroundColor:'white',
        borderColor:'skyblue',
        borderRadius:8, 
        paddingLeft:16, 
        paddingRight:16,
        marginTop:16,
    },
    txt:{
        marginTop:8, 
        fontWeight:'bold', 
        padding:8, 
        color:'black',
    }
})