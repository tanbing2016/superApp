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
    ToastAndroid,
    StatusBar,
} from 'react-native';
import {connect } from 'react-redux'
import * as login from '../actions/loginAction'
// import SQLite from './dateBase/sqlite';
// let sqLite = new SQLite();
// let db;
let timer;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
class welcome extends Component{
    static navigationOptions =(props)=>{//这个props不是mainscreen的props,是stacknavigator传递过来的,包含三个内容:navigation(setParams:function,state:{key,routeName}),options,screenProps
        return {
                headerStyle:styles.headerStyle,
                headerTintColor:'#fff',
        }
    };
    constructor(props){ 
        super(props);
        this.state={
            num:'',
        };
    }
    componentDidMount (){
        
    }
    componentWillUnMount (){
        this.setState({num:''});
    }
    componentWillMount (){
        let num=4;
        let $this=this;
        timer=setInterval(()=>{
            if(num==0){
                clearInterval(timer);
                $this.reasult();
                return ;
            }
            $this.setState({num:"跳过 "+num+' s'},()=>{
                num--;
            })
        },1000)
    }
    reasult(){
        let that=this;
        // that.props.dispatch(login.login());
        this.props.navigation.navigate('Main');
        // //开启数据库  
        // if(!db){  
        //     db = sqLite.open();  
        // }  
        // // 建表  
        //   sqLite.createTable();  
        //删除数据  
        //   sqLite.deleteData();
        //查询  
        // db.transaction((tx)=>{  
        //     tx.executeSql("select * from user", [],(tx,results)=>{  
        //     var len = results.rows.length;  
        //     // if(len>0){
        //         let u=results.rows.item(0); 
        //         that.props.dispatch(login.login());
        //         // return ;
        //     // }else{
        //     //     // that.props.dispatch(jump.jumpLogin());
        //     // }
        //     });  
        // },(error)=>{//打印异常信息  
        //     console.log('error',error);  
        // }); 
    }
    login(){
        clearInterval(timer);
        this.reasult();
    }
    render(){
        return (
            <View style={styles.main}>
                <StatusBar hidden={true} />
                <View style={styles.bg}>
                    <Image style={styles.bgCon}  source={require('../imgs/yan.jpg')} />
                </View>
                <TouchableOpacity style={[styles.time]} onPress={this.login.bind(this)}>
                    <Text style={[styles.text]}>{this.state.num=='' ? "跳过 "+5+' s':this.state.num}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        login:state.login
    }
}
export default connect(mapStateToProps)(welcome);
//F37327
const styles = StyleSheet.create({
    headerStyle:{
        height:0,
    },
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
        width:width,
        height:height,
    },
    bg:{
        position:'absolute',
        top:0,
        left:0,
        width:width,
        height:height,
        opacity:1,
    },
    bgCon:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:null,
        height:null,
        //不加这句，就是按照屏幕高度自适应
        //加上这几，就是按照屏幕自适应
        //resizeMode:Image.resizeMode.contain,
        //祛除内部元素的白色背景
        backgroundColor:'rgba(0,0,0,0)',
    },
    time:{
        position:'absolute',
        top:20,
        right:20,
        width:80,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(0, 0, 0, 0.4)',
        borderRadius:5,
    },
    text:{
        fontSize:16,
        color:'#fff',
    },
});