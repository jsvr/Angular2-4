# 搭建TypeScript开发环境

 - compiler?为什么需要compiler?
   + 把TypeScript的代码转成js代码,也就是转es5,es6浏览器兼容不好.
 - 在线编译
   + [ts在线转译](https://www.typescriptlang.org/play/index.html)
   
 - 线下开发,搭建本地开发环境
   + node 安装
   ```bash
   sudo cnpm install -g typescript
   tsc --version
   新建一个Hello.ts文件
   在当前文件所在位置, # tsc Hello.ts (将ts文件编译成js文件)
   ```