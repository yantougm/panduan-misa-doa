/*    HTTP Host:  static.ak.fbcdn.net                                          */
/*    Generated:  October 27th 2009 4:48:58 PM PDT                             */
/*      Machine:  10.16.139.107                                                */
/*       Source:  Global Cache                                                 */
/*     Location:  js/notes.js h:6efwmba9                                       */
/*       Locale:  nu_ll                                                        */
/*         Path:  js/notes.js                                                  */

((location=='about:blank'&&(window.parent.eval_global||window.parent.eval))||(window.eval_global||window.eval))("function NotesInformation(_L0,end,_L2,_L3,_L4,_L5){copy_properties(this,{total_notes:_L2,first_note_inpage:_L0,last_note_inpage:end,notebook_id:_L3,subject:_L4,current_note:_L5});}function editnote_typeahead_onsubmit(obj){return false;}function editnote_typeahead_onselect(obj){if(obj){this.clear();_note_add_tag(_note_id,obj.i);}}function ask_delete_note(_L0,_L1,npp,_L3,_L4,_L5,_L6){var _L7='<a href=\\\"'+_L5+'\\\">'+htmlize(_L4)+'<\/a>';var _L8=_tx(\"Anda yakin ingin menghapus {note-link}?\",{'note-link':_L7})+'<br\/><br\/>'+_tx(\"Menghapus catatan ini juga akan menghapus semua komentar dan fotonya\");var _L9=new Dialog().setTitle(_tx(\"Hapus Catatan\")).setBody(_L8).setButtons([Dialog.newButton('delete',_tx(\"Hapus\"),'',function(){_deleteNote(_L0,'note_'+_L0,npp,_L3,_L6);_L9.hide();}),Dialog.CANCEL]).show();}function _note_delete_async_handler(_L0,_L1,_L2,r){if(DOM.scry(document,'body.profile').length==1)return goURI(URI(),true);var _L4=r.getPayload()['data'];if(_L0){hide(ge(_L1));}else{hide(ge(_L1));var _L5=notes_information.total_notes;var _L6=notes_information.last_note_inpage;var _L7=notes_information.first_note_inpage;if(location.href.indexOf('note.php')>-1||_L5==1){location.href='notes.php?id='+_L2;}else if(_L6!=-1&&_L6==_L7){location.href='notes.php?id='+_L2;}else{summary=r.getPayload()['summary'];summary_line=ge('notes_summary');if(summary_line&&summary!=\"\")summary_line.innerHTML=summary;_L5--;notes_information.total_notes--;if(_L6>=_L5){_L6--;notes_information.last_note_inpage--;}}if(_L4!=='0'){main_column=ge('main_column');main_column.appendChild(document.createElement('span')).innerHTML=_L4;var _L8=$('notes_pag_nav_links').getElementsByTagName('li');for(var i=0;i<_L8.length;i++)if((_L8[i].childNodes[0].innerHTML*npp)-npp>=_L5)_L8[i].parentNode.removeChild(_L8[i]);}}}function _deleteNote(_L0,_L1,npp,_L3,_L4){var _L5={note_id:_L0,to_delete:1};if(typeof(notes_information)!=\"undefined\"){copy_properties(_L5,notes_information);_L5.total_notes--;if(_L5.last_note_inpage>_L5.total_notes)_L5.last_note_inpage=_L5.total_notes;if(_L5.current_note>_L5.total_notes)_L5.current_note=_L5.total_notes;}if(!_L4)copy_properties(_L5,{return_next_note:1});new AsyncRequest().setURI('\/ajax\/note_actions_ajax.php').setData(_L5).setHandler(bind(this,_note_delete_async_handler,_L4,_L1,_L3)).setErrorHandler(function(){new Dialog().setTitle(_tx(\"Terjadi kesalahan.\")).setBody(_tx(\"Terjadi kesalahan ketika menghapus catatan. Silahkan coba lagi nanti.\")).setButtons([Dialog.OK]).show();}).send();}function note_add_recommended_tag(_L0,id){_note_add_tag(_L0,id);var _L2=ge('recommended_tags');var _L3=ge('r_tag_'+id);_L2.removeChild(_L3);if(_L2.childNodes&&_L2.childNodes.length==0)$('label_recommend').style.display='none';}function note_remove_tag(_L0,_L1){new AsyncRequest().setURI('\/ajax\/editnote_ajax.php').setData({r:1,note_id:_L0,id:_L1}).setHandler(bind(this,_on_note_remove_tag)).setErrorHandler(function(){}).send();}function _on_note_remove_tag(r){var _L1=ge('num_tags');if(_L1){var num=parseInt(_L1.value);_L1.value=num-1;if(num<=$('num_tags_max').value){$('tag_search_box').style.display='';$('label_note_tagger').innerHTML=ge('note_tagger_label_ok').value;var _L3=ge('recommended_tags');var _L4=ge('label_recommend');if(_L4&&_L3&&_L3.childNodes.length>0){_L3.style.display='';_L4.style.display='';}}}_note_reload_tags(r.getPayload());}function note_reader_remove_tag(_L0,_L1){new AsyncRequest().setURI('\/ajax\/editnote_ajax.php').setData({t:1,note_id:_L0,id:_L1}).setHandler(bind(this,_on_note_reader_remove_tag,_L0)).setErrorHandler(function(){}).send();}function _on_note_reader_remove_tag(_L0,r){var _L2=ge('reader_tags_'+_L0);_L2.innerHTML=r.getPayload();}function _note_add_tag(_L0,_L1){new AsyncRequest().setURI('\/ajax\/editnote_ajax.php').setData({a:1,note_id:_L0,id:_L1}).setHandler(bind(this,_on_note_add_tag)).send();}function _on_note_add_tag(r){var num=parseInt($('num_tags').value);$('num_tags').value=num+1;if(num+1>=$('num_tags_max').value){$('tag_search_box').style.display='none';$('label_note_tagger').innerHTML=ge('note_tagger_label_full').value;var _L2=ge('recommended_tags');var _L3=ge('label_recommend');if(_L2&&_L3){_L2.style.display='none';_L3.style.display='none';}}_note_reload_tags(r.getPayload());}function _note_reload_tags(_L0){var _L1=ge('note_tags');_L1.innerHTML=_L0;}function editnote_submit(_L0,_L1){if(!editnote_check_last_key_code())return false;editnote_set_which_button(_L0);ge(_L1).submit();}function editnote_publish(_L0,_L1,_L2,_L3,_L4,_L5){if(!editnote_check_last_key_code())return false;editnote_set_which_button(_L0);return new FeedForm().setAppId(_L1).setStoryType(_L2).setForm(_L3).setURI('\/ajax\/feedform.php').setContinuation(function(){goURI(_L4,true);}).setProfileType(_L5).show();}function editnote_set_which_button(_L0){var _L1=ge('which_button');if(_L1)_L1.value=_L0;}function editnote_check_last_key_code(){if(typeof _lastKeyCode!='undefined')if(_lastKeyCode==13){_lastKeyCode=-1;return false;}return true;}function editnote_pick_photo_response(_L0){var p=_L0.getPayload();var _L2=window.parent.document;if(p.new_photo)_L2.photo_reload_all();var _L3=_L2.getElementById('note_content');_L3.value+=\"<Photo \"+p.photo_index+\">\";}function editnote_pick_photo(pid,aid){new AsyncRequest().setURI('\/ajax\/note_pick_photo.php').setData({pid:pid,aid:aid,note_id:window._note_id}).setHandler(editnote_pick_photo_response).send();}function title_key_down(_L0){_L0=$E(_L0);if(_L0)_lastKeyCode=_L0.keyCode;}\n\nif (window.Bootloader) { Bootloader.done([\"js\\\/notes.js\"]); }")