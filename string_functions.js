//This File consists of different Operations related to string-Krithika

/**
 * This function takes a string as an argument and returns the count of vowels
 * @param {*} str is a String Containing of Uppercase or Lowercase Letters
 * @returns Count of Vowels in a String
 */
function vowelCount(str){
    var testString=str;
    var str2="";
    testString=testString.toLowerCase();
    console.log(testString)
    var count=0;
    for(var i=0;i<=testString.length;i++){
        if(testString[i]=='a'||testString[i]=='e'||testString[i]=='i'||testString[i]=='o'||testString[i]=='u'){
                count+=1;
                str2+=testString[i];
                
                
        } 
    }
    console.log(str2)
    return count;
}       
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


/**
 * This function accepts a string and returns the whole string, in lowercase.
 * @param {string} str 
 * @returns the result
 */
function lowercase(str){
    return str.toLowerCase
}
    



export { vowelCount, checkPalindrome,lowercase}