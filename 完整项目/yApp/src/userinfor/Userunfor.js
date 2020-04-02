import React, { Component } from 'react'
import {View,Text,ScrollView,Image,StyleSheet,Dimensions,AsyncStorage,TouchableOpacity} from 'react-native'
import {Icon} from '@ant-design/react-native';
import ImagePicker from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';
import App from '../../App';

const { width, height } = Dimensions.get('window');
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};
export default class Userunfor extends Component {
    constructor(){
        super();
        this.state = {
            imageUrl:require('../../assets/hw3/hw3_01.jpg'),
            tits: []
        }
    }
    back =()=>{
        AsyncStorage.setItem('isloading','false')
        Actions.login();
    }
    takephoto = ()=>{
         ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              return;
            } else if (response.error) {
              console.log('Error:', response.error);
            } else if (response.customButton) {
              console.log('custom:', response.customButton);
            } else {
              const source = { uri: response.uri };
              this.setState({
                imageUrl: source,
              });
              this.storeData(this.state.imageUrl)
            }
          });
    };
    //存储照片
    storeData = (value)=>{
         AsyncStorage.setItem('userImg',JSON.stringify(value),
            function(error){
                if(error){
                    console.log('照片存储失败')
                }else{
                    console.log('照片存储完成')
                }
            }
        )
    }
    //获取照片
    componentDidMount(){
        AsyncStorage.getItem('userImg',(err,result)=>{
            if(JSON.parse(result)){
                this.setState({
                    imageUrl: JSON.parse(result)
                })
            }
        })
    }

    componentDidUpdate(){
        AsyncStorage.getItem('userImg',(err,result)=>{
            if(JSON.parse(result) == ''){
                this.setState({
                    imageUrl:''
                })
            }else{
                this.setState({
                    imageUrl: JSON.parse(result)
                })
            }
        })
    }

    render() {
        return (
            <ScrollView>
                <View >
                    <View style={{backgroundColor:'#f23030',height:300,alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity onPress={()=>{this.takephoto()}}>
                            <Image style={{width:120,height:120,borderRadius:60}} source={this.state.imageUrl} /> 
                        </TouchableOpacity>
                        <Text style={{fontSize:24,color:'white'}}>BINNU DHILLON</Text>                   
                    </View>
                    <View style={{backgroundColor:'#f4f4f4'}}>
                        <View style={{backgroundColor:'white'}}>
                            <View style={styles.view1}>
                                <Image source={require('../../assets/hw3/hw3_07.jpg')} style={{width:40,height:40,marginBottom:-23}}/>
                                <Text style={styles.txt}>我的个人中心</Text>
                            </View>
                            <View style={styles.v1}>
                                <View style={{flexDirection:'row'}}>
                                    <View style={styles.v11}>
                                        <Image source={require('../../assets/hw3/hw3_11.jpg')} />
                                        <Text style={styles.txt}>账户管理</Text>
                                    </View>
                                    <View style={styles.v11}>
                                        <Image source={require('../../assets/hw3/hw3_13.jpg')}/>
                                        <Text style={styles.txt}>收货地址</Text>
                                    </View>
                                    <Button onPress={this.getData}>
                                        <View style={styles.v11}>
                                            <Image source={require('../../assets/hw3/hw3_16.jpg')}/>
                                            <Text style={styles.txt}>我的信息</Text>
                                        </View>
                                    </Button>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <Button>
                                        <View style={styles.v11}>
                                            <Image source={require('../../assets/hw3/hw3_22.jpg')}/>
                                            <Text style={styles.txt}>我的订单</Text>
                                        </View>
                                    </Button>
                                    <View style={styles.v11}>
                                        <Image source={require('../../assets/hw3/hw3_23.jpg')}/>
                                        <Text style={styles.txt}>我的二维码</Text>
                                    </View>
                                    <View style={styles.v11}>
                                        <Image source={require('../../assets/hw3/hw3_21.jpg')}/>
                                        <Text style={styles.txt}>我的积分</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <View style={styles.v11}>
                                        <Image source={require('../../assets/hw3/hw3_00.jpg')}/>
                                        <Text style={styles.txt}>我的收藏</Text>
                                    </View>
                                </View>
                                
                            </View>
                        </View>
                        <View style={{backgroundColor:'white',marginTop:10,marginBottom:80}}>
                            <View style={styles.view1}>
                                <Image source={require('../../assets/hw3/hw3_28.jpg')} style={{width:37,height:37,marginBottom:-18}}/>
                                <Text style={styles.txt}>E族活动</Text>
                            </View>
                            <View style={styles.v2}>
                            <View style={{flexDirection:'row'}}>
                                    <View style={styles.v11}>
                                        <Image source={require('../../assets/hw3/hw3_32.jpg')}/>
                                        <Text style={styles.txt}>居家维修保养</Text>
                                    </View>
                                    <View style={styles.v11}>
                                        <Image source={require('../../assets/hw3/hw3_34.jpg')}/>
                                        <Text style={styles.txt}>出行接送</Text>
                                    </View>
                                    <View style={styles.v11}>
                                        <Image source={require('../../assets/hw3/hw3_35.jpg')}/>
                                        <Text style={styles.txt}>我的受赠人</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <View style={styles.v11}>
                                        <Image source={require('../../assets/hw3/hw3_40.jpg')}/>
                                        <Text style={styles.txt}>我的住宿优惠</Text>
                                    </View>
                                    <View style={styles.v11}>
                                        <Image source={require('../../assets/hw3/hw3_39.jpg')}/>
                                        <Text style={styles.txt}>我的活动</Text>
                                    </View>
                                    <Button onPress={()=>Actions.publish()}>
                                        <View style={styles.v11}>
                                            <Image source={require('../../assets/hw3/hw3_41.jpg')}/>
                                            <Text style={styles.txt}>我的发布</Text>
                                        </View>
                                    </Button>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity 
                            style={styles.login}
                            onPress={this.back}>
                            <Text style={{color:'#FFFFFF',fontSize:19}}>退出登录</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    view1:{
        flexDirection:'row',
        alignItems:'center',  
        height:60,
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1/3,
    },
   
    v1:{
        height:360,
    },
    v2:{
        height:200,
        marginBottom:30
    },
    txt:{
        color:'#4f4e4e',
        fontSize:20,
        marginTop:15
    },
    v11:{
        width:width*0.33,
        height:120,
        alignItems:'center',
        justifyContent:'center',
    },
    login :{
        width: '60%',
        height: 48,
        backgroundColor: '#f23030',
        borderRadius:15,
        color :'#fff',
        color:'white',
        marginTop: -10,
        marginBottom:50,
        marginLeft:90,
        alignItems: 'center',
        justifyContent: 'center',
      },
      


});