# TypeScript参数新特性

  - 参数类型
    + 在参数名称后面使用冒号来指定参数的类型(:number, :)
    
    ```javascript
    // 声明 string类型
    var myname: string = " zhang yang ";
    myname = 13; 
    // 编译器报错,不能把数字赋值给string类型的myname;
    // 实际编译后的代码js是不会报错的;只是帮助你在开发的时候减少出错.
    
    var alias = " xi xi";
    alias = 13;
    // 还是报错,ts有一个推断机制,会根据第一次的赋值推断当前所属类型;
    
    var anyname: any = " dong dong";
    anyname = 13;
    // 此时可以赋任何类型值
    
    // 声明 bumber类型
    var age: number = 13;
    
    // 声明 boolean类型
    var age: boolean = 13;
    
    // 声明方法返回值
    function test() :string {} //声明方法返回值为string
    function test() :void {} //声明方法不需要任何返回值,如果return会报错
    function test(name:string) :void {} //声明方法参数的类型
    
    // 自定义类型
    class Person {
        name: string;
        age: number;
    }
    
    var zhangsan: Person = new Person();
    zhangsan.name = "zhang yang"; // 书写时会自动提示属性;
    zhangsan.age = "18"; // 书写时会自动提示属性;
    ```
  - 默认参数(参数指定默认值 var a=1)
    + 
    
    ```javascript
    var myname: string = "zhang yang"; //参数指定默认值
    
    // 1.参数没有设置默认值
    function test(a: string, b: string, c: string) {
        console.lgo(a);
        console.lgo(b);
        console.lgo(c);
    } 
    // 传参数调用test方法
    test("xxx", "yyy", "zzz"); //必须传三个参数,一个或两个都会报错;
    
    // 2.参数设置默认值
    function test(a: string, b: string, c: string = "xixi") {
        console.lgo(a);
        console.lgo(b);
        console.lgo(c);
    } 
    
    // 传参数调用test方法
    test("xxx", "yyy"); 
    //第三个参数不用传值就有默认值xixi;但是默认值参数必须卸写在后面.
    ```
  - 可选参数(在方法的参数声明后面用问号来标明此参数为可选参数)
    + 
    
    ```javascript
    // 设置可选参数
    function test(a: string, b?: string, c: string = "xixi") {
         console.lgo(a);
         console.lgo(b);
         console.lgo(c);
     } 
     
     test("xxx");
     // 此时b参数可选,c参数有默认值;
     // 声明在必选参数的后面
    ```
  
  
  