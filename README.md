qs-set
======

Querystring manipulator for node.js and the browser.

## Installation

To use server-side in a node.js app:

```
npm install --save qs-set
```

To use in the browser, include `qs-set.js` in your webpage.

Bower support coming soon.

## Usage

`QS` is what you want when you need to manipulate some part of the query string in a URL, without worrying what else is in there.

It's great for handling optional parameters, search filters, and more.

To use it, create a new `QS` object by passing the URL you want to use as the base. In node.js:

```
var QS = require('qs-set');
var qs = new QS(req.path);
```

In the browser, you may want to add it as a jQuery plugin:

```
$.qs = new QS(window.location.href);
```

## Methods

### `QS.create(querystring)`

Returns a new `QS` instance. Identical to `new QS(querystring)`.

### `qs.clone()`

Returns a copy of the `QS` instance.

### `qs.set(key, val)`

Will return a clone of the `qs` object with the new value set.

You can also provide an object of keys and values to set:

```
qs.set({ key: 'value', also: 'value' });
```

### `qs.replace(key, val)`

Will replace the value in the current `qs` object. Note that this will cause any subsequent calls on this object to include the replaced value, rather than the original value from the parsed querystring.

Like `set`, this also accepts an object.

### `qs.toString()`

Concatenates the currently set parameters into a valid query string.

### `qs.go()`

Only available in the browser, this method is a shortcut to change `window.location.href` to the currently set query parameters.

Example:

```
$.qs.set('param', 'value').go();
```



License
=======

The MIT License (MIT)

Copyright (c) 2014 Jed Watson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
