livestamp for Meteor.js
=======================

[Livestamp.js](http://mattbradley.github.io/livestampjs/), a simple, unobtrusive jQuery plugin that provides auto-updating timeago text to your timestamped HTML elements using Moment.js, packaged for Meteor.

Installation
-------------

`mrt add livestamp-hs`

Usage
-------------
Just like the [Livestamp docs](http://mattbradley.github.io/livestampjs/) tell you:

`<span data-livestamp="2013-12-24T08:14:42.345Z"></span>`

Or you can use the handlebars helper, where timestamp is a timestamp from your database or template helper:

'{{livestamp timestamp}}'


Notes
-------------

Use the .livestamp CSS selector to style your markup.
