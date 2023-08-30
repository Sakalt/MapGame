//↓グローバル変数
//↓国番号
var country_code;
//↓解答の国名 漢字
let answer_kanji;
//↓解答の
let answer_kana
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

//document.getElementById("japan_map_svg")
let japan_map_svg;

//data.jsonを連想配列に変換したもの
let data_json = [];

let japan_map_svg_fill = "#38b48b";

//問題数
let question_number = 47;

let answer_method = "selection";

let answer_array = ["北海道", "青森県", "秋田県"];

//スタートボタンを押した時間
let start_time;



function firstscript() {
    japan_map_svg = document.getElementById("japan_map_svg");

    //jsonを読み込む
    fetch('data/data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data_json = data;
            // for (let i = 0; data_json[country_code].svg_id.length > i; i++) {
            //     document.getElementById(data_json[country_code].svg_id[i]).style.fill = japan_map_svg_fill; //緑色にする
            //     //#47e63dff
            // }
        });
    for (let i = 0; i < document.querySelector("#japan_map_svg").children.length; i++) {
        document.querySelector("#japan_map_svg").children[i].style.fill = japan_map_svg_fill; //緑色にする
        document.querySelector("#japan_map_svg").children[i].style.stroke = "#000";
        document.querySelector("#japan_map_svg").children[i].style.strokeWidth = "3";
    }
    document.querySelector("#japan_map_svg > path:nth-child(3)").style.fill = "";

    document.querySelector("#japan_map_svg > path:nth-child(3)").style.stroke = "#fff";
    document.querySelector("#japan_map_svg > path:nth-child(3)").style.strokeWidth = "3";
    document.querySelector("#japan_map_svg > path:nth-child(4)").style.stroke = "#fff";
    document.querySelector("#japan_map_svg > path:nth-child(4)").style.strokeWidth = "3";

    //日本地図の向きを変える
    //document.getElementById("japan_map_svg").setAttribute("transform", "rotate(30)");

    hidden();
}



function hidden() {
    correct_answer_number = 0;
    incorrect_answer_number = 0;
    do_not_know_answer_number = 0;
    country_list_display = true;

    //↓わからない・不正解問題の国名の配列
    incorrect_answer_country = [];
    //正解・不正解text
    correct_answer_interface.style.display = "none";
    incorrect_answer_interface.style.visibility = "hidden";
    do_not_know_interface.style.display = "none";
    //↓回答条件・テキストボックス・ボタン・効果音チェックボックスの非表示
    document.getElementById("control_panel").style.display = "none";
    //↓画像の下の前の問題の答え
    document.getElementById("answerUI").style.display = "none";
    //↓結果発表画UI
    result.style.display = "none";
}



//↓1セット(50回)スタート
function setsstart() {
    start_time = Date.now();
    //↓各要素の非表示
    hidden();
    document.getElementById("main").style.gridTemplateRows = "auto";
    document.getElementById("logo").style.display = "none";
    //設定UI
    document.getElementById("setting").style.display = "none";

    //問題数を取得
    let elements = document.getElementsByName("question_number_slider");
    for (let i = 0; i < elements.length; i++) {
        if (elements.item(i).checked) {
            question_number = Number(elements.item(i).value);
        }
    }

    //回答方法
    elements = document.getElementsByName("answer_method");
    for (let i = 0; i < elements.length; i++) {
        if (elements.item(i).checked) {
            answer_method = elements.item(i).value;
        }
    }

    //↓問題番号の配列の生成
    var arr = [];
    numArr = [];
    for (var i = 0; i < question_number; i++) {
        arr[i] = i + 1;
    }
    for (var j = 0, len = arr.length; j < question_number; j++, len--) {
        rndNum = Math.floor(Math.random() * len);
        numArr.push(arr[rndNum]);
        arr[rndNum] = arr[len - 1];
    }
    //↓ログに配列表示(開発用)
    console.log(numArr);
    nth_question = 1;
    swal_boot = false;
    const sound_effect_button = document.getElementById("sound_effect_button");
    start();
}



