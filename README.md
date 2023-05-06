

# vscode插件结合chatgpt实现的工程化工具

在vscode插件中结合chatgpt能力，实现对开发代码的智能CR、智能单测、错误检测、添加类型、优化代码、添加注释、生成代码、解释代码、重构代码、生成文档、语言转化等功能，实现智能研发提效

![image](https://new.inews.gtimg.com/tnews/1b5b6900/b18e/1b5b6900-b18e-4f15-b725-c09d04b0c3b1.png)

# demo 体验

（注意：使用插件必须保证当前网络可以访问外网）

git clone 项目

进入项目，当前文件夹下有一个打包好的文件"leah-cli-0.0.11.vsix"

进入vscode中，键盘按下 command + shift + p（ 或者 ctrl + shift + l ）

选中"Extensions: Install from VSIX"，如下图
![](https://new.inews.gtimg.com/tnews/fa0ff958/da05/fa0ff958-da05-49d5-ac1a-6388f0f89982.png)

然后选择项目中的"leah-cli-0.0.11.vsix"文件

安装好后重启vscode

重启后，通过同时按下 command + L （ 或者 ctrl + L ）

即可成功唤起插件

![image](https://new.inews.gtimg.com/tnews/1b5b6900/b18e/1b5b6900-b18e-4f15-b725-c09d04b0c3b1.png)


# 界面开发

```bash
cd develop
yarn install
yarn run start
```

浏览器进入localhost:3000即可

编译项目
```bash
yarn run build
```
编译好后会自动将界面代码编译到vscode插件中


# vscode插件开发

```bash
cd vscode
yarn install
yarn global add vsce
vsce package 
```

执行完上面的命令，本地就会生成类似"leah-cli-0.0.11.vsix"的vsix文件

在vscode中根据demo体验的步骤，把这个vsix文件安装好，就可以看到具体效果了








