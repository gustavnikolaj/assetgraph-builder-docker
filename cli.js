#!/usr/bin/env node
var spawn = require('child_process').spawn;
var readOptionsFromPackageJson = require('./lib/readOptionsFromPackageJson');
var convertOptionsToArgs = require('./lib/convertOptionsToArgs');
var checkDuplicatedOptions = require('./lib/checkDuplicatedOptions')

var command = 'docker';

var commandArgs = [
    'run', '--rm',
    '-v', process.cwd() + ':/app/',
    '-w', '/app',
    '-e', 'NODE_PATH=/app/node_modules',
    '-u', process.getuid() + ':' + process.getgid(),
    'assetgraph/assetgraph-builder',
];

var options = readOptionsFromPackageJson(process.cwd());
var optionArgs = convertOptionsToArgs(options);

var commandLineArgs = process.argv.slice(2);

checkDuplicatedOptions({
    optionArgs: optionArgs,
    commandLineArgs: commandLineArgs
}).forEach(function (option) {
    option = option.substr(2);
    console.error('Warn: Option "' + option + '" from package.json is ignored, as it is specified on the commandline.');
});

var args = optionArgs.concat(commandLineArgs);

if (options.inputFile) {
    args.push(options.inputFile);
}

var ag = spawn(command, commandArgs.concat(args));

ag.stdout.pipe(process.stdout);
ag.stderr.pipe(process.stderr);

ag.on('close', function (code) {
  process.exit(code);
});
