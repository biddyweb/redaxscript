/* extend redaxscript object */

r.plugin.logoEffect =
	{
		startup: true,
		selector: 'h1.js_logo_effect_trigger',
		options:
		{
			related: 'div.js_logo_website_effect',
			duration: 500
		}
	};