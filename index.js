const banner = document.querySelector("#banner");
gsap.to(banner, { opacity: 1, y: 60 });

const posts = [
  {
    id: 1,
    title: "시루",
    imgSrc: "./images/시루.png",
    description: "#시바견",
    place: "경남 양산시 물금읍",
  },
  {
    id: 2,
    title: "키루",
    imgSrc: "./images/키루.png",
    description: "#샴",
    place: "부산광역시 화명동",
  },
  {
    id: 3,
    title: "짠이",
    imgSrc: "./images/짠이.png",
    description: "#랙돌",
    place: "부산광역시 가락동",
  },
  {
    id: 4,
    title: "코코",
    imgSrc: "./images/코코.png",
    description: "#스코티쉬 폴드",
    place: "서울특별시 강남",
  },
  {
    id: 5,
    title: "시루",
    imgSrc: "./images/시루.png",
    description: "#시바견",
    place: "경남 양산시 물금읍",
  },
  {
    id: 6,
    title: "키루",
    imgSrc: "./images/키루.png",
    description: "#샴",
    place: "부산광역시 화명동",
  },
  {
    id: 7,
    title: "짠이",
    imgSrc: "./images/짠이.png",
    description: "#랙돌",
    place: "부산광역시 가락동",
  },
  {
    id: 8,
    title: "코코",
    imgSrc: "./images/코코.png",
    description: "#스코티쉬 폴드",
    place: "서울특별시 강남",
  },
];

// adopt-posts 요소 가져오기
const adoptPostsContainer = document.querySelector(".adopt-posts");

// 게시글 요소 생성 함수
// 게시글 요소 생성 함수
const createPostElement = (post) => {
  const postDiv = document.createElement("div");
  postDiv.classList.add("post");

  const link = document.createElement("a");
  link.href = `./post.html?id=${post.id}`; // 링크 수정

  const img = document.createElement("img");
  img.src = post.imgSrc;
  img.alt = post.title;

  const title = document.createElement("h3");
  title.textContent = post.title;
  title.classList.add("title-text");

  const description = document.createElement("p");
  description.textContent = post.description;
  description.classList.add("description-text");

  const place = document.createElement("p");
  place.textContent = post.place;
  place.classList.add("place-text");

  link.appendChild(img);
  link.appendChild(title);
  link.appendChild(description);
  link.appendChild(place);
  postDiv.appendChild(link);

  return postDiv;
};

// 게시글 배열을 adopt-posts 밑에 추가
posts
  .map(createPostElement)
  .forEach((postElement) => adoptPostsContainer.appendChild(postElement));
