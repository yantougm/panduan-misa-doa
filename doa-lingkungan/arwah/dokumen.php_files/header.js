

function bdb_Pop(q,b,w,h) {
  var x = (screen.width-w)/2;
  var y = (screen.height-h)/2;
  return window.open(
    '/bible/bq.php?q='+q+'&w='+b,
    'BDB',
    'width='   + w + ',' +
    'height='  + h + ',' +
    'screenX=' + x + ',' +
    'screenY=' + y + ',' +
    'left='    + x + ',' +
    'top='     + y + ',' +
    'scrollbars,alwaysRaised,resizable'
  );
}
var topMenuSpacer=15;
var activateSubOnClick=false;
var leftAlignSubItems=false;
var activeMenuItem=false;
var activeTabIndex=0;
var rememberActiveTabByCookie=false;
function Get_Cookie(name) {
 var start = document.cookie.indexOf(name+"=");
 var len = start+name.length+1;
 if ((!start) && (name !=  document.cookie.substring(0,name.length))) return null;
 if (start == -1) return null;
 var end = document.cookie.indexOf(";",len);
 if (end == -1) end = document.cookie.length;
 return unescape(document.cookie.substring(len,end));
} 
function Set_Cookie(name,value,expires,path,domain,secure){
 expires=expires*60*60*24*1000;
 var today=new Date();
 var expires_date=new Date(today.getTime()+(expires));
 var cookieString=name+'='+escape(value)+((expires)?";expires="+expires_date.toGMTString():'')+((path)?";path="+path:"")+((domain)?";domain="+domain:'')+((secure)?';secure':'');
 document.cookie = cookieString;
} 
function showHide(){
 if(activeMenuItem){
  activeMenuItem.className='inactiveMenuItem';  
  var theId=activeMenuItem.id.replace(/[^\d]/g,'');
  document.getElementById('submenu_'+theId).style.display='none';
 }
 activeMenuItem=this;  
 this.className='activeMenuItem';
 var theId=this.id.replace(/[^\d]/g,'');
 document.getElementById('submenu_'+theId).style.display='block';
 if(rememberActiveTabByCookie){
  Set_Cookie('dhtmlgoodies_tab_menu_tabIndex','index:'+(theId-1),100);
 }
}
function initMenu(){
 var mainMenuObj=document.getElementById('mainMenu');
 var subMenuObj=document.getElementById('submenu'); //DD added line
 mainMenuObj.style.visibility=subMenuObj.style.visibility='visible' //DD  added line
 var menuItems=mainMenuObj.getElementsByTagName('A');
 if(document.all){
  mainMenuObj.style.visibility='hidden';
  document.getElementById('submenu').style.visibility='hidden';
 }
 if(rememberActiveTabByCookie){
  var cookieValue=Get_Cookie('dhtmlgoodies_tab_menu_tabIndex')+'';
  cookieValue=cookieValue.replace(/[^\d]/g,'');
  if(cookieValue.length>0 && cookieValue<menuItems.length){
   activeTabIndex=cookieValue/1;
  }   
 }
 var currentLeftPos = 15;
 for(var no=0;no<menuItems.length;no++){   
  if(activateSubOnClick)menuItems[no].onclick=showHide;else menuItems[no].onmouseover = showHide;
  menuItems[no].id='mainMenuItem'+(no+1);
  menuItems[no].style.left=currentLeftPos+'px';
  currentLeftPos=currentLeftPos+menuItems[no].offsetWidth+topMenuSpacer;
  if(no==activeTabIndex){
   menuItems[no].className='activeMenuItem';
   activeMenuItem = menuItems[no];
  }else menuItems[no].className='inactiveMenuItem';
  if(!document.all)menuItems[no].style.bottom='-1px';
 }  
 var mainMenuLinks=mainMenuObj.getElementsByTagName('A');
 var subCounter=1;
 var parentWidth=mainMenuObj.offsetWidth;
 while(document.getElementById('submenu_'+subCounter)){
  var subItem=document.getElementById('submenu_'+subCounter);
   if(leftAlignSubItems){
    // No action
   }else{       
    var leftPos=mainMenuLinks[subCounter-1].offsetLeft;
    document.getElementById('submenu_'+subCounter).style.paddingLeft=leftPos+'px';
    subItem.style.position='absolute';
    if(subItem.offsetWidth>parentWidth){
     leftPos=leftPos-Math.max(0,subItem.offsetWidth-parentWidth);
    }
    subItem.style.paddingLeft=leftPos+'px';
    subItem.style.position='static';
   }
   if(subCounter==(activeTabIndex+1)){
    subItem.style.display='block';
   }else{
    subItem.style.display='none';
   }
   subCounter++;
  }
  if(document.all){
   mainMenuObj.style.visibility='visible';
   document.getElementById('submenu').style.visibility='visible';
  }  
  document.getElementById('submenu').style.display='block';
 }
 window.onload = initMenu; 
