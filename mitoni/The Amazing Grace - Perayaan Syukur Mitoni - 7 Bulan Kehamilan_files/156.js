<!-- -*- mode: javascript -*- -->
function insertFlash(src,duration,numericid,owner,splash) {
    getEl('flashmovie').innerHTML = "<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0' width='480' height='395' id='multiply_flash'><param name='allowScriptAccess' value='sameDomain'/><param name='movie' value='http://images.multiply.com/multiply/player.swf'/><param name='quality' value='high'/><param name='bgcolor' value=''/><param name='WMode' value='Transparent'/><param name='FlashVars' value='vidurl=" + src + "&vidlength=" + duration + "&numericid=" + numericid + "&userid=" + owner + "&baseurl=" + splash + "'/><embed src='http://images.multiply.com/multiply/player.swf' quality='high' bgcolor='' width='480' height='395' name='multiply_flash' allowScriptAccess='sameDomain' type='application/x-shockwave-flash' wmode='transparent' pluginspage='http://www.macromedia.com/go/getflashplayer' flashvars='vidurl=" + src + "&vidlength=" + duration + "&numericid=" + numericid + "&userid=" + owner + "&baseurl=" + splash + "'/></object>";
}

function insertSlideshow(album,divid) {
    var width = 500;
    var height = 500;
    getEl(divid).innerHTML =
	"<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' " +
	"codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0' " +
        "width='" + width + "' height='" + height + "' id='multiply_slideshow'>" +
        "<param name='allowScriptAccess' value='always'>" +
        "<param name='movie' value='http://images.multiply.com/multiply/slide-show.swf'/>" +
        "<param name='quality' value='high'/>" +
	"<param name='bgcolor' value='#000000'/>" +
	"<param name='allowFullScreen' value='true'/>" +  
        "<param name='FlashVars' value='album_id=" + album + "&base_uri=multiply.com'/>" +
        "<embed src='http://images.multiply.com/multiply/slide-show.swf' " +
        "allowscriptaccess='always' " +
        "quality='high' " +
        "bgcolor=#000000 " +
        "width='" + width + "' height='" + height + "' " +
        "name='multiply_audio_player' " +
	"allowFullScreen='true' " +
        "id='multiply_audio_player' " +
        "type='application/x-shockwave-flash' " +
        "pluginspage='http://www.macromedia.com/go/getflashplayer' " +
        "flashvars='album_id=" + album + "&base_uri=multiply.com'/>" +
        "</object>";
}

function insertAudioPlayer(music_item_id) {
    var width = 500;
    var is_linux = '1';
    var height = 54; // is_linux ? 37 : 150;
    var player_url = "http://images.multiply.com/multiply/MusicPlayer.swf"; // is_linux ? "http://images.multiply.com/multiply/audio-player-linux.swf" : "http://images.multiply.com/multiply/audio-player.swf";
    getEl(music_item_id).innerHTML = 
	"<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' " +
        "codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0' " +
	"width='" + width + "' height='" + height + "' id='multiply_audio_player_object'>" +
	"<param name='allowScriptAccess' value='always'>" + 
        "<param name='movie' value='" + player_url + "'/>" +
        "<param name='quality' value='high'/>" +
        "<param name='bgcolor' value=''/>" +
        "<param name='WMode' value='Transparent'/>" +
        "<param name='FlashVars' value='music_item_id=" + music_item_id + "&base_uri=multiply.com&is_linux=1'/>" +
        "<embed src='" + player_url + "' " +
	"allowscriptaccess='always' " +
        "quality='high' " +
        "bgcolor='' " +
        "width='" + width + "' height='" + height + "' " +
        "name='multiply_audio_player' " +
        "id='multiply_audio_player' " +
        "type='application/x-shockwave-flash' " +
        "wmode='transparent' " +
        "pluginspage='http://www.macromedia.com/go/getflashplayer' " +
        "flashvars='music_item_id=" + music_item_id + "&base_uri=multiply.com&is_linux=1'/>" +
        "</object>";
}

var Hiding_Audio_List = new Array;
function hide_audio_player_list(music_item_id) {
    Hiding_Audio_List[music_item_id] = true;
    setTimeout("maybe_really_hide_audio_player_list('" + music_item_id + "');", 2000);
}

function maybe_really_hide_audio_player_list(music_item_id) {
    if (Hiding_Audio_List[music_item_id]) {
	getEl(music_item_id + '_overflowdiv').style.height = '37px';
    }
}

function show_audio_player_list(music_item_id) {
    Hiding_Audio_List[music_item_id] = false;
    getEl(music_item_id + '_overflowdiv').style.height = '150px';
}

function insertMusicPlayer(mp3s) {
    getEl('flashmusic').innerHTML = "<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0'width='350' height='25'><param name='movie' value='http://images.multiply.com/multiply/mp3player.swf'></param><param name='WMode' value='Transparent'></param><param name='FlashVars' value='randomplay=true&listofmp3s="+mp3s+"'></param><embed wmode='transparent' src='http://images.multiply.com/multiply/mp3player.swf' type='application/x-shockwave-flash' width='350' height='25' name='multiply_music' allowScriptAccess='sameDomain'  quality=high FLASHVARS='randomplay=true&listofmp3s=" + mp3s + "' pluginspage='http://www.macromedia.com/go/getflashplayer'></embed></object>";
}

function docwrite(thevar) {
    document.write(thevar);
}

function insertFlashnl(src,duration,numericid,owner,splash) {
    getEl('flashmovie').innerHTML = "<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0' width='480' height='395' id='multiply_flash'><param name='allowScriptAccess' value='sameDomain'/><param name='movie' value='http://images.multiply.com/multiply/player2.swf'/><param name='quality' value='high'/><param name='bgcolor' value=''/><param name='WMode' value='Transparent'/><param name='FlashVars' value='nl=1&vidurl=" + src + "&vidlength=" + duration + "&numericid=" + numericid + "&userid=" + owner + "&baseurl=" + splash + "'/><embed src='http://images.multiply.com/multiply/player2.swf' quality='high' bgcolor='' width='480' height='395' name='multiply_flash' allowScriptAccess='sameDomain' type='application/x-shockwave-flash' wmode='transparent' pluginspage='http://www.macromedia.com/go/getflashplayer' flashvars='nl=1&vidurl=" + src + "&vidlength=" + duration + "&numericid=" + numericid + "&userid=" + owner + "&baseurl=" + splash + "'/></object>";
}


function insertAudioReply(item_id,element_id,reply_id) {
    var width = 300;
    var height = 34;
    var is_linux = '1';
    var player_url = "http://images.multiply.com/multiply/audio-reply-player.swf";
    getEl(element_id).innerHTML = 
        "<div style='height: " + height + "px; width: " + width + "px; position: relative;'>" + 
	"<div style='position: absolute; z-index: 5; height: " + height + "px; width: " + width + "px; overflow: hidden;'>" + 
	"<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' " +
        "codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0' " +
        "width='" + width + "' height='" + height + "' id='multiply_multv_object'>" +
        "<param name='allowScriptAccess' value='always'/>" +
        "<param name='movie' value='" + player_url + "'/>" +
        "<param name='quality' value='high'/>" +
        "<param name='bgcolor' value=''/>" +
        "<param name='WMode' value='Transparent'/>" +
        "<param name='FlashVars' value='item_id=" + item_id + "&reply_id=" + reply_id + "&base_uri=multiply.com&is_linux=" + is_linux + "'/>" +
        "<embed src='" + player_url + "' " +
        "quality='high' " +
        "bgcolor='' " +
        "width='" + width +"' height='" + height + "' " +
        "name='multiply_multv' " +
        "id='multiply_multv' " +
        "allowScriptAccess='always' " +
        "type='application/x-shockwave-flash' " +
        "wmode='transparent' " +
        "pluginspage='http://www.macromedia.com/go/getflashplayer' " +
        "flashvars='item_id=" + item_id + "&reply_id=" + reply_id + "&base_uri=multiply.com&is_linux=" + is_linux + "'/>" +
        "</object></div></div>";
}

function correct_multv_width_height(element_id, width, height, is_reply, is_premium) {
    var window_width = typeof(window.innerHeight) == 'number' ? window.innerWidth : document.documentElement.clientWidth;
    window_width -= 300;
    var body_width = getEl(element_id).offsetWidth;
    var available_width = body_width > window_width ? window_width : body_width;
    if (available_width < 500) { available_width = 500; }
    if (available_width > (2 * width)) { available_width = 2 * width; }
    if (available_width > 600 && !is_premium) { available_width = 600; }
    var available_height = typeof(window.innerHeight) == 'number' ? window.innerHeight : document.documentElement.clientHeight;
    available_height -= 80;
    var ratio = available_width / available_height;
    var photo_ratio = width / height;
    var use_width = ratio >= photo_ratio ? false : true; 
    var max_width;
    var max_height;
    if (use_width) {
	max_width = available_width;
	max_height = (height / width) * available_width;
    }
    else {
	max_height = available_height;
	max_width = (width / height) * available_height;
    }
    return [max_width, max_height];
}

var MulTV_Resize_Timers = new Array();
var MulTV_Instances = new Array();
function insertMulTV(item_id,element_id,reply_id,is_owned,is_reply,width,height,is_premium) {
    var additional_vars = '';
    var swf_file = "multv";
    var el = getEl(element_id);
    if (!width || !height) {
	width = 600;
	height = 450;
    }
    var wh = correct_multv_width_height(element_id, width, height, is_reply, is_premium);
    var real_width = wh[0];
    var real_height = wh[1];
    var version = 4;
    if (reply_id != '') { 
	additional_vars += '&reply_id=' + reply_id;
    }
    if (is_owned) {
	additional_vars += '&is_owned=1'; // hide channel guide button
    }
    if (is_reply) {
	additional_vars += '&is_reply=1'; // hide channel guide, menu, prev/next buttons 
    }
    el.innerHTML = 
	"<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' " +
	"codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0' " +
	"width='" + real_width + "' height='" + real_height + "' id='multiply_multv_object_" + item_id + "'>" +
	"<param name='allowScriptAccess' value='always'/>" +
	"<param name='movie' value='http://images.multiply.com/multiply/" + swf_file + ".swf?v=" + version + "'/>" +
	"<param name='quality' value='high'/>" + 
	"<param name='bgcolor' value=''/>" +
        "<param name='WMode' value='Transparent'/>" +
	"<param name='allowNetworking' value='all'/>" + 
	"<param name='allowFullScreen' value='true'/>" +
	"<param name='FlashVars' value='first_video_id=" + item_id + "&base_uri=multiply.com" + additional_vars +"'/>" +
	"<embed src='http://images.multiply.com/multiply/" + swf_file + ".swf?v=" + version + "' " +
	"quality='high' " +
	"bgcolor='' " + 
        "wmode='transparent' " +
	"width='" + real_width + "' height='" + real_height + "' " +
	"name='multiply_multv' " +
	"id='multiply_multv_" + item_id + "' " +
	"allowScriptAccess='always' " +
	"allowNetworking='all' " + 
	"type='application/x-shockwave-flash' " + 
	"allowFullScreen='true' " +
	"pluginspage='http://www.macromedia.com/go/getflashplayer' " +
	"flashvars='first_video_id=" + item_id + "&base_uri=multiply.com" + additional_vars + "'/>" +
	"</object>";
    if (real_width == 0 || el.offsetWidth <= 1) {
	MulTV_Resize_Timers[item_id] = setInterval("resize_multv('" + item_id + "', '" + element_id + "', " + width + ", " + height + ", true)", 100);
    }
    MulTV_Instances[item_id] = { width: width, height: height, item_id: item_id, element_id: element_id, is_premium: is_premium };
}

function resize_multvs() {
    for (var item_id in MulTV_Instances) {
	var multv = MulTV_Instances[item_id];
	resize_multv(multv['item_id'], multv['element_id'], multv['width'], multv['height'], false, multv['is_premium']);
    }
}

function resize_multv(item_id, element_id, width, height, is_interval, is_premium) {
    var el = getEl(element_id);
    var objectel = getEl('multiply_multv_object_' + item_id);
    var embedel = getEl('multiply_multv_' + item_id);
    if (!objectel) {
	clear_multv_timer(item_id, is_interval);
	return;
    }
    if (objectel.width > 1 && el.offsetWidth > 1) {
	clear_multv_timer(item_id, is_interval);
    }
    var wh = correct_multv_width_height(element_id, width, height, false, is_premium);
    var real_width = wh[0];
    var real_height = wh[1];
    if (real_width > 0) {
	objectel.style.width = real_width + 'px';
	objectel.style.height = real_height + 'px';
	objectel.width = real_width;
	objectel.height = real_height;
	if (embedel) {
	    embedel.width = real_width;
	    embedel.height = real_height;
	}
	if (el.offsetWidth > 1) {
	    clear_multv_timer(item_id, is_interval);
	}
    }
}

function clear_multv_timer(item_id, is_interval) {
    if (MulTV_Resize_Timers[item_id] && is_interval) {
	clearInterval(MulTV_Resize_Timers[item_id]);
	delete MulTV_Resize_Timers[item_id];
    }
}

function insertVideoRecorder(element_id, oid, uid, sec, env, base_uri, reply_id) {
    getEl(element_id).innerHTML = 
	"<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' " +
	"codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0' " +
	"width=480 height=395 id='multiply_video_recorder'>" +
	"<param name='movie' value='http://images.multiply.com/multiply/recorder.swf'/>" +
	"<param name='quality' value='high'/>" +
	"<param name='allowFullScreen' value='true'/>" +
	"<param name='allowScriptAccess' value='always'/>" +
	"<param name='allowNetworking' value='external'/>" +
	"<param name='wmode' value='transparent'/>" +
	"<param name='FlashVars' value='oid=" + oid + "&uid=" + uid + "&sec=" + sec + "&env=" + env + "&base_uri=" + base_uri + "&reply_id=" + reply_id + "'/>" +
	"<embed src='http://images.multiply.com/multiply/recorder.swf' allowscriptaccess='always' allownetworking='external' wmode='transparent' quality='high' bgcolor='' width=480 height=395 name='multiply_video_recorder' id='multiply_video_recorder' type='application/x-shockwave-flash' allowFullScreen='true' pluginspage='http://www.macromedia.com/go/getflashplayer' flashvars='oid=" + oid + "&uid=" + uid + "&sec=" + sec + "&env=" + env + "&base_uri=" + base_uri + "&reply_id=" + reply_id + "'/>";
}
function insertAudioRecorder(element_id, oid, uid, sec, env, base_uri, reply_id) {
    getEl(element_id).innerHTML =
        "<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' " +
        "codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0' " +
        "width=350 height=215 id='multiply_video_recorder'>" +
        "<param name='movie' value='http://images.multiply.com/multiply/audiorecorder.swf'/>" +
        "<param name='quality' value='high'/>" +
        "<param name='allowFullScreen' value='true'/>" +
        "<param name='allowScriptAccess' value='always'>" +
	"<param name='allowNetworking' value='external'/>" +
	"<param name='wmode' value='transparent'/>" +
        "<param name='FlashVars' value='oid=" + oid + "&uid=" + uid + "&sec=" + sec + "&env=" + env + "&base_uri=" + base_uri + "&reply_id=" + reply_id + "'/>" +
        "<embed src='http://images.multiply.com/multiply/audiorecorder.swf' wmode='transparent' quality='high' bgcolor='' width=350 height=215 name='multiply_video_recorder' id='multiply_video_recorder' type='application/x-shockwave-flash' allowScriptAccess='always' allowNetworking='external' allowFullScreen='true' pluginspage='http://www.macromedia.com/go/getflashplayer' flashvars='oid=" + oid + "&uid=" + uid + "&sec=" + sec + "&env=" + env + "&base_uri=" + base_uri + "&reply_id=" + reply_id + "'/>";
}

if (!window.Multiply) Multiply = {};	// prevent multiple definitions

if (!Multiply.Browser) {
    var user_agent = navigator.userAgent.toLowerCase();

    var browser_id;
    if (/firefox/.test(user_agent)) {
        browser_id = 'firefox';
    }
    else if (/chrome/.test(user_agent)) {	// chrome test should come before safari
        browser_id = 'chrome';
    }
    else if (/safari/.test(user_agent)) {
        browser_id = 'safari';
    }
    else if (/opera/.test(user_agent)) {
        browser_id = 'opera';
    }
    else if (/msie/.test(user_agent)) {
        browser_id = 'msie';
    }
    else {
        browser_id = 'other';
    }

    Multiply.Browser = {
	is_firefox	: browser_id == 'firefox',
	is_safari	: browser_id == 'safari',
	is_opera	: browser_id == 'opera',
	is_msie		: browser_id == 'msie',
        is_chrome       : browser_id == 'chrome'
    };

    Multiply.Browser.version = (user_agent.match(/.+?(?:ox|chrome|safari|it|ra|ie)[\/: ]([\d.]+)/) || [])[1];
    Multiply.Browser.browser_id = [browser_id, Multiply.Browser.version, navigator.platform.toLowerCase()].join('-');

    // define variables to make this compatible with existing code
    var isie = Multiply.Browser.is_msie;
    var isie7 = Multiply.Browser.is_msie && Multiply.Browser.version >= 7.0 && Multiply.Browser.version < 8.0;
    var isie8 = Multiply.Browser.is_msie && Multiply.Browser.version >= 8.0;
    var is_firefox = Multiply.Browser.is_firefox;
    var is_safari = Multiply.Browser.is_safari;
    var is_opera = Multiply.Browser.is_opera;
    var is_chrome = Multiply.Browser.is_chrome;
}
// -*- mode: javascript; -*-

var xml_reqs = new Array();

function new_ajax_request(name) {
    // http://msdn.microsoft.com/en-us/library/ms537505(VS.85).aspx#_id says:
    //    Beginning with Internet Explorer 7, XMLHTTP is also exposed as a native scripting object.
    //    ....
    //    ... it is more efficient to create a native scriptable object than to create an ActiveX object.
    // We used to check for ActiveXObject first, then XMLHttpRequest. Now we first check for XMLHttpRequest
    // which covers all non-IE browsers _and_ IE7 and up. IE6 will get ActiveXObject.
    var req = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    if (req) {
	if (!name)
	    name = 'req' + xml_reqs.length;
	xml_reqs[name] = req;

	return req;
    }

    return null;
}

function make_param_string(params) {
    if (params == null)
	return null;

    var type = typeof params;

    if (type == 'undefined')
	return null;

    if (type == 'string')
	return params;

    var p = [];
    // if params is an array, assume that the array elements are form elements
    if (params.constructor == Array) {
	for (var i in params)
	    p.push(encodeURIComponent(params[i].name) + "=" + encodeURIComponent(params[i].value));
    }
    else {	// assume params is an object of key/value pairs
	for (var key in params) {
	    // if the value is an array, the key names are repeated
	    var value = params[key];
	    if (value && value.constructor == Array) {
		for (var i in value)
		    p.push(encodeURIComponent(key) + "=" + encodeURIComponent(value[i]));
	    }
	    else {
		p.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
	    }
	}
    }

    if (p.length > 0)
	return p.join('&').replace(/%20/g, "+");
    else
	return null;
}

function is_string(thing) {
    var thing_type = typeof thing;
    return (thing_type == "string" || (thing_type == 'object' && thing instanceof String));
}

// return form params as a hash object
// input 'frm' is either the form name or the form element object itself

function get_form_params(frm) {
    if (is_string(frm)) {
        frm = document.forms[frm];
    }
    var params = {};
    for (var i=0; i<frm.elements.length; i++) {
	var field = frm.elements[i];
	if (field.type == 'radio' || field.type == 'checkbox') {
	    if (field.checked)
		params[field.name] = field.value;
	}
	else {
	    params[field.name] = field.value;
	}
    }

    return params;
}

// Credit++ to http://www.webtoolkit.info/ajax-file-upload.html

function ajax_upload(frm, element_id, options) {
    if (!getEl(element_id)) {
	return true;
    }
    if (is_string(frm)) {
	    frm = document.forms[frm];
    }
    var iframe_id = 'f' + Math.floor(Math.random() * 99999);
    var new_div = document.createElement('DIV');
    new_div.innerHTML = '<iframe style="display: none;" src="about:blank" id="' + iframe_id + '" name="' + iframe_id + '" onload="loaded_ajax_upload_frame(\'' + iframe_id + '\')"></iframe>';
    document.body.appendChild(new_div);

    var upload_iframe = getEl(iframe_id);
    upload_iframe.onComplete = function(response) {
	var html = strip_header_footer(response);
	getEl(element_id).innerHTML = html;
	run_embedded_scripts(html);
    }
    frm.setAttribute('target', iframe_id);
    return true;
}

