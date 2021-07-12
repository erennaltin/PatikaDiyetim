/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const {getDefaultConfig} = require('metro-config');
// const crypto = require('crypto');
// const fs = require('fs');

// let hash = crypto.createHash('sha256');
// hash.update(fs.readFileSync('.env'));
// const cacheVersion = hash.digest('hex');

module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
    // cacheVersion,
  };
})();
