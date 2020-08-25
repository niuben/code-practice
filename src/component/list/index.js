// 创建List
import React from "react";
import "./index.scss";

function isPrevSuccess(data, currentIndex){
    
    //第一个默认成功
    --currentIndex;    
    if(currentIndex > 0) {
        
    }
}

export default function List(props){
    return <ul className="steps">                        
        {
            props.data.map((data, index)=>{                
                return (<li className="clearfix" key={index}>
                    <span className="index">{data.id}.</span>
                    <span className="title">{data.title}</span>
                    <button className={data.status == "lock" ? "btn btn-small btn-disable" : 'btn btn-small'} onClick={()=>{
                        if(data.status != "lock"){
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