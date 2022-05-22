function CreatePages(numberOfPages){
    // update the active page button
    const paginationList = document.getElementById("pagination");
    // go through te buttons one by one, add class "active" if it is current page
    for(var k = 0; k < paginationList.children.length; k++){
        if(k == (numberOfPages - 1)){
            paginationList.children[k].getElementsByTagName("a")[0].className = "active";
        }else{
            paginationList.children[k].getElementsByTagName("a")[0].className = "";
        }
    }

    // get all the contacts 
    const contactList = document.getElementsByClassName("contact-list");
    const indexList = [];

    // find out the index of contact that should be shown on that page
    for(var j = 0; j<10; j++){
        var index = (numberOfPages-1)*10 + j;
        // save those index into a list
        indexList.push(index);
    }

    for(var k = 0; k < contactList[0].children.length; k++){
        // check if the contact is in the list
        // if yes, display it
        if(indexList.includes(k)){
            contactList[0].children[k].style.display = "block";
        }
        // if no, hide it
        else{
            contactList[0].children[k].style.display = "none";
        }
    }
}

function CreateButtons(){
    var numberOfContact = document.getElementsByClassName("contact-item").length;
    var numberOfPages = Math.ceil(numberOfContact/10); 

    // create the pagination
    for(var i = 1; i <= numberOfPages; i++){
        document.getElementById("pagination").innerHTML += '<li><a href="javascript:CreatePages('+ i +');">'+ i +'</li>';
    }
    CreatePages(1);
}

window.onload = CreateButtons;

