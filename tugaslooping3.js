  // let a="";
  //  for(j=10;j>0;j--){
  //  a+="*";
  //      console.log(" ".repeat(j)+a);
  //   }

for(let i=3;i>=0;i--){
  let text="";
  for(let j=3;j>=0;j--){
    if(j>i){
      text+=" ";
    }else{
      text+="*";
    }
  }
  console.log(text);
}
