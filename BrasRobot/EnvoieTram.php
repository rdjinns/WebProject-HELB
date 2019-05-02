
<?php

$q = $_REQUEST["q"];



if ($q != "") {
   
  $q= array("120","130","150","20","30","5");


   //echo shell_exec("sudo /var/www/html/BrasRobot/Trame.py " + $q[0] + " " + $q[1] + " " + $q[2] + " " + $q[3] + " " + $q[4] + " " + $q[5]); 
 // shell_exec("sudo python /var/www/html/BrasRobot/Trame.py $q[0] $q[1] $q[2] $q[3] $q[4] $q[5]"); 
   echo shell_exec("python /var/www/html/BrasRobot/Trame.py"); 
   ECHO 'test1';
?>
<script>console.log(<?php echo $q[1];?>)</script>
<?php
}
// Rajouter algorithme qui cheke si c des valeur entre 0 et 255

?> 
