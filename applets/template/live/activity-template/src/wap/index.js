var gConfig = require('activity-common/gConfig.js');

gConfig.init({
  isApp: false,
  isLogin: false, // 非APP的WAP都没有登录
  inRoom: false,
  ACT_ID: 'act18',
  SERVER_ACT_ID: '',
  report_category: '',
  ACT_GIFT: {
    name: '',
    id: ''
  }
});

var LiveAppInterface = require('common-wap/xllive.js');
var share = require('common-wap/share/share.js');

LiveAppInterface.tools.inAppWait(
  // 在APP回调
  function () {
    gConfig.isApp = true;
    LiveAppInterface.tools.writeLoginApp(
      // APP内已登录回调
      function () {
        gConfig.isLogin = true;

        // 执行初始化内容init()
      },

      // APP内未登录回调
      function () {
        gConfig.isLogin = false;

        // 执行初始化内容init()
      }
    );

    // APP分享
    share.init({
      'shareTitle': '标题',
      'shareContent': '分享内容',
      'shareImageUrl': 'http://misc.live.xunlei.com/web_wap/static/activity/路径/wap/images/share.png'
    });
  },

  // 不在APP回调
  function () {
    gConfig.isApp = false;

    // 顶部分享banner
    share.notinapp();

    // 执行初始化内容init()
  }
);

// 执行初始化内容后：
var init = function () {
  var logic = require('../common/index');
  logic(isWap);
};
