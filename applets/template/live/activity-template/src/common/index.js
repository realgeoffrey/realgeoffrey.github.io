var $ = require('lib/jquery.js');
var ajax = require('common/ajax.js');
var CONSTANT = require('common/constant.js');
var tpl = require('./list.tpl');
var gConfig = require('activity-common/gConfig.js');

var userLogin = require('activity-common/userLogin.js');    // 登录
// userLogin.isLogin() , userLogin.login()

var jump = require('activity-common/jumpToRoom.js');    // 跳去热一或直播间
// jump.jumpToRoom(   {
//     isPlaying:'',
//     userid: '',
//     uuid: '',
//     roomid:''
// }  )
//jump.jumptoTopRoom()

var download = require('common-wap/share/download.js'); // 下载app
// download.downapp();

var tools = {};

var whiteDay = {
  init: function (isWap) {
    if (isWap && !gConfig.isApp) {    // 在非APP的WAP页面
      download.downapp();
    } else {
      if (userLogin.isLogin()) {
        jump.jumpToRoom({
          isPlaying: $this.attr('data-isplaying') === '1',
          userid: $this.attr('data-userid'),
          uuid: $this.attr('data-uuid'),
          roomid: $this.attr('data-roomid')
        });
      } else {
        userLogin.login();
      }
    }

    // 登录成功的回调
    userLogin.loginCallbacks.add(function () {

    });

    // 从各种状态回到APP里的H5页面的回调
    window.onResume = function () {

    };
  }
};

module.exports = whiteDay.init;
