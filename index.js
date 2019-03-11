/// <reference path="typings/index.d.ts" />
(function () {
    let table = document.getElementById("test_table");
    let newtr = table.insertRow();
    for (let i = 0; i < table.rows.length; ++i) {
        let newtd = newtr.insertCell();
        newtd.appendChild(document.createTextNode("testtest" + i));
    }
}());