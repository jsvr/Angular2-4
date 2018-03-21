# angular-cli

## 初始化项目(报错)
  
  - mac下何windowns下的 node-sass版本不一样 (关于nodejs项目移植问题说明)
    + 报错信息
  	  ERROR in ./src/app/pages/dashboard/multi-axis/multi-axis-chart/multi-axis-chart.component.scss
	  Module build failed: Error: Missing binding /Users/lixiaowan/Desktop/mr.zhang/Work/lenovo/公司版本/ngx/node_modules/node-sass/vendor/darwin-x64-48/binding.node
	  Node Sass could not find a binding for your current environment: OS X 64-bit with Node.js 6.x

	+ 解决办法
	  cnpm rebuild node-sass （如若不行，则先运行npm install node-sass命令执行）

Found bindings for the following environments:
  - Windows 64-bit with Node.js 8.x

## 新建组件

```bash
ng g component header  // g -> generate的缩写,component ->组件
ng g component stock/stockManage  // 在stock文件下生成stockManage组件
```