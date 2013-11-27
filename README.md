easyCheckRadio
==============

jQuery custom checkbox and radio

<img src="http://i.imgur.com/LeDdiaZ.png" alt="Screenshot">

* Uses native "change" event, so there will be no change to your current code
* Supports keyboard navigation
* Automatically detects disabled state
* Easily customizable
* jQuery and Zepto support
* Uses delegated instead of direct events. Another reason not to change your current code
* IE8+ support

How to use
--------------

Include ```src/css/easyCheckRadio.css``` and ```src/js/easyCheckRadio.js```.

Then call it:

```js
$('input[type=radio], input[type=checkbox]').easyCheckRadio({
    theme: 'myOptionalTheme'
});
```

What is the magic?
------------------

The plugin wraps your original input in a DIV element, then set it's opacity to 0, so the input will still be available to click.
The DIV display is set to *inline-block*, so it looks just like a native input, meaning you can use it in a block label 
or even inside a text!

Sample:

```html
<!-- before -->
<label>
    <input type="radio" name="color" value="blue" checked>
    Blue
</label>

<!-- after -->
<label>
    <div class="easycheckradio easycheckradio-radio checked" data-name="color">
        <input type="radio" name="color" value="blue" checked>
        <div></div> <!-- this is the styled element. It stays below the INPUT so the click fires it's native event -->
    </div>
    Blue <!-- clicking here will also work, since we listen to the "change" event -->
</label>
```

Detail: we control checked state toggling the *checked* class in the wrapper
because IE8 doesn't support the *:checked* pseudo selector. We use this approach
only for the disabled state which IE8 can target via ```input[disabled]```.

Support
--------------

Do you want to help? Take a look at our TODO list below.

TODO
--------------

* Improve unit tests
* Test in mobile browsers
* More themes
* Support :indeterminate on checkboxes

