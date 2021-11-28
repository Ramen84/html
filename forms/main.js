console.log("existo");

function validacion() {

    //Suggestions free
    var summary1 = document.getElementById("summary1").value;
    if(summary1.length < 10) {
        alert('has escrito menos de 10');
        return;
    }
    console.log("🙋‍♀️ " + summary1);

    //Suggestions numbers
    var summary2 = document.getElementById("summary2").value;
    console.log("💁‍♀️ " + summary2)
    if( isNaN(summary2) ) {
    return false;
    }
    

}
