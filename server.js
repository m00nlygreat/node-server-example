const express = require('express');
const app = express();

//public 폴더 사용
app.use(express.static(__dirname + '/public'));

console.log(__dirname);

app.listen(8080, function(){
    console.log('8080포트에서 서버 실행 중');
})

let chats = [
    {
      title: "프로젝트 계획 회의",
      msg: "프로젝트의 진행 상황과 앞으로의 계획을 논의하는 회의입니다. 각 팀원들은 준비된 자료를 공유하고 피드백을 주고받을 예정입니다."
    },
    {
      title: "주간 보고서 검토",
      msg: "이번 주의 업무 진행 상황을 정리한 보고서를 검토하고, 다음 주의 목표를 설정하는 시간을 가집니다. 모든 팀원들은 주간 보고서를 미리 작성하여 제출해 주세요."
    },
    {
      title: "신입 사원 환영회",
      msg: "새로 입사한 신입 사원들을 환영하는 자리입니다. 각 팀의 소개와 함께 신입 사원들의 자기소개 시간을 가질 예정이니 많은 참여 부탁드립니다."
    },
    {
      title: "고객 피드백 분석",
      msg: "최근 고객들로부터 받은 피드백을 분석하고, 이를 바탕으로 서비스 개선 방안을 논의합니다. 각 팀은 수집된 피드백을 미리 검토해 주세요."
    },
    {
      title: "연말 행사 기획",
      msg: "연말 행사의 기획과 준비를 위한 회의입니다. 각 부서의 대표자들은 행사 아이디어와 준비 상황을 공유하고 협력 방안을 모색합니다."
    }
  ]
  ;




app.get('/', (req,res) => {
    let list;

    chats.forEach((chat) => {
      list = list + require('./views/chatroom')(chat);
    });
  
    console.log(list);
    res.send(require('./views/header.js')()+list+'</ul></div></div></body></html>');
})

// 

app.get('/todos', (req,res) => {
    res.send('<h1>할일 목록입니다.</h1>');
})


