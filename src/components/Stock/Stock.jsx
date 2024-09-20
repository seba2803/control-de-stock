import style from './Stock.module.css';

export default function Stock() {
  const productos = [
    {
      id: 1,
      elemento: 'Arroz',
      marca: 'Marca A',
      peso: '1 kg',
      precio: 2.5,
      cantidad: 100,
    },
    {
      id: 2,
      elemento: 'Fideos',
      marca: 'Marca B',
      peso: '500 g',
      precio: 1.2,
      cantidad: 80,
    },
    {
      id: 3,
      elemento: 'Leche',
      marca: 'Marca C',
      peso: '1 litro',
      precio: 1.8,
      cantidad: 50,
    },
    {
      id: 4,
      elemento: 'Pan',
      marca: 'Marca D',
      peso: '400 g',
      precio: 0.8,
      cantidad: 120,
    },
    {
      id: 5,
      elemento: 'Huevos',
      marca: 'Marca E',
      peso: 'Docena',
      precio: 3.5,
      cantidad: 40,
    },
    {
      id: 6,
      elemento: 'Aceite de Oliva',
      marca: 'Marca F',
      peso: '750 ml',
      precio: 4.2,
      cantidad: 60,
    },
    {
      id: 7,
      elemento: 'Azúcar',
      marca: 'Marca G',
      peso: '1 kg',
      precio: 1.0,
      cantidad: 90,
    },
    {
      id: 8,
      elemento: 'Sal',
      marca: 'Marca H',
      peso: '500 g',
      precio: 0.5,
      cantidad: 110,
    },
    {
      id: 9,
      elemento: 'Papas',
      marca: 'Marca I',
      peso: '2 kg',
      precio: 2.0,
      cantidad: 70,
    },
    {
      id: 10,
      elemento: 'Tomates',
      marca: 'Marca J',
      peso: '1 kg',
      precio: 1.5,
      cantidad: 85,
    },
    {
      id: 11,
      elemento: 'Manzanas',
      marca: 'Marca K',
      peso: '1 kg',
      precio: 2.0,
      cantidad: 75,
    },
    {
      id: 12,
      elemento: 'Naranjas',
      marca: 'Marca L',
      peso: '1 kg',
      precio: 1.8,
      cantidad: 70,
    },
    {
      id: 13,
      elemento: 'Limones',
      marca: 'Marca M',
      peso: '1 kg',
      precio: 2.2,
      cantidad: 65,
    },
    {
      id: 14,
      elemento: 'Cebollas',
      marca: 'Marca N',
      peso: '1 kg',
      precio: 1.2,
      cantidad: 95,
    },
    {
      id: 15,
      elemento: 'Ajos',
      marca: 'Marca O',
      peso: '500 g',
      precio: 1.5,
      cantidad: 80,
    },
    {
      id: 16,
      elemento: 'Agua Mineral',
      marca: 'Marca P',
      peso: '2 litros',
      precio: 0.8,
      cantidad: 120,
    },
    {
      id: 17,
      elemento: 'Refresco de Cola',
      marca: 'Marca Q',
      peso: '2 litros',
      precio: 1.2,
      cantidad: 100,
    },
    {
      id: 18,
      elemento: 'Yogur Natural La Serenisima durazno',
      marca: 'Marca R',
      peso: '1 kg',
      precio: 2.3,
      cantidad: 60,
    },
    {
      id: 19,
      elemento: 'Queso',
      marca: 'Marca S',
      peso: '500 g',
      precio: 3.5,
      cantidad: 45,
    },
    {
      id: 20,
      elemento: 'Mantequilla',
      marca: 'Marca T',
      peso: '250 g',
      precio: 1.8,
      cantidad: 55,
    },
    {
      id: 21,
      elemento: 'Mermelada',
      marca: 'Marca U',
      peso: '400 g',
      precio: 2.0,
      cantidad: 70,
    },
    {
      id: 22,
      elemento: 'Café',
      marca: 'Marca V',
      peso: '250 g',
      precio: 4.5,
      cantidad: 40,
    },
    {
      id: 23,
      elemento: 'Té',
      marca: 'Marca W',
      peso: '50 g',
      precio: 3.0,
      cantidad: 85,
    },
    {
      id: 24,
      elemento: 'Cereal de Maíz',
      marca: 'Marca X',
      peso: '500 g',
      precio: 2.8,
      cantidad: 65,
    },
    {
      id: 25,
      elemento: 'Galletas',
      marca: 'Marca Y',
      peso: '200 g',
      precio: 1.5,
      cantidad: 90,
    },
    {
      id: 26,
      elemento: 'Chocolate',
      marca: 'Marca Z',
      peso: '100 g',
      precio: 2.0,
      cantidad: 75,
    },
    {
      id: 27,
      elemento: 'Pan Integral',
      marca: 'Marca A',
      peso: '500 g',
      precio: 1.8,
      cantidad: 80,
    },
    {
      id: 28,
      elemento: 'Atún en Lata',
      marca: 'Marca B',
      peso: '200 g',
      precio: 1.5,
      cantidad: 55,
    },
    {
      id: 29,
      elemento: 'Salsa de Tomate',
      marca: 'Marca C',
      peso: '500 g',
      precio: 1.2,
      cantidad: 70,
    },
    {
      id: 30,
      elemento: 'Arvejas en Lata',
      marca: 'Marca D',
      peso: '400 g',
      precio: 1.8,
      cantidad: 60,
    },
  ];
  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
  };

  return (
    <>
      <table className={style.table}>
        <caption className={style.table}>
          {' '}
          <strong> Productos</strong>
        </caption>
        <thead>
          <tr className={style.tr}>
            <th className={style.th}>Elemento</th>
            <th className={style.th}>Marca</th>
            <th className={style.th}>Peso Neto</th>
            <th className={style.th}>Precio</th>
            <th className={style.th}>Stock</th>
            <th className={style.th}>Venta</th>
          </tr>
        </thead>
        <tbody className={style.tBody}>
          {productos.map(({ id, elemento, marca, peso, precio, cantidad }) => {
            return (
              <tr className={style.tr} key={id}>
                <td className={style.td}>{elemento}</td>
                <td className={style.td}>{marca}</td>
                <td className={style.td}>{peso}</td>
                <td className={style.td}>{precio}</td>
                <td className={style.td}>{cantidad}</td>
                <td className={style.td}>
                  <input
                    type='number'
                    max={cantidad}
                    min={0}
                    defaultValue={0}
                    onChange={handleChange}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
