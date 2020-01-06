import React, { useEffect, useState } from 'react';
import { TableCardComponent } from '../../components/table-card';
import { StationService } from '../../services/station';
import { queryStringToObject } from '../../utils/app.utils';

export default () => {
    
    const [initials, setInitials] = useState<string>('');
    const [distributorName, setDistributorName] = useState<string>('');

    const columnDefs = [
        { headerName: 'Nome', field: 'name' },
        { headerName: 'Sigla', field: 'initials' },
        { headerName: 'Estações', field: 'total_stations' },
        { headerName: 'Potência (kW)', field: 'potency_kW' },
    ];

    const stationService = StationService.getInstance();

    useEffect(() => {

        const queryString: { initials: string, name: string } | null = queryStringToObject(window.location.href);

        console.log('queryString: ', queryString);
        if (queryString) {
            setDistributorName(queryString.name);
            setInitials(queryString.initials);
        }

    }, []);

    return (
        <TableCardComponent
            service={stationService}
            columnDefs={columnDefs}
            customReqParams={initials}
            className={'row w-100'}
            listName={`estações do fornecedor ${distributorName}`} />
    )
}