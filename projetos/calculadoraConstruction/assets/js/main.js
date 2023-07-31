function criaCalculadora()
{
    const display = document.querySelector('.display');
    this.iniciar = inicia();
    function inicia()
    {
        clique();
        enter();
    };
    function calculaResultado()
    {
        let valor = display.value;
        try
        {
            valor = eval(valor);
            if(!valor)
            {
                alert('Conta invalida');
                this.cleanDisplay();
                return;
            }

            display.value = String(valor);
        }
        catch(e)
        {
            alert('Conta invalida');
            cleanDisplay();
        }
    }

    function enter()
    {
        display.addEventListener('keypress', (e) =>
        {
            if(e.keyCode === 13)
            {
                calculaResultado();
            }
        })
    }

    function clique()
    {
        document.addEventListener('click', (e) =>
        {
            const lc = e.target;
            
            if(lc.classList.contains('btn-num'))
            {
                btnToDisplay(lc.innerText);
            }
            if(lc.classList.contains('btn-da'))
            {
                cleanDisplay();
            }
            if(lc.classList.contains('btn-del'))
            {
                dellLastElement();
            }
            if(lc.classList.contains('btn-eq'))
            {
                calculaResultado();
            }
        });
    }
    function btnToDisplay(valor)
    {
        console.log('Entrou');
        display.value += valor;
    }

    function cleanDisplay()
    {
        display.value = '';
    }

    function dellLastElement()
    {
        display.value = display.value.slice(0, -1);
    }
}

const calculador = new criaCalculadora();