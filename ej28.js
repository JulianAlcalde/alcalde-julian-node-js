const prompt=require('prompt-sync')();

function balancesPositivos(balances) {
    const balancesFiltrados = balances.filter(balance => balance.ganancia > 0);
    return balancesFiltrados.length;
  }
  
  const balancesUltimoSemestre = [
    { mes: "julio", ganancia: 50 }, 
    { mes: "agosto", ganancia: -12 }, 
    { mes: "septiembre", ganancia: 1000 }, 
    { mes: "octubre", ganancia: 300 }, 
    { mes:  "noviembre", ganancia: 200 }, 
    { mes: "diciembre", ganancia: 0 }
  ];
  
  console.log(balancesPositivos(balancesUltimoSemestre));