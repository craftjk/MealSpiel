var ComboView = Backbone.View.extend({
  tagName: 'table class="table table-striped table-bordered table-condensed table-hover"',

  initialize: function() {
    this.on('change', function() {
      this.render();
    }, this);
  },

  prerender: function() {
    return this.$el.html('<tr><th colspan="2"><h2> ' + this.model.attributes.name + '</h2></th></tr>' + 
                         '<tr><th></th><th>protein(r), fat(g), carbs(y) distribution</th></tr>' + 
                         '<tr><td id="' + this.model.attributes.id + '"></td>' + 
                         '<td><canvas id="' + this.model.attributes.name + '" width="250" height="250"></canvas></td></tr>'
                         );
  },

  render: function() {
    this.prerender();
    var parsedName = this.model.attributes.name.split(' ').join('-');
    var img = '<img src="img/mcdonalds-' + parsedName + '-Extra-Value-Meals.png">';
    $('body').append(this.prerender());
    $('td#' + this.model.attributes.id).append(img);
    var data = [
          {
              value: this.model.attributes.protein,
              color:"#F7464A",
              highlight: "#FF5A5E",
              label: "Protein",
              labelColor: "white",
              labelFontSize: '16'

          },
          {
              value: this.model.attributes.fat,
              color: "#46BFBD",
              highlight: "#5AD3D1",
              label: "Fat",
              labelColor: "white",
              labelFontSize: '16'
          },
          {
              value: this.model.attributes.carbs,
              color: '#FDB45C',
              highlight: '#FFC870',
              label: 'Carbs',
              labelColor: 'black',
              labelFontSize: '16'
          }
      ];

    var ctx = document.getElementById(this.model.attributes.name).getContext("2d");
    var newChart = new Chart(ctx).Doughnut(data);
    return newChart;
  },

});
