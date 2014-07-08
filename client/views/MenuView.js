var MenuView = Backbone.View.extend({
  tagName: 'table',

  template: _.template(''),

  initialize: function() {
    this.render();
  },

  render: function() {
    $('div.menu').empty();
    this.collection.each(function(comboModel) {
      newComboViewEl = new ComboView({model: comboModel}).render();

      // append that to the page
      this.$el.append(newComboViewEl);
    }, this);
    return this.$el;
  }
});
