# TypeScript 字符串新特性

  - 多行字符串
    + ``` ``多行字符串 ```
  - 字符串模板
    + 
    
    ```javasscript
    // TS 代码:
    var myname = "zhang yang";
    var getName = func () {
        return " zhang yang"
    }
    
    console.log(\`hello ${myname}\`);
    console.log(\`hello ${getName()}\`);
    
    // 编译成js
    var myname = "zhang yang";
        var getName = func () {
        return " zhang yang"
    }
    
    console.log("hello" + myname);
    console.log("hello" + getName());
    ```
  - 自动拆分字符串
  
    +
    
    ```javascript
    // 用字符串模板去调用test方法
    // 参数template=>用表达式切割后的Array;['hello my name is', ',', '']
    // 参数name=>第一个表达式的值
    // 参数age=>第二个表达式的值
    function test (template, name, age) {
        console.log(template);
        console.log(naem);
        console.log(age);
    }
    
    var myname = " zhang yang ";
    
    var getName = function () {
        return 28;
    }
    
    test`hello my name is ${myname},I'm ${getAge()}`
    ```