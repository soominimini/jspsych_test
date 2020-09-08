
/* define welcome message trial */
var global_name  = "";
// var user_name_func = function(elem) {
//   var name = document.getElementById('user_name');
//   var btn = document.getElementById('start');
// if (btn.clicked()== true) {
//   getName(name);
// return true;
// }
// };

var external_html = {
  type:"external-html",
  url: "instruction_page.html",
  cont_btn: "start",
  cont_key: 1,
  // execute_script : true,
  // check_fn: user_name_func
};
var external_html2 = {
  type:"external-html",
  url: "instruction_page2.html",
  cont_btn: "start",
  cont_key: 1,
  // execute_script : true,
  // check_fn: user_name_func
};
var external_html3 = {
  type:"external-html",
  url: "instruction_page3.html",
  cont_btn: "start",
  cont_key: 1,
  // execute_script : true,
  // check_fn: user_name_func
};
var data_save ={
  type: 'call-function',
  func: saveDBdata
};
 /* define instructions trial */

var trial = {

  type : 'html-keyboard-response',
  stimulus : 'This is a new trial'
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
    " ",
    " "

  ];
  
  var likert_page = {
    type: 'survey-likert',
    questions: [
      {name: 'data1', labels: scale_1},
      { name: 'data1', labels: scale_1}
      // {name: 'data1', labels: scale_1}
    ],
    // randomize_question_order: true //질문 순서 랜덤
  };
  var likert_page2 = {
    type: 'survey-likert',
    questions: [
      { name: 'data2', labels: scale_1},
      { name: 'data2', labels: scale_1},
      { name: 'data2', labels: scale_1}
    ],
    // randomize_question_order: true //질문 순서 랜덤
  };

  var likert_page3 = {
    type: 'survey-likert',
    questions: [
      { name: 'data3', labels: scale_1},
      {name: 'data3', labels: scale_1},
      { name: 'data3', labels: scale_1}
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
  var likert_page5 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data5', labels: scale_1},
      {prompt: "I like fruit.", name: 'data5', labels: scale_1},
      {prompt: "I like meat.", name: 'data5', labels: scale_1}
    ]
  };

  var likert_page6 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data6', labels: scale_1},
      {prompt: "I like fruit.", name: 'data6', labels: scale_1},
      {prompt: "I like meat.", name: 'data6', labels: scale_1}
    ]
  };

  var likert_page5 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data5', labels: scale_1},
      {prompt: "I like fruit.", name: 'data5', labels: scale_1},
      {prompt: "I like meat.", name: 'data5', labels: scale_1}
    ]
  };

  var likert_page7 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data7', labels: scale_1},
      {prompt: "I like fruit.", name: 'data7', labels: scale_1},
      {prompt: "I like meat.", name: 'data7', labels: scale_1}
    ]
  };

  var likert_page8 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data8', labels: scale_1},
      {prompt: "I like fruit.", name: 'data8', labels: scale_1},
      {prompt: "I like meat.", name: 'data8', labels: scale_1}
    ]
  };

  var likert_page9 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data9', labels: scale_1},
      {prompt: "I like fruit.", name: 'data9', labels: scale_1},
      {prompt: "I like meat.", name: 'data9', labels: scale_1}
    ]
  };

  var likert_page10 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data10', labels: scale_1},
      {prompt: "I like fruit.", name: 'data10', labels: scale_1},
      {prompt: "I like meat.", name: 'data10', labels: scale_1}
    ]
  };
  var likert_page11 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data11', labels: scale_1},
      {prompt: "I like fruit.", name: 'data11', labels: scale_1},
      {prompt: "I like meat.", name: 'data11', labels: scale_1}
    ]
  };
  var likert_page12 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data12', labels: scale_1},
      {prompt: "I like fruit.", name: 'data12', labels: scale_1},
      {prompt: "I like meat.", name: 'data12', labels: scale_1}
    ]
  };
  var likert_page13 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data13', labels: scale_1},
      {prompt: "I like fruit.", name: 'data13', labels: scale_1},
      {prompt: "I like meat.", name: 'data13', labels: scale_1}
    ]
  };
  var likert_page14 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data14', labels: scale_1},
      {prompt: "I like fruit.", name: 'data14', labels: scale_1},
      {prompt: "I like meat.", name: 'data14', labels: scale_1}
    ]
  };
  var likert_page15 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data15', labels: scale_1},
      {prompt: "I like fruit.", name: 'data15', labels: scale_1},
      {prompt: "I like meat.", name: 'data15', labels: scale_1}
    ]
  };
  var likert_page16 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data16', labels: scale_1},
      {prompt: "I like fruit.", name: 'data16', labels: scale_1},
      {prompt: "I like meat.", name: 'data16', labels: scale_1}
    ]
  };
  var likert_page17 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data17', labels: scale_1},
      {prompt: "I like fruit.", name: 'data17', labels: scale_1},
      {prompt: "I like meat.", name: 'data17', labels: scale_1}
    ]
  };
  var likert_page18 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data18', labels: scale_1},
      {prompt: "I like fruit.", name: 'data18', labels: scale_1},
      {prompt: "I like meat.", name: 'data18', labels: scale_1}
    ]
  };
  var likert_page19 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data19', labels: scale_1},
      {prompt: "I like fruit.", name: 'data19', labels: scale_1},
      {prompt: "I like meat.", name: 'data19', labels: scale_1}
    ]
  };
  var likert_page20 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data20', labels: scale_1},
      {prompt: "I like fruit.", name: 'data20', labels: scale_1},
      {prompt: "I like meat.", name: 'data20', labels: scale_1}
    ]
  };
  var likert_page21 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data21', labels: scale_1},
      {prompt: "I like fruit.", name: 'data21', labels: scale_1},
      {prompt: "I like meat.", name: 'data21', labels: scale_1}
    ]
  };
  var likert_page22 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data22', labels: scale_1},
      {prompt: "I like fruit.", name: 'data22', labels: scale_1},
      {prompt: "I like meat.", name: 'data22', labels: scale_1}
    ]
  };
  var likert_page23 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data23', labels: scale_1},
      {prompt: "I like fruit.", name: 'data23', labels: scale_1},
      {prompt: "I like meat.", name: 'data23', labels: scale_1}
    ]
  };
  var likert_page24 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data24', labels: scale_1},
      {prompt: "I like fruit.", name: 'data24', labels: scale_1},
      {prompt: "I like meat.", name: 'data24', labels: scale_1}
    ]
  };
  var likert_page25 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data25', labels: scale_1},
      {prompt: "I like fruit.", name: 'data25', labels: scale_1},
      {prompt: "I like meat.", name: 'data25', labels: scale_1}
    ]
  };
  var likert_page26 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data26', labels: scale_1},
      {prompt: "I like fruit.", name: 'data26', labels: scale_1},
      {prompt: "I like meat.", name: 'data26', labels: scale_1}
    ]
  };
  var likert_page27 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data27', labels: scale_1},
      {prompt: "I like fruit.", name: 'data27', labels: scale_1},
      {prompt: "I like meat.", name: 'data27', labels: scale_1}
    ]
  };
  var likert_page28 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data28', labels: scale_1},
      {prompt: "I like fruit.", name: 'data28', labels: scale_1},
      {prompt: "I like meat.", name: 'data28', labels: scale_1}
    ]
  };
  var likert_page29 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data29', labels: scale_1},
      {prompt: "I like fruit.", name: 'data29', labels: scale_1},
      {prompt: "I like meat.", name: 'data29', labels: scale_1}
    ]
  };
  var likert_page30 = {
    type: 'survey-likert',
    questions: [
      {name: 'data30', labels: scale_1},
      { name: 'data30', labels: scale_1},
      { name: 'data30', labels: scale_1}
    ]
  };
  var likert_page31 = {
    type: 'survey-likert',
    questions: [
      {name: 'data31', labels: scale_1},
      { name: 'data31', labels: scale_1},
      { name: 'data31', labels: scale_1}
    ]
  };
  var likert_page32 = {
    type: 'survey-likert',
    questions: [
      {name: 'data32', labels: scale_1},
      { name: 'data32', labels: scale_1},
      { name: 'data32', labels: scale_1}
    ]
  };
  var likert_page33 = {
    type: 'survey-likert',
    questions: [
      {name: 'data33', labels: scale_1},
      { name: 'data33', labels: scale_1},
      { name: 'data33', labels: scale_1}
    ]
  };

  var likert_page34 = {
    type: 'survey-likert',
    questions: [
      {name: 'data34', labels: scale_1},
      { name: 'data34', labels: scale_1},
      { name: 'data34', labels: scale_1}
    ]
  };

  var likert_page35 = {
    type: 'survey-likert',
    questions: [
      {name: 'data35', labels: scale_1},
      { name: 'data35', labels: scale_1},
      { name: 'data35', labels: scale_1}
    ]
  };
  var likert_page36 = {
    type: 'survey-likert',
    questions: [
      {name: 'data36', labels: scale_1},
      { name: 'data36', labels: scale_1},
      { name: 'data36', labels: scale_1}
    ]
  };
  var likert_page37 = {
    type: 'survey-likert',
    questions: [
      {name: 'data37', labels: scale_1},
      { name: 'data37', labels: scale_1},
      { name: 'data37', labels: scale_1}
    ]
  };
  var likert_page38 = {
    type: 'survey-likert',
    questions: [
      {name: 'data38', labels: scale_1},
      { name: 'data38', labels: scale_1},
      { name: 'data38', labels: scale_1}
    ]
  };
  var likert_page39 = {
    type: 'survey-likert',
    questions: [
      {name: 'data39', labels: scale_1},
      { name: 'data39', labels: scale_1},
      { name: 'data39', labels: scale_1}
    ]
  };
  var likert_page40 = {
    type: 'survey-likert',
    questions: [
      {name: 'data40', labels: scale_1},
      { name: 'data40', labels: scale_1},
      { name: 'data40', labels: scale_1}
    ]
  };

