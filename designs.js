/*
  Pixel art maker project
*/

// Define variable names
let selectedColor;
let width;
let height;

// Select form element
$('#sizePicker').submit((e) => {
  // Prevent page from reloading on submission
  e.preventDefault();

  // Assign input fields values to variables
  height = document.getElementById('inputHeight').value;
  width = document.getElementById('inputWidth').value;

  // Pass values to makeGrid function as an argument
  makeGrid(width, height);
});

// When size is submitted by the user, call makeGrid()

makeGrid = (width, height) => {
  // Clear table data and table row when function called
  $('td').remove();
  $('tr').remove();

  // Form grid
  for (let row = 1; row <= height; row++) {
    // Create table row
    $('#pixelCanvas').append('<tr id=row' + row + '></tr>');
    for (let column = 1; column <= width; column++) {
      // Create table row data and insert into table row
      $('#row' + row).append('<td></td>');
    }
  }
  $('td').click(function fill() {
    // select color value from color picker
    selectedColor = document.getElementById('colorPicker').value;

    // Check && clear if 'td' has a style attribute
    if ($(this).attr('style')) return $(this).removeAttr('style');
    // Else apply style
    $(this).attr('style', 'background:' + selectedColor);
  });
};
