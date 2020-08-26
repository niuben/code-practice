## render 
`render`函数作用是将`createElement`生成的对象变成DOM节点;

__目标__
1. 创建一个render函数;



__例子__
```js
var element = `<h1>hi React</h1>`;
render(element, document.getElementByID("root"));
```

__输出__
在`id`为`root`节点上生成一个`h1`标签，标签的内容是`hi React`