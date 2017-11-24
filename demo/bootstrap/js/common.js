$(function() {
    var panelTitle = $('.panel-title');
    var titleList = [];
    panelTitle.each(function(index) {
        titleList.push($(this).text());
    });
    for (i in titleList) {
        var html = '<li><a href="#' + titleList[i] + '">' + titleList[i] + '</a></li>';
        $('#titleList').append(html);
    }
});