
<!--  $fp = fopen( "test.csv", "w" ) or die("test.csv 화일을 열수 없습니다") ; 
 fwrite($fp,data); // 타이틀 쓰고 
 fwrite($fp,$newline); // 줄바꾸기  -->

<?php
$post_data = json_decode(file_get_contents('php://input'), true); 
// the directory "data" must be writable by the server
$name = "data/".$post_data['filename'].".csv"; 
$data = $post_data['filedata'];
// write the file to disk
file_put_contents($name, $data);
?>