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
         timeline.push(last_page);   
      //   timeline.push(trial_data);
         /* start the experiment */
        function saveData(name, data){
        console.log("들어옴");
        console.log(data);  

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
