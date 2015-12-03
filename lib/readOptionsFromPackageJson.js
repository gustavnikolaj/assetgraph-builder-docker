var fs = require('fs');
var path = require('path');

module.exports = function readOptionsFromPackageJson (projectRoot) {
  var packageJsonPath = path.resolve(projectRoot, 'package.json');
  var packageJson = fs.readFileSync(packageJsonPath);

  try {
      packageJson = JSON.parse(packageJson);
  } catch (e) {
      packageJson = {};
  }

  if (packageJson['assetgraph-builder']) {
    return packageJson['assetgraph-builder'];
  }

  return {};
};
