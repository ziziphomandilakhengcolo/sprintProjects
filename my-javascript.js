<DOCTYPE html>
<html>
<head>
 <title>changeNavBarColor</title>
</head>

<body>
 <script src="getElementById.js"></script>
 var elem= document.getElementById('navbar');
 button onclick="changeColor('white');">white</button>
 <div style="width:100%; height:10px; background-color:solid black; z-index:104;
  background-attachment:fixed></div>
 
</body>
</html>

//JavaScript

function changeColor(newColor) {
  var elem = document.getElementById('navbar');
  elem.style.backgroundColor = newColor;
  }