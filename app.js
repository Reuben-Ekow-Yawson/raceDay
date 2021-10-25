let raceNumber = Math.floor(Math.random() * 1000);
const early = true;
const age = 18;
if(age > 18 && early){
  raceNumber += 1000;
}

if(age > 18 && early){
  console.log(`Race will begin at 9:30 am, and race number is: ${raceNumber}.`);
}
else if(age > 18 && !early){
  console.log(`Race will begin at 11:00 am, and race number is: ${raceNumber}.`);
}
else if(age < 18){
  console.log(`Race will begin at 12:30 pm, and race number is: ${raceNumber}.`);
}
else{
  console.log('Please go to the registration desk, thanks!')
}