function loaded_ajax_upload_frame(id) {
    var upload_iframe = getEl(id);
    var doc;
    if (upload_iframe.contentDocument) {
	doc = upload_iframe.contentDocument;
    }
    else if (upload_iframe.contentWindow) {
	doc = upload_iframe.contentWindow.document;
    }
    else {
	doc = window.frames[id].document;
    }
    if (doc.location.href == 'about:blank') {
	return;
    }
    if (typeof(upload_iframe.onComplete) == 'function') {
	upload_iframe.onComplete(doc.body.innerHTML);
    } 
}

function ajax_form_load(frm, element_id) {
	if (!getEl(element_id)) {
		// submit the form normally
		return true;
	}
	if (is_string(frm)) {
		frm = document.forms[frm];
	}
	var url = frm.action;
	var params = get_form_params(frm);
	var callback = function(req) { var html = strip_header_footer(req.responseText); getEl(element_id).innerHTML = html; run_embedded_scripts(html); };
	ajax(url, callback, {params: params});
	return false;
}

function ajax_redirect(url, element_id, method) {
    if (!element_id || !getEl(element_id) || element_id.length == 0) {
	window.location = url;
    }
    var callback = function(req) {
	var html = strip_header_footer(req.responseText);
	getEl(element_id).innerHTML = html;
	run_embedded_scripts(html);
    };
    if (method) {
	ajax(url, callback, { method: method });
    }
    else {
	ajax(url, callback);
    }
}

// sends ajax requests (both GET and POST)
// callback is called upon successful response.
// callbacks don't need to check response status.
// suitable default is used for req_name if not specified.

function ajax(url, callback, options) {
//     console.log('ajax: url |' + url + '|');
    var method = 'POST';
    if (options && options.method != null) {
	method = options.method;
    }

    // IE's ActiveX implementation of XMLHTTP defaults to POST method, if data is passed to req.send,
    // even if Content-Length is not set. So, build data only if method is POST.
    var data = method == 'POST' && options && options.params ? make_param_string(options.params) : null;

    var new_callback;
    if (callback) {
// 	console.log('ajax: setting up callback ...');
	new_callback = function(req) {
	    if (req.readyState != 4) return null;
	    if (req.status != 200) return null;
	    return callback(req);
	};
    }

    var req = new_ajax_request(options ? options.name : null);
    var async = true;
    if (options && options.async != null)
	async = options.async;
//     console.log('ajax: async = |' + async + '|');

    if (req) {
	if (new_callback)
	    req.onreadystatechange = function() { new_callback(req); };
	req.open(method, url, async);

	if (method == 'POST') {
	    req.setRequestHeader('Content-type','application/x-www-form-urlencoded');
            if (!data || data.length < 1) {
	        // send dummy data to force Content-Length header to be set and make proxies happy
                data = " ";
            }
	    req.setRequestHeader('Content-length', data ? data.length : 0);
	    req.setRequestHeader('Connection', 'close');
	}

	req.setRequestHeader("X-Requested-With", "XMLHttpRequest"); 
// 	console.log('ajax: sending ' + method + ' |' + url + '|');
	req.send(data);
    }

    return req;
}

// convenience function to perform an ajax GET request
// callback is called upon successful response.
// callbacks don't need to check response status.
// suitable default is used for req_name if not specified.

function ajax_get(url, callback, req_name) {
//     console.log('ajax_get: url |' + url + '|');
    return ajax(url, callback,
		{
		    method: 'GET',
		    params: null,
		    name: req_name
		});
}

// convenience function to perform an ajax POST request

function ajax_post(url, params, callback, req_name) {
    return ajax(url, callback,
		{
		    method: 'POST',
		    params: params,
		    name: req_name
		});
}

// compatibility wrapper function for load_xml_document

function load_xml_document(req_name, url, callback) {
    return ajax(url, callback,
		{
		    method: 'GET',
		    params: null,
		    name: req_name
		});
}

// compatibility wrapper function for post_xml_document

function post_xml_document(req_name, url, callback, params) {
    return ajax(url, callback,
		{
		    method: 'POST',
		    params: params,
		    name: req_name
		});
}


// convenience function to perform an ajax GET request,
// load the response text in element with id specified by 'elem'.
// Optional third arg 'show_elem' specifies the id of an element
// to be made visible.  if 'show_elem' is not specified, 'elem'
// is made visible.

function ajax_load(url, elem, show_elem, post_load_callback) {
    var callback = function(req) {
	getEl(elem).innerHTML = req.responseText;
        
        // run any embedded scripts
        run_embedded_scripts(req.responseText);

	display(show_elem || elem, true);
	if (post_load_callback != null) {
	    post_load_callback();
	}
    };

    return ajax(url, callback,
		{
		    method: 'POST',
		    params: null,
		    name: 'req_' + elem
		});
}

function run_embedded_scripts(html) {
    var re = new RegExp('<scr' + 'ipt>(.*?)</sc' + 'ript>', 'gm');
    html = html.replace(/\n/g, "\n\n");
    html = html.replace(/\n\s*\/\/.*?\n/g, "");
    html = html.replace(/;\s*\/\/.*?\n/g, ";\n");
    var scripts = html.replace(/\n/g, "").match(re);
    var is_ie = /MSIE (\d+\.\d+);/.test(navigator.userAgent);
    var is_chrome = /Chrome\//.test(navigator.userAgent);
    var is_safari = /Safari/.test(navigator.userAgent);
    if (scripts && scripts.length > 0) {
        for (var i = 0; i < scripts.length; i++) {
            var script = scripts[i].replace('<scr' + 'ipt>', '').replace('</sc' + 'ript>', '');
            if (!script.length) {
                continue;
            }
	    if (is_safari) {
		window.setTimeout(script, 0);
	    }
	    else if (is_ie || is_chrome) {
		try {
		    window.execScript(script);
		}
		catch(err) {
		    // we get here sometimes when attempting to do stuff with google vars on ajax pages. 
		}
	    }
	    else {
		try {
		    window.eval(script);
		}
		catch(err) {
		    // we get here sometimes when attempting to do stuff with google vars on ajax pages. 
		}
	    }
        }
    }
}
function show_item_details(key) {
    var div = getEl('gm_item_details');
    if (!div) {
        div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.left = '100px';
        div.style.width = '700px';
        div.style.height = '400px';
        div.style.backgroundColor = '#eeeeee';
        div.style.border = '1px solid #111111;'
        div.style.color = '#000000';
        div.style.zIndex = '9999999';
        div.id = 'gm_item_details';
        document.body.appendChild(div);
    }
    div.style.top = (window.pageYOffset + 100) + 'px';
    div.style.display = '';
    div.innerHTML = '<center>Loading...</center>';
    ajax('/gm-tools/show-item-details/' + key, handle_item_details);
}

function handle_item_details(req) {
    var parts = req.responseText.split('<pairsplit>');
    var html = '<div style="width: 700px; height: 20px;">' +
        '<table width=100% cellpadding=0 cellspacing=0 border=0><tr>' +
        '<td align=left><span style="font-size: 20px; font-weight: bold;">Item Details</td>' +
        '<td align=right><div style="cursor: pointer; text-align: center; width: 25px; height: 25px; background-color: #ccc; color: #000; font-weight: bold" onclick="javascript:close_item_details();">X</div></td></tr></table></div>' +
        '<div style="width: 700px; height: 400px; overflow: auto;"><table border=0 cellpadding=2 cellspacing=0 width=100%>';
    var colors = new Array('efefef','fefefe');
    for(x=0; x<parts.length; x++) {
        var tmp = parts[x].split('=');
        var key = tmp.shift();
        var value = tmp.join('=');
        var color = x % 2 == 1 ? colors[0] : colors[1];
        html += '<tr style="background-color: #' + color + '"><td width=25% align=left style="background-color: #' + color + '">' + key + ':</td><td width=75% align=left style="background-color: #' + color + '">' + value + '</td></tr>';
    }
    html += '</table></div>';
    getEl('gm_item_details').innerHTML = html;
}

function close_item_details() {
    getEl('gm_item_details').style.display = 'none';
}

function recreate_montage(key) {
    ajax('/gm-tools/recreate-montage/' + key, handle_recreate_montage);
}

function handle_recreate_montage(req) {
    alert('montage recreated');
}

function delete_zero_size_photos(key) {
    ajax('/gm-tools/delete-zero-size-photos/' + key, handle_delete_zero_size_photos);
}

function handle_delete_zero_size_photos(req) {
    alert('zero size files eliminated');
}

function recreate_factory_indexes(key) {
    ajax('/gm-tools/recreate-factory-indexes/' + key, handle_recreate_factory_indexes);
}

function handle_recreate_factory_indexes(req) {
    alert('factory indexes recreated');
}

var live_replies = 0;

var global_page_key;
var global_page_desc;
var global_self_serve_ad_top;
var global_self_serve_ad_bottom;
var global_reload_ad_iframe = false;
var omniture_pagename;
var Maybe_Unpad_Div;
var Page_Load_Count = 0;
var Scrolling_Panes = 0;

function load_viewing_history_for(key,desc) {
	global_page_key = key;
	global_page_desc = desc;
	var url = '/show-viewing-history/' + key + '?item_desc=' + escape(desc);
	var req = window.XMLHttpRequest ? new XMLHttpRequest : window.ActiveXObject ? new ActiveXObject('Microsoft.XMLHTTP') : '';
	req.onreadystatechange = function () {
		if (req.readyState == 4 && req.status == 200) {
			getEl('viewing_history_holder').innerHTML = req.responseText;
		}
	}
	req.open('GET',url,true);
        req.setRequestHeader("X-Requested-With", "XMLHttpRequest"); 
	req.send(null); 
}

function extract_number(value) {
	var n = parseInt(value);
	return n == null || isNaN(n) ? 0 : n;
}

function refresh_viewing_history() {
	if (!global_page_key) { return; }
	load_viewing_history_for(global_page_key,global_page_desc);
}

function set_disabled(id, on_off) {
	var el = document.all ? document.all[id] : document.getElementById(id);
	if(el) el.disabled = on_off;
}
function set_visible(id, on_off) {
	var el = document.all ? document.all[id] : document.getElementById(id);
	if(el && el.style) el.style.visibility = on_off ? 'visible' : 'hidden';
}
function set_classname(id, new_name) {
	var el = document.all ? document.all[id] : document.getElementById(id);
	if(el) el.className = new_name;
}
function display(id_or_elem, on_off) {
        var el = is_string(id_or_elem) ? getEl(id_or_elem) : id_or_elem;
	if(el && el.style) el.style.display = on_off ? '' : 'none';
}
function toggle_display(id) {
	var el = document.all ? document.all[id] : document.getElementById(id);
	if(el && el.style) el.style.display = el.style.display ? '' : 'none';
}
function is_hidden(id_or_elem) {
        var elem = is_string(id_or_elem) ? getEl(id_or_elem) : id_or_elem;
        return get_style(elem, 'display') == 'none';
}
function set_opacity(el, amount) {
	if (typeof el == 'string')
	el = getEl(el);
	if (!el || typeof el == 'undefined')
	return;
	el.style.opacity = amount/100;
	el.style.MozOpacity = amount/100;
	el.style.filter = 'alpha(opacity=' + amount + ')';
}
function toggle_dropdown(id) {
	display('new_dropdown', false);
	display('explore_dropdown', false);
	display('group_post_table', false);
	var el = getEl(id);
	el.style.display = el.style.display ? '' : 'none';
	el.style.zIndex = 199;
	if((id == 'go_dropdown' || id == 'new_dropdown' || id == 'explore_dropdown') && hide_owner_title) {
		var ot = getEl('owner_nav');
set_visible('owner_nav', el.style.display);
set_visible('page_start', el.style.display);
		if(ot) ot.style.marginTop = el.style.display ? '0' : '1200px';
	}
	if(getEl('page-start')) {
		getEl('page-start').style.opacity = el.style.display ? 1 : .4;
		getEl('page-start').style.filter = el.style.display ? "" : "alpha(opacity=40)";
	}
}
var default_group_id;
var default_group_name;
var post_new_check_leave_page;
function post_new() {
	if (post_new_check_leave_page) {
		var msg = 'Confirm\n\nAre you sure you want to navigate away from this page?\n\nYour unsaved Blog Entry will be lost.\n\nPress OK to continue, or Cancel to stay on the current page.';
		if (! confirm(msg)) return;
	}
	
	window.skip_unload_check = 1;
	display('post_new', 1);
	display('post_new_link', 0);
	reset_groups_div(default_group_id, default_group_name);
}
function toggle_submenu(id) {
	toggle_display(id);
}
var hide_owner_title;
function hide_dropdown_delay(id) {
	display(id, false);
	var slider = getEl('slider-1');
	if(slider) slider.style.visibility = 'visible';
	if(hide_owner_title) {
		var ot = getEl('owner_nav');
		if(ot) ot.style.marginTop = '0';
	}
	if(getEl('page-start')) {
		getEl('page-start').style.opacity = 1;
		getEl('page-start').style.filter = "";
	}
}
var hide_timeout;
function hide_delay(id) {
	var func = "hide_dropdown_delay('" + id + "')";
	if(!hide_timeout) hide_timeout = window.setTimeout(func, 500);
}
function no_hide_delay() {
	window.clearTimeout(hide_timeout)
	hide_timeout = 0;
}
var dropdown_group_id;
var group_name;
function set_group_for_posting(group_id, grp_name) {
	dropdown_group_id = group_id;
	group_name = grp_name;
	display('pickgroup', 0);
	display('postgrouplist0', 0);
	display('postgrouplist1', 0);
	display('postgrouplist2', 1);
	display('postgrouplist3', 0);
	display('post-new-content', 0);
	var url = '/group-post/' + group_id;
	load_xml_document('group_post', url, popup_group_post_callback);
}

function popup_group_post_callback() {
	if (xml_reqs['group_post'].readyState != 4) return;
	if (xml_reqs['group_post'].status != 200) return;
		
	display('postgrouplist2', 0);
	var div = getEl('group_post_response');
	div.innerHTML = xml_reqs['group_post'].responseText;

	var gname = getEl('group_name_label');
	var gname2 = getEl('group_name_title');
	if(gname2) gname2.innerHTML = 'Add to ' + group_name + '&nbsp;&nbsp;<div style="display: inline" class=subtitle><a href="javascript:reset_groups_div()">[change]</a></div>';

	display('postgrouplist3', 1);
	if (getEl('groupnotefield')) getEl('groupnotefield').focus(1);
}

function toggle_group_dropdown(div_id, group_id, group_name) {
	var gname = getEl(div_id + '_name');
	if(gname) gname.innerHTML = '<h4>Add to ' + group_name + '</h4>';
	if(dropdown_group_id == group_id) {
		toggle_display(div_id);
	}
	else {
		dropdown_group_id = group_id;
		display(div_id, 1);
	}
}
function go_group(url) {
	if(dropdown_group_id)
		window.location.href = 'http://' + dropdown_group_id + '.multiply.com' + url;
	else
		alert("Please select a group first.");
}

function submit_this(url, params, target_window) {
    var frm = createEl('form');
    frm.method = 'POST';
    frm.action = url;
    if (target_window) {
	frm.target = target_window;
    }
    if (params) {
        for (var name in params) {
            var param = createEl('input');
            param.type = 'hidden';
            param.setAttribute('name', name);
            param.setAttribute('value', params[name]);

            frm.appendChild(param);
        }
    }

    document.body.appendChild(frm);
    frm.submit();
    return true;
}

function track_url(url,track_ext) {
    if (MultiplyTracker) {
	MultiplyTracker.track_url(url,'',track_ext);
    }
    omniture_pagename = '';
    detail_pagename = '';
}

function confirmLink(message, url) {
    if(confirm(message)) submit_this(url);
}

function confirmSubmit(message, form_name) {
	if(confirm(message)) getEl(form_name).submit();
}
function confirmBlock(url) {
	return confirmLink("Removing a message means you will not see the message nor its future replies. Please note that this is a message board, where unlike e-mail, it is not necessary to remove messages from this page. They will simply scroll off as they get old.\nAre you sure you want to remove this message and any replies?", url);
}
function setBlocked(id, nmid) {
	var el = getEl('mrow_' + id);
	var parent = el.parentNode;
	parent.removeChild(el);
	var ael = getEl('blocklink_' + id);
	if (ael) ael.parentNode.parentNode.parentNode.style.display = 'none';
	//restripe_mailbox();
	post_xml_document('delete_' + id, '/item/set-blocked/' + nmid + '/true', do_nothing, "no_redirect=1");
}
function restripe_mailbox() {
	var els = getElementsByClassName('mrow', getEl('main_inbox'), 'div');
	var counter = 0;
	for (var i = 0; i < els.length; i++) {
		if (counter % 2 == 0) remove_class(els[i], 'odd');
		else add_class(els[i], 'odd');
		if (els[i].style.display != 'none') counter++;
	}
}
function toggle_set_sticky(id, size) {
	var el = getEl('sticky_' + id);
	var value;
	if (el.className == 'unsticky') {
		if (size == '12x12')
			el.src = 'http://images.multiply.com//multiply/icons/clean/12x12/flag.gif';
		else
			el.src = 'http://images.multiply.com//multiply/icons/clean/24x24/flag.gif';
		el.className = 'sticky';
		el.title = 'This message is flagged.  Click to un-flag.';
		value = true;
	}
	else {
		if (size == '12x12')
			el.src = 'http://images.multiply.com//multiply/icons/clean/12x12/flag-off.gif';
		else
			el.src = 'http://images.multiply.com//multiply/icons/clean/24x24/flag-off.gif';
		el.className = 'unsticky';
		el.title = 'Click to flag this message.';
		value = false;
	}
	var url = '/item/set-sticky/' + id + '/' + value;
	load_xml_document('subscribe_' + id, url, do_nothing);
}
function click_mrow(message_id) {
	var el = getEl('mrow_' + message_id);
	if (!el) return;
	el.className = el.className + ' uptodate';
	return true;
}
function click_go_mrow(message_id) {
	alert("WOW");
}
function getEl(el) {
	return document.all ? document.all[el] : document.getElementById(el);
}
function getElAllFrames(el_id) {
	var el = document.all ? document.all[el_id] : document.getElementById(el_id);
        if (!el && window.frames.length > 0) {
                for (var i = 0; i < window.frames.length; i++) {
                        var frame_el = window.frames[i].document.getElementById(el_id);
                        if (frame_el) {
                                el = frame_el;
                                break;
                        }
                }
        }
        return el;
}

function createEl(type, id, theClass) {
	var el = document.createElement(type);
	if (el) {
		if (id && id.length > 0)
			el.id = id;
		if (theClass && theClass.length > 0)
			el.className = theClass;
	}

	return el;

}

function getElementsByClassNameRegEx(classname, node, tag)
{
	var a = new Array();
	if (!node) node = document;

	var els;

	if (!tag) tag = '*';
	var els = node.getElementsByTagName(tag);
	var re = new RegExp('\\b' + classname + '\\b');
	for (var i = 0; i < els.length; i++) {
		if (re.test(els[i].className))
			a.push(els[i]);
	}

	return a;
}
function getElementsByClassName(classname, node, tag)
{
	var a = new Array();
	if (!node) node = document;

        var els;
        if (node.getElementsByClassName) {	// use native method if available
                els = node.getElementsByClassName(classname);
                if (tag) {
                        tag = tag.toUpperCase();
	                for (var i = 0, len = els.length; i < len; i++) {
                                if (els[i].tagName == tag)
                                        a.push(els[i]);
                        }
                }
                else {
	                for (var i = 0, len = els.length; i < len; i++) {
                                a.push(els[i]);
                        }
                }
		return a;
        }
        else {
	        return getElementsByClassNameRegEx(classname, node, tag);
        }
}

function getElementsByClassNameExact(classname, node, tag)
{
	var a = new Array();
	if (!node) node = document;
	if (!tag) tag = '*';
	var els = node.getElementsByTagName(tag);
	for (var i = 0; i < els.length; i++) {
		if (els[i].className == classname)
			a.push(els[i]);
	}
	return a;
}

