// import style from 'Stock.module.css';

export default function Stock() {
  const productos = [
    {
      elemento: 'Arroz',
      marca: 'Marca A',
      peso: '1 kg',
      precio: 2.5,
      cantidad: 100, // unidades disponibles
    },
    {
      elemento: 'Fideos',
      marca: 'Marca B',
      peso: '500 g',
      precio: 1.2,
      cantidad: 80,
    },
    {
      elemento: 'Leche',
      marca: 'Marca C',
      peso: '1 litro',
      precio: 1.8,
      cantidad: 50,
    },
    {
      elemento: 'Pan',
      marca: 'Marca D',
      peso: '400 g',
      precio: 0.8,
      cantidad: 120,
    },
    {
      elemento: 'Huevos',
      marca: 'Marca E',
      peso: 'Docena',
      precio: 3.5,
      cantidad: 40,
    },
    {
      elemento: 'Aceite de Oliva',
      marca: 'Marca F',
      peso: '750 ml',
      precio: 4.2,
      cantidad: 60,
    },
    {
      elemento: 'Azúcar',
      marca: 'Marca G',
      peso: '1 kg',
      precio: 1.0,
      cantidad: 90,
    },
    {
      elemento: 'Sal',
      marca: 'Marca H',
      peso: '500 g',
      precio: 0.5,
      cantidad: 110,
    },
    {
      elemento: 'Papas',
      marca: 'Marca I',
      peso: '2 kg',
      precio: 2.0,
      cantidad: 70,
    },
    {
      elemento: 'Tomates',
      marca: 'Marca J',
      peso: '1 kg',
      precio: 1.5,
      cantidad: 85,
    },
    {
      elemento: 'Manzanas',
      marca: 'Marca K',
      peso: '1 kg',
      precio: 2.0,
      cantidad: 75,
    },
    {
      elemento: 'Naranjas',
      marca: 'Marca L',
      peso: '1 kg',
      precio: 1.8,
      cantidad: 70,
    },
    {
      elemento: 'Limones',
      marca: 'Marca M',
      peso: '1 kg',
      precio: 2.2,
      cantidad: 65,
    },
    {
      elemento: 'Cebollas',
      marca: 'Marca N',
      peso: '1 kg',
      precio: 1.2,
      cantidad: 95,
    },
    {
      elemento: 'Ajos',
      marca: 'Marca O',
      peso: '500 g',
      precio: 1.5,
      cantidad: 80,
    },
    {
      elemento: 'Agua Mineral',
      marca: 'Marca P',
      peso: '2 litros',
      precio: 0.8,
      cantidad: 120,
    },
    {
      elemento: 'Refresco de Cola',
      marca: 'Marca Q',
      peso: '2 litros',
      precio: 1.2,
      cantidad: 100,
    },
    {
      elemento: 'Yogur Natural',
      marca: 'Marca R',
      peso: '1 kg',
      precio: 2.3,
      cantidad: 60,
    },
    {
      elemento: 'Queso',
      marca: 'Marca S',
      peso: '500 g',
      precio: 3.5,
      cantidad: 45,
    },
    {
      elemento: 'Mantequilla',
      marca: 'Marca T',
      peso: '250 g',
      precio: 1.8,
      cantidad: 55,
    },
    {
      elemento: 'Mermelada',
      marca: 'Marca U',
      peso: '400 g',
      precio: 2.0,
      cantidad: 70,
    },
    {
      elemento: 'Café',
      marca: 'Marca V',
      peso: '250 g',
      precio: 4.5,
      cantidad: 40,
    },
    {
      elemento: 'Té',
      marca: 'Marca W',
      peso: '50 g',
      precio: 3.0,
      cantidad: 85,
    },
    {
      elemento: 'Cereal de Maíz',
      marca: 'Marca X',
      peso: '500 g',
      precio: 2.8,
      cantidad: 65,
    },
    {
      elemento: 'Galletas',
      marca: 'Marca Y',
      peso: '200 g',
      precio: 1.5,
      cantidad: 90,
    },
    {
      elemento: 'Chocolate',
      marca: 'Marca Z',
      peso: '100 g',
      precio: 2.0,
      cantidad: 75,
    },
    {
      elemento: 'Pan Integral',
      marca: 'Marca A',
      peso: '500 g',
      precio: 1.8,
      cantidad: 80,
    },
    {
      elemento: 'Atún en Lata',
      marca: 'Marca B',
      peso: '200 g',
      precio: 1.5,
      cantidad: 55,
    },
    {
      elemento: 'Salsa de Tomate',
      marca: 'Marca C',
      peso: '500 g',
      precio: 1.2,
      cantidad: 70,
    },
    {
      elemento: 'Arvejas en Lata',
      marca: 'Marca D',
      peso: '400 g',
      precio: 1.8,
      cantidad: 60,
    },
    // Puedes seguir añadiendo más productos aquí...
  ];

  return (
    <>
      <table>
        <caption>Productos</caption>
        <thead>
          <tr>
            <th>Elemento</th>
            <th>Marca</th>
            <th>Peso Neto</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(({ elemento, marca, peso, precio, cantidad }) => {
            return (
              <tr>
                <td>{elemento}</td>
                <td>{marca}</td>
                <td>{peso}</td>
                <td>{precio}</td>
                <td>{cantidad}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
