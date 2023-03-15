import { useNavigate } from "react-router-dom";
import Lottie from 'react-lottie';
import { useDispatch, useSelector } from "react-redux";

import animationLandingPage from '../assests/animations/animationLandingPage.json'
import './styles.css'
import { useEffect, useState } from "react";
import FruitsService from "../services/fruits.service";
import { loadFruitsAsync } from "../redux/reducers/fruits/fruits.thunks";



export default function LandingPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { fruits } = useSelector((state) => state.fruits)


    useEffect(() => {
        handleLoanding()
    }, [])

    async function handleLoanding() {
        dispatch(loadFruitsAsync())
        await FruitsService.delay(3).then(() => navigate('/home'))
    }
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationLandingPage,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div id="background-fruit-detail" className="background" style={{ alignContent: 'center' }}>
            <div className="landingContainer">
                <Lottie options={defaultOptions}
                    height={400}
                    width={400}
                    isStopped={false}
                    isPaused={false}
                    isClickToPauseDisabled={true} />
                    <h2 className="landingText">Estamos colhendo suas frutas !</h2>
            </div>

        </div>
    )
}