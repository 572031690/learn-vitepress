/*
 * @Author: mjh
 * @Date: 2023-03-18 19:47:31
 * @LastEditors: mjh
 * @LastEditTime: 2023-03-18 19:48:17
 * @Description: 
 */
import clone from "../utils/clone.js";
import inquirer from "inquirer";
import { resolve } from "path";
import fs from "fs";
import chalk from "chalk";
import handlebars from "handlebars";

const log = (...args) => console.log(chalk.green(...args));

export default async () => {
  const { name } = await inquirer.prompt([
    {
      type: "input" /* 选择框 */,
      message: "请输入项目的名称？",
      name: "name",
    },
  ]);

    log("创建项目:" + name);
     // 从github克隆项目到指定文件夹
  await clone("github:leedawn/smart-ui-app-js-template", name);

  // 生成路由定义
  compile(
    {
      name,
    },
    `./${name}/package.json`,
    `./${name}/template/package.hbs.json`
  );

  log(`
安装完成：
To get Start:
===========================
cd ${name}
npm i
npm run dev
===========================
            `);
};
// 编译模板文件
function compile(meta, filePath, templatePath) {
    if (fs.existsSync(templatePath)) {
      const content = fs.readFileSync(templatePath).toString();
      const result = handlebars.compile(content)(meta);
      fs.writeFileSync(filePath, result);
      log(`${filePath} 修改成功`);
    } else {
      log(`${filePath} 修改失败`);
    }
  }