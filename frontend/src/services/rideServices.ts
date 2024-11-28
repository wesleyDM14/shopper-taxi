import axios from "axios";
import { DriverOption, EstimateRideFormValues, RouteData } from "../Types/indes";

export const estimateRide = async (values: EstimateRideFormValues, setRouteData: (routeData: any) => void, setSubmitting: (isSubmitting: boolean) => void, setFieldError: (field: string, message: string) => void, setCalculateRoute: (value: boolean) => void) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    console.log(apiUrl);
    await axios.post(`${apiUrl}/ride/estimate`, values, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        setRouteData(response.data);
        setCalculateRoute(false);
    }).catch((error) => {
        console.error(error);
        window.alert(error.response.data.error_description);
    }).finally(() => {
        setSubmitting(false);
    });
}

export const confirmRide = async (routeData: RouteData, selectedDriver: DriverOption, customer_id: string, origin: string, destination: string, navigate: (path: string) => void) => {
    const values = {
        customer_id: customer_id,
        origin: origin,
        destination: destination,
        distance: routeData.distance,
        duration: routeData.duration,
        driver: {
            id: selectedDriver.id,
            name: selectedDriver.name,
        },
        value: selectedDriver.value,
    };

    const apiUrl = process.env.REACT_APP_API_URL;

    await axios.patch(`${apiUrl}/ride/confirm`, values, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        console.log(response);
        navigate(`/history?customer_id=${customer_id}`);
    }).catch((error) => {
        console.log(error);
        window.alert(error.data.error_description);
    });
}
