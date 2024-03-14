# autojs6-douyin-sendMessage

![](https://raw.githubusercontent.com/KID-1912/Github-PicGo-Images/master/202403132250853.png)

基于 [AutoJs6 ](https://docs.autojs6.com/#/) 开发的抖音脚本，自动化发送消息、交互表情

## 功能预览

- 定时执行

- 支持解锁手机(仅支持数字密码)

- 动态文字消息

- 发送抖音交互表情

- 完成后台退出 app 

**注：** 本脚仅供学习，纯属个人娱乐，请勿修改用于其它用途

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

**注：** 由于手机安全性设置，少数情况AutoJS无障碍服务被关闭，需重新打开后运行

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

好友置顶：为提高成功进入好友聊天框概率，可在抖音 “好友详情” “更多” 开启 “置顶聊天”

建议使用闲置备用机，平时息屏，保证电量及时充电

## 常见问题

### 错误时中止脚本

每次运行脚本失败/卡住/手动停止后，必须在任务栏查看 “运行中任务”，及时清除正在运行的任务后重新运行脚本，否则脚本叠加无法正常运行

<img src="https://raw.githubusercontent.com/KID-1912/Github-PicGo-Images/master/202403142243682.png" title="" alt="" width="280">

### 退出抖音后台

在完成消息发送后，脚本会打开应用管理设置，自动点击“结束运行”实现后台退出抖音

如果你的脚本卡在了这一步，可能是未查找到 强行关闭按钮（不同设备按钮文字不同），根据需要修改代码下方代码

```js
// 退出app
function kill_app(packageName) {
  var name = app.getPackageName(packageName);
  app.openAppSetting(name);
  sleep(3000);
  clickWidgetByPosition(textMatches(/(结束运行|强行停止)/).untilFindOne());
  sleep(1000);
  clickWidgetByPosition(textMatches(/(.*确.*|.*定.*)/).untilFindOne());
  sleep(1000);
  home();
}
```

## 自定义

### 自定义文字内容

默认脚本调用接口，随机获取文字内容输入

你可以选择其它接口，可参考 https://github.com/vv314/quotes

或自定义 `content` 数据源逻辑

```js
  // 输入内容
  clickWidgetByPosition(className("android.widget.EditText").untilFindOne());
  sleep(3000, 100);
  // 数据源
  var content = "";
  var res = http.get("https://v1.hitokoto.cn/");
  if (res.statusCode == 200) {
    var data = res.body.json();
    content = data.hitokoto;
  } else {
    content = "今天网络不佳，没词了";
  }
  input(content);
```

### 自定义互动表情

默认发送 “比心" 互动表情，你可以自定义其他表情，但限于首屏可见表情，否则自行添加逻辑

```js
  // 发送表情
  clickWidgetByPosition(
    className("android.widget.ImageView").desc("表情").untilFindOne()
  );
  var btnEmoji = className("android.widget.Button").desc("互动表情").findOnce();
  if (btnEmoji) clickWidgetByPosition(btnEmoji);
  clickWidgetByPosition(
    className("android.widget.TextView").text("比心").untilFindOne()
  );
```

### 互相发送

目前脚本仅为单账号定时发送消息，若实现 “续火花” 的功能，可以在2台手机分别部署（离大谱）；

另一个思路是 在手机设备使用“双开应用”，2个抖音app分别登录不同账号，修改脚本支持完成主抖音app发送消息后启用副抖音app回复消息，感兴趣可以探究AutoJs6如何区分双开app
