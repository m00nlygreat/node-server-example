module.exports = () => {return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>코코아톡</title>
    <link rel="stylesheet" href="https://meyerweb.com/eric/tools/css/reset/reset.css">
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <div class="wrap">
        <div class="side-panel">
            <h3>데스크탑 버전에선 이런 기능도 쓸 수 있어요!</h3>
            <ul class="side-actions">
                <li class="action">
                    <button>모두 읽음</button>
                </li>
                <li class="action">
                    <button>채팅방 보관</button>
                </li>
                <li class="action">
                    <button>예약 전송</button>
                </li>
                <li class="action">
                    <button>킹왕짱 기가막힌 기능</button>
                </li>
            </ul>
        </div>
        <div class="content">
            <div class="header">
                <span class="tab-item activated">채팅</span>
                <span class="tab-item">오픈채팅</span>
            </div>
            <ul class="chatroom-list flex column">`}