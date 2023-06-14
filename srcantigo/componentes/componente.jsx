import { useEffect } from "react";
import { useState } from "react";

function ComponenteNome() {

    const [nome, setNome] = useState("Danielli Moya");
   
    useEffect(()=> {

       alert(`alterado o nome para ${nome}`)
    }, [nome])

    return (
        <div>

             <button onClick= {()=>setNome("Dani")}> Alterar para Apelido</button>
            <button onClick= {()=> setNome("Danielli Moya")} > Alterar para Nome</button>

             <p> Nome:{nome}</p>

        </div >
    );
}
export { ComponenteNome }