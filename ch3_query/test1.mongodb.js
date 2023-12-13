//use("test")
// find({query},{projection})
// query: 조건 | projection : 조회할 열
// 교차로내.accident_count 만 보여주고 나머지 열 X 
// -> 단, _id는 default로 보여줌 
db.by_road_type.find({county:"강릉시"},{"교차로내.accident_count":1})


// _id도 제외해줘 select 교차로내.accident from 
db.by_road_type.find(
  { county: "강릉시" },
  { "교차로내.accident_count": 1, _id: 0 }
);

// 다보여줘. select *
db.by_road_type.find({ county: "강릉시" });