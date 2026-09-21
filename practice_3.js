 function getResult(marks, passMark = 40) {
   if (marks >= 80) {
     console.log( "A");
   } else if (marks >= 60 && marks<80) {
     console.log( "B");
   } else if (marks >= passMark  && marks<60 ) {
     console.log( "C");
   } else {
     console.log( "F");
   }
 }

 getResult(70);