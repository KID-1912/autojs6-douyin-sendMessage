# autojs6-douyin-sendMessage

![](https://raw.githubusercontent.com/KID-1912/Github-PicGo-Images/master/202403132250853.png)

基于 [AutoJs6 ](https://docs.autojs6.com/#/) 开发的抖音脚本，自动化发送消息、交互表情

## 功能预览

- 定时执行

- 支持解锁手机(仅支持数字密码)

- 动态文字消息

- 发送抖音交互表情

- 完成后台退出 app 

## 准备工作

### 安装 AutoJs6 apk

安装地址 https://github.com/SuperMonster003/AutoJs6/releases

选择 AutoJs6@6.x.x [下载第1个apk](https://github.com/SuperMonster003/AutoJs6/releases/download/v6.5.0/autojs6-v6.5.0-arm64-v8a-7a07b863.apk)即可

### 软件设置

首次安装后启动 AutoJs App，按弹窗引导设置：

**显示在应用上层**

<img src="https://raw.githubusercontent.com/KID-1912/Github-PicGo-Images/master/202403132302142.jpg" title="" alt="" width="246"><img title="" src="https://raw.githubusercontent.com/KID-1912/Github-PicGo-Images/master/202403132303619.jpg" alt="" width="246">

**注：** 不同设备可能有所差异

**读取文件权限**

由于需要读取js脚本运行，支持读取文件

<img title="" src="https://raw.githubusercontent.com/KID-1912/Github-PicGo-Images/master/202403132307164.jpg" alt="" width="195">

### 无障碍服务

无障碍服务是脚本运行必备条件，请在AutoJs左侧菜单开启

<img title="" src="https://raw.githubusercontent.com/KID-1912/Github-PicGo-Images/master/202403132309826.jpg" alt="" width="201">

如上图，还需勾选 **前台展示** 以及 **修改系统设置**(将用于脚本设置音量)

### 开机自启动

为实现手机关机下次开机脚本定时执行，在手机设置中允许AutoJs App自启动(自行设置)

<img src="https://raw.githubusercontent.com/KID-1912/Github-PicGo-Images/master/202403132317371.jpg" title="" alt="" width="195">

## 使用说明

### 脚本准备

**下载脚本**

首先将项目 douyin.js 脚本文件下载后发送到手机，并在AutoJs App 导入

<img src="https://raw.githubusercontent.com/KID-1912/Github-PicGo-Images/master/202403132321893.jpg" title="" alt="" width="240">

**配置变量**

点击 铅笔编辑 图标，修改脚本前两行变量

<img src="https://raw.githubusercontent.com/KID-1912/Github-PicGo-Images/master/202403132326850.jpg" title="" alt="" width="343">

注意好友抖音昵称不要填错，需要全称

### 单次运行

点击三角形启动按钮，尝试单次运行（运行前请后台退出抖音app）
成功单次运行脚本即流程走通，则下一步设置定时运行，否则参考 **常见问题** 部分解决后继续

### 定时运行

在脚本拓展菜单设置定时任务，脚本将每天定时运行并成功完成后终止

<img title="" src="https://raw.githubusercontent.com/KID-1912/Github-PicGo-Images/master/202403132356367.jpg" alt="" width="237">

**注：**

好友置顶：为提高好友查找概率，可在抖音 “好友详情” “更多” 开启 “置顶聊天”

建议使用限制备用机，平时息屏，保证电量及时充电

## 常见问题

## 自定义

自定义内容

自定义表情

互相发送

- 2 台手机
- 抖音双开双账号
