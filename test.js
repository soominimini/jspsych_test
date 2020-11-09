
/* define welcome message trial */


var external_personal_info = {
  type:"external-html",
  url: "user_info.html",
  cont_btn: "start",
  cont_key: 1
};

///getting personal information


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
  
  var test_page = {
    type: 'survey-likert',
    questions: [
      {name: 'a', labels: scale_1},
      { name: 'a', labels: scale_1}
      // {name: 'data1', labels: scale_1}
    ],
  };




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
    ],
    // randomize_question_order: true //질문 순서 랜덤
  };

  var likert_page3 = {
    type: 'survey-likert',
    questions: [
      { name: 'data3', labels: scale_1},
      {name: 'data3', labels: scale_1}
    ],
    // randomize_question_order: true //질문 순서 랜덤
  };
  var likert_page4 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data4', labels: scale_1},
      {prompt: "I like fruit.", name: 'data4', labels: scale_1}
    ],
    // randomize_question_order: true //질문 순서 랜덤
    
  };
  var likert_page5 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data5', labels: scale_1},
      {prompt: "I like fruit.", name: 'data5', labels: scale_1}
    ]
  };

  var likert_page6 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data6', labels: scale_1},
      {prompt: "I like fruit.", name: 'data6', labels: scale_1}
    ]
  };

  var likert_page5 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data5', labels: scale_1},
      {prompt: "I like fruit.", name: 'data5', labels: scale_1}
    ]
  };

  var likert_page7 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data7', labels: scale_1},
      {prompt: "I like fruit.", name: 'data7', labels: scale_1}
    ]
  };

  var likert_page8 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data8', labels: scale_1},
      {prompt: "I like fruit.", name: 'data8', labels: scale_1}
    ]
  };

  var likert_page9 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data9', labels: scale_1},
      {prompt: "I like fruit.", name: 'data9', labels: scale_1}
    ]
  };

  var likert_page10 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data10', labels: scale_1},
      {prompt: "I like fruit.", name: 'data10', labels: scale_1}
    ]
  };
  var likert_page11 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data11', labels: scale_1},
      {prompt: "I like fruit.", name: 'data11', labels: scale_1}
    ]
  };
  var likert_page12 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data12', labels: scale_1},
      {prompt: "I like fruit.", name: 'data12', labels: scale_1}
    ]
  };
  var likert_page13 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data13', labels: scale_1},
      {prompt: "I like fruit.", name: 'data13', labels: scale_1}
    ]
  };
  var likert_page14 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data14', labels: scale_1},
      {prompt: "I like fruit.", name: 'data14', labels: scale_1}
    ]
  };
  var likert_page15 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data15', labels: scale_1},
      {prompt: "I like fruit.", name: 'data15', labels: scale_1}
    ]
  };
  var likert_page16 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data16', labels: scale_1},
      {prompt: "I like fruit.", name: 'data16', labels: scale_1}
    ]
  };
  var likert_page17 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data17', labels: scale_1},
      {prompt: "I like fruit.", name: 'data17', labels: scale_1}
    ]
  };
  var likert_page18 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data18', labels: scale_1},
      {prompt: "I like fruit.", name: 'data18', labels: scale_1}
    ]
  };
  var likert_page19 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data19', labels: scale_1},
      {prompt: "I like fruit.", name: 'data19', labels: scale_1}
    ]
  };
  var likert_page20 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data20', labels: scale_1},
      {prompt: "I like fruit.", name: 'data20', labels: scale_1}
    ]
  };
  var likert_page21 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data21', labels: scale_1},
      {prompt: "I like fruit.", name: 'data21', labels: scale_1}
    ]
  };
  var likert_page22 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data22', labels: scale_1},
      {prompt: "I like fruit.", name: 'data22', labels: scale_1}
    ]
  };
  var likert_page23 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data23', labels: scale_1},
      {prompt: "I like fruit.", name: 'data23', labels: scale_1}
    ]
  };
  var likert_page24 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data24', labels: scale_1},
      {prompt: "I like fruit.", name: 'data24', labels: scale_1}
    ]
  };
  var likert_page25 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data25', labels: scale_1},
      {prompt: "I like fruit.", name: 'data25', labels: scale_1}
    ]
  };
  var likert_page26 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data26', labels: scale_1},
      {prompt: "I like fruit.", name: 'data26', labels: scale_1}
    ]
  };
  var likert_page27 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data27', labels: scale_1},
      {prompt: "I like fruit.", name: 'data27', labels: scale_1}
    ]
  };
  var likert_page28 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data28', labels: scale_1},
      {prompt: "I like fruit.", name: 'data28', labels: scale_1}
    ]
  };
  var likert_page29 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'data29', labels: scale_1},
      {prompt: "I like fruit.", name: 'data29', labels: scale_1}
    ]
  };
  var likert_page30 = {
    type: 'survey-likert',
    questions: [
      {name: 'data30', labels: scale_1},
      { name: 'data30', labels: scale_1}
    ]
  };
  var likert_page31 = {
    type: 'survey-likert',
    questions: [
      {name: 'data31', labels: scale_1},
      { name: 'data31', labels: scale_1}
    ]
  };
  var likert_page32 = {
    type: 'survey-likert',
    questions: [
      {name: 'data32', labels: scale_1},
      { name: 'data32', labels: scale_1}
    ]
  };
  var likert_page33 = {
    type: 'survey-likert',
    questions: [
      {name: 'data33', labels: scale_1},
      { name: 'data33', labels: scale_1}
    ]
  };

  var likert_page34 = {
    type: 'survey-likert',
    questions: [
      {name: 'data34', labels: scale_1},
      { name: 'data34', labels: scale_1}
    ]
  };

  var likert_page35 = {
    type: 'survey-likert',
    questions: [
      {name: 'data35', labels: scale_1},
      { name: 'data35', labels: scale_1}
    ]
  };
  var likert_page36 = {
    type: 'survey-likert',
    questions: [
      {name: 'data36', labels: scale_1},
      { name: 'data36', labels: scale_1}
    ]
  };
  var likert_page37 = {
    type: 'survey-likert',
    questions: [
      {name: 'data37', labels: scale_1},
      { name: 'data37', labels: scale_1}
    ]
  };
  var likert_page38 = {
    type: 'survey-likert',
    questions: [
      {name: 'data38', labels: scale_1},
      { name: 'data38', labels: scale_1}
    ]
  };
  var likert_page39 = {
    type: 'survey-likert',
    questions: [
      {name: 'data39', labels: scale_1},
      { name: 'data39', labels: scale_1}
    ]
  };
  var likert_page40 = {
    type: 'survey-likert',
    questions: [
      {name: 'data40', labels: scale_1},
      { name: 'data40', labels: scale_1}
    ]
  };
  var likert_page41 = {
    type: 'survey-likert',
    questions: [
      {name: 'data41', labels: scale_1},
      { name: 'data41', labels: scale_1}
    ]
  };
  var likert_page42 = {
    type: 'survey-likert',
    questions: [
      {name: 'data42', labels: scale_1},
      { name: 'data42', labels: scale_1}
    ]
  };
  var likert_page43 = {
    type: 'survey-likert',
    questions: [
      {name: 'data43', labels: scale_1},
      { name: 'data43', labels: scale_1}
    ]
  };
  var likert_page44 = {
    type: 'survey-likert',
    questions: [
      {name: 'data44', labels: scale_1},
      { name: 'data44', labels: scale_1}
    ]
  };

  var likert_page45 = {
    type: 'survey-likert',
    questions: [
      {name: 'data45', labels: scale_1},
      { name: 'data45', labels: scale_1}
    ]
  };

  var likert_page46 = {
    type: 'survey-likert',
    questions: [
      {name: 'data46', labels: scale_1},
      { name: 'data46', labels: scale_1}
    ]
  };

  var likert_page47 = {
    type: 'survey-likert',
    questions: [
      {name: 'data47', labels: scale_1},
      { name: 'data47', labels: scale_1}
    ]
  };
  var likert_page48 = {
    type: 'survey-likert',
    questions: [
      {name: 'data48', labels: scale_1},
      { name: 'data48', labels: scale_1}
    ]
  };
  var likert_page49 = {
    type: 'survey-likert',
    questions: [
      {name: 'data49', labels: scale_1},
      { name: 'data49', labels: scale_1}
    ]
  };
  var likert_page50 = {
    type: 'survey-likert',
    questions: [
      {name: 'data50', labels: scale_1},
      { name: 'data50', labels: scale_1}
    ]
  };

  var likert_page51 = {
    type: 'survey-likert',
    questions: [
      {name: 'data51', labels: scale_1},
      { name: 'data51', labels: scale_1}
    ]
  };
  
  var likert_page52 = {
    type: 'survey-likert',
    questions: [
      {name: 'data52', labels: scale_1},
      { name: 'data52', labels: scale_1}
    ]
  };
  
  var likert_page53 = {
    type: 'survey-likert',
    questions: [
      {name: 'data53', labels: scale_1},
      { name: 'data53', labels: scale_1}
    ]
  };
  var likert_page54 = {
    type: 'survey-likert',
    questions: [
      {name: 'data54', labels: scale_1},
      { name: 'data54', labels: scale_1}
    ]
  };
  var likert_page55 = {
    type: 'survey-likert',
    questions: [
      {name: 'data55', labels: scale_1},
      { name: 'data55', labels: scale_1}
    ]
  };
  var likert_page56 = {
    type: 'survey-likert',
    questions: [
      {name: 'data56', labels: scale_1},
      { name: 'data56', labels: scale_1}
    ]
  };
  var likert_page57 = {
    type: 'survey-likert',
    questions: [
      {name: 'data57', labels: scale_1},
      { name: 'data57', labels: scale_1}
    ]
  };
  var likert_page58 = {
    type: 'survey-likert',
    questions: [
      {name: 'data58', labels: scale_1},
      { name: 'data58', labels: scale_1}
    ]
  };
  var likert_page59 = {
    type: 'survey-likert',
    questions: [
      {name: 'data59', labels: scale_1},
      { name: 'data59', labels: scale_1}
    ]
  };




