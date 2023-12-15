const postsArr = [
  {
    id: 1,
    title: 'Post 1',
    content: 'Body buble filtered of post 1',
    date: '2020-01-01',
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'Body of post 2',
    date: '2020-01-02',
  },
  {
    id: 3,
    title: 'Post 3',
    content: 'Body of buble post 3',
    date: '2020-01-03',
  },
  {
    id: 4,
    title: 'Post 4',
    content: 'Body of post 4',
    date: '2020-01-04',
  },
];

const found = postsArr.find((pObj) => pObj.id === 4);
// console.log('found ===', found);

// zinoti kaip stringe surasti reiksme
// zinoti kaip atrinki reikmes is masyvo

const filtered = postsArr.filter((pObj) => {
  return pObj.content.includes('buble');
});

console.log('filtered ===', filtered);

// const str = 'Body of buble post 3';
// const isBuble = str.includes('bub');
// console.log('isBuble ===', isBuble);
