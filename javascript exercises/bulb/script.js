function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("https://i.pinimg.com/originals/3f/cb/04/3fcb04b9204ae407de4ee0f85bd90dc6.png")) {
      image.src = "https://i.pinimg.com/originals/8b/e0/60/8be0603fa9222908eac38746f7c72c2a.jpg";
    } else {
      image.src = "https://i.pinimg.com/originals/3f/cb/04/3fcb04b9204ae407de4ee0f85bd90dc6.png";
    }
  }





