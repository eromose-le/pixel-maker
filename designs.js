/*
  Pixel art maker project
*/

// Define variable names
let color;
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

  console.log('Height:= ' + height + ' Width:= ' + width);
});

// When size is submitted by the user, call makeGrid()

makeGrid = (height, width) => {
  // Clear table data and table row when function called
  $('td').remove();
  $('tr').remove();

  // Form grid
  for (var i = 1; i <= width; i++) {
    // Create table row
    $('#pixelCanvas').append('<tr id=row' + i + '></tr>');
    for (var j = 1; j <= height; j++) {
      // Create table row data and insert into table row
      $('#row' + i).append('<td></td>');
    }
  }

  addColor = () => {
    // select color value from color picker
    color = document.getElementById('colorPicker').value;
    console.log(rowData);
    let check = rowData.hasAttribute('style');
    if (check) {
      rowData.removeAttribute('style');
      console.log(check);
    } else {
      rowData.setAttribute('style', 'background:' + color);
    }
    console.log(rowData);
  };

  // onClick event to select single box (td)
  let rowData = document.querySelector('td');
  console.log('row data', rowData);
  rowData.onClick = addColor;

  rowData.addEventListener('click', addColor);
};
