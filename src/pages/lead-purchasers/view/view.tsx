import React, { useEffect, useState, useCallback } from 'react';
import { TableCardComponent } from '../../../components/table-card';
import { StationService } from '../../../services/station';
import { queryStringToObject } from '../../../utils/app.utils';
import moment from 'moment';
import { StyledCard } from '../../../components/page-card';
import { IDistributorData } from './view-types';
import { StyledDistributorInfoContainer } from './view-styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default () => {

    const [distributorData, setDistributorData] = useState<IDistributorData>({
        name: '',
        totalStations: 0,
        totalUcs: 0,
        potencyKw: 0,
        initials: '',
        site: '',
        link_ucs: '',
        createdAt: '',
    });

    const [stationData, setStationData] = useState({});
    const [formInfo, setFormInfo] = useState({});

    const onChange = (field:string) => (evt:any) => {
        setFormInfo({
            ...formInfo,
            [field]: evt.target.value
        })
    }

    const onSubmit = (e:any) => {
        setStationData({
            ...stationData,
            formInfo
        })
        e.preventDefault();
    }

    const columnDefs = [
        { headerName: 'Nome', field: 'name' },
        { headerName: 'Suporte', field: 'holder' },
        { headerName: 'Potência (Kw)', field: 'potency_kW' },
        { headerName: 'Subgrupo de', field: 'subgroup' },
        {
            headerName: 'Criado em', field: 'created_at', cellRenderer(ev: any) {

                const stringValue = ev.getValue('created_at');
                return stringToBrDate(stringValue);

            }
        },
        {
            headerName: 'Última conexão', field: 'connection_at', cellRenderer(ev: any) {

                const stringValue = ev.getValue('connection_at');
                return stringToBrDate(stringValue);

            }
        },
    ];

    const stringToBrDate = (dateString: string) => {
        const momentDate = moment(dateString, 'YYYY-MM-DD');

        return momentDate.format('DD/MM/YYYY');
    }

    const stationService = StationService.getInstance();

    const getDistributor = useCallback(
        async (distributorId: string) => {

            const distributor = await stationService.getDistributorData(distributorId);

            setDistributorData({
                name: distributor.name,
                totalStations: distributor.total_stations,
                totalUcs: distributor.total_ucs,
                potencyKw: distributor.potency_kW,
                initials: distributor.initials,
                site: distributor.site,
                link_ucs: distributor.link_ucs,
                createdAt: moment(distributor.created_at, 'YYYY-MM-DD').format('DD/MM/YYYY'),
            });

        }, [stationService]);

    useEffect(() => {

        const queryString: { id: string, name: string } | null = queryStringToObject(window.location.href);

        if (queryString) {
            setStationData({
                id: queryString.id
            })
            getDistributor(queryString.id);
        }

    }, [getDistributor]);

    return (
        <>
            <StyledCard className="w-100 text-secondary mb-3 row">
                <header className="col-12">
                    <h2>Informações da Distribuidora</h2>
                    <hr />
                </header>
                <StyledDistributorInfoContainer className="col-12">
                    <div className="row">
                        <div>
                            <h5><b>{distributorData.name} ({distributorData.initials})</b></h5>
                            <label><b>Potência total (Kw):</b> {distributorData.potencyKw} | <b>Total de UCS:</b> {distributorData.totalUcs} {distributorData.site ? <>| <a rel="noopener noreferrer" href={distributorData.site} target="_blank"><b>Visitar site</b></a></> : ''} | <a href={"http://www2.aneel.gov.br/scg/gd/" + distributorData.link_ucs} target="_blank" rel="noopener noreferrer"><b>Ver unidades consumidoras com geração</b></a> | <b>Data de Criação:</b> {distributorData.createdAt}</label>
                        </div>
                    </div>
                </StyledDistributorInfoContainer>
            </StyledCard>

            <StyledCard className="w-100 text-secondary mb-3 row">
                <header className="col-12">
                    <h2>Pesquisar</h2>
                    <hr />
                </header>
                {/* <StyledDistributorInfoContainer className="col-12"> */}

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="row">
                            <div className="form-group col-3">
                                <label htmlFor="name">Nome:</label>
                                <input type="text" className="form-control form-control-sm" onChange={onChange("name")} id="name" name="name" />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="holder">Suporte:</label>
                                <input type="text" className="form-control form-control-sm" onChange={onChange("holder")} name="holder" id="holder" />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="potencykW">Potência (Kw):</label>
                                <input type="text" className="form-control form-control-sm" onChange={onChange("potencykW")} name="potencykW" id="potencykW"/>
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="subgroup">Subgrupo:</label>
                                <input type="text" className="form-control form-control-sm" onChange={onChange("subgroup")} name="subgroup" id="subgroup"/>
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="dateConnection">Última Conexão:</label>
                                <input type="date" className="form-control form-control-sm" onChange={onChange("dateConnection")} name="dateConnection" id="dateConnection"/>
                            </div>                            
                        </div>
                        <div className="col">
                            <button className="btn btn-primary">Pesquisar <FontAwesomeIcon icon={faSearch} /></button>
                        </div>
                    </form>

                {/* </StyledDistributorInfoContainer> */}
            </StyledCard>

            <TableCardComponent
                service={stationService}
                columnDefs={columnDefs}
                customReqParams={stationData}
                className={'row w-100'}
                listName={'Estações'} />
            {/* //  onTableRequisition={onTableRequisition}  */}
            {/* //  pathToList={['electric_stations']} /> */}
        </>
    )
}