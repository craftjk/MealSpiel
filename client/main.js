// new AppView(model: new App()).$el.appendTo('body');

var bigMacComboData = { "calories": 1090, 
            "protein": 29,
            "fat": 45,
            "carbs": 148,
            "sodium": 1250,  
            "name": "Big Mac Combo" };

var comboModel = new Combo(bigMacComboData);
var comboView = new ComboView({model: comboModel})

$('body').append(comboView.prerender());

setTimeout(function(){
  $('body').append(comboView.render());
}, 100);

// var ctx = document.getElementById("myChart").getContext("2d");
// var myNewChart = new Chart(ctx).PolarArea(data);