<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html dir="ltr"><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8"><style type="text/css">
        
        body {
          padding:0;
          margin:0;
        }

        #b-navbar{white-space:nowrap;color:#fff;height:29px;border-bottom:1px solid #024;background:transparent;font-size:13px;font-family:Arial,Sans-serif}#b-navbar #b-navbar-bg{position:absolute;left:0;top:0;width:100%;height:30px;z-index:-1;background-color:#036;opacity:1.0;filter:alpha(opacity=100)}#b-navbar-fg{padding:4px 1em 3px 0}#b-navbar-controls{margin-left:.2em}#b-navbar #b-navbar-logo{display:block;margin-right:8px;margin-left:8px;width:20px;height:20px;background:url(http://img1.blogblog.com/img/navbar/icons_orange.png) no-repeat -26px 0;cursor:pointer;cursor:hand}#b-navbar #b-query-box{background-color:#fff;margin:0 .5em 0 0;border:1px solid #014;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;padding:0 .3em}#b-navbar #b-query-icon{display:block;width:13px;height:13px;cursor:pointer;cursor:hand;background:url(http://img1.blogblog.com/img/navbar/icons_orange.png) no-repeat 0 0}#b-navbar #b-query-icon:hover{background:url(http://img1.blogblog.com/img/navbar/icons_orange.png) no-repeat -13px 0}#b-navbar #b-query{font-size:13px;color:#000;background-color:transparent;border:none;width:10em;margin:0}#b-navbar .b-link,#b-navbar #b-user{font-size:13px;vertical-align:middle;padding:0 .4em}#b-navbar .b-link{color:#9cf;text-decoration:none;white-space:nowrap;cursor:pointer;cursor:hand}#b-navbar .b-link:hover{color:#fff;text-decoration:underline}#bt-unflag-body{display:none}#flagi,#unflagi{display:none;top:3px;color:#000;background-color:#ff9;border:1px solid #333;z-index:300;padding:4px;font-size:.7em;line-height:.8em}#flagi a,#unflagi a{color:#3366cc;text-decoration:underline}.b-mobile{display:none}#b-sms{margin:0 0 0 100px;padding:4px 7px;line-height:1em;font-size:100%;text-align:left}#b-sms a{margin-right:.5em;line-height:1em}#b-sms a:hover{text-decoration:underline}@media handheld{body .b-mobile{display:block}body #b-navbar-fg,body #flagi,body #unflagi{display:none}}
      </style>
<!-- base --></head><body class="null lang_in"><script type="text/javascript" src="navbar_data/3625575137-cookies.js"></script>
<script type="text/javascript" src="navbar_data/4095335807-common.js"></script>
<script type="text/javascript" src="navbar_data/107652916-dom.js"></script>
<script type="text/javascript">
        var ID = "4945395614455932456";
        var FLAG_COOKIE_NAME = 'flaggedBlog';
        var MAX_FLAGGED_BLOGS = 10;
        var FLAG_BLOG_URL = "http://www.blogger.com" +
                            "/flag-blog.g?nav=" +
                            "1" +
                            "&toFlag=" + ID;
        var UNFLAG_BLOG_URL = "http://www.blogger.com" +
                            "/unflag-blog.g?nav=" +
                            "1" +
                            "&toFlag=" + ID;

        var ncHasFlagged = false;
        var servletTarget = new Image();

       
       function hasFlagged() {
         if (getCookie(FLAG_COOKIE_NAME)) {
           var bloglist = getCookie(FLAG_COOKIE_NAME);
           var blogarray = bloglist.split(",")
           if (FindInArray(blogarray, ID) > 0) {
             return true;
           }
         }
         return ncHasFlagged;
       }
       

       function toggleFlag() {
         var date = new Date();
         var flagBtn = document.getElementById('b-flag-this');

         if (hasFlagged()) {
           removeBlogFromFlagCookie();
           servletTarget.src = UNFLAG_BLOG_URL + '&d=' + date.getTime();

           RemoveClass(flagBtn, 'flagged');
           ncHasFlagged = false;
         } else {
           setBloggerFlagCookie();
           servletTarget.src = FLAG_BLOG_URL + '&d=' + date.getTime();

           AddClass(flagBtn, 'flagged');
           ncHasFlagged = true;
         }

         refreshDrop();
       }

       
       function showDrop() {
         var overlap = 5;
         var dropdown_position =
           GetPageOffsetRight(document.getElementById('b-flag-this')) - overlap + "px";

         document.getElementById('unflagi').style.display = 'none';
         document.getElementById('flagi').style.display = 'none';

         if (!hasFlagged()) {
           document.getElementById('flagi').style.display = 'inline';
           document.getElementById('flagi').style.left = dropdown_position;
           showElement(document.getElementById('flagi'));
         } else {
           document.getElementById('unflagi').style.display = 'inline';
           document.getElementById('unflagi').style.left = dropdown_position;
           showElement(document.getElementById('unflagi'));
         }
       }

       
       function hideDrop() {
         hideElement(document.getElementById('flagi'));
         hideElement(document.getElementById('unflagi'));
       }

       
       function refreshDrop() {
         hideDrop();
         showDrop();
       }

       
       function setBloggerFlagCookie() {
         var bloglist = ""
         if (getCookie(FLAG_COOKIE_NAME)) {
           bloglist = getCookie(FLAG_COOKIE_NAME)
           var blogarray = bloglist.split(",")
           if (blogarray.length >= MAX_FLAGGED_BLOGS) {
             blogarray.shift()
           }
           InsertArray(blogarray, ID)
           bloglist = blogarray.toString();
         } else {
           bloglist = ID
         }
         setCookie(FLAG_COOKIE_NAME, bloglist, null, null, '/', null)
       }

       
       function removeBlogFromFlagCookie(){
         if (getCookie(FLAG_COOKIE_NAME)) {
           var bloglist = getCookie(FLAG_COOKIE_NAME);
           var blogarray = bloglist.split(",")
           if (FindInArray(blogarray, ID) > 0) {
             DeleteArrayElement(blogarray, ID)
             bloglist = blogarray.toString();
           }
           setCookie(FLAG_COOKIE_NAME, bloglist, null, null, '/', null);
         }
       }

      </script>
