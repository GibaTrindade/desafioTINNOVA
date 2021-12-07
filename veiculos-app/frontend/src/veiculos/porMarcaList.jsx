import React from "react";

export default props => {

    const renderRows = () => {
        const list = props.porMarca || []
        return (
            list.map(lista => (
                <tr key={lista._id}>
                    <td>{lista._id}</td>
                    <td>{lista.count}</td>
                </tr>
            ))
        )
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Marca</th>
                    <th>Quantidade</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}