function readCookie(name) {
	if(document.cookie == '') return false;

	var firstChar, lastChar;
	var theBigCookie = document.cookie;
	name = name + '=';
	firstChar = theBigCookie.indexOf(name);
	if (firstChar != -1) {
		firstChar += name.length;
		lastChar = theBigCookie.indexOf(';', firstChar);
		if(lastChar == -1) lastChar = theBigCookie.length;
		return unescape(theBigCookie.substring(firstChar, lastChar));
	}
	else {
		return false;
	}
}
function setCookie (name,value,expires,path,domain,secure) {
  document.cookie = name + "=" + escape (value) +
    ((expires) ? "; expires=" + expires.toGMTString() : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
}
function setImgSrc(id, src, width, height) {
	var img = getEl(id);
	img.width = width;
	img.height = height;
	img.src = src;
}
function window_height() {
	var myHeight = 0;
	if(typeof(window.innerHeight) == 'number') {
		myHeight = window.innerHeight;
	}
	else if(document.documentElement && document.documentElement.clientHeight) {
		myHeight = document.documentElement.clientHeight;
	}
	else if(document.body && document.body.clientHeight) {
		myHeight = document.body.clientHeight;
	}
	return myHeight;
}
function containsDOM (container, containee) {
	var isParent = false;
	do {
		if ((isParent = container == containee))
			break;
		containee = containee.parentNode;
	}
	while (containee != null);
	return isParent;
}
function checkMouseEnter (element, evt) {
	if (!evt) {
	    evt = window.event;
	}
	if (element.contains && evt.fromElement) {
		return !element.contains(evt.fromElement);
	}
	else if (evt.relatedTarget) {
		return !containsDOM(element, evt.relatedTarget);
	}
}
function doesContain(elThis, elThat) {
	if (elThat == elThis) return true;
	if (elThat == null) return false;
	return doesContain(elThis, elThat.parentNode);
}
function checkMouseLeave (element, evt) {
	if (evt.toElement) {
		return !doesContain(element, evt.toElement);
	}
	else if (evt.relatedTarget) {
		return !containsDOM(element, evt.relatedTarget);
	}
}
function selectAll() {
}
var OverrideSelectAll = 0;
var Doing_Search = '';
var Doing_Individuals = 0;
function hotKeys (event) {
        if (window.local_hotKeys) {
                if (!window.local_hotKeys(event))
                        return false;
        }
	event = (event) ? event : ((window.event) ? event : null);
	var charCode = (event.charCode) ? event.charCode : ((event.which) ? event.which : event.keyCode);
	var myChar = String.fromCharCode (charCode).toLowerCase();
	if (event && event.ctrlKey) {
		if (window.submitReply &&
		    ((myChar == "m" && charCode == 77) || myChar == "\n" || myChar == "\r")) {
		    if (submitReply())
			getEl('replyform').submit();
		}
		if (OverrideSelectAll && myChar == "a") { cancelEvent(event); return selectAll();}
	}
	else if (event && event.metaKey) {
		if (OverrideSelectAll && myChar == "a") { cancelEvent(event); return selectAll();}
	}
	else if (Doing_Search) {
		if (myChar == "\n" || myChar == "\r") {
			do_search();
		}
		else if (charCode == 40) {
			if (Doing_Search == 'people')
				select_search('content');
			else if (Doing_Search == 'content')
				select_search('groups');
			else if (Doing_Search == 'groups')
				select_search('locker');
			else 
				select_search('people');
			return true;
		}
		else if (charCode == 3800 || charCode == 38) {
			if (Doing_Search == 'content')
				select_search('people');
			else if (Doing_Search == 'groups')
				select_search('content');
			else if (Doing_Search == 'locker')
				select_search('groups');
			else 
				select_search('locker');
			return true;
		}
		else if (charCode == 27) {	// ESC closes dropdown
                        close_search();
                }
		else {

		}
	}
	else if (Doing_Individuals) {
		if (myChar == "\n" || myChar == "\r" || myChar == "\t") {
                        insert_individual();
		}
		else if (charCode == 40) {
			next_individual();
			return true;
		}
		else if (charCode == 3800 || charCode == 38) {
			prev_individual();
			return true;
		}
		else if (charCode == 27) {	// ESC closes dropdown
                        close_individuals();
                }
		else {

		}
	}
}
function cancelEvent(e) { 
	// try to prevent side effects (browser defaults) 
	e = e || window.event; 
	e.cancelBubble = true; 
	e.returnValue = false; 
	if (e.stopPropagation) e.stopPropagation(); 
	if (e.preventDefault) e.preventDefault();     
	return false; 
} 

function addEvent(obj, evType, fn, useCapture) {
	if (obj.addEventListener) {
		obj.addEventListener(evType, fn, useCapture);
		return true;
	}
	else if (obj.attachEvent) {
		var r = obj.attachEvent("on"+evType, fn);
		return r;
	};
};
function quicksearch_setup() {
	var input = getEl('quicksearchinput');
	if(input) {
		ph = input.getAttribute("placeholder")
		if(ph && ph != "") {
			input.value = ph;
			input.style.color = 'gray';
			input.onfocus = quicksearch_focus;
			input.onblur = quicksearch_blur;
		}
	}
}

function quicksearch_focus() {
	if(this.style.color == 'gray') {
		this.value = '';
		this.style.color = 'black';
	}
}
function quicksearch_blur() {
	ph = this.getAttribute("placeholder")
	if(ph && this.value == "") {
		this.value = ph;
		this.style.color = 'gray';
	}
}
function do_nothing () {
	return;
}
function pick_post_group() {
	display('pickgroup', 0);
	display('postgrouplist1', 1);
}
function reset_groups_div(default_group_id, default_group_name) {
	if(default_group_id) {
		set_group_for_posting(default_group_id, default_group_name);
	}
	else {
		display('pickgroup', 1);
		display('postgrouplist0', 1);
		display('postgrouplist1', 0);
		display('postgrouplist2', 0);
		display('postgrouplist3', 0);
		display('post-new-content', 1);
		var gname2 = getEl('group_name_title');
		if(gname2) gname2.innerHTML = 'Add to a Group Site';
	}
}
function maybe_unpad_div() {
	if (Maybe_Unpad_Div && getEl(Maybe_Unpad_Div)) {
		getEl(Maybe_Unpad_Div).style.paddingTop = '0px';
	}
}

function popup_miniprofile(element, user_id, offset_x, offset_y, maybe_pad) {
	var div = getEl('miniprofile_div');
	var pos = getOffset(element);
	var screen_width = getWidth();
	// maybe_pad is used for moving multv down in replies so that it doesnt overlap the mini profile and we still have fullscreen functionality.
	if (getEl(maybe_pad)) {
		getEl(maybe_pad).style.paddingTop = '120px';
		Maybe_Unpad_Div = maybe_pad;
	}
	var new_x = pos.x;
	var new_y = pos.y;
	if (offset_x || offset_y) {
		new_x += (offset_x * 1);
		new_y += (offset_y * 1);
	}
	div.style.left = new_x + 'px';
	div.style.top = new_y + 'px';
	if (new_x + 300 > screen_width)
		new_x = screen_width - 320;

	div.style.position = 'absolute';
	div.innerHTML = "<table onmouseout='if (checkMouseLeave(this, event)) { maybe_unpad_div(); display(\"miniprofile_div\", 0); }' class=miniprofiletable cellpadding=0 cellspacing=0><tr><td><div class=miniprofilediv><img src='http://images.multiply.com/common/misc/indicator-medium.gif' class='indicator' /></div></td></tr></table>";
	div.style.display = '';
	var url = '/miniprofile/' + user_id;
	var callback = function(req) {
		var div = getEl('miniprofile_div');
		div.style.width = '300px';
		div.style.height = '150px';
		div.style.left = new_x + 'px';
		div.style.top = new_y + 'px';
		div.innerHTML = req.responseText;
	};

	ajax(url, callback);
        track_url('/miniprofile');
}
function popup_miniprofile_div(user_id) {
	var el = getEl('miniprofile_' + user_id);
	if (el.innerHTML && el.innerHTML.length) {
		if (el.parentNode.scrollTop == 100) {
			scroll_to('contactbox-' + user_id, 100, 0, -20, 1);
		}
		else {
			scroll_to('contactbox-' + user_id, 0, 100, 20, 1);
		}
	}
	else {
		var url = '/miniprofile-div/' + user_id;
		scroll_to('contactbox-' + user_id, 0, 100, 20, 1);
		var callback = function(req) { var newbody = req.responseText; getEl('miniprofile_' + user_id).innerHTML = newbody; };
		ajax(url, callback);
	}
}
function scroll_to(el, start, finish, increment, delay) {
	if (start == finish) return;
	start += increment;
	getEl(el).scrollTop = start;
	setTimeout("scroll_to('" + el + "', " + start + ", " + finish + ", " + increment + ", " + delay + ")", delay);
}
function fade(el, start, finish, increment, delay) {
	if (start == finish) return;
	start += increment;
	getEl(el).opacity = start;
	setTimeout("fade('" + el + "', " + start + ", " + finish + ", " + increment + ", " + delay + ")", delay);
}

function getPos(inputElement) {
	var coords =  new Object();
	coords.x = 0;
	coords.y = 0;
	try {
		targetElement = inputElement;
		if(targetElement.x && targetElement.y) {
			coords.x = targetElement.x;
			coords.y = targetElement.y;
		}
		else {
			if(targetElement && targetElement.offsetParent) {
				coords.x += targetElement.offsetLeft;
				coords.y += targetElement.offsetTop;
				while(targetElement = targetElement.offsetParent) {
					coords.x += targetElement.offsetLeft;
					coords.y += targetElement.offsetTop;
				}
			}
		}
		return coords;
	}
	catch(error) {
		return coords;
	}
}

var PageStyle;
function show_big_blank_div(el_id, background, opacity) {
	if (PageStyle == 'oasis' || PageStyle == 'skyline' || PageStyle == 'blacklily' || PageStyle == 'basecamp') { return; }
	if (getEl('big_blank_div')) { 
		getEl('big_blank_div').innerHTML = '';
		getEl('big_blank_div').style.display = '';
		return; 
	}
	var new_div = document.createElement('div');
	var height;
	var width;
	var top;
	var left;
	if (false && el_id && getEl(el_id)) {
	    var el = getEl(el_id);
	    height = el.offsetHeight;
	    width = el.offsetWidth;
	    top = left = 0;
	    if (el.offsetParent) {
		do {
		    top += el.offsetTop;
		    left += el.offsetLeft;
		} while (el = el.offsetParent);
	    } 
	}
	else {
	    height = document.body.offsetHeight ?  document.body.offsetHeight : document.body.document.height;
	    width = getWidth();
	    top = 0;
	    left = 0;
	}
	new_div.style.backgroundColor = (background || '#999');
	set_opacity(new_div, (opacity || 60));
	new_div.style.height = height + 'px';
	new_div.style.width= width + 'px';
	new_div.style.position = 'absolute';
	new_div.style.top = top + 'px';
	new_div.style.left = left + 'px';
	new_div.style.zIndex = '16777270';
	new_div.id = 'big_blank_div';
	if (false && el_id && getEl(el_id)) {
	    getEl(el_id).appendChild(new_div);
	}
	else {
	    document.body.appendChild(new_div);
	}
}
function show_modal_big_blank_div() {
	if (PageStyle == 'oasis') { return; }
	var mbbd = getEl('modal_big_blank_div');
	if (mbbd) { 
		var height = getHeight();
		var width = getWidth();
		document.body.parentNode.style.height = height + 'px';
		document.body.parentNode.style.overflow = 'hidden';
		document.body.style.height = height + 'px';
		document.body.style.overflow = 'hidden';
		mbbd.style.backgroundColor = '#999';
		mbbd.style.height = height + 'px';
		mbbd.style.width= width + 'px';
		mbbd.style.position = 'absolute';
	        var top = getViewport().y;
		mbbd.style.top = (top - 54) + 'px';
		mbbd.style.left = '0px';
		mbbd.style.zIndex = '10000003';
		mbbd.style.display = '';
		// window.scrollTo(0, 0);
		set_opacity(mbbd,60);
	}
}
function hide_modal_big_blank_div() {
	document.body.style.height = '100%';
	document.body.style.overflow = '';
	document.body.parentNode.style.height = '100%';
	document.body.parentNode.style.overflow = '';
	getEl('modal_big_blank_div').style.width = '0px';
	display('modal_big_blank_div', 0);
}
function getWidth() {
	var myWidth;
	if(typeof(window.innerWidth) == 'number') {
		myWidth = window.innerWidth;
	}
	else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
		myWidth = document.documentElement.clientWidth;
	}
	else if(document.body && (document.body.clientWidth || document.body.clientHeight)) {
		myWidth = document.body.clientWidth;
	}
	return myWidth;
}
function getHeight() {
	var myHeight;
	if(typeof(window.innerWidth) == 'number') {
		myHeight = window.innerHeight;
	}
	else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
		myHeight = document.documentElement.clientHeight;
	}
	else if(document.body && (document.body.clientWidth || document.body.clientHeight)) {
		myHeight = document.body.clientHeight;
	}
	return myHeight;
}

function getMousePosition(e) {
	var posx = 0;
	var posy = 0;
	if (e.pageX || e.pageY) {
		posx = e.pageX;
		posy = e.pageY;
	}
	else if (e.clientX || e.clientY) {
		posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}
	return {x:posx, y:posy};
}
// Offset from document, taking any scrolled elements into account
function getOffset(e) {
	var left = 0;
	var top  = 0;
	var ctr = 0;
	var doc = e.ownerDocument;
	if ( document.documentElement["getBoundingClientRect"] ) {
	    var box = e.getBoundingClientRect();
	    var body = doc.body;
	    var docElem = doc.documentElement;
	    var clientTop = docElem.clientTop || body.clientTop || 0;
	    var clientLeft = clientLeft = docElem.clientLeft || body.clientLeft || 0;
	    top  = box.top  + (self.pageYOffset || docElem.scrollTop) - clientTop;
	    left = box.left + (self.pageXOffset || docElem.scrollLeft) - clientLeft;
	}
	else {
	    var offsetParent = e.offsetParent;
	    left = e.offsetLeft;
	    top  = e.offsetTop;
	    offsetParent = e.offsetParent;

	    while ((e = e.parentNode) && e !== doc.body && e !== doc.documentElement ) {
		    left -= e.scrollLeft;
		    top -= e.scrollTop;
		    if ( e === offsetParent ) {
			    left += e.offsetLeft;
			    top += e.offsetTop;
			    offsetParent = e.offsetParent;
		    }
	    }
	}
	return {x:left, y:top};
}
// Offset from document, assuming all scrolled elements are unscrolled
function getPosition(e) {
	var left = 0;
	var top  = 0;
	var ctr = 0;
	while (e && e.offsetParent) {
		left += e.offsetLeft;
		top += e.offsetTop;
		e = e.offsetParent;
	}

	if (e) {
		left += e.offsetLeft;
		top += e.offsetTop;
	}
	return {x:left, y:top};
}
function getViewport() {
        if (Multiply.Browser.is_msie) {
                return {x: document.documentElement.scrollLeft, y: document.documentElement.scrollTop};
        }
        else {
                return { x: window.pageXOffset, y: window.pageYOffset};
        }
}

var select_list;
function filter_list(event, text_id, select_id, notfound_func, found_func) {
	setTimeout("filter_list_now('" + text_id + "', '" + select_id + "', '" + notfound_func + "', '" + found_func + "')", 10);
}

function filter_list_now(text_id, select_id, notfound_func, found_func) {
	var el = getEl(select_id);
	if (!el) return;

	var filter_text = getEl(text_id).value;
	if (!select_list) {
		select_list = new Array();
		for (var i = 0; i < el.options.length; i++) {
			select_list.push(el.options[i]);
		}
	}

	var filter_regexp = new RegExp(filter_text, "i");
	el.options.length = 0;
	var j = 0;
	for (var i = 0; i < select_list.length; i++) {
		var label = select_list[i].text;
		var val = select_list[i].value;
		if (filter_text == '') {
			el.options[j] = new Option(label, val, false, false);
			j++;
		}
		else if (label.match(filter_regexp)) {
			el.options[j] = new Option(label, val, false, false);
			j++;
		}
		else if (val.match(filter_regexp)) {
			el.options[j] = new Option(label, val, false, false);
			j++;
		}
	}

	if (j == 0) eval(notfound_func) 
	else eval(found_func);
}

function getResponseTag(response, tag) {
	var tagel = response.getElementsByTagName(tag);
	if (tagel && tagel[0] && tagel[0].firstChild)
		return tagel[0].firstChild.data;
}

function decode_html_entities(text) {
	var ta = document.createElement('textarea');
	ta.innerHTML = text;
	return ta.value;
}

function toggle_set_subscribed(id, size) {
	var el = getEl('subscribed_' + id);
	var value;
	if (el.className == 'unsubscribed') {
		if (size == '12x12')
			el.src = 'http://images.multiply.com//multiply/icons/clean/12x12/mail.gif';
		else
			el.src = 'http://images.multiply.com//multiply/icons/clean/24x24/mail.gif';
		el.className = 'subscribed';
		el.title = 'You are subscribed to this message.  Click to turn off e-mail alerts.';
		value = true;
	}
	else {
		if (size == '12x12')
			el.src = 'http://images.multiply.com//multiply/icons/clean/12x12/mail-off.gif';
		else
			el.src = 'http://images.multiply.com//multiply/icons/clean/24x24/mail-off.gif';
		el.className = 'unsubscribed';
		el.title = 'Subscribe to e-mail alerts for this message.';
		value = false;
	}
	var url = '/item/set-subscribed/' + id + '/' + value;
	load_xml_document('subscribe_' + id, url, do_nothing);
}

function has_class(el, class_name) {
	return el && el.className && el.className.match(new RegExp('\\b' + class_name + '\\b'));
}

function add_class(el, class_name) {
	if (el && typeof el == 'string') el = getEl(el);
	if (!el) return;

	if (el.className && el.className.match(new RegExp('\\b' + class_name + '\\b'))) return;
	el.className += (el.className ? ' ' : '') + class_name;
}

function remove_class(el, class_name) {
	if (el && typeof el == 'string') el = getEl(el);
	if (!el) return;
	if (!el.className) return;
	el.className = el.className.replace(new RegExp('\\b' + class_name + '\\b'), '');
}

// return the filename part of a path
function basename(path) {
	var rex;
	if (navigator.platform.indexOf("Win") >= 0) {
		rex = /^((?:[a-zA-Z]:)?.*\\)?(.*)/;
	}
	else {
		rex = /^(.*\/)?(.*)/;
	}
	var matches = path.match(rex);
	return matches ? matches[2] : path;
}

function insertAfter(node, referenceNode) {
    referenceNode.parentNode.insertBefore(node, referenceNode.nextSibling);
}
function make_user_agent() {
	var agent = {};
	var ua = navigator.userAgent.toLowerCase();
	var is_major = parseInt(navigator.appVersion);
	agent.is_ie = ((ua.indexOf("msie") != -1) && (ua.indexOf("opera") == -1) && (ua.indexOf("webtv") == -1));
	agent.is_ie5_5 = (agent.is_ie && (is_major == 4) && (ua.indexOf("msie 5.5") !=-1));
	agent.is_ie6 = (agent.is_ie && (is_major == 4) && (ua.indexOf("msie 6.")!=-1) );
	return agent;
}
function addCss(cssCode) {
	// DOES NOT WORK IN IE!!!
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	if (styleElement.styleSheet)
		styleElement.styleSheet.cssText = cssCode;
	else
		styleElement.appendChild(document.createTextNode(cssCode));
	document.getElementsByTagName("head")[0].appendChild(styleElement);
}
function set_help_text() { }
function bookmark_us(url, title){
    if (window.sidebar) // firefox
	window.sidebar.addPanel(title, url, "");
    if(window.opera && window.print){ // opera
	var elem = document.createElement('a');
	elem.setAttribute('href',url);
	elem.setAttribute('title',title);
//	elem.setAttribute('rel','sidebar');
	elem.click();
    }
    else if(document.all)// ie
	window.external.AddFavorite(url, title);
}

function load_into_get(el_id, url, params, no_placeholder) {
	var el = getEl(el_id);
	var callback = function(req) { var newbody = req.responseText; el.innerHTML = strip_header_footer(newbody); run_embedded_scripts(req.responseText); track_url(omniture_pagename)};
	el.innerHTML = no_placeholder ? "" : "<div class='centerpad'><img width='16' src='http://images.multiply.com//common/misc/indicator-small.gif' class='indicator' height='16' /> Loading...</div>";
	ajax(url, callback, {params: params, method: 'GET'});
}
function load_into(el_id, url, params, no_placeholder) {
	var el = getEl(el_id);
	var callback = function(req) { var newbody = req.responseText; el.innerHTML = strip_header_footer(newbody); run_embedded_scripts(req.responseText); track_url(omniture_pagename)};
	el.innerHTML = no_placeholder ? "" : "<div class='centerpad'><img width='16' src='http://images.multiply.com//common/misc/indicator-small.gif' class='indicator' height='16' /> Loading...</div>";
	ajax(url, callback, {params: params});
}
function set_selected_li(li_id) {
	if (!li_id) return;
	var siderail = getEl('siderail');
	if (!siderail) return;
	var els = getElementsByClassName('filter', siderail, 'a');
	for (var i = 0; i < els.length; i++) {
		els[i].className = 'filter';
	}
	var li = getEl(li_id);
	if (li) li.className = 'selected filter';
}
function strip_header_footer(txt) {
	if (txt.indexOf('<!-- END_HEADER -->') > 0) {
		txt = '<div class=swallowed>' + txt.substring(txt.indexOf('<!-- END_HEADER -->') + 19);
	}
	if (txt.indexOf('<!-- START_FOOTER -->') > 0) {
		txt = txt.substring(0, txt.indexOf('<!-- START_FOOTER -->')) + '</div>';
	}
	return txt;
}
function insert_replies(req, message_id, icon, old_icon_src) {
	var el = getEl('inserted_replies_' + message_id);
	if(el) {
		el.innerHTML = req.responseText;
	}
	else {
		var newbody = strip_header_footer(req.responseText);
		var new_div = document.createElement('div');
		new_div.innerHTML = newbody;
		new_div.id = 'inserted_replies_' + message_id;
		insertAfter(new_div, getEl('replies_' + message_id));
	}
	run_embedded_scripts(req.responseText);
	icon.src = old_icon_src;
}
function load_replies(message_id, replies_read) {
	var url = '/item/replies/' + message_id + '?replies_read=' + replies_read;
	var mrow = getEl('mrow_' + message_id);
	var icon = mrow.getElementsByTagName('h4')[0].firstChild;
	var old_icon_src = icon.src;
	icon.src = 'http://images.multiply.com//common/misc/indicator-small.gif';
	var callback = function(req) { insert_replies(req, message_id, icon, old_icon_src); };
	ajax(url, callback);
}
// determine which mouse button was clicked
function mouse_button(event) {
        var button_map;
        if (event.button != undefined) {
                if (Multiply.Browser.is_msie) {
                        button_map = { 1 : 'left', 4 : 'middle', 2 : 'right' };
                }
                else {
                        button_map = { 0 : 'left', 1 : 'middle', 2 : 'right' };
                }
                return button_map[event.button];
        }
        return null;
}

