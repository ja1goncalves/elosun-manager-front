import React, { useState, useEffect } from 'react';
import { TypeTableComponentConfig, TypeSelectedPagination, TypeColumnDefs } from '../../components/table/table-types';
import { TableComponent } from '../../components/table';
import { StyledCard } from '../../components/page-card';

export default () => {
    const [columnDefs] = useState<TypeColumnDefs[]>([
        { headerName: 'Nome', field: 'name' },
        { headerName: 'Idade', field: 'age' },
        { headerName: 'Preço', field: 'price' },
    ]);
    const [tableInfo, setTableInfo] = useState<TypeTableComponentConfig>({ rowData: [], pageCount: 0 });

    useEffect(() => {
        setTableInfo({
            rowData: [
                { name: 'Roberto Carlos', age: 25, price: 'R$ 1.000,00' },
                { name: 'Roberto Carlos', age: 25, price: 'R$ 1.000,00' },
                { name: 'Roberto Carlos', age: 25, price: 'R$ 1.000,00' },
            ],
            pageCount: 2,
        });
    }, []);

    const handlePagination = ({ selected }: TypeSelectedPagination): void => {
        // TODO: Adicionar requisição para coletar os dados da tabela
        console.log('selectedPage: ', selected);
    }

    return (
        <>
            <StyledCard className="row w-100">
                <div className="row w-100">
                    <h4>Listagem de fornecedores da anael</h4>
                </div>
                <hr className="row w-100" />
                {/* <div className="row w-100">
                    <h4>Filtragem</h4>
                </div>
                <hr className="row w-100" /> */}
                <div className="row w-100">
                    <TableComponent
                        {...tableInfo}
                        columnDefs={columnDefs}
                        handlePagination={handlePagination}
                    />
                </div>
            </StyledCard>
        </>
    )
}