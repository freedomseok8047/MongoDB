// cmd + opt + r
// cmd + opt + s
use("testBlog");
db.users.insertOne({ x: 1 });

// 7. 샘플 디비 추가. 
use("testBlog");
db.users2.insertOne({ name : "Junseok Lee" , email: "ljs@gmail.com" });

// 조회: 전체 
db.users2.find();

// 8. 수정 
// updateOne({변경할 키 선택},{$set:{변경 할 키 내용}}})
db.users2.updateOne({name:"Junseok Lee"}, {$set:{ age:30}});

// 9. 하나 조회 
db.users2.findOne({name:"Junseok Lee"});

// 10. 하나 조회2
// 주의) 해당 객체 멤버에 접근시 큰 따옴표 붙여줘야 함. 
db.users2.findOne({"name.first":"Junseok2"});

// 11. 수정2 
db.users2.updateOne({"name.first":"Junseok2"}, {$set:{ "name.last":"Lee2"}});

// 12. 터미널로 변경시 조금 번거롭다. 아이디 변경시 
// 1차 확인. 
db.users2.findOne({_id:"6577d34ed7a7ad53c74864e1"});
// null 확인. 

// 2차 확인. 
db.users2.findOne({_id: ObjectId("6577d34ed7a7ad53c74864e1")});

// 13. 아이디로 수정하기. age +1 
db.users2.updateOne({_id: ObjectId("6577d34ed7a7ad53c74864e1")},{$inc:{age:1}});

// 14. 삭제 
db.users2.deleteOne({_id: ObjectId("6577d34ed7a7ad53c74864e1")});