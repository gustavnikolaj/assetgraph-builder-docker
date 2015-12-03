module.exports = function checkDuplicatedOptions (args) {
    var optionArgs = args.optionArgs;
    var commandLineArgs = args.commandLineArgs;

    return optionArgs.filter(function (value) {
        return typeof value === 'string' && value.substr(0, 2) === '--';
    }).filter(function (value) {
        return commandLineArgs.indexOf(value) !== -1;
    })
};
