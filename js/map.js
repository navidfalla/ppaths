
var attacker = true;

$(function(){
  firstFloor();
  secondFloor();
  basementFloor();
  $('#firstFloorBtn').click();
  drawThreat (102.5, 232.5);

  $('.coverage-area').popover({
    'html': true,
    //container: 'body',
    trigger: 'focus'
  });

  // view camera button
  $(document).on('click', '.view-cam-btn', function(){
    //var coverageAreaID = $(this).nextAll('input').eq(0).val();
    //var selection = d3.select("#" + coverageAreaID);
    //selection.styles("fill", "purple");
    // console.log('view cam button has parent ID: '+coverageAreaID);
    var roomId = $(this).data('roomId');
    var polygon = d3.select('polygon#'+roomId);
    // var mouseCoord = [0, 0];
    // mouseCoord = d3.mouse(this);
    // var x = mouseCoord[0];
    // var y = mouseCoord[1];
    //calculate midX
    //var midX = (polygon.points[0].x + polygon.points[3].x) / 2;
    //calculate midY
    //var midY = (polygon.points[0].y + polygon.points[1].y) / 2;
    // do you stuff here with polygon
    polygon.style('fill','red'); //test
    //select the svg that the polygon is in
    var polygonParent = polygon.select(function() { return this.parentNode; });
    //clean the last selection
      //select the parent
    var svgParent = polygonParent.select(function() { return this.parentNode; });
      //delete circle element from children
    svgParent.selectAll('.view').remove();
    //add icon
    polygonParent.append('text')
                .attr('text-anchor', 'middle')
                .attr('dominant-baseline', 'central')
                .attr("x", "102.5")
                .attr("y", "232.5")
                .attr("class", "view")
                .style('font-family','FontAwesome')
                .style('font-size','25px')
                .style('color', function(d){
                  if(attacker===false) {return "blue"}
                  else {return "red"}
                  ;})
                .text(function (d) {
                return '\uf2be'
                })
    });

  // set dest button
  $(document).on('click', '.set-dest-btn', function(){
      var roomId = $(this).data('roomId');
      var polygon = d3.select('polygon#'+roomId);
      //var polygonId = polygon.attr('id');
      //calculate midX
      //var midX = function (){ return (polygon.points[0].x + polygon.points[3].x) / 2; };
      //calculate midY
      //var midY = (polygon.points[0].y + polygon.points[1].y) / 2;
      // do you stuff here with polygon
      polygon.style('fill','purple'); //test
      //select the svg that the polygon is in
      var polygonParent = polygon.select(function() { return this.parentNode; });
      //clean the last selection
        //select the parent
      var svgParent = polygonParent.select(function() { return this.parentNode; });
        //delete circle element from children
      svgParent.selectAll('.dest').remove();
      //polygonParent.append('circle').attr('cx', 102.5).attr('cy', 232.5).attr('r', 10).style('fill', 'red'); //addfontawesome
      polygonParent.append('text')
                    .attr('text-anchor', 'middle')
                    .attr('dominant-baseline', 'central')
                    .attr("x", "102.5")
                    .attr("y", "232.5")
                    .attr("class", "dest")
                    .style('font-family','FontAwesome')
                    .style('font-size','30px')
                    .style('color', 'green')
                    .text(function (d) {
                    return '\uf041'
                    })
    });

  $('.coverage-area').click(function(){
    console.log('the ID of this coverage area is: '+$(this).attr('id'));
  });

});



//button functions
$('#firstFloorBtn').click(function(){
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
    //canvas.remove();
    hideFloors();
    $('#firstFloor').show();

    $('.coverage-area').popover({
      'html': true,
      //container: 'body',
      trigger: 'focus'
    });
});

$('#secondFloorBtn').click(function(){
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
    //canvas.remove();
    //secondFloor();
    hideFloors();
    $('#secondFloor').show();

    $('.coverage-area').popover({
      'html': true,
      //container: 'body',
      trigger: 'focus'
    });
});

$('#basementFloorBtn').click(function(){
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
    //canvas.remove();
    //basementFloor();
    hideFloors();
    $('#basementFloor').show();

    $('.coverage-area').popover({
      'html': true,
      //container: 'body',
      trigger: 'focus'
    });
});

var canvas;

function drawThreat (x, y){
  canvas = d3.select("#map")
    .append("svg")
      .attr("width", 500)
      .attr("height", 500)

  var Threat = canvas.append('svg')
                    .append('text')
                    .attr('text-anchor', 'middle')
                    .attr('dominant-baseline', 'central')
                    .attr("x", x)
                    .attr("y", y)
                    .attr("class", "threat")
                    .style('font-family','FontAwesome')
                    .style('font-size','30px')
                    .style('color', 'red')
                    .text(function (d) {
                    return '\uf2be'
                    });
        return Threat
};

function createPopover(roomId) {
     var content = '<button id="view" data-room-id="'+roomId+'" class="btn btn-sm btn-primary view-cam-btn">View Camera</button>'+
                   '<button id="set" data-room-id="'+roomId+'" class="btn btn-sm btn-primary set-dest-btn">Set Destination</button> ';
     return content;
}

function hideFloors() {
  $('#firstFloor').hide();
  $('#secondFloor').hide();
  $('#basementFloor').hide();
}