// 원본 사진 샘플

var likert_page_origin_1 = {
    type: 'survey-likert',
    questions: [
      {name: 'origin1', labels: scale_1},
      { name: 'origin1', labels: scale_1}
    ]
  };
  
var likert_page_origin_2 = {
    type: 'survey-likert',
    questions: [
      { name: 'origin2', labels: scale_1},
      { name: 'origin2', labels: scale_1}
    ]
  };
  
var likert_page_origin_3 = {
    type: 'survey-likert',
    questions: [
      { name: 'origin3', labels: scale_1},
      { name: 'origin3', labels: scale_1}
    ]
  };
  var likert_page_origin_4 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'origin4', labels: scale_1},
      {prompt: "I like fruit.", name: 'origin4', labels: scale_1}
    ]
  };
  var likert_page_origin_5 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'origin5', labels: scale_1},
      {prompt: "I like fruit.", name: 'origin5', labels: scale_1}
    ]
  };
  var likert_page_origin_6 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'origin6', labels: scale_1},
      {prompt: "I like fruit.", name: 'origin6', labels: scale_1}
    ]
  };
  var likert_page_origin_7 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'origin7', labels: scale_1},
      {prompt: "I like fruit.", name: 'origin7', labels: scale_1}
    ]
  };
  var likert_page_origin_8 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'origin8', labels: scale_1},
      {prompt: "I like fruit.", name: 'origin8', labels: scale_1}
    ]
  };
  var likert_page_origin_9 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'origin9', labels: scale_1},
      {prompt: "I like fruit.", name: 'origin9', labels: scale_1}
    ]
  };
  var likert_page_origin_10 = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'origin10', labels: scale_1},
      {prompt: "I like fruit.", name: 'origin10', labels: scale_1}
    ]
  };
    
