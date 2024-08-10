/*
while ( true ) {
    // 반복되는 동안 실행될 내용
    
}
// 12%

do {
    
} while (조건식);
// 2%

for ( 선언식; 조건식; 증감식 ) {

}
*/

let a = ['a', 'b', 'c', 'd'];
for ( let i of a ) {
    if ( i === 'b' ) {
        console.log('continue');
        continue;
    }

    if ( i === 'c' ) {
        console.log('break');
        break;
    }
    console.log(i);

}