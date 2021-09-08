let html =`
                <h3 class="col-xl head mobile">Contas a Receber</h3>
                <h3 class="title col-xl">Próximos 7 dias</h3>
                <div id="item" class="col-md">
                    <p>Cliente 1</p>
                    <p>Cliente 2</p>
                    <p>Cliente 3</p>
                    <p>Cliente 4</p>
                    <p>Cliente 5</p>
                    <p>Cliente 6</p>
                    <br>
                    <h3 class="title col-xl">Total</h3>
                </div>
                <div id="item" class="col-sm">
                    <p>28-06</p>
                    <p>28-06</p>
                    <p>29-06</p>
                    <p>02-07</p>
                    <p>02-07</p>
                    <p>05-07</p>
                </div>
                <div id="item" class="col-md">
                    <p>R$: 1.589,15</p>
                    <p>R$: 1.589,15</p>
                    <p>R$: 1.589,15</p>
                    <p>R$: 1.589,15</p>
                    <p>R$: 1.589,15</p>
                    <p>R$: 589,15</p>
                    <br>
                    <h3 class="title col-xl">R$:9.999,99</h3>
                </div>

`;

let html2 =`
                <h3 class="col-xl head mobile">Contas a Pagar</h3>
                <h3 class="title col-xl">Próximos 7 dias</h3>
                <div id="item" class="col-md">
                    <p>Fornecedor 1</p>
                    <p>Fornecedor 2</p>
                    <p>Fornecedor 3</p>
                    <p>Fornecedor 4</p>
                    <p>Fornecedor 5</p>
                    <p>Fornecedor 6</p>
                    <br>
                    <h3 class="title col-xl">Total</h3>
                </div>
                <div id="item" class="col-sm">
                    <p>28-06</p>
                    <p>28-06</p>
                    <p>28-06</p>
                    <p>28-06</p>
                    <p>28-06</p>
                    <p>02-07</p>
                </div>
                <div id="item" class="col-md">
                    <p>R$: 398,46</p>
                    <p>R$: 398,11</p>
                    <p>R$: 398,46</p>
                    <p>R$: 898,00</p>
                    <p>R$: 398,46</p>
                    <p>R$: 398,46</p>
                    <br>
                    <h3 class="title col-xl">R$:9.999,99</h3>
                </div>
`;

let html3 =`
                <h3 class="col-xl head mobile">Matriculas</h3>
                <div id="item" class="col-lg">
                    <p>Posição de hoje:</p>
                    <p>Novas</p>
                    <p>Canceladas</p>
                    <p>Transferidas</p>
                    <p>Reservas</p>
                    <p>Pre-Matriculados</p>
                    <br>
                    <p>Total de matrículas hoje:</p>
                    <p>Total de alunos hoje:</p>
                </div>
                <div id="item" class="col-lg">
                    <p>28-06-2021</p>
                    <p>23</p>
                    <p>1</p>
                    <p>0</p>
                    <p>3</p>
                    <p>8</p>
                    <br>
                    <p>198</p>
                    <p>198</p>
                </div>
`;

let html4 =`
                <h3 class="col-xl head mobile">Saldos</h3>
                <div id="item" class="col-lg">
                    <h3 class="title col-xl">Contas Correntes</h3>
                    <p>Itaú:</p>
                    <p>BB:</p>
                    <p>Caixa:</p>
                </div>
                <div id="item" class="col-lg">  
                    <br>
                    <p>R$: 23.452,10</p>
                    <p>R$: 1.589,20</p>
                    <p>R$: 864,23</p>
                </div>
`;

document.getElementById('content1').innerHTML = html;
document.getElementById('content2').innerHTML = html2;
document.getElementById('content3').innerHTML = html3;
document.getElementById('content4').innerHTML = html4;
