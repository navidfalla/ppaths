$(function(){
  firstFloor();
  secondFloor();
  basementFloor();

  $('#firstFloorBtn').click();

  $('.coverage-area').popover({
    'html': true,
    //container: 'body',
    trigger: 'focus'
  });

  // view camera button
  $(document).on('click', '.view-cam-btn', function(){
    var coverageAreaID = $(this).nextAll('input').eq(0).val();
    var selection = d3.select("#" + coverageAreaID);
    selection.styles("fill", "purple");
    console.log('yo yo yo '+selection.attrs('id'));
    // console.log('view cam button has parent ID: '+coverageAreaID);
  //  firstFloor.badGuy();
  });

  // set dest button
  $(document).on('click', '.set-dest-btn', function(){
      var roomId = $(this).data('roomId');
      //d3.selectAll('.coverage-area').style('fill', 'blue');
      var polygon = d3.select('polygon#'+roomId);
      polygon.append('circle').attr('cx', 25).attr('cy', 25).attr('r', 20).style('fill', 'red');
      //$(this).siblings().toggleClass('coverage-area');
      // do you stuff here with polygon
      polygon.style('fill','purple');
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



function firstFloor() {
  $("#firstFloorBtn").siblings().removeClass('active')
  $("#firstFloorBtn").addClass("active");
  // create an svg element and append it
  canvas = d3.select("#map")
    .append("svg")
      .attr("width", 500)
      .attr("height", 500)
      .attr("id", "firstFloor");

  function createRoom(number,polygon){
  var roomId = 'room'+number;
  var content = createPopover(roomId);
  var room  = canvas.append("polygon")
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

  // draw Polygons
  var roomA1 = createRoom('A1',[[65, 215], [65, 250], [140, 250], [140, 215]]);
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

      var coverageAreaIDB1 = 'roomB1';
      var content = '<button class="btn btn-sm btn-primary view-cam-btn">View Camera</button> <button class="btn btn-sm btn-primary set-dest-btn">Set Destination</button> <input type="hidden" name="coverage-area-id" value="'+coverageAreaIDB1+'">';
      var polygonB1 = [[362, 218], [362, 282], [490, 282], [490, 218]];
      var roomB1 = canvas.append("polygon")
        .attr("points", polygonB1)
        .attr("class", "coverage-area")
        .attr("id", coverageAreaIDB1)
        .attr("data-toggle", "popover")
        .attr('data-placement', 'top')
        .attr("data-content", content)
        .attr("tabindex", "0")
        .attr("data-trigger", "focus");

      var coverageAreaIDB2 = 'roomB2';
      var content = '<button class="btn btn-sm btn-primary view-cam-btn">View Camera</button> <button class="btn btn-sm btn-primary set-dest-btn">Set Destination</button> <input type="hidden" name="coverage-area-id" value="'+coverageAreaIDB2+'">';
      var polygonB2 = [[280, 218], [280, 282], [362, 282], [362, 218]];
      var roomB2 = canvas.append("polygon")
        .attr("points", polygonB2)
        .attr("class", "coverage-area")
        .attr("id", coverageAreaIDB2)
        .attr("data-toggle", "popover")
        .attr('data-placement', 'top')
        .attr("data-content", content)
        .attr("tabindex", "0")
        .attr("data-trigger", "focus");

      var coverageAreaIDB3 = 'roomB3';
      var content = '<button class="btn btn-sm btn-primary view-cam-btn">View Camera</button> <button class="btn btn-sm btn-primary set-dest-btn">Set Destination</button> <input type="hidden" name="coverage-area-id" value="'+coverageAreaIDB3+'">';
      var polygonB3 = [[200, 218], [200, 282], [280, 282], [280, 218]];
      var roomB3 = canvas.append("polygon")
        .attr("points", polygonB3)
        .attr("class", "coverage-area")
        .attr("id", coverageAreaIDB3)
        .attr("data-toggle", "popover")
        .attr('data-placement', 'top')
        .attr("data-content", content)
        .attr("tabindex", "0")
        .attr("data-trigger", "focus");

      var coverageAreaIDB4 = 'roomB4';
      var content = '<button class="btn btn-sm btn-primary view-cam-btn">View Camera</button> <button class="btn btn-sm btn-primary set-dest-btn">Set Destination</button> <input type="hidden" name="coverage-area-id" value="'+coverageAreaIDB4+'">';
      var polygonB4 = [[143, 218], [143, 282], [200, 282], [200, 218]];
      var roomB4 = canvas.append("polygon")
        .attr("points", polygonB4)
        .attr("class", "coverage-area")
        .attr("id", coverageAreaIDB4)
        .attr("data-toggle", "popover")
        .attr('data-placement', 'top')
        .attr("data-content", content)
        .attr("tabindex", "0")
        .attr("data-trigger", "focus");

      var coverageAreaIDB5 = 'roomB5';
      var content = '<button class="btn btn-sm btn-primary view-cam-btn">View Camera</button> <button class="btn btn-sm btn-primary set-dest-btn">Set Destination</button> <input type="hidden" name="coverage-area-id" value="'+coverageAreaIDB5+'">';
      var polygonB5 = [[106, 253], [106, 282], [143, 282], [143, 253]];
      var roomB5 = canvas.append("polygon")
        .attr("points", polygonB5)
        .attr("class", "coverage-area")
        .attr("id", coverageAreaIDB5)
        .attr("data-toggle", "popover")
        .attr('data-placement', 'top')
        .attr("data-content", content)
        .attr("tabindex", "0")
        .attr("data-trigger", "focus");

      var coverageAreaIDB6 = 'roomB6';
      var content = '<button class="btn btn-sm btn-primary view-cam-btn">View Camera</button> <button class="btn btn-sm btn-primary set-dest-btn">Set Destination</button> <input type="hidden" name="coverage-area-id" value="'+coverageAreaIDB6+'">';
      var polygonB6 = [[22, 253], [22, 282], [106, 282], [106, 253]];
      var roomB6 = canvas.append("polygon")
        .attr("points", polygonB6)
        .attr("class", "coverage-area")
        .attr("id", coverageAreaIDB6)
        .attr("data-toggle", "popover")
        .attr('data-placement', 'top')
        .attr("data-content", content)
        .attr("tabindex", "0")
        .attr("data-trigger", "focus");

      var coverageAreaIDB7 = 'roomB7';
      var content = '<button class="btn btn-sm btn-primary view-cam-btn">View Camera</button> <button class="btn btn-sm btn-primary set-dest-btn">Set Destination</button> <input type="hidden" name="coverage-area-id" value="'+coverageAreaIDB7+'">';
      var polygonB7 = [[22, 218], [22, 253], [110, 253], [110, 218]];
      var roomB7 = canvas.append("polygon")
        .attr("points", polygonB7)
        .attr("class", "coverage-area")
        .attr("id", coverageAreaIDB7)
        .attr("data-toggle", "popover")
        .attr('data-placement', 'top')
        .attr("data-content", content)
        .attr("tabindex", "0")
        .attr("data-trigger", "focus");

      var coverageAreaIDB8 = 'roomB8';
      var content = '<button class="btn btn-sm btn-primary view-cam-btn">View Camera</button> <button class="btn btn-sm btn-primary set-dest-btn">Set Destination</button> <input type="hidden" name="coverage-area-id" value="'+coverageAreaIDB8+'">';
      var polygonB8 = [[334, 70], [334, 218], [363, 218], [363, 70]];
      var roomB8 = canvas.append("polygon")
        .attr("points", polygonB8)
        .attr("class", "coverage-area")
        .attr("id", coverageAreaIDB8)
        .attr("data-toggle", "popover")
        .attr('data-placement', 'top')
        .attr("data-content", content)
        .attr("tabindex", "0")
        .attr("data-trigger", "focus");

      var coverageAreaIDB9 = 'roomB9';
      var content = '<button class="btn btn-sm btn-primary view-cam-btn">View Camera</button> <button class="btn btn-sm btn-primary set-dest-btn">Set Destination</button> <input type="hidden" name="coverage-area-id" value="'+coverageAreaIDB9+'">';
      var polygonB9 = [[306, 70], [306, 218], [334, 218], [334, 70]];
      var roomB9 = canvas.append("polygon")
        .attr("points", polygonB9)
        .attr("class", "coverage-area")
        .attr("id", coverageAreaIDB9)
        .attr("data-toggle", "popover")
        .attr('data-placement', 'top')
        .attr("data-content", content)
        .attr("tabindex", "0")
        .attr("data-trigger", "focus");

      var coverageAreaIDB10 = 'roomB10';
      var content = '<button class="btn btn-sm btn-primary view-cam-btn">View Camera</button> <button class="btn btn-sm btn-primary set-dest-btn">Set Destination</button> <input type="hidden" name="coverage-area-id" value="'+coverageAreaIDB10+'">';
      var polygonB10 = [[368, 80], [368, 211], [400, 211], [400, 80]];
      var roomB10 = canvas.append("polygon")
        .attr("points", polygonB10)
        .attr("class", "coverage-area")
        .attr("id", coverageAreaIDB10)
        .attr("data-toggle", "popover")
        .attr('data-placement', 'top')
        .attr("data-content", content)
        .attr("tabindex", "0")
        .attr("data-trigger", "focus");

      var coverageAreaIDB11 = 'roomB11';
      var content = '<button class="btn btn-sm btn-primary view-cam-btn">View Camera</button> <button class="btn btn-sm btn-primary set-dest-btn">Set Destination</button> <input type="hidden" name="coverage-area-id" value="'+coverageAreaIDB11+'">';
      var polygonB11 = [[368, 12], [368, 80], [490, 80], [490, 12]];
      var roomB11 = canvas.append("polygon")
        .attr("points", polygonB11)
        .attr("class", "coverage-area")
        .attr("id", coverageAreaIDB11)
        .attr("data-toggle", "popover")
        .attr('data-placement', 'top')
        .attr("data-content", content)
        .attr("tabindex", "0")
        .attr("data-trigger", "focus");

      var coverageAreaIDB12 = 'roomB12';
      var content = '<button class="btn btn-sm btn-primary view-cam-btn">View Camera</button> <button class="btn btn-sm btn-primary set-dest-btn">Set Destination</button> <input type="hidden" name="coverage-area-id" value="'+coverageAreaIDB12+'">';
      var polygonB12 = [[23, 70], [23, 215], [176, 215], [176, 70]];
      [[143, 218], [143, 282], [200, 282], [200, 218]];
      var roomB12 = canvas.append("polygon")
        .attr("points", polygonB12)
        .attr("class", "coverage-area")
        .attr("id", coverageAreaIDB12)
        .attr("data-toggle", "popover")
        .attr('data-placement', 'top')
        .attr("data-content", content)
        .attr("tabindex", "0")
        .attr("data-trigger", "focus");

}

function basementFloor(){
  $("#basementFloorBtn").siblings().removeClass('active')
  $("#basementFloorBtn").addClass("active");
  canvas = d3.select("#map")
    .append("svg")
      .attr("width", 500)
      .attr("height", 500)
      .attr("id", "basementFloor");

  var coverageAreaIDC1 = 'roomC1';
  var content = '<button class="btn btn-sm btn-primary view-cam-btn">View Camera</button> <button class="btn btn-sm btn-primary set-dest-btn">Set Destination</button> <input type="hidden" name="coverage-area-id" value="'+coverageAreaIDC1+'">';
  var polygonC1 = [[79, 219], [79, 247], [139, 247], [139, 219]];
  var roomC1 = canvas.append("polygon")
    .attr("points", polygonC1)
    .attr("class", "coverage-area")
    .attr("id", coverageAreaIDC1)
    .attr("data-toggle", "popover")
    .attr('data-placement', 'top')
    .attr("data-content", content)
    .attr("tabindex", "0")
    .attr("data-trigger", "focus");

  var coverageAreaIDC2 = 'roomC2';
  var content = '<button class="btn btn-sm btn-primary view-cam-btn">View Camera</button> <button class="btn btn-sm btn-primary set-dest-btn">Set Destination</button> <input type="hidden" name="coverage-area-id" value="'+coverageAreaIDC2+'">';
  var polygonC2 = [[139, 219], [139, 282], [176, 282], [176, 219]];
  var roomC2 = canvas.append("polygon")
    .attr("points", polygonC2)
    .attr("class", "coverage-area")
    .attr("id", coverageAreaIDC2)
    .attr("data-toggle", "popover")
    .attr('data-placement', 'top')
    .attr("data-content", content)
    .attr("tabindex", "0")
    .attr("data-trigger", "focus");

  // var coverageAreaIDC1 = 'roomC1';
  // var content = '<button class="btn btn-sm btn-primary view-cam-btn">View Camera</button> <button class="btn btn-sm btn-primary set-dest-btn">Set Destination</button> <input type="hidden" name="coverage-area-id" value="'+coverageAreaIDC1+'">';
  // var polygonC1 = [[79, 218], [79, 247], [139, 247], [139, 218]];
  // var roomC1 = canvas.append("polygon")
  //   .attr("points", polygonC1)
  //   .attr("class", "coverage-area")
  //   .attr("id", coverageAreaIDC1)
  //   .attr("data-toggle", "popover")
  //   .attr('data-placement', 'top')
  //   .attr("data-content", content)
  //   .attr("tabindex", "0")
  //   .attr("data-trigger", "focus");
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

    //redraw maps to show attacker instead of civillian (Navid: not changed)
    //secondFloor();
    //firstFloor();
    //thirdFloor();
  });
