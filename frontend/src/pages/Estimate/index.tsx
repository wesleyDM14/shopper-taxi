import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import { ThreeDots } from "react-loader-spinner";
import {
    ApiErrorContainer,
    ApiErrorIconContainer,
    ApiErrorTitle,
    ButtonGroup,
    DriverOptionName,
    DriverOptionsCardContainer,
    DriverOptionsCardItem,
    DriverOptionsTitle,
    DriverOptionValue,
    DriversOptionsContainer,
    DriversOptionsTitleContainer,
    FormInputArea,
    FormInputLabelRequired,
    MainContainer,
    MainContent,
    MapContentContainer,
    MapMainContainer,
    MapMainContent,
    ResumeContainer,
    ResumeLabel,
    ResumeTextArea,
    ResumeValueArea,
    ResumeValueIcon,
    ResumeValueText,
    StyledFormArea,
    SubmitButton,
} from "./estimate.styles";
import { GiPathDistance } from 'react-icons/gi';
import { MdAccessTime, MdLocalTaxi } from 'react-icons/md';
import { FormInput } from "../../components/FormLib";
import { estimateRide } from "../../services/rideServices";
import { DriverOption, RouteData } from "../../Types/indes";
import GenerateMap from "../../components/GenerateMap";
import RankingStar from "../../components/RankingStar";

const Estimate = () => {

    const [routeData, setRouteData] = useState<RouteData | null>(null);
    const [calculateRoute, setCalculateRotue] = useState<boolean>(true);

    const validationSchema = Yup.object({
        customer_id: Yup.string().required('Id de usuário é obrigatório.'),
        origin: Yup.string().required('Endereço de origem é obirgatório.'),
        destination: Yup.string().required('Endereço de destino é obrigatório'),
    });

    return (
        <MainContainer>
            <MainContent>
                <StyledFormArea>
                    {
                        calculateRoute && (
                            <Formik
                                initialValues={{
                                    customer_id: '',
                                    origin: '',
                                    destination: '',
                                }}
                                validationSchema={validationSchema}
                                onSubmit={(values, { setSubmitting, setFieldError }) => {
                                    estimateRide(values, setRouteData, setSubmitting, setFieldError, setCalculateRotue);
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
                        )
                    }
                    {
                        routeData && !calculateRoute && (
                            <>
                                <DriversOptionsTitleContainer>
                                    <DriverOptionsTitle>Dados da Rota</DriverOptionsTitle>
                                </DriversOptionsTitleContainer>
                                <ResumeContainer>
                                    <ResumeValueArea>
                                        <ResumeValueIcon>
                                            <GiPathDistance />
                                        </ResumeValueIcon>
                                        <ResumeTextArea>
                                            <ResumeLabel>Distância</ResumeLabel>
                                            <ResumeValueText>{routeData.distance > 1000 ? ((routeData.distance / 1000).toFixed(1)) : routeData.distance} {routeData.distance > 1000 ? '(KM)' : '(M)'}</ResumeValueText>
                                        </ResumeTextArea>
                                    </ResumeValueArea>
                                    <ResumeValueArea>
                                        <ResumeValueIcon>
                                            <MdAccessTime />
                                        </ResumeValueIcon>
                                        <ResumeTextArea>
                                            <ResumeLabel>Duração</ResumeLabel>
                                            <ResumeValueText>{routeData.duration}</ResumeValueText>
                                        </ResumeTextArea>
                                    </ResumeValueArea>
                                </ResumeContainer>
                                <DriversOptionsContainer>
                                    <DriversOptionsTitleContainer>
                                        <DriverOptionsTitle>Opções de Motorista</DriverOptionsTitle>
                                    </DriversOptionsTitleContainer>
                                    <DriverOptionsCardContainer>
                                        {
                                            routeData?.options.map((driver: DriverOption) => (
                                                <DriverOptionsCardItem key={driver.id}>
                                                    <DriverOptionName>{driver.name}</DriverOptionName>
                                                    <DriverOptionValue>Veículo: {driver.vehicle}</DriverOptionValue>
                                                    <DriverOptionValue><RankingStar rating={driver.review.rating} /></DriverOptionValue>
                                                    <DriverOptionValue>Comentário: {driver.review.comment}</DriverOptionValue>
                                                    <DriverOptionValue><strong style={{ fontSize: '18px' }}>R$ {driver.value}</strong></DriverOptionValue>
                                                </DriverOptionsCardItem>
                                            ))
                                        }
                                    </DriverOptionsCardContainer>
                                </DriversOptionsContainer>
                                <ButtonGroup>
                                    <SubmitButton type='button' onClick={() => setCalculateRotue(true)}>Recalcular</SubmitButton>
                                </ButtonGroup>
                            </>
                        )
                    }
                </StyledFormArea>
                {
                    routeData ? (
                        <MapMainContainer>
                            <MapMainContent>
                                <MapContentContainer>
                                    <GenerateMap routeData={routeData} />
                                </MapContentContainer>
                            </MapMainContent>
                        </MapMainContainer>
                    ) : (
                        <ApiErrorContainer className="container-responsive">
                            <ApiErrorIconContainer>
                                <MdLocalTaxi color="#000" size={100}/>
                            </ApiErrorIconContainer>
                            <ApiErrorTitle>Para Onde Vamos?</ApiErrorTitle>
                        </ApiErrorContainer>
                    )
                }
            </MainContent>
        </MainContainer >
    );
}

export default Estimate;