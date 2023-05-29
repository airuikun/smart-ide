/**
 * 一键命令行构建项目
 */
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("babel-types");
const fs = require("fs");
const path = require("path");


// 创建文件
const createFile = (path, fileObj = "", flag = {}) => {
  fs.writeFileSync(path, fileObj, flag);
};

//更新routes文件下views的路由
const updateRoutesViews = (pathFileName, fileName) => {
  let configJsData = fs.readFileSync(configJsPath, "utf8");
  let configJsTree = parser.parse(`${configJsData}`);
  traverse(configJsTree, {
    ArrayExpression(path) {
      let newObj = t.objectExpression([
        t.objectProperty(
          t.identifier("description"),
          t.stringLiteral(`哈哈和`)
        ),
      ]);
      path.node.elements.push(newObj);
    },
  });
  console.log(generate(configJsTree, { jsonCompatibleStrings: true }, "").code);
  createFile(
    configJsPath,
    generate(configJsTree, { jsonCompatibleStrings: true }, "").code
  );
};

updateRoutesViews(pathReal, fileName);

