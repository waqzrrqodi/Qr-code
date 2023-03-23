// First, get a reference to the div that will contain the images
var imageContainer = $('#image-container');

// Then, use jQuery's AJAX function to retrieve the images from the server
$.ajax({
  url: 'qr-codes/',
  success: function (data) {
    // Once the images are retrieved, filter out any files that aren't PNGs
    var pngFiles = $(data).find("a:contains('.png')");
    
    // Loop through each PNG file and add it to the image container
    pngFiles.each(function () {
      var imageUrl = 'qr-codes/' + $(this).attr('href');
      var image = $('<img>').attr('src', imageUrl);
      imageContainer.append(image);
    });
  }
});