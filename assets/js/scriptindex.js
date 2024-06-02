function toggleRoomInfo(roomId) {
    var roomInfo = document.getElementById("room-info-" + roomId);
    roomInfo.style.display = roomInfo.style.display === "block" ? "none" : "block";
  }
  