function createRoom(number,polygon){
  var roomId = 'room'+number;
  var content = createPopover(roomId);
  var room  = canvas.append("svg")
    .append("polygon")
    .attr("points", polygon)
    .attr("class", "coverage-area")
    .attr("id", roomId)
    .attr("data-toggle", "popover")
    .attr('data-placement', 'top')
    .attr("data-content", content)
    .attr("tabindex", "0")
    .attr("data-trigger", "focus");
    return room;
}

function firstFloor() {
  $("#firstFloorBtn").siblings().removeClass('active')
  $("#firstFloorBtn").addClass("active");
  // create an svg element and append it
  canvas = d3.select("#map")
    .append("svg")
      .attr("width", 500)
      .attr("height", 500)
      .attr("id", "firstFloor");

  // draw Polygons
  var roomA1 = createRoom('A1',[[65, 215], [65, 250], [140, 250], [140, 215]]); //[102.5, 232.5]
  var roomA2 = createRoom('A2',[[140, 215], [140, 278], [230, 278], [230, 215]]);
  var roomA3 = createRoom('A3',[[230, 215], [230, 278], [320, 278], [320, 215]]);
  var roomA4 = createRoom('A4',[[320, 215], [320, 278], [400, 278], [400, 215]]);
  var roomA5 = createRoom('A5',[[65, 250], [65, 278], [140, 278], [140, 250]]);
  var roomA6 = createRoom('A6',[[42, 215], [42, 278], [65, 278], [65, 215]]);
  var roomA7 = createRoom('A7',[[332, 120], [332, 215], [355, 215], [355, 120]]);
  var roomA8 = createRoom('A8',[[302, 120], [302, 215], [332, 215], [332, 120]]);
  var roomA9 = createRoom('A9',[[302, 99], [302, 120], [355, 120], [355, 99]]);
  var roomA9 = createRoom('A10',[[408, 215], [408, 278], [462, 278], [462, 215]]);


    // function badGuy() {
    //   $(document).on('click', '.view-cam-btn', function(){
    //     var coverageAreaID = $(this).nextAll('input').eq(0).val();
    //     var selection = canvas.select("#" + coverageAreaID).styles("fill", "purple");
    //     console.log('yo yo yo '+selection.attrs('id'));
    //     //var circle = canvas.append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "purple");
    //    console.log('view cam button has parent ID: '+coverageAreaID);
    //     });
    // }
    //
    // firstFloor.badGuy = badGuy;
}

function secondFloor(){
  $("#secondFloorBtn").siblings().removeClass('active')
  $("#secondFloorBtn").addClass("active");
  canvas = d3.select("#map")
    .append("svg")
      .attr("width", 500)
      .attr("height", 500)
      .attr("id", "secondFloor");

  var roomB1 = createRoom('B1', [[362, 218], [362, 282], [490, 282], [490, 218]]);
  var roomB2 = createRoom('B2', [[280, 218], [280, 282], [362, 282], [362, 218]]);
  var roomB3 = createRoom('B3', [[200, 218], [200, 282], [280, 282], [280, 218]]);
  var roomB4 = createRoom('B4', [[143, 218], [143, 282], [200, 282], [200, 218]]);
  var roomB5 = createRoom('B5', [[106, 253], [106, 282], [143, 282], [143, 253]]);
  var roomB6 = createRoom('B6', [[22, 253], [22, 282], [106, 282], [106, 253]]);
  var roomB7 = createRoom('B7', [[22, 218], [22, 253], [110, 253], [110, 218]]);
  var roomB8 = createRoom('B8', [[334, 70], [334, 218], [363, 218], [363, 70]]);
  var roomB9 = createRoom('B9', [[306, 70], [306, 218], [334, 218], [334, 70]]);
  var roomB10 = createRoom('B10', [[368, 80], [368, 211], [400, 211], [400, 80]]);
  var roomB11 = createRoom('B11', [[368, 12], [368, 80], [490, 80], [490, 12]]);
  var roomB12 = createRoom('B12', [[23, 70], [23, 215], [176, 215], [176, 70]]);
}

function basementFloor(){
  $("#basementFloorBtn").siblings().removeClass('active')
  $("#basementFloorBtn").addClass("active");
  canvas = d3.select("#map")
    .append("svg")
      .attr("width", 500)
      .attr("height", 500)
      .attr("id", "basementFloor");

  var roomC1 = createRoom('C1', [[79, 219], [79, 247], [139, 247], [139, 219]]);
  var roomC2 = createRoom('C2', [[139, 219], [139, 282], [176, 282], [176, 219]]);
};

$('#attackerButton').click(function (){
    $(this).addClass("active");
    $('#question').text("You have identified this person as an attacker.");
    $('body').css('background', '#ff0000');
    $('body').css('color', '#fff');
    $('#identifier').text("Attacker");
    $('#map').css('border', '0');
    //$('#view').html('Threat is here!');
    //$('.btn btn-sm btn-primary view-cam-btn').attr('data-content', 'New');
    attacker = true;

    //redraw maps to show attacker instead of civillian (Navid: not sure how this works)
});

$('#civilianButton').click(function (){
    $(this).addClass("active");
    $('#question').text("You have identified this person as a civilian.");
    $('body').css('background', 'white');
    $('body').css('color', 'black');
    $('#identifier').text("Civilian");
    $('#map').css('border', '1px solid #ccc');
    attacker = false;

    //redraw maps to show attacker instead of civillian (Navid: not needed)
    //secondFloor();
    //firstFloor();
    //thirdFloor();
  });
