import React from "react";

export default props => {

    const renderRows = () => {
        const list = props.ultimaSemana || []

        return (
            list.map(veiculo => (
                <tr key={veiculo._id}>
                    <td className={veiculo.vendido ? 'markedAsDone' : ''}>{veiculo.veiculo}</td>
                    <td className={veiculo.vendido ? 'markedAsDone' : ''}>{veiculo.marca}</td>
                    <td className={veiculo.vendido ? 'markedAsDone' : ''}>{veiculo.created}</td>
                </tr>
            ))
        )
    }

    return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Modelo</th>
                        <th>Marca</th>
                        <th>Ano</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
    )
}