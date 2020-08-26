import React, { useState } from "react";
import {UNIT_TEST_CONFIG} from "../../model/config";
import "./index.scss";

/*
* 设置Case样式
* 1. Case样式状态显示; (错误还是成功)
* 2. 每个Case的状态展示; 
*/ 


export default function UnitTest(props){

    return <React.Fragment> 
         {
            props.status != "end" ? 
            <h2 className="showStatus">
                {
                    props.status == "upload" ? "代码上传中......" : 
                    props.status == "run" ? "代码运行中......" :
                    ""
                }
            </h2>
            : null                    
        }   
        <div className="markdown markdown-body">
        
       
        {/* 版本一暂时不需要 */}
        {/* {
            props.data.map((unit, index) => {
                return <a href={"#case" + ( index + 1)}>case{index + 1}</a>
            })
        } */}

        <div className="cases">
            {
                props.data.map((unit, index)=>{
                    return <div className="case" key={index}>
                        <h3 className={unit.status == "equal" ? "successStatus" : "errorStatus"}>{UNIT_TEST_CONFIG[unit.status]}</h3>                        
                        <p><strong>执行: </strong></p>
                        <pre>
                            <code className="language-js">
                                {unit.fn}
                            </code>
                        </pre>

                        <p><strong>期望: </strong></p>
                        <pre>
                            <code className="language-js">
                                {
                                    unit.correctValue == undefined ? "undefined" : typeof unit.correctValue == "object" ? JSON.stringify(unit.correctValue, null, 4) : unit.correctValue.toString()
                                }
                            </code>
                        </pre>

                        <p><strong>实际: </strong></p>
                        <pre>
                            <code className="language-js">
                                {
                                    unit.value == undefined ? "undefined" : typeof unit.value == "object" ? JSON.stringify(unit.value, null, 4) : unit.value.toString()
                                }
                            </code>
                        </pre>
                    </div>
                })    
            }
        </div>
    </div>
    </React.Fragment>
}

