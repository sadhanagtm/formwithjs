let a='';
function Numb(a){
    // alert('firing'+a)
}
function Btn(){
    let one=document.getElementById('one').value;
    let oneerror=document.getElementById('oneerror');
    let two=document.getElementById('two').value;
    let twoerror=document.getElementById('twoerror');
    let three=document.getElementById('three').value;
    let threerror=document.getElementById('threerror');
    let pattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    console.log(one.match(pattern))
    if(one.length===0){
        // alert('firing');
        oneerror.innerHTML="cannot proceed"
    }else if(one.match(pattern)===null){
        oneerror.innerHTML="cannot proceed without number"

    }
  
    console.log(two.length)
    if(two.length===0){
        // alert('firing');
        twoerror.innerHTML="cannot proceed"
    }
  
    console.log(three.length)
    if(three.length===0){
        alert('firing 3');
        threerror.innerHTML="cannot proceed"
    }
        let four=document.getElementById('four').value;
    let fourerror=document.getElementById('fourerror');
    console.log(four.length)
    if(four.length===0){
        alert('firing 4');
        fourerror.innerHTML="cannot proceed"
    }
        let forth=document.getElementById('forth').value;
        let fortherror=document.getElementById('fortherror');
        console.log(forth.length)
        if(forth.length===0){
            // alert('firing');
            fortherror.innerHTML="cannot proceed"
        }
            let fift=document.getElementById('fift').value;
            let fifterror=document.getElementById('fifterror');
            console.log(fift.length)
            if(fift.length===0){
                alert('firing 5');
                fifterror.innerHTML="cannot proceed"
            }
}