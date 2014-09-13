//  Copyright (c) 2011 QuinStreet Inc. All Rights Reserved.
//  prod:49
function N2(){
zzPage_obj.zzGeo=zzPage_obj['cookies']['qsg'];
zzPage_obj.zzCountry=parseInt(U2(zzPage_obj.zzGeo));
zzPage_obj.zzState=parseInt(N3(zzPage_obj.zzGeo));
zzPage_obj.zzMetro=parseInt(F3(zzPage_obj.zzGeo));
zzPage_obj.zzFlash=(zzPage_obj['cookies']['QUADIDX']& 0x8);
zzPage_obj.zzFlashVersion=4+((zzPage_obj['cookies']['QUADIDX']& 0x70)>>4);
zzPage_obj.zzUserAgent=navigator.userAgent.toLowerCase();
zzPage_obj.zzIsMac=(zzPage_obj.zzUserAgent.indexOf('mac')!=-1);
zzPage_obj.zzIsOpera=(zzPage_obj.zzUserAgent.indexOf('opera')!=-1);
zzPage_obj.zd_inject_params=U8();
}
function N9(){
if(zzPage_obj['cookies']['QIDA'].indexOf('OPT_OUT')==-1){
if((zzPage_obj['cookies']['qsg']==254)||(!('qsgr' in zzPage_obj['cookies']))){
N0('qsgr','1',2592000000);
if(typeof zz_in_ihtml!='undefined'){
var g9=F0('g',false);
N0('qsg',g9,2592000000);
zzPage_obj['cookies']['qsg']=g9;
}
else{
document.write("<SC"+"RIPT LANGUAGE='JavaScript' SRC='http://o1.qnsr.com/init/"+Math.random()+"/g.js'><\/SCR"+"IPT>");
}}
if(zzPage_obj['cookies']['QUADIDX']==0||(!('qidxr' in zzPage_obj['cookies']))){
N0('qidxr','1',2592000000);
if(typeof zz_in_ihtml!='undefined'){
var k6=F0('x',false);
N0('QUADIDX',k6,2592000000);
zzPage_obj['cookies']['QUADIDX']=k6;
zzPage_obj.d0=k6;
}
else{
if(document.all&&!zzPage_obj.zzIsMac&&!zzPage_obj.zzIsOpera){
zzPage_obj.d0=U3();
}
else{
zzPage_obj.d0=U4();
}
N0('QUADIDX',zzPage_obj.d0,2592000000);
zzPage_obj['cookies']['QUADIDX']=zzPage_obj.d0;
}}}}
function U1(){
var k0=document.cookie;var y1=new Array();var t2=new Array();
zzPage_obj['cookies']=new Array();
if(!('qsg' in zzPage_obj['cookies'])){zzPage_obj['cookies']['qsg']=254;}
if(!('QUADIDX' in zzPage_obj['cookies'])){zzPage_obj['cookies']['QUADIDX']=0;}
if(!('QIDA' in zzPage_obj['cookies'])){zzPage_obj['cookies']['QIDA']="";}
y1=k0.split(';');
var v9=(y1!=null)?y1.length:0;
for(var i=0;i<v9;i++){
y1[i]=y1[i].replace(/^\s/,'');
t2=y1[i].split('=');
if(t2&&t2.length==2){
zzPage_obj['cookies'][t2[0]]=t2[1];
}}}
function N6(r2,v6){
if(v6){
U1();
}
if(r2 in zzPage_obj['cookies']){return zzPage_obj['cookies'][r2];}
else{return '';}
}
function N0(b1,g5,m3){
if(document.cookie.indexOf('OPT_OUT')==-1){
var t3=new Date();var m0;
if(typeof m3=='undefined'||m3==-1){
m0="Thu,01-Jan-1970 00:00:01 GMT";
}
else{
t3.setTime(t3.getTime()+m3);
m0=t3.toGMTString();
}
document.cookie=b1+'='+g5+';expires='+m0+';path=/;';
zzPage_obj['cookies'][b1]=g5;
}}
function zzChkFCapCookie(b6,v3,b1){
var g0;var k0=N6(b1,true);var i;var v0;var f2=0;var f1=new Date();
if(k0!=""){
g0=k0.split(":");
for(i=0;i<g0.length;i++){
v0=g0[i].split(",");
if(v0[0]==b6){
f2=1;
if(f1.valueOf()<v0[2]&&v3>v0[1]){
return 1;
}
else{
return-1;
}}}}
if(!f2){
return 0 
}}
function zzSetFCapCookie(t5,y5,r5,v3,b1){
var f1=new Date();var k0;var g0;var f2=0;var r1=0;var i3=1000 * 60 * 60 * 24 * r5;var m0=new Date(f1.valueOf()+i3);var i;var v2="";var v0;var t0;
v0=t5+""+y5;
var m2=0;
k0=N6(b1,true);
var b9=F6(k0);
if(k0!=b9){
k0=b9;
m2=1;
}
if(k0!=""){
g0=k0.split(":");
for(i=0;i<g0.length;i++){
if(g0[i]!=""){
t0=g0[i].split(",");
if(t0[0]==v0){
f2=1;
v2+=v0+","+(parseInt(t0[1])+1)+","+m0.valueOf()+":";
m2=1;
}
else{
v2+=g0[i]+":";
}}}
r1=N7(k0);
}
if(!f2){
v2+=v0+",1,"+m0.valueOf()+":";
m2=1;
}
if(r1<m0.valueOf()){
i3=m0.valueOf()-f1.valueOf();
}
if(m2){
N0(b1,v2,i3);
}}
function F6(d3){
var g0;var i;var t0;var f1=new Date();var k0="";
if(d3!=""){
g0=d3.split(":");
for(i=0;i<g0.length;i++){
t0=g0[i].split(",");
if(t0[2]>=f1.valueOf()){
k0+=g0[i]+":";
}}}
return k0;
}
function N7(d3){
var g0;var i;var t0;var r1=0;
g0=d3.split(":");
for(i=0;i<g0.length;i++){
t0=g0[i].split(";");
if(t0[3]>r1){
r1=t0[2];
}}
return r1;
}
function N4(t6){
var f3=t6.toString().match(/function\s+(\w*)/)[1];
if((f3==null)||(f3.length==0)){
return "anonymous();";
}
else{
return f3+"();";
}}
function F5(){
var m5="";
for(var a=arguments.caller;a!=null;a=a.caller){
m5+=N4(a.callee);
if(a.caller==a)break;
}
return m5;
}
function F2(){
var d1="";var f3="anonymous();";var b5=0;
window.onerror=null;
for(var i=0;i<arguments.length;i++){
d1+='a'+i+'='+arguments[i]+';';
if(i==2){
b5=escape(arguments[i]);
}}
d1=F5()+d1;
if(navigator.cookieEnabled){
d1=d1+'c='+navigator.cookieEnabled+';';
}
d1=d1+"C="+document.cookie+";";
if(document.cookie.indexOf('QUADERROR')==-1){
var zzQTobj=new Object();
N0('QUADERROR',b5,259200000,zzQTobj);
var y6=new Image();
y6.src='http://l1.cdn.qnsr.com/log/ERR.gif?v=./ar/lite/e1/v49/;'+d1+'b='+navigator.userAgent+';'+Math.random();
}
return true;
}
function U2(i2){
return i2 & 255;
}
function F3(i2){
return(i2>>14)& 1023;
}
function N3(i2){
return(i2>>8)& 63;
}
function zzIndexOfList(ll,obj){
for(var i=0;i<ll.length;i++){
if(ll[i]==obj){
return i;
}}
return-1;
}
function U3(){
var d0=1;
zzPage_obj.f4=0;
document.writeln('<SCR'+'IPT LANGUAGE="VBS'+'cript">');
document.writeln('on error resume next\n');
document.writeln('For i=4 to 11');
document.writeln('If Not(IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash." & i)))Then');
document.writeln('Else');
document.writeln('zzPage_obj.f4=i');
document.writeln('End If');
document.writeln('Next');
document.writeln('</scr'+'ipt>');
if(navigator.javaEnabled()){d0 |=2;}
if(zzPage_obj.f4>=4){
d0 |=((zzPage_obj.f4-4)<<4);
d0 |=8;
}
return d0;
}
function U4(){
var f4=0;var d0=1;
if(navigator.mimeTypes&&navigator.mimeTypes["application/x-shockwave-flash"]&&
navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){
if(navigator.plugins&&navigator.plugins["Shockwave Flash"]){
var i7=navigator.plugins["Shockwave Flash"].description;
try{
f4=i7.match(/(\d+)\./)[1];
}
catch(e1){
}}}
if(navigator.javaEnabled()){d0 |=2;}
if(f4>=4){
d0 |=((f4-4)<<4);
d0 |=8;
}
return d0;
}
var y0='';
function zzrnd(ii){
return(Math.floor((Math.random()* 10000000000006)% ii));
}
function F1(y0){
var y3='';var f10='';var k3='';var b3=y0.split(':');
zzChosenCamps='';
zzChosenComp='';
zzChosenAds='';
zzRndCamp=0;
if(b3.length==3){
k3=b3[0];
if(k3!=''){
zzChosenCamps=k3.split('~');
zzRndCamp=parseInt(Math.random()* zzChosenCamps.length);
}
zzChosenComp=b3[1];
y3=b3[2];
if(y3!=''){
zzChosenAds=y3.split('~');
}}}
var d7=new Array();var d6=0;var b7=0;
function F0(r2,b10){
if(d6<1||b10){
var g4=''+window.location.search;var d4=new Array();var k10='';var v10='';
g4=g4.replace(/^\?/,'');
if(r2=='l'){
var k8="";
b7=g4.indexOf(";l=http");
if(b7!=-1){
k8=g4.substring(b7+3,g4.length);
d6=0;
}
return k8;
}
else{
d4=g4.split(';');
d6=d4.length;
for(var i=0;i<d6;i++){
if(d4[i].length>2){
k10=d4[i].split('=');
d7[d4[i].substring(0,1)]=d4[i].substring(2,d4[i].length);
}}}}
if(d7[r2]){return d7[r2];}
else{return '';}
}
function U8(){
var k4;var y8='';
if(document.all){
k4=document.all.tags('meta');
}
else if(document.documentElement){
k4=document.getElementsByTagName('meta');
}
if(typeof(k4)!='undefined'){
var i9=k4.length;
for(var i=0;i<i9;i++){
var m8=k4.item(i).name;
if((m8.length>0)&&(m8.match(/^inject_params/))){
var i8=k4.item(i).content;
i8.replace(/&/g,';');
y8=i8;
break;
}}}
return y8;
}
var zzBrowserDetect={
init:function(){
if(!this.alreadyLookedup){
this.zzbrowser=this.searchString(this.dataBrowser)||"An unknown browser";
this.zzversion=this.searchVersion(navigator.userAgent)
||this.searchVersion(navigator.appVersion)
||"an unknown version";
var str=''+this.zzversion;
this.zzbrowser=this.zzbrowser+" "+str.replace(/(\d*).*/,'$1.x');
this.zzOS=this.searchString(this.dataOS)||"an unknown OS";
this.alreadyLookedup=1;
}
},
searchString:function(data){
for(var i=0;i<data.length;i++){
var v4=data[i].string;var y9=data[i].prop;
this.versionSearchString=data[i].versionSearch||data[i].identity;
if(v4){
if(v4.indexOf(data[i].subString)!=-1)
return data[i].identity;
}
else if(y9)
return data[i].identity;
}
},
searchVersion:function(v4){
var g8=v4.indexOf(this.versionSearchString);
if(g8==-1)return;
return parseFloat(v4.substring(g8+this.versionSearchString.length+1));
},
dataBrowser:[
{
string:navigator.userAgent,
subString:"Chrome",
identity:"Chrome"
},
{string:navigator.userAgent,
subString:"OmniWeb",
versionSearch:"OmniWeb/",
identity:"OmniWeb"
},
{
string:navigator.vendor,
subString:"Apple",
identity:"Safari",
versionSearch:"Version"
},
{
prop:window.opera,
identity:"Opera"
},
{
string:navigator.vendor,
subString:"iCab",
identity:"iCab"
},
{
string:navigator.vendor,
subString:"KDE",
identity:"Konqueror"
},
{
string:navigator.userAgent,
subString:"KONQUEROR",
identity:"Konqueror"
},
{
string:navigator.userAgent,
subString:"AOLBROWSER",
identity:"AOL"
},
{
string:navigator.userAgent,
subString:"WEBTV",
identity:"WebTV"
},
{
string:navigator.userAgent,
subString:"Firefox",
identity:"Firefox"
},
{
string:navigator.vendor,
subString:"Camino",
identity:"Camino"
},
{
string:navigator.userAgent,
subString:"Netscape",
identity:"Netscape"
},
{
string:navigator.userAgent,
subString:"MSIE",
identity:"MS Explorer",
versionSearch:"MSIE"
},
{
string:navigator.userAgent,
subString:"MICROSOFT INTERNET EXPLORER",
identity:"MS Explorer"
},
{
string:navigator.userAgent,
subString:"Gecko",
identity:"Mozilla",
versionSearch:"rv"
},
{
string:navigator.userAgent,
subString:"Mozilla",
identity:"Netscape",
versionSearch:"Mozilla"
},
{
string:navigator.userAgent,
subString:"Lynx",
identity:"Text-only"
},
{
string:navigator.userAgent,
subString:"ELinks",
identity:"Text-only"
},
{
string:navigator.userAgent,
subString:"galeon",
identity:"Galeon"
}
],
dataOS:[
{
string:navigator.userAgent,
subString:"Windows NT 6.0",
identity:"Windows Vista"
},
{
string:navigator.userAgent,
subString:"Windows_XP",
identity:"Windows XP"
},
{
string:navigator.userAgent,
subString:"Windows NT 5.1",
identity:"Windows XP"
},
{
string:navigator.platform,
subString:"Mac",
identity:"Macintosh"
},
{
string:navigator.userAgent,
subString:"iPhone",
identity:"iPhone/iPod"
},
{
string:navigator.userAgent,
subString:"AMIGA-AWEB",
identity:"Amiga"
},
{
string:navigator.userAgent,
subString:"HP-UX",
identity:"Unix"
},
{
string:navigator.userAgent,
subString:"LINUX",
identity:"Unix"
},
{
string:navigator.userAgent,
subString:"Windows NT 5.0",
identity:"Windows 2000"
},
{
string:navigator.userAgent,
subString:"Windows_NT 5.0",
identity:"Windows 2000"
},
{
string:navigator.userAgent,
subString:"Windows_2000",
identity:"Windows 2000"
},
{
string:navigator.userAgent,
subString:"Windows ME",
identity:"Windows ME"
},
{
string:navigator.userAgent,
subString:"WIN 9X",
identity:"Windows ME"
},
{
string:navigator.userAgent,
subString:"WIN95",
identity:"Windows 95"
},
{
string:navigator.userAgent,
subString:"Windows 95",
identity:"Windows 95"
},
{
string:navigator.userAgent,
subString:"Windows_95",
identity:"Windows 95"
},
{
string:navigator.userAgent,
subString:"WIN98",
identity:"Windows 98"
},
{
string:navigator.userAgent,
subString:"Windows 98",
identity:"Windows 98"
},
{
string:navigator.userAgent,
subString:"Windows_98",
identity:"Windows 98"
},
{
string:navigator.userAgent,
subString:"WINNT",
identity:"Windows NT"
},
{
string:navigator.userAgent,
subString:"Windows NT",
identity:"Windows NT"
},
{
string:navigator.userAgent,
subString:"Windows_NT",
identity:"Windows NT"
}
]
};
function F10(zzQTobj){
if((!zzQTobj.d2)&&(zzQTobj.zzTrd!='')){
zzQTobj.zzTrd=';l='+zzQTobj.zzTrd;
}
zzQTobj.f0=zzPage_obj.zd_inject_params+zzQTobj.f0;
if(zzQTobj.f0!=''){
zzQTobj.zzParam=zzQTobj.f0.replace(/;/g,'&');
if(!zzQTobj.d2){
zzQTobj.f0=';p='+escape(zzQTobj.zzParam);
}
else{
zzQTobj.f0='&p='+escape(zzQTobj.zzParam);
}}
if(typeof d8!='undefined'&&document.referrer){
zzQTobj.zzRef=document.referrer;
}
else{
zzQTobj.zzRef=document.URL;
}
zzQTobj.zzRef=zzQTobj.zzRef.replace(/;/g,'QQQQ');
zzQTobj.zzRef=zzQTobj.zzRef.replace(/[&#].*/,'');
zzQTobj.zzStr=zzQTobj.zzStr+'e=i;s='+zzQTobj.zzSection+';g='+zzPage_obj.zzCountry+';w='+zzPage_obj.zzState 
+';m='+zzPage_obj.zzMetro+';'+zzPage_obj.zd_inject_params+';z='+zzrnd(1000000000);
zzQTobj.g2=zzQTobj.r3 * 256;
y0=';d=::';
if(typeof zzcompete!='undefined'){
F1(zzcompete.chosencampstr+':'+zzcompete.chosencomp+':'+zzcompete.chosenadstr);
y0=';d='+zzcompete.chosencampstr+':'+zzcompete.chosencomp+':'+zzcompete.chosenadstr;
}}
function U10(zzQTobj){
F10(zzQTobj);
if(document.layers){
zzQTobj.b0='n='+zzQTobj.t1+';c='+zzQTobj.v1+';s='+zzQTobj.k1+';x='+zzQTobj.g2+';u=j;z='+zzrnd(1000000000)+';'
document.write("<a href='http://o1.qnsr.com/cgi/r?"+zzQTobj.b0+zzQTobj.f0+";y="+
zzRef+zzTrd+"'><img border='0' width='"+zzQTobj.g1+"' height='"+zzQTobj.i1+
"' src='http://o1.qnsr.com/cgi/x?"+zzQTobj.b0+"'></a>");
}
else{
zzQTobj.g2+=1;
if(zzQTobj.d2==1){
zzQTobj.b0='http://e1.cdn.qnsr.com/cgi/d/'+zzQTobj.g2+'/0/'+zzQTobj.t1+
'/'+zzQTobj.v1+'/i0.js?'+';z='+zzrnd(1000000000);
document.write('<scr'+'ipt language="JavaScript" src="'+zzQTobj.b0+'"><\/sc'+'ript>');
}
else{
zzQTobj.b0='http://e1.cdn.qnsr.com/cgi/d/'+zzQTobj.g2+'/0/'+zzQTobj.t1+
'/'+zzQTobj.v1+'/i0.html?'+zzQTobj.f0+
';s='+zzQTobj.k1+';g='+zzPage_obj.zzGeo+';x='+zzPage_obj['cookies']['QUADIDX']+
';y='+zzQTobj.zzRef+y0+';z='+zzrnd(1000000000)+';'+zzQTobj.zzTrd;
document.write("<iframe src='"+zzQTobj.b0+"' frameborder=0 marginheight=0 marginwidth=0 scrolling='no' allowTransparency='true' width="
+zzQTobj.g1+" height="+zzQTobj.i1+"></iframe>");
}}}
function U6(zzQTobj){
zzQTobj.v1=0;
zzQTobj.i1=0;
zzQTobj.g2=0;
zzQTobj.t1=0;
zzQTobj.f0='';
zzQTobj.k1=0;
zzQTobj.r3=0;
zzQTobj.g1=0;
zzQTobj.zzChosenAds='';
zzQTobj.zzChosenCamps='';
zzQTobj.zzChosenComp='';
zzQTobj.zzD=window.document;
zzQTobj.zzParam='';
zzQTobj.zzRef='';
zzQTobj.zzRndCamp=0;
zzQTobj.zzSection=zzQTobj.k1;
zzQTobj.zzStr='';
zzQTobj.zzTrd='';
}
function zzfocrender(i5,d5,y4,v5,g1,i1,f0,m4,t8){
zzflcrender(i5,d5,y4,v5,g1,i1,f0,m4,t8,1);
}
function zzflcrender(i5,d5,y4,v5,g1,i1,f0,m4,t8,d2){
var zzQTobj=new Object();
U6(zzQTobj);
if(!zzPage_obj.zzIsMac){
zzPage_obj['zz_old_error_handler']=window.onerror;
window.onerror=F2;
}
if(typeof i5!='undefined')zzQTobj.t1=i5;
if(typeof d5!='undefined'){zzQTobj.k1=d5;zzQTobj.zzSection=d5;}
if(typeof y4!='undefined')zzQTobj.v1=y4;
if(typeof v5!='undefined')zzQTobj.r3=v5;
if(typeof i1!='undefined')zzQTobj.i1=i1;
if(typeof g1!='undefined')zzQTobj.g1=g1;
if(typeof f0!='undefined')zzQTobj.f0=f0;
if(typeof m4!='undefined'){zzQTobj.zflag_trd=m4;zzQTobj.zzTrd=m4;}
if(typeof d2!='undefined')zzQTobj.d2=d2;
U1();
N2();
zzQTobj.zzGeo=zzPage_obj.zzGeo;
zzQTobj.zzCountry=zzPage_obj.zzCountry
zzQTobj.zzState=zzPage_obj.zzState;
zzQTobj.zzMetro=zzPage_obj.zzMetro 
zzQTobj.zzFlash=zzPage_obj.zzFlash
zzQTobj.zzFlashVersion=zzPage_obj.zzFlashVersion
var m7=parseInt(y4.replace(/\/.*/,''));
m7=((parseInt(i5)* 1000000)+m7);
zzPage_obj[m7]=zzQTobj;
U10(zzQTobj);
if(!zzPage_obj.zzIsMac){
window.onerror=zzPage_obj['zz_old_error_handler'];
}}
if(typeof zzPage_obj=='undefined'){
var zzPage_obj=new Object();
zzPage_obj.zz_old_error_handler=window.onerror;
U1();
N2();
N9();
}