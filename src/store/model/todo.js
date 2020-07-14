import {observable,action} from 'mobx';

export default class TodoStore {
//1，共享的数据如何定义？？ vue 有 state
@observable count = 0;

@action changeCount(payload){
    if(payload == "add"){
        this.count++
    }else{
        this.count--
    }
}

//2，改变共享的方法，如何定义？？ vue有mutations  actions

}

 