//↓1問題スタート
function start() {
    japan_map_svg.style.display = "block";
    if (nth_question <= question_number) {
        //↓テキストボックスの内容を削除
        document.getElementById("country_name_input_field").value = "";

        //↓変数country_codeに乱数が入っている配列の数値を代入
        numArr_number = Number(nth_question) - 1;
        country_code = numArr[numArr_number];

        if (answer_method == "selection") {
            document.getElementById("bc").style.display = "none";
            document.getElementById("country_name_input_field").style.display = "none";
            document.getElementById("answer_button_0").style.display = "inline-flex";
            document.getElementById("answer_button_1").style.display = "inline-flex";
            document.getElementById("answer_button_2").style.display = "inline-flex";
            //乱数生成 何番目のテキストボックスに何を代入するか
            var arr = [0, 1, 2];
            var a = arr.length;
            //シャッフルアルゴリズム
            while (a) {
                var j = Math.floor(Math.random() * a);
                var t = arr[--a];
                arr[a] = arr[j];
                arr[j] = t;
            }
            //選択肢が東京都 東京都 大阪負 とか重複して出されることがあるので、それを解消させる
            answer_array[arr[0]] = data_json[Math.floor(Math.random() * 46)].prefectures_name;
            answer_array[arr[1]] = data_json[Math.floor(Math.random() * 46)].prefectures_name;
            answer_array[arr[2]] = data_json[country_code - 1].prefectures_name;
            document.getElementById("answer_button_0").innerText = answer_array[0];
            document.getElementById("answer_button_1").innerText = answer_array[1];
            document.getElementById("answer_button_2").innerText = answer_array[2];
            document.getElementById("answer_button_1").style.display = "inline-flex";
            document.getElementById("answer_button_2").style.display = "inline-flex";
        } else if (answer_method == "description") {
            document.getElementById("bc").style.display = "inline-flex";
            document.getElementById("country_name_input_field").style.display = "block";
            document.getElementById("answer_button_0").style.display = "none";
            document.getElementById("answer_button_1").style.display = "none";
            document.getElementById("answer_button_2").style.display = "none";
        } else {
            console.error("エラー");
        }

        //↓HTMLの書き換え(残り何問)
        var remaining_question_number = question_number + 1 - nth_question;
        document.getElementById("edit_area_remaining_question_number").innerHTML = "残り" + question_number + "問中" + remaining_question_number + "問";


        for (let i = 0; data_json[country_code - 1].svg_id.length > i; i++) {
            document.getElementById(data_json[country_code - 1].svg_id[i]).style.fill = "#ff0000"; //緑色にする
        }


        //↓テキストボックス関連のuiを表示
        document.getElementById("control_panel").style.display = "block";
        //↓画像の下の前の問題の答えを表示
        document.getElementById("answerUI").style.display = "block";
        //↓テキストボックスを選択状態にする
        document.getElementById("country_name_input_field").focus();

        //地図画像の幅と高さを変数に代入
        map_width = japan_map_svg.clientWidth;
        map_height = japan_map_svg.clientHeight;

        //移動させてた
    } else {
        //結果画面表示
        japan_map_svg.style.display = "none";
        //↓テキストボックス関連
        document.getElementById("control_panel").style.display = "none";
        //↓画像の下の前の問題の答え
        document.getElementById("answerUI").style.display = "block";
        //↓わからない・不正解問題の国名の配列のカンマをなくす
        incorrect_answer_country = (incorrect_answer_country.join(""));
        //↓スコアを求める
        //score = correct_answer_number * 2;

        //正答率を求める
        correct_answer_rate = Math.floor((correct_answer_number / question_number) * 10) * 10;

        //所要時間を求める
        let duration_raw = Date.now() - start_time;
        duration = Math.floor(duration_raw / 60000) + "分" + Math.floor(duration_raw % 60000) + "秒";
        //↓コメントを求める
        if (correct_answer_rate == 100) {
            comment = "やったね！ミスゼロおめでとう！";
        } else if (correct_answer_rate >= 90) {
            comment = "あと一歩！";
        } else if (correct_answer_rate >= 80) {
            comment = "あと少し";
        } else if (correct_answer_rate >= 70) {
            comment = "毎日、継続して暗記しましょう。";
        } else if (correct_answer_rate >= 60) {
            comment = "まだまだ伸びる";
        } else if (correct_answer_rate >= 50) {
            comment = "あと半分！";
        } else if (correct_answer_rate >= 40) {
            comment = "頑張りましょう！";
        } else {
            comment = "1日3つ継続して覚えよう！！";
        }
        //↓画像の下の前の問題の答え
        answerUI.style.display = "block";
        //↓正答率を求める
        //↓各edit_areaに各変数を挿入
        //↓不正解・わからない問題の答え
        document.getElementById("edit_area_Incorrect_Array").innerHTML = incorrect_answer_country;
        //↓スコア
        //document.getElementById("edit_area_score").innerHTML = score;
        //↓正答率
        document.getElementById("edit_area_correct_answer_rate").innerHTML = correct_answer_rate + "%";
        //↓正解数
        document.getElementById("edit_area_correct_answer_number").innerHTML = correct_answer_number;
        //↓不正解
        document.getElementById("edit_area_incorrect_answer_number").innerHTML = incorrect_answer_number;
        //わからない問題数
        document.getElementById("edit_area_do_not_know_answer_number").innerHTML = do_not_know_answer_number;
        //所要時間
        document.getElementById("edit_area_duration").innerText = duration;
        //コメント
        document.getElementById("edit_area_comment").innerHTML = comment;
        //↓結果発表画UIを表示
        result.style.display = "block";
        //↓国リストを表示してもよいようにする
        //country_list_display = true;

        var URL = "https://script.google.com/macros/s/AKfycbw2F219tLZSNwxRj38UJUiJSPnZF-S9dQD01lPeVFedXc2VvHSAKKOYcujAyd2bQiJkmQ/exec";

        var SendDATA = {
            "request_type": "set",
            "score": correct_answer_number,
            "question_number": question_number,
            "duration": duration_raw
        };

        var postparam = {
            "method": "POST",
            "mode": "no-cors",
            "Content-Type": "application/x-www-form-urlencoded",
            "body": JSON.stringify(SendDATA)
        };

        fetch(URL, postparam);
    }
}



