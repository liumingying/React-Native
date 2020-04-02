import React, { Component } from 'react'
import {View,Text,ScrollView,TextInput,TouchableOpacity,Image,StyleSheet,Dimensions, Button,} from 'react-native'
import {Icon} from '@ant-design/react-native';

const { width, height } = Dimensions.get('window');
export default class Home extends Component {
    render() {
        return (
            <ScrollView>
            <View >
                {/* 搜索框 */}
                <View style={{
                    height:60,
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:"center",
                    backgroundColor:'#f23030',
            }}>
                <View style={{width:'80%',height:37,marginRight:10, paddingBottom:-10,flexDirection:'row',alignItems:'center', backgroundColor:'#fbb8b8',borderRadius:20,paddingLeft:20,marginTop:20,marginBottom:10}}>
                    <TouchableOpacity>
                        <Icon name="search" style={{color:'white'}}/>
                    </TouchableOpacity>                
                    <TextInput placeholder="请输入您要搜索的关键字" placeholderTextColor="white"/>
                </View>

                <TouchableOpacity >
                    <Image source={require('../../assets/hw2/hw2_7.jpg')} style={{marginTop:20,marginBottom:10}}/>
                </TouchableOpacity>
                </View>

                {/* 轮播图 */}
                <ScrollView 
                ref="scrollView"
                horizontal={true}
                style={styles.sv}>
                    <Image source={require('../../assets/hw2/hw2_08.jpg')} style={styles.img   }/>
                    <Image source={require('../../assets/hw2/hw2_08.jpg')} style={styles.img   }/>
                    <Image source={require('../../assets/hw2/hw2_08.jpg')} style={styles.img   }/>
                </ScrollView>
                {/* 列表 */}
                <View  style={{backgroundColor:'#f5f5f5',marginTop:-18}}>
                     <View style={styles.list}>
                        <Image source={require('../../assets/hw2/hw2_11.jpg')} style={styles.imgs   }/>
                        <Text style={styles.txt}>居家维修保养</Text>
                     </View>
                     <View style={styles.list}>
                        <Image source={require('../../assets/hw2/hw2_12.jpg')} style={styles.imgs   }/>
                        <Text style={styles.txt}>住宿优惠</Text>
                     </View>
                     <View style={styles.list}>
                        <Image source={require('../../assets/hw2/hw2_13.jpg')} style={styles.imgs   }/>
                        <Text style={styles.txt}>出行接送</Text>
                     </View>
                     <View style={styles.list}>
                        <Image source={require('../../assets/hw2/hw2_14.jpg')} style={styles.imgs   }/>
                        <Text style={styles.txt}>E族活动</Text>
                     </View>
                </View>
                {/* 按钮 */}
                {/* <View>
                <View  style={styles.btn}>
                    <Button title="发布需求" color='red' />
                </View> */}
                <TouchableOpacity>
                    <View style={styles.btn}>
                        <Text style={{color:'white',fontSize:22,}}>发布需求</Text>
                    </View>
                </TouchableOpacity>
                {/* </View> */}
                

            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
   img:{
    width:width,
    resizeMode:'contain'
   },
   sv:{
    height:270,
    marginTop:-35
   },
   list:{
     backgroundColor:'white',
     height:80,
     marginTop:8,
     flexDirection:'row',
     alignItems:'center',
   },
   imgs:{
     marginLeft:15,
     height:80,
     width:80
   },
   txt:{
       fontSize:22,
       marginLeft:24,
       color:'#333333'
   },
   btn:{
        justifyContent:'center',
        alignItems:'center',
        width:width*0.8,
        height:39,
        borderRadius:10,
        backgroundColor:'#f23030',
        fontSize:22,
        marginLeft:50,
        marginTop:40,
        marginBottom:110
   }

});