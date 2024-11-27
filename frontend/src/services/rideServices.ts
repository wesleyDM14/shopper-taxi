import axios from "axios";
import { EstimateRideFormValues } from "../Types/indes";

export const estimateRide = async (values: EstimateRideFormValues, setRouteData: (routeData: any) => void, setSubmitting: (isSubmitting: boolean) => void, setFieldError: (field: string, message: string) => void, setCalculateRoute: (value: boolean) => void) => {
    await axios.post('http://localhost:3333/ride/estimate', values, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        setRouteData(response.data);
        setCalculateRoute(false);
    }).catch((error) => {

    }).finally(() => {
        setSubmitting(false);
    });
}

export const confirmRide = () => {

}

export const getRidesByCustomerId = () => {

}