//《エンターキー》が押されたら
function keydown_enter() {
    if (window.event.keyCode == 13) {
        //↓《回答ボタン》をクリックした設定にする
        answer_button_click();
    }
}



//↓《回答ボタン》が押されたら
function answer_button_click(button_number) {
    for (let i = 0; data_json[country_code - 1].svg_id.length > i; i++) {
        document.getElementById(data_json[country_code - 1].svg_id[i]).style.fill = japan_map_svg_fill; //緑色にリセットする
    }


    if (answer_method == "selection") {
        //↓変数answer_fieldにボタンのテキストを入れる
        answer_field = document.getElementById("answer_button_" + button_number).innerText;
    } else if (answer_method == "description") {
        //↓変数answer_fieldにテキストボックスの内容を入れる
        answer_field = document.getElementById("country_name_input_field").value;
    } else {
        console.error("エラー");
    }


    //↓answer_country_nameに問題の答えを代入
    answer_kanji = data_json[country_code - 1].prefectures_name;
    answer_kana = data_json[country_code - 1].prefectures_name_kana;
    //↓テキストボックスが空欄なら(変数answer_fieldを使っていないのはなんか上手くいかなかったため。)わからないとして処理する
    if (answer_field == "") {
        do_not_know_interface.style.display = "block";
        correct_answer_interface.style.display = "none";
        incorrect_answer_interface.style.display = "none";
        //↓わからない問題数の変数を上げる
        do_not_know_answer_number = do_not_know_answer_number + 1;
        //↓HTMLの書き換え(answerUI)
        document.getElementById("edit_area_blank").innerHTML = answer_kanji + "(" + answer_kana + ")";
        //↓効果音チェックボタンがチェックされてるなら、効果音を鳴らす
        if (sound_effect_button.checked) { document.getElementById("incorrect").play(); }
        //↓わからない・不正解問題の国名の配列に正しい国名を挿入(<br>タグもいれてる)
        incorrect_answer_country.unshift(answer_kanji + "(" + answer_kana + ")" + "<br>");
        //↓次の問題を出す
        nth_question = nth_question + 1;
        start();
    } else {

        let hiragana_decision = /[\u{3041}-\u{3093}\u{309B}-\u{309E}]/mu; //ひらがな判定
        let kanji_decision = /([\u{3005}\u{3007}\u{303b}\u{3400}-\u{9FFF}\u{F900}-\u{FAFF}\u{20000}-\u{2FFFF}][\u{E0100}-\u{E01EF}\u{FE00}-\u{FE02}]?)/mu; //漢字判定
        if (hiragana_decision.test(answer_field) == false && kanji_decision.test(answer_field) == false) {
            //漢字とひらがなを両方含まないなら
            swal_boot = true;
        } else if (hiragana_decision.test(answer_field) == true && kanji_decision.test(answer_field) == true) {
            //漢字とひらがなを両方含むなら
            swal_boot = true;
        } else {
            swal_boot = false;
        }

        //↓もし漢字またはカタカナでないなら
        if (swal_boot == false) {
            do_not_know_interface.style.display = "none";
            if (answer_field == answer_kanji || answer_field == answer_kana) {
                //正解だったら
                correct_answer_interface.style.display = "block";
                incorrect_answer_interface.style.display = "none";
                incorrect_answer_interface.style.visibility = "hidden";
                //↓正解数の変数を上げる
                correct_answer_number = correct_answer_number + 1;
                //↓効果音チェックボタンがチェックされてるなら、効果音を鳴らす
                if (sound_effect_button.checked) { document.getElementById("correct").play(); }
                //↓次の問題を出す
                nth_question = nth_question + 1;
                start();
            } else {
                //不正解だったら
                correct_answer_interface.style.display = "none";
                incorrect_answer_interface.style.display = "block";
                incorrect_answer_interface.style.visibility = "visible";
                //↓不正解数の変数を上げる
                incorrect_answer_number = incorrect_answer_number + 1;
                //↓テキストの内容を変更する
                document.getElementById("edit_area_incorrect").textContent = answer_kanji + "(" + answer_kana + ")";
                //↓効果音チェックボタンがチェックされてるなら、効果音を鳴らす
                if (sound_effect_button.checked) { document.getElementById("incorrect").play(); }
                //↓わからない・不正解問題の国名の配列に正しい国名を挿入(<br>タグもいれてる)
                incorrect_answer_country.unshift(answer_kanji + "(" + answer_kana + ")" + "<br>");
                //↓次の問題を出す
                nth_question = nth_question + 1;
                start();
            }
        } else {
            //↓テキストボックスの選択解除
            document.getElementById("country_name_input_field").blur();
            swal("「ひらがな」または「漢字」で答えなさい");
        }
    }
}



