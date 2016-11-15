const test = require('ava');

const suffix = require('./index');

test('should parse absolute path', t => {
    t.is(suffix('/path/to/file.js'), 'js');
});

test('should parse local path', t => {
    t.is(suffix('./path/to/file.js'), 'js');
});

test('should parse basename', t => {
    t.is(suffix('file.js'), 'js');
});

test('should parse path with complex extention', t => {
    t.is(suffix('build.tar.gz'), 'tar.gz');
});

test('should parse path with empty extention', t => {
    t.is(suffix('file.'), '');
});

test('should parse path without extention', t => {
    t.is(suffix('file'), '');
});

test('should parse path starts with dot', t => {
    t.is(suffix('.file.js'), 'js');
});

test('should parse dotpath', t => {
    t.is(suffix('.file'), '');
});

test('should parse dot', t => {
    t.is(suffix('.'), '');
});

test('should parse empty string', t => {
    t.is(suffix(''), '');
});
