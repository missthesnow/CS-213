<!DOCTYPE html>
<html lang = "en">
  <meta charset = "utf-8" />
  <title>Mortgage Calculator PHP</title>
  <body>
    <h3>Caclulation Complete: <br />
      <?php
        $field1 = $_GET['apr'];
        $field2 = $_GET['term'];
        $field3 = $_GET['amount'];
        $monthRate = $_GET['apr'] / 1200; 
        $numPayments = $_GET['term'] * 12;
        $amount = $_GET['amount'];
        $monthlyPay = $amount * (($monthRate * ((1 + $monthRate) ** $numPayments))/(((1 + $monthRate) ** $numPayments) - 1));
        $monthlyPay = round($monthlyPay, 2);
        print "APR: $field1<br />";
        print "Term: $field2<br />";
        print "Amount: $field3<br />";
        print "Monthly Payment: $monthlyPay<br />";
      ?>  
    </h3>
  </body>
</html>