var likert_page_origin_11 = {
  type: 'survey-likert',
  questions: [
    { name: 'origin11', labels: scale_1},
    { name: 'origin11', labels: scale_1}
  ]
};  
var likert_page_origin_12 = {
    type: 'survey-likert',
    questions: [
      { name: 'origin12', labels: scale_1},
      { name: 'origin12', labels: scale_1}
    ]
  };  
  var likert_page_origin_13 = {
      type: 'survey-likert',
      questions: [
        { name: 'origin13', labels: scale_1},
        { name: 'origin13', labels: scale_1}
      ]
    };  
    var likert_page_origin_14 = {
        type: 'survey-likert',
        questions: [
          { name: 'origin14', labels: scale_1},
          { name: 'origin14', labels: scale_1}
        ]
      };  
      var likert_page_origin_15 = {
          type: 'survey-likert',
          questions: [
            { name: 'origin15', labels: scale_1},
            { name: 'origin15', labels: scale_1}
          ]
        };  
        var likert_page_origin_16 = {
            type: 'survey-likert',
            questions: [
              { name: 'origin16', labels: scale_1},
              { name: 'origin16', labels: scale_1}
            ]
          };  
          var likert_page_origin_17 = {
              type: 'survey-likert',
              questions: [
                { name: 'origin17', labels: scale_1},
                { name: 'origin17', labels: scale_1}
              ]
            };  
            var likert_page_origin_18 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin18', labels: scale_1},
                  { name: 'origin18', labels: scale_1}
                ]
              };
              var likert_page_origin_19 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin19', labels: scale_1},
                  { name: 'origin19', labels: scale_1}
                ]
              };
              var likert_page_origin_20 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin20', labels: scale_1},
                  { name: 'origin20', labels: scale_1}
                ]
              };
              var likert_page_origin_21 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin21', labels: scale_1},
                  { name: 'origin21', labels: scale_1}
                ]
              };
              var likert_page_origin_22 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin22', labels: scale_1},
                  { name: 'origin22', labels: scale_1}
                ]
              };
              var likert_page_origin_23 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin23', labels: scale_1},
                  { name: 'origin23', labels: scale_1}
                ]
              };
              var likert_page_origin_24 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin24', labels: scale_1},
                  { name: 'origin24', labels: scale_1}
                ]
              };
              var likert_page_origin_25 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin25', labels: scale_1},
                  { name: 'origin25', labels: scale_1}
                ]
              };
              var likert_page_origin_26 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin26', labels: scale_1},
                  { name: 'origin26', labels: scale_1}
                ]
              };
              var likert_page_origin_27 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin27', labels: scale_1},
                  { name: 'origin27', labels: scale_1}
                ]
              };
              var likert_page_origin_28 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin28', labels: scale_1},
                  { name: 'origin28', labels: scale_1}
                ]
              };
              var likert_page_origin_29 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin29', labels: scale_1},
                  { name: 'origin29', labels: scale_1}
                ]
              };
              var likert_page_origin_30 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin30', labels: scale_1},
                  { name: 'origin30', labels: scale_1}
                ]
              };

              var likert_page_origin_31 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin31', labels: scale_1},
                  { name: 'origin31', labels: scale_1}
                ]
              };
              var likert_page_origin_32 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin32', labels: scale_1},
                  { name: 'origin32', labels: scale_1}
                ]
              };
              var likert_page_origin_33 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin33', labels: scale_1},
                  { name: 'origin33', labels: scale_1}
                ]
              };
              var likert_page_origin_34 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin34', labels: scale_1},
                  { name: 'origin34', labels: scale_1}
                ]
              };
              var likert_page_origin_35 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin35', labels: scale_1},
                  { name: 'origin35', labels: scale_1}
                ]
              };
              var likert_page_origin_36 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin36', labels: scale_1},
                  { name: 'origin36', labels: scale_1}
                ]
              };
              var likert_page_origin_37 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin37', labels: scale_1},
                  { name: 'origin37', labels: scale_1}
                ]
              };
              var likert_page_origin_38 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin38', labels: scale_1},
                  { name: 'origin38', labels: scale_1}
                ]
              };
              var likert_page_origin_39 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin39', labels: scale_1},
                  { name: 'origin39', labels: scale_1}
                ]
              };
              var likert_page_origin_40 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin40', labels: scale_1},
                  { name: 'origin40', labels: scale_1}
                ]
              };
              var likert_page_origin_41 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin41', labels: scale_1},
                  { name: 'origin41', labels: scale_1}
                ]
              };
              var likert_page_origin_42 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin42', labels: scale_1},
                  { name: 'origin42', labels: scale_1}
                ]
              };
              var likert_page_origin_43 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin43', labels: scale_1},
                  { name: 'origin43', labels: scale_1}
                ]
              };
              var likert_page_origin_44 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin44', labels: scale_1},
                  { name: 'origin44', labels: scale_1}
                ]
              };
              var likert_page_origin_45 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin45', labels: scale_1},
                  { name: 'origin45', labels: scale_1}
                ]
              };
              var likert_page_origin_46 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin46', labels: scale_1},
                  { name: 'origin46', labels: scale_1}
                ]
              };
              var likert_page_origin_47 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin47', labels: scale_1},
                  { name: 'origin47', labels: scale_1}
                ]
              };
              var likert_page_origin_48 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin48', labels: scale_1},
                  { name: 'origin48', labels: scale_1}
                ]
              };
              var likert_page_origin_49 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin49', labels: scale_1},
                  { name: 'origin49', labels: scale_1}
                ]
              };
              var likert_page_origin_50 = {
                type: 'survey-likert',
                questions: [
                  { name: 'origin50', labels: scale_1},
                  { name: 'origin50', labels: scale_1}
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
function getData(){

  // console.log(global_sex);
    // generate a random subject ID with 15 characters
    var current_node_id = jsPsych.currentTimelineNodeID();

    var data_from_current_node = jsPsych.data.getDataByTimelineNode(current_node_id);

    //버튼 비활성화
    btn = document.getElementById('btn');
    btn.disabled = 'disabled';


    var all_data = jsPsych.data.get();
    // console.log(all_data);
    saveData("data_from_current_node", jsPsych.data.get().csv());
}



function saveData(name, data_p){
    // var xhr = new XMLHttpRequest();
    // var url = 'write_data_tmp.php';
    // xhr.open('POST',url, true); // 'write_data.php' is the path to the php file described above.
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.send(JSON.stringify({filename: name, filedata: data}));

    
  //   $.ajax({
  //     type : "POST",
  //     url : 'write_data_tmp.php',
  //     data: {a:2},
  //     dataType : "text",
  //     error : function(){ alert('통신실패!!');  },
  //     success : function(res){ alert(res); }
  //  });

   $.ajax({
    type: 'POST',
    url: 'write_data_tmp.php',
    // data: JSON.stringify({'filename': name, 'filedata': data_p}),
    data : {filename: name, filedata : data_p},
    dataType: 'text'
    // error : function(){ alert('통신실패!!');  },
    // success : function(res){ alert(res); }
});



//   //   var xhr2 = new XMLHttpRequest();
//   //   xhr2.open('POST', 'write_data.php'); // change 'write_data.php' to point to php script.
//   //   xhr2.setRequestHeader('Content-Type', 'application/json');
//   //   xhr2.onload = function() {
//   //   if(xhr2.status == 200){
//   //     var response = JSON.parse(xhr2.responseText);
//   //     document.write(response.success);
//   //   }
//   // };
//   // xhr2.send(jsPsych.data.get().json());


// window.alert("테스트 종료");
}


  //last page
  var last_page = {
    type: 'instructions',
    pages: [
      '<p>테스트가 종료 되었습니다</p>'+
      "종료 버튼을 눌러 주세요" +
      ' <button id = "btn" onclick=" getData();">submit</button>'
    ]
    // show_clickable_nav: true
  }
