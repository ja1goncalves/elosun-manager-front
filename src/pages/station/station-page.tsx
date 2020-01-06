import React, { useEffect, useState } from 'react';
import { TableCardComponent } from '../../components/table-card';
import { StationService } from '../../services/station';
import { queryStringToObject } from '../../utils/app.utils';
import moment from 'moment';
import { StyledCard } from '../../components/page-card';
import { IDistributorData } from './station-types';

export default () => {
    
    const [distributorId, setDistributorId] = useState<string>();
    const [distributorData, setDistributorData] = useState<IDistributorData>({
        name: '',
        totalStations: 0,
        potencyKw: 0,
        initials: '',
        site: '',
        createdAt: '',
    });

    const columnDefs = [
        { headerName: 'Nome', field: 'name' },
        { headerName: 'Suporte', field: 'holder' },
        { headerName: 'Potência (Kw)', field: 'potency_kw' },
        { headerName: 'Subgrupo de', field: 'subgroup' },
        { headerName: 'Criado em', field: 'created_at', cellRenderer(ev: any) {
            
            const stringValue = ev.getValue('created_at');
            return stringToBrDate(stringValue);

        } },
        { headerName: 'Última conexão', field: 'connection_at', cellRenderer(ev: any) {

            const stringValue = ev.getValue('connection_at');
            return stringToBrDate(stringValue);

        } },
    ];

    const stringToBrDate = (dateString: string) => {
        const momentDate = moment(dateString, 'YYYY-MM-DD');

        return momentDate.format('DD/MM/YYYY');
    }

    const stationService = StationService.getInstance();

    useEffect(() => {

        const queryString: { id: string, name: string } | null = queryStringToObject(window.location.href);

        if (queryString) {
            setDistributorId(queryString.id);
        }

    }, []);

    const onTableRequisition = (response: any) => {
        console.log('response: ', response);

        setDistributorData({
            name: response.name,
            totalStations: response.total_stations,
            potencyKw: response.potency_kw,
            initials: response.initials,
            site: response.site,
            createdAt: moment(response.created_at, 'YYYY-MM-DD').format('DD/MM/YYYY'),
        });
    
    }

    return (
        <>
            <StyledCard className="w-100 text-secondary mb-3 row">
                <header className="col-12">
                    <h2>Informações do distribuidor</h2>
                    <hr />
                </header>
                <div className="col-12">
                    <p>Nome: {distributorData.name}</p>
                    <p>Iniciais: {distributorData.initials}</p>
                    <p>Potência (Kw): {distributorData.potencyKw}</p>
                    <p>Site: {distributorData.site ?
                        <a rel="noopener noreferencer" href={distributorData.site} target="_blank">Ir ao site</a> :
                        'Não há site'}
                    </p>
                    <p>Total de estações: {distributorData.totalStations}</p>
                    <p>Data de criação: {distributorData.createdAt}</p>
                </div>
            </StyledCard>
            <TableCardComponent
                service={stationService}
                columnDefs={columnDefs}
                customReqParams={distributorId}
                className={'row w-100'}
                listName={'estações'}
                onTableRequisition={onTableRequisition}
                pathToList={['electric_stations']} />
        </>
    )
}