<!DOCTYPE html>
<html lang = "en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>PHP Form Processing</title>
      <link rel="stylesheet" href="assign11style.css">
   </head>
   <body>
      <h1>Purchase Confirmation Page</h1>
      <h2>Order Information Recieved:</h2>
      <?php
         $name = $_POST['first_name'] . " " . $_POST['last_name'];
         $address = $_POST['address'];
         $phoneNum = $_POST['phone'];
         $cardType = $_POST['card'];
         $cardNum = $_POST['credit_card'];
         $cardExp = $_POST['exp_date'];
         print "<p>First Name: $name</p>";
         print "<p>Last Address: $address</p>";
         print "<p>Phone Number: $phoneNum</p>";
         print "<p>Credit Card Type: $cardType</p>";
         print "<p>Credit Card #: $cardNum</p>";
         print "<p>Expiration Date: $cardExp</p>"
      ?>  
      <form action="assign11_a.php" method="POST">
         <input type="submit" name="action" value="Confirm">
         <input type="submit" name="action" value="Cancel">
      </form>
   </body>
</html>