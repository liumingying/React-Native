import React, { Component } from 'react'
import {StatusBar,Text,View, FlatList,Dimensions,ScrollView, StyleSheet,Image,TextInput,TouchableOpacity,} from 'react-native';
import {Icon} from '@ant-design/react-native';

const {width} = Dimensions.get('window');
export default class Goods extends Component {
    render() {
        return (
            
            // <StatusBar barStyle="dark-content" />
            <ScrollView style={{flex:1}} >
              <View style={{backgroundColor:'white'}}>
                <View style={{
                  justifyContent:"center" ,
                  alignItems:'center',
                  flexDirection:'row',
                }}>
                  <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    backgroundColor:'#eeeeee',
                    marginTop:20,
                    borderRadius:4
  
                  }}>
                    <TextInput placeholder="请输入商品名称"placeholderTextColor="#999999"  style={{
                      width:width*0.83,
                      height:40
                    }}/>
                    <TouchableOpacity>
                    <Icon name="search"  />
                    </TouchableOpacity>
                  </View>
                  
                  </View>
              <View style={{justifyContent:"center" ,
                  alignItems:'center',
                  flexDirection:'row',
                  marginTop:15,
                  marginBottom:15
  
                  }}>
                <View style={{flexDirection:'row',
                    alignItems:'center',
                    width:width*0.86
                }}>
                  <View style={{paddingRight:54}}><Text style={{color:'red',fontSize:17}}>综合</Text></View>
                  <View style={{paddingRight:54}}><Text style={{fontSize:17}}>销量</Text></View>
                  <View style={{paddingRight:54}}><Text style={{fontSize:17}}>新品</Text></View>
                  <View style={{paddingRight:54}}><Text style={{fontSize:17}}>价格</Text></View>
                  <View style={{paddingRight:54}}><Text style={{fontSize:17}}>信用</Text></View>
                </View>
              </View>
          </View>
              <View style={{
                  alignItems:'center',
                  justifyContent:'center',
                  backgroundColor:'#f4f4f4',
              }}>
                  <View style={{
                      width:width*0.9,
                      paddingTop:10,
                      backgroundColor:'#f4f4f4',
                  }}>
                      <View style={{flexDirection:'row'}}>
                          <Image source={require('../../assets/hw01/hw1_01.jpg')} style={styles.slide}/>
                          <Image source={require('../../assets/hw01/hw1_02.jpg')} style={styles.slide}/>
                      </View>
                      <View style={{flexDirection:'row'}}>
                          <Image source={require('../../assets/hw01/hw1_01.jpg')} style={styles.slide}/>
                          <Image source={require('../../assets/hw01/hw1_02.jpg')} style={styles.slide}/>
                      </View>
                      <View style={{flexDirection:'row'}}>
                          <Image source={require('../../assets/hw01/hw1_01.jpg')} style={styles.slide}/>
                          <Image source={require('../../assets/hw01/hw1_02.jpg')} style={styles.slide}/>
                      </View>
                  </View>
              </View>
            </ScrollView>
            
      
      )
    }
}

const styles = StyleSheet.create({
    slide:{
        marginTop:10,
        marginLeft:15,
        width:width*0.4,
        height:250
    }
})