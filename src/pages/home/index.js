import React from "react"

import {Child4} from "@/components"

import {observer,inject} from "mobx-react"
// observer 当store中数据发生变化时，当前组件视图自动更新 （好比一个观察者，时时刻刻观察state的变化）
// inject  把store中的数据映射进来 （类似将数据注射进这个组件）
@inject("store")
@observer
// 注意：inject 要在observer 前面，因为必须先将数据映射进来
 class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[
                {id:1,name:"张三"},
                {id:2,name:"李四"},
                {id:3,name:"王五"},
            ]
        }
    }
    componentDidMount(){
        console.log("home props",this.props)
      
    }
    SkipToDetail(ele){
        this.props.history.push("/home/detail/"+ele.id+"/"+ele.name)
    }
    createList(){
        let {list} = this.state
        return list.map(ele=>(
            <div key={ele.id} onClick={this.SkipToDetail.bind(this,ele)}>
                <span>{ele.id}</span>
                <span>--</span>
                <span>{ele.name}</span>
            </div>
        ))
    }
    changeCount(type){
        let {todo} = this.props.store
        todo.changeCount(type)
    }
    render(){
        let {todo} = this.props.store
        return(
            <div>
                <h1>首页</h1>
                <h1>{todo.count}</h1>
                <button onClick={this.changeCount.bind(this,"add")}>加</button>
                <button onClick={this.changeCount.bind(this,"sub")}>减</button>
                <Child4></Child4>
                {this.createList()}
            </div>
        )
    }
}

export default Home