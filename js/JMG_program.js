//↓グローバル変数
//↓国番号
var country_code;
//↓解答の国名
var answer_country_name;
//↓入力された国名
var answer_field;
//↓わからない・不正解問題の国名の配列
var incorrect_answer_country;
//↓正解問題数
var correct_answer_number;
//↓不正解問題数
var incorrect_answer_number;
//↓わからない問題数
var do_not_know_answer_number;
//↓何問目か
var nth_question;
//↓国リストを表示してよいか(true/false)
var country_list_display;



function firstscript() {
    hidden();
}



function hidden() {
    correct_answer_number = 0;
    incorrect_answer_number = 0;
    do_not_know_answer_number = 0;
    country_list_display = true;
    //↓わからない・不正解問題の国名の配列
    incorrect_answer_country = [];
    svg55.style.display ="none";
    //正解・不正解text
    correct_answer_interface.style.display ="none";
    incorrect_answer_interface.style.visibility ="hidden";
    do_not_know_interface.style.display ="none";
    //↓回答条件・テキストボックス・ボタン・効果音チェックボックスの非表示
    document.getElementById("control_panel").style.display ="none";
    //↓画像の下の前の問題の答え
    document.getElementById("answerUI").style.display ="none";
    //↓結果発表画UI
    result.style.display ="none";
}



//↓1セット(50回)スタート
function setsstart() {
    //↓各要素の非表示
    hidden();
    //↓問題番号の配列の生成
    var arr = [];
    numArr = [];
    for(var i=0; i < 50; i++){
        arr[i]=i+1;
    }
    for(var j = 0, len = arr.length; j < 50; j++, len--) {
        rndNum = Math.floor(Math.random()*len);
        numArr.push(arr[rndNum]);
        arr[rndNum] = arr[len-1];
    }
    //↓ログに配列表示(開発用)
    //console.log(numArr);
    nth_question = 1;
    //↓国リストを表示しないようにする
    country_list_display = false;
    //↓国リストを非表示に
    if(countrylist.style.display=="block"){
        countrylist.style.display ="none";
        country.style.display ="block";
        document.getElementById("country_listbutton").innerHTML = '<i class="fas fa-angle-up"></i>出題国リスト';
    }
    swal_boot = false;
    const sound_effect_button = document.getElementById("sound_effect_button");
    start();
}



