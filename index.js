(function(){
    var table = document.getElementById("test_table");
    /*var collection = table.rows;
    var tr = table.rows[0];
    var td = tr.cells[0];*/
    var newtr = table.insertRow();
    for(var i = 0; i < 2; ++i){
        var newtd = newtr.insertCell();
        newtd.appendChild( document.createTextNode('testtest'+i) );
    }
}());