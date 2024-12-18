# 部署

由于本项目是 **Koishi** 聊天机器人整合包，所以同样支持 [Koishi](https://koishi.chat) 官方所支持的所有部署方式。


## 模板项目（推荐）

::: danger 警告
注意 模板项目并非 Koishi 所推荐的用户使用的部署方式，所以你也不能用此部署方式在Koishi用户群获取支持
:::

### 安装Node.Js
 Koishi 需要 [Node.js](https://nodejs.org/zh-cn) (最低 v18，推荐使用 LTS) 运行环境，你需要自己安装它。

#### 下载安装包
首先我们前往 [Node.js](https://nodejs.org/zh-cn) 的官方网站：
![alt text](.\image\Nodejs.png)
点击下载你想要的版本，推荐安装更加稳定的 **长期支持版本（LTS）**
::: details Windwos用户可直接点击直链下载对应安装包
https://nodejs.org/dist/v22.11.0/node-v22.11.0-x64.msi
:::
随后，运行下载好的安装包，根据提示完成整个安装流程即可。

#### 安装包管理器
Node.js自带名为 [npm](https://www.npmjs.com/) 的包管理器，但是我们更加推荐使用更为强大的yarn作为包管理器。
输入以下命令安装yarn
```sh
npm i -g yarn
```
安装完成之后，输入以下命令查看yarn版本
```sh
yarn -v
```
由于网络环境原因，中国大陆境内的服务器在安装过程中可能遇到网络错误，因此我们推荐配置镜像源
```sh
yarn config set registry https://registry.npmmirror.com
```
::: tip
部分 Windows 用户可能会发现以下错误 ([参考链接](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_execution_policies))：

```text
yarn：无法加载文件 yarn.ps1，因为在此系统上禁止运行脚本。
```

此时请以管理员身份重新运行终端，并输入下面的命令：

```sh
Set-ExecutionPolicy RemoteSigned
```

之后就可以正常使用 yarn 了。
:::

### 运行该项目
 前往 [这里](https://github.com) 下载整合包
 ::: details 国内用户请点击这里
 https://gitee.com
 :::


在整合包内打开终端，运行以下命令
```sh
yarn start
```



<div style="display:none">
**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
</div>