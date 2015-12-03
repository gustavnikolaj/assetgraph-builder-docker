// { foo: 'bar' } => [ '--foo', 'bar' ]

module.exports = function convertOptionsToArgs (options) {
    return Object.keys(options).filter(function (option) {
        return option !== 'inputFile';
    }).reduce(function (args, option) {
        args.push('--' + option);
        args.push(options[option]);
        return args
    }, []);
};
