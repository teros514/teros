(function(window,$,undefined){'use strict';$('nav').before('<button class="menu-toggle" role="button" aria-pressed="false"></button>');$('nav .sub-menu').before('<button class="sub-menu-toggle" role="button" aria-pressed="false"></button>');$('.menu-toggle, .sub-menu-toggle').on('click',function(){var $this=$(this);$this.attr('aria-pressed',function(index,value){return'false'===value?'true':'false';});$this.toggleClass('activated');$this.next('nav, .sub-menu').slideToggle('fast');});function fixMenuLinksIssue(){$(document).off('click','.mobmenu-parent-link .menu-item-has-children');$(document).off('click','.mobmenu-parent-link .menu-item-has-children > a');$(document).on('click','.mobmenu-parent-link .menu-item-has-children > a',function(e){e.preventDefault();$(this).find('.mob-expand-submenu').first().trigger('click');e.stopPropagation();});}
$(document).ready(function($){fixMenuLinksIssue();});$(window).load(function($){fixMenuLinksIssue();});fixMenuLinksIssue();})(this,jQuery);