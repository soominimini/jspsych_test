
/* define welcome message trial */
var welcome1 = {
    type: "html-keyboard-response",
    stimulus: "이 실험은 ~~~에 대한 것입니다. 실험을 시작하려면 버튼을 누르세요"
  };
  var welcome2 = {
    type: "html-keyboard-response",
    stimulus: "다음과 같은 ~~가 나옵니다. 이 중에서 가장 사진의 사람의 감정과 가까운 것을 고르세요"
  };
 /* define instructions trial */
 var instructions = {
    type: "html-keyboard-response",
    stimulus: "<p>다음과 같은 ~~가 나옵니다.</p>"+
        "<p>If the circle is <strong>blue</strong>, " +
        "press the letter F on the keyboard as fast as you can.</p>" +
        "<p>If the circle is <strong>orange</strong>, press the letter J " +
        "as fast as you can.</p>" +
        "<div style='width: 100%;' >"+
        "<img src='img/SAM.png' style = 'width : 80%;'></img>" +
        "<p class='small'><strong>Press the F key</strong></p></div>" +
        "<div class='float: right;'><img src='img/orange.png'></img>" +
        "<p class='small'><strong>Press the J key</strong></p></div>" +
        "</div>"+
        "<p>Press any key to begin.</p>",
    // post_trial_gap: 2000
  };

  var trial = {
    type: 'html-keyboard-response',
    stimulus: 'This is a new trial.'
  }
  
  var new_timeline = {
    timeline: [trial]
  }
  
  var scale_1 = [
    " ", 
    " ", 
    " ", 
    " ", 
    " ",

  ];
  
  var likert_page = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data1', labels: scale_1},
      {prompt: "I like fruit.", name: 'data1', labels: scale_1},
      {prompt: "I like meat.", name: 'data1', labels: scale_1}
    ],
    // randomize_question_order: true //질문 순서 랜덤
  };
  var likert_page2 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data2', labels: scale_1},
      {prompt: "I like fruit.", name: 'data2', labels: scale_1},
      {prompt: "I like meat.", name: 'data2', labels: scale_1}
    ],
    // randomize_question_order: true //질문 순서 랜덤
  };

  var likert_page3 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data3', labels: scale_1},
      {prompt: "I like fruit.", name: 'data3', labels: scale_1},
      {prompt: "I like meat.", name: 'data3', labels: scale_1}
    ],
    // randomize_question_order: true //질문 순서 랜덤
  };
  var likert_page4 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data4', labels: scale_1},
      {prompt: "I like fruit.", name: 'data4', labels: scale_1},
      {prompt: "I like meat.", name: 'data4', labels: scale_1}
    ],
    // randomize_question_order: true //질문 순서 랜덤
  };


  function downloadCSV(){

    console.log(global_dict.length);
    var array = [];
    // array.push({name:"name1", age: 20, test: "test1"});
    // array.push({name:"name2", age: 22, test: "test2"});
    // array.push({name:"name3", age: 24, test: "test3"});
    


    var a = "";
    // $.each(array, function(i, item){
    // 	a += item.name + "," + item.age + "," + item.test + "\r\n";
    // });
    
    for(var i =0; i<global_dict.length; i++){
        a+=global_dict[i]+",";
    }

    // jquery 사용하지 않는 경우
    /* for(var i=0; i<array.length; i++){
        a += array[i].name + "," + array[i].age + "," + array[i].test + "\r\n";
    } */

    var downloadLink = document.createElement("a");
    var blob = new Blob([a], { type: "text/csv;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.download = "data.csv";
    // downloadLink.

    document.body.appendChild(downloadLink);
    downloadLink.click();
document.body.removeChild(downloadLink);

}

function getData(){
var all_data = jsPsych.data.get();
// get csv representation of data and log to console
console.log(all_data.csv());
var tmp_all_data = jsPsych.data.get().csv();
console.log(tmp_all_data.length);
var jbSplit = tmp_all_data.split(',');
for(var i  in jbSplit){
  document.write( '<p>' + jbSplit[i] + '</p>' );
}
//리커트 응답만 추출
// csv에 저장
saveData("experiment_data", jsPsych.data.get().csv())
}
function saveData(name, data){
    // console.log("들어옴");
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'write_data_tmp.php'); // 'write_data.php' is the path to the php file described above.
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({filename: name, filedata: data}));
}


  //last page
  var last_page = {
    type: 'instructions',
    pages: [
        '<p>테스트가 종료 되었습니다</p>'+
        "종료 버튼을 눌러 주세요" +
        '<p> <button onclick="downloadCSV();">download</button></p>'+
        ' <button onclick=" getData();">submit</button>'
    ]
    // show_clickable_nav: true
  }
