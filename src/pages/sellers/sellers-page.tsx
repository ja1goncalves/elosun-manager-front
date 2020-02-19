import React, {useState} from 'react';
import { TableCardComponent } from '../../components/table-card';
import { SellerService } from '../../services/seller';
import moment from 'moment';
import { StyledCard } from '../../components/page-card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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

    const [sellerData, setSellerData] = useState({});
    const [formInfo, setFormInfo] = useState({});

    const onChange = (field: string) => (evt: any) => {
        setFormInfo({
            ...formInfo,
            [field]: evt.target.value
        })
    }

    const onSubmit = (e: any) => {
        setSellerData({
            ...sellerData,
            buscar: true,
            formInfo
        })
        e.preventDefault();
    }

    const sellerService = SellerService.getInstance();

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
                    </div>
                    <div className="col">
                        <button className="btn btn-primary">Pesquisar <FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                </form>
            </StyledCard>
        <TableCardComponent
            service={sellerService}
            columnDefs={columnDefs}
            className={'row w-100'}
            customReqParams={sellerData}
            listName={'Fornecedores'} />
            </>
    )
}