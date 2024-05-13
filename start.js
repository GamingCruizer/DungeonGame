document.body.innerHTML += `<html>
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UFT-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Whilly Wonka</title>
  </head>
  
  <body>
    <div id="version">V0.0.01</div>
    <div class="container">
      <h1>Whilly Wonka Game</h1>
      <p>Whilly Wonka Count: <span id="clickCount">0</span></p>
      <button id="clickButton">Click Whilly Wonka HERE!</button>
    </div>
  </body>

  <style>
    body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    text-align: center;
    }
    .container {
      margin-top: 50px;
    }
    h1 {
      color: #333;
    }
    button {
      padding: 10px 20px;
      font-size: 18px;
      background-color: #4caf50;
      color: #fff;
      border: none;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color: 0.3s ease;
    }
    button:hover {
      background-color: #45a049;
    }
    #version {
      position: absolute;
      top: 5px;;
      right: 5px;
    }
  </style>

  <script>
    let clickCount = 0;
    const clickButton = document.getElementById("clickButton");
    const clickCountDisplay = document.getElementById("clickCount");

    clickButton.addEventListener("click", () => {
      clickCount++;
      clickCountDisplay.innerHTML = clickCount;
    });
  </script>
  
  </html>
</html>`;
