/// <reference path="typings/index.d.ts" />
(function () {
    let table = document.getElementById("test_table");
    // 行を行末に追加
    let row = table.insertRow(-1);
    let row2 = table.insertRow(-1);

    // セルの挿入
    let cell1 = row.insertCell(-1);
    let cell2 = row.insertCell(-1);
    let cell3 = row.insertCell(-1);

    let cell4 = row2.insertCell(-1);
    let cell5 = row2.insertCell(-1);
    let cell6 = row2.insertCell(-1);
    
    // 行数取得
    let row_len = table.rows.length;
 
    // セルの内容入力
    cell1.innerHTML = "Test";
    cell2.innerHTML = row_len + "-" + 1;
    cell3.innerHTML = row_len + "-" + 2;
    cell4.innerHTML = "Test";
    cell5.innerHTML = row_len + "-" + 1;
    cell6.innerHTML = row_len + "-" + 2;
}());