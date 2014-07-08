var ComboView = Backbone.View.extend({
  tagName: 'div',

  initialize: function() {
    this.on('change', function() {
      this.render();
    }, this);
  },

  prerender: function() {
    return this.$el.html('<tr><th> ' + this.model.attributes.name + '</th></tr>' + 
                         '<tr><td><canvas id="' + this.model.attributes.name + '" width="100" height="100"></canvas></td></tr>'
                         );
  },

  render: function() {
    $('body').append(this.prerender());
    var data = [
          {
              value: this.model.attributes.protein,
              color:"#F7464A",
              highlight: "#FF5A5E",
              label: "Protein"
          },
          {
              value: this.model.attributes.fat,
              color: "#46BFBD",
              highlight: "#5AD3D1",
              label: "Fat"
          },
          {
              value: this.model.attributes.carbs,
              color: "#FDB45C",
              highlight: "#FFC870",
              label: "Carbs"
          }
      ];

    var ctx = document.getElementById(this.model.attributes.name).getContext("2d");
    var newChart = new Chart(ctx).Pie(data);
    return newChart;
  },

});
