// function debounce(func, ms) {
//     let allowed = true;
    
//     return function() {
//         if (allowed) {
//             func.apply(this, arguments);
//             allowed = false;
//             setTimeout(() => (allowed = true), ms)
//         } else {
//             return;
//         }
//     }
// }

function debounce(func, ms) {
    function wrapper() {
        let diff = Date.now() - wrapper.lastCall;
        // console.log(diff);
        if (diff > ms) {
            wrapper.lastCall = Date.now();
            return func.apply(this, arguments);
        }
    }
    
    wrapper.lastCall = 0;
    
    return wrapper;
}

let f = debounce(console.log, 1000);

f(1); // ����������� ����������
f(2); // ��������������

setTimeout( () => f(3), 100); // �������������� (������ ������ 100 ��)
setTimeout( () => f(4), 1100); // �����������
setTimeout( () => f(5), 1500); // �������������� (������ ������ 400 �� �� ���������� ������)