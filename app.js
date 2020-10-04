import React from 'react';
import Nombre from './nombre';
import Apellido from './apellido';
import Mascota from './moscota';
import Layout from './layout';

const App = () =>
{
    const data = 
    {
        nombre: 'Miguel Angel',
        apellido: 'Mosquera Balaguera',
        mascota: 'Gato'
    }
return (
    <Layout>
        <Nombre nombre = {data.nombre} />
        <Apellido apellido = {data.apellido} />
        <Mascota mascota = {data.mascota}/>
    </Layout>
)
}
export default App;