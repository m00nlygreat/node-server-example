module.exports = (chat) => {
    return `
    <li class="chatroom flex row">
                    <img src="./room-icon.webp" alt="채팅방의 아이콘" class="chatroom-icon">
                    <div class="chat-descriptions flex column">
                        <span class="chatroom-title">${chat.title}</span>
                        <span class="chatroom-last-msg">${chat.msg}</span>
                    </div>
                </li>`
}