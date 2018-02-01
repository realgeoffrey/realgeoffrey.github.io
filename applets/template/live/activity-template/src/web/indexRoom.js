var $ = require('lib/jquery.js');
var ajax = require('common/ajax.js');
var CONSTANT = require('common/constant.js');
var gConfig = require('activity-common/gConfig.js');
var activeBridge = require('common/activeBridge.js');
var userlogin = require('activity-common/userLogin.js');

var page = {
    roomInfo: {},
    init: function (data, roomInfo) {
        var _this = this;
        _this.roomInfo = roomInfo;
        gConfig.init({
            isApp: false,   // false
            isLogin: userlogin.isLogin(),
            inRoom: true,   // true
            ACT_ID: 'act18',
            SERVER_ACT_ID: '',
            report_category: '',
            ACT_GIFT: {
                name: '',
                id: ''
            }
        });

        // 填入主体内容
        activeBridge.data && _this.render(activeBridge.data);

        // 监听websocket，hover部分
        activeBridge.socket.listen('onsendhtmlenter', function (msg) {
            if (msg.config.webUrl != 'http://live.xunlei.com/activity/romanticLove/web/indexRoom.html') {
                return;
            }
            _this.enter(msg);
        });

        //监听websocket，跑马灯
        activeBridge.socket.listen('onsendmarquee', function (msg) {
            var marqueTpl = '<div class="chest-accom"><div class="chest-accom-img"><img src="' + msg.player_info.avatar2 + '" alt="' + msg.player_info.nickname + '"></div><div class="chest-accom-txt"><p>' + msg.config.msgtxt + '</p><br/></div><a href="/' + msg.player_info.uuid + '" class="chest-handle"></a></div>';

            activeBridge.marquee.showmsg($(marqueTpl));
        });

        _this.bindEvent();
    },

    // 刷新
    refresh: function () {
        ajax({
            url: CONSTANT.ACTIVEDOMAIN + '/caller',
            type: 'GET',
            dataType: 'jsonp',
            data: {
                c: 'redpacket',
                a: 'info',
                playerId: activeBridge.roomInfo.userid
            }
        });
    },

    // 渲染活动主体
    render: function () {

    },

    bindEvent: function () {

    }
};

page.init();
module.exports = page;
