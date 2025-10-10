module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: 'local',
            breakpoints: {
                large: 1200,
                medium: 750,
                small: 500,
                thumbnail: 245
            },
        },
    },
});
