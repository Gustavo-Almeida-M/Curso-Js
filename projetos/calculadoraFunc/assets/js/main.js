function criaCalculadora()
{
    return {
        display: document.querySelector('.display'),
        inicia()
        {
            this.clique();
            this.enter();
        },
        calculaResultado()
        {
            let valor = this.display.value;
            try
            {
                valor = eval(valor);
                if(!valor)
                {
                    alert('Conta invalida');
                    this.cleanDisplay();
                    return;
                }

                this.display.value = String(valor);
            }
            catch(e)
            {
                alert('Conta invalida');
                this.cleanDisplay();
            }
        },

        enter()
        {
            this.display.addEventListener('keypress', (e) =>
            {
                if(e.keyCode === 13)
                {
                    this.calculaResultado();
                }
            })
        },

        clique()
        {
            document.addEventListener('click', (e) =>
            {
                const lc = e.target;
                
                if(lc.classList.contains('btn-num'))
                {
                    this.btnToDisplay(lc.innerText);
                }
                if(lc.classList.contains('btn-da'))
                {
                    this.cleanDisplay();
                }
                if(lc.classList.contains('btn-del'))
                {
                    this.dellLastElement();
                }
                if(lc.classList.contains('btn-eq'))
                {
                    this.calculaResultado();
                }
            });
        },
        btnToDisplay(valor)
        {
            console.log('Entrou');
            this.display.value += valor;
        },

        cleanDisplay()
        {
            this.display.value = '';
        },

        dellLastElement()
        {
            this.display.value = this.display.value.slice(0, -1);
        }
    }
}

const calculador = criaCalculadora();
calculador.inicia();