// 원본 사진 샘플

var likert_page_origin_1 = {
    type: 'survey-likert',
    questions: [
      {name: 'origin1', labels: scale_1},
      { name: 'origin1', labels: scale_1},
      { name: 'origin1', labels: scale_1}
    ]
  };
  
var likert_page_origin_2 = {
    type: 'survey-likert',
    questions: [
      { name: 'origin2', labels: scale_1},
      { name: 'origin2', labels: scale_1},
      {name: 'origin2', labels: scale_1}
    ]
  };
  
var likert_page_origin_3 = {
    type: 'survey-likert',
    questions: [
      { name: 'origin3', labels: scale_1},
      { name: 'origin3', labels: scale_1},
      { name: 'origin3', labels: scale_1}
    ]
  };
  var likert_page_origin_4 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'origin4', labels: scale_1},
      {prompt: "I like fruit.", name: 'origin4', labels: scale_1},
      {prompt: "I like meat.", name: 'origin4', labels: scale_1}
    ]
  };
  var likert_page_origin_5 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'origin5', labels: scale_1},
      {prompt: "I like fruit.", name: 'origin5', labels: scale_1},
      {prompt: "I like meat.", name: 'origin5', labels: scale_1}
    ]
  };
  var likert_page_origin_6 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'origin6', labels: scale_1},
      {prompt: "I like fruit.", name: 'origin6', labels: scale_1},
      {prompt: "I like meat.", name: 'origin6', labels: scale_1}
    ]
  };
  var likert_page_origin_7 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'origin7', labels: scale_1},
      {prompt: "I like fruit.", name: 'origin7', labels: scale_1},
      {prompt: "I like meat.", name: 'origin7', labels: scale_1}
    ]
  };
  var likert_page_origin_8 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'origin8', labels: scale_1},
      {prompt: "I like fruit.", name: 'origin8', labels: scale_1},
      {prompt: "I like meat.", name: 'origin8', labels: scale_1}
    ]
  };
  var likert_page_origin_9 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'origin9', labels: scale_1},
      {prompt: "I like fruit.", name: 'origin9', labels: scale_1},
      {prompt: "I like meat.", name: 'origin9', labels: scale_1}
    ]
  };
  var likert_page_origin_10 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'origin10', labels: scale_1},
      {prompt: "I like fruit.", name: 'origin10', labels: scale_1},
      {prompt: "I like meat.", name: 'origin10', labels: scale_1}
    ]
  };
    
