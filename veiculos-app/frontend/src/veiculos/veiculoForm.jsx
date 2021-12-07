import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";


export default props => {
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        
        <div role='form' className='veiculoForm'>
            <Grid cols='12 9 10'>
                <input id='modelo' className='form-control'
                    placeholder='Digite o nome do Modelo...'
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={props.modelo}></input>
                <select value={props.marca} 
                onChange={props.handleChangeMarca}
                className="form-control">
                    <option value="" defaultValue disabled hidden>Escolha uma Marca...</option>
                    <option value="Ford">Ford</option>
                    <option value="FIAT">FIAT</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Chevrolet">Chevrolet</option>
                    <option value="Volkswagen">Volkswagen</option>
                    <option value="BMW">BMW</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Honda">Honda</option>
                    <option value="Nissan">Nissan</option>
                    <option value="Peugeot">Peugeot</option>
                    <option value="Citroën">Citroën</option>
                    <option value="Audi">Audi</option>
                </select>
                <input id='ano' className='form-control'
                    placeholder='Digite o Ano...'
                    onChange={props.handleChangeAno}
                    onKeyUp={keyHandler}
                    value={props.ano}></input>
                <input id='descricao' className='form-control'
                    placeholder='Digite uma Descrição...'
                    onChange={props.handleChangeDescricao}
                    onKeyUp={keyHandler}
                    value={props.descricao}></input>
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus'
                    onClick={props.handleAdd} alt="Inserir Veículo"></IconButton>
                <IconButton style='info' icon='search'
                    onClick={props.handleSearch} alt="Pesquisar"></IconButton>
                <IconButton style='default' icon='close' alt="Refresh"
                    onClick={props.handleClear}></IconButton>
            </Grid>

        </div>
    )
}