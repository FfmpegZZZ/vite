# Koishi Desktop
## Windows
### 下载Koishi Desktop
* [安装包 (.msi)](https://k.ilharp.cc/win.msi)
* [更多版本](https://github.com/koishijs/koishi-desktop/releases)
 
 ### 安装
 通过安装包安装 Koishi 是最推荐的安装方式，安装程序会自动处理大部分问题。一般情况下你都应该选择这种方式。

 ![示例](.\image\desktop-install.png)

双击安装包并一路点按「Next」，等待安装过程结束，你便可以在「开始」菜单中找到 Koishi 了。
::: tip
安装流程在部分电脑上这可能会花费 10 分钟以上的时间，请耐心等待。
:::

### 启动
安装完成后，点击 Koishi 图标即可启动。等待几秒钟，Koishi 控制台将会被打开，现在你可以开始使用 Koishi 了。
::: details 如果你的电脑/服务器点击 Koishi 后没有反应，请看这里
如果你的电脑点击后没有反应，浏览器访问 http://127.0.0.1:5140 可以打开控制台

**说明你的系统缺少了相关运行库**

请下载 https://aka.ms/vs/17/release/vc_redist.x64.exe 安装VC运行库
:::

### 导入本项目整合包
 前往 [这里](https://github.com) 下载整合包
 ::: details 国内用户请点击这里
 https://gitee.com
 :::

 在电脑右下角托盘出找到 Koishi
 ![data](.\image\desktop-data.png)
 点击 高级 > 打开数据文件夹
![dir](.\image\dir.png)
将下载完成的整合包解压并导入到 instance 文件夹，原有的 default 文件夹删去。
> 提示占用先退出Koishi