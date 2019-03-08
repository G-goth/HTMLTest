(function(){
    var table = document.getElementById("test_table");
    var newtr = table.insertRow();
    for(var i = 0; i < 3; ++i){
        var newtd = newtr.insertCell();
        newtd.appendChild( document.createTextNode('testtest'+i) );
    }
}());