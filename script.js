function indexOfIgnoreCase(s1, s2) {
  // write your code here
	for(let i=0; i<=s1.length-s2.length; ++i){
  let substr = s1.substring(i, i+s2.length);
  
  if(s2.toLowerCase() == substr.toLowerCase()) return i;
}
return -1;
	
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
