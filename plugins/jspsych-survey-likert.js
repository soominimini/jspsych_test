/**
 * jspsych-survey-likert
 * a jspsych plugin for measuring items on a likert scale
 *
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 *
 */
var global_dict = new Array();


jsPsych.plugins['survey-likert'] = (function () {

  var plugin = {};
  var global_dict_var = 0;

  plugin.info = {
    name: 'survey-likert',
    description: '',
    parameters: {
      questions: {
        type: jsPsych.plugins.parameterType.COMPLEX,
        array: true,
        pretty_name: 'Questions',
        nested: {
          prompt: {
            type: jsPsych.plugins.parameterType.STRING,
            pretty_name: 'Prompt',
            default: undefined,
            description: 'Questions that are associated with the slider.'
          },
          labels: {
            type: jsPsych.plugins.parameterType.STRING,
            array: true,
            pretty_name: 'Labels',
            default: undefined,
            description: 'Labels to display for individual question.'
          },
          required: {
            type: jsPsych.plugins.parameterType.BOOL,
            pretty_name: 'Required',
            default: false,
            description: 'Makes answering the question required.'
          },
          name: {
            type: jsPsych.plugins.parameterType.STRING,
            pretty_name: 'Question Name',
            default: '',
            description: 'Controls the name of data values associated with this question'
          }
        }
      },
      randomize_question_order: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Randomize Question Order',
        default: false,
        description: 'If true, the order of the questions will be randomized'
      },
      preamble: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Preamble',
        default: null,
        description: 'String to display at top of the page.'
      },
      scale_width: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Scale width',
        default: null,
        description: 'Width of the likert scales in pixels.'
      },
      button_label: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button label',
        default: 'Continue',
        description: 'Label of the button.'
      }
    }
  }

  plugin.trial = function (display_element, trial) {

    if (trial.scale_width !== null) {
      var w = trial.scale_width + 'px';
    } else {
      var w = '100%';
    }

    var html = "";
    // inject CSS for trial
    html += '<style id="jspsych-survey-likert-css">';
    html += ".jspsych-survey-likert-statement { display:block; font-size: 16px; padding-top: 40px; margin-bottom:10px; }" +
      ".jspsych-survey-likert-opts { list-style:none; width:" + w + "; margin:auto; padding:0 0 35px; display:block; font-size: 14px; line-height:1.1em; }" +
      ".jspsych-survey-likert-opt-label { line-height: 1.1em; color: #444; }" +
      ".jspsych-survey-likert-opts:before { content: ''; position:relative; top:11px; /*left:9.5%;*/ display:block; background-color:#efefef; height:4px; width:100%; }" +
      ".jspsych-survey-likert-opts:last-of-type { border-bottom: 0; }" +
      ".jspsych-survey-likert-opts li { display:inline-block; /*width:19%;*/ text-align:center; vertical-align: top; }" +
      ".jspsych-survey-likert-opts li input[type=radio] { display:block; position:relative; top:0; left:50%; margin-left:-6px; }"
    html += '</style>';

    // show preamble text
    if (trial.preamble !== null) {
      html += '<div id="jspsych-survey-likert-preamble" class="jspsych-survey-likert-preamble">' + trial.preamble + '</div>';
    }


    var img_tmp = trial.questions[0].name;
    if (img_tmp[0] == "o") {
      //original images
      img_tmp = img_tmp.substr(6);

      html += '<div id = "square" style = "position :relative;  width : 450px; height: 300px; margin:auto;margin-top: 5%; background-color:#959D9F;" >';
      if (window.screen.width >= 550) {

        html += '<img src = "./img/happy_test_data/origin' + img_tmp + '.png" style = "position: relative;"></img></div>';
      }
      else {
        html += '<img src = "./img/happy_test_data/origin' + img_tmp + '.png" ></img></div>';
      }

      html += '<form id="jspsych-survey-likert-form">';

    }
    else {

      img_tmp = img_tmp.substr(4);

      if (window.screen.width >= 550) {
        html += '<img src = "./img/happy_test_data/data' + img_tmp + '.png" style = "position: relative; padding-top : 5%;"></img>';
      }
      else {
        html += '<img src = "./img/happy_test_data/data' + img_tmp + '.png" ></img>';
      }

      html += '<form id="jspsych-survey-likert-form">';
    }

    // add likert scale questions ///
    // generate question order. this is randomized here as opposed to randomizing the order of trial.questions
    // so that the data are always associated with the same question regardless of order
    var question_order = [];
    for (var i = 0; i < trial.questions.length; i++) {
      question_order.push(i);
    }
    if (trial.randomize_question_order) {
      question_order = jsPsych.randomization.shuffle(question_order);
    }

    for (var i = 0; i < trial.questions.length; i++) {
      var question = trial.questions[question_order[i]];
      // add question
      // console.log(trial.questions.length);
      var temp = i + 1;

      if (img_tmp[0] == 'o')
        html += '<div style="border:5px solid; margin:10px; color : #efefef;">';
      else
        html += '<div style="border:5px solid; margin:10px;  margin-top: 20px; color : #efefef;">';
      html += '<label class="jspsych-survey-likert-statement">' +
        '<img src="img/SAM/SAM' + temp + '_1.png" style = "width : 10%;"></img>' +
        '<img src="img/SAM/SAM' + temp + '_2.png" style = "width : 10%;"></img>' +
        '<img src="img/SAM/SAM' + temp + '_3.png" style = "width : 10%;"></img>' +
        '<img src="img/SAM/SAM' + temp + '_4.png" style = "width : 10%;"></img>' +
        '<img src="img/SAM/SAM' + temp + '_5.png" style = "width : 10%;"></img>' +
        '<img src="img/SAM/SAM' + temp + '_6.png" style = "width : 10%;"></img>' +
        '<img src="img/SAM/SAM' + temp + '_7.png" style = "width : 10%;"></img>' +
        '</label>';
      // add options
      var width = 70 / question.labels.length;
      var options_string = '<ul class="jspsych-survey-likert-opts" data-name="' + question.name + '" data-radio-group="Q' + question_order[i] + '">';
      for (var j = 0; j < question.labels.length; j++) {
        options_string += '<li style="width:' + width + '%"><input type="radio" name="Q' + question_order[i] + '" value="' + j + '"';
        if (question.required) {
          options_string += ' required';
        }
        options_string += '><label class="jspsych-survey-likert-opt-label">' + question.labels[j] + '</label></li>';
      }
      options_string += '</ul></div>';
      html += options_string;
    }


    // add submit button
    html += '<input type="submit" id="jspsych-survey-likert-next" class="jspsych-survey-likert jspsych-btn" value="' + trial.button_label + '"></input>';

    html += '</form>'

    display_element.innerHTML = html;

    display_element.querySelector('#jspsych-survey-likert-form').addEventListener('submit', function (e) {

      e.preventDefault();
      // measure response time
      var endTime = performance.now();
      var response_time = endTime - startTime;

      // create object to hold responses
      var question_data = {};
      var matches = display_element.querySelectorAll('#jspsych-survey-likert-form .jspsych-survey-likert-opts');
      for (var index = 0; index < matches.length; index++) {
        var id = matches[index].dataset['radioGroup'];
        var el = display_element.querySelector('input[name="' + id + '"]:checked');

        //check which radio buttons are pressed
        // console.log(el.value);


        if (el === null) {
          // var response = "";


          window.alert("선택 후 버튼을 눌러주세요");//그냥 넘어가는거 막기
          return false;//그냥 넘어가는거 막기


        } else {
          var response = parseInt(el.value);
        }
        var obje = {};
        var name;
        if (matches[index].attributes['data-name'].value !== '') {
           name = matches[index].attributes['data-name'].value;
        } else {
           name = id;
        }

        obje[index] = response;
        global_dict[global_dict_var++] = response;
        Object.assign(question_data, obje);

      }
      // for(var i =0; i<global_dict.length; i++){
      //   console.log(global_dict[i]);
      // }
      var trial_data = {
        "rt": response_time,
        "image_name":name,
        "responses": JSON.stringify(question_data),
        "question_order": JSON.stringify(question_order)
      };

      display_element.innerHTML = '';

      // next trial
      jsPsych.finishTrial(trial_data);
    });

    var startTime = performance.now();
  };

  return plugin;
})();
