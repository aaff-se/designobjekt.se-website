<?php 
function svg_logo(){ echo svg_get_logo(); }

function svg_get_logo(){
	return '<svg data-ratio="1" version="1.1" x="0px" y="0px" viewBox="0 0 200 200"><path class="content" d="M100,195c-52.5,0-95-42.5-95-95S47.5,5,100,5"/><path class="content" d="M100,195c52.5,0,95-42.5,95-95S152.5,5,100,5H5v190H100z"/><path class="content hidden" d="M76,78.9c-5-1.6-10-8.9-10-20s4.7-18.4,10-20"/><path class="content hidden" d="M75.7,159c-5-1.6-10-8.9-10-20s4.7-18.4,10-20"/><path class="content hidden" d="M139,100c5,1.6,10,8.9,10,20s-4.7,18.4-10,20"/><path class="content hidden" d="M139,60c5,1.6,10,8.9,10,20s-4.7,18.4-10,20"/><ellipse class="content hidden" cx="111" cy="100" rx="7.5" ry="11.5"/><line class="content hidden" x1="118.5" y1="100" x2="139" y2="100"/><path class="content hidden" d="M143.7,136.9c0,0,24.8-9.1,24.8-36.9S144,63.7,144,63.7"/></svg>';
};