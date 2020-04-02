import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text,Image,AsyncStorage,BackHandler,ToastAndroid} from 'react-native';
import {Router,Scene,Tabs,Drawer,Lightbox, Modal,Overlay,Actions}from 'react-native-router-flux';
import {Icon} from '@ant-design/react-native';
import Home from './src/home/Home';
import Goods from './src/goods/Goods';
import User from './src/userinfor/Userunfor';
import Login from './src/common/Login';
import Reg from './src/common/Reg';
import SwiperPage from './src/common/SwiperPage';
import Publish from './src/userinfor/Publish';
import SplashScreen from 'react-native-splash-screen'


console.disableYellowBox = true;

const App = () => {
    let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);
    
    let now1 = 0;
    
    let init =()=>{
        // AsyncStorage.clear();
        AsyncStorage.getItem('isInstall')
            .then(res=>{
                console.log('isinstall',res)
                if(res){
                    setInstall(false);
                }
            })
            AsyncStorage.getItem('isloading')
            .then(res=>{
                let user = JSON.parse(res)
                if(user){
                    //启动页图标消失
                    SplashScreen.hide();
                    setLogin(true);
                }else{
                    //启动页图标消失
                    SplashScreen.hide();
                }
            })
    }
    useEffect(()=>{
        SplashScreen.hide();
        init();
    },[])
    let afterInstall = ()=>{
        console.log('after install')
		setInstall(false)
	}
    if(isInstall){
        return <View style={{flex:1}}>
            <SwiperPage afterInstall = {afterInstall}/>
        </View>
    }
    
	//实现Tabs
	return (
		<Router
            backAndroidHandler={()=>{
            if(Actions.currentScene == 'home' || Actions.currentScene =='login' ){
                if(new Date().getTime()-now1<2000){
                    BackHandler.exitApp();
                }else{
                    ToastAndroid.show('确定要退出吗',100);
                    now1 = new Date().getTime();
                    return true;
                }
            }else{
                Actions.pop();
                return true;
            }
            
        }}
        >
            <Overlay>
                <Modal key="modal" hideNavBar>
				<Lightbox key="lightbox">
					<Drawer 
						key="drawer"
						contentComponent={()=><Text>drawer</Text>}
						drawerIcon={()=><Icon name="menu"/>}
						drawerWidth={400}
                        >
                    <Scene key="root">
                    <Tabs key="tabbar"
                        hideNavBar
                        activeTintColor="#f23030"
                        inactiveTintColor="#9f9f9f"
                        tabBarStyle={{backgroundColor:'white',height:60}}
                        >
                        { /*首页栏 */}
                        <Scene 
                        hideNavBar
                        key='homePage'
                        title ='首页'
                        icon={
                            ({focused})=>
                            <Icon
                                color={focused?'#f23030':'#9f9f9f'}
                                name="home"
                                />
                        }
                        >
                        <Scene key='home' component={Home} />
                    
                        </Scene>
                        {/* 商品分类栏 */}
                        {/* 每一个Scene中不能为空 */}
                        <Scene 
                            hideNavBar
                            key='goodsPage'
                            title='商品分类'
                            icon={
                                ({focused})=>
                                <Icon
                                    color={focused?'#f23030':'#9f9f9f'}
                                    name="file"
                                    />
                            }
                        >
                            <Scene key='goods' component={Goods}/>
                        </Scene>
                        
                        {/* 个人中心栏 */}
                        <Scene 
                            hideNavBar
                            key = 'userPage'
                            title='个人中心'
                            icon={
                                ({focused})=>
                                <Icon
                                    color={focused?'#f23030':'#9f9f9f'}
                                    name="user"
                                    />
                            }
                            
                        >
                            <Scene  key = 'userPage' component = {User} />
                             <Scene key='publish' hideTabBar  component = {Publish}/>
                        </Scene>
                    </Tabs>
                    </Scene>
                </Drawer>
				</Lightbox>
                <Scene  initial={!isLogin} key='login' >
                    <Scene   key='login'component={Login} hideNavBar/> 
                    <Scene key='reg' component={Reg} hideNavBar/>
                </Scene>
			</Modal>
			</Overlay>
        </Router>
	);
};


export default App;
