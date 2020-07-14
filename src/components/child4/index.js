import React from 'react'
// 高价组价或者高阶函数
import {withRouter} from  "react-router-dom"

class Child4 extends React.Component{
    constructor(props){
        super(props)
    }
    skipToAdd(){
        console.log("---Child4",this.props);
        this.props.history.push("/jsx")
    }
    render(){
        return(
            <div>
                {/* 
                    按钮一般使用编程式的跳转，声明式的一般都少用
                */}
                <button onClick={this.skipToAdd.bind(this)}>
                    跳转到jsx页面
                </button>
            </div>
        )    
    }
}

export default withRouter(Child4)