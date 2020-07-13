require.config({
   paths: {
     "marked": "lib/node_modules/marked/marked.min",
   }
 });
require(['marked'], function (markedSetCustom){

//    alert('add marked');
    var marked = require('marked');
    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
    });

    console.log(marked('I am using __markdown__.'));
    addhtmlapp();
 });

//readFile = function (fileName, callback) {
//  var xhr = new XMLHttpRequest();
//  xhr.open('GET', fileName);
//  xhr.onload = function () {
//    if (xhr.responseText != '') {
//      callback(xhr.responseText);
//    }
//  };
//  xhr.send();
//};

function qt_jumpApp(appName)
{
    appName = appName.trim()
    if(appName.search("/") > 0)
    {
        if(appName.indexOf("/") == 0){
            appName = appName.slice(1,appName.length)
        }
        var list = appName.split("/")
        if(list.length == 2){
            onclickButton(list[0])
            $(document).ready(function(){
                switch (list[1]){
                    case "cheese":
                        document.getElementById("list_h1").click()
                        break;
                    case "mate-calc":
                        document.getElementById("list_h4").click()
                        break;
                    case "goseditmainmenu-53":
                        document.getElementById("list_h7").click()
                        break;
                    case "onboard":
                        document.getElementById("list_h9").click()
                        break;
                    case "mate-search-tool":
                        document.getElementById("list_h13").click()
                        break;
                    case "sharing-desktop":
                        document.getElementById("list_h16").click()
                        break;
                    case "blueman-manager":
                        document.getElementById("list_h21").click()
                        break;
                    case "indicator-china-weather":
                        document.getElementById("list_h25").click()
                        break;
                    default:
                        break;
                }
            });
        }    
    }
    else
        onclickButton(appName);
}

var date ={
    audacious:"2020年7月8日",
    audio_recorder:"2020年7月8日",
    biometric_manager:"2020年7月8日",
    box_manager:"2020年7月8日",
    brasero:"2020年7月8日",
    caja:"2020年7月8日",
    claws_mail:"2020年7月8日",
    engrampa:"2020年7月8日",
    eom:"2020年7月8日",
    faq:"2020年7月8日",
    filezilla:"2020年7月8日",
    gparted:"2020年7月8日",
    hot_key:"2020年7月8日",
    ksc_defender:"2020年7月8日",
    kybackup:"2020年7月8日",
    kydroid:"2020年7月8日",
    kylin_control_center:"2020年7月8日",
    kylin_ipmsg:"2020年7月8日",
    kylinOS:"2020年7月8日",
    kylin_video:"2020年7月8日",
    kysec_ui_pkexec:"2020年7月8日",
    mate_system_monitor:"2020年7月8日",
    mate_terminal:"2020年7月8日",
    remmina:"2020年7月8日",
    simple_scan:"2020年7月8日",
    technical_assistance:"2020年7月8日",
    tools:"2020年7月8日",
    ubiquity:"2020年7月8日",
    ubuntu_kylin_software_center:"2020年7月8日", 
    ukui:"2020年7月8日",
    youker_assistant:"2020年7月8日",
};

