
var name;
var y = 1;
var names = [];
var newnames = [];

do{

  name = prompt("Enter the name: ");
  names.push(name);
  y = prompt("Do you want to enter another names? (y for yes, n for no)");
}
while (y == "y");

var n = 0;

for (n = 0; n < names.length; n++){
  console.log(names[n]);
}

var m = 0;
for(m = 0;  m < names.length; m++){
      newnames.push(names[m].charAt(0).toUpperCase()+names[m].slice(1));
      console.log(newnames[m]);
  }



  

  


