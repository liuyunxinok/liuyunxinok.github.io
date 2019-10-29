function jump(index){
    index -= 1;
    let link = links[index];
    window.open(link); 
}

var titles = [
    'IAP内购',
    'LYXAreaPicker',
    'iPhoneXs iPhoneXs Max iPhoneXr 界面适配',
    '推送-个推的使用总结',
    '自定义UIAlertController样式之YXAlertController',
    '获取用户位置信息-LYXLocationManager',
    'iOS界面调试工具之Reveal'
];
var contents = [
    '由于公司业务的扩展, 第三方的支付已不能通过苹果爸爸的审核, 所以最近两天搞了下Apple IAP, 从银行税务的填写, 到内购商品的添加, 再...',
    '在项目开发中，选择地区的场景很常见，为了方便使用，从项目中摘出了最近写的地址选择控件LYXAreaPicker, 此控件采用本地json解析的方...',
    '由上图可见 iPhoneXs 的屏幕尺寸和去年的iPhoneX是一样的，所以今年不需要做特殊处理。主要处理下后面的两款新的尺寸机型： 去年适配的...',
    '然后注册远程推送，顺序不能反！ 5、在注册成功的方法中处理一下苹果返回的deviceToken,去掉两端的尖括号和中间的空格 6、注册clien...',
    '前言： 前段时间，项目中要使用一个按钮背景为黄色的弹框样式，然后title字体和message字体的大小和颜色也需要调整。由于系统UIAlert...',
    '背景 在我们使用app的过程中，很普遍的见到请求我们所在的位置信息，用来匹配附近，同城的展示信息。为以后重复造轮子，方便使用，抽出来封装了LYX...',
    '前言:Reveal是一个iOS程序界面调试工具，它能够在应用程序运行过程中调试应用程序界面。通过Reveal我们可以连接到应用程序，并允许开发者...'
];
var links = [
    'https://www.jianshu.com/p/af3b6ade07ab',
    'https://www.jianshu.com/p/33385afdc2d0',
    'https://www.jianshu.com/p/8d1d02a21d67',
    'https://www.jianshu.com/p/2993d9f9d329',
    'https://www.jianshu.com/p/5f5519cb9157',
    'https://www.jianshu.com/p/1889f69a7857',
    'https://www.jianshu.com/p/56af7a05aca0'
];
/*
<ul>
            <li>
                    <span class="spanTitle">IAP内购</span>
                    <span class="spanContent">由于公司业务的扩展, 第三方的支付已不能通过苹果爸爸的审核, 所以最近两天搞了下Apple IAP, 从银行税务的填写, 到内购商品的添加, 再到客户端的接入, 最后服务端校验, 写点东西, 记录一下心得体会.</span>
                    <button class="aButton" type="button" onclick="jump('https\:\/\/www.jianshu.com/p/af3b6ade07ab')">点击查看</button>
            </li>
        </ul>
*/

function getTitle(index){
    return titles[index];
}

function getContent(index){
    return contents[index];
}

function getLink(index){
    return links[index];
}

function showData(){
    for(let i = 0; i < titles.length; i++){
        let title = titles[i];
        let content = contents[i];
        let link = links[i];
        let index = i + 1;
        document.getElementById('title'+index).innerHTML = title;
        document.getElementById('title'+index).href = link;
        document.getElementById('content'+index).innerHTML = content;
    }
}


// function showData(){
//     document.write('<ul>');
//     for(let i = 0; i < titles.length; i++){
//         let title = titles[i];
//         let content = contents[i];
//         let link = links[i];
//         document.write('<li>')
//         document.write('<span class="spanTitle">'+title+'</span>');
//         document.write('<span class="spanContent">'+content+'</span>');
//         document.write('<button class="aButton" type="button" onclick="jump("'+link+'")">点击查看</button>');
//     }
//     document.write('</ul>');
// }

