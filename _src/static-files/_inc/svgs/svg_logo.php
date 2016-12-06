<?php 
function svg_logo(){ echo svg_get_logo(); }

function svg_get_logo(){
	return '<svg data-ratio="1" version="1.1" x="0px" y="0px" viewBox="0 0 200 200"><path class="content" d="M100,195c-52.5,0-95-42.5-95-95S47.5,5,100,5"/><path class="content" d="M100,195c52.5,0,95-42.5,95-95S152.5,5,100,5H5v190H100z"/></svg>';
};