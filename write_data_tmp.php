<?php
// $post_data = json_decode(file_get_contents('php://input'), true); 
// $post_data = file_get_contents('php://input'); 
// echo ($post_data);
// // the directory "data" must be writable by the server
// $name = "data/test.csv"; 
// // $name = "test.csv";
// $data = $post_data['filedata'];
// // write the file to disk
// file_put_contents($name, $data);
// $name = $_GET["filename"];




// 디렉토리에 있는 파일과 디렉토리의 갯수 구하기
$result=opendir("data"); //opendir함수를 이용해서 bbs디렉토리의 핸들을 얻어옴
// readdir함수를 이용해서 bbs디렉토리에 있는 디렉토리와 파일들의 이름을 배열로 읽어들임
while($file=readdir($result)) {
   
   $fileInfo = pathinfo($file);
   $fileExt = $fileInfo['extension']; // 파일의 확장자를 구함

   If (!empty($fileExt)){
    $file_count++;// 파일에 확장자가 있으면 file_count를 증가시킴
 }


 }

 $file_count-=1; //디렉토리 개수 하나 빼기?

$name = "data/".$_POST["filename"].$file_count.".csv";
file_put_contents($name ,$_POST["filedata"]) ;

// echo( "test2:". ($_POST["filedata"]) );
?>