//↓1問題スタート
function start() {
    svg55.style.display ="block";
    if(nth_question <= 50) {
        anime({
            targets: elem,
            translateY: 0,
            translateX: 0,
            scale: 1,
            easing:"easeOutCubic"
        })
        //↓テキストボックスの内容を削除
        document.getElementById("country_name_input_field").value = "";
        //↓HTMLの書き換え(残り何問)
        var remaining_question_number = 51 - nth_question;
        document.getElementById("edit_area_remaining_question_number").innerHTML = "残り50問中" + remaining_question_number + "問";
        //↓変数country_codeに乱数が入っている配列の数値を代入
        numArr_number = Number(nth_question) -1;
        var country_code = numArr[numArr_number];
        //↓answer_country_nameに答えを代入
        if(country_code == 1){answer_country_name = "イギリス";}
        if(country_code == 2){answer_country_name = "ポルトガル";}
        if(country_code == 3){answer_country_name = "スペイン";}
        if(country_code == 4){answer_country_name = "フランス";}
        if(country_code == 5){answer_country_name = "ドイツ";}
        if(country_code == 6){answer_country_name = "ポーランド";}
        if(country_code == 7){answer_country_name = "イタリア";}
        if(country_code == 8){answer_country_name = "スイス";}
        if(country_code == 9){answer_country_name = "ノルウェー";}
        if(country_code == 10){answer_country_name = "スウェーデン";}
        if(country_code == 11){answer_country_name = "フィンランド";}
        if(country_code == 12){answer_country_name = "ロシア";}
        if(country_code == 13){answer_country_name = "ウクライナ";}
        if(country_code == 14){answer_country_name = "トルコ";}
        if(country_code == 15){answer_country_name = "エジプト";}
        if(country_code == 16){answer_country_name = "リビア";}
        if(country_code == 17){answer_country_name = "モロッコ";}
        if(country_code == 18){answer_country_name = "コートジボワール";}
        if(country_code == 19){answer_country_name = "ガーナ";}
        if(country_code == 20){answer_country_name = "ナイジェリア";}
        if(country_code == 21){answer_country_name = "エチオピア";}
        if(country_code == 22){answer_country_name = "ケニア";}
        if(country_code == 23){answer_country_name = "タンザニア";}
        if(country_code == 24){answer_country_name = "南アフリカ共和国";}
        if(country_code == 25){answer_country_name = "サウジアラビア";}
        if(country_code == 26){answer_country_name = "イラク";}
        if(country_code == 27){answer_country_name = "イラン";}
        if(country_code == 28){answer_country_name = "カザフスタン";}
        if(country_code == 29){answer_country_name = "インド";}
        if(country_code == 30){answer_country_name = "ミャンマー";}
        if(country_code == 31){answer_country_name = "タイ";}
        if(country_code == 32){answer_country_name = "マレーシア";}
        if(country_code == 33){answer_country_name = "シンガポール";}
        if(country_code == 34){answer_country_name = "インドネシア";}
        if(country_code == 35){answer_country_name = "フィリピン";}
        if(country_code == 36){answer_country_name = "中国";}
        if(country_code == 37){answer_country_name = "モンゴル";}
        if(country_code == 38){answer_country_name = "北朝鮮";}
        if(country_code == 39){answer_country_name = "韓国";}
        if(country_code == 40){answer_country_name = "日本";}
        if(country_code == 41){answer_country_name = "オーストラリア";}
        if(country_code == 42){answer_country_name = "ニュージーランド";}
        if(country_code == 43){answer_country_name = "カナダ";}
        if(country_code == 44){answer_country_name = "アメリカ";}
        if(country_code == 45){answer_country_name = "メキシコ";}
        if(country_code == 46){answer_country_name = "コロンビア";}
        if(country_code == 47){answer_country_name = "ペルー";}
        if(country_code == 48){answer_country_name = "ブラジル";}
        if(country_code == 49){answer_country_name = "アルゼンチン";}
        if(country_code == 50){answer_country_name = "チリ";}
        //alert("今入力して");
        //↓答えをログに表示(開発用)
        //console.log(answer_country_name);
        //↓テキストボックス関連のuiを表示
        document.getElementById("control_panel").style.display ="block";
        //↓画像の下の前の問題の答えを表示
        document.getElementById("answerUI").style.display ="block";
        //↓テキストボックスを選択状態にする
        document.getElementById("country_name_input_field").focus();
        //↓ページトップに移動
        scrollTo(0,0);
        //非表示
        startdisplay.style.display ="none";
        if (country_code != 1) {document.getElementById("path144").style.fill ="#47e63dff";attention4letters.style.display="none";}
        if (country_code != 2) {document.getElementById("path154").style.fill ="#47e63dff";}
        if (country_code != 3) {document.getElementById("path152").style.fill ="#47e63dff";}
        if (country_code != 4) {document.getElementById("path146").style.fill ="#47e63dff";}
        if (country_code != 5) {document.getElementById("path128").style.fill ="#47e63dff";}
        if (country_code != 6) {document.getElementById("path124").style.fill ="#47e63dff";}
        if (country_code != 7) {document.getElementById("path150").style.fill ="#47e63dff";}
        if (country_code != 8) {document.getElementById("path132").style.fill ="#47e63dff";}
        if (country_code != 9) {document.getElementById("path82").style.fill ="#47e63dff";}
        if (country_code != 10) {document.getElementById("path84").style.fill ="#47e63dff";}
        if (country_code != 11) {document.getElementById("path86").style.fill ="#47e63dff";}
        if (country_code != 12) {document.getElementById("path16").style.fill ="#47e63dff";attention3letters.style.display="none";}
        if (country_code != 13) {document.getElementById("path96").style.fill ="#47e63dff";}
        if (country_code != 14) {document.getElementById("path164").style.fill ="#47e63dff";}
        if (country_code != 15) {document.getElementById("path202").style.fill ="#47e63dff";}
        if (country_code != 16) {document.getElementById("path220").style.fill ="#47e63dff";}
        if (country_code != 17) {document.getElementById("path226").style.fill ="#47e63dff";}
        if (country_code != 18) {document.getElementById("path248").style.fill ="#47e63dff";}
        if (country_code != 19) {document.getElementById("path250").style.fill ="#47e63dff";}
        if (country_code != 20) {document.getElementById("path260").style.fill ="#47e63dff";}
        if (country_code != 21) {document.getElementById("path206").style.fill ="#47e63dff";}
        if (country_code != 22) {document.getElementById("path214").style.fill ="#47e63dff";}
        if (country_code != 23) {document.getElementById("path276").style.fill ="#47e63dff";}
        if (country_code != 24) {document.getElementById("path312").style.fill ="#47e63dff";}
        if (country_code != 25) {document.getElementById("path184").style.fill ="#47e63dff";}
        if (country_code != 26) {document.getElementById("path166").style.fill ="#47e63dff";}
        if (country_code != 27) {document.getElementById("path160").style.fill ="#47e63dff";}
        if (country_code != 28) {document.getElementById("path30").style.fill ="#47e63dff";}
        if (country_code != 29) {document.getElementById("path66").style.fill ="#47e63dff";}
        if (country_code != 30) {document.getElementById("path62").style.fill ="#47e63dff";}
        if (country_code != 31) {document.getElementById("path60").style.fill ="#47e63dff";}
        if (country_code != 32) {document.getElementById("path50").style.fill ="#47e63dff";}
        if (country_code != 33) {document.getElementById("path1234").style.fill ="#47e63dff";}
        if (country_code != 34) {document.getElementById("path46").style.fill ="#47e63dff";}
        if (country_code != 35) {document.getElementById("path44").style.fill ="#47e63dff";}
        if (country_code != 36) {document.getElementById("path18").style.fill ="#47e63dff";attention2letters.style.display="none";}
        if (country_code != 37) {document.getElementById("path28").style.fill ="#47e63dff";}
        if (country_code != 38) {document.getElementById("path26").style.fill ="#47e63dff";attention3letters.style.display="none";}
        if (country_code != 39) {document.getElementById("path24").style.fill ="#47e63dff";attention2letters.style.display="none";}
        if (country_code != 40) {document.getElementById("path22").style.fill ="#47e63dff";}
        if (country_code != 41) {document.getElementById("path316").style.fill ="#47e63dff";}
        if (country_code != 42) {document.getElementById("path318").style.fill ="#47e63dff";}
        if (country_code != 43) {document.getElementById("path334").style.fill ="#47e63dff";}
        if (country_code != 44) {document.getElementById("path348").style.fill ="#47e63dff";document.getElementById("path336").style.fill ="#47e63dff";attention4letters.style.display="none";}
        if (country_code != 45) {document.getElementById("path366").style.fill ="#47e63dff";}
        if (country_code != 46) {document.getElementById("path378").style.fill ="#47e63dff";}
        if (country_code != 47) {document.getElementById("path382").style.fill ="#47e63dff";}
        if (country_code != 48) {document.getElementById("path368").style.fill ="#47e63dff";}
        if (country_code != 49) {document.getElementById("path390").style.fill ="#47e63dff";}
        if (country_code != 50) {document.getElementById("path392").style.fill ="#47e63dff";}
        //地図画像の幅と高さを変数に代入
        map_width = document.getElementById("svg55").clientWidth;
        map_height = document.getElementById("svg55").clientHeight;
        //基準値
        base_x = 0.039419425;
        base_y = 0.07;
        if (country_code == 1) {
            document.getElementById("path144").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*4.92,
                translateX: map_width*base_x*-0.41,
                scale: 2,
                easing:"easeOutCubic"
            })
            attention4letters.style.display="block";
        }
        if (country_code == 2) {
            document.getElementById("path154").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*2.01*2,
                translateX: map_width*base_x*1.04*2,
                scale: 4,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 3) {
            document.getElementById("path152").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*2.1,
                translateX: map_width*base_x*0.34,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 4) {
            document.getElementById("path146").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*3.18,
                translateX: map_width*base_x*-0.29,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 5) {
            document.getElementById("path128").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*4.07,
                translateX: map_width*base_x*-1.26,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 6) {
            document.getElementById("path124").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*4.23,
                translateX: map_width*base_x*-2.35,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 7) {
            document.getElementById("path150").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*2.43,
                translateX: map_width*base_x*-1.6,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 8) {
            document.getElementById("path132").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*3.28*2,
                translateX: map_width*base_x*-1*2,
                scale: 4,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 9) {
            document.getElementById("path82").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*7,
                translateX: map_width*base_x*-1.91,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 10) {
            document.getElementById("path84").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*6.44,
                translateX: map_width*base_x*-1.98,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 11) {
            document.getElementById("path86").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*7.07,
                translateX: map_width*base_x*-2.89,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 12) {
            document.getElementById("path16").style.fill ="#ff0000";
            attention3letters.style.display="block";
        }
        if (country_code == 13) {
            document.getElementById("path96").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*3.62,
                translateX: map_width*base_x*-3.96,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 14) {
            document.getElementById("path164").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*1.97,
                translateX: map_width*base_x*-4.66,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 15) {
            document.getElementById("path202").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: 0,
                translateX: map_width*base_x*-4.23,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 16) {
            document.getElementById("path220").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: 0,
                translateX: map_width*base_x*-2.36,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 17) {
            document.getElementById("path226").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*0.75,
                translateX: map_width*base_x*0.94,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 18) {
            document.getElementById("path248").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*-2.78*2,
                translateX: map_width*base_x*0.73*2,
                scale: 4,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 19) {
            document.getElementById("path250").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*-2.72*2,
                translateX: map_width*base_x*0.13,
                scale: 4,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 20) {
            document.getElementById("path260").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*-2.57,
                translateX: map_width*base_x*-1.23,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 21) {
            document.getElementById("path206").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*-2.53,
                translateX: map_width*base_x*-5.68,//これミスってるから測定しなおし
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 22) {
            document.getElementById("path214").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*-3.78,
                translateX: map_width*base_x*-5.3,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 23) {
            document.getElementById("path276").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*-4.79,
                translateX: map_width*base_x*-4.87,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 24) {
            document.getElementById("path312").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*-7.98,
                translateX: map_width*base_x*-3.33,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 25) {
            document.getElementById("path184").style.fill ="#ff0000";
        }
        if (country_code == 26) {
            document.getElementById("path166").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*1.03,
                translateX: map_width*base_x*-5.93,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 27) {
            document.getElementById("path160").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*0.95,
                translateX: map_width*base_x*-7.29,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 28) {
            document.getElementById("path30").style.fill ="#ff0000";
        }
        if (country_code == 29) {
            document.getElementById("path66").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*0.81,
                translateX: map_width*base_x*-11.44,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 30) {
            document.getElementById("path62").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*-1.05,
                translateX: map_width*base_x*-13.44,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 31) {
            document.getElementById("path60").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*-1.96,
                translateX: map_width*base_x*-14.19,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 32) {
            document.getElementById("path50").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*-3.31,
                translateX: map_width*base_x*-15.43,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 33) {
            document.getElementById("path1234").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*-3.7*2,
                translateX: map_width*base_x*-14.69*2,
                scale: 4,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 34) {
            document.getElementById("path46").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*-4.23,
                translateX: map_width*base_x*-16.62,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 35) {
            document.getElementById("path44").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*-2.01,
                translateX: map_width*base_x*-17.12,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 36) {
            document.getElementById("path18").style.fill ="#ff0000";
            attention2letters.style.display="block";
        }
        if (country_code == 37) {
            document.getElementById("path28").style.fill ="#ff0000";
        }
        if (country_code == 38) {
            document.getElementById("path26").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*2.79*2,
                translateX: map_width*base_x*-17.05*2,
                scale: 4,
                easing:"easeOutCubic"
            })
            attention3letters.style.display="block";
        }
        if (country_code == 39) {
            document.getElementById("path24").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*1.93*2,
                translateX: map_width*base_x*-17.33*2,
                scale: 4,
                easing:"easeOutCubic"
            })
            attention2letters.style.display="block";
        }
        if (country_code == 40) {
            document.getElementById("path22").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*1.91,
                translateX: map_width*base_x*-18.3,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 41) {
            document.getElementById("path316").style.fill ="#ff0000";
        }
        if (country_code == 42) {
            document.getElementById("path318").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*-11.95,
                translateX: map_width*base_x*-22.83,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 43) {
            document.getElementById("path334").style.fill ="#ff0000";
        }
        if (country_code == 44) {
            document.getElementById("path348").style.fill ="#ff0000";
            document.getElementById("path336").style.fill ="#ff0000";
            attention4letters.style.display="block";}
        if (country_code == 45) {
            document.getElementById("path366").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*0.32,
                translateX: map_width*base_x*13.95,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 46) {
            document.getElementById("path378").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*-3.27,
                translateX: map_width*base_x*10.43,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 47) {
            document.getElementById("path382").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*-5.21,
                translateX: map_width*base_x*10.43,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 48) {
            document.getElementById("path368").style.fill ="#ff0000";
        }
        if (country_code == 49) {
            document.getElementById("path390").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*-9.98,
                translateX: map_width*base_x*8.4,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
        if (country_code == 50) {
            document.getElementById("path392").style.fill ="#ff0000";
            anime({
                targets: elem,
                translateY: map_height*base_y*-9.74,
                translateX: map_width*base_x*9.08,
                scale: 2,
                easing:"easeOutCubic"
            })
        }
    }else{
        //結果画面表示
        svg55.style.display ="none";
        //↓テキストボックス関連
        document.getElementById("control_panel").style.display ="none";
        //↓画像の下の前の問題の答え
        document.getElementById("answerUI").style.display ="block";
        //↓わからない・不正解問題の国名の配列のカンマをなくす
        incorrect_answer_country=( incorrect_answer_country.join("") );
        //↓スコアを求める
        score = correct_answer_number * 2;
        //↓ランク・コメントを求める
        //50
        if(correct_answer_number == 50) {
            rank = "PERFECT!!!";
            comment = "やったね！ミスゼロおめでとう！";
        //49
        }else if (correct_answer_number >= 49) {
            rank = "S+";
            comment = "あと1問！";
        //46/47/48
        }else if (correct_answer_number >= 46) {
            rank = "S";
            comment = "あと一歩！";
        //42/43/44/45
        }else if (correct_answer_number >= 42) {
            rank = "S-";
            comment = "あと少しで満点！";
        //39/41/42
        }else if (correct_answer_number >= 39) {
            rank = "A+";
            comment = "あと少しで「S」";
        //35/36/37/38
        }else if (correct_answer_number >= 35) {
            rank = "A";
            comment = "毎日、継続して暗記しましょう。";
        //32/33/34
        }else if (correct_answer_number >= 32) {
            rank = "A-";
            comment = "もう少し！";
        //28/29/30/31
        }else if (correct_answer_number >= 28) {
            rank = "B+";
            comment = "あと20個で満点！";
        //25/26/27
        }else if (correct_answer_number >= 25) {
            rank = "B";
            comment = "あと半分！！";
        //21/22/23/24
        }else if (correct_answer_number >= 21) {
            rank = "B-";
            comment = "頑張りましょう！";
        //18/19/20
        }else if (correct_answer_number >= 18) {
            rank = "C+";
            comment = "頑張りましょう！";
        //14/15/16/17
        }else if (correct_answer_number >= 14) {
            rank = "C";
            comment = "1日3つ継続して覚えよう！！";
        //11/12/13
        }else if (correct_answer_number >= 11) {
            rank = "C-";
            comment = "1日3つ継続して覚えよう！！";
        //7/8/9/10
        }else if (correct_answer_number >= 7) {
            rank = "D+";
            comment = "1日3つ継続して覚えよう！！";
        //4/5/6
        }else if (correct_answer_number >= 4) {
            rank = "D";
            comment = "1日3つ継続して覚えよう！！";
        //1/2/3
        }else{
            rank = "D-";
            comment = "1日3つ継続して覚えよう！！";
        }
        //↓画像の下の前の問題の答え
        answerUI.style.display ="block";
        //↓正答率を求める
        correct_answer_rate = correct_answer_number / 50 * 100;
        //↓各edit_areaに各変数を挿入
        //↓不正解・わからない問題の答え
        document.getElementById("edit_area_Incorrect_Array").innerHTML = incorrect_answer_country;
        //↓スコア
        document.getElementById("edit_area_score").innerHTML = score;
        //↓ランク
        document.getElementById("edit_area_rank").innerHTML = rank;
        //↓正答率
        document.getElementById("edit_area_correct_answer_rate").innerHTML = correct_answer_rate + "%";
        //↓正解数
        document.getElementById("edit_area_correct_answer_number").innerHTML = correct_answer_number;
        //↓不正解
        document.getElementById("edit_area_incorrect_answer_number").innerHTML = incorrect_answer_number;
        //わからない問題数
        document.getElementById("edit_area_do_not_know_answer_number").innerHTML = do_not_know_answer_number;
        //コメント
        document.getElementById("edit_area_comment").innerHTML = comment;
        //↓結果発表画UIを表示
        result.style.display ="block";
        //↓国リストを表示してもよいようにする
        country_list_display = true;
    }
}



