import React, { useState } from 'react';
import { LeadPurchaserService } from '../../services/lead-purchaser';
import { TableCardComponent } from '../../components/table-card';
import { stringToBrDateTime } from '../../utils/app.utils'
import { StyledCard } from '../../components/page-card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { brazilStates } from '../../utils/address-utils';
import { useHistory } from 'react-router-dom';

export default () => {
    const history = useHistory()    
    const [leadPurchaserData, setLeadPurchaserData] = useState({
        lead: true,
        formInfo: {}
    });
    const [formInfo, setFormInfo] = useState({});
    const leadPurchaserService = LeadPurchaserService.getInstance();


    const columnDefs = [
        { headerName: 'Nome', field: 'name' },
        { headerName: 'Email', field: 'email' },
        { headerName: 'Telefone', field: 'cellphone' },
        { headerName: 'Estado', field: 'addresses.0.state' },
        {
            headerName: 'Gasto Mensal de Energia', field: 'orders.0.start_watts',
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
            headerName: 'Última Atualização', field: 'updated_at', cellRenderer({ data: { updated_at } }: any) {
                return stringToBrDateTime(updated_at, true);
            }
        },
        {
            headerName: 'Data de criação', field: 'created_at', cellRenderer({ data: { created_at } }: any) {
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
        setLeadPurchaserData({
            ...leadPurchaserData,
            formInfo
        })
        e.preventDefault();
    }
    const cellClicked = (event: any) => {
        const { data: {id} } = event;

        history.push(`purchasers/${id}`)
    }

    return (
        <>
            <StyledCard className="w-100 text-secondary mb-3 row">
                <header className="col-12">
                    <h2>Pesquisar Clientes Interessados</h2>
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
                            <div className="form-group">
                                <label htmlFor="state">Estado</label>
                                <select className="form-control form-control-sm" onChange={onChange("state")} name="state" id="state">
                                    <option value="">Todos</option>
                                    {brazilStates.map(({ value, label }, index: number) =>
                                        <option key={index} value={value}>{label}</option>
                                    )}
                                </select>
                            </div>
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
                    <div className="col-12 text-right">
                        <button className="btn btn-primary">Pesquisar <FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                </form>
            </StyledCard>
            <TableCardComponent
                service={leadPurchaserService}
                columnDefs={columnDefs}
                customReqParams={leadPurchaserData}
                className={'row w-100'}
                listName={'Clientes Interessados'}
                cellClicked={cellClicked} />
        </>
    )
}