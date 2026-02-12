function banking(amount, ACCno, BankName){

if(amount >= 100 && ACCno == 1180 && BankName == "KCB"){
  return "Withdrawn successfully";
}

else if (amount > 0 && amount < 100 && ACCno == 1180 && BankName == "KCB"){
  return "Deposited successfully";
} 

else{
  return "failed! invalid credentials";
}
}

let result = banking(10,1180,"KCB");
console.log(result);
