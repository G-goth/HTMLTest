/// <reference path="typings/index.d.ts" />
(function () {
    let table = document.getElementById("test_table");
    // 行を行末に追加
    const rowsCount = 4;
    let rowsArray = new Array();
    for (let i = 0; i < rowsCount; ++i) {
        rowsArray[i] = table.insertRow(-1);
    }

    // セルの挿入
    let hoge = [];
    for (let i = 1; i < rowsCount; ++i) {
        hoge[i] = [];
        for (let j = 0; j < 3; ++j) {
            hoge[i][j] = rowsArray[i].insertCell(-1);
            if(j == 0)
            {
                hoge[i][j].innerHTML = '<img src="img' + i + '.PNG" height="160" width="120">';
            }
            else if(j == 1)
            {
                hoge[i][j].innerHTML = "Test" + i;
            }
            else if(j == 2)
            {
                hoge[i][j].innerHTML = "Test" + i;
            }
        }
    }
}());