function onclickButton(str)
{
//    alert(str)
    //console.log(str+"======"+window.pageYOffset);
    document.getElementById("mainUI").style.display="none";
    document.getElementById("pageContent").style.display="inline";

    var mdPath = window.guideWebkit.js_getIndexMdFilePath(str)
    var mdDate = window.guideWebkit.js_getIndexMdFileContent(mdPath)
    //console.log(str,mdPath);
//    alert(mdDate)
    var m2ht = getDocTop(mdPath,mdDate)
    var html = m2ht.html
    var hlist = m2ht.hlist
    var info = m2ht.info
    //console.log(html);
    //console.log("--------------------------------------hlist");
    //console.log(hlist);
    //console.log("--------------------------------------info");
    //console.log(info);
    var hlist_str = "";
    for (i = 0; i < hlist.length; i++) {
        /*name_text=hlist[i].text.slice(hlist[i].text.indexOf(" "),hlist[i].text.length);
        console.log(hlist[i].type+"======"+name_text);
        if(hlist[i].type == "h1")
            hlist_str +=  "<h1>\n" + "<a id=" + "list_"+hlist[i].id + " href=\'#" +hlist[i].id + "\'>" + name_text + "</a> \n</h1>" ;
        else if(hlist[i].type == "h2")
            hlist_str +=  "<h2>\n" + "<a id=" + "list_"+hlist[i].id + " href=\'#" +hlist[i].id + "\'>" + name_text + "</a> \n</h2>" ;
        else if(hlist[i].type == "h3")
        {
            hlist_str +=  "<h3>\n" + "<a id=" + "list_"+hlist[i].id + " href=\'#" +hlist[i].id + "\'>" + name_text + "</a> \n</h3>" ;
            console.log(hlist_str);
        }*/
        var pattren=/[0-9]/;
        var name_text= "";
        for( j=0;j<hlist[i].text.length;j++)
        {
            if(hlist[i].text[j] != "."&&!pattren.test(hlist[i].text[j]))
            {
                name_text+=hlist[i].text[j];
            }
        }
        //console.log(hlist[i].type+"======"+name_text);
        if(hlist[i].type == "h1")
            hlist_str +=  "<dt>\n" + "<a class='name1' id=" + "list_"+hlist[i].id + " href=\'#" +hlist[i].id + "\'>" + name_text + "</a> \n</dt>" ;
        else if(hlist[i].type == "h2")
            if(name_text.length >12 )
            {
                hlist_str +=  "<dt>\n" + "<a class='name2' style='line-height:20px;' onclick=onclickA('list_"+hlist[i].id+"')"+" id=" + "list_"+hlist[i].id + " href=\'#" +hlist[i].id + "\'>" + name_text + "</a> \n</dt>" ;
            }
            else
            {
                hlist_str +=  "<dt>\n" + "<a class='name2'  onclick=onclickA('list_"+hlist[i].id+"')"+" id=" + "list_"+hlist[i].id + " href=\'#" +hlist[i].id + "\'>" + name_text + "</a> \n</dt>" ;
            }
        else if(hlist[i].type == "h3")
        {
            //console.log(name_text.length);
            if(name_text.length >12)
            {
                hlist_str +=  "<dt>\n" + "<a class='name3' style='line-height:20px;' onclick=onclickA('list_"+hlist[i].id+"')"+" id=" + "list_"+hlist[i].id + " href=\'#" +hlist[i].id + "\'>" + name_text + "</a> \n</dt>" ;
            }
            else
            {
                hlist_str +=  "<dt>\n" + "<a class='name3' onclick=onclickA('list_"+hlist[i].id+"')"+" id=" + "list_"+hlist[i].id + " href=\'#" +hlist[i].id + "\'>" + name_text + "</a> \n</dt>" ;
            }
            //console.log(hlist_str);
        }   
     }
     hlist_str = "<dl>" + hlist_str + "</dl>";
 //   console.log(hlist_str);

    str_name = str.replace(/-/g,"_");
    if(navigator.language=="zh-CN")
    {
        var update="更新时间："
        var goTop="返回顶部"
        var Data=date[str_name]
    }
    else
    {
        var update="Update："
        var goTop="Go Top"
        var Data=date[str_name].replace(/[\u4e00-\u9fa5]/g,".")
        Data=Data.slice(0,Data.length-1)
    }
    //console.log(str+"=============="+str_name+"======="+date[str_name]);
    html_new = "<h1><a name='paga_top'>"+info.title+"</a></h1>"
                                +"<p  class='date' style='text-indent: 0px;'>"
                                +update
                                +Data
                                +"</p>"
                                +"<HR style='margin-bottom: 34px;margin-top: 10px'>"
                                +html
                                +"<HR style='margin-top: 20px'>"
                                +"<div class='paga_top' >"
                                +"<img src='file:////usr/share/kylin-user-guide/data/icon-go-top.png' "+"/>"
                                +"<a style='text-decoration: none;'onclick=onclickA('') href='#paga_top'>"
                                +goTop
                                +"</a>"
                                +"</div>"
                                //+"<div id='top'>"
                                //+"<img src='file:////usr/share/kylin-user-guide/data/go-top.png' "+"/>"
                                //+"</div>"

    document.getElementById("hlist").innerHTML = hlist_str
    document.getElementById("content").scrollTop = 0;
    document.getElementById("content").innerHTML = html_new
    

}

/*function main()
{
    //setLanguage();
    addhtmlapp();
}

function setLanguage()
{
    if(navigator.language=="en-US")
    {
        document.getElementById("plateSystem").innerHTML="System"
    }
}*/