//《エンターキー》が押されたら
function keydown_enter() {
    if(window.event.keyCode == 13) {
        //↓《回答ボタン》をクリックした設定にする
        answer_button_click();
    }
}



//↓《回答ボタン》が押されたら
function answer_button_click(){
    //↓変数answer_fieldにテキストボックスの内容を入れる
    answer_field = document.getElementById("country_name_input_field").value;
    //↓テキストボックスが空欄なら(変数answer_fieldを使っていないのはなんか上手くいかなかったため。)
    if(document.getElementById("country_name_input_field").value == ""){
        do_not_know_interface.style.display ="block";
        correct_answer_interface.style.display ="none";
        incorrect_answer_interface.style.display ="none";
        //↓わからない問題数の変数を上げる
        do_not_know_answer_number = do_not_know_answer_number + 1;
        //↓HTMLの書き換え(answerUI)
        document.getElementById("edit_area_blank").innerHTML = answer_country_name;
        //↓効果音チェックボタンがチェックされてるなら、効果音を鳴らす
        if(sound_effect_button.checked){document.getElementById("incorrect").play();}
        //↓わからない・不正解問題の国名の配列に正しい国名を挿入(<br>タグもいれてる)
        incorrect_answer_country.unshift(answer_country_name+"<br>");
        //↓次の問題を出す
        nth_question = nth_question + 1;
        start();
    }else{
        //↓配列arraySplitに変数answer_fieldの内容を1文字ずつ代入する
        let arraySplit = answer_field.split("");
        swal_boot = false;
        //↓変数answer_fieldに入力された文字の数だけ繰り返す
        for (let i = 0; i < arraySplit.length; i++) {
            //↓変数cに配列arraySplitを1文字ずつ代入する
            var cc = arraySplit.slice(i, i+1);
            //↓もし漢字またはカタカナなら※String(cc)は文字列に変換してる
            if(String(cc).match(/^([\u{3005}\u{3007}\u{303b}\u{3400}-\u{9FFF}\u{F900}-\u{FAFF}\u{20000}-\u{2FFFF}][\u{E0100}-\u{E01EF}\u{FE00}-\u{FE02}]?)+$/mu) || String(cc).match(/^[\u{3000}-\u{301C}\u{30A1}-\u{30F6}\u{30FB}-\u{30FE}]+$/mu)){
            }else{
                swal_boot = true;
            }
        }
        //↓もし漢字またはカタカナでないなら
        if(swal_boot == false){
            do_not_know_interface.style.display ="none";
                if(answer_field == answer_country_name){
                    //正解だったら
                    correct_answer_interface.style.display ="block";
                    incorrect_answer_interface.style.display ="none";
                    incorrect_answer_interface.style.visibility ="hidden";
                    //↓正解数の変数を上げる
                    correct_answer_number = correct_answer_number + 1;
                    //↓効果音チェックボタンがチェックされてるなら、効果音を鳴らす
                    if(sound_effect_button.checked){document.getElementById("correct").play();}
                    //↓次の問題を出す
                    nth_question = nth_question + 1;
                    start();
                }else{
                    //不正解だったら
                    correct_answer_interface.style.display ="none";
                    incorrect_answer_interface.style.display ="block";
                    incorrect_answer_interface.style.visibility ="visible";
                    //↓不正解数の変数を上げる
                    incorrect_answer_number = incorrect_answer_number + 1;
                    //↓テキストの内容を変更する
                    document.getElementById("edit_area_incorrect").textContent = answer_country_name;
                    //↓効果音チェックボタンがチェックされてるなら、効果音を鳴らす
                    if(sound_effect_button.checked){document.getElementById("incorrect").play();}
                    //↓わからない・不正解問題の国名の配列に正しい国名を挿入(<br>タグもいれてる)
                    incorrect_answer_country.unshift(answer_country_name+"<br>");
                    //↓次の問題を出す
                    nth_question = nth_question + 1;
                    start();
                }
        }else{
            //↓テキストボックスの選択解除
            document.getElementById("country_name_input_field").blur();
            swal("「カタカナ」または「漢字」で答えなさい");
        }
    }
}



