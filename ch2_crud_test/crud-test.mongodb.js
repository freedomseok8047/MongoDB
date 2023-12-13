// use("test");
db.character.insertMany([
  {name: 'x', inventory: ['pen', 'cloth', 'pen'] },
  {name: 'y', inventory: ['book', 'cloth'], position:{x:1, y:5}},
  {name: 'z', inventory: ['wood', 'pen'], position:{x:0, y:9}}
  ])

//조회
db.character.find()

// 수정 예)
db.character.update({}, {
  $set:{"inventory.$[penElm]":"pencil"}},
  {arrayFilters:[{penElm:'pen'}]
  })

  // 복수개 수정 
  db.character.updateMany({}, {
    $set:{"inventory.$[penElm]":"pencil"}},
    {arrayFilters:[{penElm:'pen'}]
    })

  // 실습
  db.by_road_type.find({'기타단일로.death_toll':0}, {city_or_province:1, county:1})

  db.inventory.insertMany([
    { item: "journal", qty: 25, tags: ["blank", "red"] },
    { item: "notebook", qty: 50, tags: ["red", "blank"] },
    { item: "paper", qty: 100, tags: ["yello", "pink"] },
    { item: "planner", qty: 75, tags: ["blank", "red"] },
    { item: "postcard", qty: 45, tags: ["blue"] }
    ]);

    db.inventory.find()

// 쿼리 예제, 한문장 씩 실행 ( projection(생략), 모든 컬럼 보여줘)
db.inventory.find({item:{$eq:'journal'}})

db.inventory.find({item:'journal'})

db.inventory.find({tags: {$in : ['red']}})
db.inventory.find({tags: {$nin:["blank","blue"]}})

// regex 문법
db.inventory.find({tags: {$in : [/^[a-z]*d/]}})
db.inventory.find({tags: {$in : [/^b/]}})

// not 50초과 = 50 이하 
db.inventory.find({qty:{$not:{$gt:50}}})

// 50 이하 
db.inventory.find({qty:{$lte:50}})

// 논리연산자 앞에 옮
// 90초과 이거나 50미만
db.inventory.find({$or:[{qty:{$gt:90}},{qty:{$lt:50}}]})

// 50 초과  이거나 90 미만
db.inventory.find({$and:[{qty:{$gt:50}},{qty:{$lt:90}}]})
// 50 초과  이거나 90 미만
db.inventory.find({qty:{$gt:50,$lt:90}})


// Stores
db.stores.insert(
  [
  { _id: 1, name: "Java Hut", description: "Coffee and cakes" },
  { _id: 2, name: "Burger Buns", description: "Gourmet hamburgers" },
  { _id: 3, name: "Coffee Shop", description: "Just coffee" },
  { _id: 4, name: "Clothes Clothes Clothes", description: "Discount clothing" },
  { _id: 5, name: "Java Shopping", description: "Indonesian goods" }
  ]
  );

 // #Text index 문법
  db.stores.createIndex({name:"text",description:"text"})

 // $text Operation
  db.stores.find( { $text: { $search: "java coffee shop" } } )
  db.stores.find( { $text: { $search: "java shop" } } )
  db.stores.find( { $text: { $search: "shop" } } )

// Exact Phrase : 정확하게 일치하는 문서 찾기
  db.stores.find( { $text: { $search: "\"coffee shop\"" } } )
  db.stores.find( { $text: { $search: "\"coffee and\"" } } )

// Term Exclustion : "-"연산자를 사용하여 검색에 제외할 텀을 지정
  db.stores.find( { $text: { $search: "java shop -coffee" } } )
  db.stores.find( { $text: { $search: "-java shop coffee" } } )
  db.stores.find( { $text: { $search: "java -shop coffee" } } )

// tags가 "red", "blank" 둘 다 주어진 순서대로 가진 도큐먼트 전부 출력
db.inventory.find({tags: ["red", "blank"]})


// $elemMatch 실습 위해 collection 생성
db.collection.insertMany([
  { item: "journal", qty: 25, tags: [10,20,30,40,50] },
  { item: "notebook", qty: 50, tags: [1,2,3,4,5] },
  { item: "paper", qty: 100, tags: [3,6,9,12,15] },
  { item: "planner", qty: 75, tags: [7,8,9,10,11] },
  { item: "postcard", qty: 45, tags: [2,4,6,8,10] }
  ]);

// $elemMatch
db.collection.find({tags: {$gt: 10, $lt: 15}})
db.collection.find({tags: {$elemMatch: {$gt: 10, $lt: 5}}})


