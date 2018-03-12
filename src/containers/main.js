import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Image,
    BackHandler,
    ToastAndroid,
    Icon,
    StatusBar,
} from 'react-native';
import {connect } from 'react-redux'
import * as login from '../actions/loginAction' 
//import 导入 ES6写法
class Main extends Component{
    static navigationOptions =(props)=>{//这个props不是mainscreen的props,是stacknavigator传递过来的,包含三个内容:navigation(setParams:function,state:{key,routeName}),options,screenProps
        return {
            title:'首页',
            // headerLeft:( <TouchableOpacity onPress={()=>{props.navigation.navigate('DrawerOpen')}}>
            //     <Icon name="navicon" size={30} color="#333" />
            // </TouchableOpacity>),
            // headerTitle: (
            //     <TouchableOpacity>
            //         <Icon name="ios-search-outline" size={15} color="#cccccc" />
            //         <Text style={{color: '#cccccc'}}>搜索音乐、歌词、电台</Text>
            //     </TouchableOpacity>
            // ),
        }
    };
    constructor(props) {//组件的构造函数，固定写法，ES6写法，里面定义一些状态，和其他一些，多在网上学习
        super(props);
        this.state = {//state就是状态
            Example:'',//状态用对象的写法
        }
    }
    //react生命周期，一定要看看react八个生命周期，很重要
    componentWillMount() {  //生命周期:在组件加载之前执行
        //监听事件
        BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
    componentWillUnmount(){//生命周期:在组件销毁之前执行
        BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
    componentDidMount(){
        
    }
    //这个是函数，ES6的写法，
    Example(){
        let $this=this;//在嵌套函数中一定要注意this问题
    }
    //android手机上面的返回键
    onBackAndroid = () => {
        const navigator = this.navigator;
        console.log(navigator);
        // const routers = navigator.getCurrentRoutes();
        // console.log('当前路由长度：' + routers.length);
        // if (routers.length > 2) {
        //   navigator.pop();
        //   return true;//接管默认行为
        // } else {
    
        //   //到了主页了
        //   if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        //     //最近2秒内按过back键，可以退出应用。
        //     return false;
        //   }
        //   this.lastBackPressed = Date.now();
        //   ToastAndroid.show("再按一次退出应用", ToastAndroid.SHORT);
        //   return true;
        // }
        // return false;//默认行为
    };
    openDraw(){
        // this.props.navigation.navigate('DrawerToggle');
        // this.props.dispatch(login.login());
        this.props.navigation.navigate('Home');
    }
    //render()就是当前组件返回HTML页面，
    render() {
        return (
            //这里面就写页面，用react-native 里面标签 View相当于div,TouchableOpacity系列的就是处理点击事件,等等,自己看看react-native中文网里面的用法 
                <View style={styles.content}>
                    <TouchableOpacity onPress={this.openDraw.bind(this)}>
                        <Text style={styles.text}>首页</Text>
                    </TouchableOpacity>
                </View>
        );
    }
}
//这个函数是把数据中心的数据绑定到当前构造类（也称作组件）上
function mapStateToProps(state) {
    return {
        login:state.login,
        nav:state.nav,
    }
}
//connect是将当前的构建的类，连接到数据中心（可以去查一下react-redux,用dispatch把action(行为)连接到reducer(处理),返回行为处理结果）
export default connect(mapStateToProps)(Main);
//export default 默认导出，然后再其他页面中用import导入

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    content:{
        flex:1,//react-native 用的是flex-Box布局，在网上查一下就知道了
        width:width,//width是获取手机屏幕的宽度
        height:height,//height是获取手机屏幕的高度
        alignItems:'center',//
        justifyContent:'center',
    },
    text:{
        fontSize:20,
        color:'#000',
    },
});