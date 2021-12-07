import React from "react";
import IconButton from "../template/iconButton";

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return (
            list.map(veiculo => (
                <tr key={veiculo._id}>
                    <td className={veiculo.vendido ? 'markedAsDone' : ''}>{veiculo.veiculo}</td>
                    <td className={veiculo.vendido ? 'markedAsDone' : ''}>{veiculo.marca}</td>
                    <td className={veiculo.vendido ? 'markedAsDone' : ''}>{veiculo.ano}</td>
                    <td className={veiculo.vendido ? 'markedAsDone' : ''}>{veiculo.descricao}</td>
                    <td className={veiculo.vendido ? 'markedAsDone' : ''}>{veiculo.vendido ? 'SIM' : 'NÃO'}</td>
                    <td width="300px">
                        <IconButton style='success' icon='check' hide={veiculo.vendido}
                            onClick={() => props.handleMarkAsDone(veiculo)}
                            alt="Vender Veículo"></IconButton>
                        <IconButton style='warning' icon='undo' hide={!veiculo.vendido}
                            onClick={() => props.handleMarkAsPending(veiculo)}
                            alt="Desfazer Venda"></IconButton>
                        <IconButton style='warning' icon='upload' alt="Carregar Veículo"
                            onClick={() => props.handleLoadToUpdate(veiculo)}></IconButton>
                        <IconButton style='warning' icon='pencil' alt="Efetivar UpDate"
                            onClick={() => props.handleUpdate(veiculo)}></IconButton>
                        <IconButton style='danger' icon='trash-o'
                            onClick={() => props.handleRemove(veiculo)}
                            alt="Excluir Veículo"></IconButton>
                    </td>
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
                    <th>Descrição</th>
                    <th>Vendido?</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}