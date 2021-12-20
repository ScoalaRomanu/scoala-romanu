module.exports = (config) => {
    config.addPassthroughCopy('./src/images');
    config.addPassthroughCopy('./src/assets');

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};
