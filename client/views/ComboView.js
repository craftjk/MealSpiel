var ComboView = Backbone.View.extend({
  tagName: 'table class="table table-striped table-bordered table-condensed table-hover"',

  initialize: function() {
    this.on('change', function() {
      this.render();
    }, this);
  },

  prerender: function() {
    return this.$el.html('<tr><th>' + this.model.attributes.name + '</th><th>protein(r), fat(g), carbs(y) distribution</th><th>Nutritional Facts</th></tr>' + 
                         '<tr><td id="' + this.model.attributes.id + '"></td>' + 
                         '<td><canvas id="' + this.model.attributes.name + '" width="250" height="250"></canvas></td>' +
                         '<td id="nutritionalFacts"><ul><li>Calories: ' + this.model.attributes.calories + '</li>' + 
                           '<li>Total Fat: ' + this.model.attributes.fat + 'g</li>' + 
                           '<li>Cholesterol: ' + this.model.attributes.Cholesterol + 'mg</li>' + 
                           '<li>Sodium: ' + this.model.attributes.sodium + 'mg</li>' + 
                           '<li>Total Carbs: ' + this.model.attributes.carbs + 'g</li>' + 
                           '<li>Sugars: ' + this.model.attributes.Sugars + 'g</li>' + 
                           '<li>Protein: ' + this.model.attributes.protein + 'g</li>' + 
                         '</ul></td></tr>'
                         );
  },

  render: function() {
    this.prerender();
    if (this.model.attributes.id.charAt(0) === 'k') { // burger king meal
      var imgSrc = "img/king-" + this.model.attributes.name.split(' ').join('-') + ".png";
    } else { // mcdonalds meal
      var imgSrc = "img/mcdonalds-" + this.model.attributes.name.split(' ').join('-') + "-Extra-Value-Meals.png";
    }
    var img = '<img class="meal" src="' + imgSrc + '">';

    $('div.menu').append(this.prerender());
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
