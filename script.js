// First JavaScript function

function cleanUpIndex() {
    var contant_cleaner = document.getElementsByClassName("contact");
    for(var i = contant_cleaner.length - 1; 0 <= i; i--)
    if(contant_cleaner[i] && contant_cleaner[i].parentElement)
    contant_cleaner[i].parentElement.removeChild(contant_cleaner[i]);
}


// Third JavaScript function

function renderIndex() {
    const indexList = [  
        "Barry Allen",
        "Beverly Crusher",
        "Diana Prince"  
    ]
    const element1 = document.querySelector('div');

    element1.innerHTML =
        '<a href="page3.html"><div class="contact"><p>' + indexList[0] + '</p></div></a>' +
        '<a href="page3.html"><div class="contact"><p>' + indexList[1] + '</p></div></a>' +
        '<a href="page3.html"><div class="contact"><p>' + indexList[2] + '</p></div></a>'
    
    document.body.appendChild(element1);

}




// Fourth JavaScript function

function cleanUpView() {
    var contant_cleaner = document.getElementsByClassName("contactinfo");
    for(var i = contant_cleaner.length - 1; 0 <= i; i--)
    if(contant_cleaner[i] && contant_cleaner[i].parentElement)
    contant_cleaner[i].parentElement.removeChild(contant_cleaner[i]);
}


// Fifth JavaScript function

function renderView() {

    const element1 = document.querySelector('div');

    element1.innerHTML =
        '<div class="contactinfo">' +
        '<div class="contactname">' +
            'Raquel Ervin' +
            '<img src="./img/profile.jpg" class="profilepic" alt="Profile picture">' +
        '</div>' +
        '<div class="contactemail">email: rocket@gmail.com</div>' +
        '<div class="contactphone">cell: +1 555 555-5555</div>' +
        '<div class="contactaddress">address: 123 front st, Unit #1, Dakota City</div>' +
        '<div class="buttons">' +
            '<button class="button edit" value="Edit">Edit</button>' +
            '<button class="button close" value="Close">Close</button>' +
        '</div>'

    document.body.appendChild(element1);

}


// Sixth JavaScript function

function cleanUpCreate() {
    var contant_cleaner = document.getElementsByClassName("contactedit");
    for(var i = contant_cleaner.length - 1; 0 <= i; i--)
    if(contant_cleaner[i] && contant_cleaner[i].parentElement)
    contant_cleaner[i].parentElement.removeChild(contant_cleaner[i]);
}



// Seventh JavaScript function

function renderCreate() {

    const element1 = document.querySelector('div');

    element1.innerHTML =
    '<div class="contactedit">' +
                '<div class="contactimg">' +
                    '<img src="./img/profile.jpg" class ="profilepic" alt="Profile picture">' +
                '</div>' +
                '<div class="form">' +
                    '<form>' +
                        '<div class="inputcontainer">' +
                            '<input type="text" id="contactname" name="contactname" placeholder="Contact Name">' +
                            '<button class="extrafield" id="extranamefield" name="extranamefield">+</button>' +
                        '</div>' +

                        '<div class="inputcontainer">' +
                            '<input type="tel" id="contactphone" name="contactphone" placeholder="Contact Phone">' +
                            '<button class="extrafield" id="extraphonefield" name="extraphonefield">+</button>' +
                        '</div>' +

                        '<div class="inputcontainer">' +
                            '<input type="text" id="contactaddress" name="contactaddress" placeholder="Contact Address">' +
                            '<button class="extrafield" id="extraaddressfield" name="extraaddressfield">+</button>' +
                        '</div>' +
                        
                        '<div class="inputcontainer">' +
                            '<input type="email" id="contactemail" name="contactemail" placeholder="Contact Email">' +
                            '<button class="extrafield" id="extraemailfield" name="extraemailfield">+</button>' +
                        '</div>' +

                        '<div class="buttons">' +
                            '<button type="submit" class="button save" id="savecontact" name="savecontact">Save Contact</button>' +
                            '<button type="reset" class="button cancel" id="cancel" name="cancel">Cancel</button>' +
                        '</div>' +
                    '</form>' +
                '</div>' +
            '</div>'

    document.body.appendChild(element1);

}