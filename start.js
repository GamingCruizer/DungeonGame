document.body.innerHTML += `<html>
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UFT-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Whilly Wonka</title>
  </head>
  
  <body>
    <div class="needForClicks">
  	  <h1 class="gameName">Totally Awesome Clicker!</h1>
      <p>Dolla Bills: <span id="bills">0</span></p>
      <button id="buttonAdd" onclick="add()">Bills Added Per Click: +<span id="buttonAddTotal">1</span></button>
    </div>
  </body>



  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      text-align: center;
    }
    /* NeedForClicks Div Element */
    .needForClicks {
      margin-top: 50px;
    }
    #buttonAdd {
      padding: 10px 20px;
      font-size: 18px;
      background-color: #4caf50;
      color: #fff;
      border: 1px solid black;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }
    #buttonAdd:hover {
      background-color: #45a049;
    }
  </style>



  <script>
    let billCount = 0;
    const bills = document.getElementById("bills");
    
    function add() {
      billCount++;
      bills.innerHTML = billCount;
    }
    
  </script>
  
  </html>
</html>`;
