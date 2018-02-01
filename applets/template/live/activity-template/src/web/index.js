var gConfig = require('activity-common/gConfig.js');

gConfig.init({
    isApp: false,   // false
    isLogin: require('activity-common/userLogin.js').isLogin(),
    inRoom: false,  // 手动设置
    ACT_ID: 'act18',
    SERVER_ACT_ID: '',
    report_category: '',
    ACT_GIFT: {
        name: '',
        id: ''
    }
});

var init = require('../common/index');
init();
