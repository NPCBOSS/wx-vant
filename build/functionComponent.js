const fs = require('fs');
const path = require('path');
const fileSave = require('file-save');
const chalk = require('chalk');
const vantPath = path.resolve(__dirname, '../miniprogram_npm/@vant/weapp/button');
const customPath = path.resolve(__dirname, '../components/ht-button');
console.log(vantPath);
let dirList = fs.readdirSync(vantPath);
console.log('fileList', dirList);
for (let file of dirList) {
  if (file.includes('wxml')) {
    fs.readFile(vantPath + '/index.wxml', 'utf-8', function(err, data) {
      // let fileContent = JSON.parse(JSON.stringify(data));
      let ss = new RegExp("button$",'g');
      let fileContent = data.toString().replace(ss,'xxxx')
      console.log(fileContent.includes('..'));
      console.log(fileContent);
      fs.writeFile(customPath + '/index.wxml', data.toString(), 'utf-8', function(err, data) {
        if (err) {
          console.log('fail');
        } else {
          console.log('success');
        }
      })
    })
  }
}