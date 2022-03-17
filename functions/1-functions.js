function fn() {
    return 'Code here'
}

const arroFn = ()  => 'Code here too, but not a have icons'
const arroFn2 = () => {
    //Mais de uma expresão
    return 'Code here too return function';
}
//Funções também são objetos
fn.prop = 'Posso criar propriedades'

console.log(fn());
console.log(fn.prop);

//receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//receber e retonar funções
const controlFnExec = fnParam => allowed => {
    if (allowed) {
        fnParam()        
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); //Executará a função fn
handleFnExecution(); //não Executará a função fn


//controlFnExec como função
// function controlFnExec(fnParam) {
//     return function (allowed) {
//         if (allowed) {
//             fnParam();
//         }
//     }
// }
