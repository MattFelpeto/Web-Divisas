
export default async function getDolarOficial1year () {
    let arrayDolarOficial1year = [];
        try {
    
          const response = await axios.get('https://api.argentinadatos.com/v1/cotizaciones/dolares')
          const cleanResponse = response.data.slice(-2880);//Mejorar ya que no es la mejor práctica que haya un numero magico
          //Usamos el -2880 para recortar el array hasta el ultimo año
          console.log(cleanResponse);
    
          for (let i = 0; i < cleanResponse.length; i++) {
    
            if (cleanResponse[i].casa == 'oficial') {
                arrayDolarOficial1year.push(cleanResponse[i]);
            }
          }
    
          const cleanData = arrayDolarOficial1year.map(item => (
            {
                name: item.fecha,
                PrecioARS: item.compra,
            }))
    
          return cleanData;
    
        } catch (error) {
          return (error.message);
        }
}