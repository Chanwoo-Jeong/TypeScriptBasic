//코딩애플 TypeScript 기본 문법 강좌
//사용법
//1. node 설치 후 터미널에 npm install -g typescript
//2. tsconfig.json 파일을 만들고
// {   
//     "compilerOptions" : {     
//       "target": "es6",     
//       "module": "commonjs", 
//       "lib": [
//         "es6"
//       ] 
//     } 
//   } 를 붙여넣는다
//3. ts 파일을 js 파일로 변환하기 위해 tsc -w 라는 명령어를 터미널에 쳐놓는다.
// 1. 변수의 타입을 설정할 수 있다.
let names = "kim";
// string number boolean null undefined bigint [] {} 등이 들어갈 수 있다.
let arrayName = ["kim", "park"];
// array 안에 string 만 들어올 수 있다.
let objName = { name: "kim" };
// name이라는 key 에는 무조건 string이 와야한다.
// name?를 통해 key에 name 이 올 수도 있고 안올 수도 있다는 것을 말해준다. (오류안남)
// 2. 2개의 타입을 지정할 수 도 있다. Union type
let twoTypename = "kim";
twoTypename = 5;
let whatType = 123;
// 4. 함수도 타입 지정이 가능하다.
function fuc(x) {
    return x * 2;
}
let john = [123, true];
let woony = { nmae: "chanu", age: "26" };
// 7. class 타입 지정 가능
class User {
    constructor(name) {
        this.sayHello = () => {
            console.log(`Hello ${this.name}`);
        };
        this.name = name;
    }
}
const person1 = new User("woony");
person1.sayHello(); //Hello woony 출력
