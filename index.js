const form=document.querySelector("form");
form.addEventListener("submit",verification);
function verification(e)
{
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    // console.log(e.target[0].value.match(mailformat));
    if(!(e.target[0].value.match(mailformat)))
    {
           e.preventDefault();//This field is added
     e.target[0].style.borderColor="hsl(0, 93%, 68%)"; 
     e.target[0].style.borderWidth="2px";
     document.getElementById("error-icon").style.display="block";
     document.querySelector("small").style.display="block";

     console.log(e);
    }
    
}
