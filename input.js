let inputArr=process.argv.slice(2);
// console.log(inputArr);
let command=inputArr[0];
switch(command){
    case "tree":
        treeFn(inputArr[1]);
        break;
    case "organise":
        organiseFn(inputArr[1]);
        break;
    case "help":
        helpFn();
        break;
    default:
        console.log("please 😂 enter valid data");                
}

function treeFn(dirpath)
{
    console.log("you are at tree");
}
function organiseFn(dirpath)
{
    console.log("you are at organise");
}
function helpFn(dirpath)
{
    console.log(`
    List of All commands:
            1)node input.js tree "dirpath"
            2)node input.js organise "dirpath"
            1)node input.js help "dirpath"
    `)
}