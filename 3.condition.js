let a = 'hello world';

if ( a === 'hello world' ) {
    console.log('same');
} else {
    console.log('diff');
}

let b = 4;
switch (b) {
    case 4:
        console.log('444444');
    case 5:
        console.log('555555');
        break;
    default:
        console.log('default');
}

// 한 줄에 조건 ? 참 실행식 : 거짓 실행식
let c = 1;
c === 1 ? console.log('true') : console.log('false');

c === 1
    ? console.log('111')
    : c === 2
        ? console.log('222')
        : console.log('else')
