//This File consists of different Operations related to string
/**
 * This function accepts a string, checks if it is a palindrome, and returns the result message.
 * @param {a string made up of alphabets} str 
 * @returns the result message.
 */
function checkPalindrome(str){
    //copy the parameter and store it in a local vaiable.
    const stringToCheck = str;
    let length = stringToCheck.length;
    let reverse = "";
    //reverse the string and store in 'rev' variable.
    while(length > 0){
        reverse += stringToCheck[length-1];
        length--;
    }

    //now compare the strings, if the reverse is equal to the original string, then it is a palindrome.
    if(stringToCheck === reverse){
        return "The string "+stringToCheck+" is a palindrome";
    }
    return "The string "+stringToCheck+" is not a palindrome";


}
