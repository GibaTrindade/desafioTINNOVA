import React, { Component } from "react";
import axios from "axios";

import PageHeader from "../template/pageHeader";
import VeiculoForm from "./veiculoForm";
import VeiculosList from "./veiculosList";
import VeiculosNaoVendidos from "./veiculosNaoVendidos";
import PorMarcaList from "./porMarcaList";

const URL = 'http://localhost:3004/api/veiculos'
let isUpdating = false


export default class Veiculo extends Component {
    constructor(props) {
        super(props)
        let naoVendidos
        this.state = {
            modelo: '', marca: '', ano: '', descricao: '', list: [],
            naoVendidos: 0, porMarca: []
        }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeMarca = this.handleChangeMarca.bind(this)
        this.handleChangeAno = this.handleChangeAno.bind(this)
        this.handleChangeDescricao = this.handleChangeDescricao.bind(this)
        this.handleLoadToUpdate = this.handleLoadToUpdate.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleQuantidade = this.handleQuantidade.bind(this)
        this.handlePorMarca = this.handlePorMarca.bind(this)
        this.refresh()
    }

    refresh(modelo = '', marca = '', ano = '', descricao = '', isUp = false) {
        this.handleQuantidade()
        this.handlePorMarca()
        isUpdating = isUp
        let searchModelo = modelo ? `&veiculo__regex=/${modelo}/` : ''
        let searchMarca = marca ? `&marca__regex=/${marca}/` : ''
        let searchAno = ano ? `&ano=${parseInt(ano)}` : ''
        let procura = searchModelo + searchMarca + searchAno
        axios.get(`${URL}?sort=-created${procura}`)
            .then(resp => this.setState({
                ...this.state, modelo, marca, ano,
                descricao, list: resp.data
            }))
    }

    handleSearch() {
        this.refresh(this.state.modelo, this.state.marca,
            this.state.ano, this.state.descricao)
    }

    handleChange(e) {
        this.setState({ ...this.state, modelo: e.target.value })
    }

    handleChangeMarca(e) {
        this.setState({ ...this.state, marca: e.target.value })
    }
    handleChangeAno(e) {
        this.setState({ ...this.state, ano: e.target.value })
    }
    handleChangeDescricao(e) {
        this.setState({ ...this.state, descricao: e.target.value })
    }

    handleAdd() {

        const veiculo = this.state.modelo
        const marca = this.state.marca
        const ano = this.state.ano
        const descricao = this.state.descricao
        axios.post(URL, {
            veiculo: veiculo, marca: marca,
            ano: ano, descricao: descricao
        })
            .then(resp => this.refresh())
    }

    handleLoadToUpdate(v) {
        isUpdating = true
        this.refresh(v.veiculo, v.marca,
            v.ano, v.descricao, isUpdating)
    }

    handleUpdate(v) {
        const veiculo = this.state.modelo || v.modelo
        const marca = this.state.marca || v.marca
        const ano = this.state.ano || v.ano
        const descricao = this.state.descricao || v.descricao
        axios.put(`${URL}/${v._id}`, { ...v, veiculo, marca, ano, descricao })
            .then(resp => this.refresh())
    }

    handleRemove(veiculo) {
        axios.delete(`${URL}/${veiculo._id}`)
            .then(resp => this.refresh(this.state.modelo))
    }

    handleMarkAsDone(veiculo) {

        axios.put(`${URL}/${veiculo._id}`, { ...veiculo, vendido: true })
            .then(this.handleQuantidade())
            .then(resp => this.refresh(this.state.modelo))

    }

    handleMarkAsPending(veiculo) {

        axios.put(`${URL}/${veiculo._id}`, { ...veiculo, vendido: false })
            .then(this.handleQuantidade())
            .then(resp => this.refresh(this.state.modelo))

    }

    handleClear() {
        this.refresh()
    }

    handleQuantidade() {
        axios.get(`${URL}/naoVendidos`)
            .then(resp => this.setState({ ...this.state, naoVendidos: resp.data.value })
            )
    }

    handlePorMarca() {
        axios.get(`${URL}/porMarca`)
            .then(resp => this.setState({ ...this.state, porMarca: resp.data })
            )
    }



    render() {
        return (
            <div>

                <VeiculosNaoVendidos handleQuantidade={this.state.naoVendidos} />
                <PorMarcaList porMarca={this.state.porMarca} />
                <PageHeader name='Veículos' small='Cadastro'></PageHeader>
                <VeiculoForm modelo={this.state.modelo}
                    marca={this.state.marca}
                    ano={this.state.ano}
                    descricao={this.state.descricao}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    handleChangeMarca={this.handleChangeMarca}
                    handleChangeAno={this.handleChangeAno}
                    handleChangeDescricao={this.handleChangeDescricao}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                    isUpdating={this.isUpdating}>
                </VeiculoForm>
                <VeiculosList list={this.state.list}
                    handleLoadToUpdate={this.handleLoadToUpdate}
                    handleUpdate={this.handleUpdate}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                ></VeiculosList>
            </div >
        )
    }
}