// check if it was just a left mouse click (without any modifiers - control or alt - pressed)
//
// http://msdn.microsoft.com/en-us/library/ms533544%28VS.85%29.aspx says:
//    [The button] property is used with the  onmousedown,  onmouseup, and  onmousemove events.
//     For other events, it defaults to 0 regardless of the state of the mouse buttons.
// So, we have to detect the mouse button and remember it in onmousedown handler, and use the
// remembered value when called from click handler. That also means resetting the value in click
// handler, so that no stale value is used for later events.
var Last_Click_Type = null;
function is_pure_left_click(event) {
	event = (event) ? event : ((window.event) ? event : null);
	if (event && (event.ctrlKey || event.metaKey)) {
		return false;
	}
        var button;
        if (event.type.match(/^mouse/)) {
                button = mouse_button(event);
                Last_Click_Type = button;
        }
        else if (event.type == 'click') {
                button = Last_Click_Type;
                Last_Click_Type = null;
        }
	if (button != null && (button == 'right' || button == 'middle')) {
                return false;
        }
        return true;
}

function load_message(message_id, replies_read, event, goto_reply) {
	event = (event) ? event : ((window.event) ? event : null);
	// if (event && (event.ctrlKey || event.metaKey)) {
	if (event && !is_pure_left_click(event)) {
		return true;
	}
	else {
		var url = '/mail/message/' + message_id + '?replies_read=' + replies_read;
		var after_callback = function() { var a = getEl('anchor' + replies_read); if(a) {getEl('centerrail').scrollTop = getPosition(a).y - 50} };
		load_centerrail("none", url, null, event, after_callback);
	        try {
		        maybe_restore_live_replies();
	        }
	        catch (error) {
	        };
		return false;
	}
}
function num_keys(the_array) {
	var keys = new Array();
	for (i in the_array) {
		keys.push(i);
	}
	return keys.length;
}
var Preloaded_Messages = new Array();
var Preloaded_Messages_Timeout = 60000;
var Preloaded_Messages_Purge = 600000;
var Preloaded_Messages_In_Flight = new Array();
function preload_message_mouseover(element, message_id, replies_read, event) {
	if (!checkMouseEnter(element, event)) return;
	if (num_keys(Preloaded_Messages_In_Flight) >= 4) return;
	preload_message(message_id, replies_read);
}
function preload_message(message_id, replies_read) {
	purge_preloaded_messages(message_id);
	if (Preloaded_Messages[message_id]) return;
	var width = getEl('rightrailspacer') ? extract_number(getEl('rightrailspacer').width) : 0;
	var url = '/mail/item/' + message_id + '/' + replies_read + '//' + width;
	var callback = function(req) { 
		delete Preloaded_Messages_In_Flight[message_id];
		var t = new Date().getTime();
		Preloaded_Messages[message_id] = { timestamp: t, html: req.responseText }; 
	};
	Preloaded_Messages_In_Flight[message_id] = { state: 'requested'};
	ajax(url, callback);
}
function preload_initial_messages() {
	var main_inbox = getEl('main_inbox');
	if (!main_inbox) return;
	var mrows = getElementsByClassName('mrow', main_inbox, 'div');
	for (var i = 0; i < 4; i++) {
		var mrow = mrows[i];
		if (!mrow) continue;
		var id = mrow.id.replace(/^mrow_/, '');
		var replies_read = mrow.getAttribute('repliesread');
		preload_message(id, replies_read);
	}
}
function get_preloaded_message_html(message_id) {
	return Preloaded_Messages[message_id] ? Preloaded_Messages[message_id].html : null;
}
function purge_preloaded_messages(loaded_message_id) {
	// remove the cache if it's more than a minute old
	var timeout = new Date().getTime() - Preloaded_Messages_Timeout;
	if (loaded_message_id && Preloaded_Messages[loaded_message_id])
		if (Preloaded_Messages[loaded_message_id].timestamp < timeout) {
			//alert("TIMED OUT: " + loaded_message_id);
			delete Preloaded_Messages[loaded_message_id];
		}

	// clear any cache entries over 10 minutes old
	var purge = new Date().getTime() - Preloaded_Messages_Purge;
	for (message_id in Preloaded_Messages) {
		if (Preloaded_Messages[message_id].timestamp < purge) {
			//alert("PURGE: " + message_id);
			delete Preloaded_Messages[message_id];
		}
	}
}
function get_centerrail_sequence() {
	return Center_Rail_Sequence;
}
function check_onbeforeunload() {
	if (window.onbeforeunload) { 
		var msg = window.onbeforeunload();
		if (msg && !confirm('Are you sure you want to navigate away from this page?\n\n' + msg + '\n\nPress OK to continue, or Cancel to stay on the current page.')) return true; 
	}
	window.onbeforeunload = null;
	return false;
}
function set_loading_message(id) {
	var el = getEl(id);
	if (el) el.innerHTML = "<div class=loading><div class=centerpad><img width='16' src='http://images.multiply.com//common/misc/indicator-small.gif' class='indicator' height='16' /> Loading...</div></div>";
}
function set_loading_message_small(id) {
	var el = getEl(id);
	if (el) el.innerHTML = "<div class=centerpad><img width='16' src='http://images.multiply.com//common/misc/indicator-small.gif' class='indicator' height='16' /> Loading...</div>";
}
function click_link(event) {
	if (check_onbeforeunload()) return;
	event = (event) ? event : ((window.event) ? event : null);
	// if (event && (event.ctrlKey || event.metaKey)) {
	if (event && !is_pure_left_click(event)) {
		return true;
	}
	return false;
}
var Center_Rail_Sequence = 0;
var Current_URI;
function load_mainbody(li_id, url, params, event, track_ext) {
	return load_centerrail(li_id, url, params, event, track_ext, 'all');
}
function load_bothrails(li_id, url, params, event, track_ext) {
	return load_centerrail(li_id, url, params, event, track_ext, 1);
}
function load_bothrails_wide(li_id, url, params, event, track_ext) {
	return load_centerrail(li_id, url, params, event, track_ext, 'wide');
}
function load_centerrail(li_id, url, params, event, track_ext, hide_rightrail) {
	if (check_onbeforeunload()) return;
	event = (event) ? event : ((window.event) ? event : null);
	// if (event && (event.ctrlKey || event.metaKey)) {
	if (event && !is_pure_left_click(event)) {
		return true;
	}
	Current_URI = url;
	Center_Rail_Sequence++;
	Reload_Mailbox_URI = 0;
	set_selected_li(li_id);
	if (getEl('centerrail')) {
		if (hide_rightrail) {
			if (hide_rightrail == 'all')
				display('siderail', 0);
			display('rightrailtd', 0);
			display('rightrailspacer', 0);
			if (getEl('centerrailshadow')) {
				if (hide_rightrail == 'wide') {
					getEl('centerrailshadow').style.width = '100%';
					getEl('centerrailshadow').style.margin = '0';
					set_loading_message('centerrail');
				}
				else {
					getEl('centerrailshadow').style.width = 'auto';
					getEl('centerrailshadow').style.margin = '0 auto';
					set_loading_message_small('centerrail');
				}
			}
			else {
				set_loading_message('centerrail');
			}
		}
		else {
			display('rightrailtd', 1);
			display('rightrailspacer', 1);
			if (getEl('centerrailshadow')) {
				getEl('centerrailshadow').style.width = '100%';
				getEl('centerrailshadow').style.margin = '0';
			}
			set_loading_message('centerrail');
		}
		var crs = Center_Rail_Sequence;
		var callback = function(req) { if (crs < get_centerrail_sequence()) return; var newbody = strip_header_footer(req.responseText); set_rail_height(newbody); getEl('centerrail').innerHTML = newbody; setTimeout("focus_centerrail()", 10); run_embedded_scripts(req.responseText); handle_centerrail_scroll(); track_url(omniture_pagename,track_ext); };
		erase_rightrail();
                if (global_self_serve_ad_top) {
                     if (global_reload_ad_iframe) {
                         var current_date = new Date;
		         var unixtime_ms = current_date.getTime();
                         window.frames['mailad'].location = '/mail/gam-iframe?' + unixtime_ms;
                     }
                     else {
                        global_reload_ad_iframe = true;
                     }
                     if (!params) { var params = new Object }
                     for (i in global_self_serve_ad_top) {
                         params['self_serve_top_'+i] = global_self_serve_ad_top[i]; 
                     }
                }
                if (global_self_serve_ad_bottom) {
                     if (!params) { var params = new Object }
                     for (i in global_self_serve_ad_bottom) {
                         params['self_serve_bottom_'+i] = global_self_serve_ad_bottom[i]; 
                     }
                }
		if (params && params['method'])
			ajax(url, callback, {method: 'GET', params: params});
		else
			ajax(url, callback, {params: params});
		if (li_id != 'none')
			if (li_id) window.location.hash = '_' + li_id;
			else window.location.hash = '+' + url;
	}
	else {
		if (params && params['method'] == 'GET')
                        window.location.href = url;
                else
		        submit_this(url, params);
	}
	return false;
}
function set_hash_param(variable, value) {
	var tokens;
	if (window.location.hash.match(/%23/))
		tokens = window.location.hash.split('%23');
	else
		tokens = window.location.hash.split('#');
	var newhash = new Array();
	var replaced = 0;
	for (var i = 0; i < tokens.length; i++) {
		var varval = tokens[i].split('=');
		if (varval[0] == variable) {
			newhash.push(variable + '=' + value);
			replaced = 1;
		}
		else {
			newhash.push(tokens[i]);
		}
	}
	if (!replaced)
		newhash.push(variable + '=' + value);
	window.location.hash = newhash.join('#');
}
function hash_param(variable) {
	var tokens;
	if (window.location.hash.match(/%23/))
		tokens = window.location.hash.split('%23');
	else
		tokens = window.location.hash.split('#');
	for (var i = 0; i < tokens.length; i++) {
		var varval = tokens[i].split('=');
		if (varval[0] == variable)
			return varval[1];
	}
	return;
}
function load_centerrail_get(li_id, url, params, event) {
	if (check_onbeforeunload()) return;
	event = (event) ? event : ((window.event) ? event : null);
	// if (event && (event.ctrlKey || event.metaKey)) {
	if (event && !is_pure_left_click(event)) {
		return true;
	}
	Current_URI = url;
	Center_Rail_Sequence++;
	set_selected_li(li_id);
	display('rightrailtd', 1);
	display('rightrailspacer', 1);
	if (getEl('centerrail')) {
		var crs = Center_Rail_Sequence;
		var callback = function(req) { if (crs < get_centerrail_sequence()) return; var newbody = strip_header_footer(req.responseText); set_rail_height(newbody); getEl('centerrail').innerHTML = newbody; setTimeout("focus_centerrail()", 10); run_embedded_scripts(req.responseText); handle_centerrail_scroll(); track_url(omniture_pagename); };
		set_loading_message('centerrail');
		erase_rightrail();
		ajax(url, callback, {params: params, method: 'GET'});
		if (li_id) window.location.hash = '_' + li_id;
		else window.location.hash = '+' + url;
	}
	else {
		window.location.href = url;
	}
	return false;
}
function erase_rightrail() {
	var el = getEl('rightrail');
	if (el) el.innerHTML = '<div class=loading><div class=centerpad></div></div>';
	try {
		maybe_suspend_live_replies();
	}
	catch (error) {
	};
}
function erase_centerrail() {
	var el = getEl('centerrail');
	if (el) el.innerHTML = '';
}
function set_scrolling_panes(value) {
	if (value == 2)
		Scrolling_Panes = value;
	else if (Multiply.Browser.is_msie)
		Scrolling_Panes = 0; /* MSIE doesn't like two pane */
	else
		Scrolling_Panes = value;
}
function handle_centerrail_scroll() {
	if (!Scrolling_Panes && window.pageYOffset > 50)
		window.scrollTo(0, 0);
}
function load_current_mailbox(li_id) {
	if (window.location.hash && window.location.hash.length > 0) {
		load_centerrail_from_hash(null, 'mainfilter', '/mail/recent');
	}
	else {
		var el = getEl(li_id);
		if (el && el.onmousedown) {
			try {
			    el.onmousedown.call();
			}
			catch (error) {
			    var fake_event = document.createEvent('MouseEvents');
			    fake_event.initMouseEvent('mousedown',true,true,window,1,0,0,0,0,false,false,true,false,0,null);
			    el.dispatchEvent(fake_event);
			}
			el.className = 'selected filter';
		}
		else if (el && el.onclick) {
			try {
			    el.onclick.call();
			}
			catch (error) {
			    var fake_event = document.createEvent('MouseEvents');
			    fake_event.initMouseEvent('click',true,true,window,1,0,0,0,0,false,false,true,false,0,null);
			    el.dispatchEvent(fake_event);
			}
			el.className = 'selected filter';
		}
		else {
			window.location.href = '/mail#_mainfilter';
		}
	}
}
function load_centerrail_from_hash(fallback_uri, fallback_li_id, fallback_load) {
	if (window.location.hash && window.location.hash != '#_none' && window.location.hash != '_none') {
		var goto = window.location.hash.replace(/^#?_/, '').replace('&mail:unread=1', '').replace(/#.*/, '').replace(/%23.*/, '');
		var el = getEl(goto);
		if (el && el.onmousedown) {
			try {
			    el.onmousedown.call();
			}
			catch (error) {
			    var fake_event = document.createEvent('MouseEvents');
			    fake_event.initMouseEvent('mousedown',true,true,window,1,0,0,0,0,false,false,true,false,0,null);
			    el.dispatchEvent(fake_event);
			}
			el.className = 'selected filter';
		}
		else if (el && el.onclick) {
			try {
			    el.onclick.call();
			}
			catch (error) {
			    var fake_event = document.createEvent('MouseEvents');
			    fake_event.initMouseEvent('click',true,true,window,1,0,0,0,0,false,false,true,false,0,null);
			    el.dispatchEvent(fake_event);
			}
			el.className = 'selected filter';
		}
		else {
			var goto = window.location.hash.replace(/^#?\+/, '');
                        if (goto.match(/^%2F/)) {
                                // decode it in case it wasn't (I am talking about you, IE6!)
                                goto = decodeURIComponent(goto);
                        }
			if (goto && goto.match(/\//)) {
				load_centerrail('none', goto);
			}
		}
	}
	else if (fallback_uri) {
		window.location.href = fallback_uri;
	}
	else if (fallback_load) {
		load_centerrail(fallback_li_id, fallback_load);
	}
}
function load_user_mailbox(user_id) {
	load_centerrail('user' + user_id + 'filter', "/mail/contacts/contact/" + user_id);
	return false;
}
var Reload_Mailbox_On;
var Reload_Mailbox_Interval;
var Reload_Mailbox_Settings;
var Reload_Mailbox_URI;
var Mrows_Per_page;
function start_reload_mailbox(settings, uri) {
	Reload_Mailbox_On = 1;
	clearInterval(Reload_Mailbox_Interval);
	if (uri) Reload_Mailbox_URI = uri;
	if (settings) Reload_Mailbox_Settings = settings;
	Reload_Mailbox_Interval = setInterval('reload_mailbox()', 15000);
	// maybe pre-load the first N messages?
}
function stop_reload_mailbox() {
	clearInterval(Reload_Mailbox_Interval);
	Reload_Mailbox_On = 0;
}
function reload_mailbox_now() {
	//reset the timer
	if (Reload_Mailbox_On) {
		start_reload_mailbox(Reload_Mailbox_Settings, Reload_Mailbox_URI);
		reload_mailbox();
	}
}
function shrink_message_out(id) {
	Shrink_Heights[id] = new Shrink_Height(id);
	Shrink_Heights[id].delta = 8;
	Shrink_Heights[id].state = 58;
	Shrink_Heights[id].delete_when_done = 1;
}
function grow_message_in(el, insertion_point, message_id) {
	var main_inbox = getEl('main_inbox');
	if (!main_inbox) return;
	el.id = message_id;
	el.style.height = '0px';
	el.style.display = 'none';
	if (insertion_point)
		main_inbox.insertBefore(el, insertion_point);
	else
		main_inbox.appendChild(el);
	var id = el.id;
	Shrink_Heights[id] = new Shrink_Height(id);
	Shrink_Heights[id].delta = -8;
	Shrink_Heights[id].state = 0;
	Shrink_Heights[id].end = 60;
}
function find_insertion_point(mrows, element) {
	var timestamp = element.getAttribute('lastupdate');
	for (var i = 0; i < mrows.length; i++) {
		if (timestamp > mrows[i].getAttribute('lastupdate'))
			return mrows[i];
	}
}
function insert_new_messages(new_messages) {
	if (new_messages.length == 0) return;

	var main_inbox = getEl('main_inbox');
	for (var i = 0; i < new_messages.length; i++) {
		var new_mrow = new_messages[i];
		if (!new_mrow) continue;
		var new_node = new_mrow.node;
		var message_id = new_mrow.id;
		var old_mrow = getEl(message_id);
		var existing_mrows = getElementsByClassName('mrow', main_inbox, 'div');
		var insertion_point = find_insertion_point(existing_mrows, new_node);
		if (old_mrow) {
			if (extract_number(old_mrow.getAttribute('numreplies')) 
			    < extract_number(new_node.getAttribute('numreplies'))) 
			{
				var old_id = "old_" + message_id;
				old_mrow.id = old_id;
				if (old_mrow.className.match(/selected/))
					new_node.className += ' selected';
				grow_message_in(new_node, insertion_point, message_id);
				shrink_message_out(old_id);
				delete Preloaded_Messages[message_id];
				var replies_read = new_node.getAttribute('repliesread');
				preload_message(message_id, replies_read);
				//alert("PRELOADED: " + message_id);
			}
		}
		else {
			if (!insertion_point) continue;
			grow_message_in(new_node, insertion_point, message_id);
			if (existing_mrows.length >= Mrows_Per_page) {
				var last_message_id = existing_mrows[existing_mrows.length-1].id;
				shrink_message_out(last_message_id);
			}
		}
	}
}
function get_mailbox_uri() {
	return Reload_Mailbox_URI;
}
function reload_mailbox() {
	if (Current_URI != Reload_Mailbox_URI) return;
	var crs = Center_Rail_Sequence;
	var uri = Reload_Mailbox_URI;
	var callback = function(req) {
		if (crs < get_centerrail_sequence()) return; 
		if (uri != get_mailbox_uri()) return;
		//var newbody = req.responseText;
		var hidden_inbox = getEl('hidden_inbox');
		hidden_inbox.innerHTML = req.responseText;
		run_embedded_scripts(req.responseText);
		//hidden_inbox.innerHTML = newbody.replace(/ id=\'mrow_/g, " id='new_mrow_").replace(/id=main_inbox/, 'id=new_main_inbox');
		var new_mrows = getElementsByClassName('mrow', hidden_inbox, 'div');
		var new_messages = new Array();
		for (var i = 0; i < new_mrows.length; i++) {
			var message_id = new_mrows[i].id.replace(/new_/, '');
			var new_message = { 
				id: message_id, 
				node: new_mrows[i]
			};
			new_messages.push(new_message);
		}
		hidden_inbox.innerHTML = '';
		insert_new_messages(new_messages);
	};
	var uri2 = '/mail/new/' + Reload_Mailbox_Settings + Reload_Mailbox_URI;
	ajax(uri2, callback);
        track_url('/mail/new');
}
function set_realtime() {
	var el = getEl('realtimeupdates');
	var live = el.checked ? 1 : 0;
	var uri = "/user/set-pref/mail:realtime/" + live;
	if (live) {
		var callback = function () { start_reload_mailbox(); reload_mailbox(); }
		ajax(uri, callback);
	}
	else {
		stop_reload_mailbox();
		ajax(uri, do_nothing);
	}
}
function load_group(group_id) {
	return load_centerrail('group' + group_id + 'filter', "/mail/groups/group/" + group_id);
}
function load_contact(user_id) {
	return load_centerrail('user' + user_id + 'filter', "/mail/contacts/contact/" + user_id);
	display('top5sep', 0);
	UserListEls = getEl('userlist').getElementsByTagName('li');
	slide_down(UserListEls[0].offsetHeight, user_id);
	set_selected_li(getEl('user' + user_id + 'filter'));
	load_into('contacts-inbox', "/mail/contacts/contact/" + user_id, null, 1);
}
function toggle_ul(id, element) {
	var el = getEl(id);
	var elarrow = getEl(id + 'arrow');
	if (!el) return;
	var on_off;
	if (el.style.display == '') {
		on_off = 0;
		el.style.display = 'none';
		if (elarrow)
			elarrow.src = 'http://images.multiply.com/multiply/manage/mediaarrowright.png';
	}
	else {
		on_off = 1;
		el.style.display = '';
		if (elarrow)
			elarrow.src = 'http://images.multiply.com/multiply/manage/mediaarrowdown.png';
	}

	var url = '/user/set-pref/siderail:sections:' + id + '/' + on_off;
	ajax(url, do_nothing);
}

function open_window_with_post(url,name,post,options) {
    var new_window = window.open(url,name,options,false);
    if (!new_window) return false;
    var html = '';
    html += "<html><head></head><body><form id='formid' method='post' action='" + url + "'>";
    for (var key in post) {
	html += "<input type='hidden' name='" + key + "' value='" + post[key] + "'/>";
    }
    html += "</form><sc" + "ript>document.getElementById('formid').submit()</scri" + "pt></body></html>";
    new_window.document.write(html);
    return new_window;
}

var Old_On_Click;
function open_menu() {
	if (Multiply.Browser.is_msie && Multiply.Browser.version == 6) {
		window.location.href = 'http://multiply.com';
		return;
	}
	display('menu', 1);
	Old_On_Click = document.onclick;
	setTimeout("document.onclick = close_menu;", 10);
}
function close_menu() {
	display('menu', 0);
	display('submenu', 0);
	document.onclick = Old_On_Click;
}
function init_search() {
	var el = getEl('searchinput');
	if (el.value == '  Search') el.value = '';
	el.style.color = '#000';
}
function open_search() {
	display('searchdd', 1);
	var el = getEl('searchinput');
	el.style.color = '#000';
	if (el.value == '  Search') el.value = '';
        if (!Doing_Search) {
	        select_search("people");
	        //Old_On_Click = document.onclick;
	        //document.onclick = close_search;
	        Doing_Search = 'people';
        }
}
function select_search(id) {
	// getEl('searchpeople').style.backgroundColor = 'inherit';
	// getEl('searchcontent').style.backgroundColor = 'inherit';
	// getEl('searchgroups').style.backgroundColor = 'inherit';
	getEl('searchpeople').className = 'search-unselected';
	getEl('searchcontent').className = 'search-unselected';
	getEl('searchgroups').className = 'search-unselected';
	getEl('searchlocker').className = 'search-unselected';
	if (id != 'none') {
		// getEl('search' + id).style.backgroundColor = '#558eca';
		getEl('search' + id).className = 'search-selected';
		Doing_Search = id;
	}
	else {
		Doing_Search = '';
	}
}
function close_search() {
	display('searchdd', 0);
	//var el = getEl('searchinput');
	//el.value = '  Search';
	///el.style.color = '#999';
}
function do_search(type) {
	if (!type) type = Doing_Search;
	var q = getEl('searchinput').value;
        var url;
        if (type == 'content') {
                url = 'http://multiply.com/search/content?content_search::q=' + encodeURIComponent(q) + '&autosubmit=1';
        }
        else if (type == 'groups') {
                url = 'http://multiply.com/search/groups?text=' + encodeURIComponent(q) + '&autosubmit=1';
        }
        else if (type == 'locker') {
		url = 'http://multiply.com/gus/manage?q=' + encodeURIComponent(q) + '&autosubmit=1';
        }
        else {
	        url = 'http://multiply.com/search/people?q=' + encodeURIComponent(q) + '&autosubmit=1';
        }
        window.location.href = url;
}
var CenterRailHeight = 400;
var ZoomRailHeight;
var CenterRailBottomMargin = 0;
function set_rail_height(body_html) {
	//var headerheight = 112;
	var CenterRailBottomMargin = 0;
	var toolbar_margin = 0;
	var centerrail = getEl('centerrail');
	//if (getEl('page-toolbar'))
	//CenterRailBottomMargin = getEl('page-toolbar').offsetHeight;
	var headerheight = getEl('header').offsetHeight;
	var centerrailpos = getPosition(centerrail);
	var footer = getEl('ownedfooter') || getEl('footer');
	var footerheight = footer ? footer.offsetHeight : 24;
	var wheight = window_height();
	var siderail = getEl('siderail');

	if (Scrolling_Panes)
		siderail.style.height = (wheight - headerheight - footerheight) + 'px';
	var siderailhandle = getEl('siderailhandle');
	var centerrailhandle = getEl('centerrailhandle');
	if (siderailhandle) {
		var adjustment = 1;
		if (centerrailhandle) adjustment = -10;
		siderailhandle.style.height = (wheight - headerheight - footerheight) + 'px';
		siderailhandle.style.left = (siderail.offsetWidth+adjustment) + 'px';
	}
	if (centerrailhandle) {
		var rightrail = getEl('rightrail');
		var rightrailpos = getPosition(rightrail);
		centerrailhandle.style.height = (wheight - headerheight - footerheight) + 'px';
		centerrailhandle.style.left = (rightrailpos.x - 10) + 'px';
	}
	var theheight = (wheight - centerrailpos.y - footerheight - CenterRailBottomMargin);
	var selectoutlinewrap = getEl('selectoutlinewrap');
	if (selectoutlinewrap)
		selectoutlinewrap.style.height = (wheight - headerheight - CenterRailBottomMargin) + 'px';
	if (Scrolling_Panes && Scrolling_Panes != 2) {
		centerrail.style.height = theheight + 'px';
		CenterRailHeight = theheight;
	}
	ZoomRailHeight = theheight;
	maybe_set_iframe_height();
}

function maybe_set_iframe_height() {
    if (Multiply.Browser.is_msie && getEl('centerrailiframe')) {
	var centerrail_height = getEl('centerrail').offsetHeight;
	var centerrail_width = getEl('centerrail').offsetWidth;
	getEl('centerrailiframe').style.width = centerrail_width + 'px';
	getEl('centerrailiframe').style.height = centerrail_height + 'px';
    }
}
var OldOnMouseMove;
var OldOnMouseUp;
var DragRailName;
function drag_rail_start(name) {
	OldOnMouseMove = document.onmousemove;
	OldOnMouseUp = document.onmouseup;
	document.onmouseup = drag_rail_done; 
	document.onmousemove = drag_rail_move;
	DragRailName = name;
	return false;
}
function drag_rail_done() {
	document.onmouseup = OldOnMouseUp; 
	document.onmousemove = OldOnMouseMove;
	var width = 0;
	if (getEl('siderailtd') && getEl('siderailtd').style)
		width = extract_number(getEl('siderailtd').style.width);
	if (!width)
		if (getEl('siderail') && getEl('siderail').style)
			width = extract_number(getEl('siderail').style.width);
	if (!width)
		width = getEl('siderailtd').offsetWidth || 190;
	var url = '/user/set-pref/siderail:' + DragRailName + ':width/' + width;
	ajax(url, do_nothing);
}
function drag_rail_move(e) {
	if (e == null) var e = window.event; 
	var value = e.clientX > 100 ? e.clientX : 100;
	getEl('siderailhandle').style.left = (value+1) + 'px';
	if (getEl('siderailtd'))
		getEl('siderailtd').style.width = value + 'px';
	if (getEl('siderail'))
		getEl('siderail').style.width = value + 'px';
	var cr = getEl('centerrail');
	if (cr && Scrolling_Panes == 1) {
		addCss('div.page-toolbar { margin-right: ' + value + 'px; }');
	}
	cancelEvent(e);
	return false;
}
function make_reorder_list(el) {
}
function scroll_offset(element_name) {
	if ( Multiply.Browser.is_msie ) {
		return (self.pageYOffset || document.documentElement.scrollTop);
	}
	else {
		return getEl(element_name).scrollTop;
	}
}
var DragList = new Object();
function drag_list_init(element, finish_function, swap_function, handle) {
	DragList = new Object();
	var li_pos = new Array();
	var els = getElementsByClassName('draggable', element);
	var order = '';
	var last_height;
	for (var i = 0; i < els.length; i++) {
		var pos = getPosition(els[i]);
		pos.el = els[i];
		pos.height = pos.el.offsetHeight;
		if (last_height && last_height != pos.height)
			DragList.different_heights = 1;
		last_height = pos.height;
		li_pos.push(pos);
		order = order + "\n" + els[i].id;
	}
	DragList.start_order = order;
	DragList.li_pos = li_pos;
	DragList.element = element;
	DragList.finish_function = finish_function;
	DragList.swap_function = swap_function;
	DragList.handle = handle;
	if (handle) {
		var els = getElementsByClassName(handle, element);
		for (var i = 0; i < els.length; i++) {
			els[i].onmousedown = drag_list_start;
		}
	}
	else {
		element.onmousedown = drag_list_start;
	}
}
function drag_list_start(e) {
	if (e == null) var e = window.event; 
	var target = e.target != null ? e.target : e.srcElement;
	for (var i = 0; i < 10; i++) {
		if (target.className.match(new RegExp('\\bdraggable\\b'))) break;
		target = target.parentNode;
	}
	if (i > 8) return;
	OldOnMouseMove = document.onmousemove;
	OldOnMouseUp = document.onmouseup;
	document.onmouseup = drag_list_done; 
	document.onmousemove = drag_list_move;
	var maybe_offset_y = scroll_offset('centerrail');
	DragList.target = target;
	DragList.startX = e.clientX;
	DragList.startY = e.clientY + maybe_offset_y;

	var pos = getPosition(target);
	DragList.targetX = pos.x;
	DragList.targetY = pos.y + maybe_offset_y;

	document.body.focus();

	document.onselectstart = function () { return false; };
	target.ondragstart = function() { return false; };
	DragList.target.ondragstart = function() { return false; };

	return false;
}
function drag_list_done() {
	document.onmouseup = OldOnMouseUp; 
	document.onmousemove = OldOnMouseMove;
	DragList.target.style.visibility = 'visible';
	display('dragdiv', 0);
	getEl('dragdiv').innerHTML = '';
	var order = '';
	var els = getElementsByClassName('draggable', DragList.element);
	for (var i = 0; i < els.length; i++) {
		order = order + "\n" + els[i].id;
	}
	if (order != DragList.start_order) {
		DragList.finish_function(order);
	}
	drag_list_init(DragList.element, DragList.finish_function, DragList.swap_function, DragList.handle);
	return true;
}
function drag_list_move(e) {
	if (e == null) var e = window.event; 
	var delta_x = e.clientX - DragList.startX + DragList.targetX;
	var delta_y = e.clientY - DragList.startY + DragList.targetY;

	var container_scroll = 0;
	if (getEl('siderailwrappercontents') && getEl('siderailwrappercontents').scrollTop)
		container_scroll = getEl('siderailwrappercontents').scrollTop;

	delta_y -= container_scroll;

	if (DragList.dragging) {
		var dragdiv = getEl('dragdiv');
		dragdiv.style.left = delta_x + 'px';
		dragdiv.style.top = delta_y + 'px';

		var li_pos = DragList.li_pos;
		var target_id = DragList.target.id;
		var virgin = 1;
		var reference_node;
		var before_after = 'before';
		var i;
		if (! DragList.start_pos) {
			for (var i = 0; i < li_pos.length; i++) {
				if (DragList.target.id == li_pos[i].el.id)
					DragList.start_pos = i;
			}
		}
		var start_y = getPosition(DragList.element).y;
		var height = DragList.target.offsetHeight;
		var maybe_offset_y = Multiply.Browser.is_msie ? scroll_offset() : 0;
		maybe_offset_y += container_scroll;
		var mouseY = e.clientY + maybe_offset_y;
		var i = 0;
		if (DragList.different_heights) {
			var y = start_y;
			for (var j = 0; j < li_pos.length; j++) {
				start_y += li_pos[j].height;
				if (mouseY < start_y) {
					i = j;
					break;
				}
			}
		}
		else {
			i = Math.floor((mouseY - start_y) / height);
		}
		var swapped = 0;
		if (i < 0) i = 0;
		if (i < DragList.start_pos) {
			DragList.element.insertBefore(DragList.target, li_pos[i].el);
			swapped++;
		}
		else if (i == DragList.start_pos) {
			if (i == 0)
				DragList.element.insertBefore(DragList.target, DragList.element.firstChild);
			else
				insertAfter(DragList.target, li_pos[i-1].el);
			swapped++;
		}
		else if (li_pos[i]) {
			insertAfter(DragList.target, li_pos[i].el);
			swapped++;
		}
		if (swapped && DragList.swap_function) {
			DragList.swap_function();
		}
		//DragList.start_pos = i;
		DragList.lastY = e.clientY;
		return;
	}

	if (Math.abs(e.clientX - DragList.startX) > 3 || Math.abs(e.clientY - DragList.startY) > 3) {
		var new_el = DragList.target.cloneNode(true);
		DragList.target.style.visibility = 'hidden';
		new_el.id = new_el.id + '-dragging';
		new_el.style.zIndex = 99100000;
		new_el.className = new_el.className + ' dragging';
		new_el.style.width = DragList.target.offsetWidth + 'px';
		DragList.dragging = 1;
		var dragdiv = getEl('dragdiv');
		dragdiv.innerHTML = '';
		dragdiv.style.zIndex = 99100000;
		dragdiv.appendChild(new_el);
		dragdiv.style.left = delta_x + 'px';
		dragdiv.style.top = delta_y + 'px';
		display('dragdiv', 1);
	}
}
var Sliding;
function slide_to(element, x, y, delay) {
	if (Sliding) return;
	Sliding++;
	var el = getEl(element);
	var pos = getPosition(getEl(element));
	var inc_x = (pos.x - x) / 10;
	var inc_y = (pos.y - y) / 10;
	var new_margin = y - pos.y + extract_number(el.style.marginTop);
	el.style.marginTop = new_margin + 'px';
	el.style.marginBottom = (-1 * new_margin) + 'px';
	return;
	slide_recurse(element, x, y, inc_x, inc_y, delay);
}
function slide_recurse(element, final_x, final_y, inc_x, inc_y, delay) {
	var el = getEl(element);
	var pos = getPosition(getEl(element));
	var current_x = pos.x;
	var current_y = pos.y;
	if (final_x == current_x && final_y == current_y) {
		Sliding = 0;
		getEl('inboxsection').innerHTML = getEl('inboxsection').innerHTML + '<br>DONE';
		return;
	}
	if (current_x != final_x) {
		if (Math.abs(current_x - final_x) < Math.abs(inc_x))
			current_x = final_x;
		else
			current_x += inc_x;
	}
	if (current_y != final_y) {
		if (Math.abs(current_y - final_y) < Math.abs(inc_y))
			current_y = final_y;
		else
			current_y += inc_y;
	}
	getEl('inboxsection').innerHTML = getEl('inboxsection').innerHTML + '<br>Moving to: ' + current_y;
	el.style.top = current_y + 'px';
	el.style.left = current_x + 'px';
	setTimeout("slide_recurse('" + element + "', " + final_x + ", " + final_y + ", " + inc_x + ", " + inc_y + ", " + delay + ")", delay);
}
function set_filter_count(id, value) {
	var count_el = getEl(id);
	if (! count_el) return;
	display(id, (value > 0));
	count_el.innerHTML = value;
	var li_el = count_el.parentNode;
	if (value > 0 && li_el && !li_el.getAttribute("hidden"))
		li_el.style.display = '';
}

var Tmp_Div = document.createElement('div');
function set_filter_for_users(users) {
	var els = getEl('contacts').getElementsByTagName('a');
	var to_delete = new Array();
	for(var x=0; x<els.length - 1; x++) {
		var el = els[x];
		var user_id = '';
		var favorite = false;
		for(var y=0; y<el.attributes.length; y++) {
		    var name = el.attributes[y].name;
		    if (name == 'user_id') {
			user_id = el.attributes[y].value;
		    }
		    if (name == 'favorite') {
			favorite = true;
		    }
		}
		if (user_id) {
		    if (users && users[user_id]) {
			    display('user' + user_id + 'filter', 1);
			    set_filter_count('user' + user_id + 'count', users[user_id]['count']);
			    to_delete.push(user_id);
		    }
		    else if (!favorite) {
			    display('user' + user_id + 'filter', 0);
		    }
		}
	}
	for(var x=0; x<to_delete.length; x++) {
		delete users[to_delete[x]];
	}
	if (users) {
		for(var user_id in users) {
			inject_filter('contacts', users[user_id]['html']);
			set_filter_count('user' + user_id + 'count', users[user_id]['count']);
		}
	}
}
function inject_filter(type, html) {
	var els = getEl(type).getElementsByTagName('a');
	var last_element = els[els.length - 1];
	Tmp_Div.innerHTML = html;
	var tmp_href = Tmp_Div.firstChild;
	var was_inserted = false;
	for(var x=0; x<els.length - 1; x++) {
		var el = els[x];
		elhtml = el.innerHTML.replace(/<span.*?span>/g, '');
		tmphtml = tmp_href.innerHTML.replace(/<span.*?span>/g, '');
		if (elhtml.toLowerCase() > tmphtml.toLowerCase()) {
		    getEl(type).insertBefore(tmp_href, el);
		    x = els.length;
		    was_inserted = true;
		}
	}
	if (!was_inserted) {
	    getEl(type).insertBefore(tmp_href, last_element);
	}
}
function toggle_favorite(type, id, value, favorites_only, html) {
	var prefix = type == 'contacts' ? 'user' : 'group';
	if (value) {
		if (getEl(prefix + id + 'filter')) {
		    display(prefix + id + 'filter', 1);
		}
		else {
		    inject_filter(type, html);
		}
	}
	else {
		if (getEl(prefix + id + 'filter') && (favorites_only || (getEl(prefix + id + 'count') && getEl(prefix + id + 'count').style.display == 'none'))) {
		    display(prefix + id + 'filter', 0);
		}
	}
}

var Post_HTML;
var Notes_ACL;
var Mini_Crosspost_States = new Object();
var Mini_Crosspost_Fields = new Array();
Mini_Crosspost_Fields[0] = 'crosspost_mini_twitter';
Mini_Crosspost_Fields[1] = 'crosspost_mini_facebook';
Mini_Crosspost_Fields[2] = 'crosspost_mini_yahoo';

function click_post(group_id, group_name, event) {
	if (check_onbeforeunload()) return;
	event = (event) ? event : ((window.event) ? event : null);
	// if (event && (event.ctrlKey || event.metaKey)) {
	if (event && !is_pure_left_click(event)) {
		return true;
	}
	if (!getEl('centerrail') || !getEl('postholder')) {
		window.location.href = 'http://multiply.com/post';
		return;
	}
	if (Post_HTML) {
		getEl('centerrail').innerHTML = Post_HTML;
		if (Notes_ACL) {
			getEl('for-everyone').checked = (Notes_ACL == 'everyone');
			getEl('for-network').checked = (Notes_ACL == 'network');
			getEl('for-contacts').checked = (Notes_ACL == 'contacts');
		}
	}
	else {
		Post_HTML = getEl('centerrail').innerHTML = getEl('postholder').innerHTML;
		getEl('postholder').innerHTML = '';
	}
	for (crosspost_field in Mini_Crosspost_States ) {
		if ( Mini_Crosspost_States[crosspost_field] ) {
			getEl(crosspost_field).checked = 1;
		}
		else {
			getEl(crosspost_field).checked = 0;
		}
	}
	set_selected_li('none');
	display('rightrailtd', 0);
	display('rightrailspacer', 0);
	if (getEl('centerrailshadow')) {
		getEl('centerrailshadow').style.width = 'auto';
		getEl('centerrailshadow').style.margin = '0 auto';
	}
	set_rail_height(Post_HTML);
	reset_groups_div((group_id || default_group_id), 
			 (group_name || default_group_name));
        if (!is_hidden('post-new-content') && getEl('notefield'))
	        getEl('notefield').focus();
	track_url('/inbox/post');
	return false;
}
function start_post() {
	display('notnote', 0);
	display('note', 1);
        if (getEl('notefield'))
	        getEl('notefield').focus();
}
function cancel_post() {
	display('notnote', 1);
	display('note', 0);
}
function save_post() {
	var message = getEl('notefield').value;
	if (message && message.length > 0) {
		var acl = 'everyone';
		if (getEl('for-network').checked)
			acl = 'network';
		else if (getEl('for-contacts').checked)
			acl = 'contacts';
		Notes_ACL = acl;
		var url = '/mail/post-note';
		var params = new Object();
		params['subject'] = message;
		params['acl'] = acl;
		for (i in Mini_Crosspost_Fields) {
			if (getEl(Mini_Crosspost_Fields[i])) {
				if ( getEl(Mini_Crosspost_Fields[i]).checked ) {
					params[Mini_Crosspost_Fields[i]] = 1;
					Mini_Crosspost_States[Mini_Crosspost_Fields[i]] = 1;
				}
				else {
					params[Mini_Crosspost_Fields[i]] = 0;
					Mini_Crosspost_States[Mini_Crosspost_Fields[i]] = 0;
				}
			}   
		}
		var callback = function (req) { var inbox = getEl('main_inbox'); if(inbox) { inbox.innerHTML = req.responseText + inbox.innerHTML; } else if (getEl('centerrail')) { load_centerrail('mainfilter', "/mail/recent"); } else { window.location.href = '/'; } run_embedded_scripts(req.responseText); };
		ajax(url, callback, {params: params});
		track_url('/post/quicknote');
	     
	}
	cancel_post();
	getEl('notefield').value = '';
}
function save_group_post(group_id) {
	var message = getEl('groupnotefield').value;
	if (message && message.length > 0) {
		var url = '/mail/post-note/' + group_id;
		var params = new Object();
		params['subject'] = message;
		var callback = function (req) { var inbox = getEl('main_inbox'); if(inbox) { inbox.innerHTML = req.responseText + inbox.innerHTML; } else { load_centerrail('group' + group_id + 'filter', "/mail/groups/group/" + group_id); } run_embedded_scripts(req.responseText); };
		ajax(url, callback, {params: params});
	}
	//cancel_group_post();
	if (getEl('groupnotefield')) getEl('groupnotefield').value = '';
}
function open_note_for(event) {
	event = (event) ? event : ((window.event) ? event : null);
	var charCode = (event.charCode) ? event.charCode : ((event.which) ? event.which : event.keyCode);
	var myChar = String.fromCharCode (charCode).toLowerCase();
	if (event.ctrlKey && (myChar == "\n" || myChar == "\r")) {
		save_post();
		return;
	}

	var notefield = getEl('notefield');
	var len = notefield.value.length;
	if (len == 0) {
		display('note-is-for', 0);
		notefield.style.height = '16px';
	}
	else {
		display('note-is-for', 1);
		if (len < 50)
			notefield.style.height = '40px';
		else if (len < 150)
			notefield.style.height = '60px';
		else 
			notefield.style.height = '80px';
	}
}
function open_textarea(id, def) {
	var ta = getEl(id);
	var len = ta.value.length;
	if (len < 10)
		ta.style.height = '40px';
	else if (len < 40)
		ta.style.height = '40px';
	else if (len < 100)
		ta.style.height = '60px';
	else 
		ta.style.height = '80px';
}
function open_note_acl() {
	display('note-is-for', 0);
	set_opacity('note-acl', 100);
}
function delete_fsl(name) {
	if (confirm('Are you sure you want to delete this filter?')) {
		display('fsl' + name + 'filter', 0);
		display(name + 'row', 0);
		var url = '/mail/delete-fsl/' + encodeURIComponent(name);
		ajax(url, do_nothing);
	}
}
function hide_fsl(name) {
	var el = getEl('fsl' + name + 'filter');
	if (!el) return;
	var newstate = (el.style.display == 'none') ? 1 : 0;
	display('fsl' + name + 'filter', newstate);
	getEl(name + 'row').className = newstate ? 'draggable filterrow hand' : 'draggable filterrow hand hidden';
	getEl(name + 'hidelabel').innerHTML = newstate ? 'hide' : 'unhide';
	var url = '/mail/hide-fsl/' + encodeURIComponent(name) + '/' + (newstate ? 0 : 1);
	ajax(url, do_nothing);
}
function hide_group_filter(name) {
	var el = getEl('group' + name + 'filter');
	if (!el) return;
	var newstate = (el.style.display == 'none') ? 1 : 0;
	display('group' + name + 'filter', newstate);
	getEl(name + 'row').className = newstate ? 'draggable filterrow hand' : 'draggable filterrow hand hidden';
	getEl(name + 'hidelabel').innerHTML = newstate ? 'hide' : 'unhide';
	var url = '/mail/hide-group-filter/' + encodeURIComponent(name) + '/' + (newstate ? 0 : 1);
	ajax(url, do_nothing);
}
function hide_contact_filter(name) {
	var el = getEl('user' + name + 'filter');
	if (!el) return;
	var newstate = (el.style.display == 'none') ? 1 : 0;
	display('user' + name + 'filter', newstate);
	getEl(name + 'row').className = newstate ? 'draggable filterrow hand' : 'draggable filterrow hand hidden';
	getEl(name + 'hidelabel').innerHTML = newstate ? 'hide' : 'unhide';
	var url = '/mail/hide-contact-filter/' + encodeURIComponent(name) + '/' + (newstate ? 0 : 1);
	ajax(url, do_nothing);
}
function focus_centerrail() {
	if (!Scrolling_Panes)
		return;
	getEl('centerrail').focus();
}

function get_GET(name) {
	var q = document.location.search;
	var i = q.indexOf(name + '=');
	if (i == -1) {
		return false;
	}
	var r = q.substr(i + name.length + 1, q.length - i - name.length - 1);
	i = r.indexOf('&');
	if (i != -1) {
	    r = r.substr(0, i);
	}
	return r.replace(/\+/g, ' ');
}
function set_by_and_reload() {
	var fofs = getEl('fofscheckbox').checked ? '100' : '25';
	var groups = getEl('groupscheckbox') ? getEl('groupscheckbox').checked : 0;
	var unread = getEl('unreadcheckbox') ? getEl('unreadcheckbox').checked : 0;
	var uri = Current_URI.replace(/\?.*/, '');
	var by = 'prox:' + fofs;
	if (groups) by += ';group:all';
	else by += ';group:none';
	uri += '?mail:by=' + encodeURIComponent(by);
	uri += '&mail:unread=' + (unread ? 1 : 0);
	var callback = function(req) { var newbody = req.responseText; var el = getEl('centerrail'); el.innerHTML = newbody; run_embedded_scripts(req.responseText); };
	var el = getEl('main_inbox') || getEl('medialockerbody');
	el.innerHTML = "<div class='centerpad'><img width='16' src='http://images.multiply.com//common/misc/indicator-small.gif' class='indicator' height='16' /> Loading...</div>";
	Current_URI = uri;
	ajax(uri, callback);
	//load_centerrail('', s.reload_uri + val);
}
function set_unread_and_reload(set_prox) {
	var unread = getEl('unreadcheckbox') ? getEl('unreadcheckbox').checked : 0;
	var uri = Current_URI.replace(/mail:unread=\w*/, '');
	if (set_prox) uri = uri.replace(/mail:by=\w*/, '');
	if (uri.match(/\?/))
		uri += '&';
	else
		uri += '?';
	if (set_prox) uri += 'mail:by=' + encodeURIComponent(set_prox);
	uri += '&mail:unread=' + (unread ? 1 : 0);
	var callback = function(req) { var newbody = req.responseText; var el = getEl('centerrail'); el.innerHTML = newbody; run_embedded_scripts(req.responseText); };
	var el = getEl('main_inbox') || getEl('medialockerbody');
	el.innerHTML = "<div class='centerpad'><img width='16' src='http://images.multiply.com//common/misc/indicator-small.gif' class='indicator' height='16' /> Loading...</div>";
	ajax(uri, callback);
	//load_centerrail('', s.reload_uri + val);
}
/* replace a node with the passed-in HTML */
function replace_div(id, html) {
	var tmp_div = document.createElement('div');
	tmp_div.innerHTML = html;
	var div = getEl(id);
	div.parentNode.replaceChild(tmp_div, div);
}
function make_favorite_miniprofile(type, id, checked) {
	checked = checked ? 1 : 0;
	var url = '/mail/make-favorite';
	var callback = function(req) { eval(req.responseText); };
	var params = new Object();
	params['type'] = type;
	params['id'] = id;
	params['value'] = checked;
	if (getEl('favorite_' + id)) getEl('favorite_' + id).checked = checked;
	maybe_unpad_div();
	display("miniprofile_div", 0);
        ajax(url, callback, {params: params});
}
function make_favorite(type, id) {
	var url = '/mail/make-favorite';
	var callback = function(req) { eval(req.responseText); };
	var params = new Object();
	params['type'] = type;
	params['id'] = id;
	params['value'] = getEl('favorite_' + id).checked ? 1 : 0;
        ajax(url, callback, {params: params});
}
function set_submenu_style(li_el, limitheight) {
	var pos = getPosition(li_el);
	var submenu = getEl('submenu');
	var submenudd = getEl('submenudd');
	var top = pos.y - 10;
	var bodywrap = getEl('bodywrap');
	if (bodywrap)
		top -= getPosition(bodywrap).y;
	submenu.style.top = top + 'px';
	if (limitheight) {
		submenudd.style.height = limitheight;
	}
	else {
		submenudd.style.height = 'auto';
	}
}
function open_submenu(type, li_el) {
	var el = getEl('submenudd');
	var t = new Date().getTime();
	if (type == 'search') {
		set_submenu_style(li_el);
		el.innerHTML = "<a href=http://multiply.com/search/people><img src='http://images.multiply.com/multiply/icons/clean/16x16/contact.png' width=16 height=16 />Search People</a><a href=http://multiply.com/search/content><img src='http://images.multiply.com/multiply/icons/clean/16x16/news.png' width=16 height=16 />Search Content</a><a href=http://multiply.com/search/groups><img src='http://images.multiply.com/multiply/icons/clean/16x16/groups.png' width=16 height=16 />Search Groups</a>";
		display('submenu', 1);
	}
	else if (type == 'inbox') {
		set_submenu_style(li_el);
		el.innerHTML = "<a href=http://multiply.com/mail/updates/" + t + "#_mainfilter onclick='return go_mail(\"_mainfilter\", event)'><img src='http://images.multiply.com/multiply/icons/clean/16x16/news.png' width=16 height=16 />Recent Updates</a><a href=http://multiply.com/mail/updates/" + t + "#_pmsfilter onclick='return go_mail(\"_pmsfilter\", event)'><img src='http://images.multiply.com/multiply/icons/clean/16x16/pms.png' width=16 height=16 />Personal Messages</a><a href=http://multiply.com/mail/updates/" + t + "#_calendarfilter onclick='return go_mail(\"_calendarfilter\", event)'><img src='http://images.multiply.com/multiply/icons/clean/16x16/calendar.png' width=16 height=16 />Upcoming Events</a><a href=http://multiply.com/mail/updates/" + t + "#_minefilter onclick='return go_mail(\"_minefilter\", event)'><img src='http://images.multiply.com/multiply/icons/clean/16x16/me.png' width=16 height=16 />Posted by Me</a><a href=http://multiply.com/mail/updates/" + t + "#_invitationsfilter onclick='return go_mail(\"_invitationsfilter\", event)'><img src='http://images.multiply.com/multiply/icons/clean/16x16/invite.png' width=16 height=16 />Invitations</a>";
		display('submenu', 1);
	}
	else if (type == 'mysite') {
		set_submenu_style(li_el);
		el.innerHTML = "<a href=http://multiply.com/gus><img src='http://images.multiply.com/multiply/icons/clean/16x16/home.png' width=16 height=16 />My Site</a><a href=http://multiply.com/gus/photos><img src='http://images.multiply.com/multiply/icons/clean/16x16/photos.png' width=16 height=16 />My Photos</a><a href=http://multiply.com/gus/video><img src='http://images.multiply.com/multiply/icons/clean/16x16/video.png' width=16 height=16 />My Video</a><a href=http://multiply.com/gus/journal><img src='http://images.multiply.com/multiply/icons/clean/16x16/journal.png' width=16 height=16 />My Blog</a><a href=http://multiply.com/gus/calendar><img src='http://images.multiply.com/multiply/icons/clean/16x16/calendar.png' width=16 height=16 />My Calendar</a><a href=http://multiply.com/gus/reviews><img src='http://images.multiply.com/multiply/icons/clean/16x16/reviews.png' width=16 height=16 />My Reviews</a><a href=http://multiply.com/gus/links><img src='http://images.multiply.com/multiply/icons/clean/16x16/links.png' width=16 height=16 />My Links</a>";
		display('submenu', 1);
	}
	else if (type == 'contacts') {
		var limitheight = (Multiply.Contacts && Multiply.Contacts.length > 10) ? '250px' : 0;
		set_submenu_style(li_el, limitheight);
		el.innerHTML = build_contacts_list();
		display('submenu', 1);
	}
	else if (type == 'groups') {
		var limitheight = (Multiply.Groups && Multiply.Groups.length > 10) ? '250px' : 0;
		set_submenu_style(li_el, limitheight);
		el.innerHTML = build_groups_list();
		display('submenu', 1);
	}
	else {
		display('submenu', 0);
	}
}
function build_contacts_list() {
	var html = '';
	if (!Multiply.Contacts && Multiply.Contacts.length) return;
	for (var i = 0; i < Multiply.Contacts.length; i++) {
		html += "<a href=http://" + Multiply.Contacts[i].id + ".multiply.com><img src='http://images.multiply.com/multiply/icons/clean/16x16/contact.png' width=16 height=16 />" + Multiply.Contacts[i].name + "</a>";
	}
	return html;
}
function build_groups_list() {
	var html = '';
	if (!Multiply.Groups && Multiply.Groups.length) return;
	for (var i = 0; i < Multiply.Groups.length; i++) {
		html += "<a href=http://" + Multiply.Groups[i].id + ".multiply.com><img src='http://images.multiply.com/multiply/icons/clean/16x16/groups.png' width=16 height=16 />" + Multiply.Groups[i].name + "</a>";
	}
	return html;
}
function go_mail(hash_part, event) {
	var t = new Date().getTime();
	var url = "http://multiply.com/mail/updates/" + t;
	if (hash_part) 
		url += "#" + hash_part;
	return go(url, event);
}
function go(url, event) {
	if (check_onbeforeunload()) return;
	event = (event) ? event : ((window.event) ? event : null);
	// if (event && (event.ctrlKey || event.metaKey)) {
	if (event && !is_pure_left_click(event)) {
		return true;
	}
	window.location.href = url;
	return false;
}
function close_submenu() {
	display('submenu', 0);
}

var Fades = new Array();
var Fading = false;
var Fade_Timeout;

var Shrink_Heights = new Array();
var Shrinking_Height = false;
var Shrink_Height_Interval;

var Shrink_Widths = new Array();
var Shrinking_Width = false;
var Shrink_Width_Interval;

var Scrolls = new Array();
var Scrolling = false;
var Scroll_Interval;

function scroll() {
	var scrolls_count = 0;
	for(var id in Scrolls) {
		var current = parseInt(getEl(id).style.marginLeft.replace(/px/, ''));
		if (!current) {
			current = 0;
		}
		var newloc = Scrolls[id];
		if (current > newloc) {
			current -= 20;
			if (current < newloc) {
				current = newloc;
			}
			else {
				scrolls_count++;
			}
		}
		else {
			current += 20;
			if (current > newloc) {
				current = newloc;
			}
			else {
				scrolls_count++;
			}
		}
		getEl(id).style.marginLeft = current + 'px';
		if (current == newloc) {
			delete Scrolls[id];
		}
	}
	if (scrolls_count > 0) {
		Scrolling = true;
	}
	else {
		Scrolling = false;
		clearInterval(Scroll_Interval);
	}
}

function Shrink_Height(id, next_function, args) {
	this.id = id;
	this.start = getEl(id).offsetHeight;
	this.state = getEl(id).offsetHeight;
	this.end = 0;
	this.step = 0;
	this.next_function = next_function;
	this.next_function_args = args;
	this.setHeight = function() {
		var el = getEl(this.id);
		if (el) {
			el.style.overflow = 'hidden';
			el.style.height = this.state + 'px';
		}
	};
	this.next = function() {
		if (this.next_function) {
			if (this.next_function_args) {
				eval(this.next_function + "(" + this.next_function_args + ");");
			}
			else {
				eval(this.next_function + "();");
			}
		}
	};
	if (!Shrinking_Height) {
		if (Shrink_Height_Interval)
			clearInterval(Shrink_Height_Interval);
		Shrink_Height_Interval = setInterval("shrink_height()", 25);
	}
}

function Shrink_Width(id, next_function, args) {
	this.id = id;
	this.state = getEl(id).offsetWidth;
	this.next_function = next_function;
	this.next_function_args = args;
	this.setWidth = function() {
		var el = getEl(this.id);
		if (el) {
			el.style.overflow = 'hidden';
			el.style.width = this.state + 'px';
		}
	};
	this.next = function() {
		if (this.next_function) {
			if (this.next_function_args) {
				eval(this.next_function + "('" + this.next_function_args + "');");
			}
			else {
				eval(this.next_function + "();");
			}
		}
	};
	if (!Shrinking_Width) {
		Shrink_Width_Interval = setInterval("shrink_width()", 25);
	}
}

function Fade(id, next_function, final_function, final_function_args) {
	this.start_time = new Date().getTime();
	this.last_transition_time = this.start_time;
	this.transitions = 0;
	this.direction = 'out';
	this.transition_time = 900;
	this.state = 100;
	this.id = id;
	this.next_function = next_function;
	this.setOpacity = function() {
		var el = getEl(this.id);
		var opacity = this.direction == 'out' ? this.state : (100 - this.state);
		if (el) {
			el.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(Opacity=' + opacity + ')';
			el.style.opacity = opacity / 100;
		}
		else
			alert("No element for: " + this.id);
	};
	this.next = function() {
		if (this.next_function == 'shrink_height') {
			Shrink_Heights[this.id] = new Shrink_Height(this.id, final_function, final_function_args);
		}
		else if (this.next_function == 'shrink_width') {
			Shrink_Widths[this.id] = new Shrink_Width(this.id, final_function, final_function_args);
			if (!Shrinking_Width) {
				Shrink_Width_Interval = setInterval("shrink_width()", 25);
			}
		}
		else if (this.next_function) {
		    this.next_function();
		}
	};
	if (!Fading) {
		Fade_Timeout = setTimeout("fade_out()", 25);
	}
}

function fade_out() {
	var fades_count = 0;
	for (var id in Fades) {
		var fade = Fades[id];
		if (fade.state == 100) {
			fade.state -= 10; // optimistically shoot for 10
			fade.setOpacity();
			fades_count++;
			fade.transitions++;
		}
		else if (fade.state > 0) {
			var elapsed = new Date().getTime() - fade.start_time;
			var time_per_transition = elapsed / fade.transitions;
			var time_left = fade.transition_time - elapsed;
			var transitions_left = time_left / time_per_transition;
			if (transitions_left > 1) {
				var delta = fade.state / transitions_left;
				fade.state -= delta;
				fade.setOpacity();
				fades_count++;
				fade.transitions++;
			}
			else {
				fade.state = 0;
				fade.setOpacity();
				fade.next();
				delete Fades[id];
			}
		}
		else {
			fade.next();
			delete Fades[id];
		}
	}
	if (fades_count > 0) {
		Fading = true;
		Fade_Timeout = setTimeout("fade_out()", 25);
	}
	else {
		Fading = false;
		clearTimeout(Fade_Timeout);
	}
}
function shrink_width() {
	var shrinks_count = 0;
	for(var id in Shrink_Widths) {
		var element = getEl(id);
		var shrink = Shrink_Widths[id];
		if (shrink.state > 0) {
			shrink.state -= 6;
			if (shrink.state < 0) {
				shrink.state = 0;
			}
			shrink.setWidth();
			shrinks_count++;
		}
		else {
			delete Shrink_Widths[id];
			display(shrink.id, 0);
			shrink.next();
		}
	}
	if (shrinks_count > 0) {
		Shrinking_Width = true;
	}
	else {
		Shrinking_Width = false;
		clearInterval(Shrink_Width_Interval);
	}
}

function shrink_height() {
	var shrinks_count = 0;
	for(var id in Shrink_Heights) {
		var element = getEl(id);
		var shrink = Shrink_Heights[id];
		var delta = Shrink_Heights[id].delta || 20;
		if (delta > 0) {
			if (shrink.state - delta > 0) {
				//var d = shrink.start - shrink.end;
				//var stepp = Math.ceil(Math.pow(((1 / 10) * shrink.step), 2) * d);
				shrink.state -= delta;
				if (shrink.state < 0) {
					shrink.state = 0;
				}
				shrink.setHeight();
				shrink.step++;
				display(shrink.id, 1);
				shrinks_count++;
			}
			else {
				delete Shrink_Heights[id];
				if (shrink.delete_when_done) {
					var el = getEl(shrink.id);
					if (el) el.parentNode.removeChild(el);
				}
				display(shrink.id, 0);
				shrink.next();
			}
		}
		else {
			if (shrink.state + delta < shrink.end) {
				shrink.state -= delta;
				if (shrink.state > shrink.end) {
					shrink.state = shrink.end;
				}
				shrink.setHeight();
				display(shrink.id, 1);
				shrinks_count++;
			}
			else {
				delete Shrink_Heights[id];
				shrink.next();
			}
		}
	}
	if (shrinks_count > 0) {
		Shrinking_Height = true;
	}
	else {
		Shrinking_Height = false;
		clearInterval(Shrink_Height_Interval);
	}
}

function relationship_dropdown(number) {
	return "<select id='relationship_" + number + "'><optgroup label='Friend'><option value='friend' selected>Friend</option><option value='fiance'>Fianc&eacute;e/Fianc&eacute;</option><option value='boyfriend'>Girlfriend/Boyfriend</option><option value='flatmate'>Roommate</option><option value='neighbor'>Neighbor</option><option value='frat_brother'>Sorority Sister/Fraternity Brother</option><option value='classmate'>Classmate</option></optgroup><optgroup label='Online Buddies'><option value='online_buddy'>Online Buddy</option></optgroup><optgroup label='Family'><option value='husband'>Wife/Husband</option><option value='father'>Mother/Father</option><option value='fatherinlaw'>Mother-in-law/Father-in-law</option><option value='son'>Daughter/Son</option><option value='soninlaw'>Daughter-in-law/Son-in-law</option><option value='brother'>Sister/Brother</option><option value='brotherinlaw'>Sister-in-law/Brother-in-law</option><option value='grandfather'>Grandmother/Grandfather</option><option value='grandson'>Granddaughter/Grandson</option><option value='cousin'>Cousin</option><option value='secondcousin'>Second-Cousin</option><option value='uncle'>Aunt/Uncle</option><option value='nephew'>Niece/Nephew</option><option value='stepfather'>Step-Mother/Step-Father</option><option value='stepbrother'>Step-Sister/Step-Brother</option><option value='stepson'>Step-Daughter/Step-Son</option><option value='exhusband'>Ex-Wife/Ex-Husband</option><option value='friend_of_family'>Friend of Family</option><option value='distant_relative'>Distant Relative</option><option value='other_relative'>Other Relative</option><option value='partner'>Life Partner</option></optgroup><optgroup label='Professional Contact'><option value='coworker'>Co-Worker</option><option value='manager'>Manager</option><option value='colleague'>Colleague</option><option value='employee'>Employee</option><option value='business_partner'>Business Partner</option><option value='business_contact'>Business Contact</option></optgroup></select>";;
}

var show_popup_additional = function () {};
var hide_popup_additional = function () {};

function show_popup(title, body, popup_id, red_x_in_thecorner) {
	if (!popup_id) {
		popup_id = 'popupbox';
	}
	var popupbox = getEl(popup_id);
	if (!popupbox) {
		console.log('show_popup: popupbox not found!');
		return;
	}
	show_big_blank_div('centerrail');
	var id_prefix = popup_id + '_';
	if (title) {
		getEl(id_prefix + 'popup_title').innerHTML = "<div class='popupbox_head'><h2>" + title + "</h2></div>";
		if(red_x_in_thecorner){
			getEl(id_prefix + 'popup_title').innerHTML += '<form><div style="text-align: right"><a href="#" onclick="close_popup_crosspost(0);"><img hspace=20 src="http://images.multiply.com/multiply/icons/clean/12x12/x.png" border=0</a></div></form>';
		}
	}
	if (body) {
		getEl(id_prefix + 'popup_window_body').innerHTML = body;
	}
	var iebody = (document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.body;
	var width = document.all ? document.body.clientWidth : window.innerWidth;
	var scrolly = document.all ? iebody.scrollTop : window.pageYOffset;
	var left = (width / 2) - 200;
	var btop = scrolly + 100;
	popupbox.style.left = left + 'px';
	popupbox.style.top = btop + 'px';
	popupbox.style.zIndex = '16777271';
	display(popupbox.id, 1);
	show_popup_additional();
}

function close_popup(popup_id) {
	var id_prefix;
	if (!popup_id) {
		popup_id = 'popupbox';
	}
	id_prefix = popup_id + '_';

	var popup_box = getElAllFrames(popup_id);
        
	if (getEl(id_prefix + 'popup_window_body').style)
		getEl(id_prefix + 'popup_window_body').style.height = '';

	display('big_blank_div', false);
	display(popup_box, false);
	hide_popup_additional();
}

function invite(user_id, source, error) {
	var title = "Connect with " + user_id + "";
	var body = '';
	if (error) {
		body += "<div style='width: 100%; color: #f00; font-weight: bold;'>" + error + "</div>";
	}
	body +=
        "<table border=0 cellpadding=0 cellspacing=5 style='width: 350px;'>" +
            "<tr>" +
                "<td align=left width=100><b>Relationship:</b></td>" +
                "<td align=right width=250>" + relationship_dropdown(user_id) + "</td>" +
            "</tr>" +
            "<tr>" +
                "<td colspan=2 align=left width=380><b>Message from you:</b><textarea id='custom_text' style='width: 350px; height: 150px;'></textarea></td>" +
            "</tr>" +
            "<tr>" +
                "<td colspan=2 align=center width=380>" +
                    "<input type=submit onclick='javascript:send_invitation(\"" + user_id + "\", \"" + source + "\");' value='Invite'>" +
                    "<input type=submit onclick='javascript:cancel_send_invitation();' value='Cancel'>" +
                "</td>" +
            "</tr>" +
        "</table>";
	show_popup(title, body);
}

function show_user(user_id) {
	if (getEl('centerrail')) {
		load_centerrail('none', '/mail/contacts/contact/' + user_id);
	}
	else {
		top.location.href = 'http://' + user_id + '.multiply.com';
	}
}

function cancel_suggestion(user_id) {
	ajax('/network/do-not-suggest-ajax', handle_do_not_suggest, { params: { id: user_id }});
	Fades['cancel_suggestion_' + user_id] = new Fade('suggestion_' + user_id, 'shrink_width');
}

function handle_do_not_suggest(req) {
    // req.responseText == "OK"; maybe do something here.
}

function cancel_send_invitation() {
	close_popup();
}

var Currently_Sending_Invitation_To;
var Current_Invite_Source;

function send_invitation(user_id, source) {
	Currently_Sending_Invitation_To = user_id;
	var rel_dropdown = getEl('relationship_' + user_id);
	var relationship = rel_dropdown.options[rel_dropdown.selectedIndex].value;
	var message = getEl('custom_text').value;
	getEl('popupbox_popup_window_body').style.height = getEl('popupbox_popup_window_body').offsetHeight + 'px';
	getEl('popupbox_popup_window_body').innerHTML = "<div style='width: 100%; text-align: center; font-size: 16px; color: #888;'><img src='http://images.multiply.com//common/misc/indicator-small.gif' /> Please wait...</div>";
	Current_Invite_Source = source;
	ajax('/network/invite-ajax', handle_invitation, { params: { id: user_id, relationship: relationship, message: message, wants_connect: 1, wants_suggests: 1, source: source }});
}

function handle_invitation(req) {
	var response = req.responseText;
	if (response.substr(0, 6) == 'ERROR:') {
		var tmp = response.split(':');
		tmp.shift();
		invite(Currently_Sending_Invitation_To, Current_Invite_Source, tmp.join(':'))
			}
	else {
		close_popup();
		Fades['hide_suggestion_' + Currently_Sending_Invitation_To] = new Fade('suggestion_' + Currently_Sending_Invitation_To, 'shrink_width');
	}
}

function show_more_pymk() {
        display('more_players', true);
        display('show_more', false);
}

function set_cell_widths() {
}



var Crosspost_Credentials = new Array();
var Curent_Crosspost_ID;
var service_enabled = new Array();

function maybe_set_crosspost_settings(id,crosspost_defined, checkbox_name) {
	if ( crosspost_defined || checkbox_name && (service_enabled[checkbox_name] || !getEl(checkbox_name).checked) ) return false;
	return show_crosspost_settings(id, null, checkbox_name);
}
function show_crosspost_settings_mini_facebook(checkbox_name){
//    show_popup("Facebook App Installer" + '<form><div style="text-align: right"><a href="#" onclick="close_popup_crosspost(0);">CLOSE</a></div></form>',         
	show_popup("Facebook App Installer",
    '<div id="crosspost_settings">' +
	"<iframe width=550 frameborder='no' height=480 id='fbiframe' src='/fb-auth-popup'></iframe>" +
    '</div>',
    'mini_crosspost_popup', 1
		   );
	getEl('mini_crosspost_popup_popup_window_body').style.height = "460px";
	getEl('mini_crosspost_popup').style.width  = "580px";
}

function show_crosspost_settings_mini_yahoo() {
	show_popup("Yahoo! Updates Authorization", "<iframe src='http://multiply.com/yahoo-oauth-init' id='yahoo_oauth_button' style='height: 120px; width: 450px;' frameborder=0></iframe><center><input type=submit onclick='javascript:close_popup_crosspost(0);' value='Close'/></center>", "mini_crosspost_popup");
}

function show_crosspost_settings_mini_twitter() {
	show_popup(
		"Twitter Crosspost Setup",
		"<iframe src='http://multiply.com/twitter-oauth-init' id='twitter_oauth_button' style='height: 120px; width: 450px;' frameborder=0></iframe>" +
		"<center><input type=submit onclick='javascript:close_popup_crosspost(0);' value='Close'/></center>",
		'mini_crosspost_popup',
		1
	);
}

function yahoo_crosspost_auth_fail() {
	alert("Yahoo! Updates will not be updated because Multiply could not obtain authorization. Please try again.");
	close_popup('mini_crosspost_popup');
	getEl('crosspost_mini_yahoo').checked = false;
}

function yahoo_crosspost_auth_success() {
	close_popup('mini_crosspost_popup');
}

function twitter_crosspost_auth_fail() {
	alert("Twitter will not be updated because Multiply could not obtain authorization. Please try again.");
	close_popup('mini_crosspost_popup');
	getEl('crosspost_mini_twitter').checked = false;
}
function twitter_crosspost_auth_success() {
	close_popup('mini_crosspost_popup');
}

var global_current_checkbox_name;

function show_crosspost_settings(id, error, checkbox_name) {
	if (checkbox_name) {
		global_current_checkbox_name = checkbox_name;
	}
	if (id == "mini-facebook") {
		return show_crosspost_settings_mini_facebook();
	}
	else if (id == "mini-yahoo") {
		return show_crosspost_settings_mini_yahoo();
	}
	else if (id == "mini-twitter") {
		return show_crosspost_settings_mini_twitter();
	}
	var init_data = Import_Init_Data[id];
	var cp_error = error ? error : '';
	var error_display = error ? '' : 'display: none; ';
	var username = (typeof Crosspost_Credentials[id] == 'array') ? Crosspost_Credentials[id]['username'] : '';
	var password = (typeof Crosspost_Credentials[id] == 'array') ? Crosspost_Credentials[id]['password'] : '';
	Current_Crosspost_ID = id;
	var body = 
	'<div id="crosspost_settings">' + 
	    '<div id="crosspost_error" style="' + error_display + ' color: #f00; font-size: 12px; width: 100%; text-align: left;">' + error + '</div>' +
	    '<br>' +
	    '<form onsubmit="update_import_settings(); return false;">' +
		'<table width=100% cellpadding=5 cellspacing=0 border=0>' +
		    '<tr align="left">' +
			'<td align="right"><span class="req" title="Required field">*</span></td>' +
			'<td class="label" height="20" align="left">' + init_data['login_label'] + '</td>' +
			'<td class="pad6r"><input tabindex="20" id="crosspost_username" size="30" style="width: 200px;" type="text" class="text" value="' + username + '"/></td>' + 
		    '</tr>' + 
		    '<tr align=left>' +
			'<td align="right"><span class="req" title="Required field">*</span></td>' +
			'<td class="label" height="20" align="left">' + init_data['password_label'] + '</td>' + 
			'<td class="pad6r"><input tabindex="21" id="crosspost_password" size="30" style="width: 200px;" type="password" class="password" value="' + password + '"/></td>' +
		    '</tr>' +
		'</table>' +
		'<div style="text-align: center; width: 100%;">' +
		    '<input tabindex="22" type="submit" onclick="update_crosspost_settings(); return false;" value="Save"/><input tabindex="23" type="submit" onclick="close_popup_crosspost(0); return false;" value="Cancel"/>' +
		'</div>' + 
	    '</form>' +
	'</div>';
	show_popup(init_data['crosspost_label'], body, 'mini_crosspost_popup'); 
	//getEl('crosspost_username').focus();
}
function handle_crosspost_save(req) {
	var response_text = req.responseText;
	if (response_text.substr(0, 6) == 'ERROR:') {
		var tmp = response_text.split(":");
		tmp.shift();
		var error = tmp.join(":");
		show_crosspost_settings(Current_Crosspost_ID, error);
	}
	else {
		delete Crosspost_Credentials[Current_Crosspost_ID];
		close_popup_crosspost(1);
	}
}

function close_popup_crosspost(success) {
	if(!success){
		getEl(global_current_checkbox_name).checked = 0;
	}
	else {
		service_enabled[global_current_checkbox_name] = 1;
	}
	close_popup('mini_crosspost_popup');
}

function form_date(field) {
	if (getEl(field) && getEl(field).value) {
		var value = getEl(field).value.toString();
		var year = value.substr(0, 4);
		var mon = value.substr(4, 2);
		var day = value.substr(6, 2);
		return new Date(year, mon - 1, day);
	}
	else if (getEl(field + '_year')) {
		var year = getEl(field + '_year').value;
		var mon = getEl(field + '_mon').value;
		var day = getEl(field + '_day').value;
		return new Date(year, mon - 1, day);
	}
	return;
}

function update_crosspost_settings() {
	var url = '/setup/save-crosspost-settings-ajax';
	var username = getEl('crosspost_username').value;
	var password = getEl('crosspost_password').value;
	if (username && password) {
		getEl('crosspost_settings').innerHTML = "<div style='width: 100%; margin-top: 40px; margin-bottom: 20px; text-align: center; font-size: 16px; color: #888;'><img src='http://images.multiply.com//common/misc/indicator-small.gif' /> Please wait...</div>";
		ajax(url, handle_crosspost_save, { params: { method: Current_Crosspost_ID, username: username, password: password }});
	}
	else {
		show_crosspost_settings(Current_Crosspost_ID, "Required fields missing.");
	}
}

function set_siderail_colors(color) {
	if (Scrolling_Panes == 2) return;
	addCss(".siderailsection h3 { font-weight: normal; } .siderailsection h3 a, .siderailsection h3 a:link, .siderailsection h3 a:visited { color: #fff; } .siderailcount { background: url(http://images.multiply.com/multiply/manage/m4.gif); } .siderailsection .selected { background: url(http://images.multiply.com/multiply/nav/liselectedgrey2.png) no-repeat top right; font-weight: normal; border-left: 1px solid #ccc; }");
	if (color == 'blue' || !color) {
		//addCss(".siderailsection h3 { background-color: #558eca; border: 1px solid #0b5eb4; color: #fff; } .siderailsubsection { background-color: #e9f1ee; border-color: #ccc; }");
		addCss(".siderailsection h3 { background-color: #4f6f92; border: 1px solid #1f4f72; color: #fff; } .siderailsubsection { background-color: #e9f1ee; border-color: #ccc; }");
	}
	else if (color == 'grey') {
		addCss(".siderailsection h3 { background-color: #aaa; border: 1px solid #888; color: #fff; } .siderailsubsection { background-color: #eee; border-color: #ccc; }");
	}
	else if (color == 'green') {
		addCss(".siderailsection h3 { background-color: #8eca55; border: 1px solid #5eb40b; color: #fff; } .siderailsubsection { background-color: #e9f1ee; border-color: #ccc; }");
	}
	else if (color == 'red') {
		addCss(".siderailsection h3 { background-color: #ca5555; border: 1px solid #b45a0b; color: #fff; } .siderailsubsection { background-color: #f1eee9; border-color: #ccc; }");
	}
	else if (color == 'black') {
		addCss(".siderailsection h3 { background-color: #000; border: 1px solid #000; color: #fff; } .siderailsubsection { background-color: #222; border-color: #000; } .siderailcount { background: none; }");
	}
	else if (color == 'white') {
		addCss(".siderailsection h3 { font-weight: bold; background-color: #fff; border: 1px solid #fff; border-bottom: 1px solid #d7d9dd; color: #000; } .siderailsubsection { background-color: #fff; border-color: #fff; } .siderailsection h3 a, .siderailsection h3 a:link, .siderailsection h3 a:visited { color: #0b5eb4; } .siderailsection .selected { border-left: none; background: none; font-weight: bold; background: url(http://images.multiply.com/multiply/manage/mediaarrowright.png) no-repeat top left; background-position: 5px 5px; }");
	}
}
function hover_rating(value) {
	set_rating_stars(value);
}
function set_rating(value) {
	set_rating_stars(value);
	getEl('rating').value = value;
}
function reset_rating() {
	var value = getEl('rating').value;
	set_rating_stars(value);
}
function set_rating_stars(value) {
	for (i = 0; i <= 4; i++) {
		var j = i + .5;
		display('rating_' + j, value >= j);
		j = i + 1;
		display('rating_' + j, value >= j);
	}
	if (getEl('rating_description')) {
		var intpart = Math.floor(value);
		if (intpart == 0) intpart = '';
		var fracpart = (intpart == value) ? "" : "&frac12;";
		getEl('rating_description').innerHTML = intpart + fracpart;
	}
}
function is_anon_user() {
        return readCookie('uid').match(/^A:/);
}
var Import_Init_Data = {
        "photos-kodak": {
                "import_type": "page_scrape",
                "label": "Import Kodak Gallery Photos",
                "login_label": "Your Kodak Gallery ID:",
                "password_label": "Your Kodak Gallery Password:",
		"item_type": "photos",
		"proper_name": "Kodak Gallery",
		"contacts_instructions": "We noticed that you have contacts on Kodak Gallery that you may want to invite to Multiply. Select the contacts you wish to invite and click OK.",
		"contacts_link": "Import your Kodak Gallery Contacts"
        },
        "photos-flickr": {
                "import_type": "api",
                "label": "Import Flickr Photos",
                "instructions": "Click the button below to log into Flickr to use your Flickr photos in your Multiply. If you're already signed into Flickr, we'll be able to get your photos for you without you having to log in.<br><br>The first time you use this tool, Flickr will ask you to give permission to Multiply to import your photos. When that happens, just click OK, I'LL ALLOW IT to continue.",
		"item_type": "photos",
		"proper_name": "Flickr",
		"contacts_instructions": "We noticed that you have contacts on Flickr that you may want to invite to Multiply. Select the contacts you wish to invite and click OK.",
		"contacts_link": "Import your Flickr Contacts"
        },
        "photos-photobucket": {
                "import_type": "page_scrape",
                "label": "Import Photobucket Photos",
                "login_label": "Your Photobucket ID (or e-mail):",
                "password_label": "Your Photobucket Password",
		"item_type": "photos",
		"proper_name": "Photobucket",
		"contacts_instructions": "We noticed that you have contacts on Photobucket that you may want to invite to Multiply. Select the contacts you wish to invite and click OK.",
		"contacts_link": "Import your Photobucket Contacts"
        },
        "photos-shutterfly": {
                "import_type": "api",
                "label": "Import Shutterfly Photos",
                "instructions": "Click the button below to log into Shutterfly to use your Shutterfly photos in your Multiply. If you're already signed into Shutterfly, we'll be able to get your photos for you without you having to log in.<br><br>The first time you use this tool, Shutterfly will ask you to give permission to Multiply to import your photos. When that happens, just click CONTINUE.",
		"item_type": "photos",
		"proper_name": "Shutterfly",
		"contacts_instructions": "We noticed that you have contacts on Shutterfly that you may want to invite to Multiply. Select the contacts you wish to invite and click OK.",
		"contacts_link": "Import your Shutterfly Contacts"
        },
        "photos-facebook": {
                "import_type": "page_scrape",
                "label": "Import Facebook Photos",
		"note": "Note that Multiply is only able to import lower resolution versions of Facebook photos.",
                "login_label": "Your Facebook ID (email):",
                "password_label": "Your Facebook Password:",
		"item_type": "photos",
		"proper_name": "Facebook",
		"contacts_instructions": "We noticed that you have contacts on Facebook that you may want to invite to Multiply. Select the contacts you wish to invite and click OK.",
		"contacts_link": "Import your Facebook Contacts"
        },
        "photos-windowslive": {
                "import_type": "page_scrape",
                "label": "Import Windows Live Photos",
                "note": "We will import all photos whose permissions are set to Everyone (public).",
                "login_label": "Your Windows Live ID:",
                "password_label": "Your Windows Live Password:",
		"item_type": "photos",
		"proper_name": "Windows Live",
		"contacts_instructions": "We noticed that you have contacts on Windows Live Spaces that you may want to invite to Multiply. Select the contacts you wish to invite and click OK.",
		"contacts_link": "Import your Windows Live Contacts"
        },
	"photos-snapfish": {
		"import_type": "page_scrape",
		"label": "Import Snapfish Photos",
		"note": "Note that Multiply is only able to import lower resolution versions of Snapfish photos.",
		"login_label": "Your Snapfish ID (email):",
		"password_label": "Your Snapfish Password:",
		"item_type": "photos",
		"proper_name": "Snapfish",
		"contacts_instructions": "We noticed that you have contacts on Snapfish that you may want to invite to Multiply. Select the contacts you wish to invite and click OK.",
		"contacts_link": "Import your Snapfish Contacts"
	},
	"photos-picasa": {
		"import_type": "page_scrape",
		"label": "Import Picasa Web Photos",
		"login_label": "Your Picasa ID (email):",
		"password_label": "Your Picasa Password:",
		"item_type": "photos",
		"proper_name": "Picasa Web",
		"contacts_instructions": " We noticed that you have contacts on Picasa that you may want to invite to Multiply. Select the contacts you wish to invite and click OK.",
		"contacts_link": "Import your Picasa Contacts"
	},
	"photos-vox": {
		"import_type": "page_scrape",
		"label": "Import Vox Photos",
		"login_label": "Your Vox ID:",
		"password_label": "Your Vox Password:",
		"item_type": "photos",
		"proper_name": "Vox",
		"contacts_instructions": "We noticed that you have contacts on Vox that you may want to invite to Multiply. Select the contacts you wish to invite and click OK.",
		"contacts_link": "Import your Vox Contacts"
	},
	"video-youtube": {
		"import_type": "page_scrape",
		"label_url": "Import YouTube Video - By URL",
		"login_label": "Your YouTube ID:",
		"password_label": "Your YouTube Password:",
		"url_example": "Example: http://www.youtube.com/watch?v=(movie id)",
		"item_type": "video",
		"proper_name": "YouTube",
		"contacts_instructions": "We noticed that you have contacts on YouTube that you may want to invite to Multiply. Select the contacts you wish to invite and click OK.",
		"contacts_link": "Import your YouTube Contacts"
	},
	"video-photobucket": {
		"import_type": "page_scrape",
		"label": "Import Photobucket Video - By ID",
		"label_url": "Import Photobucket Video - By URL",
		"login_label": "Your Photobucket ID:",
		"password_label": "Your Photobucket Password:",
		"url_example": "Example: http://a12.photobucket.com/albums/b34/id/?action=view&current=mymovie.flv",
		"item_type": "video",
		"proper_name": "Photobucket",
		"contacts_instructions": "We noticed that you have contacts on Photobucket that you may want to invite to Multiply. Select the contacts you wish to invite and click OK.",
		"contacts_link": "Import your Photobucket Contacts"
	},
	"video-googlevideo": {
		"import_type": "page_scrape",
		"label_url": "Import Google Video - By URL",
		"url_example": "Example: http://video.google.com/videoplay?docid=(movie id)",
		"item_type": "video",
		"proper_name": "Google Video",
		"contacts_instructions": "We noticed that you have contacts on Google Video that you may want to invite to Multiply. Select the contacts you wish to invite and click OK.",
		"contacts_link": "Import your Google Video Contacts"
	},
	"video-facebook": {
		"import_type": "page_scrape",
		"label": "Import Facebook Video",
		"login_label": "Your Facebook ID:",
		"password_label": "Your Facebook Password:",
		"item_type": "video",
		"proper_name": "Facebook",
                "contacts_instructions": "We noticed that you have contacts on Facebook that you may want to invite to Multiply. Select the contacts you wish to invite and click OK.",
                "contacts_link": "Import your Facebook Contacts"
	},
	"video-metacafe": {
		"import_type": "page_scrape",
		"label": "Import Metacafe Video - By ID",
		"label_url": "Import Metacafe Video - By URL",
		"login_label": "Metacafe User (channel) ID:",
		"no_password": true,
		"url_example": "Example: http://www.metacafe.com/watch/...",
		"item_type": "video",
		"proper_name": "Metacafe",
		"contacts_instructions": "We noticed that you have contacts on Metacafe that you may want to invite to Multiply. Select the contacts you wish to invite and click OK.",
		"contacts_link": "Import your Metacafe Contacts"
	},
	"video-myspace": {
		"import_type": "page_scrape",
		"label": "Import MySpace Video - By ID",
		"label_url": "Import MySpace Video - By URL",
		"login_label": "Your MySpace ID:",
		"password_label": "Your MySpace Password:",
		"url_example": "Example: http://vids.myspace.com/index.cfm?fuseaction=vids.individual&videoid=....",
		"item_type": "video",
		"proper_name": "MySpace",
		"contacts_instructions": "We noticed that you have contacts on MySpace that you may want to invite to Multiply. Select the contacts you wish to invite and click OK.",
		"contacts_link": "Import your MySpace Contacts"
	},
	"video-vox": {
		"import_type": "page_scrape",
		"label": "Import Vox Videos",
		"login_label": "Your Vox ID:",
		"password_label": "Your Vox Password:",
		"item_type": "video",
		"proper_name": "Vox",
		"contacts_instructions": "We noticed that you have contacts on Vox that you may want to invite to Multiply. Select the contacts you wish to invite and click OK.",
		"contacts_link": "Import your Vox Contacts"
	},
	"blog-blogger": {
		"import_type": "page_scrape",
		"label": "Import Blogger Blogs",
		"login_label": "Your Blogger ID:",
		"password_label": "Your Blogger Password:",
		"item_type": "blog",
		"proper_name": "Blogger",
		"crosspost_message": "Enable cross-posting between Multiply and Blogger",
		"contacts_instructions": "We noticed that you have contacts on Blogger that you may want to invite to Multiply. Select the contacts you wish to invite and click OK.",
		"contacts_link": "Import your Blogger Contacts",
		"crosspost_label": "Blogger Crosspost Settings"
	},
	"blog-yahoo360": {
		"import_type": "page_scrape",
		"label": "Import Yahoo 360 Blog Entries",
		"login_label": "Your Yahoo 360 ID:",
		"password_label": "Your Yahoo 360 Password:",
		"item_type": "blog",
		"proper_name": "Yahoo 360",
		"contacts_instructions": "We noticed that you have contacts on Yahoo 360 that you may want to invite to Multiply. Select the contacts you wish to invite and click OK.",
		"contacts_link": "Import your Yahoo 360 Contacts"
	},
	"mini-twitter": {
		"import_type": "none",
		"label": "",
		"login_label": "Your Twitter ID:",
		"password_label": "Your Twitter Password:",
		"item_type": "all",
		"proper_name": "Twitter",
		"crosspost_message": "Enable cross-posting between Multiply and Twitter",
		"contacts_instructions": "We noticed that you have contacts on Twitter that you may want to invite to Multiply. Select the contacts you wish to invite and click OK.",
		"contacts_link": "Import your Twitter Contacts",
		"crosspost_label": "Twitter Cross-Posting"
	},
	"blog-typepad": {
		"import_type": "page_scrape",
		"label": "Import Typepad Blogs",
		"login_label": "Your Typepad ID:",
		"password_label": "Your Typepad Password:",
		"item_type": "blog",
		"proper_name": "Typepad",
		"crosspost_message": "Enable cross-posting between Multiply and Typepad",
		"contacts_instructions": "We noticed that you have contacts on Typepad that you may want to invite to Multiply. Select the contacts you wish to invite and click OK.",
		"contacts_link": "Import your Typepad Contacts",
		"crosspost_label": "Typepad Crosspost Settings"
	},
	"blog-windowslive": {
		"import_type": "page_scrape",
		"label": "Import Windows Live Spaces Blog Entries",
		"login_label": "Your Windows Live ID:",
		"password_label": "Your Windows Live Password:",
		"item_type": "blog",
		"proper_name": "Windows Live Spaces",
		"contacts_instructions": "We noticed that you have contacts on Windows Live Spaces that you may want to invite to Multiply. Select the contacts you wish to invite and click OK.",
		"contacts_link": "Import your Windows Live Contacts"
	},
	"blog-livejournal": {
		"import_type": "page_scrape",
		"label": "Import LiveJournal Blog Entries",
		"login_label": "Your LiveJournal ID:",
		"password_label": "Your LiveJournal Password:",
		"item_type": "blog",
		"proper_name": "LiveJournal",
		"crosspost_message": "Enable cross-posting between Multiply and LiveJournal",
		"contacts_instructions": "We noticed that you have contacts on LiveJournal that you may want to invite to Multiply. Select the contacts you wish to invite and click OK.",
		"contacts_link": "Import your LiveJournal Contacts",
		"crosspost_label": "LiveJournal Crosspost Settings"
	},
	"blog-vox": {
		"import_type": "page_scrape",
		"label": "Import Vox Blog Entries",
		"login_label": "Your Vox ID:",
		"password_label": "Your Vox Password:",
		"item_type": "blog",
		"proper_name": "Vox",
		"contacts_instructions": "We noticed that you have contacts on Vox that you may want to invite to Multiply. Select the contacts you wish to invite and click OK.",
		"contacts_link": "Import your Vox Contacts"
	},
	"contacts-hotmail": {
		"import_type": "page_scrape",
		"label": "Invite Hotmail Contacts",
		"login_label": "Your Hotmail ID:",
		"login_help": "@hotmail.com",
		"password_label": "Your Hotmail password:",
		"item_type": "contact",
		"proper_name": "Hotmail",
		"contacts_instructions": "Select the contacts you wish to invite and click OK."
	},
	"contacts-yahoo": {
		"import_type": "page_scrape",
		"label": "Invite Yahoo! Contacts",
		"login_label": "Your Yahoo! ID:",
		"login_help": "@yahoo.com",
		"password_label": "Your Yahoo! password:",
		"item_type": "contact",
		"proper_name": "Yahoo",
		"contacts_instructions": "Select the contacts you wish to invite and click OK."
	},
	"contacts-gmail": {
		"import_type": "page_scrape",
		"label": "Invite GMail Contacts",
		"login_label": "Your GMail ID:",
		"login_help": "@gmail.com",
		"password_label": "Your GMail password:",
		"item_type": "contact",
		"proper_name": "GMail",
		"contacts_instructions": "Select the contacts you wish to invite and click OK."
	},
	"contacts-myspace": {
		"import_type": "page_scrape",
		"label": "Invite MySpace Contacts",
		"login_label": "Your MySpace ID:",
		"password_label": "Your MySpace password:",
		"item_type": "contact",
		"proper_name": "MySpace",
		"contacts_instructions": "Select the contacts you wish to invite and click OK."
	},
	"contacts-myspace": {
		"import_type": "page_scrape",
		"label": "Invite MySpace Contacts",
		"login_label": "Your MySpace ID (email):",
		"password_label": "Your MySpace password:",
		"item_type": "contact",
		"proper_name": "MySpace",
		"contacts_instructions": "Select the contacts you wish to invite and click OK."
	},
	"contacts-bebo": {
		"import_type": "page_scrape",
		"label": "Invite Bebo Contacts",
		"login_label": "Your Bebo ID:",
		"password_label": "Your Bebo password:",
		"item_type": "contact",
		"proper_name": "Bebo",
		"contacts_instructions": "Select the contacts you wish to invite and click OK."
	},
	"contacts-aol": {
		"import_type": "page_scrape",
		"label": "Invite AOL Webmail Contacts",
		"login_label": "Your AOL Webmail ID:",
		"login_help": "@aol.com",
		"password_label": "Your AOL Webmail password:",
		"item_type": "contact",
		"proper_name": "AOL Webmail",
		"contacts_instructions": "Select the contacts you wish to invite and click OK."
	},
	"contacts-yahoo360": {
		"import_type": "page_scrape",
		"label": "Invite Yahoo 360 Contacts",
		"login_label": "Your Yahoo 360 ID:",
		"login_help": "@yahoo.*",
		"password_label": "Your Yahoo 360 password:",
		"item_type": "contact",
		"proper_name": "Yahoo 360",
		"contacts_instructions": "Select the contacts you wish to invite and click OK."
	},
	"contacts-shutterfly": {
		"import_type": "page_scrape",
		"label": "Invite Shutterfly Contacts",
		"login_label": "Your Shutterfly ID (email):",
		"password_label": "Your Shutterfly password:",
		"item_type": "contact",
		"proper_name": "Shutterfly",
		"contacts_instructions": "Select the contacts you wish to invite and click OK."
	},
	"contacts-kodak": {
		"import_type": "page_scrape",
		"label": "Invite Kodak Gallery Contacts",
		"login_label": "Your Kodak Gallery ID (email):",
		"password_label": "Your Kodak Gallery password:",
		"item_type": "contact",
		"proper_name": "Kodak Gallery",
		"contacts_instructions": "Select the contacts you wish to invite and click OK."
	}
};

var Frame_Cycle = new Array();
var Loaded_Images = new Array();
var Is_Cycling = false;
var Cycle_Timer;

function start_frame_cycle(img, key, owner_id) {
	if (Is_Cycling) {
		return;
	}
	if (Cycle_Timer) {
		clearTimeout(Cycle_Timer);
	}
	Is_Cycling = true;
        Frame_Cycle['key'] = key;
	Frame_Cycle['img'] = img;
	Frame_Cycle['orig_src'] = img.src;
	Frame_Cycle['state'] = 1;
	Frame_Cycle['owner_id'] = owner_id;
	cache_frame(1);
	cache_frame(2);
	Cycle_Timer = setTimeout("cycle_frames();", 800);
}

function stop_frame_cycle() {
	Frame_Cycle['img'].src = Frame_Cycle['orig_src'];
	Is_Cycling = false;
}

function cache_frame(frame_number) {
	var src = cycle_frame_src(frame_number);
	if (Loaded_Images[src]) {
		return;
	}
	Loaded_Images[src] = new Image();
	Loaded_Images[src].src = src;
}

function cycle_frames() {
	if (!Frame_Cycle['key'] || !Is_Cycling) {
		return;
	}
	var next_state = Frame_Cycle['state'] + 1;
	if (next_state > 9) { 
		next_state = 1;
	}
	var next_next_state = next_state + 1;
	if (next_next_state > 9) {
		next_next_state = 1;
	}
	var src = cycle_frame_src(next_state);
	Frame_Cycle['img'].src = src;
	Frame_Cycle['state'] = next_state;
	cache_frame(next_next_state);
	Cycle_Timer = setTimeout("cycle_frames();", 800);
}

function cycle_frame_src(frame_number) {
	if (!Frame_Cycle['key']) {
		return;
	}
	return 'http://images.' + Frame_Cycle['owner_id'] + '.multiply.com/video/frame-cycle/' + Frame_Cycle['key'] + '/' + frame_number + '/' + cycle_frame_size();
}

function cycle_frame_size() {
	var size_regex = /\/(\d+x\d+)\//;
	var size = Frame_Cycle['orig_src'].match(size_regex);
	if (size) {
		return RegExp.$1;
	}
	return '1200x120';
}

var Viximo_Photos_To_Register = new Array();
var Viximo_Profiles_To_Register = new Array();
function viximo_register_photos() {
    if (viximo) {
	for(var x=0; x<Viximo_Photos_To_Register.length; x++) {
	    viximo.oyf.decorator.registerPhoto(Viximo_Photos_To_Register[x]);
	}
	for(var x=0; x<Viximo_Profiles_To_Register.length; x++) {
	    var profile = Viximo_Profiles_To_Register[x];
	    viximo.ui.profile(profile[0], profile[1]);
	}
    }
}
function commify (value) {
	var numStr = value.toString();
	var num = numStr.split('');

	// simplify by only accepting integers longer than 3 digits
	if ( numStr.match(/\D/) || num.length < 3 ) return numStr;
	num.reverse();
	numStr = num.join('');

	numStr = numStr.replace(/(\d\d\d)/g, "$1_marker_");
	// if we did one too many, take it back
	numStr = numStr.replace(/_marker_$/g, '');
	// replace the thousandth _marker_ with ',' or '.'
	numStr = numStr.replace(/_marker_/g, ',');

	num = numStr.split('');
	num.reverse();
	return num.join('');
}
function set_document_field (id, value) {
        display('cell_document_file_' + id, value == 'replace');
        display('cell_document_filename_' + id, value == 'keep');
}
function append_selfserve_click_code(url,code) {
    return url;
    var url_has_query_string = /adurl.*%3F/.test(url);
    var click_code ='';
    if (url_has_query_string) {
        click_code = '%26cc%3D' + code;
    }
    else {
        click_code = '%3Fcc%3D' + code;
    }
    url = url + click_code;
    return url;
}
// -*- mode: javascript; -*-

var list_cloaked = new Array();

function log_cloaked(elem, property) {
    list_cloaked.push([describe_elem(elem), property].join(":"));
}

function get_style(elem, property) {
    var value;

    if (document.defaultView && document.defaultView.getComputedStyle) {
        value = document.defaultView.getComputedStyle(elem, "").getPropertyValue(property);
    }
    else if (elem.currentStyle) {
        // IE - convert to camelCase
        property = property.replace(/\-(\w)/g, function (strMatch, p1){ return p1.toUpperCase(); });
        value = elem.currentStyle[property];
    }

    return value;
}

function is_cloaked(elem) {
    return get_style(elem, "display") == 'none'
        || get_style(elem, "visibility") == "hidden"
        || get_style(elem, "opacity") <= 0.2
	    //        || get_style(elem, "position") == "fixed"
        || get_style(elem, "height") == "0px"
        || get_style(elem, "width") == "0px";
}

function uncloak(elem) {
    if (get_style(elem, "display") == "none") {
        elem.style.display = "block";
        log_cloaked(elem, "display");
    }
    if (get_style(elem, "visibility") == "hidden") {
        elem.style.visibility = "visible";
        log_cloaked(elem, "visibility");
    }
    if (get_style(elem, "opacity") <= 0.2) {
        set_opacity(elem, 100);
        log_cloaked(elem, "opacity");
    }
    // if (get_style(elem, "position") == "fixed") {
    //     elem.style.position = "static";
    //     log_cloaked(elem, "position");
    // }
    if (get_style(elem, "height") == "0px") {
        if (elem.getAttribute("height")) {
            elem.style.height = elem.getAttribute("height") + 'px';
            log_cloaked(elem, "height");
        }
    }
    if (get_style(elem, "width") == "0px") {
        if (elem.getAttribute("width")) {
            elem.style.width = elem.getAttribute("width") + 'px';
            log_cloaked(elem, "width");
        }
    }
}

function flatten() {
    var arr = new Array();
        console.dir(arguments);
    for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg)
            continue;
        if (arg instanceof Array) {
            for (var j = 0; j < arg.length; j++) {
                if (arg[j]) {
                    arr = arr.concat(flatten(arg[j]));
                }
            }
        }
        else
            arr.push(arg);
    }

    return arr;
}

function show_warning_cloaked() {
    alert("Part of your custom css is ignored because it is interfering with Multiply's main navigation.\n\nPlease edit your custom css to remove this alert.");
}

function check_cloakedness(is_page_owner) {
    var element_groups = new Array(
        getElementsByClassName('header'),
        getElementsByClassName('globalnav'),
        getElementsByClassName('signout'),
        getElementsByClassName('gnoptsel'),
        getElementsByClassName('rail'),
        getElementsByClassName('railbody'),
        getEl('banneradholder')
    );

    if (getEl('rail_ad').childNodes.length > 0) {
        element_groups.push(getEl('google_ads_div_userhome120x600'));
        element_groups.push(getEl('google_ads_iframe_userhome120x600'));
        element_groups.push(getEl('google_ads_div_abs-defaultout-userhome120x600'));
        element_groups.push(getEl('google_ads_iframe_abs-defaultout-userhome120x600'));
	//        getEl('subnavc'),
	//        getEl('multiply_logo_named')
    }

    var elements = flatten(element_groups);

    var count_cloaked = 0;
    for (var i = 0; i < elements.length; i++) {
        if (!elements[i])
            continue;
        var elem = elements[i];
        if (is_cloaked(elem)) {
            count_cloaked++;
            uncloak(elem);
        }
    }

    if (list_cloaked.length > 0 && is_page_owner) {
        show_warning_cloaked();
    }
}

function describe_elem(elem) {
    return elem.tagName.toLowerCase()
        + (elem.className ? '.' + elem.className : '')
        + (elem.id ? '#' + elem.id : '');
}
