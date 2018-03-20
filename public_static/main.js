/**
 * Created by nancykujur on 22/7/17.
 */
$("#create").click(function() {
    console.log("update");
    // var a= document.getElementById("id").value;

    window.location.href = "/create";

    console.log("heya");
    $.get({url:'create'},function () {
        // console.log("this is main" + data);
        console.log("this is main")

    });
});

$("#done").click(function(){
    var a = document.getElementById('title').value;
    // var w = document.getElementById('opt1').value;
    // var x = document.getElementById('opt2').value;
    // var y = document.getElementById('opt3').value;
    // var z = document.getElementById('opt4').value;
    l=[];
    for(var i =0;i<count;i++){
        var x=document.getElementById(i+1).value;
        if (x!==""){
            l.push(x);

        }

    }
    var data={title:a,'answer[]':l};
    $.post({url:'insert',data:data},function () {
        console.log("done");

    })

    $('.ques').css("display","none");
});

var count =4;

var ans = document.getElementById("answers");


function addOption(){
    count++;
    console.log("inside")
    var x= '<div class="makeMain">' +
            '<div class="options">' +
            '<input type="text" class="form-control" placeholder="Option '+ count +'"'+' id=' + count + '>' +
            '</div>' +
            '</div>'+'<br>';

    document.getElementById("answers").insertAdjacentHTML( "beforeend", x )
}
