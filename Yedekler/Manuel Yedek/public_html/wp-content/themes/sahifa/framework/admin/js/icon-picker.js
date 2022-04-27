/* Icon Picker */

(function($) {

	$.fn.iconPicker = function(options) {
		var options = ['fa', 'fa']; // default font set
		var icons;
		$list = $('');

		function font_set() {
			icons = [
				"blank",
				"adjust",
				"adn",
				"align-center",
				"align-justify",
				"align-left",
				"align-right",
				"ambulance",
				"anchor",
				"android",
				"angellist",
				"angle-double-down",
				"angle-double-left",
				"angle-double-right",
				"angle-double-up",
				"angle-down",
				"angle-left",
				"angle-right",
				"angle-up",
				"apple",
				"archive",
				"area-chart",
				"arrow-circle-down",
				"arrow-circle-left",
				"arrow-circle-o-down",
				"arrow-circle-o-left",
				"arrow-circle-o-right",
				"arrow-circle-o-up",
				"arrow-circle-right",
				"arrow-circle-up",
				"arrow-down",
				"arrow-left",
				"arrow-right",
				"arrow-up",
				"arrows",
				"arrows-alt",
				"arrows-h",
				"arrows-v",
				"asterisk",
				"at",
				"backward",
				"ban",
				"bar-chart",
				"barcode",
				"bars",
				"bed",
				"beer",
				"behance",
				"behance-square",
				"bell",
				"bell-o",
				"bell-slash",
				"bell-slash-o",
				"bicycle",
				"binoculars",
				"birthday-cake",
				"bitbucket",
				"bitbucket-square",
				"bold",
				"bolt",
				"bomb",
				"book",
				"bookmark",
				"bookmark-o",
				"briefcase",
				"btc",
				"bug",
				"building",
				"building-o",
				"bullhorn",
				"bullseye",
				"bus",
				"buysellads",
				"calculator",
				"calendar",
				"calendar-o",
				"camera",
				"camera-retro",
				"car",
				"caret-down",
				"caret-left",
				"caret-right",
				"caret-square-o-down",
				"caret-square-o-left",
				"caret-square-o-right",
				"caret-square-o-up",
				"caret-up",
				"cart-arrow-down",
				"cart-plus",
				"cc",
				"cc-amex",
				"cc-discover",
				"cc-mastercard",
				"cc-paypal",
				"cc-stripe",
				"cc-visa",
				"certificate",
				"chain-broken",
				"check",
				"check-circle",
				"check-circle-o",
				"check-square",
				"check-square-o",
				"chevron-circle-down",
				"chevron-circle-left",
				"chevron-circle-right",
				"chevron-circle-up",
				"chevron-down",
				"chevron-left",
				"chevron-right",
				"chevron-up",
				"child",
				"circle",
				"circle-o",
				"circle-o-notch",
				"circle-thin",
				"clipboard",
				"clock-o",
				"cloud",
				"cloud-download",
				"cloud-upload",
				"code",
				"code-fork",
				"codepen",
				"coffee",
				"cog",
				"cogs",
				"columns",
				"comment",
				"comment-o",
				"comments",
				"comments-o",
				"compass",
				"compress",
				"connectdevelop",
				"copyright",
				"credit-card",
				"crop",
				"crosshairs",
				"css3",
				"cube",
				"cubes",
				"cutlery",
				"dashcube",
				"database",
				"delicious",
				"desktop",
				"deviantart",
				"diamond",
				"digg",
				"dot-circle-o",
				"download",
				"dribbble",
				"dropbox",
				"drupal",
				"eject",
				"ellipsis-h",
				"ellipsis-v",
				"empire",
				"envelope",
				"envelope-o",
				"envelope-square",
				"eraser",
				"eur",
				"exchange",
				"exclamation",
				"exclamation-circle",
				"exclamation-triangle",
				"expand",
				"external-link",
				"external-link-square",
				"eye",
				"eye-slash",
				"eyedropper",
				"facebook",
				"facebook-official",
				"facebook-square",
				"fast-backward",
				"fast-forward",
				"fax",
				"female",
				"fighter-jet",
				"file",
				"file-archive-o",
				"file-audio-o",
				"file-code-o",
				"file-excel-o",
				"file-image-o",
				"file-o",
				"file-pdf-o",
				"file-powerpoint-o",
				"file-text",
				"file-text-o",
				"file-video-o",
				"file-word-o",
				"files-o",
				"film",
				"filter",
				"fire",
				"fire-extinguisher",
				"flag",
				"flag-checkered",
				"flag-o",
				"flask",
				"flickr",
				"floppy-o",
				"folder",
				"folder-o",
				"folder-open",
				"folder-open-o",
				"font",
				"forumbee",
				"forward",
				"foursquare",
				"frown-o",
				"futbol-o",
				"gamepad",
				"gavel",
				"gbp",
				"gift",
				"git",
				"git-square",
				"github",
				"github-alt",
				"github-square",
				"glass",
				"globe",
				"google",
				"google-plus",
				"google-plus-square",
				"google-wallet",
				"graduation-cap",
				"gratipay",
				"h-square",
				"hacker-news",
				"hand-o-down",
				"hand-o-left",
				"hand-o-right",
				"hand-o-up",
				"hdd-o",
				"header",
				"headphones",
				"heart",
				"heart-o",
				"heartbeat",
				"history",
				"home",
				"hospital-o",
				"html5",
				"ils",
				"inbox",
				"indent",
				"info",
				"info-circle",
				"inr",
				"instagram",
				"ioxhost",
				"italic",
				"joomla",
				"jpy",
				"jsfiddle",
				"key",
				"keyboard-o",
				"krw",
				"language",
				"laptop",
				"lastfm",
				"lastfm-square",
				"leaf",
				"leanpub",
				"lemon-o",
				"level-down",
				"level-up",
				"life-ring",
				"lightbulb-o",
				"line-chart",
				"link",
				"linkedin",
				"linkedin-square",
				"linux",
				"list",
				"list-alt",
				"list-ol",
				"list-ul",
				"location-arrow",
				"lock",
				"long-arrow-down",
				"long-arrow-left",
				"long-arrow-right",
				"long-arrow-up",
				"magic",
				"magnet",
				"male",
				"map-marker",
				"mars",
				"mars-double",
				"mars-stroke",
				"mars-stroke-h",
				"mars-stroke-v",
				"maxcdn",
				"meanpath",
				"medium",
				"medkit",
				"meh-o",
				"mercury",
				"microphone",
				"microphone-slash",
				"minus",
				"minus-circle",
				"minus-square",
				"minus-square-o",
				"mobile",
				"money",
				"moon-o",
				"motorcycle",
				"music",
				"neuter",
				"newspaper-o",
				"openid",
				"outdent",
				"pagelines",
				"paint-brush",
				"paper-plane",
				"paper-plane-o",
				"paperclip",
				"paragraph",
				"pause",
				"paw",
				"paypal",
				"pencil",
				"pencil-square",
				"pencil-square-o",
				"phone",
				"phone-square",
				"picture-o",
				"pie-chart",
				"pied-piper",
				"pied-piper-alt",
				"pinterest",
				"pinterest-p",
				"pinterest-square",
				"plane",
				"play",
				"play-circle",
				"play-circle-o",
				"plug",
				"plus",
				"plus-circle",
				"plus-square",
				"plus-square-o",
				"power-off",
				"print",
				"puzzle-piece",
				"qq",
				"qrcode",
				"question",
				"question-circle",
				"quote-left",
				"quote-right",
				"random",
				"rebel",
				"recycle",
				"reddit",
				"reddit-square",
				"refresh",
				"renren",
				"repeat",
				"reply",
				"reply-all",
				"retweet",
				"road",
				"rocket",
				"rss",
				"rss-square",
				"rub",
				"scissors",
				"search",
				"search-minus",
				"search-plus",
				"sellsy",
				"server",
				"share",
				"share-alt",
				"share-alt-square",
				"share-square",
				"share-square-o",
				"shield",
				"ship",
				"shirtsinbulk",
				"shopping-cart",
				"sign-in",
				"sign-out",
				"signal",
				"simplybuilt",
				"sitemap",
				"skyatlas",
				"skype",
				"slack",
				"sliders",
				"slideshare",
				"smile-o",
				"sort",
				"sort-alpha-asc",
				"sort-alpha-desc",
				"sort-amount-asc",
				"sort-amount-desc",
				"sort-asc",
				"sort-desc",
				"sort-numeric-asc",
				"sort-numeric-desc",
				"soundcloud",
				"space-shuttle",
				"spinner",
				"spoon",
				"spotify",
				"square",
				"square-o",
				"stack-exchange",
				"stack-overflow",
				"star",
				"star-half",
				"star-half-o",
				"star-o",
				"steam",
				"steam-square",
				"step-backward",
				"step-forward",
				"stethoscope",
				"stop",
				"street-view",
				"strikethrough",
				"stumbleupon",
				"stumbleupon-circle",
				"subscript",
				"subway",
				"suitcase",
				"sun-o",
				"superscript",
				"table",
				"tablet",
				"tachometer",
				"tag",
				"tags",
				"tasks",
				"taxi",
				"tencent-weibo",
				"terminal",
				"text-height",
				"text-width",
				"th",
				"th-large",
				"th-list",
				"thumb-tack",
				"thumbs-down",
				"thumbs-o-down",
				"thumbs-o-up",
				"thumbs-up",
				"ticket",
				"times",
				"times-circle",
				"times-circle-o",
				"tint",
				"toggle-off",
				"toggle-on",
				"train",
				"transgender",
				"transgender-alt",
				"trash",
				"trash-o",
				"tree",
				"trello",
				"trophy",
				"truck",
				"try",
				"tty",
				"tumblr",
				"tumblr-square",
				"twitch",
				"twitter",
				"twitter-square",
				"umbrella",
				"underline",
				"undo",
				"university",
				"unlock",
				"unlock-alt",
				"upload",
				"usd",
				"user",
				"user-md",
				"user-plus",
				"user-secret",
				"user-times",
				"users",
				"venus",
				"venus-double",
				"venus-mars",
				"viacoin",
				"video-camera",
				"vimeo-square",
				"vine",
				"vk",
				"volume-down",
				"volume-off",
				"volume-up",
				"weibo",
				"weixin",
				"whatsapp",
				"wheelchair",
				"wifi",
				"windows",
				"wordpress",
				"wrench",
				"xing",
				"xing-square",
				"yahoo",
				"yelp",
				"youtube",
				"youtube-play",
				"youtube-square",
				"500px",
				"amazon",
				"balance-scale",
				"battery-empty",
				"battery-full",
				"battery-half",
				"battery-quarter",
				"battery-three-quarters",
				"black-tie",
				"calendar-check-o",
				"calendar-minus-o",
				"calendar-plus-o",
				"calendar-times-o",
				"cc-diners-club",
				"cc-jcb",
				"chrome",
				"clone",
				"commenting",
				"commenting-o",
				"contao",
				"creative-commons",
				"expeditedssl",
				"firefox",
				"fonticons",
				"genderless",
				"get-pocket",
				"gg",
				"gg-circle",
				"hand-lizard-o",
				"hand-paper-o",
				"hand-peace-o",
				"hand-pointer-o",
				"hand-rock-o",
				"hand-scissors-o",
				"hand-spock-o",
				"hourglass",
				"hourglass-end",
				"hourglass-half",
				"hourglass-o",
				"hourglass-start",
				"houzz",
				"i-cursor",
				"industry",
				"internet-explorer",
				"map",
				"map-o",
				"map-pin",
				"map-signs",
				"mouse-pointer",
				"object-group",
				"object-ungroup",
				"odnoklassniki",
				"odnoklassniki-square",
				"opencart",
				"opera",
				"optin-monster",
				"registered",
				"safari",
				"sticky-note",
				"sticky-note-o",
				"television",
				"trademark",
				"tripadvisor",
				"vimeo",
				"wikipedia-w",
				"y-combinator",
				"reddit-alien",
				"edge",
				"credit-card-alt",
				"codiepie",
				"modx",
				"fort-awesome",
				"usb",
				"product-hunt",
				"scribd",
				"pause-circle",
				"pause-circle-o",
				"stop-circle",
				"stop-circle-o",
				"shopping-bag",
				"shopping-basket",
				"hashtag",
				"bluetooth",
				"bluetooth-b",
				"percent",
				"gitlab",
				"envira",
				"universal-access",
				"wheelchair-alt",
				"question-circle-o",
				"blind",
				"audio-description",
				"volume-control-phone",
				"braille",
				"assistive-listening-systems",
				"asl-interpreting",
				"american-sign-language-interpreting",
				"deafness",
				"hard-of-hearing",
				"deaf",
				"glide",
				"glide-g",
				"signing",
				"sign-language",
				"low-vision",
				"viadeo",
				"viadeo-square",
				"snapchat",
				"snapchat-ghost",
				"snapchat-square",
				"pied-piper",
				"first-order"
			];
			options[1] = "fa";

		};
		font_set();

		function build_list($popup, $button, clear) {
			$list = $popup.find('.icon-picker-list');
			if (clear == 1) {
				$list.empty(); // clear list //
			}
			for (var i in icons) {
				$list.append('<li data-icon="' + icons[i] + '"><a href="#" title="' + icons[i] + '"><span class="' + options[0] + ' ' + options[1] + '-' + icons[i] + '"></span></a></li>');
			};
			$('a', $list).click(function(e) {
				e.preventDefault();
				var title = $(this).attr("title");
				if (title == 'blank') {
					$target.val('');
				} else {
					$target.val(options[1] + "-" + title);
				}
				$button.removeClass().addClass("button icon-picker " + options[0] + " " + options[1] + "-" + title);
				removePopup();
			});
		};

		function removePopup() {
			$(".icon-picker-container").remove();
		}

		/*
		$button = $('.icon-picker');
		$button.each(function() {
			$(this).on('click.iconPicker', function() {
				createPopup($(this));
			});
		});
		*/

		$(document).on("click", ".icon-picker", function() {
			createPopup($(this));
		});

		function createPopup($button) {
			$target = $($button.data('target'));
			$popup = $('<div class="icon-picker-container"> \
						<div class="icon-picker-control"></div> \
						<ul class="icon-picker-list"></ul> \
					</div>')
				.css({
					'top': $button.offset().top,
					'left': $button.offset().left
				});
			build_list($popup, $button, 0);
			var $control = $popup.find('.icon-picker-control');
			$control.html('<a data-direction="back" href="#"><span class="dashicons dashicons-arrow-left-alt2"></span></a> ' +
				'<input type="text" class="" placeholder="' + tieLang.search + '" />' +
				'<a data-direction="forward" href="#"><span class="dashicons dashicons-arrow-right-alt2"></span></a>' +
				'');

			$('a', $control).click(function(e) {
				e.preventDefault();
				if ($(this).data('direction') === 'back') {
					//move last 25 elements to front
					$('li:gt(' + (icons.length - 43) + ')', $list).each(function() {
						$(this).prependTo($list);
					});
				} else {
					//move first 25 elements to the end
					$('li:lt(42)', $list).each(function() {
						$(this).appendTo($list);
					});
				}
			});

			$popup.appendTo('body').show();

			$('input', $control).on('keyup', function(e) {
				var search = $(this).val();
				if (search === '') {
					//show all again
					$('li:lt(25)', $list).show();
				} else {
					$('li', $list).each(function() {
						if ($(this).data('icon').toString().toLowerCase().indexOf(search.toLowerCase()) !== -1) {
							$(this).show();
						} else {
							$(this).hide();
						}
					});
				}
			});

			$(document).mouseup(function(e) {
				if (!$popup.is(e.target) && $popup.has(e.target).length === 0) {
					removePopup();
				}
			});
		}
	}

	$(function() {
		$('.icon-picker').iconPicker();
	});

}(jQuery));
