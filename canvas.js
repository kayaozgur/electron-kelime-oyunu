
let $=require('jquery')

    var mycanvas = document.getElementById("mycanvas");
    var ctx = mycanvas.getContext("2d");
    
    function kafa() {

        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.arc(100, 100, 30, 0 * Math.PI, 2 * Math.PI);
        ctx.moveTo(100,150);
        ctx.lineTo(100,250);
        ctx.stroke();
    }

    function govde() {
            
                    ctx.beginPath();
                    ctx.strokeStyle = "red";
                    ctx.moveTo(100,130);
                    ctx.lineTo(100,250);
                    ctx.stroke();
                }



