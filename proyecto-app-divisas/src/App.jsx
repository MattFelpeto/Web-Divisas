import './App.css'
import PaginaCalcDivisas from './componentes/PaginaCalcDivisas'
import { Route, Routes } from 'react-router-dom'
import { BaseComponentes } from './componentes/BaseComponentes'
import { DolarOficialInfo } from './subComponentes/DolarOficialInfo';
import { DolarBlueInfo } from './subComponentes/DolarBlueInfo';
import { CalculadoraSimult } from './componentes/CalculadoraSimult';


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<BaseComponentes/>} ></Route>
        <Route path="/calculadora" element={<PaginaCalcDivisas/>}></Route>
        <Route path="/DolarOficialInfo" element={<DolarOficialInfo/>}></Route>
        <Route path='/DolarBlueInfo' element={<DolarBlueInfo/>} ></Route>
        <Route path='/CalculadoraSim' element={<CalculadoraSimult/>}></Route>
      </Routes>
    </>
  );
}

export default App;