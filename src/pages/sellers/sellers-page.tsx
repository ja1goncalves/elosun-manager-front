import React, { useState } from 'react';
import { TableCardComponent } from '../../components/table-card';
import { SellerService } from '../../services/seller';
import { stringToBrDateTime } from '../../utils/app.utils'
import { useHistory } from 'react-router-dom'
import { StyledCard } from '../../components/page-card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default () => {
    const history = useHistory()
    const [sellerData, setSellerData] = useState({});
    const [formInfo, setFormInfo] = useState({});
    const sellerService = SellerService.getInstance();

    const columnDefs = [
        { headerName: 'Nome', field: 'name' },
        { headerName: 'Email', field: 'email' },
        { headerName: 'Documento Legal', field: 'cpf_cnpj' },
        { headerName: 'Celular', field: 'cellphone' },
        { headerName: 'Código do comprador', field: 'number' },
        {
            headerName: 'Produção Mensal de Energia', field: 'orders.0.start_watts',
            cellRenderer(ev: any) {
                const startWatts = ev.getValue('orders.0.start_watts');
                const endWatts = ev.getValue('orders.0.end_watts');

                if (startWatts === 2500) {
                    return "Mais de 2500kw";
                } else if (startWatts === 0) {
                    return "Até 500kw";
                } else {
                    return startWatts + "kw - " + endWatts + "kw"
                }
            }
        },
        { headerName: 'Status', field: 'orders.0.status.name' },
        {
            headerName: 'Última Atualização', field: 'updated_at', cellRenderer({ data: { updated_at } }: any) {
                return stringToBrDateTime(updated_at, true);
            }
        },
        {
            headerName: 'Data de Criação', field: 'created_at', cellRenderer({ data: { created_at } }: any) {
                return stringToBrDateTime(created_at);
            }
        },
    ]

    const onChange = (field: string) => (evt: any) => {
        setFormInfo({
            ...formInfo,
            [field]: evt.target.value
        })
    }
    const onSubmit = (e: any) => {
        setSellerData({
            ...sellerData,
            formInfo
        })
        e.preventDefault();
    }
    const cellClicked = (event: any) => {
        const { data: { id } } = event;

        history.push(`sellers/${id}`)
    }

    return (
        <>
            <StyledCard className="w-100 text-secondary mb-3 row">
                <header className="col-12">
                    <h2>Pesquisar Fornecedores</h2>
                    <hr />
                </header>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="row">
                        <div className="form-group col-3">
                            <label htmlFor="name">Nome:</label>
                            <input type="text" className="form-control form-control-sm" onChange={onChange("name")} id="name" name="name" />
                        </div>
                        <div className="form-group col-3">
                            <label htmlFor="email">Email:</label>
                            <input type="text" className="form-control form-control-sm" onChange={onChange("email")} name="email" id="email" />
                        </div>
                        <div className="form-group col-3">
                            <label htmlFor="cpf_cnpj">Documento Legal:</label>
                            <input type="text" className="form-control form-control-sm" onChange={onChange("cpf_cnpj")} name="cpf_cnpj" id="cpf_cnpj" />
                        </div>
                        <div className="form-group col-3">
                            <label htmlFor="cellphone">Telefone:</label>
                            <input type="number" className="form-control form-control-sm" onChange={onChange("cellphone")} name="cellphone" id="cellphone" />
                        </div>
                        <div className="form-group col-3">
                            <label htmlFor="startWatts">Potência Mínima (kW):</label>
                            <input type="text" className="form-control form-control-sm" onChange={onChange("startWatts")} name="startWatts" id="startWatts" />
                        </div>
                        <div className="form-group col-3">
                            <label htmlFor="endWatts">Potência Máxima (kW):</label>
                            <input type="text" className="form-control form-control-sm" onChange={onChange("endWatts")} name="endWatts" id="endWatts" />
                        </div>
                        <div className="form-group col-3">
                            <label htmlFor="orderStatusId">Status da Ordem:</label>
                            <select className="form-control form-control-sm" id="orderStatusId" name="orderStatusId" onChange={onChange("orderStatusId")}>
                                <option value="" selected>Todos</option>
                                <option value="1">Indefinido</option>
                                <option value="2">Cadastro</option>
                                <option value="3">Em análise</option>
                                <option value="4">A transferir</option>
                                <option value="5">Transferido</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 text-right">
                        <button className="btn btn-primary">Pesquisar <FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                </form>
            </StyledCard>
            <TableCardComponent
                service={sellerService}
                columnDefs={columnDefs}
                className={'row w-100'}
                customReqParams={sellerData}
                listName={'Fornecedores'}
                cellClicked={cellClicked} />
        </>
    )
}