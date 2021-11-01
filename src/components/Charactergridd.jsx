import React from 'react';
import Characteitem from './Characteitem';
import Spinner from './Spinner';



const Charactergridd = ({isloading,items}) => {
    return  isloading ?(
         <Spinner /> 
    
   )  : (
       <section className="cards">
           
              {items.map((item) => (
  <Characteitem key={item.char_id} item={item}></Characteitem>
              ))}

       </section>
   )
    
 
   
     

    // si esta cargando muestra el spinner sino mapea los resultados
  

}

export default Charactergridd
