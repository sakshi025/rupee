document.getElementById("arrow").addEventListener("click",press);
document.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("arrow").click();
    }
 });
 
function press(){
    var amount=document.getElementById("amnt").value;
    amount = parseFloat(amount);

    one = Math.floor(amount/2000);
    document.getElementById('one').innerHTML=one;
    amount=amount-one*2000;

    two = Math.floor(amount/500);
    document.getElementById('two').innerHTML=two;
    amount=amount-two*500;
    
    three = Math.floor(amount/200);
    document.getElementById('three').innerHTML=three;
    amount=amount-three*200;

    four = Math.floor(amount/100);
    document.getElementById('four').innerHTML=four;
    amount=amount-four*100;

    five = Math.floor(amount/50);
    document.getElementById('five').innerHTML=five;
    amount=amount-five*50;

    six = Math.floor(amount/20);
    document.getElementById('six').innerHTML=six;
    amount=amount-six*20;

    seven = Math.floor(amount/10);
    document.getElementById('seven').innerHTML=seven;
    amount=amount-seven*10;

    eight = Math.floor(amount/5);
    document.getElementById('eight').innerHTML=eight;
    amount=amount-eight*5;

    nine = Math.floor(amount/2);
    document.getElementById('nine').innerHTML=nine;
    amount=amount-nine*2;

    ten = Math.floor(amount/1);
    document.getElementById('ten').innerHTML=ten;
    amount=amount-ten*1;

    sum=Math.floor(one+two+three+four+five+six+seven+eight+nine+ten);
    document.getElementById('sum').innerHTML=sum;
    
}


