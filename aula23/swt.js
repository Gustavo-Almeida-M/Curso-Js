function converteDia(diaSemana)
{
    let diaNome;

    switch(diaSemana)
    {
        case 0:
            diaNome = "Domingo";
            return diaNome;
        case 1: 
            diaNome = "Segunda";
            return diaNome;
        case 2: 
            diaNome = "Terça";
            return diaNome;
        case 3: 
            diaNome = "Quarta";
            return diaNome;
        case 4: 
            diaNome = "Quinta";
            return diaNome;
        case 5: 
            diaNome = "Sexta";
            return diaNome;
        case 6: 
            diaNome = "Sabado";
            return diaNome;
        default:
            diaNome = "Não é um dia valido";
            return diaNome;
    }
}

const dia = new Date(2022, 7, 20, 10, 20, 60);
const diaSemana = dia.getDay();

console.log(converteDia(diaSemana));

//Forma padrão
// let diaNome;
// switch(diaSemana)
// {
//     case 0:
//         diaNome = "Domingo";
//         break;
//     case 1: 
//         diaNome = "Segunda";
//         break;
//     case 2: 
//         diaNome = "Terça";
//         break;
//     case 3: 
//         diaNome = "Quarta";
//         break;
//     case 4: 
//         diaNome = "Quinta";
//         break;
//     case 5: 
//         diaNome = "Sexta";
//         break;
//     case 6: 
//         diaNome = "Sabado";
//         break;
//     default:
//         diaNome = "Não é um dia valido";
// }