//↓《わからないボタン》が押されたら
function do_not_know_button() {
    const sound_effect_button = document.getElementById("sound_effect_button");
    //空欄だったら
    do_not_know_interface.style.display ="block";
    correct_answer_interface.style.display ="none";
    incorrect_answer_interface.style.display ="none";
    //↓わからない問題数の変数を上げる
    do_not_know_answer_number = do_not_know_answer_number + 1;
    //↓テキストの内容を変更する
    document.getElementById("edit_area_blank").innerHTML = answer_country_name;
    //↓効果音チェックボタンがチェックされてるなら、効果音を鳴らす
    if(sound_effect_button.checked){document.getElementById("incorrect").play();}
    //↓わからない・不正解問題の国名の配列に正しい国名を挿入(<br>タグもいれてる)
    incorrect_answer_country.unshift(answer_country_name+"<br>");
    nth_question = nth_question + 1;
    start();
}



//↓《出題国リストボタン》が押されたら
function country_list(){
    const country = document.getElementById("country");
    const countrylist = document.getElementById("countrylist");
    //↓国リストを表示してよいか(出題中でないか)
    if(country_list_display == true){
        if(countrylist.style.display=="block"){
            countrylist.style.display ="none";
            country.style.display ="none";
            document.getElementById("country_list_arrow").className = "fas fa-chevron-down";
        }else{
            countrylist.style.display ="block";
            country.style.display ="none";
            document.getElementById("country_list_arrow").className = "fas fa-chevron-up";
        }
    }else{
        countrylist.style.display ="none";
        //document.getElementById("country_list_arrow").className = "fas fa-chevron-down";
        if(country.style.display=="block"){
            country.style.display ="none";
            document.getElementById("country_list_arrow").className = "fas fa-chevron-down";
        }else{
            country.style.display ="block";
            document.getElementById("country_list_arrow").className = "fas fa-chevron-up";
        }
    }
}