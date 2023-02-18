const title = document.querySelector("#title");
const Link = document.querySelector(".Link");
const button = document.querySelector("#button");
console.log(Link);
// narrowing 방법 4가지
// 1번
if (title !== null) {
    title.innerHTML = "null 입니다";
}
// 2번
if (title instanceof Element) {
    title.innerHTML = "instanceof 입니다.";
}
// 3번. 무조건 Element로 확정시키기 (하지만 쓰지 마세요.)
const three = document.querySelector("#title");
// 4번. optional chaining
if ((title === null || title === void 0 ? void 0 : title.innerHTML) != undefined) {
    //1. ?문법 = title 에 innerHTML이 있으면 출력해주고
    //2. 없으면 코드 대신 undefined 를 뱉어주세요
    title.innerHTML = "optional chaining";
}
// href 변경해보기
if (Link instanceof HTMLAnchorElement) {
    Link.href = "https://www.google.com/";
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    console.log("I'm button");
});
