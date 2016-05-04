'use strict';

var app = angular.module('myApp', []);

app.value('myVars', {
    filterResult:0,
    
});

/*Confirm Password Custom Directive */
app.directive('match', function($parse) {
  return {
    require: 'ngModel',
    link: function(scope, elem, attrs, ctrl) {
      scope.$watch(function() {        
        return $parse(attrs.match)(scope) === ctrl.$modelValue;
      }, function(currentValue) {
        ctrl.$setValidity('ready', currentValue);
      });
    }
  };
});

/*Password Strength  Custom Filter */
app.filter('filterPassword',function() {
    return function (p)	 {
    	var passed = 0;
    	var strength = 0;
    	try{
	    	var pLen = p.length;
	    }catch(e){}
    	var regexSymbols = /[$-/:-?{-~!"^_`\[\]]/g; //"
      	var lowerLetters = /[a-z]+/.test(p);                    
        var upperLetters = /[A-Z]+/.test(p);
        var numbers = /[0-9]+/.test(p);
        var symbols = regexSymbols.test(p);
        if(lowerLetters)
        	passed++;
        if(upperLetters)
        	passed++;
        if(numbers)
        	passed++;
        if(symbols)
        	passed++;
        if(pLen>8)
        	passed++;
        
       	strength += 2 * pLen + ((pLen >= 10) ? 1 : 0);
        strength += passed * 10;
		// penality (short password)
        strength = (pLen < 8) ? Math.min(strength, 10) : strength;                                      
                   
		// penality (poor variety of characters)
        strength = (passed == 1) ? Math.min(strength, 20) : strength;
        strength = (passed == 2) ? Math.min(strength, 40) : strength;
        strength = (passed == 3) ? Math.min(strength, 60) : strength;
        strength = (passed == 4) ? Math.min(strength, 80) : strength;

        strength = (strength>100) ? 100 : strength;

    	return strength;
    }
});

app.controller('controllerPassword', ['myVars','$scope', '$filter', function controllerPassword(myVars, $scope, $filter) {

	$scope.update = function(input) {
		$scope.modelPwdCopy = input.value;
		var tmp = $scope.modelPwdCopy;
		myVars.filterResult = $filter('filterPassword')(tmp);
		$scope.customStyle = {
   			width : myVars.filterResult + '%',
   			background : $scope.getColor(),

   		};
	}
	
	$scope.getColor = function() {
		if(myVars.filterResult<=20)
			
			return '#cc0000';
		else if(myVars.filterResult>20 && myVars.filterResult<=40)
			
			return '#cc0000';
		else if(myVars.filterResult>40 && myVars.filterResult<=60)
			
			return '#ff9900';
		else if(myVars.filterResult>60 && myVars.filterResult<=80)
			
			return '#ff9900';
		else if(myVars.filterResult>80 && myVars.filterResult<=100)
			
			return '#00cc44';
	}
}]);


app.directive('watchChange', function() {
    return {
        restrict : 'A',
        link: function(scope, element, attrs) {
            element.on('input', function(){
                scope[attrs.watchChange](this);
            })
        }
    };
});


