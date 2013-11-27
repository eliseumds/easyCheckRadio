(function($) {
    $.fn.easyCheckRadio = function(options) {     
        var defaultSettings = {};

        options = $.fn.extend({}, defaultSettings, options);

        $(this).each(function() {
            var checked = this.checked ? 'checked': '',
                disabled = this.disabled ? 'disabled' : '',
                name = this.name,
                theme = options.theme || '',
                type = this.type;

            var wrapper = '<div class="easycheckradio easycheckradio-$1 $2 $3 $4" data-name="$5" />';

            wrapper = wrapper.replace('$1', type)
                             .replace('$2', disabled)
                             .replace('$3', checked)
                             .replace('$4', theme)
                             .replace('$5', name);
            
            $(this).wrap(wrapper)
                   .after('<div>')
                   .addClass('easycheckradio-' + type + '-input');
        });
    };

    $('body')
        .on('change', '.easycheckradio-radio-input', function() {
            var $siblings = $(this.form).find('.easycheckradio-radio[data-name="' + this.name + '"]');
            
            $siblings.removeClass('checked');
            
            if (this.checked) {
                $(this).closest('.easycheckradio').addClass('checked');
            }
        })
        .on('change', '.easycheckradio-checkbox-input', function() {
            if (this.checked) {
                $(this).closest('.easycheckradio').addClass('checked');
            } else {
                $(this).closest('.easycheckradio').removeClass('checked');
            }
        });
})(typeof jQuery !== 'undefined' ? jQuery : Zepto);
