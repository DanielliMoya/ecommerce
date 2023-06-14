function ComponenteCompetencia(props) {
    return (
        <div
        style={{
            background:"green",
            color: "blue",
            width:"100%",
            margin:"0 auto",
            padding:"1%",
            border:"2px solid brown",
        }}
        >
            
        <div>{props.nome}</div>
        <div>{props.descricao}</div>

                  
        </div>
    );
}
export { ComponenteCompetencia}