<!-- xampp start 켜서 server on 시킨 다음에 로컬 접속 -->

<!DOCTYPE html>
<html>
  <head>
    <title>수미니미니</title>
    <script src="jspsych.js"></script>
    <!-- js 파일 반영 바로바로 절대 안되니까 ?v=<%=System.currentTimeMillis() %> 이 코드로 현재시각을 계속 반영하게 되서 계속 호출하게 끔 -->
    <!-- <script src="test.js?v=<%=System.currentTimeMillis() %>"></script> -->
    <!-- 로컬에서 작업 할 때는 상관 없는데 실제 서버에 올리면  ?v=<%=System.currentTimeMillis() %> 이거 지워야되 에러남 -->
    <script src="test.js"></script>
    <script src="plugins/jspsych-external-html.js"></script>
    <script src="plugins/jspsych-html-keyboard-response.js"></script>
    <script src="plugins/jspsych-image-keyboard-response.js"></script>
    <script src="plugins/jspsych-survey-html-form.js"></script>
    <!-- <script src="plugins/jspsych-survey-likert.js?v=<%=System.currentTimeMillis() %>"></script> -->
    <script src="plugins/jspsych-survey-likert.js"></script>
    <script src="plugins/jspsych-instructions.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link href="css/jspsych.css" rel="stylesheet" type="text/css"></link>
  </head>

  <script >


//in case of submitting data which is collected in js file
//the function should be defined in php file

//그냥.. 전역변수로 선언

var global_sex = "<%=str%>";
var global_age = "<%=str%>";
var global_nationality = "<%=str%>";
var cnt_for_nation_ok = 0;
var global_arr = new Array();


function sendInfo(){
  //this is for getting data that collected in the first page(personal information)
    var radioVal = $('input[name="age"]').val();
    var radioVal2 = $('input[name="sex"]:checked').val();
    var getTagId = document.getElementById("write");
    // getTagId = getTagId.getElementById("nationTxt");
    var tmp = getTagId.getElementsByTagName("div");

    for(var i=0; i<tmp.length; i++){
        console.log(tmp[i].textContent);
        //before putting all txt into array, deleting the last character 'x' and do left trimming
        var tmp_txt = tmp[i].textContent;
        tmp_txt = tmp_txt.substr(0,tmp_txt.length-1);
        tmp_txt = tmp_txt.trimRight();
        tmp_txt = tmp_txt.replace(/(\s*)/g, "") ;
        global_arr[i] = tmp_txt;

    }


    global_sex = radioVal2;
    global_age =radioVal;
    global_nationality = global_arr;
    console.log(radioVal+" ,  "+radioVal2+" , "+getTagId);
}

function getValue(){

  cnt_for_nation_ok++;

  var sel1 = document.getElementById("custom-select1");
  var sel2 =document.getElementById("custom-select2");
  var val, val2;
  for(i=0; i<sel1.options.length; i++) {
      if(sel1.options[i].selected == true) {
          val = sel1.options[i].value;
          break;
      }
  }
  for(i=0; i<sel2.options.length; i++) {
      if(sel2.options[i].selected == true) {
        val2 = sel2.options[i].value;
          break;
      }
  }
  console.log(val);
  console.log(val2);
  //
  // document.getElementById("write").innerHTML=val+" , "+val2;
  // div.innerHTML = "<p>첫번째</p><p>두번째</p>"

                 //plusUl 변수에 createElement 를 사용해 생성할 엘리먼트를 담습니다.
                 var plusUl = document.createElement('div');
                 plusUl.setAttribute("id","nationTxt" );
                 var btn = document.createElement('button');
                //  btn.setAttribute("onclick",fncBtn() );
                
                btn.onclick = function() { 
                  var p = this.parentElement; // 부모 HTML 태그 요소 여기서는 <div id =1,2,3,etc>
                  var pp= p.parentElement //다시 한번 더 타고 올라가서 
                  pp.removeChild(p); // 자신(버튼)이랑 부모를 부모부모로부터 제거
                };

                 btn.innerHTML =  'x';  
                 plusUl.innerHTML =  val+ '&nbsp;&nbsp;&nbsp;'+val2+'&nbsp;&nbsp;&nbsp;&nbsp;';   
                 plusUl.insertAdjacentElement("beforeend",btn);
                //  var total = plusUl+btn;
                 // appendChild 로 이전에 정의한 plusUl 변수의 내용을 실제 추가합니다.
                 document.getElementById('write').appendChild(plusUl);
                //  document.getElementById('write').appendChild(btn);
                 
};

       //버튼 눌리면 해당되는 엘리먼트 삭제하고 
                 //최종적으로 Next 버튼 눌리면 여기에 있는 거 다 가져와서 엑셀에 넣기
             
