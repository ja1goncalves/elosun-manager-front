import React, {useState} from 'react';
import { PurchaserService } from '../../services/purchaser';
import { TableCardComponent } from '../../components/table-card';
import moment from 'moment';
import { StyledCard } from '../../components/page-card';
import { FaSearch } from "react-icons/fa";

export default () => {
    const columnDefs = [
        { headerName: 'Nome', field: 'name' },
        { headerName: 'Email', field: 'email' },
        { headerName: 'Documento legal', field: 'cpf_cnpj' },
        { headerName: 'Celular', field: 'cellphone' },
        { headerName: 'Código do comprador', field: 'number' },
        { headerName: 'Data de criação', field: 'created_at', cellRenderer({ data: { created_at } }: any) {
            return moment(created_at).format('DD/MM/YYYY H:m:s');
        } },
    ]

    const [purchaserData, setPurchaserData] = useState({});
    const [formInfo, setFormInfo] = useState({});

    const onChange = (field: string) => (evt: any) => {
        setFormInfo({
            ...formInfo,
            [field]: evt.target.value
        })
    }

    const onSubmit = (e: any) => {
        setPurchaserData({
            ...purchaserData,
            buscar: true,
            formInfo
        })
        e.preventDefault();
    }

    const purchaserService = PurchaserService.getInstance();



    return (
        <>
            <StyledCard className="w-100 text-secondary mb-3 row">
                <header className="col-12">
                    <h2>Pesquisar</h2>
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
                            <label htmlFor="orderStatusId">orderStatusId:</label>
                            <input type="number" className="form-control form-control-sm" onChange={onChange("orderStatusId")} name="orderStatusId" id="orderStatusId" />
                        </div>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary">Pesquisar <FaSearch /></button>
                    </div>
                </form>
            </StyledCard>
        <TableCardComponent
            service={purchaserService}
            columnDefs={columnDefs}
            customReqParams={purchaserData}
            className={'row w-100'}
            listName={'Clientes'} />
            </>
    )
}