var likert_page_origin_11 = {
  type: 'survey-likert',
  questions: [
    { name: 'origin11', labels: scale_1},
    { name: 'origin11', labels: scale_1},
    { name: 'origin11', labels: scale_1}
  ]
};  
var likert_page_origin_12 = {
    type: 'survey-likert',
    questions: [
      { name: 'origin12', labels: scale_1},
      { name: 'origin12', labels: scale_1},
      { name: 'origin12', labels: scale_1}
    ]
  };  
  var likert_page_origin_13 = {
      type: 'survey-likert',
      questions: [
        { name: 'origin13', labels: scale_1},
        { name: 'origin13', labels: scale_1},
        { name: 'origin13', labels: scale_1}
      ]
    };  
    var likert_page_origin_14 = {
        type: 'survey-likert',
        questions: [
          { name: 'origin14', labels: scale_1},
          { name: 'origin14', labels: scale_1},
          { name: 'origin14', labels: scale_1}
        ]
      };  
      var likert_page_origin_15 = {
          type: 'survey-likert',
          questions: [
            { name: 'origin15', labels: scale_1},
            { name: 'origin15', labels: scale_1},
            { name: 'origin15', labels: scale_1}
          ]
        };  
        var likert_page_origin_16 = {
            type: 'survey-likert',
            questions: [
              { name: 'origin16', labels: scale_1},
              { name: 'origin16', labels: scale_1},
              { name: 'origin16', labels: scale_1}
            ]
          };  
          var likert_page_origin_17 = {
              type: 'survey-likert',
              questions: [
                { name: 'origin17', labels: scale_1},
                { name: 'origin17', labels: scale_1},
                { name: 'origin17', labels: scale_1}
              ]
            };  
            var likert_page_origin_18 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin18', labels: scale_1},
                  { name: 'origin18', labels: scale_1},
                  { name: 'origin18', labels: scale_1}
                ]
              };
              var likert_page_origin_19 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin19', labels: scale_1},
                  { name: 'origin19', labels: scale_1},
                  { name: 'origin19', labels: scale_1}
                ]
              };
              var likert_page_origin_20 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin20', labels: scale_1},
                  { name: 'origin20', labels: scale_1},
                  { name: 'origin20', labels: scale_1}
                ]
              };
              var likert_page_origin_21 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin21', labels: scale_1},
                  { name: 'origin21', labels: scale_1},
                  { name: 'origin21', labels: scale_1}
                ]
              };
              var likert_page_origin_22 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin22', labels: scale_1},
                  { name: 'origin22', labels: scale_1},
                  { name: 'origin22', labels: scale_1}
                ]
              };
              var likert_page_origin_23 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin23', labels: scale_1},
                  { name: 'origin23', labels: scale_1},
                  { name: 'origin23', labels: scale_1}
                ]
              };
              var likert_page_origin_24 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin24', labels: scale_1},
                  { name: 'origin24', labels: scale_1},
                  { name: 'origin24', labels: scale_1}
                ]
              };
              var likert_page_origin_25 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin25', labels: scale_1},
                  { name: 'origin25', labels: scale_1},
                  { name: 'origin25', labels: scale_1}
                ]
              };
              var likert_page_origin_26 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin26', labels: scale_1},
                  { name: 'origin26', labels: scale_1},
                  { name: 'origin26', labels: scale_1}
                ]
              };
              var likert_page_origin_27 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin27', labels: scale_1},
                  { name: 'origin27', labels: scale_1},
                  { name: 'origin27', labels: scale_1}
                ]
              };
              var likert_page_origin_28 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin28', labels: scale_1},
                  { name: 'origin28', labels: scale_1},
                  { name: 'origin28', labels: scale_1}
                ]
              };
              var likert_page_origin_29 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin29', labels: scale_1},
                  { name: 'origin29', labels: scale_1},
                  { name: 'origin29', labels: scale_1}
                ]
              };
              var likert_page_origin_30 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin30', labels: scale_1},
                  { name: 'origin30', labels: scale_1},
                  { name: 'origin30', labels: scale_1}
                ]
              };

              var likert_page_origin_31 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin31', labels: scale_1},
                  { name: 'origin31', labels: scale_1},
                  { name: 'origin31', labels: scale_1}
                ]
              };
              var likert_page_origin_32 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin32', labels: scale_1},
                  { name: 'origin32', labels: scale_1},
                  { name: 'origin32', labels: scale_1}
                ]
              };
              var likert_page_origin_33 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin33', labels: scale_1},
                  { name: 'origin33', labels: scale_1},
                  { name: 'origin33', labels: scale_1}
                ]
              };
              var likert_page_origin_34 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin34', labels: scale_1},
                  { name: 'origin34', labels: scale_1},
                  { name: 'origin34', labels: scale_1}
                ]
              };
              var likert_page_origin_35 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin35', labels: scale_1},
                  { name: 'origin35', labels: scale_1},
                  { name: 'origin35', labels: scale_1}
                ]
              };
              var likert_page_origin_36 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin36', labels: scale_1},
                  { name: 'origin36', labels: scale_1},
                  { name: 'origin36', labels: scale_1}
                ]
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
function getName(){
  global_name = document.getElementById('user_name');
  document.write(global_name);
  // alert(global_name);
}

