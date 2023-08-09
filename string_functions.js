//This File consists of different Operations related to string

/**
 * This function takes a string as an argument and returns the count of vowels
 * @param {*} str is a String Containing of Uppercase or Lowercase Letters
 * @returns Count of Vowels in a String
 */
function vowelCount(str){
    var testString=str;
    testString=testString.toLowerCase();
    console.log(testString)
    var count=0;
    for(var i=0;i<str.length;i++){
        if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
                count+=1;
        }
    }
    return count;
}

console.log(vowelCount("HelloWorldeaeiou"));