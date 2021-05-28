var text1, text2, text3, text4,
  number1, number2, number3, number4,
  color1, color2, color3, color4,
  icon1, icon2, icon3, icon4,
  check1, check2, check3, check4;

icon1 = document.getElementsByClassName('icon1');
icon2 = document.getElementsByClassName('icon2');
icon3 = document.getElementsByClassName('icon3');
icon4 = document.getElementsByClassName('icon4');

function action() {

  text1 = document.getElementById('text1').value;
  text2 = document.getElementById('text2').value;
  text3 = document.getElementById('text3').value;
  text4 = document.getElementById('text4').value;
  number1 = document.getElementById('number1').value;
  number2 = document.getElementById('number2').value;
  number3 = document.getElementById('number3').value;
  number4 = document.getElementById('number4').value;
  color1 = document.getElementById('color1').value;
  color2 = document.getElementById('color2').value;
  color3 = document.getElementById('color3').value;
  color4 = document.getElementById('color4').value;
  check1 = document.getElementById('check1');
  check2 = document.getElementById('check2');
  check3 = document.getElementById('check3');
  check4 = document.getElementById('check4');
  if (text1 == "" || text2 == "" || text3 == "" || text3 == "" || number1 == "" || number2 == "" || number3 == "" || number4 == "" || number1 <= 0 || number2 <= 0 || number3 <= 0 || number4 <= 0) {
    document.getElementById('alert').style.display = "block";

    if (text1 == "") {
      var mess = document.createElement('h2');
      var br = document.createElement('br');
      var cont = document.createTextNode("1st Data Dont allow To be empty ");
      mess.appendChild(cont);
      mess.appendChild(br);
      document.getElementById('alert').appendChild(mess);
    }
    if (text2 == "") {
      var mess = document.createElement('h2');
      var br = document.createElement('br');
      var cont = document.createTextNode("2st Data Dont allow To be empty");
      mess.appendChild(cont);
      mess.appendChild(br);
      document.getElementById('alert').appendChild(mess);
    }
    if (text3 == "") {
      var mess = document.createElement('h2');
      var br = document.createElement('br');
      var cont = document.createTextNode("3st Data Dont allow To be empty");
      mess.appendChild(cont);
      mess.appendChild(br);
      document.getElementById('alert').appendChild(mess);
    }
    if (text4 == "") {
      var mess = document.createElement('h2');
      var br = document.createElement('br');
      var cont = document.createTextNode("4st Data Dont allow To be empty");
      mess.appendChild(cont);
      mess.appendChild(br);
      document.getElementById('alert').appendChild(mess);
    }
    if (number1 == "" || number1 <= 0) {
      var mess = document.createElement('h2');
      var br = document.createElement('br');
      var cont = document.createTextNode("1 st percentage Dont allow To be empty and must be greater than Zero");
      mess.appendChild(cont);
      mess.appendChild(br);
      document.getElementById('alert').appendChild(mess);
    }
    if (number2 == "" || number2 <= 0) {
      var mess = document.createElement('h2');
      var br = document.createElement('br');
      var cont = document.createTextNode("2 st percentage Dont allow To be empty and must be greater than Zero");
      mess.appendChild(cont);
      mess.appendChild(br);
      document.getElementById('alert').appendChild(mess);
    }
    if (number3 == "" || number3 <= 0) {
      var mess = document.createElement('h2');
      var br = document.createElement('br');
      var cont = document.createTextNode("3 st percentage Dont allow To be empty and must be greater than Zero");
      mess.appendChild(cont);
      mess.appendChild(br);
      document.getElementById('alert').appendChild(mess);
    }
    if (number4 == "" || number4 <= 0) {
      var mess = document.createElement('h2');
      var br = document.createElement('br');
      var cont = document.createTextNode("4 st percentage Dont allow To be empty and must be greater than Zero");
      mess.appendChild(cont);
      mess.appendChild(br);
      document.getElementById('alert').appendChild(mess);
    }




  } else {
    document.getElementById('alert').style.display = "none";
    if (check1.checked) {
      document.getElementById("Pie-Chart").style.display = "block";
    }

    if (check2.checked) {
      document.getElementById("doughnut-Chart").style.display = "block";
    }
    if (check3.checked) {
      document.getElementById("line-chart").style.display = "block";
    }

    if (check4.checked) {
      document.getElementById("bar-chart").style.display = "block";
    }



    icon1[0].style.color = color1;
    icon1[1].style.color = color1;
    icon1[2].style.color = color1;
    icon1[3].style.color = color1;
    icon1[0].nextElementSibling.innerHTML = text1 + number1 + '%';
    icon1[1].nextElementSibling.innerHTML = text1 + number1 + '%';
    icon1[2].nextElementSibling.innerHTML = text1 + number1 + '%';
    icon1[3].nextElementSibling.innerHTML = text1 + number1 + '%';
    /////////////////////////
    icon2[0].style.color = color2;
    icon2[1].style.color = color2;
    icon2[2].style.color = color2;
    icon2[3].style.color = color2;
    icon2[0].nextElementSibling.innerHTML = text2 + number2 + '%';
    icon2[1].nextElementSibling.innerHTML = text2 + number2 + '%';
    icon2[2].nextElementSibling.innerHTML = text2 + number2 + '%';
    icon2[3].nextElementSibling.innerHTML = text2 + number2 + '%';
    //////////////////////////
    icon3[0].style.color = color3;
    icon3[1].style.color = color3;
    icon3[2].style.color = color3;
    icon3[3].style.color = color3;
    icon3[0].nextElementSibling.innerHTML = text3 + number3 + '%';
    icon3[1].nextElementSibling.innerHTML = text3 + number3 + '%';
    icon3[2].nextElementSibling.innerHTML = text3 + number3 + '%';
    icon3[3].nextElementSibling.innerHTML = text3 + number3 + '%';
    ////////////////////////////
    icon4[0].style.color = color4;
    icon4[1].style.color = color4;
    icon4[2].style.color = color4;
    icon4[3].style.color = color4;
    icon4[0].nextElementSibling.innerHTML = text4 + number4 + '%';
    icon4[1].nextElementSibling.innerHTML = text4 + number4 + '%';
    icon4[2].nextElementSibling.innerHTML = text4 + number4 + '%';
    icon4[3].nextElementSibling.innerHTML = text4 + number4 + '%';


    console.log(text1);
    new Chartist.Bar('#chartActivity2', {
      labels: [text1, text2, text3, text4],
      series: [number1, number2, number3, number4]
    }, {
      distributeSeries: true,
      low: 0,
      high: 100
    });
    /////////////////////////


    Chartist.Pie('#chartPreferences', {
      labels: [number1 + '%', number2 + '%', number3 + '%', number4 + '%'],
      series: [number1, number2, number3, number4]
    });
    //////////////////////////
    new Chartist.Pie('#chartPreferences2', {
      labels: [number1 + '%', number2 + '%', number3 + '%', number4 + '%'],
      series: [number1, number2, number3, number4]
    }, {
      donut: true,
      donutWidth: 60,
      donutSolid: true,
      startAngle: 270,
      showLabel: true
    });
    new Chartist.Line('#chartActivity', {
      labels: [text1, text2, text3, text4],
      series: [
        [number1, number2, number3, number4]
      ]



    }, {
      low: 0,
      showArea: true
    });
  }
}

