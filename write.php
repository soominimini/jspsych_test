<!-- xampp start 켜서 server on 시킨 다음에 로컬 접속 -->

<!DOCTYPE html>
<html>
  <head>
    <title>수미니미니</title>
    <script src="jspsych.js"></script>
    <!-- js 파일 반영 바로바로 절대 안되니까 ?v=<%=System.currentTimeMillis() %> 이 코드로 현재시각을 계속 반영하게 되서 계속 호출하게 끔 -->
    <script src="test.js?v=<%=System.currentTimeMillis() %>"></script>
    <script src="plugins/jspsych-external-html.js"></script>
    <script src="plugins/jspsych-html-keyboard-response.js"></script>
    <script src="plugins/jspsych-image-keyboard-response.js"></script>
    <script src="plugins/jspsych-survey-html-form.js"></script>
    <script src="plugins/jspsych-survey-likert.js?v=<%=System.currentTimeMillis() %>"></script>
    <script src="plugins/jspsych-instructions.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link href="css/jspsych.css" rel="stylesheet" type="text/css"></link>
  </head>

  <script>
    var timeline = [];
    //instructions
        timeline.push(external_html);
        timeline.push(external_html2);
        timeline.push(external_html3);
        // timeline.push(data_save);
        //blurred picture
        timeline.push(likert_page);
        timeline.push(likert_page2);
        // timeline.push(likert_page3);
        // timeline.push(likert_page4);
        // timeline.push(likert_page5);
        // timeline.push(likert_page6);
        // timeline.push(likert_page7);
        // timeline.push(likert_page8);
        // timeline.push(likert_page9);
        // timeline.push(likert_page10);
        // timeline.push(likert_page11);
        // timeline.push(likert_page12);
        // timeline.push(likert_page13);
        // timeline.push(likert_page14);
        // timeline.push(likert_page15);
        // timeline.push(likert_page16);
        // timeline.push(likert_page17);
        // timeline.push(likert_page18);
        // timeline.push(likert_page19);
        // timeline.push(likert_page20);
        // timeline.push(likert_page21);
        // timeline.push(likert_page22);
        // timeline.push(likert_page23);
        // timeline.push(likert_page24);
        // timeline.push(likert_page25);
        // timeline.push(likert_page26);
        // timeline.push(likert_page27);
        // timeline.push(likert_page28);
        // timeline.push(likert_page29);
        // timeline.push(likert_page30);
        // timeline.push(likert_page31);
        // timeline.push(likert_page32);
        // timeline.push(likert_page33);
        // timeline.push(likert_page34);
        // timeline.push(likert_page35);
        // timeline.push(likert_page36);
        // timeline.push(likert_page37);
        // timeline.push(likert_page38);
        // timeline.push(likert_page39);
        // timeline.push(likert_page40);

        // // //원본 사진
        // timeline.push(likert_page_origin_1);
        // timeline.push(likert_page_origin_2);
        // timeline.push(likert_page_origin_3);
        // timeline.push(likert_page_origin_4);
        // timeline.push(likert_page_origin_5);
        // timeline.push(likert_page_origin_6);
        // timeline.push(likert_page_origin_7);
        // timeline.push(likert_page_origin_8);
        // timeline.push(likert_page_origin_9);
        // timeline.push(likert_page_origin_10);
        // timeline.push(likert_page_origin_11);
        // timeline.push(likert_page_origin_12);
        // timeline.push(likert_page_origin_13);
        // timeline.push(likert_page_origin_14);
        // timeline.push(likert_page_origin_15);
        // timeline.push(likert_page_origin_16);
        // timeline.push(likert_page_origin_17);
        // timeline.push(likert_page_origin_18);
        // timeline.push(likert_page_origin_19);
        // timeline.push(likert_page_origin_20);
        // timeline.push(likert_page_origin_21);
        // timeline.push(likert_page_origin_22);
        // timeline.push(likert_page_origin_23);
        // timeline.push(likert_page_origin_24);
        // timeline.push(likert_page_origin_25);
        // timeline.push(likert_page_origin_26);
        // timeline.push(likert_page_origin_27);
        // timeline.push(likert_page_origin_28);
        // timeline.push(likert_page_origin_29);
        // timeline.push(likert_page_origin_30);
        // timeline.push(likert_page_origin_31);
        // timeline.push(likert_page_origin_32);
        // timeline.push(likert_page_origin_33);
        // timeline.push(likert_page_origin_34);
        // timeline.push(likert_page_origin_35);
        // timeline.push(likert_page_origin_36);

         timeline.push(last_page);   
      //   timeline.push(trial_data);
         /* start the experiment */


//         function saveData(name, data){
          
//         // var xhr = new XMLHttpRequest();
//         // xhr.open('GET', 'http://www.soominimini.com/jspsych/test.php'); // 'write_data.php' is the path to the php file described above.
//         // // xhr.setRequestHeader('Content-Type', 'application/json');
//         // // xhr.send(JSON.stringify({filename: name, filedata: data}));
//         // xhr.send();




// }

// call the saveData function after the experiment is over
jsPsych.init({
        timeline: timeline,
   // code to define the experiment structure would go here...
  //  on_finish: function(){ saveData("test", jsPsych.data.get().csv());  }
});


  </script>
</html>
