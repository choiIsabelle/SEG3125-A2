import React from 'react';
import styled from 'styled-components';
import { NextButton } from '../components/NextButton';
import { BookingType } from '../components/BookingType';
import { BookingTime } from '../components/BookingTime';
import AppointmentForm from '../components/AppointmentForm';
import ConfirmationMessage from '../components/ConfirmationMessage';


const BookingPortalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 1rem;
    margin-top: 2rem;
    `
const BookingStepsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    `

export const BookingPortal = () => {
    const [currentStep, setCurrentStep] = React.useState(1);

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return <BookingType/>
            case 2:
                return <BookingTime/>
            case 3:
                return <AppointmentForm/>
            case 4:
                return <ConfirmationMessage/>;
            default:
                return <div>Unknown step</div>;
        }
    };

    return (
        <BookingPortalContainer>
            <BookingStepsContainer>
                {renderStepContent()}
                { (currentStep != 3 && (currentStep < 4)) && <NextButton content={"Next ➤"} handleOnClick={() => setCurrentStep(currentStep + 1)} />}
                { (currentStep == 3 ) && <NextButton content={"Submit Booking ➤"} handleOnClick={() => setCurrentStep(currentStep + 1)} />}
            </BookingStepsContainer>

        </BookingPortalContainer>
    );
};