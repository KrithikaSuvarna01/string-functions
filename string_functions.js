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

console.log(vowelCount("HelloWorldeaeiouAEIOU"));