//↓《わからないボタン》が押されたら
function do_not_know_button() {
    for (let i = 0; data_json[country_code - 1].svg_id.length > i; i++) {
        document.getElementById(data_json[country_code - 1].svg_id[i]).style.fill = japan_map_svg_fill; //緑色にリセットする
    }
    const sound_effect_button = document.getElementById("sound_effect_button");
    //空欄だったら
    do_not_know_interface.style.display = "block";
    correct_answer_interface.style.display = "none";
    incorrect_answer_interface.style.display = "none";
    //↓わからない問題数の変数を上げる
    do_not_know_answer_number = do_not_know_answer_number + 1;
    //↓answer_country_nameに問題の答えを代入
    answer_kanji = data_json[country_code - 1].prefectures_name;
    answer_kana = data_json[country_code - 1].prefectures_name_kana;
    //↓テキストの内容を変更する
    document.getElementById("edit_area_blank").innerHTML = answer_kanji + "(" + answer_kana + ")";
    //↓効果音チェックボタンがチェックされてるなら、効果音を鳴らす
    if (sound_effect_button.checked) { document.getElementById("incorrect").play(); }
    //↓わからない・不正解問題の国名の配列に正しい国名を挿入(<br>タグもいれてる)
    incorrect_answer_country.unshift(answer_kanji + "(" + answer_kana + ")" + "<br>");
    nth_question = nth_question + 1;
    start();
}