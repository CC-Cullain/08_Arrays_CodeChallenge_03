
/*** Mini-Challenge  */
// Satzbau + variable Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));

function getSentence(arr, op) 
{
          
      switch (op) {
      case "S":
            sentence = arr.join(" ") + ".";
            return sentence;
      case "Q":
            sentence = arr.join(" ") + "?";
            return sentence;
      case "E":
            sentence = arr.join(" ") + "!";
            return sentence;
      default:
            sentence = "Invalid operation";
      }
      
}

function getSentence(arr, op) 
{
   if (op === "S") 
      {
        return arr.join(" ");
      } 
      else if (op === "Q") 
      {
        return arr.join(" ") + "?";
      } 
      else if (op === "E") 
      {
        return arr.join(" ") + "!";
      }   
      else 
      {
        return "Invalid operation";
      }
}


// ChatGPT Lösung:

// function getSentence(arr, op) {
//       const operations = {
//         "S": ".",
//         "Q": "?",
//         "E": "!"
//       };
    
//          const operationSymbol = operations[op] || "Invalid operation";
//          const sentence = arr.join(" ") + operationSymbol;
    
//       return sentence;
//     }

//     function getSentence(arr, op) {
//       return op === "S" ? arr.join(" ") + "." :
//              op === "Q" ? arr.join(" ") + "?" :
//              op === "E" ? arr.join(" ") + "!" :
//              "Invalid operation";
//     }

// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(inputStr) {
    console.log(inputStr);
}
