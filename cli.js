#!/usr/bin/env node
var spawn = require('child_process').spawn;

var command = 'docker';

var commandArgs = [
    'run', '--rm',
    '-v', process.cwd() + ':/app/',
    '-w', '/app',
    '-u', process.getuid() + ':' + process.getgid(),
    'assetgraph/assetgraph-builder',
];

var args = [
    'http-pub/index.html',
    '--outroot', 'http-pub-production'
];

var ag = spawn(command, commandArgs.concat(args));

ag.stdout.pipe(process.stdout);
ag.stderr.pipe(process.stderr);

ag.on('close', function (code) {
  process.exit(code);
});
