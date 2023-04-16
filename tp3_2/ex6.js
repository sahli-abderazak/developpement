exp=prompt("donner expression")
ch1=prompt("donner expression")
ch2=prompt("donner expression")

function replacee(exp,ch1,ch2) {
    var index = exp.indexOf(ch1);
    while (index !== -1) {
      exp = exp.replace(ch1,ch2);
      index = exp.indexOf(ch1);
    }
    return exp;
  }
res=replacee(exp,ch1,ch2)
alert(res)