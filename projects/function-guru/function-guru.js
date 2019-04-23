//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var arr = [];
    for(var key in object){
        arr.push(object[key]);
    }
    return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var arr = [];
    
    for(var key in object){
        arr.push(key);
    }
    
    return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var arr = [];
    
    for(var key in object){
        if(typeof object[key] === "string"){
            arr.push(object[key]);
        }
    }
    
    return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    var type = "";
    
    if(Array.isArray(collection)){
        type = "array";
    } else{
        type = "object";
    }
    
    return type;
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    /*
    Split the string into separate characters
    capitalize the first letter only
    join the characters together and return
    */
    var arr = string.split("");
    
    arr[0] = arr[0].toUpperCase();
    
    return arr.join("");
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    /*
    Split the words up
    capitalizeWord function
        Split the word into characters
        capitalize first character
        join the word and put it back in the array of words
    join the array with spaces and return
    */
    var arr = string.split(" ");
    
    for(var i = 0; i < arr.length; i++){
        arr[i] = capitalizeWord(arr[i]);
    }
    
    return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var name = object.name;
    name = capitalizeWord(name);
    return ("Welcome " + name + "!");
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    var name = capitalizeWord(object.name);
    var species = capitalizeWord(object.species);
    return (name + " is a " + species);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    var str = "there are no noises";
    for(var key in object){
        if(key === "noises" && object[key].length > 0){
            str = object[key].join(" ");
        } 
    }

    return str;
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    var found = false;
    var arr = string.split(" ");
    
    for(var i=0; i<arr.length; i++){
        if(arr[i] === word){
            found = true;
            break;
        }
    }
    
    return found;

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    var found = false;
    
    if(object.friends){
        var arr = object.friends;
        for(var i=0; i<arr.length; i++){
            if(arr[i] === name){
                found = true;
                break;
            }
        }
    }
    return found;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    /*
    make an empty array for nonfriends
    iterate through the Array
        iterate through the friends array of name
        if Array[i] != any friends, push to nonfriends array
    return array
    */
    var notFriends = [];
    var friends = [];
    var friendFound = false; 
    for(var i=0; i<array.length; i++){
        if(array[i].name === name){
          friends = array[i].friends;
          //console.log(friends);
        }
    }
    for(var k=0; k<array.length; k++){
      //console.log(array[k].name);
      friendFound = false;
      for(var j=0; j<friends.length; j++){
        if(array[k].name === friends[j]){
          friendFound = true;
        }
        //console.log(friendFound);
      }
      if(!friendFound && array[k].name !== name){
        notFriends.push(array[k].name);
        
      }
    }
        
   
  return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    /*
    go through the object keys and compare them to the array
    if the 
    */
    //var fixedObj = {};
    for(var key in object){
        if(array.includes(key)){
           // fixedObj[key] = object[key];
           delete object[key];
        }
    }
    //object = fixedObj;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    let arr = [];
    for(let i=0; i<array.length; i++){
        if(!arr.includes(array[i])){
            arr.push(array[i]);
        }
    }
    return arr;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}