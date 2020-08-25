// 创建List
import React from "react";
import "./index.scss";

function isPrevSuccess(data, currentIndex){
    
    //第一个默认成功
    var prevIndex = --currentIndex;
    if(prevIndex < 0) {
        return true;
    }

    // 判断之前的列表是否success
    if(typeof data[prevIndex] == "object" &&  data[prevIndex].status == "success" ){
        return true;
    }

    return false;

}

export default function List(props){
    return <ul className="steps">                        
        {
            props.data.map((data, index)=>{                
                return (<li className="clearfix" key={index}>
                    <span className="index">{data.id}.</span>
                    <span className="title">{data.title}</span>
                    <button className={isPrevSuccess(props.data, index) ? "btn btn-small" : 'btn btn-small btn-disable'} onClick={()=>{
                        if(isPrevSuccess(props.data, index) == true){
                            window.location.href = "/problem?id=" + data.id;
                        }
                    }}>{
                        data.status != "lock" ? "练习" : "未解锁"
                    }</button>
                </li>)
            })
        }        
    </ul>
}