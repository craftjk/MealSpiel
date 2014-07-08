var mcMenu = {
        "burgers": [
          {
            "calories": 550, 
            "protein": 25,
            "fat": 29,
            "carbs": 46,
            "sodium": 970,  
            "name": "Big Mac" 
          }
        ],
       
        "combos": [

          { "calories": 1090, 
            "protein": 29,
            "fat": 45,
            "carbs": 148,
            "sodium": 1250,  
            "name": "Big Mac Combo" },

          { "calories": 1070, 
            "protein": 33,
            "fat": 42,
            "carbs": 144,
            "sodium": 1390,  
            "name": "Quarter Pounder with Cheese Combo" },

          { "calories": 1280, 
            "protein": 52,
            "fat": 58,
            "carbs": 142,
            "sodium": 1480,  
            "name": "Double Quarter Pounder with Cheese Combo" },

          { "calories": 1050, 
            "protein": 27,
            "fat": 38,
            "carbs": 155,
            "sodium": 1180,  
            "name": "Premium Crispy Chicken Classic Combo" },

          { "calories": 890, 
            "protein": 31,
            "fat": 25,
            "carbs": 141,
            "sodium": 1020,  
            "name": "Premium Grilled Chicken Classic Combo" },

          { "calories": 1210, 
            "protein": 40,
            "fat": 49,
            "carbs": 157,
            "sodium": 1610,  
            "name": "Premium Crispy Chicken Club Combo" },

          { "calories": 1050, 
            "protein": 44,
            "fat": 36,
            "carbs": 144,
            "sodium": 1440,  
            "name": "Premium Grilled Chicken Club Combo" },

          { "calories": 1130, 
            "protein": 36,
            "fat": 43,
            "carbs": 156,
            "sodium": 1570,  
            "name": "Premium Crispy Chicken Ranch BLT Combo" },

          { "calories": 970, 
            "protein": 40,
            "fat": 30,
            "carbs": 143,
            "sodium": 1400,  
            "name": "Premium Grilled Chicken Ranch BLT Combo" },

          { "calories": 970, 
            "protein": 25,
            "fat": 35,
            "carbs": 143,
            "sodium": 1100,  
            "name": "Southern Style Crispy Chicken Combo" },

          { "calories": 1010, 
            "protein": 26,
            "fat": 45,
            "carbs": 129,
            "sodium": 1090,  
            "name": "Chicken McNuggets (10 piece) Combo" },

          { "calories": 920, 
            "protein": 19,
            "fat": 35,
            "carbs": 139,
            "sodium": 780,  
            "name": "Filet-O-Fish Combo" },

        ]
};

var Combo = Backbone.Model.extend({ 
  defaults: { 
    calories: 0,   
    protein: 0,
    fat: 0, 
    carbs: 0, 
    sodium: 0,
    name: '' 
  }
});


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

    // var ctx = document.getElementById("comboStats").getContext("2d");
    // new Chart(ctx).PolarArea(data);
    return this.$el.html(this.template(this.model.attributes));
  },

});


var bigMacComboData = { "calories": 1090, 
            "protein": 29,
            "fat": 45,
            "carbs": 148,
            "sodium": 1250,  
            "name": "Big Mac Combo" };

var comboModel = new Combo(bigMacComboData);
var comboView = new ComboView({model: comboModel})

var Menu = Backbone.Collection.extend({
  model: Combo,
});

var MenuView = Backbone.View.extend({
  tagName: 'table',

  initialize: function() {},

  render: function() {
    this.collection.each(function(comboModel) {
      // make a new view from the bookmodel
      newComboViewEl = new ComboView({model: comboModel}).$el;

      // append that to the page
      this.$el.append(newComboViewEl);
    }, this);
    return this.$el;
  }
});


console.log("in starter.js")

var menu = new Menu(mcMenu.combos);

var menuView = new MenuView({collection: menu});
