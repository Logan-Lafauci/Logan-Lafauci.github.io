// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-bookshayley");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    //returns the length of the array of men (filtered out of the customers)
    return _.filter(array, function test(person){
        return person.gender === "male";
    }).length;
};

var femaleCount = function(array){
    //returns the length of the array of females (filtered out of customers)
    return _.filter(array, function test(person){
       return person.gender === "female"; 
    }).length;
};

var oldestCustomer = function(array){
    let oldestAge = 0;
    let oldestPerson = "";
    _.each(array, function(person){
       if(person.age > oldestAge){
           oldestAge = person.age;
           oldestPerson = person.name;
       } 
    });
    return oldestPerson;
};

var youngestCustomer = function(array){
    //could never be a real age best to use for checking if younger
    let youngestAge = 1000; 
    let youngestPerson = "";
    _.each(array, function(person){
        if(person.age < youngestAge){
            youngestAge = person.age;
            youngestPerson = person.name;
        }
    });
    return youngestPerson;
};

var averageBalance = function(array){
    let totalBalance = 0;
    let sepBalance = [];//separate balance so can remove $ and ,
    _.each(array, function(person){
        sepBalance = person.balance.split("");
        
        let firstNum = sepBalance.splice(_.indexOf(sepBalance,"$")+1, 1);
        let lastNum = sepBalance.splice(_.indexOf(sepBalance, ",")+1, sepBalance.length);
        
        sepBalance = firstNum.join("") + lastNum.join("");
        totalBalance += Number(sepBalance);
    });
    
    return (totalBalance / array.length);
};

var firstLetterCount = function(array, letter){
    let numPeople = 0;
    let nameArr = [];
    let letterFound = false;
    numPeople = _.filter(array, function(person){
            letterFound = false;
            nameArr = person.name.split("");
            if(nameArr[0].toLowerCase() === letter.toLowerCase()){
                letterFound = true;
            }
            return letterFound;
        }).length;
        
    return numPeople;
};

var friendFirstLetterCount = function(array, customer, letter){
    let friends = [];
    _.each(array, function(person){
        if(customer === person.name){
            friends = person.friends;
        }
    });
    
    return firstLetterCount(friends, letter);
};

var friendsCount = function(array, name){
    //go through the array of customers
    //if the customer's friends list has NAME, push them into a freinds array
    let friendsNames = [];
    _.each(array, function(person){
       _.each(person.friends, function(friend){
           if(name === friend.name){
               friendsNames.push(person.name);
           }
       })
    });
    return friendsNames;
};

var topThreeTags = function(array){
    //go to the first person on the array.  Take their first tag
    //go through every other person and see if their tags contain the tag.
    //record that number.  Repeat
    let tagArr = [];
    let m_tag1Count = 0;
    let m_tag1Name = "";
    let m_tag2Count = 0;
    let m_tag2Name = "";
    let m_tag3Count = 0;
    let m_tag3Name = "";
    _.each(array, function(person){
        _.each(person.tags, function(tag){
            let compareTag = tag;
            let compareTagPerson = person.name;
            let compareTagCount = 0;
            _.each(array, function(pers){
                if(_.contains(pers.tags, compareTag) && pers.name !== compareTagPerson){
                    compareTagCount++;
                }
            });
            if(compareTagCount >= m_tag1Count){
                m_tag3Count = m_tag2Count;
                m_tag2Count = m_tag1Count;
                m_tag1Count = compareTagCount;
                m_tag3Name = m_tag2Name;
                m_tag2Name = m_tag1Name;
                m_tag1Name = compareTag;
            }else if(compareTagCount >= m_tag2Count){
                m_tag3Count = m_tag2Count;
                m_tag2Count = compareTagCount;
                m_tag3Name = m_tag2Name;
                m_tag2Name = compareTag;
            } else if(compareTagCount >= m_tag3Count){
                m_tag3Count = compareTagCount;
                m_tag3Name = compareTag;
            }
        });
        
    });
    
    tagArr.push(m_tag1Name);
    tagArr.push(m_tag2Name);
    tagArr.push(m_tag3Name);
    
    return tagArr;
};

var genderCount = function(array){
    let genderObject = {
        male: maleCount(array),
        female: femaleCount(array),
        transgender: array.length - (maleCount(array) + femaleCount(array))
    };
    
    return genderObject;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
