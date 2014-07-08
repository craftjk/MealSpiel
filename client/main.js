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

          { "calories": 1080, 
            "protein": 29,
            "fat": 45,
            "carbs": 146,
            "sodium": 1250,  
            "name": "Big Mac",
            "id": 1,
            "Cholesterol": 75,
            "fiber": 7,
            "Sugars": 64 },

          { "calories": 1060, 
            "protein": 33,
            "fat": 42,
            "carbs": 144,
            "sodium": 1390,  
            "name": "Quarter Pounder with Cheese",
            "id": 2,
            "Cholesterol": 95,
            "fiber": 6,
            "Sugars": 65 },

          { "calories": 1280, 
            "protein": 52,
            "fat": 58,
            "carbs": 142,
            "sodium": 1480,  
            "name": "Double Quarter Pounder with Cheese",
            "id": 3,
            "Cholesterol": 160,
            "fiber": 6,
            "Sugars": 65 },

          { "calories": 1050, 
            "protein": 27,
            "fat": 38,
            "carbs": 155,
            "sodium": 1180,  
            "name": "Premium Crispy Chicken Classic",
            "id": 4,
            "Cholesterol": 45,
            "fiber": 7,
            "Sugars": 66 },

          { "calories": 890, 
            "protein": 31,
            "fat": 25,
            "carbs": 141,
            "sodium": 1020,  
            "name": "Premium Grilled Chicken Classic",
            "id": 5,
            "Cholesterol": 65,
            "fiber": 7,
            "Sugars": 64 },

          { "calories": 1210, 
            "protein": 40,
            "fat": 49,
            "carbs": 157,
            "sodium": 1610,  
            "name": "Premium Crispy Chicken Club",
            "id": 6,
            "Cholesterol": 85,
            "fiber": 7,
            "Sugars": 66 },

          { "calories": 1050, 
            "protein": 44,
            "fat": 36,
            "carbs": 144,
            "sodium": 1440,  
            "name": "Premium Grilled Chicken Club",
            "id": 7,
            "Cholesterol": 105,
            "fiber": 7,
            "Sugars": 65 },

          { "calories": 1130, 
            "protein": 36,
            "fat": 43,
            "carbs": 156,
            "sodium": 1570,  
            "name": "Premium Crispy Chicken Ranch BLT",
            "id": 8,
            "Cholesterol": 780,
            "fiber": 7,
            "Sugars": 66 },

          { "calories": 970, 
            "protein": 40,
            "fat": 30,
            "carbs": 143,
            "sodium": 1400,  
            "name": "Premium Grilled Chicken Ranch BLT",
            "id": 9,
            "Cholesterol": 90,
            "fiber": 7,
            "Sugars": 64 },

          { "calories": 970, 
            "protein": 25,
            "fat": 35,
            "carbs": 143,
            "sodium": 1100,  
            "name": "Southern Style Crispy Chicken",
            "id": 10,
            "Cholesterol": 45,
            "fiber": 5,
            "Sugars": 62 },

          { "calories": 1010, 
            "protein": 26,
            "fat": 45,
            "carbs": 129,
            "sodium": 1090,  
            "name": "Chicken McNuggets 10 piece",
            "id": 11,
            "Cholesterol": 65,
            "fiber": 5,
            "Sugars": 56 },

          { "calories": 920, 
            "protein": 19,
            "fat": 35,
            "carbs": 139,
            "sodium": 780,  
            "name": "Filet-O-Fish",
            "id": 12,
            "Cholesterol": 40,
            "fiber": 5,
            "Sugars": 61 }
        ]
};

var kingMenu = {
        "combos": [

          { "calories": 1340, 
            "protein": 27,
            "fat": 56,
            "carbs": 192,
            "sodium": 1945,  
            "name": "Spicy Chicken Sandwich Meal",
            "id": "k1",
            "Cholesterol": 55,
            "Sugars": 84 },

          { "calories": 1210, 
            "protein": 22,
            "fat": 47,
            "carbs": 173,
            "sodium": 1355,  
            "name": "Big King Sandwich Meal",
            "id": "k2",
            "Cholesterol": 65,
            "Sugars": 85 },

          { "calories": 1350, 
            "protein": 26,
            "fat": 55,
            "carbs": 185,
            "sodium": 1485,  
            "name": "Whopper Sandwich Meal",
            "id": "k3",
            "Cholesterol": 60,
            "Sugars": 89 },

          { "calories": 1600, 
            "protein": 39,
            "fat": 74,
            "carbs": 185,
            "sodium": 1555,  
            "name": "Double Whopper Sandwich Meal",
            "id": "k4",
            "Cholesterol": 115,
            "Sugars": 89 },

          { "calories": 1860, 
            "protein": 53,
            "fat": 93,
            "carbs": 185,
            "sodium": 1625,  
            "name": "Triple Whopper Sandwich Meal",
            "id": "k5",
            "Cholesterol": 170,
            "Sugars": 89 },

          { "calories": 1000, 
            "protein": 13,
            "fat": 34,
            "carbs": 162,
            "sodium": 1035,  
            "name": "Whopper Jr Sandwich Meal",
            "id": "k6",
            "Cholesterol": 25,
            "Sugars": 84 }
        ]
};

$('select.restaurants').change(function() {
  if ($('select.restaurants')[0].value === "McDonalds") {
    console.log("activate mcmenu render");
    var menu = new Menu(mcMenu.combos);
    var menuView = new MenuView({collection: menu});
  } else if ($('select.restaurants')[0].value === "Burger King") {
    console.log("burger king selected")
    var menu = new Menu(kingMenu.combos);
    var menuView = new MenuView({collection: menu});
  } else {
    console.log("...you weren't supposed to choose that one");
  }
});


