function toggleRoomInfo(roomId) {
    var roomInfo = document.getElementById("room-info-" + roomId);
    roomInfo.style.display = roomInfo.style.display === "block" ? "none" : "block";
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('myModal');
    var imgs = document.getElementsByClassName('gallery-img');
    var modalImg = document.getElementById('img01');
    var closeBtn = document.getElementsByClassName('close')[0];

    for (var i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener('click', function () {
            modal.style.display = 'block';
            modalImg.src = this.src;
        });
    }

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});