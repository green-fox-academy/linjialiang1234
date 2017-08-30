'use strict';

// - Create a two dimensional list
//   which can contain the different shades of specified colors
// - In `colors[0]` store the shades of green:
//   `"lime", "forest green", "olive", "pale green", "spring green"`
// - In `colors[1]` store the shades of red:
//   `"orange red", "red", "tomato"`
// - In `colors[2]` store the shades of pink:
//   `"orchid", "violet", "pink", "hot pink"`

var colors = [];
colors[0] = [];
colors[1] = [];
colors[2] = [];

colors[0].splice(0,"lime", "forest green", "olive", "pale green", "spring green");
colors[1].splice(0,"orange red", "red", "tomato");
colors[2].splice(0,"orchid", "violet", "pink", "hot pink");
console.log(colors[0])
console.log(colors[1])
console.log(colors[2])