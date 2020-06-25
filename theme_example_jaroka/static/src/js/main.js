odoo.define('theme_example_jaroka.simple_widget', function(require) {
    'use strict';

    var publicWidget = require('web.public.widget');

    publicWidget.registry.simpleWidget = publicWidget.Widget.extend({


        selector: '#wrapwrap',

        events: {
            'click': '_onClick',
        },

        start: function() {
            console.log('start when the selector has been found in the DOM');
            return this._super.apply(this, arguments);
        },

        _onClick: function(e) {
            console.log("Click on #wrapwrap DOM element");
        }

    });
});

$(document).ready(
    function() {
        // can use normal jquery logic also.
        console.log('start');
    }
);
