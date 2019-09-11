window.odometerOptions = {
  duration: 90000
};

let slotID1 = 0;
let slotID2 = 0;
let slotID3 = 0;

function loop_slot1() {
  $(".slot1").html(0);
  $(".slot1").text(9);
  slotID1 = setTimeout(loop_slot1, 1950);
}

function loop_slot2() {
  $(".slot2").html(0);
  $(".slot2").text(9);
  slotID2 = setTimeout(loop_slot2, 1950);
}

function loop_slot3() {
  $(".slot3").html(0);
  $(".slot3").text(9);
  slotID3 = setTimeout(loop_slot3, 1950);
}

$("#spin").on("click", function() {
  loop_slot1();
  loop_slot2();
  loop_slot3();
});

$("#stop1").on("click", function() {
  clearTimeout(slotID1);
  var random = Math.floor(Math.random() * 10);
  $(".slot1").text(random);
  $(".slot1").html(random);
});

$("#stop2").on("click", function() {
  clearTimeout(slotID2);
  var random = Math.floor(Math.random() * 10);
  $(".slot2").text(random);
  $(".slot2").html(random);
});

$("#stop3").on("click", function() {
  clearTimeout(slotID3);
  var random = Math.floor(Math.random() * 10);
  $(".slot3").text(random);
  $(".slot3").html(random);
});
