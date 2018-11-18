# TypeScript函数新特性

  - Rest and Spread操作符(...)
    + 用法1: 用来声明传入任意数量参数的方法
    
    ```javascript
    function func1(...args) {
        args.forEach(function (arg) {
            console.log(arg);
        })
    }
    
    // 调用
    func1(1,2,3);        // 打印: 1 2 3;
    func1(7,8,9,10,11);  // 打印: 7 8 9 10 11;
    ```
    
    + 用法2: 把任意一个长度的数组转化成固定参数方法调用
    
    ```javascript
    function func1(a, b, c) {
        console.log(a);
        console.log(b);
        console.log(c);
    }
    
    // 调用
    var args = [1,2];
    func1(...args);        // 打印: 1 2 undefined;
    // 因为声明时,3个参数是固定的,所以会打印出一个undefined.
    
    var args2 = [7,8,9,10,11]
    func1(...args2);  // 打印: 7 8 9;
    // 因为声明时,3个参数是固定的,所以打印三个参数.
    // git add 05-函数新特性
<<<<<<< HEAD
    // git add 05-函数新特性 zy分支冲突test
=======
    // git add 05-函数新特性 zy分支 online test
>>>>>>> online
    ```