function getapp_name(qpp)
{
    var dirforapp
    var mdPath = window.guideWebkit.js_getIndexMdFilePathOther(qpp)
    //console.log(qpp)
    var mdDate = window.guideWebkit.js_getIndexMdFileContent(mdPath)
    //console.log(mdPath)
    if(navigator.language=="zh-CN")
    {
        if(mdPath.search("/guide/")>0)
        {
            dirforapp="guide"
        }
        else if(mdPath.search("/guide-ubuntukylin/")>0)
        {
            dirforapp="guide-ubuntukylin"
        }  
        var info = window.guideWebkit.js_getIndexMdFileTitle(mdPath)
        //console.log(info+"======"+qpp)
        if(info.search("帮助手册")<0)
        {
            return info+"|"+dirforapp;
        }
        else
        {
            //console.log(info.title.slice(0,info.title.search("帮助手册")))
            return info.slice(0,info.search("帮助手册"))+"|"+dirforapp
        }
    }
    else
    {
        if(mdPath.search("/guide/")>0)
        {
            dirforapp="guide"
        }
        else if(mdPath.search("/guide-ubuntukylin/")>0)
        {
            dirforapp="guide-ubuntukylin"
        }
        return dirforapp
    }
}

function addhtmlapp()
{
    var test=window.guideWebkit.js_getIntoFilename();
    for(i=0;i<test.length;i++)
    {
        var dirname=test[i].slice(0,test[i].indexOf("|"))
        var pngname=test[i].slice(test[i].indexOf("|")+1,test[i].length)
        if(dirname=="software-compatibility"||dirname=="technical-assistance"
           ||dirname=="kylinOS"||dirname=="ukui"||dirname=="ukui-control-center"
           ||dirname=="biometric-manager"||dirname=="hot-key"
           ||dirname=="hardware-compatibility"
           ||dirname=="kylin-control-center"||dirname=="faq"
           ||dirname=="ubiquity"||dirname=="kydroid")
        {
            continue
        }
        else
        {
            if(navigator.language=="zh-CN")
            {
                var NameAndDir=getapp_name(dirname);
                var realname=NameAndDir.slice(0,NameAndDir.indexOf("|"));
                var dir=NameAndDir.slice(NameAndDir.indexOf("|")+1,NameAndDir.length)
            }
            else
            {
                var NameAndDir=getapp_name(dirname);
                var dir=NameAndDir
                realname=dirname.replace(dirname[0],dirname[0].toUpperCase())
                while(realname.search("-") !== -1)
                {
                    realname=realname.replace(realname[realname.indexOf("-")+1],realname[realname.indexOf("-")+1].toUpperCase())
                    realname=realname.replace("-"," ")
                }
            }
            var element=document.getElementById("app");
            var para=document.createElement("div")
            var node1=document.createElement("br")
            var node2=document.createElement("img")
            var node3=document.createElement("span")
            var apptext=document.createTextNode(realname)
            var attr=document.createAttribute("onclick")
            attr.value="onclickButton('"+dirname+"')"
            node3.appendChild(apptext)
            node3.style.lineHeight="10px"
            node2.src="file:////usr/share/kylin-user-guide/data/"+dir+"/"+dirname+"/"+pngname+""
            node2.alt=dirname
            para.id="user";
            para.style.marginLeft="25px";
            para.className="system-app";
            //para.onclick(onclickButton('biometric-manager'))
            para.setAttributeNode(attr)
            para.appendChild(node2)
            para.appendChild(node1)
            para.appendChild(node3)
            element.appendChild(para)
        }
    }
}

function goBackMainUI()
{
    //alert(str)
    //console.log(str)
    //document.getElementById("mainUI").style.display="inline";
    //document.getElementById("pageContent").style.display="none";
    if(navigator.language=="zh-CN")
	window.location.href="index.html"
    else
	window.location.href="index_en_US.html"
}

function goBackMainUI_ubuntu()
{
    window.location.href="index-ubuntukylin.html"
}

var arrows_div={
    system:0,
    app:0,
    support:0,
}

var  arrows_png={
    button1:0,
    button2:0,
    button3:0,
}

function change_arrows(button_name)
{
    if(arrows_png[button_name] == 0)
    {
        document.getElementById(button_name).style.backgroundImage="url("+"/usr/share/kylin-user-guide/data/arrows_right.png"+")";
        document.getElementById(button_name).style.backgroundSize="20px 20px";
        arrows_png[button_name]=1;
        return
    }
    if(arrows_png[button_name] == 1)
    {
        document.getElementById(button_name).style.backgroundImage="url("+"/usr/share/kylin-user-guide/data/arrows_bottom.png"+")";
        document.getElementById(button_name).style.backgroundSize="20px 20px";
        arrows_png[button_name]=0;
        return
    }
}

