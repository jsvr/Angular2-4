# router

## 项目初始化

```
ng new my-app-router --routing
```
## 路由相关对象
> Routes
- 定义
```
路由配置，保存着哪个URL对应展示哪个组件，以及在哪个RouterOutler中展示组件
```
- 配置
```javascript

```

> RouterOutlet (`插座`)
- 定义
```
在html中标记路由内容呈现位置的占位符指令
```
- 配置
```javascript

```
> Router
- 定义
```
负责在运行时执行路由的对象，可以通过调用其navigate()和navigateByUrl()方法来导航到另一个指定的路由。
```
- 配置
```javascript

```
> RouterLink
- 定义
```
在Html中声明路由导航用的指令。
```
- 配置
```javascript

```
> ActivatedRoute
- 定义
```
当前激活的路由对象，保存这当前路由的信息，如路由地址，路由参数等。
```
- 配置
```javascript

```
## 路由配置

```

```
