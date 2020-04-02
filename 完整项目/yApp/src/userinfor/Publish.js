import React, { Component } from 'react'
import {View,Text,ScrollView,StyleSheet, ToastAndroid} from 'react-native'
import Button from 'react-native-button';
import { Icon } from '@ant-design/react-native';
import {Actions} from 'react-native-router-flux';

export default class Publish extends Component {
    constructor(){
        super();
        this.state = {
            tits: [],
            pages :1
        }
    }
    //控件渲染前触发
    

    //将从接口中获取的title进行截取，并转换
    subStringChar =(char)=>{
        if(char !== '' && char !== null){
            char = char.substring(1,16);
            char = char +'...';
            return char;

        }
    }
    //将接口中获取的时间截取年月日,并转换
    subStringTime =(time)=>{
        if(time!== ''&& time!==null){
            time = time.substring(1,10);
            time = time.replace(/-/,'年').replace(/-/,'月')+'日';
            return time;
        }
    }
    //点击上一页
    subPage = ()=>{
        var page = this.state.pages;
        page ++;
        this.setState({
            pages:page
        })
    }
    //点击下一页
    addPage = ()=>{
        var page = this.state.pages;
        if (page >1){
            page --;
            this.setState({
                pages:page
            })
        }else{
            ToastAndroid.show('没有内容了哦',ToastAndroid.TOP);
        }
    }
    
    componentDidUpdate(preProps,prevState){
        if(this.state.pages != prevState.pages){
            fetch('https://cnodejs.org/api/v1/topics?limit=15&page='+this.state.pages)
            .then(res=>res.json()
            )
            .then(res=>{
                this.setState({tits: res.data});
            })
        }
    }

    render() {  
        return (
            <ScrollView>
                <View style={{flexDirection:'row',backgroundColor:'#f23030',height:55,alignItems:'center'}}>
                    <Button onPress={()=>Actions.userPage()}>
                        <View style={{width:25,height:25}}>
                            <Icon name='left' style={{color:'white'}}/>
                        </View>
                    </Button>
                    <Text style={{color:'white',fontSize:20,justifyContent:'center',marginLeft:170}}>我的发布</Text>
                </View>
                <View style={{backgroundColor:'#f4f4f4',marginBottom:150}}>
                    <View style={{backgroundColor:'white'}}>
                        {/* <Button title="请求title" onPress={this.getTitle}/> */}
                        {
                            
                            this.state.tits.map((item)=>(
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontSize:16}}>{this.subStringChar(JSON.stringify(item.title))}</Text>
                                    <Text style={{fontSize:15,paddingLeft:50,textAlign:"left"}}>{this.subStringTime(JSON.stringify(item.create_at))}</Text>
                                    <Text style={{fontSize:15,paddingLeft:25,color:'red'}}>已回复</Text>
                                </View>
                            ))
                        }
                        <View style={{flexDirection:'row',paddingTop:50,marginBottom:40}}>
                            <Button style={styles.btns} onPress={()=>{this.addPage()}}>上一页</Button>
                            <Text style={{fontSize:14,paddingLeft:70}}>第{this.state.pages}页</Text>
                            <Button style={styles.btns2} onPress ={()=>this.subPage()}>下一页</Button>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
 
const styles = StyleSheet.create({
    btns:{
        backgroundColor:'#f23030',
        color:'white',
        fontSize:17,
        width:120,
        height:38,
        textAlign:'center',
        marginLeft:30,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center'
    },
    btns2:{
        backgroundColor:'#f23030',
        color:'white',
        fontSize:17,
        width:120,
        height:38,
        marginLeft:80,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center'

    }
})