function onclickarrows(str)
{
    //console.log(str)
    if(str == 'system') 
    {
        if(arrows_div[str] == 0)
        {
            document.getElementById(str).style.display="none"
            arrows_div.system=1;
        }
        else
        {
            document.getElementById(str).style.display="inline"
            arrows_div.system=0; 
        }
    }
    else if(str == 'app')
    {
        if(arrows_div[str] == 0 )
        {
            document.getElementById(str).style.display="none"
            arrows_div.app=1;
        }
        else
        {
            document.getElementById(str).style.display="inline"
            arrows_div.app=0;
        }
    }
    else if(str == 'support')
    {
        if(arrows_div[str] == 0 )
        {
            document.getElementById(str).style.display="none"
            arrows_div.support=1;
        }
        else
        {
            document.getElementById(str).style.display="inline"
            arrows_div.support=0;
        }
    }
       
}

var old_str="";
function onclickA(str)
{
     //console.log(old_str,str) 
     if(old_str != "")
     {
        document.getElementById(old_str).style.backgroundColor="rgb(231,231,231)" 
        document.getElementById(old_str).style.color="black"
     }
     if(str != "")
     {
        document.getElementById(str).style.backgroundColor="#3D6BE5"
        document.getElementById(str).style.color="white"
        old_str = str
    }
    if(str == "")
    {
        document.getElementById("hlist").scrollTop = 0;
    }
}

/*function getDocTop_simple(mdFile, mdData)
{
    var info = {};
    var path = mdFile.slice(0, mdFile.lastIndexOf('/') + 1);
    var renderer = new marked.Renderer();
}*/

function getDocTop(mdFile, mdData) {
    var hlist = [];
    var info = {};
    var html = '';

    var path = mdFile.slice(0, mdFile.lastIndexOf('/') + 1);
    var count = 0;
    var renderer = new marked.Renderer();
    renderer.heading = function (text, level){
        var id = 'h' + count;
        count++;
        if (level == 1) {
            var title = text.split('|')[0];
            var logo = text.split('|')[1];
            logo = path + logo;
            //console.log(logo);
            info = { "title":title, "logo":logo };
            return "";
        }
        if (level == 2) {
            text = text.split('|')[0];
            //console.log(text);
        }
        var type = 'h' + level;
        if (level == 2 || level == 3) {
            hlist.push({ "id":id, "text":text, "type":type });
            //console.log(id);
            //console.log(text);
            //console.log(type);
        }
            return "<"+ type + " id="+   id + " text=" +text + " class='html_h5'>" + text + "</"+ type + ">\n";
    };

    renderer.image = function(href, title, text){
        var hrefX2 = href;
        //console.log(hrefX2);
        if (devicePixelRatio >= 1.5 && href.indexOf('.svg') == -1) {
            var path = href.split('.');
            var ext = path.pop();
//            hrefX2 = `${path.join('.')}x2.${ext}`;
            hrefX2 =  path.join('.')+ "x2." + ext;
        }
        if (text == "")
//            return `<img src="${hrefX2}" data-src="${href}" alt="${text}" />`;
            return '<img src=\"' + hrefX2 + '\" data-src=\"'+ href + '\" alt=' + text +  '/>';
        else{
            if(text.lastIndexOf("-big") < 0 ){
//                return `<h5  style="text-align: center;"><img src="${hrefX2}" data-src="${href}" alt="${text}" /><br>${text}</h5>`;
                return '<h5  style="text-align: center;font-family: Noto Sans SC; font-size: 10px;color=#333333;"><img src=\"' + hrefX2 + '\" data-src=\"' + href + '\" alt=' + text + '/><br> ' + text + '</h5>';
            }
            else{
                text1=text.slice(0,text.lastIndexOf("-big"))
//路径需要用双引号，单引号无法解析相对路径
//                return `<h5 style="text-align: center;"><img  style="height:98%;width:98%;" src="${hrefX2}" data-src="${href}" alt="${text}" /><br>${text1}</h5>`;
                return '<h5 style="text-align: center;font-family: Noto Sans SC; font-size: 10px;color=#333333;"><img  style="height:98%;width:98%;" src=\"' + hrefX2 + '\" data-src=\"' + href + '\" alt='+ text +'/><br>' + text1 + '</h5>';
            }
        }
    };
    renderer.table = function(header,body){
        //console.log(header,body)
        if (body) body = '<tbody>' + body + '</tbody>';
        return '<div align="center"style="font-family:Noto Sans SC;font-size: 12px;"><table border=black cellspacing="0" width="90%">\n'
        + '<thead>\n'
        + header
        + '</thead>\n'
        + body
        + '</table>\n</div>';
    }
    html = marked(mdData, { "renderer":renderer }).replace(/src="/g, '$&'+path);
    return { "html":html, "hlist":hlist, "info":info };
}
