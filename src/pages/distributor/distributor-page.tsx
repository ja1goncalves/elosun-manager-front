import React, { useState } from 'react';

import { DistributorService } from '../../services/distributor';
import { TableCardComponent } from '../../components/table-card';
import { useHistory } from 'react-router-dom';
import { StyledCard } from '../../components/page-card';
import { FaSearch } from "react-icons/fa";

export default () => {

    const history = useHistory();

    const columnDefs = [
        { headerName: 'Nome', field: 'name' },
        { headerName: 'Sigla', field: 'initials' },
        { headerName: 'Estações', field: 'total_stations' },
        { headerName: 'Potência (kW)', field: 'potency_kW' },
    ];

    const [distributorData, setDistributorData] = useState({});
    const [formInfo, setFormInfo] = useState({});

    const onChange = (field: string) => (evt: any) => {
        setFormInfo({
            ...formInfo,
            [field]: evt.target.value
        })
    }

    const onSubmit = (e: any) => {
        setDistributorData({
            ...distributorData,
            buscar: true,
            formInfo
        })
        e.preventDefault();
    }

    const cellClicked = (event: any) => {
        const { data: { id, name } } = event;

        history.push({
            pathname: 'distributors/stations',
            search: `?id=${id}&name=${name}`,
        })
    }

    const distributorService = DistributorService.getInstance();

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
                            <label htmlFor="initials">Sigla:</label>
                            <input type="text" className="form-control form-control-sm" onChange={onChange("initials")} name="initials" id="initials" />
                        </div>
                        <div className="form-group col-3">
                            <label htmlFor="totalStations">Estações:</label>
                            <input type="number" className="form-control form-control-sm" onChange={onChange("totalStations")} name="totalStations" id="totalStations" />
                        </div>
                        <div className="form-group col-3">
                            <label htmlFor="potency">Potência (kW):</label>
                            <input type="text" className="form-control form-control-sm" onChange={onChange("potency")} name="potency" id="potency" />
                        </div>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary">Pesquisar <FaSearch /></button>
                    </div>
                </form>
            </StyledCard>
            <TableCardComponent
                service={distributorService}
                columnDefs={columnDefs}
                customReqParams={distributorData}
                className={'row w-100'}
                listName={'Distribuidoras'}
                cellClicked={cellClicked} />
        </>

    )
}
