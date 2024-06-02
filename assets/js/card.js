function toggleCard(card) {
    var content = card.querySelector('.card-content');
    if (content.clientHeight === 0) {
        content.style.height = content.scrollHeight + "px";
    } else {
        content.style.height = 0;
    }
}