<div id="flagi" style="position: absolute;" onmouseover="showDrop()" onmouseout="hideDrop();">Beritahu Blogger mengenai  <a href="http://help.blogger.com/bin/answer.py?answer=42517" target="_blank">konten yang dilarang</a> pada halaman ini.</div>
<div id="unflagi" style="position: absolute;" onmouseover="showDrop()" onmouseout="hideDrop()">Anda menandai blog ini sebagai memiliki  <a href="http://help.blogger.com/bin/answer.py?answer=42517" target="_blank">konten yang dilarang</a>.</div>
<div id="b-navbar"><div id="b-navbar-bg" style="z-index: -1;"></div>
<div id="b-navbar-fg"><table id="b-navbar-controls" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td valign="middle" width="24"><a href="http://www.blogger.com/" id="b-navbar-logo" tabindex="1" title="Pergi ke Blogger.com"></a>
<div id="b-sms" class="b-mobile"><a href="sms:?body=Hi,+coba+lihat+.+pada+http://antoniusempat.blogspot.com/%3Fspref%3Dsms" tabindex="2">Kirim Sebagai SMS</a></div></td>
<td valign="middle" width="150"><form id="searchthis" action="http://antoniusempat.blogspot.com/search" method="get" style="display: inline;"><div id="b-query-box"><table cellpadding="0" cellspacing="0"><tbody><tr><td valign="middle"><input id="b-query" name="q" tabindex="3" style="width: 120px;" title="Telusuri" type="text"></td>
<td style="width: 15px;" valign="middle"><script type="text/javascript">
  document.write("\x3ca id\x3d\x22b-query-icon\x22 onclick\x3d\x22document.getElementById(\x26quot;searchthis\x26quot;).submit();\x22 title\x3d\x22Cari blog ini\x22\x3e\x3c/a\x3e");
</script><a id="b-query-icon" onclick='document.getElementById("searchthis").submit();' title="Cari blog ini"></a></td></tr></tbody></table></div></form></td>
<td valign="middle" nowrap="nowrap">
<a id="b-share-this" class="b-link" tabindex="5" onclick='window.open("/share-post-menu.g?blogID\x3d4945395614455932456\x26postID\x3d7205512648014649511", "sharepopup", "width=250, height=260, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no"); return false;'>Berbagi</a>
<script type="text/javascript">
  document.write("\x3ca id\x3d\x22b-flag-this\x22 class\x3d\x22b-link\x22 onmouseover\x3d\x22showDrop()\x22 onmouseout\x3d\x22hideDrop()\x22 tabindex\x3d\x226\x22 onclick\x3d\x22window.open(\x26quot;http://help.blogger.com/?action\\x3dflag\\x26blog_ID\\x3d4945395614455932456\\x26blog_URL\\x3dhttp://antoniusempat.blogspot.com/\x26quot;)\x22\x3e\x3cspan class\x3d\x22flag-text\x22\x3eLaporkan Penyalahgunaan\x3c/span\x3e\x3c/a\x3e");
</script><a id="b-flag-this" class="b-link" onmouseover="showDrop()" onmouseout="hideDrop()" tabindex="6" onclick='window.open("http://help.blogger.com/?action\x3dflag\x26blog_ID\x3d4945395614455932456\x26blog_URL\x3dhttp://antoniusempat.blogspot.com/")'><span class="flag-text">Laporkan Penyalahgunaan</span></a>
<a class="b-link" href="http://www.blogger.com/next-blog?navBar=true&amp;blogID=4945395614455932456" id="b-next" tabindex="7">Blog Berikut»</a></td>
<td class="navbar-right" align="right" valign="middle" nowrap="nowrap">
<a class="b-link" href="http://www.blogger.com/signup.g" id="b-getorpost" tabindex="8">Buat Blog</a>
<a class="b-link" href="http://www.blogger.com/" tabindex="9">Sign in</a></td></tr></tbody></table></div></div>
<script type="text/javascript">
        function closePopup(wnd) {
          wnd.close();
        }
      </script>
</body></html>