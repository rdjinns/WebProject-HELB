
<?php

$a = $_REQUEST["a"];
$b = $_REQUEST["b"];
$c = $_REQUEST["c"];
$d = $_REQUEST["d"];
$e = $_REQUEST["e"];
$f = $_REQUEST["f"];




if ($a!='') {
   
  $q= array($a,$b,$c,$d,$e,$f);


   echo shell_exec("python /var/www/html/BrasRobot/Trame.py $q[0] $q[1] $q[2] $q[3] $q[4] $q[5]"); 

?>
<script>console.log(<?php echo $q[1];?>)</script>
<?php
}

?> 
