var down = true;
//#intro, #edu, #teach, #intern, #projects, #events, #resume
var allDivID = ["intro", "edu", "teach", "intern", "resume"];

function toggler(divId) {
    if (down === true) {
        $("#" + divId).slideDown('slow');
        down=false;
    } else {
        $("#" + divId).slideUp('slow');
        down=true;
    }
}

function toggleVisibility(divID, color, num) {
    console.log("run");
    $('h3').css('color', 'darkgrey');
//    $('introLabel').css('color', 'darkgrey');


    for (var i = 0; i < allDivID.length; i++) {
        console.log(allDivID[i]);
        var e = document.getElementById(allDivID[i]);
        e.style.display = 'none';

        var id = allDivID[i] + "Label";
        document.getElementsByClassName(id)[num].style.color = 'darkgrey';
    }

    var e = document.getElementById(divID);
    e.style.display = 'block';

    var id = divID + "Label";
    document.getElementsByClassName(id)[num].style.color = color;
}

