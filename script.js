var gS = document.getElementById('grid');
var heightS = gS.getBoundingClientRect().bottom - gS.getBoundingClientRect().top;
var widthS = gS.getBoundingClientRect().right - gS.getBoundingClientRect().left;
var sS = heightS * widthS;
//alert("full: " + sS);
var g = document.getElementById('gridcontainer');
var height = g.getBoundingClientRect().bottom - g.getBoundingClientRect().top;
var width = g.getBoundingClientRect().right - g.getBoundingClientRect().left;
var s = height * width;
//alert("div: " + s);




//----------------------------------------------------
// var height, width, k, kTemp, side, sPaid, columns, rows, cellSide;
//
// height = document.documentElement.clientHeight;
// width = document.documentElement.clientWidth;
//
// sPaid = 5000;
// k = width / height;
//
// side = Math.sqrt(sPaid / k); // vysota oplachenogo gridu
// kTemp = height / side; // spivvidnoshennya vysoty vydymoi oblasti do vysoty oplachenoi
// cellSide = 50 * kTemp; // proportsijno zbilshenf storona oplachenoi yachejky

//document.documentElement.style.setProperty("--rowNum", 6);
// ----------------------------------------------------------
  //var div1 = document.getElementById('gridcontainer');
  // height = div1.getBoundingClientRect().bottom - div1.getBoundingClientRect().top;
  // width = div1.getBoundingClientRect().right - div1.getBoundingClientRect().left;


//
//
// alert(width);
// // cell's  50x50px and 2 px gap
// columns = Math.floor(width / cellSide);
// rows = Math.floor(height / cellSide);
// document.documentElement.style.setProperty("--rowNum", rows);
// document.documentElement.style.setProperty("--colNum", columns);
// alert("rows : " + rows);
//
//
//
//
//
//
// alert("Window size : " + width + "px x " + height + "px");
