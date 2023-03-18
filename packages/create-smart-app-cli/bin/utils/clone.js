/*
 * @Author: mjh
 * @Date: 2023-03-18 19:48:31
 * @LastEditors: mjh
 * @LastEditTime: 2023-03-18 19:48:40
 * @Description: 
 */
import { promisify } from "util";
import download from "download-git-repo";
import ora from "ora";
export default async (repo, desc) => {
  const process = ora(`下载.....${repo}`);
  process.start();
  await promisify(download)(repo, desc);
  process.succeed();
};