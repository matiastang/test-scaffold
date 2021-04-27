#!/usr/bin/env node
// 表明是node脚本，需要node环境
/*
 * @Author: tangdaoyong
 * @Date: 2021-04-27 16:08:08
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-04-27 17:01:58
 * @Description: 项目入口
 */
console.log('hello cli');
const { program } = require('commander');
const Package = require('../package.json');

/*
* 指令
*/

program.version(Package.name).option('-v,--version', '查看版本号');