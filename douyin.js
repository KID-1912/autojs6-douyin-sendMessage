var password = "12345"; // 手机锁屏密码
var friendName = "发送消息好友昵称";

sleep(1000);
main();

// 主操作
function main() {
  // 唤醒手机(需要的话)
  if (!device.isScreenOn()) {
    device.wakeUp();
    sleep(1000);
    swipe(device.width / 2, device.height - 100, device.width / 2, 100, 500);
    sleep(1000);
    // 输入密码
    if (password) {
      for (var i = 0; i < password.length; i++) {
        clickWidgetByPosition(text(password[i]).untilFindOne());
      }
    }
    sleep(1000);
  }
  home();
  sleep(1000);

  // 脚本即将执行提示
  toast("即将执行脚本，请勿操作手机");
  sleep(3000);
  setTimeout(() => exit(), 144 * 1000);

  // 打开抖音
  device.setMusicVolume(0);
  sleep(500, 100);
  const douyinPackageName = app.getPackageName("抖音");
  app.launch(douyinPackageName);
  sleep(1000);
  if (text("允许").clickable(true).exists()) {
    clickWidgetByPosition(text("允许").untilFindOne());
  }
  sleep(5000, 500);
  closePopup();

  // 进入消息记录对应好友
  var messageTextWidget = text("消息")
    .className("android.widget.TextView")
    .untilFindOne();
  clickWidgetByPosition(messageTextWidget);
  sleep(3000, 100);
  closePopup();
  var friendWidget = text(friendName).findOnce();
  if (!friendWidget) {
    swipe(
      device.width >> 1,
      device.height * 0.8,
      device.width >> 1,
      device.height * 0.2,
      400
    );
    friendWidget = text(friendName).findOnce();
  }
  if (!friendWidget) {
    swipe(
      device.width >> 1,
      device.height * 0.1,
      device.width >> 1,
      device.height * 0.9,
      250
    );
    friendWidget = text(friendName).findOnce();
  }
  clickWidgetByPosition(friendWidget);
  sleep(3000, 100);

  // 输入内容
  clickWidgetByPosition(className("android.widget.EditText").untilFindOne());
  sleep(3000, 100);
  // 数据源
  var content = "";
  var res = http.get("https://v1.hitokoto.cn/");
  if (res.statusCode == 200) {
    var data = res.body.json();
    content = data.hitokoto + " ——《" + data.from + "》";
  } else {
    content = "今天网络不佳，没词了";
  }
  setText(content);
  sleep(5000, 100);
  clickWidgetByPosition(
    className("android.widget.ImageView").desc("发送").untilFindOne()
  );

  // 发送表情
  clickWidgetByPosition(
    className("android.widget.ImageView").desc("表情").untilFindOne()
  );
  var btnEmoji = className("android.widget.Button").desc("互动表情").findOnce();
  if (btnEmoji) clickWidgetByPosition(btnEmoji);
  clickWidgetByPosition(
    className("android.widget.TextView").text("比心").untilFindOne()
  );

  sleep(3000, 1000);
  kill_app("抖音");
  exit();
}

// 基于控件坐标点击
function clickWidgetByPosition(widget) {
  while (!widget.clickable()) {
    widget = widget.parent();
  }
  const diff = random(1, 10);
  click(widget.bounds().centerX() + diff, widget.bounds().centerY() + diff);
  sleep(500, 100);
}

// 关闭广告弹窗
function closePopup() {
  var btnClose = textMatches(/(.*拒绝.*|.*关闭.|.*以后再说.*)/).findOnce();
  if (btnClose) {
    clickWidgetByPosition(btnClose);
  }
  sleep(1000, 500);
}

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
