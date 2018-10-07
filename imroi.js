function update_image() {
    var filename = document.getElementById('filename').value;

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
        zoom_img.style.backgroundPosition = 'left -' + tl_x * zoom * scale + 'px top -' + tl_y * zoom * scale + 'px';
        zoom_img.style.width = naturalWidth * scale + 'px';
        zoom_img.style.height = naturalHeight * scale + 'px';
        zoom_img.style.gridRow = (i) / 2 + 1;
        zoom_img.style.gridColumn = (i + 1);

    }

    // debug
    document.getElementById('debug output').innerHTML += naturalHeight + ', ' + naturalWidth;
}