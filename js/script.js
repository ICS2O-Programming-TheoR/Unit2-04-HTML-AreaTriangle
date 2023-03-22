// Copyright (c) 2023 Theo Rafuse All rights reserved
// Created by: Theo Rafuse
// Created on: March 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate () {
  // input
  let height = parseInt(document.getElementById('height-of-rectangle').value);
  let base = parseInt(document.getElementById('base-of-rectangle').value);

  // process
  let area = base * height / 2;

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}
