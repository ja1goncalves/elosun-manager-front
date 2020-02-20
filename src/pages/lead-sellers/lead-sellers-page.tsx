import React, {useState} from 'react';
import { TableCardComponent } from '../../components/table-card';
import { LeadSellerService } from '../../services/lead-seller';
import moment from 'moment';
import { StyledCard } from '../../components/page-card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default () => {
    const columnDefs = [
        { headerName: 'Nome', field: 'name' },
        { headerName: 'Email', field: 'email' },
        { headerName: 'Telefone', field: 'cellphone' },
        { headerName: 'Estado', field: 'addresses.0.state' },
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
        {
            headerName: 'Data de criação', field: 'created_at', cellRenderer({ data: { created_at } }: any) {
                return moment(created_at).format('DD/MM/YYYY');
            }
        },
    ]

    const [leadSellerData, setLeadSellerData] = useState({
        lead: true,
        formInfo: {}
    });
    const [formInfo, setFormInfo] = useState({});
    
    const onChange = (field: string) => (evt: any) => {
        setFormInfo({
            ...formInfo,
            [field]: evt.target.value
        })
    }

    const onSubmit = (e: any) => {
        setLeadSellerData({
            ...leadSellerData,
            formInfo
        })
        e.preventDefault();
    }

    const leadSellerService = LeadSellerService.getInstance();


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
                            <label htmlFor="cellphone">Telefone:</label>
                            <input type="number" className="form-control form-control-sm" onChange={onChange("cellphone")} name="cellphone" id="cellphone" />
                        </div>
                        <div className="form-group col-3">
                            <label htmlFor="state">Estado:</label>
                            <input type="text" className="form-control form-control-sm" onChange={onChange("state")} name="state" id="state" />
                        </div>
                        <div className="form-group col-3">
                            <label htmlFor="startWatts">Potência Mínima (kW):</label>
                            <input type="text" className="form-control form-control-sm" onChange={onChange("startWatts")} name="startWatts" id="startWatts" />
                        </div>
                        <div className="form-group col-3">
                            <label htmlFor="endWatts">Potência Máxima (kW):</label>
                            <input type="text" className="form-control form-control-sm" onChange={onChange("endWatts")} name="endWatts" id="endWatts" />
                        </div>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary">Pesquisar <FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                </form>
            </StyledCard>
            <TableCardComponent
                service={leadSellerService}
                columnDefs={columnDefs}
                customReqParams={leadSellerData}
                className={'row w-100'}
                listName={'Fornecedores Interessados'} />
        </>
    )
}