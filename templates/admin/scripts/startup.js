/**
 * @tableofcontents
 *
 * 1. admin dock
 * 2. admin panel
 */

/* @section 1. admin dock */

r.plugins.adminDock =
{
	startup: true,
	selector: 'div.js_dock_admin',
	options:
	{
		element:
		{
			dockLink: 'a.js_link_dock_admin',
			dockDescription: 'span.js_description_dock_admin',
			dockDescriptionHTML: '<span class="js_description_dock_admin description_dock_admin"></span>'
		}
	}
};

/* @section 2. admin panel */

r.plugins.adminPanel =
{
	startup: true,
	selector: '#panel_admin',
	options:
	{
	}
};