var $ = require('lib/jquery.js');
var tpl = require('./tpl/entry.tpl');

window.onUpdateData = function (data) {
    // 消息中的content等于data.activity_info

    //安卓
    data = data.replace(/"{/g, '{').replace(/\}"/g, '}');

    data = JSON.parse(data).activity_info;

    var value = parseInt(data.levelInfo[1].value, 10);    // 总数
    var count = parseInt(data.levelInfo[1].count, 10);    // 点数
    var percent;    // 进度百分比
    if (value === 0) {
        percent = '0%';
    } else {
        if (count % value === 0 && count !== 0) {
            percent = '100%';
        } else {
            percent = count % value / value * 100 + '%';
        }
        if (data.currentLevel == 6) {
            if (count % value !== 0 || count === 0) {
                count = count % value;
            } else {
                count = value;
            }
        }
    }

    $('#j-wrap-in').html(tpl({
        name: data.levelInfo[1].name, // 关卡名
        level: data.currentLevel, // 所在关卡
        value: value, // 总数
        count: count, // 点数
        percent: percent,   // 进度百分比
        score: data.rankInfo.score,    // 爱意值
        rank: data.rankInfo.rank,  // 排名
        prev: data.rankInfo.prev  // 距上一名
    }));
};

// 测试
// window.onUpdateData({
//    'playerId': '577391899', 'roomId': '426_577391899',
//    'rankInfo': {    //总榜排名
//        'score': 123123,   //当前的爱意值
//        'rank': '11', //名次
//        'prev': 22,
//        'next': 9390
//    },
//    'actId': 125,
//    'currentLevel': 6,   //当前关卡
//    'levelInfo': [{   //关卡信息
//        '1': {   //第一小关
//            'value': 100,   //完成这一关需要的礼物数（或者爱意值）
//            'count': 150,    //完成的数量
//            'isCompleted': 0,    //是否完成
//            'name': '关卡名字'   //关卡名字
//        }
//    }]
// });
