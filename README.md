# test-scaffold

[npm搜索](https://www.npmjs.com/search)
[commander](https://github.com/tj/commander.js/blob/HEAD/Readme_zh-CN.md)
## npm发布流程

大致流程如下：

1. 注册一个`npm`账户，已有账户的可以跳过这一步
2. 使用`npm login`登录，需要输入`username`、`password`、`email`
3. 使用`npm public`发布
这一步比较简单，不多说，但是请注意如下几点：
**注意**
1. 使用了`nrm`的需要先将源切换到`npm`官方源
2. `package.json`中有几个字段需要完善：
* `name`为发布的包名，不能和npm已有的包重复
* `version`为版本信息，每次发布都必须要比线上的版本高
* `homepage`、`bugs`、`repository`也可以添加上
3. 在`readme.md`加入脚手架介绍及使用方法，方便他人使用。如果需要在文档中加入`徽标`，展示脚手架的`下载次数`之类的，可以在[这里生成](https://shields.io/)。

## npm link

`npm link`用来在本地项目和本地`npm`模块之间建立连接，可以在本地进行模块测试

具体用法：
1. 项目和模块在同一个目录下，可以使用相对路径
> npm link ../module

> npm link打包
>./node_modules/.bin/test-run相对路径访问指令
2. 项目和模块不在同一个目录下
> cd到模块目录，npm link，进行全局link
> cd到项目目录，npm link 模块名(package.json中的name)
3. 解除link
> 解除项目和模块link，项目目录下，npm unlink 模块名
> 解除模块全局link，模块目录下，npm unlink 模块名

必须要打成全局包才可以使用该命令,打成全局包的命令
npm install . -g
或者
npm link