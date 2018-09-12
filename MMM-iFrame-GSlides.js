/* global Module */

/* Magic Mirror
 * Module: MMM-iFrame-GSlides
 *
 * By Jason Hartgraves https://jharttech.com
 */

Module.register("MMM-iFrame-GSlides",{
		// Default module config.
		defaults: {
				height:"full",
				width:"full",
                                url: "http://magicmirror.builders/",
				RefreshInterval: 5 * 60 * 1000,
                                scrolling: "no"
		},

        start: function () {
		var self = this;
		updateDom = self.updateDom(1000)
	},

	resume: function() {
   		console.log("Resuming");
   		return this.getDom();
	},
	timedRefresh: function(timeoutPeriod){
		setTimeout("location.reload(true);",timeoutPeriod);
	},

	getDom: function() {
		var iframe = document.createElement("IFRAME");
		reload = this.config.RefreshInterval
		refeshPage = this.timedRefresh(RefreshInterval);
		iframe.style = "border:0"
		var repeat = true;
		while(repeat) {
			DynHeight = this.config.height;
			DynWidth = this.config.width;
		if (DynHeight == "full"){
			checkHeight = screen.height;
		}else{
			checkHeight = this.config.height;
		}
		if (DynWidth == "full"){
			checkWidth = screen.width;
		}else{
			checkWidth = this.config.width;
		}
			repeat = false;
		}
		iframe.width = checkWidth;
		iframe.height = checkHeight;
		iframe.allowfullscreen = "true";
		iframe.mozallowfullscreen = "true";
		iframe.webkitallowfullscreen = "true";
                iframe.scrolling = this.config.scrolling;
		iframe.src = this.config.url;
		return iframe;
	},



});
