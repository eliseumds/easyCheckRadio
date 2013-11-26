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

How to use
--------------

Include ```src/easyCheckRadio.css``` and ```src/easyCheckRadio.js```.

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

Support
--------------

Do you want to help? Take a look at our TODO list below.

TODO
--------------

* Test
* More themes
* Support :indeterminate on checkboxes

