//Inputmask(Phone)
$(document).ready(function() {
    $(".phone").inputmask("(234) 999-9999-999", {"onincomplete": function() {
        $(".phone").val("");
        swal("Oops !",
        "Incomplete phone format, please review",
         "info"
         );
        return false;
    }});
});


//Input validation
//frontend form
function validateEmail(email) {
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function validateForm() {
    const name =document.getElementById("name").value;
    const age =document.getElementById("age").value;
    const email =document.getElementById("email").value;
    const phone =document.getElementById("phone").value;
    const address =document.getElementById("address").value;
    const experience =document.getElementById("experience").value;
    const skills =document.getElementById("skills").value;
    const file =document.getElementById("file").value;

    if(name =="")
    {
        swal("Oops !",
        "Name filed is required",
         "error"
         );
         return false;
    }else if(age =="")
    {
        swal("Oops !",
        "age filed is required",
         "error"
         );
         return false;
    }else if(email =="")
    {
        swal("Oops !",
        "Email filed is required",
         "error"
         );
         return false;
    }else if(phone =="")
    {
        swal("Oops !",
        "phone filed is required",
         "error"
         );
         return false;
    }else if(address =="")
    {
        swal("Oops !",
        "Address filed is required",
         "error"
         );
         return false;
    }else if(experience =="")
    {
        swal("Oops !",
        "Experience filed is required",
         "error"
         );
         return false;
    }else if(skills =="")
    {
        swal("Oops !",
        "Skills filed is required",
         "error"
         );
         return false;
    }else if(file =="")
    {
        swal("Oops !",
        "File filed is required",
         "error"
         );
         return false;
    }else {
        return true;
    }
}
