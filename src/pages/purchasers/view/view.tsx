import React, { useEffect, useState, useCallback } from 'react';
import { UserService } from '../../../services/user';
import { brazilStates } from '../../../utils/address-utils';
import { stringToBrDateTime } from '../../../utils/app.utils';
import { StyledCard } from '../../../components/page-card';
import { StyledUserInfoContainer } from './view-styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';

export default () => {
    // Id da rota
    const { id } = useParams();

    const userService = UserService.getInstance();

    const [userData, setUserData] = useState({});
    const [initialForm, setInitialForm] = useState<any>({
        id: '',
        name: '',
        email: '',
        cpf_cnpj: '',
        phone: '',
        cellphone: '',
        created: '',
        updated: '',
        state: '',
        zip_code: '',
        city: '',
        street: '',
        number: '',
        start_watts: '',
        end_watts: '',
        order_status_id: ''
    });

    const onChange = (field: string) => (evt: any) => {
        setUserData({
            ...userData,
            [field]: evt.target.value
        })
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        let status = userService.updateUser(userData);

        if(status) setInitialForm(userData);
    }

    const getUser = useCallback(
        async (userId: string) => {
            const user = await userService.getUserData(userId);
            setInitialForm({
                id: userId,
                name: user.name,
                email: user.email,
                cpf_cnpj: user.cpf_cnpj,
                phone: user.phone,
                cellphone: user.cellphone,
                created: user.created,
                updated: user.updated,
                state: user.state,
                zip_code: user.zip_code,
                city: user.city,
                street: user.street,
                number: user.number,
                start_watts: user.start_watts,
                end_watts: user.end_watts,
                order_status_id: user.order_status_id
            });
        }, [userService]);

    useEffect(() => {
        if (id) getUser(id);
    }, []);

    useEffect(() => {
        setUserData(initialForm)
    }, [initialForm]);

    return (
        <>
            <StyledCard className="w-100 text-secondary mb-3 row">
                <header className="col-12">
                    <h2>Informações do Cliente</h2>
                    <hr />
                </header>
                <StyledUserInfoContainer className="col-12">
                    <form onSubmit={(e) => onSubmit(e)} >
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="name">Nome:</label>
                                    <input type="text" onChange={onChange("name")} name="name" id="name" defaultValue={initialForm.name} className="form-control" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="text" onChange={onChange("email")} name="email" id="email" defaultValue={initialForm.email} className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="cpf_cnpj">CPF/CNPJ:</label>
                                    <input type="text" name="cpf_cnpj" onChange={onChange("cpf_cnpj")} id="cpf_cnpj" defaultValue={initialForm.cpf_cnpj} className="form-control" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="phone">Celular:</label>
                                    <input type="text" onChange={onChange("phone")} name="phone" id="phone" defaultValue={initialForm.phone} className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="cellphone">Telefone:</label>
                                    <input type="text" onChange={onChange("cellphone")} name="cellphone" id="cellphone" defaultValue={initialForm.cellphone} className="form-control" />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-3">
                                <div className="form-group">
                                    <label htmlFor="zip_code">CEP:</label>
                                    <input type="text" onChange={onChange("zip_code")} name="zip_code" maxLength={10} id="zip_code" defaultValue={initialForm.zip_code} className="form-control" />
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="form-group">
                                    <label htmlFor="state">Estado:</label>
                                    <select className="form-control" onChange={onChange("state")} name="state" id="state">
                                        <option value="" hidden={true}>Escolha uma opção</option>
                                        {brazilStates.map(({ value, label }, index: number) =>
                                            <option key={index} value={value} selected={value === initialForm.state}>{label}</option>
                                        )}
                                    </select>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-group">
                                    <label htmlFor="city">Cidade:</label>
                                    <input type="text" onChange={onChange("city")} name="city" id="city" maxLength={50} defaultValue={initialForm.city} className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="street">Endereço:</label>
                                    <input type="text" onChange={onChange("street")} name="street" id="street" maxLength={100} defaultValue={initialForm.street} className="form-control" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="form-group">
                                    <label htmlFor="number">Número:</label>
                                    <input type="text" onChange={onChange("number")} name="number" id="number" maxLength={11} defaultValue={initialForm.number} className="form-control" />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-3">
                                <div className="form-group">
                                    <label htmlFor="start_watts">Potência Mínima (kW):</label>
                                    <input type="text" onChange={onChange("start_watts")} name="start_watts" id="start_watts" defaultValue={initialForm.start_watts} className="form-control" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="form-group">
                                    <label htmlFor="end_watts">Potência Mínima (kW):</label>
                                    <input type="text" onChange={onChange("end_watts")} name="end_watts" id="end_watts" defaultValue={initialForm.end_watts} className="form-control" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="form-group">
                                    <label htmlFor="order_status_id">Status da Ordem:</label>
                                    <select className="form-control" onChange={onChange("order_status_id")} name="order_status_id" id="order_status_id">
                                        <option selected={initialForm.order_status_id === 1} value="1">Indefinido</option>
                                        <option selected={initialForm.order_status_id === 2} value="2">Cadastro</option>
                                        <option selected={initialForm.order_status_id === 3} value="3">Em análise</option>
                                        <option selected={initialForm.order_status_id === 4} value="4">A transferir</option>
                                        <option selected={initialForm.order_status_id === 5} value="5">Transferido</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 text-left">
                                <small>Data de Cadastro: {stringToBrDateTime(initialForm.created, true)}</small><br/>
                                <small>Data de Atualização: {stringToBrDateTime(initialForm.updated, true)}</small>
                            </div>
                            <div className="col-6 text-right">  
                                <button type="submit" className="btn btn-info">Salvar <FontAwesomeIcon icon={faCheck} /></button>
                            </div>
                        </div>
                    </form>

                </StyledUserInfoContainer>
            </StyledCard>
        </>
    )
}