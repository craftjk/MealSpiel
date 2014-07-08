var ComboView = Backbone.View.extend({
  tagName: 'table',

  template: _.template( '<tr><td>' +
                        '<canvas id="comboStats" width="100" height="100"></canvas>' + 
                        '</td></td></tr>'
                      ),

  // template: _.template('<tr><td><%= calories %></td></td></tr>' +
  //                         '<tr><td><%= protein %></td></td></tr>' +
  //                         '<tr><td><%= fat %></td></td></tr>' +
  //                         '<tr><td><%= carbs %></td></td></tr>' +
  //                         '<tr><td><%= sodium %></td></td></tr>' +
  //                         '<tr><td><%= name %></td></td></tr>'
  //                        ),

  initialize: function() {
    this.on('change', function() {
      this.render();
    }, this);
    this.prerender();
    this.render();
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
    console.log(ctx)
    new Chart(ctx).PolarArea(data);
    return this.$el.html(this.template(this.model.attributes));
  },

});
