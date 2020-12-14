function resetForm() {
    document.getElementById("registration").reset();
    document.getElementById("first_name").focus();
    document.getElementById("error").innerHTML = "";
 }
 
 function makeRequest() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       document.getElementById("response").innerHTML = this.responseText;}
    };
    xmlhttp.open("Post", "assign13.php", true);
    xmlhttp.send();
 }
 
 function check(){
    document.getElementById("error").innerHTML = ""
    var radio1 = document.querySelectorAll('input[name="performance"]');
    var numchecks = 0;
    var isduet = false;
    var fname = document.getElementById("first_name").value;
    var lname = document.getElementById("last_name").value;
    var studID = document.getElementById("student_id").value;
    var fname2 = document.getElementById("first_name_2").value;
    var lname2 = document.getElementById("last_name_2").value;
    var studID2 = document.getElementById("student_id_2").value;
    var bldg = document.getElementById("location").value;
    var room = document.getElementById("room").value;
    var time = document.getElementById("time").value;
    for (var i = 0; i < radio1.length; i++) {
       if (!radio1[i].checked) {
          numchecks += 1;
       }
       if (i == 1 && radio1[i].checked) {
          isduet = true;
       }
    }
    if (numchecks == 3) {
       document.getElementById("error").innerHTML = "Please Select Performance Type";
       return false;
    } else if (fname == "") {
       document.getElementById("error").innerHTML = "Please Enter Your First Name";
       document.getElementById("first_name").focus();
       return false;
    } else if (lname == "") {
       document.getElementById("error").innerHTML = "Please Enter Your Last Name";
       document.getElementById("last_name").focus();
       return false;
    } else if (studID == "") {
       document.getElementById("error").innerHTML = "Please Enter Your Student ID";
       document.getElementById("student_id").focus();
       return false;
    } else if (isduet) {
       if (fname2 == "") {
          document.getElementById("error").innerHTML = "Please Enter Partner's First Name";
          document.getElementById("first_name_2").focus();
          return false;
       } else if (lname2 == "") {
          document.getElementById("error").innerHTML = "Please Enter Partner's Last Name";
          document.getElementById("last_name_2").focus();
          return false;
       } else if (studID2 == "") {
          document.getElementById("error").innerHTML = "Please Enter Partner's Student ID";
          document.getElementById("student_id_2").focus();
          return false;
       }
    } else if (document.getElementById("skill_level").value == "noValue") {
       document.getElementById("error").innerHTML = "Please Select Diffuculty Level";
       document.getElementById("skill_level").focus();
       return false;
    } else if (document.getElementById("instrument").value == "noValue") {
       document.getElementById("error").innerHTML = "Please Select An Instrument";
       document.getElementById("instrument").focus();
       return false;
    } else if (bldg == "") {
       document.getElementById("error").innerHTML = "Please Enter Building Location";
       document.getElementById("location").focus();
       return false;
    } else if (room == "" ) {
       document.getElementById("error").innerHTML = "Please Enter Room Number";
       document.getElementById("room").focus();
       return false;
    } else if (time == "") {
       document.getElementById("error").innerHTML = "Please Enter Time";
       document.getElementById("time").focus();
       return false;
    } else {
       return true;
    }
 }
 function isDuet() {
    if (document.getElementById("duet").checked) {
       document.getElementById("duet_info").style.display = "inline";
       return true;
    } else {
       document.getElementById("duet_info").style.display = "none";
       return false;
    }
 }
 