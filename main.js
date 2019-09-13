///// Introduction to Function //////

function cube(x){
	return x*x*x;
}
function fullname(firstname, lastname){
	return firstname+ " "+lastname;
}
function average(num1,num2){
return " the average is: "+ (num1/num2 * 100)+ " %" ; 
}

function greeter(name){
return "Hello " + name; 
}

function triangle(a,b,c){
 return a+b+c;
}

function square(length){
	return 4* length;
}

function rectangle(width,height){
	return (width+height) * 2;
}

function Quarial(a,b,c,d){
	return a+b+c+d;
}

function circl(raduis){
	return raduis*1.43*2;
}


///// Boolean and Comparision ///// 
function oldengughtodrive(age){
	if(age>16){
	return true;
}
	else
	return false
}

function sameLength(str1,str2){
	if(str1.length===str2.length)
		return true;
	else
		return false;
}

function pasLong(password){
var pp= password.length;
if(pp > 8)
	return true;
else
	return false;
}

function renalCar(name,age){
	if(age<= 21){
		return "You cannot have the keys";
	}else
	{
		return 'Have fun driving, !'
	}
}

function max(num1, num2){
if(num1 > num2)
	return num1;
	return num2;
}

///////// Logical Operatores ///////
function renalCar(name,age){
	if(age<= 21 && name === "Joe"){
		return "You cannot have the keys";
	}
	else 
	{
		return 'Have fun driving, !'
	}
}

function scoreToGrade(number){
	if (number >100)
		return "Number exceeded";
	if(number >=90 )
		return "A";
	else if(number<90 && number >= 80)
		return "B";
	else if(number< 80 && number >= 70)
		return "C";
	else if(number< 70 && number >= 60)
		return "D";
	else if(number < 60 && number >=0)
		return "fail"
	else if (number < 0)
		return "Invalid score "
	} 

/////// Introduction to repition //////	

function sum(num){
if(num===0){
	return num;
}
	return num+sum(num-1);
}
function fac(num)
{
	if (num ===1)
	{
		return num;
	}
	return num*fac(num-1);
}

function repeat(str, num){
	if(num==0)
	{
		return "";
	}
	return str+ repeat(str,num-1);
}

function fib(num){ /// not completed 
	if(num===1){
		return 0;
	}

	return fib(num-1)+fib(num-2);
}

function multyplayBy10(number, n){
	if(n===0)
		return number;

	return 10 * multyplayBy10(number,n-1)
}


////////// variables //////////
var count=0;
function counter(){
return count++;
}

////While Loop////
function sum(n){
    var sumi = 0;
    if(n === 0){
           return 0;
       }
    while(n > 0){
        sumi = sumi + n;
        n--;
    }
    return sumi;
}
function factorial(n){
    var fact = 1;
    if(n === 0){
           return 0;
       }
    while(n > 0){
        fact = fact * n;
        n--;
    }
    return fact;
}
function repeat(str,count){
    var stringg="";
    if(count === 0){
           return "";
       }
    while(count > 0){
        stringg = stringg + str;
        count--;
    }
    return stringg;
}
///Array//
var array1=["Your favorite TV shows/movies"," Names of people you know/care about","Favorite sports/activities"];
function firstelement(arr){
    return arr[0];
}
function lastelement(arr2){
    return arr2[arr2.length - 1];
}
function pushunshift(arr){
    arr.unshift(0,1);
    arr.push(5,6,7);
    return arr;
}
function pushelement(arr,string1){
    arr.shift();
    arr.unshift(string1);
    return arr;
}
////For Loop///
function sumfor(n){
    var sumi = 0;
    if(n === 0){
        return 0;
    }
    for(var i = n;i > 0;i--){
        sumi = sumi + i;
    }
    return sumi;
}
function factorialfor(n){
    var fact = 1;
    if(n === 0){
           return 0;
       }
    for(var i = n;i > 0;i--){
        fact = fact * n;
        
    }
    return fact;
}
function repeatfor(str,count){
    var stringg="";
    if(count === 0){
           return "";
       }
    for(var i = count;i > 0;i--){
        stringg = stringg + str;
    }
    return stringg;
}
function sumArray(arr){
    var sumOfArray=0;
    for(var i=0; i<arr.length; i++){
        sumOfArray = sumOfArray + arr[i];    
    }
   return sumOfArray;
}
function maxArray(arr){
    var max = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(max < arr[i]){
            max=arr[i];
        }
    }
    return max;
}
// this is just for 2 elements can removed
function removeArray(arr,element){
    for(var i=0;i<arr.length;i++){
        if(arr[i]===element){
            arr.splice(i,1);
        }
    }
    return arr;
}
//for +2 numbers this is the function
function removeArray2(arr,element){
    var newArray=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i] === element){
            i++;
        }
        else{
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
function evenArray(arr){
    var newEvenArray=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2 === 0){
            newEvenArray.push(arr[i]);
        }
    }
    return newEvenArray;
}






