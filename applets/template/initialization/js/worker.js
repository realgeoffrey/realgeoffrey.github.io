//importScripts('test.js');

onmessage = function (e) {
    postMessage('worker接收到内容：' + e.data);
};

//self.close();