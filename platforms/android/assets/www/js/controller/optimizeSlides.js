genericApp.controller('optimizeSlidesCtrl',['$scope','$ionicSlideBoxDelegate', function($scope,$ionicSlideBoxDelegate) {

	$ionicSlideBoxDelegate.slide(0);
	$scope.items = [
    {'imagePath':'img/ionic.png',
     'content':'Inadequate food/fluid intake may be caused by nausea, abdominal pain, loss of appetite or altered taste sensation.',
     'title':'IBD Fact',
     'show':false,
     'id':'1'
    },
    {'imagePath':'img/ionic.png',
     'content':'Increased losses — intestinal inflammation during acute flares results in increased protein losses, losses from fistula fluids, diarrhea, and bleeding.',
     'title':'IBD Fact',
     'show':false,
     'id':'2'
    },
    {'imagePath':'img/ionic.png',
     'content':'Increased nutritional needs — inflammation or infection increases metabolic requirements.',
     'title':'IBD Fact',
     'show':false,
     'id':'3'
    },
    {'imagePath':'img/ionic.png',
     'content':"Malabsorption with Crohn's disease may be caused by severe intestinal inflammation, resection of small intestine, and certain medications.",
     'title':'IBD Fact',
     'show':false,
     'id':'4'
    },
    {'imagePath':'img/ionic.png',
     'content':"No specific diet has been shown to prevent or treat IBD. However, some diet strategies may help control symptoms. Please consult your doctor or nutritionist to help create a diet plan that's right for you.",
     'title':'Diet and Nutrition Tip',
     'show':false,
     'id':'5'
    },
    {'imagePath':'img/ionic.png',
     'content':'Keeping a record of foods eaten and then taking note of when symptoms worsen may help you identify patterns that indicate problem foods.',
     'title':'Diet and Nutrition Tip',
     'show':false,
     'id':'6'
    },
    {'imagePath':'img/ionic.png',
     'content':'Follow a low-residue diet to relieve abdominal pain and diarrhea.',
     'title':'Diet Tip - UC Flare',
     'show':false,
     'id':'7'
    },
    {'imagePath':'img/ionic.png',
     'content':'Avoid foods that may increase stool output, such as fresh fruits and vegetables, prunes, and caffeinated beverages.',
     'title':'Diet Tip - UC Flare',
     'show':false,
     'id':'8'
    },
    {'imagePath':'img/ionic.png',
     'content':'Decrease concentrated sweets in your diet, such as juices, candy and soda, to help decrease amounts of water pulled into your intestine, which may contribute to watery stools.',
     'title':'Diet Tip - UC Flare',
     'show':false,
     'id':'9'
    },
    {'imagePath':'img/ionic.png',
     'content':'Decrease alcohol consumption.',
     'title':'Diet Tip - UC Flare',
     'show':false,
     'id':'10'
    },
    {'imagePath':'img/ionic.png',
     'content':'Try incorporating more omega-3 fatty acids in your diet. These fats may have an anti-inflammatory effect. They are found in fish, including salmon, mackerel, herring and sardines.',
     'title':'Diet Tip - UC Flare',
     'show':false,
     'id':'11'
    },
    {'imagePath':'img/ionic.png',
     'content':'Patients often find that smaller, more frequent meals are better tolerated. This eating pattern can help increase the amount of nutrition you receive in a day.',
     'title':'Diet Tip - UC Flare',
     'show':false,
     'id':'12'
    },
    {'imagePath':'img/ionic.png',
     'content':'Consider taking nutritional supplements if appetite is poor and solid foods are not tolerated well.',
     'title':'Diet Tip - UC Flare',
     'show':false,
     'id':'13'
    },
    {'imagePath':'img/ionic.png',
     'content':'Follow a low-residue diet to relieve abdominal pain and diarrhea.',
     'title':"Diet Tip - Crohn's Flare",
     'show':false,
     'id':'14'
    },
    {'imagePath':'img/ionic.png',
     'content':'If you have strictures, it is especially important to avoid nuts, seeds, beans, and kernels.',
     'title':"Diet Tip - Crohn's Flare",
     'show':false,
     'id':'15'
    },
    {'imagePath':'img/ionic.png',
     'content':'Avoid foods that may increase stool output, such as fresh fruits and vegetables, prunes, and caffeinated beverages. Cold foods may help reduce diarrhea.',
     'title':"Diet Tip - Crohn's Flare",
     'show':false,
     'id':'16'
    },
    {'imagePath':'img/ionic.png',
     'content':'If you have lactose intolerance, follow a lactose-free diet. Lactose intolerance causes gas, bloating, cramping, and diarrhea 30 to 90 minutes after eating milk, ice cream, or large amounts of dairy. A breath hydrogen test may confirm suspicions of lactose intolerance.',
     'title':"Diet Tip - Crohn's Flare",
     'show':false,
     'id':'17'
    },
    {'imagePath':'img/ionic.png',
     'content':'If you have oily and foul-smelling stools, you may have fat malabsorption. Treat fat malabsorption by following a low-fat diet. Discuss these symptoms with your doctor or nutritionist.',
     'title':"Diet Tip - Crohn's Flare",
     'show':false,
     'id':'18'
    },
    {'imagePath':'img/ionic.png',
     'content':'Smaller, more frequent meals are better tolerated and can maximize nutritional intake.',
     'title':"Diet Tip - Crohn's Flare",
     'show':false,
     'id':'19'
    },
    {'imagePath':'img/ionic.png',
     'content':'If your appetite is decreased and solid foods are not tolerated well, consider taking nutritional supplements.',
     'title':"Diet Tip - Crohn's Flare",
     'show':false,
     'id':'20'
    }
  ];

}]);