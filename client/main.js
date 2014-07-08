// new AppView(model: new App()).$el.appendTo('body');
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
            "name": "Big Mac",
            "id": 1 },

          { "calories": 1070, 
            "protein": 33,
            "fat": 42,
            "carbs": 144,
            "sodium": 1390,  
            "name": "Quarter Pounder with Cheese",
            "id": 2 },

          { "calories": 1280, 
            "protein": 52,
            "fat": 58,
            "carbs": 142,
            "sodium": 1480,  
            "name": "Double Quarter Pounder with Cheese",
            "id": 3 },

          { "calories": 1050, 
            "protein": 27,
            "fat": 38,
            "carbs": 155,
            "sodium": 1180,  
            "name": "Premium Crispy Chicken Classic",
            "id": 4 },

          { "calories": 890, 
            "protein": 31,
            "fat": 25,
            "carbs": 141,
            "sodium": 1020,  
            "name": "Premium Grilled Chicken Classic",
            "id": 5 },

          { "calories": 1210, 
            "protein": 40,
            "fat": 49,
            "carbs": 157,
            "sodium": 1610,  
            "name": "Premium Crispy Chicken Club",
            "id": 6 },

          { "calories": 1050, 
            "protein": 44,
            "fat": 36,
            "carbs": 144,
            "sodium": 1440,  
            "name": "Premium Grilled Chicken Club",
            "id": 7 },

          { "calories": 1130, 
            "protein": 36,
            "fat": 43,
            "carbs": 156,
            "sodium": 1570,  
            "name": "Premium Crispy Chicken Ranch BLT",
            "id": 8 },

          { "calories": 970, 
            "protein": 40,
            "fat": 30,
            "carbs": 143,
            "sodium": 1400,  
            "name": "Premium Grilled Chicken Ranch BLT",
            "id": 9 },

          { "calories": 970, 
            "protein": 25,
            "fat": 35,
            "carbs": 143,
            "sodium": 1100,  
            "name": "Southern Style Crispy Chicken",
            "id": 10 },

          { "calories": 1010, 
            "protein": 26,
            "fat": 45,
            "carbs": 129,
            "sodium": 1090,  
            "name": "Chicken McNuggets 10 piece",
            "id": 11 },

          { "calories": 920, 
            "protein": 19,
            "fat": 35,
            "carbs": 139,
            "sodium": 780,  
            "name": "Filet-O-Fish",
            "id": 12 }
        ]
};


var bigMacComboData = { "calories": 1090, 
            "protein": 29,
            "fat": 45,
            "carbs": 148,
            "sodium": 1250,  
            "name": "Big Mac Combo" };

var comboModel = new Combo(bigMacComboData);
var comboView = new ComboView({model: comboModel})

var menu = new Menu(mcMenu.combos);
var menuView = new MenuView({collection: menu});

// $('body').append(comboView.prerender());
$('body').append(menuView.render());

// var ctx = document.getElementById("myChart").getContext("2d");
// var myNewChart = new Chart(ctx).PolarArea(data);