// }


    var timeline = [];
    //instructions
        // timeline.push(external_personal_info);
        timeline.push(external_personal_info);
        timeline.push(external_html);
        timeline.push(external_html2);
        timeline.push(external_html3);
        // // timeline.push(data_save);
        // //blurred picture

        // for($i=0; $i<5; $i=$i+1)
        //     {
        //       timeline.push(test_page);
        //     }
            // $arr = [likert_page, likert_page2, likert_page3,likert_page4 ,likert_page5 ];
            // shuffle($arr);
            // for($i=0; $i<5; $i=$i+1)
            // {
            //   timeline.push( $arr);
            // }



            var total_arr = new Array(5);
            var arr_for_randomGenerator = new Array(50);


            for (var i = 0; i < total_arr.length; i++) {
              total_arr[i] = new Array(50);
            }

            // for($i=0; $i<50; $i=$i+1){
            //   for($j =0; $j<5; $j=$j+1){
            //     total_arr[$i][$j].push(false);
            //   }
            // }

            for(var i=0; i<5; i++){
              for(var j=0;j<50; j++){
                total_arr[i][j] = false;
                arr_for_randomGenerator[j]= false;
              }
            }

            var generateRandom = function (min, max) {
                  var ranNum = Math.floor(Math.random()*(max-min+1)) + min;

                  if(arr_for_randomGenerator[ranNum]==true){
                    while(arr_for_randomGenerator[ranNum]){
                      ranNum = Math.floor(Math.random()*(max-min+1)) + min;
                    }
                    arr_for_randomGenerator[ranNum]= true;  
                    // console.log("난수!!!!!!:"+tmp_visit_check);
                    return ranNum;
                  }

                  else arr_for_randomGenerator[ranNum] = true;
                  // console.log("난수!!!!!!:"+ranNum);

                  return ranNum;
            }


            // 1. 각각 이미지별로 array로 묶고 
            // 2. 각 이미지 배열을 셔플
            // 3. total 배열에 셔플된 배열을 하나씩 넣고
            // 4. while문 돌기
            //   4-1. 첫번째 for문은 col 배열의 개수
            //   4-2.  generateRandom(0, 11) 배열 인덱스 min,max 0부터 49까지 
            //   4-3. 
     
           let array1 = [likert_page, likert_page_origin_1];
           let array2 = [likert_page2, likert_page_origin_2];
           let array3 = [likert_page3, likert_page_origin_3];
           let array4 = [likert_page4,likert_page5, likert_page_origin_4];
           let array5 = [likert_page6, likert_page_origin_5];
           let array6 = [likert_page7, likert_page_origin_6];
           let array7 = [likert_page8, likert_page9, likert_page_origin_7];
           let array8 = [likert_page10, likert_page_origin_8];
           let array9 = [likert_page16, likert_page_origin_9];
           let array10 = [likert_page_origin_10];
           let array11 = [likert_page12, likert_page_origin_11];
           let array12 = [likert_page11, likert_page_origin_12];
           let array13 = [likert_page14, likert_page_origin_13];
           let array14 = [likert_page13, likert_page_origin_14];
           let array15 = [likert_page15, likert_page_origin_15];
           let array16 = [likert_page17, likert_page18, likert_page_origin_16];
           let array17 = [likert_page19, likert_page_origin_17];
           let array18 = [likert_page20, likert_page_origin_18];
           let array19 = [likert_page21, likert_page_origin_19];
           let array20 = [likert_page22, likert_page_origin_20];
           let array21 = [likert_page23, likert_page_origin_21];
           let array22 = [likert_page24,likert_page42, likert_page_origin_22];
           let array23 = [likert_page25, likert_page_origin_23];
           let array24 = [likert_page26, likert_page_origin_24];
           let array25 = [likert_page27, likert_page_origin_25];
           let array26 = [likert_page28, likert_page_origin_26];
           let array27 = [likert_page29, likert_page_origin_27];
           let array28 = [likert_page30, likert_page_origin_28];
           let array29 = [likert_page31, likert_page_origin_29];
           let array30 = [likert_page32, likert_page_origin_30];
           let array31 = [likert_page33,likert_page34, likert_page_origin_31];
           let array32 = [likert_page35, likert_page_origin_32];
           let array33 = [likert_page36, likert_page_origin_33];
           let array34 = [likert_page37, likert_page_origin_34];
           let array35 = [likert_page38, likert_page_origin_35];
           let array36 = [likert_page39,likert_page40, likert_page_origin_36];
           let array37 = [likert_page41, likert_page_origin_37];
           let array38 = [likert_page46,likert_page47, likert_page_origin_38];
           let array39 = [likert_page44, likert_page_origin_39];
           let array40 = [likert_page43, likert_page_origin_40];
           let array41 = [likert_page45, likert_page_origin_41];
           let array42 = [likert_page48, likert_page_origin_42];
           let array43 = [likert_page51, likert_page_origin_43];
           let array44 = [likert_page52, likert_page_origin_44];
           let array45 = [likert_page49, likert_page_origin_45];
           let array46 = [likert_page53, likert_page_origin_46];
           let array47 = [likert_page50, likert_page_origin_47];
           let array48 = [likert_page54,likert_page55, likert_page_origin_48];
           let array49 = [likert_page59, likert_page_origin_49];
           let array50 = [likert_page56,likert_page57, likert_page58, likert_page_origin_50];

           
           let shuffled = array1.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled2 = array2.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled3 = array3.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled4 = array4.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled5 = array5.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled6 = array6.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled7 = array7.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled8 = array8.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled9 = array9.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled10 = array10.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled11 = array11.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled12 = array12.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled13 = array13.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled14 = array14.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled15 = array15.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled16 = array16.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled17 = array17.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled18 = array18.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled19 = array19.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled20 = array20.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled21 = array21.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled22 = array22.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled23 = array23.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled24 = array24.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled25 = array25.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled26 = array26.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled27 = array27.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled28 = array28.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled29 = array29.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled30 = array30.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled31 = array31.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled32 = array32.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled33 = array33.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled34 = array34.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled35 = array35.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled36 = array36.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled37 = array37.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled38 = array38.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled39 = array39.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled40 = array40.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled41 = array41.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled42 = array42.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled43 = array43.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled44 = array44.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled45 = array45.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled46 = array46.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled47 = array47.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled48 = array48.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled49 = array49.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           let shuffled50 = array50.map(a => ([Math.random(),a])).sort((a,b) => a[0]-b[0]).map(a => a[1])
           
           let total = [shuffled, shuffled2, shuffled3, shuffled4, shuffled5, shuffled6, shuffled7, shuffled8, shuffled9, shuffled10, shuffled11, shuffled12,
           shuffled13, shuffled14, shuffled15, shuffled16,shuffled17,shuffled18, shuffled19, shuffled20, shuffled21, shuffled22, shuffled23, shuffled24,shuffled25,
           shuffled26, shuffled27, shuffled28, shuffled29,shuffled30,shuffled31,shuffled32,shuffled33,shuffled34,shuffled35,shuffled36,shuffled37,shuffled38,shuffled39,
           shuffled40, shuffled41, shuffled42, shuffled43, shuffled44, shuffled45, shuffled46, shuffled47, shuffled48,shuffled49, shuffled50];

          //  console.log(sizeof(total));
          // console.log("그럼 이거는!~!:  "+total[0][0].questions.name);

          //  for($i=0; $i<6; $i=$i+1)
          //   {
          //     for($j =0; $j<total[$i].length ; $j = $j+1){
          //       // total[0][0].questions[0].name
          //    console.log("이거!~!:  "+total[$i][$j].questions[0].name);
          //    console.log("이거!~!:  "+total[$i][$j].questions[1].name);
          //   }
          // }

          // for($i=0; $i<10; $i=$i+1){
          // var random_tmp = generateRandom(0, 10);
          //     console.log(random_tmp);
          // }
