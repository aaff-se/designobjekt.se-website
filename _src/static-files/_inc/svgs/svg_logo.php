<?php 
function svg_logo(){ echo svg_get_logo(); }

function svg_get_logo(){
	return '<svg data-ratio="1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 200 200" xml:space="preserve"><polyline class="content" points="100,3.5 3.5,3.5 3.5,196.5 100,196.5 "/><circle class="content spin" cx="100" cy="100" r="96.5"/></svg>';
};