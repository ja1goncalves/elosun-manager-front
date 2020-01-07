import React, { useEffect, useState } from 'react';
import { TableCardComponent } from '../../components/table-card';
import { StationService } from '../../services/station';
import { queryStringToObject } from '../../utils/app.utils';
import moment from 'moment';
import { StyledCard } from '../../components/page-card';
import { IDistributorData } from './station-types';
import { StyledDistributorInfoContainer } from './station-styles';

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
        { headerName: 'Potência (Kw)', field: 'potency_kW' },
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
            getDistributor(queryString.id);
        }

    }, []);

    const getDistributor = async (distributorId: string) => {

        const distributor = await stationService.getDistributorData(distributorId);

        setDistributorData({
            name: distributor.name,
            totalStations: distributor.total_stations,
            potencyKw: distributor.potency_kW,
            initials: distributor.initials,
            site: distributor.site,
            createdAt: moment(distributor.created_at, 'YYYY-MM-DD').format('DD/MM/YYYY'),
        });
    
    }

    return (
        <>
            <StyledCard className="w-100 text-secondary mb-3 row">
                <header className="col-12">
                    <h2>Informações do distribuidor</h2>
                    <hr />
                </header>
                <StyledDistributorInfoContainer className="col-12">
                    <div>
                        <p>Nome:</p>
                        <p>{distributorData.name}</p>
                    </div>
                    <div>
                        <p>Iniciais:</p>
                        <p>{distributorData.initials}</p>
                    </div>
                    <div>
                        <p>Potência total (Kw):</p>
                        <p>{distributorData.potencyKw}</p>
                    </div>
                    <div>
                        <p>Site:</p>
                        <p>
                            {distributorData.site ?
                            <a rel="noopener noreferrer" href={distributorData.site} target="_blank">Ir ao site</a> :
                            'Não há site'}
                        </p>
                    </div>
                    <div>
                        <p>Total de estações:</p>
                        <p>{distributorData.totalStations}</p>
                    </div>
                    <div>
                        <p>Data de criação:</p>
                        <p>{distributorData.createdAt}</p>
                    </div>
                </StyledDistributorInfoContainer>
            </StyledCard>
            <TableCardComponent
                service={stationService}
                columnDefs={columnDefs}
                customReqParams={distributorId}
                className={'row w-100'}
                listName={'estações'} />
                {/* onTableRequisition={onTableRequisition} */}
                {/* pathToList={['electric_stations']} */}
        </>
    )
}