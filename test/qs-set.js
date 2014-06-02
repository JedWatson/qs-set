var demand = require('must'),
	QS = require('../index');

/** FieldType: Date */

describe('QS', function() {
	describe('Constructor', function() {
		it('should parse the querystring', function() {
			var qs = new QS('?a=1');
			qs.q.a.must.be('1');
		});
		it('should not need a leading ?', function() {
			var qs = new QS('a=1');
			qs.q.a.must.be('1');
		});
		it('should ignore everything before the first ?', function() {
			var qs = new QS('x?a=1');
			qs.q.a.must.be('1');
		});
		it('should default to an empty object', function() {
			var qs = new QS();
			Object.keys(qs.q).length.must.be(0);
		});
	});
	describe('.create()', function() {
		it('should return a new QS instance', function() {
			QS.create().must.be.an.instanceof(QS);
		});
	});
	describe('.create({ a: 1 })', function() {
		it('should use the provided object', function() {
			QS.create({a: 1}).q.a.must.be(1);
		});
	});
	describe('.clone()', function() {
		it('should return a copy', function() {
			var qs1 = new QS('?a=1');
			var qs2 = qs1.clone();
			qs1.must.not.equal(qs2);
			qs1.q.a.must.equal(qs2.q.a);
		});
	});
	describe('.replace()', function() {
		it('should change the stored value', function() {
			var qs1 = new QS('?a=1');
			qs1.replace('a', '2');
			qs1.q.a.must.be('2');
		});
	});
	describe('.set()', function() {
		it('should return a new instance and change the stored value', function() {
			var qs1 = new QS('?a=1');
			qs2 = qs1.set('a', '2');
			qs1.q.a.must.be('1');
			qs2.q.a.must.be('2');
		});
	});
	describe('.toString()', function() {
		it('should reconstruct the querystring', function() {
			var str = '?a=1';
			new QS(str).toString().must.be(str);
		});
		it('should omit ? when empty', function() {
			new QS('').toString().must.be('');
		});
	});
});
