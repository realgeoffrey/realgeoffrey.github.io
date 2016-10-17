var globalObj = {
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

    init: function () {
        var self = this;

        self.SnifBrowserObj = new self.SnifBrowser();
    }
};

globalObj.init();