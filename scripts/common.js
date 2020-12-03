

var Global = window.Global || {}

Global.Common = function () {
    return {
        Init: function () {

            $("#submitBtn").click(function(){
                var result = $("#submitBtn").valid();                
            });
        }
    }
}();
