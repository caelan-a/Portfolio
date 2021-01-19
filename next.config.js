const withImages = require('next-images');
module.exports = withImages({
    images: {
        domains: ["upload.wikimedia.org"],
    },
    webpack: function (config) {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        })
        return config
    }
});