function getData(){
    // generate a random subject ID with 15 characters
    var current_node_id = jsPsych.currentTimelineNodeID();

    var data_from_current_node = jsPsych.data.getDataByTimelineNode(current_node_id);

    // pick a random condition for the subject at the start of the experiment
    // var condition_assignment = jsPsych.randomization.sampleWithoutReplacement(['conditionA', 'conditionB', 'conditionC'], 1)[0];
    
    // record the condition assignment in the jsPsych data
    // this adds a property called 'subject' and a property called 'condition' to every trial
    // jsPsych.data.addProperties({
    //   subject: subject_id,
    //   // condition: condition_assignment
    // });
    // jsPsych.data.addProperties({subject: 1, condition: 'control'});


var all_data = jsPsych.data.get();
// get csv representation of data and log to console
document.write(current_node_id);
document.write(data_from_current_node);


console.log(all_data.csv());
var tmp_all_data = jsPsych.data.get().csv();
console.log(tmp_all_data.length);
var jbSplit = tmp_all_data.split(',');
for(var i  in jbSplit){
  document.write( '<p>' + jbSplit[i] + '</p>' );
}
//리커트 응답만 추출
// csv에 저장
saveData(data_from_current_node, jsPsych.data.get().csv());
}
function saveData(name, data){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'write_data_tmp.php'); // 'write_data.php' is the path to the php file described above.
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({filename: name, filedata: data}));

  //   var xhr2 = new XMLHttpRequest();
  //   xhr2.open('POST', 'write_data.php'); // change 'write_data.php' to point to php script.
  //   xhr2.setRequestHeader('Content-Type', 'application/json');
  //   xhr2.onload = function() {
  //   if(xhr2.status == 200){
  //     var response = JSON.parse(xhr2.responseText);
  //     document.write(response.success);
  //   }
  // };
  // xhr2.send(jsPsych.data.get().json());
}

var saveDBdata = function(){
  var xhr2 = new XMLHttpRequest();
  xhr2.open('POST', 'write_data.php'); // change 'write_data.php' to point to php script.
  xhr2.setRequestHeader('Content-Type', 'application/json');
  xhr2.onload = function() {
  if(xhr2.status == 200){
    var response = JSON.parse(xhr2.responseText);
    document.write(response.success);
  }
};
xhr2.send(jsPsych.data.get().json());
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
