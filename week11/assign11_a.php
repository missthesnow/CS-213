<!DOCTYPE html>
<html lang = "en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>PHP Form Processing</title>
      <link rel="stylesheet" href="assign11style.css">
   </head>
   <body>
      <?php
         $action = $_POST['action'];
         print "<h1>Order has been $action" . "ed<h1>";
      ?>
   </body>
</html>