//그냥 안겹치게 나오네...



            var printing = function(){
              for(var i =0; i<5; i++){
                for(var j=0; j<50; j++){
                  console.log(total_arr[i][j]+" ");
                }
                console.log("\n");
              }
            }

            var total_image_num =0;

              for(var i=0; i<total.length; i++){
                  total_image_num= total_image_num+total[i].length;
              }



            var total_cnt = 0;

            while(total_cnt<total_image_num){

              for(var i=0; i<50; i++){

                var random_tmp = generateRandom(0, 49);
                //난수 하나 뽑아오고, 어떤 배열 사용할지 정해졌지
                
                for(var j=0; j<total[random_tmp].length; j++){
                // for($j =0; $j<total[random_tmp].length ; $j = $j+1){
                  if(total_arr[j][random_tmp]==false){

                    // printing();
                    total_cnt=total_cnt+1;
                    timeline.push(total[random_tmp][j]);
                    total_arr[j][random_tmp] = true;
                    break;

                }
                // else continue;
            }
              
          }
          i=0; 
          j=0;

          for(var k=0;k<50; k++){
                arr_for_randomGenerator[k]= false;
              }
        }


        // timeline.push(likert_page);
        // timeline.push(likert_page2);
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
        // timeline.push(likert_page41);
        // timeline.push(likert_page42);
        // timeline.push(likert_page43);
        // timeline.push(likert_page44);
        // timeline.push(likert_page45);
        // timeline.push(likert_page46);
        // timeline.push(likert_page47);
        // timeline.push(likert_page48);
        // timeline.push(likert_page49);
        // timeline.push(likert_page50);
        // timeline.push(likert_page51);
        // timeline.push(likert_page52);
        // timeline.push(likert_page53);
        // timeline.push(likert_page54);
        // timeline.push(likert_page55);
        // timeline.push(likert_page56);
        // timeline.push(likert_page57);
        // timeline.push(likert_page58);
        // timeline.push(likert_page59);

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
        // timeline.push(likert_page_origin_37);
        // timeline.push(likert_page_origin_38);
        // timeline.push(likert_page_origin_39);
        // timeline.push(likert_page_origin_40);
        // timeline.push(likert_page_origin_41);
        // timeline.push(likert_page_origin_42);
        // timeline.push(likert_page_origin_43);
        // timeline.push(likert_page_origin_44);
        // timeline.push(likert_page_origin_45);
        // timeline.push(likert_page_origin_46);
        // timeline.push(likert_page_origin_47);
        // timeline.push(likert_page_origin_48);
        // timeline.push(likert_page_origin_49);
        // timeline.push(likert_page_origin_50);

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
