## CreateElement 

`createElement`函数主要功能是返回一个数据对象。

__目标__
1. 创建一个CreateElement函数;
2. 返回特定的对象;


__例子__
```js
var element = `<h1>hi React</h1>`;
createElement(element);
```

__输出__
```js
{
    type: "h1",
    props: null,
    children: {
        type: "TEXT_ELEMENT",
        props: null，
        children: "Hi React"
    }
}
```

__节点嵌套__
```js
var element = `<h1><i>hi React</i></h1>`;
createElement(element);
```
__输出__
```js
{
    type: "h1",
    props: null,
    children: [{
        type: "i",
        props: null,
        children: [{
            type: "TEXT_ELEMENT",
            props: null,
            children: "Hi React"
        }]
    }]
}
```
