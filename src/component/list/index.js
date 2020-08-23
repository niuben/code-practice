// 创建List
import React from "react";
import "./index.scss";

export default function List(props){
    return <ul className="steps">                        
        {
            props.data.map((data, index)=>{                
                return (<li className="clearfix" key={index}>
                    <span className="index">{data.id}.</span>
                    <span className="title">{data.title}</span>
                    <button className="btn btn-small" onClick={()=>{                        
                        window.location.href = "/problem?id=" + data.id;
                    }}>练习</button>
                </li>)
            })
        }        
    </ul>
}