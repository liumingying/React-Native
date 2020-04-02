import React, { Component } from 'react'
import {View, Text, TextInput, TouchableOpacity, AsyncStorage, Alert,StyleSheet} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import  { myFetch } from '../utils'

export default class Reg extends Component {
    constructor(){
        super();
        this.state = {
          username :'',
          pwd:'',
          pwd2:'',
          isloading:false,
          user:[]
        }
      }
  
    userhandle =(text)=>{
      this.setState({username:text})
      console.log(text)
    }
    pwdhandle =(text)=>{
        this.setState({pwd:text})
    }
    pwdhandle2 =(text)=>{
        this.setState({pwd2:text})
    }

    login =() =>{
        if(this.state.username != '' && this.state.pwd != '' && this.state.pwd != ''){
            if(this.state.pwd != this.state.pwd2){
                Alert.alert('密码输入不一致');
            }else{
                // this.setState({isloading:true})
                myFetch.post('/reg',{
                    username:this.state.username,
                        pwd:this.state.pwd
                }).then(res=>{
                    if(res.data.token =='1'){
                        Alert.alert('此账户已存在！');
                    }else if(res.data.token =='2'){
                        Alert.alert('连接错误!');
                    }else{
                        AsyncStorage.getItem('user').then((reg)=>{
                            if(reg==null){
                                console.log("reg==null");
                                AsyncStorage.setItem('user',JSON.stringify([res.data]))
                                    .then(()=>{
                                        console.log([res.data]);
                                        Alert.alert('注册成功');
                                        Actions.login();
                                    })
                            }else{
                                let firstReg =JSON.parse(reg);
                                firstReg.push(res.data);
                                console.log(firstReg);
                                AsyncStorage.setItem('user',JSON.stringify(firstReg))
                                    .then(()=>{
                                        Alert.alert('注册成功');
                                        Actions.login();
                                    })
                            }
                        })
                       
                    }
                })
            }
        }else{
            Alert.alert('存在输入项为空！');
        }
    }

    render() {
        return (
            <View style={{flex: 1,justifyContent: 'center'}} >
               <View
                    style={{ alignItems: 'center'}}>
                        
                    <View
                        style={styles.regBox}>
                        <Icon name="user" color="red"/>
                        <TextInput placeholder="用户名" onChangeText={this.userhandle} />
                    </View>
                    <View
                        style={styles.regBox}>
                        <Icon name="eye" color="red"/>
                        <TextInput 
                            placeholder="密码" 
                            onChangeText={this.pwdhandle}
                            secureTextEntry={true}
                        />
                        
                    </View>
                    <View
                        style={styles.regBox}>
                        <Icon name="eye" color="red"/>
                        <TextInput 
                            placeholder="确认密码" 
                            onChangeText={this.pwdhandle2}
                            secureTextEntry={true}
                        />
                    </View>
                        <TouchableOpacity 
                            style={styles.login}
                            onPress={this.login}>
                            <Text style={{color:'#FFFFFF'}}>注册</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.login}
                            onPress={()=>Actions.login()}>
                            <Text style={{color:'#FFFFFF'}}>返回登录</Text>
                        </TouchableOpacity>
                        
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    login :{
      width: '60%',
      height: 40,
      backgroundColor: '#f23030',
      borderRadius:15,
      color :'#fff',
      color:'white',
      marginTop: 25,
      alignItems: 'center',
      justifyContent: 'center'
    },
    regBox:{
        width: '80%',
        marginRight: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius:10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        marginBottom:5
    }
})