// backend is just another computer that manage the data of a website 
// 4 methods of http 
// | Method | Purpose     |
// | ------ | ----------- |
// | GET    | Read Data   |
// | POST   | Create Data |
// | PUT    | Update Data |
// | DELETE | Delete Data |

const xhr = new XMLHttpRequest();// creating the request to send to server

//to load the message (response) in console
xhr.addEventListener('load', () => {
  console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();