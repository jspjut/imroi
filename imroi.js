// set f2 (113) to toggle hidden state for controls
document.body.onkeydown = function(e) {
    if (e.keyCode == 113) {
        if (document.getElementById('controls').style.display == 'block') {
            document.getElementById('controls').style.display = 'none';
        } else {
            document.getElementById('controls').style.display = 'block';
        }
    }
}

function update_image() {
    // var filename = document.getElementById('filename').value;

    // set zoom to given amount
    var zoom = document.getElementById('zoom').value;

    // get image natural dimensions
    big_image = document.getElementById('big image');
    var naturalHeight = big_image.naturalHeight;
    var naturalWidth = big_image.naturalWidth;

    var tl_x = document.getElementById('tl_x').value;
    var tl_y = document.getElementById('tl_y').value;

    // var zoom_img = document.getElementById('zoom image');
    var zoom_imgs = [document.getElementById('zoom image'), document.getElementById('zoom image2'), document.getElementById('zoom image3'), document.getElementById('zoom image4')];
    var num_rows = zoom_imgs.length/2;
    for (var i = 0; i < zoom_imgs.length; i++) {
        var zoom_img = zoom_imgs[i];
        var scale = 0.5;
        // set zoom, offset, width and height of the image
        zoom_img.style.backgroundSize = zoom * 100 / scale + '%';
        zoom_img.style.backgroundPosition = 'left -' + tl_x * zoom + 'px top -' + tl_y * zoom + 'px';
        zoom_img.style.width = naturalWidth * scale + 'px';
        zoom_img.style.height = naturalHeight * scale + 'px';
        zoom_img.style.gridRow = Math.floor(i / 2) + 1 ;
        zoom_img.style.gridColumn = (i % 2 + 1);

    }
    // adjust figure width
    document.getElementById('output_figure').style.width = naturalWidth + 'px';

    // debug
    document.getElementById('debug output').innerHTML += naturalHeight + ', ' + naturalWidth;
}


// compensate of offset positions: from https://www.chestysoft.com/imagefile/javascript/get-coordinates.asp
function FindPosition(oElement) {
  if(typeof( oElement.offsetParent ) != "undefined")
  {
    for(var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent)
    {
      posX += oElement.offsetLeft;
      posY += oElement.offsetTop;
    }
      return [ posX, posY ];
    }
    else
    {
      return [ oElement.x, oElement.y ];
    }
}
function click_image(e) {
    var PosX = 0;
    var PosY = 0;
    var ImgPos;
    ImgPos = FindPosition(document.getElementById('big image'));
    if (!e) var e = window.event;
    if (e.pageX || e.pageY)
    {
      PosX = e.pageX;
      PosY = e.pageY;
    }
    else if (e.clientX || e.clientY)
      {
        PosX = e.clientX + document.body.scrollLeft
          + document.documentElement.scrollLeft;
        PosY = e.clientY + document.body.scrollTop
          + document.documentElement.scrollTop;
      }
    PosX = PosX - ImgPos[0];
    PosY = PosY - ImgPos[1];
    document.getElementById('tl_x').value = PosX;
    document.getElementById('tl_y').value = PosY;
    update_image();
}
document.getElementById('big image').onmousedown = click_image;