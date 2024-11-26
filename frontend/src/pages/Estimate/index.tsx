import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import { ThreeDots } from "react-loader-spinner";
import {
    ButtonGroup,
    DriverOptionButton,
    DriverOptionName,
    DriverOptionsCardContainer,
    DriverOptionsCardItem,
    DriverOptionsTitle,
    DriverOptionValue,
    DriversOptionsContainer,
    DriversOptionsTitleContainer,
    FormInputArea,
    FormInputLabelRequired,
    HeaderTitle,
    MainContainer,
    MainContent,
    MainHeader,
    MapContentContainer,
    MapMainContainer,
    MapMainContent,
    MapMainTitleContainer,
    MapTitle,
    StyledFormArea,
    SubmitButton,
} from "./estimate.styles";

import { FormInput } from "../../components/FormLib";
import { estimateRide } from "../../services/rideServices";
import { DriverOption, RouteData } from "../../Types/indes";
import GenerateMap from "../../components/GenerateMap";

const Estimate = () => {

    const [routeData, setRouteData] = useState<RouteData | null>(null);

    const validationSchema = Yup.object({
        customer_id: Yup.string().required('Id de usuário é obrigatório.'),
        origin: Yup.string().required('Endereço de origem é obirgatório.'),
        destination: Yup.string().required('Endereço de destino é obrigatório'),
    });

    return (
        <MainContainer>
            <MainHeader>
                <HeaderTitle>Shopper Taxi</HeaderTitle>
            </MainHeader>
            <MainContent>
                <StyledFormArea>
                    <Formik
                        initialValues={{
                            customer_id: '',
                            origin: '',
                            destination: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting, setFieldError }) => {
                            estimateRide(values, setRouteData, setSubmitting, setFieldError);
                        }}
                    >
                        {
                            ({ isSubmitting }) => (
                                <Form>
                                    <FormInputArea>
                                        <FormInputLabelRequired>ID de Usuário</FormInputLabelRequired>
                                        <FormInput
                                            name="customer_id"
                                            type="text"
                                            placeholder="ID do usuário"
                                        />
                                    </FormInputArea>
                                    <FormInputArea>
                                        <FormInputLabelRequired>Origem</FormInputLabelRequired>
                                        <FormInput
                                            name="origin"
                                            type="text"
                                            placeholder="Endereço de Origem"
                                        />
                                    </FormInputArea>
                                    <FormInputArea>
                                        <FormInputLabelRequired>Destino</FormInputLabelRequired>
                                        <FormInput
                                            name="destination"
                                            type="text"
                                            placeholder="Endereço de Destino"
                                        />
                                    </FormInputArea>
                                    <ButtonGroup>
                                        {
                                            !isSubmitting ? (
                                                <SubmitButton type='submit'>Buscar Viagem</SubmitButton>
                                            ) : (
                                                <ThreeDots color="#44E44E" width={100} />
                                            )
                                        }
                                    </ButtonGroup>
                                </Form>
                            )
                        }
                    </Formik>
                </StyledFormArea>
                {
                    routeData && (
                        <MapMainContainer>
                            <MapMainContent>
                                <MapContentContainer>
                                    <MapMainTitleContainer>
                                        <MapTitle>Mapa do Trajeto</MapTitle>
                                    </MapMainTitleContainer>
                                    <GenerateMap routeData={routeData} />
                                </MapContentContainer>
                                <DriversOptionsContainer>
                                    <DriversOptionsTitleContainer>
                                        <DriverOptionsTitle>Opções de Motorista</DriverOptionsTitle>
                                    </DriversOptionsTitleContainer>
                                    <DriverOptionsCardContainer>
                                        {
                                            routeData?.options.map((driver: DriverOption) => (
                                                <DriverOptionsCardItem key={driver.id}>
                                                    <DriverOptionName>{driver.name}</DriverOptionName>
                                                    <DriverOptionValue>{driver.description}</DriverOptionValue>
                                                    <DriverOptionValue>Veículo: {driver.vehicle}</DriverOptionValue>
                                                    <DriverOptionValue>Avaliação: {driver.review.rating}</DriverOptionValue>
                                                    <DriverOptionValue>Comentário: {driver.review.comment}</DriverOptionValue>
                                                    <DriverOptionValue>Valor: R$ {driver.value}</DriverOptionValue>
                                                    <DriverOptionButton>Escolher</DriverOptionButton>
                                                </DriverOptionsCardItem>
                                            ))
                                        }
                                    </DriverOptionsCardContainer>
                                </DriversOptionsContainer>
                            </MapMainContent>
                        </MapMainContainer>
                    )
                }
            </MainContent>
        </MainContainer >
    );
}

export default Estimate;