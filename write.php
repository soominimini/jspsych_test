<!-- xampp start 켜서 server on 시킨 다음에 로컬 접속 -->

<!DOCTYPE html>
<html>
  <head>
    <title>제대로 좀 하자</title>
    <script src="jspsych.js"></script>
    <script src="test.js"></script>
    <script src="plugins/jspsych-html-keyboard-response.js"></script>
    <script src="plugins/jspsych-image-keyboard-response.js"></script>
    <script src="plugins/jspsych-survey-html-form.js"></script>
    <script src="plugins/jspsych-survey-likert.js"></script>
    <script src="plugins/jspsych-instructions.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link href="css/jspsych.css" rel="stylesheet" type="text/css"></link>
  </head>
  <script>
    var timeline = [];
        timeline.push(likert_page);
        timeline.push(likert_page2);
        timeline.push(likert_page3);
        timeline.push(likert_page4);
        timeline.push(likert_page5);
        timeline.push(likert_page6);
        timeline.push(likert_page7);
        timeline.push(likert_page8);
        timeline.push(likert_page9);
        timeline.push(likert_page10);
        //원본 사진
        timeline.push(likert_page_origin_1);
        timeline.push(likert_page_origin_2);
        timeline.push(likert_page_origin_3);
        timeline.push(likert_page_origin_4);
        timeline.push(likert_page_origin_5);
        timeline.push(likert_page_origin_6);
        timeline.push(likert_page_origin_7);
        timeline.push(likert_page_origin_8);
        timeline.push(likert_page_origin_9);
        timeline.push(likert_page_origin_10);
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
         timeline.push(last_page);   
      //   timeline.push(trial_data);
         /* start the experiment */
        function saveData(name, data){
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'write_data_tmp.php'); // 'write_data.php' is the path to the php file described above.
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({filename: name, filedata: data}));

}



// call the saveData function after the experiment is over
jsPsych.init({
        timeline: timeline,
   // code to define the experiment structure would go here...
   on_finish: function(){ saveData("test", jsPsych.data.get().csv()); }
});

  </script>
</html>
