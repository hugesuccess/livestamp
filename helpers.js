if(Meteor.isClient) {
    Handlebars.registerHelper('livestamp', function(timestamp) {
      return new Handlebars.SafeString('<span class="livestamp" data-livestamp="'+ timestamp  +'"></span>');
    });
}
