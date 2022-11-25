// -*- mode: javascript; -*-

var IndividualPhotoReplyKey;
var OnPhotoAlbumPage;
if (!window.console || !console.firebug)
{
    var names = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml",
    "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];

    window.console = {};
    for (var i = 0; i < names.length; ++i)
        window.console[names[i]] = function() {}
}

function check_new_replies () {
	if (! live_replies) return;

	// clear any outstanding requests to prevent potential collisions
	if (current_timeout) {
		window.clearTimeout(current_timeout);
		current_timeout = null;
	}

	// if we're suspended, just re-fire on the next delay
	if (live_replies_suspended) {
		current_timeout = window.setTimeout("check_new_replies()",
						    check_replies_delay);
		return;
	}

	var i = Math.round(100000 * Math.random());
	var url = '/item/new-replies/' + item_key + '/' + replies_count + '/' + i + '/' + 'newreplies' + '/' + check_replies_delay + '?is_mine=' + item_is_mine + '&item_timestamp=' + item_timestamp + '&viewing_history_timestamp=' + item_viewing_history_timestamp ;
	ajax(url, check_new_replies_callback, {name: 'replies'});
}
var current_timeout = null;
var check_replies_delay = 4000;
var global_page_views = -1;
var live_replies_suspended = false;
var jump_to_new_reply = false;

function maybe_suspend_live_replies() {
	live_replies_suspended = true;
	return;

	if (live_replies_suspended || current_timeout == null) {
		console.log('maybe_suspend_live_replies: already suspended.');
		return;
	}

	if (current_timeout) {	// live-replies are on
		window.clearTimeout(current_timeout);
		current_timeout = null;
		live_replies_suspended = true;
		console.log('reply_to: suspending live replies...');
	}
	else {
		console.log('maybe_suspend_live_replies: live replies are not on.');
	}
}

function maybe_restore_live_replies() {
	live_replies_suspended = false;
	return;

	if (live_replies_suspended || current_timeout == null) {
		console.log('maybe_restore_live_replies: restoring suspended live replies...');
		current_timeout = window.setTimeout(check_new_replies,
						    check_replies_delay);
		live_replies_suspended = false;
	}
	else {
		console.log('maybe_restore_live_replies: not suspended.');
	}
}

