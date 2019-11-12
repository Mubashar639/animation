export default function jrun($) {
    var radius  // adjust to move out items in and out
    var fields = $(".item"),
        container = $("#container"),
        width = container.width(),
        height = container.height();
        if(width===300){
            radius=150
        }else{
            radius=120
        }
    var angle = 0,
        step = (2 * Math.PI) / fields.length;
    fields.each(function () {
        var x = Math.round(
            width / 2 + radius * Math.cos(angle) - $(this).width() / 2
        );
        var y = Math.round(
            height / 2 + radius * Math.sin(angle) - $(this).height() / 2
        );
        // if (window.console) {
        //     console.log($(this).text(), x, y);
        // }
        $(this).css({
            left: x + "px",
            top: y + "px"
        });
        angle += step;
    });
}