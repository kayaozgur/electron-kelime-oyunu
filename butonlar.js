let $=require('jquery')

        var abc = "A B C Ç D E F G Ğ H İ I J K L M N O Ö P R S Ş T U Ü V Y Z";
       // var klm = prompt("Kelime yada Cümle giriniz..\n(Büyük Harf Kullanın..)")
var klm ='DENEME';
        var kelime = klm.split("");

        var alfabe = abc.split(" ");
        var hata = 0;

        for (var i = 0; i < alfabe.length; i++) {

                var butonAbc = document.createElement("button");

                butonAbc.innerHTML = alfabe[i];

                document.getElementById('ust').appendChild(butonAbc);
                butonAbc.onclick = function () {

                        $(this).css("background", "red");



                        var harf = $(this).text();
                        var index = klm.indexOf(harf);

                        if (index == -1) {

                                hata++;
                                switch (hata) {
                                        case 1:
                                                kafa();
                                                break;
                                        case 2:
                                                govde();
                                                break;
                                        case 3:
                                                sagayak();
                                                break;
                                        case 4:
                                                solayak();
                                                break;
                                        case 5:
                                                sagel();
                                                break;
                                        case 6:
                                                solel();
                                                break;
                                        case 7:
                                                zemin();
                                                break;
                                        case 8:
                                                direkgovde();
                                                break;
                                        case 9:
                                                direkuc();
                                                break;
                                        case 10:
                                                ip();
                                                break;
                                        default:
                                                break;
                                }

                        } else {

                                for (var i = 0; i < klm.length; i++) {

                                        if (harf == klm[i]) {
                                                $('#' + i).text(harf);
                                        }


                                }
                        }





                };


        };

        for (var i = 0; i < kelime.length; i++) {

                var butonKelime = document.createElement("button");
                butonKelime.id = i;
                if (kelime[i] == " ") {
                        butonKelime.style.background = "black";

                }

                document.getElementById('ortasol').appendChild(butonKelime);


        }


        var mycanvas = document.getElementById('mycanvas');
        var ctx = mycanvas.getContext('2d');

        function kafa() {

                ctx.beginPath();
                ctx.strokeStyle = "black";
                ctx.lineWidth = 3;
                ctx.arc(300, 80, 30, 0 * Math.PI, 2 * Math.PI);
                ctx.stroke();
        }

        function govde() {

                ctx.beginPath();
                ctx.strokeStyle = "black";
                ctx.lineWidth = 3;
                ctx.moveTo(300, 110);
                ctx.lineTo(300, 250);
                ctx.stroke();
        }

        function sagayak() {

                ctx.beginPath();
                ctx.strokeStyle = "black";
                ctx.moveTo(300, 250);
                ctx.lineTo(250, 300);
                ctx.stroke();
        }

        function solayak() {

                ctx.beginPath();
                ctx.strokeStyle = "black";
                ctx.moveTo(300, 250);
                ctx.lineTo(350, 300);
                ctx.stroke();
        }

        function sagel() {

                ctx.beginPath();
                ctx.strokeStyle = "black";
                ctx.moveTo(300, 150);
                ctx.lineTo(250, 200);
                ctx.stroke();
        }

        function solel() {

                ctx.beginPath();
                ctx.strokeStyle = "black";
                ctx.moveTo(300, 150);
                ctx.lineTo(350, 200);
                ctx.stroke();
        }

        function zemin() {

                ctx.beginPath();
                ctx.strokeStyle = "black";
                ctx.moveTo(150, 300);
                ctx.lineTo(200, 300);
                ctx.stroke();
        }

        function direkgovde() {

                ctx.beginPath();
                ctx.strokeStyle = "black";
                ctx.moveTo(175, 20);
                ctx.lineTo(175, 300);
                ctx.stroke();
        }

        function direkuc() {

                ctx.beginPath();
                ctx.strokeStyle = "black";
                ctx.moveTo(173, 20);
                ctx.lineTo(320, 20);
                ctx.stroke();
        }

        function ip() {

                ctx.beginPath();
                ctx.strokeStyle = "black";
                ctx.moveTo(300, 20);
                ctx.lineTo(300, 50);
                ctx.stroke();
        }



























