Package.describe({
    summary: "Livestamp packaged for Meteor."
});

Package.on_use(function(api) {
    api.use(['jquery', 'blaze'], 'client');

    api.add_files(['moment.min.js', 'livestamp.min.js', 'helpers.js'], 'client');

});