var global_check_count =  -1;
function check_new_replies_callback(req) {
	current_timeout = window.setTimeout("check_new_replies()",
					    check_replies_delay);
	live_replies_suspended = false;

	var new_replies = req.responseText;
        global_check_count = global_check_count + 1;

	if(new_replies == 'NOCHANGE'){
            if (global_check_count % 8 == 0) {
	        if (MultiplyTracker) MultiplyTracker.track_url('(reply-1)',detail_pagename + ' (reply-1)');
            }
	    check_replies_delay = check_replies_delay * 1.25;
	    return;
	}
	else if(new_replies == 'ERROR'){
	    check_replies_delay = 1000000;
	    return;
	}

	i = new_replies.indexOf('|');

	if (i < 1) return;
	var new_replies_count = 1 * new_replies.substring(0, i);
	new_replies = new_replies.substring(i + 1);

	j = new_replies.indexOf('|');
	var total_viewers = 1 * new_replies.substring(0,j);
	new_replies = new_replies.substring(j + 1);

	k = new_replies.indexOf('|');
	var new_item_timestamp = 1 * new_replies.substring(0, k);
	new_replies = new_replies.substring(k + 1);

	if(new_item_timestamp > 0 && new_item_timestamp > item_timestamp){
	    item_timestamp = new_item_timestamp;
	}

	l = new_replies.indexOf('|');
	var new_item_viewing_history_timestamp = 1 * new_replies.substring(0,l);
	new_replies = new_replies.substring(l + 1);

	if(new_item_viewing_history_timestamp > item_viewing_history_timestamp){
	    item_viewing_history_timestamp = new_item_viewing_history_timestamp;
	}

	if (global_page_views == -1) {
	    global_page_views = total_viewers;
	}
	else if (global_page_views != total_viewers) {
	    global_page_views = total_viewers;
	    refresh_viewing_history();
	}

	if (new_replies_count > replies_count) {
		replies_count = new_replies_count;
		check_replies_delay = 4000;
		window.clearTimeout(current_timeout);
		current_timeout = window.setTimeout("check_new_replies()", check_replies_delay);
	}
	else {
		check_replies_delay = check_replies_delay * 1.25;
		if (MultiplyTracker) MultiplyTracker.track_url('(ajax no-read-reply)',detail_pagename + ' (ajax no-read-reply)');
		// urchinTracker('/item/no-new-replies'); // Google analytics
		return;
	}

	if (Reload_Mailbox_On) {
		reload_mailbox_now();
	}

	if (!OnPhotoAlbumPage) {
		var replies_count_label = getEl('numcommentslabel');
		if (replies_count_label) {
			if (replies_count == 1)
				replies_count_label.innerHTML = '1 Comment';
			else
				replies_count_label.innerHTML = replies_count + ' Comments';
		}
	}

	var do_scroll;
	
	var vheight;
	if (window.innerHeight)
		vheight = window.innerHeight;
	else if (document.documentElement && document.documentElement.clientHeight)
		vheight = document.documentElement.clientHeight;
	else if (document.body)
		vheight = document.body.clientHeight;

	var html_element = getEl('html_tag');

	var scroll_top;
	if (getEl('mailitem')) {
	        scroll_top = getEl('mailitem').scrollTop;
	}
	else if (!Multiply.Browser.is_msie && getEl('centerrail')) {
	        scroll_top = getEl('centerrail').scrollTop;
	}
	else if (self.pageYOffset) {
	        scroll_top = self.pageYOffset;
	}
	else if (document.documentElement && document.documentElement.scrollTop) {
	        scroll_top = document.documentElement.scrollTop;
	}
	else if (document.body) {
	        scroll_top = document.body.scrollTop;
	}

	if (getEl('mailitem')) {
		do_scroll = 0;
	}
	else {
		if (html_element.scrollHeight - (scroll_top + vheight) < 4)
			do_scroll = 1;
	}

	var new_reply_node = document.createElement("div");
	new_reply_node.innerHTML = new_replies;

	if (OnPhotoAlbumPage) {
		set_new_replies_display(new_reply_node);
	}

	var vid_replies = new Array();
	var audio_replies = new Array();
	vid_replies = new_replies.match(/<script>insertMulTV\((.*?)\);<\/script>/g);
	audio_replies = new_replies.match(/<script>insertAudioReply\((.*?)\);<\/script>/g);

        insert_new_replies(new_reply_node);

	// if (getEl('body').focus) window.scrollByPages(10);
	if (do_scroll) {
		if (Scrolling_Panes == 2) {
			if (getEl('mailitem')) 
				getEl('mailitem').scrollTop = 10000;
			else 
				getEl('rightrail').scrollTop = 10000;
		}
		else if (!Multiply.Browser.is_msie && getEl('centerrail')) {
			getEl('centerrail').scrollTop = 10000;
		}
		else {
			window.scrollBy(0, 10000);
		}
	}
	if (vid_replies && vid_replies.length) {
	    for(x=0; x<vid_replies.length; x++) {
		var elements = vid_replies[x].split(',');
		for(y=0; y<elements.length; y++) {
		    elements[x] = elements[x].replace(/'/g,'');
		}
		insertMulTV(elements);
	    }
	}
	if (audio_replies && audio_replies.length) {
	    for(x=0; x<audio_replies.length; x++) {
		var elements = audio_replies[x].split(',');
		for(y=0; y<elements.length; y++) {
		    elements[x] = elements[x].replace(/'/g,'');
		}
		insertAudioReply(elements);
	    }
	}

	if (MultiplyTracker) MultiplyTracker.track_url('(new-read-reply)',detail_pagename + ' (new-read-reply)');
	//urchinTracker('/item/new-reply'); // Google analytics
	if (OnPhotoAlbumPage) {
		show_current_comments();
	}
}

function get_reply_depth(reply_el) {
        var depth = parseInt(reply_el.getAttribute('depth'));
        return isNaN(depth) ? 0 : depth;
}

var new_reply_anchors = new Array();

function insert_new_replies(new_replies) {
	var new_rep_div = getEl('new_replies_go_here');
        if (replies_order == 'threaded') {
                var new_reply_count = 0;
		new_rep_div.appendChild(new_replies);
                for (var i = 0; i < new_replies.childNodes.length; i++) {
                        var new_reply = new_replies.childNodes[i];
                        if (new_reply.nodeType != 1)
                                continue;
                        new_reply_count++;
                        console.log('insert_new_replies: new_reply_id |' + new_reply.id + '|');
                        new_reply_anchors.push(new_reply.firstChild.id);
                        var parent_key = new_reply.getAttribute('parent');
                        if (parent_key && parent_key.match(/\+\d+$/)) {
                                new_replies.removeChild(new_reply);
                                console.log('insert_new_replies: parent_key |' + parent_key + '|');
                                var parent_reply = getEl('reply_' + parent_key);
                                if (parent_reply) {
                                        var parent_depth = get_reply_depth(parent_reply);
                                        var new_reply_depth = parent_depth + 1;
                                        if (new_reply_depth > 15) new_reply_depth = 15;
                                        console.log('insert_new_replies: parent_reply |' + parent_reply.id + '|, depth |' + parent_depth + '|');
                                        // insert just before the next reply whose depth is same as that of the parent
                                        var ref_node = parent_reply;
                                        var next = ref_node.nextSibling;
                                        while (next) {
                                                if (next.nodeType != 1) {
                                                        next = next.nextSibling;
                                                        continue;
                                                }
                                                console.log('checking next |' + describe_elem(next) + '|')
                                                if (!has_class(next, 'reply')) {
                                                        console.log('next is not a reply element. stop!');
                                                        break;
                                                }
                                                var next_depth = get_reply_depth(next);
                                                console.log('next depth |' + next_depth + '|')
                                                if (next_depth <= parent_depth) {
                                                        console.log('next is same or below parent depth. stop!');
                                                        break;
                                                }
                                                ref_node = next;
                                                next = next.nextSibling;
                                        }
                                        console.log('insert_new_replies: inserting after |' + describe_elem(ref_node) + '|');
                                        new_reply.setAttribute('depth', new_reply_depth);
                                        insertAfter(new_reply, ref_node);
                                        new_reply.style.marginLeft = (20 * new_reply_depth) + 'px';
                                }
                        }
                }
                if (jump_to_new_reply) {
                        console.log('insert_new_replies: jumping to new reply ...');
                        jump_to_next_new_reply();
                        jump_to_new_reply = false;
                }
                else
                        update_new_replies_notice();
                console.log('insert_new_replies: |' + new_reply_count + '| new replies inserted.');
                return;
        }

	if (replies_order == 'reverse')
		new_rep_div.insertBefore(new_replies, new_rep_div.firstChild);
	else
		new_rep_div.appendChild(new_replies);
}

function update_new_replies_notice() {
        var new_reply_count = new_reply_anchors.length;
        if (new_reply_count < 1) {
                display('new_replies_notice', false);
                return;
        }
        var new_replies_notice = getEl('new_replies_notice');
        if (!new_replies_notice) {
                new_replies_notice = createEl('div', 'new_replies_notice');
                var parent = getEl('rightrail') ? getEl('item_posted') : document.body;
                parent.style.position = 'relative';
                parent.appendChild(new_replies_notice);
                console.log('new_replies_notice appended to ' + describe_elem(parent));

                addEvent(new_replies_notice, 'click', jump_to_next_new_reply, false);
        }

        display('new_replies_notice', true);
        new_replies_notice.innerHTML = "<span id='new_replies_count'>" + new_reply_count + "</span> new " + (new_reply_count == 1 ? "reply" : "replies") + '. <strong>Jump to next new reply</strong>';
        console.log('new_replies_notice updated');
}

var prev_new_reply = null;
function jump_to_next_new_reply() {
        if (prev_new_reply && getEl(prev_new_reply))
                remove_class(getEl(prev_new_reply).parentNode, 'newreply');
        if (new_reply_anchors.length > 0) {
                var next_new_reply = new_reply_anchors.shift();
                console.log('jump_to_next_new_reply: next_new_reply |' + next_new_reply + '|');
                var next_new_reply_el = getEl(next_new_reply);
                add_class(next_new_reply_el.parentNode, 'newreply');
                next_new_reply_el.parentNode.scrollIntoView();
                if (getEl('mailitem')) { // 3pane
                        getEl('header').scrollIntoView();
                        getEl('mailitem').scrollTop -= 20; // scroll a bit so complete reply is visible
                }
                else {
                        window.scrollBy(0, -20); // scroll a bit so complete reply is visible
                }
                prev_new_reply = next_new_reply;
        }
        update_new_replies_notice();
}

if (!window.Multiply) Multiply = {};
if (!Multiply.Global) Multiply.Global = {};

Multiply.Global.curr_reply_to = null;
Multiply.Global.target_reply_to = null;
Multiply.Global.selected_reply_text = '';

// not really needed. moreover, they mess up embedded videos in safari
// setup_reply_handlers();


function submitReply(button) {
	var reply_item_key = IndividualPhotoReplyKey || item_key;

	var reply_to = '';
	var sub_item = '';
	if (Multiply.Global.curr_reply_to) {
	    if (Multiply.Global.curr_reply_to.id.match(/^item_/)) {
		// replying to an item (possibly individual photo of an album)
		reply_to = 'item_' + reply_item_key;
	    }
	    else {
		// replying to a reply
		var re = new RegExp('^reply_' + reply_item_key + '(:\\d+(\\.[a-zA-Z]+)?)?' + '\\+(\\d+)');
		var m = Multiply.Global.curr_reply_to.id.match(re);
		sub_item = m[1] || '';
		reply_to = m[3];
	    }
	}
	else {
	    reply_to = 'item_' + reply_item_key;
	}
	console.log('submitReply: item_key = |' + reply_item_key + '|, sub_item = |' + sub_item + '|, reply_to = |' + reply_to + '|');

	var reply_for_owner = getEl('reply::for_whom::owner');
	var reply_type = (reply_for_owner && reply_for_owner.checked) ? 'owner' : 'reply';

	var replyform = getEl('replyform') || document.forms['replyform'];
	if (document.submit_normally || !live_replies || reply_type != 'reply' || is_anon_user()) {
	    if (reply_to != '')
		    getEl('reply_to').value = reply_to;
	    if (sub_item) {
		    replyform.action += sub_item;
	    }
	    else if (reply_item_key) {
		    replyform.action = replyform.action.replace(/([^\/]*)$/, '') + reply_item_key;
	    }
	    else if (typeof ItemKeyDefault != 'undefined' && ItemKeyDefault) {
		    replyform.action = replyform.action.replace(/([^\/]*)$/, '') + ItemKeyDefault;
	    }
	    console.log('submitting to: ' + replyform.action);

	    getEl('for').value = reply_type;
	    console.log('reply::for |' + getEl('for').value + '|');
	    window.setTimeout(function() {reset_reply_recipient(false)}, 100);
	    return true;
	}

	var body = getEl('body').value;
	window.clearTimeout(current_timeout);

	var url = '/item/reply-to-message-ajax/' + reply_item_key + sub_item;

	var data = {
	    no_redirect	  : 1,
	    'form::reply' : 1,
	    _charset_	  : 'utf_8',
	    'reply::body' : body,
	    'reply::for'  : reply_type
	};

	if (reply_type != 'reply')
	    data['reply::subject'] = replyform.elements['reply::subject'].value;
	if (reply_to != '')
	    data['reply::reply_to'] = reply_to;
	if (getEl('cite') && getEl('cite').checked) {
	    data['reply::cite'] = 'on';
	    data['reply::quoteparttext'] = getEl('quoteparttext').value;
	}
	var rating = get_rating();
	if (rating != null)
	    data['reply::rating'] = rating;
	var stoken = replyform.elements['secure-token'];
	if (stoken) {
	    data['reply::secure-token'] = stoken.value;
	}
	var cs_status = replyform.elements['cs_status'];
	if(cs_status) {
	    data['reply::cs_status'] = cs_status.value;
	}
	var cs_category = replyform.elements['cs_category'];
	if(cs_category) {
	    data['reply::cs_category'] = cs_category.value;
	}
	var cs_assignee = replyform.elements['cs_assignee'];
	if(cs_assignee) {
	    data['reply::cs_assignee'] = cs_assignee.value;
	}

	console.log('POSTing to: |' + url + '|');
	var req = ajax(url, null, {method: 'POST', async: false, params: data});

 	if (req.responseText) {
		if (req.status == 302) {
			window.location.href = req.getResponseHeader('Location');
			return false;
		}
		else if(req.responseText.indexOf('LOCATION:') == 0){
		    var location = req.responseText.substr(9);
//		    alert('LOCATION FOUND:' + location);
		    window.location.href = location;
		    return false;

		}
		getEl('body_errors').innerHTML = req.responseText;
	}
	else {
	    if (Multiply.Global.curr_reply_to) {
		console.log('curr_reply_to = |' + Multiply.Global.curr_reply_to.id + '|');
		// show_submit_status(Multiply.Global.curr_reply_to);
		reset_reply_status(Multiply.Global.curr_reply_to);
	    }
	    getEl('body_errors').innerHTML = '';
	    getEl('body').value = '';
	    maybe_reset_ratings();
	    reset_reply_recipient(false);
	}
	check_new_replies();
        jump_to_new_reply = true;
	if (MultiplyTracker) MultiplyTracker.track_url('(ajax reply)',detail_pagename + ' (ajax reply)');
	return false;
}
if (live_replies) check_new_replies();

function get_sel() {
	var txt;
	if (window.getSelection)
		txt = window.getSelection();
	else if (document.selection)
		txt = document.selection.createRange().text;
	else if (document.getSelection)
		txt = document.getSelection();

	Multiply.Global.selected_reply_text = txt.toString();
	// selected_reply_text = '' + escape(txt);
}

function setup_reply_handlers() {
    var all_replies = get_all_replies();
    var items = getElementsByClassName('itembox');
    if (items && items.length) {
	all_replies.push(items[0]);
    }
    for (var i = 0; i < all_replies.length; i++) {
	if (all_replies[i].id && all_replies[i].id.match(/^reply_/) || all_replies[i].className == 'itembox') {
	    addEvent(all_replies[i], 'mouseup', set_target_reply, false);
	    console.log('onmouseup handler added to ' + (all_replies[i].id || all_replies[i].className));
	} else {
	    console.log('skipping ' + all_replies[i].id + '|' + all_replies[i].className);
	}
    }
}

function set_target_reply(e) {
    var target = get_event_target(e);
    console.log("set_target_reply: target.id = " + (target.id || target));
    var reply = get_reply_element(target);
    if (reply) {
	console.log("set_target_reply: reply.id = " + reply.id);
	Multiply.Global.target_reply_to = reply;
    }
    return true;
}

// set up reply to the specified item.  item_id is optional
function reply_to(e, item_id) {
    var reply_link = get_event_target(e);

    var reply;

    if (item_id) {
	    reply = getEl(item_id);
    }
    else {
	    reply = get_reply_element(reply_link);
    }
    console.log('reply_to: reply.id = ' + reply.id);

    show_cancel_button(reply_link, reply);

    display('reply_submitted_msg', false);

    // unhighlight highlighted reply, if different
    if (Multiply.Global.curr_reply_to) {
	console.log('reply_to: curr_reply_to.id = ' + Multiply.Global.curr_reply_to.id);
	if (Multiply.Global.curr_reply_to.id != reply.id) {
	    console.log('unhighlighting curr_reply_to: id = ' + Multiply.Global.curr_reply_to.id);
	    unhighlight_reply(Multiply.Global.curr_reply_to);
	}
    }

    // place reply box
    hide_other_replies(reply);

    // highlight reply
    console.log('setting curr_reply_to to ' + reply.id);
    Multiply.Global.curr_reply_to = reply;
    highlight_reply(Multiply.Global.curr_reply_to);

    set_media_reply_links_for_pm();

    getEl('body').value = '';
    getEl('body').focus();

    maybe_reset_ratings();
    maybe_suspend_live_replies();

    return false;
}

function get_event_target(e) {
    if (!e) var e = window.event;
    console.log('get_event_target: e.type = |' + e.type + '|, target = |' + e.target + '|');

    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();

    e.returnValue = false;
    if (e.preventDefault) e.preventDefault();

    var target;
    if (e.target)
	target = e.target;
    else
	if (e.srcElement) target = e.srcElement;
    if (target.nodeType == 3)
	target = target.parentNode;

    return target;
}

// get the containing reply element
function get_reply_element(node) {
    if (!node)
	return;

    var reply;
    // try to get the reply element by id
    if (node.id && node.id.match(/^(reply|item)_/)) {
	var reply_id = node.id.replace(/^(reply|item)_((link|body)_)?/, '');
	var reply_id = node.id.replace(/^reply_(link|body)_/, '');
	console.log('get_reply_element: reply_id = |' + reply_id + '|');
	if (reply_id) {
	    reply = getEl('reply_' + reply_id) || getEl('item_' + reply_id);
	    if (reply)
		return reply;
	}
    }

    // if not found by id, try traversing up the chain
    var parent = node;
    while (!parent.className || !parent.className.match(/^replybox|^itembox$/)) {
	parent = parent.parentNode;
	if (!parent) break;
	if (parent.id == 'maincontent') {	// came too far; shouldn't happen
	    break;
	}
    }
    if (parent && parent.id != 'maincontent') {
	if (parent.className.match(/^replybox/)) {
	    reply = parent;
	} else if (parent.className == 'itembox') {
	    while (!parent.id || !parent.id.match(/^item_/)) {
		parent = parent.parentNode;
	    }
	    if (parent.id.match(/^item_/)) {
		reply = parent;
	    }
	}
	console.log('get_reply_element: reply.id = |' + reply.id + '|, class = |' + reply.className + '|');
    }

    return reply;
}

// hide all other replies
function hide_other_replies(reply) {
    var reply_id = reply.id;
    console.log('hide_other_replies: reply_id = |' + reply_id + '|');

    var all_replies = get_all_replies();
    var all_replies_count = all_replies.length;
    for (var i = 0; i < all_replies_count; i++) {
	var this_id = all_replies[i].id;
	if (this_id && this_id != 'itemreplyform' && this_id != reply_id) {
	    // console.log('hide_other_replies: hiding |' + this_id + '|');
	    display(this_id, false);
	}
	else if (all_replies[i].className == 'replydeleted') {
	    display(all_replies[i], false);
	}
    }

    // hide item body if replying to a reply
    var m = reply_id.match(/^reply_(.*?)\+\d+$/);
    if (m) {
	var item_id = 'item_' + m[1];
	if (!getEl(item_id)) {
	    // replies to individual photos case
	    item_id = item_id.replace(/(:\d+):\d+$/, '$1');
	}
	console.log('hide_other_replies: hiding item ' + item_id + ' ...');
	display(item_id, false);

	display('itemactions', false);
    }

    // hide view-options
    display('view_options', false);

    if (reply && Scrolling_Panes != 2) {
        var view_mode = replies_view_mode();
        var el_to_focus = view_mode == 'reverse' ? getEl('itemreplyform') : reply;
	if (el_to_focus.scrollIntoView)
	    el_to_focus.scrollIntoView();
	else
	    el_to_focus.focus();
	window.scrollBy(0, -50);
    }
}

function restore_all_replies(reply) {
    // show item body if replying to a reply
    if (reply) {
	var m = reply.id.match(/^reply_(.*?)\+\d+$/);
	if (m) {
	    var item_id = 'item_' + m[1];
	    console.log('restore_all_replies: showing item ' + item_id + ' ...');
	    display(item_id, true);
	}

	display('itemactions', true);
    }
    console.log('restore_all_replies: item_key = |' + item_key + '|');
    if (getEl('item_' + item_key))
	display('item_' + item_key, true);
    else {
	var real_item_key = item_key.replace(/(:\d+):\d+$/, '$1');
	console.log('restore_all_replies: real_item_key = |' + real_item_key + '|');
	if (getEl('item_' + real_item_key)) {
	    display('item_' + real_item_key, true);
	}
    }

    // show view-options
    display('view_options', true);

    var all_replies = get_all_replies();
    var reply_re = new RegExp('reply_' + item_key + '\\b');
    for (var i = 0; i < all_replies.length; i++) {
	if (all_replies[i].id.match(reply_re))
	    display(all_replies[i].id || all_replies[i], true);
    }
    if (reply && Scrolling_Panes != 2) {
	if (reply.scrollIntoView)
	    reply.scrollIntoView();
	else
	    reply.focus();
	window.scrollBy(0, -50);
    }
}

function highlight_reply(reply) {
    if (!reply)
	return;
    console.log('highlight_reply: reply.id = ' + reply.id);
    reply.className += ' replying_to';

    var reply_link = getEl('reply_link_' + reply.id.replace(/^(reply|item)_/, ''));
    console.log('reply_link.id = |' + reply_link.id + '|');
//     if (reply_link)
// 	reply_link.innerHTML = 'cancel reply';
    var item_text_el = get_item_text_el();
    if (getEl('row_cite') && item_text_el && quotable_text(item_text_el))
	display('row_cite', true);

    reset_reply_recipient(true);
}

function unhighlight_reply(reply) {
    if (!reply)
	return;
    console.log('unhighlight_reply: reply.id = ' + reply.id);

    reply.className = reply.className.replace(/ ?\breplying_to\b/, '');
    var reply_link = getEl('reply_link_' + reply.id.replace(/^(reply|item)_/, ''));
    if (reply_link) {
        console.log('reply_link.id = |' + reply_link.id + '|');
	display(reply_link.id, true);
    }
    if (getEl('row_cite'))
	display('row_cite', false);

    var cancel_reply_btn = getEl('cancel_reply_btn');
    if (cancel_reply_btn)
	cancel_reply_btn.parentNode.removeChild(cancel_reply_btn);

    reset_reply_recipient(false);
}

function get_all_replies() {
    var photo_reply_re;
    photo_reply_re = new RegExp('^reply_' + item_key);

    var reply_container = getEl('albumreplies') || getEl('replies');
    var all_replies = getElementsByClassName('replyboxread', reply_container);
    for (var i = 0, ar = getElementsByClassName('replybox', reply_container); i < ar.length; i++) {
	if (photo_reply_re && !ar[i].id.match(photo_reply_re))
	    continue;
	all_replies.push(ar[i]);
    }
    for (var i = 0, ar = getElementsByClassName('replydeleted', reply_container); i < ar.length; i++)
	all_replies.push(ar[i]);

    return all_replies;
}

function clear_quote_box(cite) {
    if (!cite)
	cite = getEl('cite');
    if (cite) {
	cite.checked = false;
	getEl('quotepartlabel').innerHTML = '';
	getEl('quoteparttext').value = '';
	display('row_quotepart', 0);
    }
}

function get_item_text_id() {
    return Multiply.Global.curr_reply_to && Multiply.Global.curr_reply_to.id.match(/^reply_/)
	? Multiply.Global.curr_reply_to.id.replace(/^reply_/, 'reply_body_')
	: 'item_body';
}

function get_item_text_el() {
    var item_text_id = get_item_text_id();
    if (!item_text_id) {
	alert('Item replying to is not found.!');
	return false;
    }
    console.log('item_text_id = |' + item_text_id + '|');
    return getEl(item_text_id);    
}

function quote_original() {
    if (!getEl('cite'))
	return;
    var checked = getEl('cite').checked;

    if (!checked) {
	display('row_quotepart', 0);
	return;
    }

    // if current reply is not set, do it
    if (Multiply.Global.curr_reply_to == null) {
	if (Multiply.Global.target_reply_to != null) {
	    Multiply.Global.curr_reply_to = Multiply.Global.target_reply_to;
	    highlight_reply(Multiply.Global.curr_reply_to);
	    getEl('cite').checked = checked;
	    Multiply.Global.target_reply_to = null;
	}
    }
    if (Multiply.Global.curr_reply_to != null) {
	console.log('quote_original: curr_reply_to = |' + Multiply.Global.curr_reply_to.id + '|');
    } else {
	console.log('quote_original: curr_reply_to not set');
    }

    var item_text_el = get_item_text_el();
    if (!item_text_el) {
	console.log('quotable item text element not found');
	return;
    }

    var item_text = get_text_content(item_text_el);
    if (!item_text || item_text.length == 0) {
	console.log('quotable item text is empty');
	return;
    }

    item_text = item_text.replace(/\s+/g, '');
    console.log('replying to =>' + item_text + '<=');

    // is text selected?
    var quote_el = getEl('quotepartlabel');
    if (Multiply.Global.selected_reply_text) {
	var selected_text = Multiply.Global.selected_reply_text.replace(/\s+/g, '');
	console.log('seleted text =>' + selected_text + '<=');

	if (item_text.indexOf(selected_text) < 0) {
	    alert("Selected text is not part of the item being replied to. Please select again.");
	    clear_quote_box();
	    return false;
	}

	// display quoted text
	console.log('quote_original: quoted text to be shown');
	selected_text = Multiply.Global.selected_reply_text.replace(/[\n\r]/g, '<br><br>');
	var poster_name = item_text_el.getAttribute('author');
	quote_el.innerHTML = "<img align='left' src='http://images.multiply.com/common/misc/quote-start.gif' /><b>" + selected_text + "<img align='right' src='http://images.multiply.com/common/misc/quote-end.gif' /></b><br>&nbsp;-&nbsp;" + poster_name;
	getEl('quoteparttext').value = Multiply.Global.selected_reply_text;
	console.log('quote_original: quoteparttext = |' + getEl('quoteparttext').value + '|');
    } else {
	if (item_text_el) {
	    // display message that whole item text is quoted
	    console.log('quote_original: no selection');
	    var poster_name_possessive = item_text_el.getAttribute('author_possessive');
	    quote_el.innerHTML = '<i>The entire text will be quoted.  If you would like to quote only part of the post, uncheck the Quote box, then select the text you want to quote with your mouse, then re-check the Quote box.</i>';
	}
	else {
	    console.log('quote_original: empty item body text');
	}
	getEl('quoteparttext').value = '';
    }
    display('row_quotepart', 1);
    getEl('body').focus();
}

function get_text_content(elem) {
    if (!elem)
	return;
    if (elem.textContent) {
	return elem.textContent;
    } else if (elem.innerText) {
	return elem.innerText;
    } else {
	return;
    }
}

function show_submit_status(reply) {
    if (!reply)
	return;
    var submitted_msg = createEl('div', 'reply_submitted_msg');
    submitted_msg.innerHTML = "Your reply has been posted.";
    reply.appendChild(submitted_msg); 
    clear_message_later(submitted_msg);
}

function clear_message_later(el) {
    setTimeout(function () { el.parentNode.removeChild(el); }, 10000);
}

function reset_reply_status(reply) {
    restore_all_replies(reply);
    unhighlight_reply(reply);
    clear_quote_box();

    Multiply.Global.curr_reply_to = null;
    reset_reply_recipient(false);

    maybe_reset_ratings();

    // restore live-replies if necessary
    maybe_restore_live_replies();
}

function show_cancel_button(reply_link, reply) {
	var buttons = getEl('preview_spellcheck_btn') ? getEl('preview_spellcheck_btn').parentNode : getEl('cell_submit');
    
    var cancel_reply_btn = createEl('input', 'cancel_reply_btn', 'submit');
    cancel_reply_btn.type = 'submit';
    cancel_reply_btn.value = '  Cancel Reply  ';
    addEvent(cancel_reply_btn, 'click', function() {
		 reset_reply_status(reply);
	     }, false);
    buttons.appendChild(cancel_reply_btn);

    display(reply_link.id, false);
}

function quotable_text(el) {
	var text = el.innerHTML.toLowerCase().replace(/\n/g, '');
	var quotable_text = text.replace(/<div id=['"]?upload-.*?>\s*<object\s+.*?id=["']?multiply_multv_object[^\0]*?<\/script>/, '');
	// console.log('quotable_text: quotable_text = |' + quotable_text + '|');
	return quotable_text;
}

function toggle_reply_subject(value) {
	display('row_subject', value == 'owner');
	display('row_rating_options', value != 'owner');
}

var post_author_id = getEl('for::post_author') ? getEl('for::post_author').innerHTML : '';

function reset_reply_recipient(show_for) {
	var author_id = get_author_id();
	var user_id = get_user_id();
	console.log('reset_reply_recipient: author |' + author_id + '|, user |' + user_id + '|');

	if(author_id == 'service' || author_id == 'servicejp' || author_id == 'servicepremium'){
	    show_for = false;
	}

	getEl('for::post_author').innerHTML = author_id;

	// always start with reply as the default
	getEl('reply::for_whom::reply').checked = true;
	getEl('for').value = 'reply';

	if (!show_for || !user_id || author_id == user_id) { // replying to one's own post
		// don't show 'For:' choices
		display('row_for_whom', false);
		display('row_subject', false);
	}
	else {
		display('row_for_whom', true);
		display('row_subject', false);
	}
}

function get_user_id() {
	var greeting = getEl('greeting');
	return greeting ? greeting.getAttribute('user_id') : null;
}

function get_author_id() {
	var item_text_el = get_item_text_el();
	if (item_text_el) {
	        var tmp_author_id = item_text_el.getAttribute('author');
		var is_pmrepliable = item_text_el.getAttribute('is_pmrepliable');
		if(is_pmrepliable == 0){
		    return 'service';
		}
		if (tmp_author_id) 
		        return tmp_author_id;
	}
	// fallback
	if (!post_author_id) {
		post_author_id = getEl('for::post_author').innerHTML;
		console.log('get_author_id: post_author_id |' + post_author_id + '|');
	}
	return post_author_id;
}

function get_rating() {
    var rating = null;
    if (getEl('rating'))
	    return getEl('rating').value;
    if (getEl('row_rating_options')) {
	for (var i = 1; i <= 5; i++) {
	    if (getEl('reply::rating::' + i) && getEl('reply::rating::' + i).checked) {
		rating = i;
		break;
	    }
	}
    }
    return rating;
}

function maybe_reset_ratings() {
    if (getEl('row_rating_options')) {
	for (var i = 1; i <= 5; i++) {
	    if (getEl('reply::rating::' + i)) {
		getEl('reply::rating::' + i).checked = false;
	    }
	}
	display('row_rating_options', true);
    }
}

function check_reply_for(e) {
    var reply_for_owner = getEl('reply::for_whom::owner');
    // console.log('check_reply_for: reply_for_owner |' + reply_for_owner.checked + '|');
    if (!reply_for_owner || !reply_for_owner.checked)
	return true;

    var link = get_event_target(e);
    var href = link.href;
    // console.log('check_reply_for: href |' + href + '|');

    var replying_to = Multiply.Global.curr_reply_to.id;
    if (replying_to)
        replying_to = replying_to.replace(/^(reply|item)_/, '');
    href += '&for=owner&replying_to=' + replying_to + '&subject=' + encodeURIComponent(getEl('subject').value);
    // console.log('check_reply_for: new href |' + href + '|');
    window.location.href = href;

    return true;
}

function set_media_reply_links_for_pm() {
    console.log('set_media_reply_links_for_pm: munging media reply links ...');
    if (getEl('areplybutton')) {
	addEvent(getEl('areplybutton'), 'click', check_reply_for, false);
	// console.log('set_media_reply_links_for_pm: set up audio link');
    }
    if (getEl('vreplybutton')) {
	addEvent(getEl('vreplybutton'), 'click', check_reply_for, false);
	// console.log('set_media_reply_links_for_pm: set up video link');
    }
}

function replies_view_mode() {
    var view_options_list = getEl('view_options');
    if (view_options_list) {
        if (view_options_list.tagName.toUpperCase() == 'SELECT') {
            return view_options_list.options[view_options_list.selectedIndex].innerHTML.toLowerCase();
        }
        else {
            var children = view_options_list.childNodes;
            for (var i = 0, child; child = children[i]; i++) {
                if (child.className == 'voptsel') {
                    return child.innerHTML.toLowerCase();
                }
            }
        }
    }

    return '';
}
