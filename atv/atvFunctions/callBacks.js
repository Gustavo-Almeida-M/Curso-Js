function rand(min = 500, max = 2500)
{
    const num = Math.random() * (max - min) + min;

    return Math.floor(num);
}

function func1(callBack)
{
    setTimeout(function()
    {
        console.log('Func1');
        if (callBack) {callBack()};
    }, rand());
}
function func2(callBack)
{
    setTimeout(function()
    {
        console.log('Func2');
        if (callBack) {callBack()};
    }, rand());
}

function func3(callBack)
{
    setTimeout(function()
    {
        console.log('Func3');
        if (callBack) {callBack()};
    }, rand());
}

func1(callBackF1());

function callBackF1()
{
    func2(callBackF2);
}
function callBackF2()
{
    func3(callBackF3);
}
function callBackF3()
{
    console.log('Carro');
}

// func1(function()
// {
//     func2(function()
//     {
//         func3(function()
//         {
//             console.log('Carro');
//         });
//     })
// });

