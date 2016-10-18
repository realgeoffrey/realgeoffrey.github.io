/* 通用方法*/
var generalObj = {
    SnifBrowser: function () {
        var self = this;

        self.isWebkit = false;
        self.isSafari = false;
        self.isIOS = false;
        self.isIpad = false;
        self.isIphone = false;
        self.isAndroid = false;
        self.isMobile = false;
        self.isWechat = false;
        self.device = '';
        self.version = '';
        self.standalone = '';

        var _init = function () {
            var navigator = window.navigator,
                userAgent = navigator.userAgent,
                ios = userAgent.match(/(iPad|iPhone|iPod)[^;]*;.+OS\s([\d_\.]+)/),
                android = userAgent.match(/(Android)[\s|\/]([\d\.]+)/);

            self.isWebkit = /WebKit\/[\d.]+/i.test(userAgent);
            self.isSafari = ios ? (navigator.standalone ? self.isWebkit : (/Safari/i.test(userAgent) && !/CriOS/i.test(userAgent) && !/MQQBrowser/i.test(userAgent))) : false;

            if (ios) {
                self.device = ios[1];
                self.version = ios[2].replace(/_/g, '.');
                self.isIOS = (/iphone|ipad|ipod/i).test(navigator.appVersion);
                self.isIpad = userAgent.match(/iPad/i) || false;
                self.isIphone = userAgent.match(/iPhone/i) || false;
            } else if (android) {
                self.device = android[1];
                self.version = android[2];
                self.isAndroid = (/android/i).test(navigator.appVersion);
            }

            self.isMobile = self.isAndroid || self.isIOS;
            self.standalone = navigator.standalone || false;
            self.isWechat = userAgent.indexOf("MicroMessenger") >= 0;
        };

        _init();
    },
    fourOperations: {
        add: function (arg1, arg2) {    /* 加*/
            var r1, r2, m, c, cm,
                int1 = Number(arg1.toString().replace('.', '')),
                int2 = Number(arg2.toString().replace('.', ''));

            try {
                r1 = arg1.toString().split('.')[1].length;
            } catch (e) {
                r1 = 0;
            }
            try {
                r2 = arg2.toString().split('.')[1].length;
            } catch (e) {
                r2 = 0;
            }

            c = Math.abs(r1 - r2);
            m = Math.pow(10, Math.max(r1, r2));

            if (c > 0) {
                cm = Math.pow(10, c);

                if (r1 > r2) {
                    int2 = int2 * cm;
                } else {
                    int1 = int1 * cm;
                }
            }

            return (int1 + int2) / m;
        },
        sub: function (arg1, arg2) {    /* 减*/

            return this.add(arg1, -arg2);
        },
        mul: function (arg1, arg2) {    /* 乘*/
            var m;

            try {
                m = arg1.toString().split('.')[1].length;
            } catch (e) {
                m = 0;
            }
            try {
                m = m + arg2.toString().split('.')[1].length;
            } catch (e) {

            }

            return Number(arg1.toString().replace('.', '')) * Number(arg2.toString().replace('.', '')) / Math.pow(10, m);
        },
        div: function (arg1, arg2) {    /* 除*/
            var r1, r2;

            try {
                r1 = arg1.toString().split('.')[1].length;
            } catch (e) {
                r1 = 0;
            }
            try {
                r2 = arg2.toString().split('.')[1].length;
            } catch (e) {
                r2 = 0;
            }

            return (Number(arg1.toString().replace('.', '')) / Number(arg2.toString().replace('.', ''))) * Math.pow(10, r2 - r1);
        }
    },

    init: function () {
        var self = this;

        self.SnifBrowserObj = new self.SnifBrowser();
    }
};

generalObj.init();