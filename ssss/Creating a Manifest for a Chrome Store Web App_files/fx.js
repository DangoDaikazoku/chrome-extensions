//  Copyright (c) 2011 QuinStreet Inc. All Rights Reserved.
//  prod:49
function zzshuffle(xa){
for(var t10,tmp,i=xa.length;i;rnd=parseInt(Math.random()*i),tmp=xa[--i],xa[i]=xa[rnd],xa[rnd]=tmp);
return xa;
}
function zzIndexOfList(ll,obj){
for(var i=0;i<ll.length;i++){
if(ll[i]==obj){
return i;
}}
return-1;
}
function zzrnd(ii){
return(Math.floor((Math.random()* 10000000000006)% ii));
}
function N8(i0){
if(zzIndexOfList(zzcompete.bannedcamps,i0)<0){
zzcompete.chosencamps.push(i0);
}
else{
}}
function F4(i0){
if(zzIndexOfList(zzcompete.chosencamps,i0)<0){
zzcompete.bannedcamps.push(i0);
}
else{
}}
function F7(f8,b2){
for(var ii=0;ii<f8.length;ii++){
i0=f8[ii];
if(i0!=b2){
if(zzIndexOfList(zzcompete.bannedcamps,i0)<0){
F4(i0);
if(typeof zzcompete.parent2camps[i0]!='undefined'){
for(var jj=0;jj<zzcompete.parent2camps[i0].length;jj++){
F4(zzcompete.parent2camps[i0][jj]);
}}}}}}
var f6;
function N5(b2){
if(f6<5){
f6++;
N8(b2);
if(cat!=null){
F7(zzcompete.cat2camps[cat],b2);
}
if(typeof zzcompete.camp2cats[b2]!='undefined'){
for(var jj=0;jj<zzcompete.camp2cats[b2].length;jj++){
cat2=zzcompete.camp2cats[b2][jj];
if(typeof cat2!='undefined'){
F7(zzcompete.cat2camps[cat2],b2);
}}}
for(var r8 in zzcompete.parent2camps){
if(zzIndexOfList(zzcompete.parent2camps[r8],b2)>=0){
N5(r8);
}}}
else{
}}
function zzcompute_compete(){
if(typeof zzcompete!='undefined'){
var zzshufflecats=zzshuffle(zzcompete.allcats);var ii;
if(!zzcompete.chosencamps)zzcompete.chosencamps=[];
if(!zzcompete.chosenads)zzcompete.chosenads=[];
if(!zzcompete.chosencomp)zzcompete.chosencomp='';
zzcompete.bannedcamps=[];
zzcompete.chosencampstr='';
zzcompete.chosenadsstr='';
zzcompete.processedcats=[];
for(ii=0;ii<zzshufflecats.length;ii++){
cat=zzshufflecats[ii];
if(zzIndexOfList(zzcompete.processedcats,cat)>=0){
continue;
}
zzcompete.processedcats.push(cat);
var g10=zzcompete.cat2camps[cat].length;var rnd=zzrnd(zzcompete.cat2camps[cat].length);var b2=0;
while(g10-->0){
var k7=zzcompete.cat2camps[cat][rnd];
if(zzIndexOfList(zzcompete.bannedcamps,k7)<0 
&&zzIndexOfList(zzcompete.chosencamps,k7)<0){
b2=k7;
break;
}
else{
rnd=(rnd+1)% zzcompete.cat2camps[cat].length
}}
if(b2){
f6=0;
N5(b2);
}
else{
}}
if(zzcompete.chosencamps.length>0){
zzcompete.chosencampstr=zzcompete.chosencamps.join("~");
}
if(zzcompete.compcamps.length>0){
var t4=0;
while(!t4){
var rnd=zzrnd(zzcompete.campcount);
if(rnd<zzcompete.compcamps.length){
if(zzIndexOfList(zzcompete.bannedcamps,zzcompete.compcamps[rnd])<0){
zzcompete.chosencomp=zzcompete.compcamps[rnd];
t4=1;
}}
else{
break;
}}
for(var i0 in zzcompete.compcamps){
if(i0!=zzcompete.chosencomp){
F4(i0);
}}}
var m1={};
m1[0]=99999999;
for(var i0 in zzcompete.exads){
var rnd,tag,last_used_tag;
if(zzIndexOfList(zzcompete.bannedcamps,i0)>=0){
continue;
}
var rnd=zzrnd(zzcompete.exads[i0].length);var m6=zzcompete.exads[i0].length;var b4=-1;
tag=last_used_tag=0;
while(m6-->0){
var f7=zzcompete.exads[i0][rnd];
tag=f7.replace(/ad[0-9]+/i,'');
if((typeof m1[tag])=='undefined'){
last_used_tag=tag;
b4=rnd;
}
else if(m1[last_used_tag]>m1[tag]){
last_used_tag=tag;
b4=rnd;
}
else{
}
rnd=(rnd+1)% zzcompete.exads[i0].length;
}
if(typeof m1[last_used_tag]=='undefined'){
m1[last_used_tag]=1;
}
else{
m1[last_used_tag]++;
}
zzcompete.chosenads.push(zzcompete.exads[i0][b4]);
}
if(zzcompete.chosenads.length>0){
zzcompete.chosenadstr=zzcompete.chosenads.join("~");
}}}
function zzcompute_compete_new(){
if(typeof zzcompete!='undefined'&&typeof zzcompete.camppriority!='undefined'){
if(!zzcompete.chosencamps)zzcompete.chosencamps=[];
if(!zzcompete.chosenads)zzcompete.chosenads=[];
if(!zzcompete.chosencomp)zzcompete.chosencomp='';
zzcompete.bannedcamps=[];
zzcompete.chosencampstr='';
zzcompete.chosenadsstr='';
zzcompete.processedcats=[];
for(var ii=0;ii<zzcompete.camppriority.length;ii++){
var zzshufflecamps=zzshuffle(zzcompete.camppriority[ii]);
for(var jj=0;jj<zzshufflecamps.length;jj++){
var zzcamp=zzshufflecamps[jj];
if(zzIndexOfList(zzcompete.bannedcamps,zzcamp)<0 
&&zzIndexOfList(zzcompete.chosencamps,zzcamp)<0){
f6=0;
cat=null;
N5(zzcamp);
}else{
}}}
if(zzcompete.chosencamps.length>0){
zzcompete.chosencampstr=zzcompete.chosencamps.join("~");
}
if(zzcompete.compcamps.length>0){
var t4=0;
while(!t4){
var rnd=zzrnd(zzcompete.campcount);
if(rnd<zzcompete.compcamps.length){
if(zzIndexOfList(zzcompete.bannedcamps,zzcompete.compcamps[rnd])<0){
zzcompete.chosencomp=zzcompete.compcamps[rnd];
t4=1;
}}
else{
break;
}}
for(var i0 in zzcompete.compcamps){
if(i0!=zzcompete.chosencomp){
F4(i0);
}}}
var m1={};
m1[0]=99999999;
for(var i0 in zzcompete.exads){
var rnd,tag,last_used_tag;
if(zzIndexOfList(zzcompete.bannedcamps,i0)>=0){
continue;
}
var rnd=zzrnd(zzcompete.exads[i0].length);var m6=zzcompete.exads[i0].length;var b4=-1;
tag=last_used_tag=0;
while(m6-->0){
var f7=zzcompete.exads[i0][rnd];
tag=f7.replace(/ad[0-9]+/i,'');
if((typeof m1[tag])=='undefined'){
last_used_tag=tag;
b4=rnd;
}
else if(m1[last_used_tag]>m1[tag]){
last_used_tag=tag;
b4=rnd;
}
else{
}
rnd=(rnd+1)% zzcompete.exads[i0].length;
}
if(typeof m1[last_used_tag]=='undefined'){
m1[last_used_tag]=1;
}
else{
m1[last_used_tag]++;
}
zzcompete.chosenads.push(zzcompete.exads[i0][b4]);
}
if(zzcompete.chosenads.length>0){
zzcompete.chosenadstr=zzcompete.chosenads.join("~");
}}}
zzcompute_compete_new()
