const choices=document.querySelectorAll(".choice");
const input=document.querySelector(".input-space");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        // console.log("Button clicked");
        const button=choice.querySelector("button");
        // console.log("The button clicked is ",getid);
        const value=choice.querySelector("button").textContent;
        const getid=choice.querySelector("button").getAttribute("id");
        if (value=="="){
            operations(input.querySelector("input").value);
        }else if(value=="C"){
            input.querySelector("input").value="";
        }else if (value=="+/-"){
            let current=input.querySelector("input").value;
            current=current.startsWith("-")?current.slice(1):"-"+current;
            input.querySelector("input").value=current;
        }else if (getid=="back-space"){
            let current=input.querySelector("input").value;
            input.querySelector("input").value=current.slice(0,-1);
        }else{
        input.querySelector("input").value+=value;
        }
    });
});
const operations=(expr)=>{
    const cleanExpr=expr.replace(/X/g,"*");
    try{
    const result=eval(cleanExpr);
    input.querySelector("input").value=result;
    }catch(error){
        input.querySelector("input").value="Error";
    }
};
