/*
Kilometer to meter converter
*/
function kilometerToMeter(kilometer) {

    if (Math.sign(kilometer) >= 0) {
        meter = (kilometer*1000);
        return meter; 
     }
     else {
        return 'Please Enter a Valid Number';
     }
}


/*
Budget Calculator
*/
function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop) {

    if (Math.sign(numberOfWatch) >= 0 && Math.sign(numberOfPhone) >= 0 && Math.sign(numberOfLaptop) >= 0) {
    
    wacthPrice = ( numberOfWatch * 50 );
    phonePrice = ( numberOfPhone * 100 );
    laptopPrice = ( numberOfLaptop * 500 );
    
    // Total Budget
    totalBudget = (wacthPrice + phonePrice + laptopPrice);
        return totalBudget;
    }
    else {
            return 'Please Enter a Valid Number';
         }
}

var totalBudget = budgetCalculator(1, 2, 3);
console.log('Total Budget = ', totalBudget);


/*
Hotel Cost
*/
function hotelCost(nightStay) {
    if (Math.sign(nightStay) > 0) {
        if (nightStay <= 10) {
            //For 1st 10 night, per night's cost is 100$
            cost = (nightStay * 100)
        }
        if (10 < nightStay <= 20) {
            //For 1st 10 nights, per night's rent is 100$ 
            //For later 10 nights, per night's rent is 80$ 
            cost = ((nightStay - 10) * 80 ) + 1000;
        }
        if (nightStay > 20) {
            //For 1st 10 nights, per night's rent is 100$ 
            //For later 10 nights, per night's rent is 80$ 
            //Later hotel rent is 50$ per night
            cost = ((nightStay - 20) * 50 ) + 1000 + 800;
        }
        // Total Cost for hotel stay
        calculatedCost = (cost);
        
        return calculatedCost;
    }
    else {
        return 'Please Enter a Valid Number';
    }
}

var totalCost = hotelCost(10);
console.log('Total Cost for Hotel Stay= ', totalCost);


/*
Largest Name Finder
*/
function megaFriend(myFriends) {
    var largestName = myFriends[0];
for (let i = 0; i < myFriends.length; i++) {
    if (typeof myFriends[i] == 'string' && myFriends[i] !== '' && myFriends[i] !== ' ') {
    var currentName = myFriends[i];
        if (currentName.length > largestName.length) {
            largestName = currentName;
        }
    }
    else {
        largestName = `Invalid Name Present "${myFriends[i]}"`;
        break;
    }

    }
    return largestName;
}

var myFriends = ['Riyadh', 'Saifur', 'Sunny', "Likhon", 'Abrar Ibn Rafiq', "Rihanna","Anne Marie"];
largestResult = megaFriend(myFriends);
console.log('Largest Name is =', largestResult);
