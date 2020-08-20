// 创建List
import React from "react";
import "./index.scss";

export default function List(props){
    return <ul class="steps">                        
        {
            props.data.map((data, index)=>{                
                return (<li class="clearfix" key={index}>
                    <span class="index">{data.id}.</span>
                    <span class="title">{data.title}</span>
                    <button class="btn btn-small" onClick={()=>{                        
                        props.onChange && props.onChange(data.id);
                    }}>练习</button>
                </li>)
            })
        }        
    </ul>
}