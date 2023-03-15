import { useEffect, useState } from "react";

import FruitCard from '../components/FruitCard';
import { useNavigate } from "react-router-dom";

export default function FruitDetailPage() {
    const [fruitData, setFruitData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        var localStorageData = localStorage.getItem('fruit')
        setFruitData(JSON.parse(localStorageData));
    }, []);

    return (
        <div id="background-fruit-detail" className="background" style={{alignContent: 'center'}}>
            <FruitCard
                id="content-fruit-detail"
                fruitData={fruitData}
                hidden = {false}
                onButtonClick={() => navigate('/home')}
            />
        </div>
    )
}