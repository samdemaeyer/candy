Template.main.helpers({
    csvs: function() {
        return CSVS.find();
    }
});

Template.main.events({
    'click li.item': function(e) {
        $('li.item').removeClass('highlight');
        $(e.currentTarget).addClass('highlight');
    }
});
