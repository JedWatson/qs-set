/**
 * qs-set
 * ======
 * 
 * Copyright (c) 2014 Jed Watson.
 * May be freely distributed under the MIT license.
 */

var isObject = function(arg) {
	return ('[object Object]' === Object.prototype.toString.call(arg));
}

var extend = function(obj, src) {
	for (var prop in src) {
		if (src.hasOwnProperty(prop)) {
			obj[prop] = src[prop];
		}
	}
	return obj;
}

var querystring = require('querystring');

var QS = function(str) {
	if ('string' === typeof str) {
		this.q = querystring.parse(str.replace(/^.*\?/, ''));
	} else if (isObject(str)) {
		this.q = extend({}, str);
	} else {
		this.q = {};
	}
}

exports = module.exports = QS;

QS.create = function(str) {
	return new this(str);
}

QS.prototype.clone = function() {
	return new QS(this.q);
}

var setValue = function(o, key, val) {
	if (val === undefined || val === null) {
		delete o[key];
	} else {
		o[key] = val;
	}
	return o;
}

var setValues = function(o, obj) {
	for (var prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			setValue(o, prop, obj[prop]);
		}
	}
	return o;
}

QS.prototype.set = function() {
	return this.replace.apply(this.clone(), arguments);
}

QS.prototype.replace = function(key, val) {
	if (arguments.length === 2) {
		// .set('key', 'value') syntax
		setValue(this.q, key, val);
	} else {
		// .set({ key: 'value' }) syntax
		setValues(this.q, key);
	}
	return this;
}

QS.prototype.toString = function() {
	var qs = querystring.stringify(this.q);
	return qs ? '?' + qs : '';
}

QS.prototype.go = function() {
	if (typeof window === 'undefined') {
		throw new Error('QS.go() is only available in the browser environment.');
	}
	window.document.location.search = this.toString();
	return this;
}
