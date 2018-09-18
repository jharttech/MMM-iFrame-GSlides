# Module: MMM-iFrame-GSlides
The `MMM-iFrame-GSlides` module is for MagicMirror. It is a simple way to add an iFrame of published Google Slides Presentation content to your [MagicMirror](https://github.com/MichMich/MagicMirror). It is specifically written to work with a google slide presentaton. However, you may be able to use this for other applications such as displaying a fullscreen webpage in an Iframe.  This module will also allow for refreshing of the page at the user set intervals.


### Using the Module for Google Slide Presentation
Create your google slide then publish it to the web by selecting File > Publish to the web.  Select the Embed option along with your desired slide options.  Select "Start slideshow as soon as the player loads" option and the "Restart the slideshow after the last slide" option.  When you click on the "Publish" button you will be shown a long Iframe URL.  You need to select starting with "ht<span>tps://docs.google.com/presentation/stringofletterstoyourpresentation/embed?start=true&loop=true&delayms=3000" and copy this into your MagicMirror config file as the MMM-iFrame-GSlides modules url option, as shown in the example config.  DO NOT copy the "iframe src=" section or anything after the "delay=3000" section. These are all things that the MMM-iFrame-GSlides will take care of.

### NOTES
If you use the default width and height settings of "full", this WILL cover any other modules on the screen UNLESS you set the MMM-iFrame-GSlides module position to fullscreen_below.  If you want only your Google Slide Presentation to be shown and fullscreen, use "fullscreen" as the modules postion.

If you want to remove the slide navigation tool bar from the bottom of your Google Slide Presentation, add "&rm=minimal" to the end of your url before the closing quote.

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: "MMM-iFrame-GSlides",
		position: "bottom_bar",	// This can be any of the regions.
		config: {
			// See 'Configuration options' for more information.
				url: "https://magicmirror.builders/",  // enter the embed url to your Google Slides.
				RefreshInterval: 5 * 60 * 1000, // Refreshes Page every 5 minutes.
				width: "200px", // Optional. Default: "full". The "full" value will look at screen size and match for full screen."
				height: "100px" //Optional. Default: "full"  The "full" value will look at screen size and match for full screen."
			}
		}
	}
]
````

## Configuration

The following properties can be configured:


<table width="100%">
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
		<tr>
			<td><code>url</code></td>
			<td>the URL in the iFrame<br>
				<br><b>Example:</b><code>"http://example.com/"</code>
				<br><b>Default value:</b> <code>"http://magicmirror.builders/"</code>
			</td>
		</tr>
		<tr>
			<td><code>RefreshInterval</code></td>
			<td>the Refresh Interval for the page shown in the Iframe.<br>
				<br><b>Example for 2 minutes:</b><code>2 * 60 * 1000</code>
				<br><b>Default value:</b> <code>"5 * 60 * 1000"</code>
			</td>
		</tr>		
		<tr>
			<td><code>width</code></td>
			<td>the width of the iFrame<br>
				<br><b>Example:</b><code>"200px"</code> Using the "full" value here will look at screen size and match for full screen."
				<br><b>Default value:</b> <code>"full" </code>
			</td>
		</tr>
		<tr>
			<td><code>height</code></td>
			<td>the height of the iFrame<br>
				<br><b>Example:</b><code>"300px"</code> Using the "full" value here will look at screen size and match for full screen."
				<br><b>Default value:</b> <code>"full"</code>
			</td>
		</tr>
</table>
