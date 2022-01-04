<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <link rel="stylesheet" href="style_insert.css">
  <link rel="stylesheet" href="styleDD.css">

  <title>InsertZT</title>

</head>

<body>
  <div class="page">
    <div class="clickEvent">
      <button class="btn1" id="btn_a">text !</button>
      <button class="btn2" id="btn_b">image !</button>
      <button class="btn3" id="btn_c">forme !</button>
      <button class="btn4" id="btn_d">bouton !</button>
    </div>
  </div>
  <button id='sauvegarder_texte'>sauvegarder le texte</button>
  <script type="text/javascript">
    function recup_texte (id){
      propriete = document.getElementById(id);
      console.log(propriete);
      let texte = [id, propriete];
      return texte;
    }
    let bouton_sauvegarder = document.getElementById("sauvegarder_texte");
    bouton_sauvegarder.onclick = texte = recup_texte(1);
    console.log(texte);
    
  </script>
  <script src="./script_insert.js" type="text/javascript" ></script>
  <script src="scriptDD.js"></script>
</body>
</html>

