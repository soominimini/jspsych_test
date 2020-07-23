
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
 var instructions1 = {
    type: "html-keyboard-response",
    stimulus: "<p>안내문 | Instruction</p>"+
        "<p>실험을 시작하면 여러 개의 사진을 보게 될 것입니다.</p> " +
        "<p>사진을 주의 깊게 본 다음, 그 사진 속 인물이 어떤 감정인지 응답하시면 됩니다. <strong>각 사진마다 두 개의 선택지에 대답하게 됩니다.</strong></p>" +
        "<p>Press any key to begin.</p>",
    // post_trial_gap: 2000
  };
  var instructions2 = {
    type: "html-keyboard-response",
    stimulus: 
    "<img src='img/instruction1.jpg' style = 'width : 60%;'></img>" +
    "<p>첫번째 선택지에는 위와 같이 찡그린 그림에서 웃는 그림까지 총 일곱 개의 보기가 있습니다. 만약 사진을 보고 행복, 기쁨, 흡족함, 만족스러움, 희망에 찬 느낌 등이 느껴 진다면, 가장 오른쪽의 웃는 그림을 선택하면 됩니다. 반면에 불쾌함, 짜증, 불만스러움, 우울함, 좌절감, 지루함 등이 느껴지면 가장 왼쪽의 찡그린 그림을 선택하면 됩니다. 양 끝 사이의 그림들을 선택함으로써 중간 정도의 느낌을 나타낼 수 있습니다.</p> " +
        "<p>Press any key to begin.</p>",
    // post_trial_gap: 2000
  };
  var instructions3 = {
    type: "html-keyboard-response",
    stimulus: 
    "<img src='img/instruction2.jpg' style = 'width : 60%;'></img>" +
    "<p>두번째 선택지에는 침착한(각성도가 낮은) 그림에서 흥분된(각성도가 높은)그림까지 총 다섯 개의 보기가 있습니다. 만약 사진을 보고, 감정의 동요, 흥분, 열광하거나, 초조하거나,  각성된 것처럼 느껴진다면 가장 오른쪽 그림을 선택하면 됩니다. 반면에 편안하거나, 평온하거나, 차분하거나, 느긋하거나, 둔감하거나,  졸린 것처럼 느껴진다면 가장 왼쪽 그림을 선택하면 됩니다. 마찬가지로 양 끝 사이의 그림들을 선택함으로써 중간 정도의 느낌을 나타낼 수 있습니다. 만약 얼굴 표정의 각성수준이 중간 정도로 느껴진다면,  위와 같이 가운데 그림을 선택하면 됩니다.</p> " +
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
    " ",
    " "

  ];
  
  var likert_page = {
    type: 'survey-likert',
    questions: [
      {name: 'data1', labels: scale_1},
      { name: 'data1', labels: scale_1},
      {name: 'data1', labels: scale_1}
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
    console.log("들어옴");
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
