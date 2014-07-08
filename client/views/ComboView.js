var ComboView = Backbone.View.extend({
  tagName: 'div',

  template: _.template( '<tr><td>' +
                        '<canvas id="comboStats" width="400" height="400"></canvas>' + 
                        '</td></td></tr>'
                      ),

  initialize: function() {
    this.on('change', function() {
      this.render();
    }, this);
  },

  prerender: function() {
    return this.$el.html('<canvas id="comboStats" width="100" height="100"></canvas>');
  },

  render: function() {
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

    var ctx = document.getElementById("comboStats").getContext("2d");
    var newChart = new Chart(ctx).Pie(data);
    return newChart;
  },

});
