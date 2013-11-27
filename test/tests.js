/*global deepEqual,equal,jQuery,module,ok,strictEqual,test*/

(function($) {
    'use strict';

    module('easyCheckRadio');

    var $all = $('#fixtures').find('input:radio,input:checkbox'),
        $checkboxes = $('#fixtures').find('input:checkbox'),
        $radios = $('#fixtures').find('input:radio');

    $all.easyCheckRadio({
        theme: 'myTheme'
    });

    test('wraps input with a div and keep its state', function() {
        $all.each(function() {
            var $parent = $(this).parent('div.easycheckradio'),
                isChecked = this.checked,
                isDisabled = this.disabled;

            equal($(this).prop('checked'), isChecked);
            equal($parent.hasClass('checked'), isChecked);

            equal($(this).prop('disabled'), isDisabled);

            equal($parent.length, 1);
            equal($parent.data('name'), this.name);
        });
    });

    test('inserts a div after input', function() {
        equal($checkboxes.first().next().prop('tagName'), 'DIV');
    });

    test('click on radio should check it and deselect others', function() {
        var $item = $radios.first(),
            $form = $item.closest('form'),
            $wrapper = $item.closest('div.easycheckradio'),
            name = $item.attr('name');

        equal($item.prop('checked'), false);
        equal($wrapper.hasClass('checked'), false);

        $item.trigger('click');
        equal($item.prop('checked'), true);
        equal($wrapper.hasClass('checked'), true);

        $form.find('[data-name="' + name + '"]').slice(1).each(function() {
            equal($(this).hasClass('checked'), false);
        });

        $item.trigger('click');
        equal($item.prop('checked'), true);
        equal($wrapper.hasClass('checked'), true);
    });

    test('click on checkbox should check it and keep others\' states', function() {
        var $item = $checkboxes.first(),
            $form = $item.closest('form'),
            $wrapper = $item.closest('div.easycheckradio'),
            name = $item.attr('name');

        var defaultStates = [];

        $form.find('[name="' + name + '"]').each(function() {
            defaultStates.push(this.checked);
        });

        equal($item.prop('checked'), false);
        equal($wrapper.hasClass('checked'), false);

        $item.trigger('click');
        equal($item.prop('checked'), true);
        equal($wrapper.hasClass('checked'), true);

        $form.find('[name="' + name + '"]').slice(1).each(function(index) {
            // we add 1 here because we check all but the first that we just checked
            equal($(this).prop('checked'), defaultStates[index + 1]);
            equal($(this).closest('div.easycheckradio').hasClass('checked'), defaultStates[index + 1]);
        });
    });

    test('theme class should be added to wrapper\'s class', function() {
        equal($checkboxes.first().closest('div.easycheckradio').hasClass('myTheme'), true);
    });

    test('lets send a form!', function() {
        var radioName = $radios.first().attr('name'),
            radioValue = $radios.first().val();

        $radios.first().prop('checked', true).trigger('change');

        var checkboxName = $checkboxes.first().attr('name'),
            checkboxValue = $checkboxes.first().val();

        $checkboxes.prop('checked', false).trigger('change');
        $checkboxes.eq(0).prop('checked', true).trigger('change');
        $checkboxes.eq(1).prop('checked', true).trigger('change');

        var data = $('#fixtures form').serializeArray();
        
        deepEqual(data, [
            { name: 'country', value: 'b' },
            { name: 'sport', value: 'c' },
            { name: 'sport', value: 'f' }
        ]);
    });

}(jQuery));