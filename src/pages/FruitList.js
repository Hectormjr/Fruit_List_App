import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';

import PageHeader from "../components/PageHeader";
import FruitCard from '../components/FruitCard';
import { loadFruitsAsync } from '../redux/reducers/fruits/fruits.thunks';

import './styles.css'
import FruitsService from '../services/fruits.service';



export default function FruitListPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { fruits } = useSelector((state) => state.fruits)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        delaySimulator()
    }, [])

    async function delaySimulator() {
        //simulando um segundo carregamento
        await FruitsService.delay(1.2)
        setLoading(false)
    }

    function OnClick(fruitData) {
        localStorage.setItem('fruit', JSON.stringify(fruitData))
        navigate('/detalhes')
    }

    return (
        <div id="background-fruit-list" className="background">
            <PageHeader title='Seja Bemvindo' subtitle='Esta é sua lista de frutas' />
            {loading ?
                <div className='loadingContainer'>
                    <BeatLoader size={20} color="#ffffff" />
                    <h4 className='loadingText' >Carregando...</h4>
                </div>
                :
                <div
                    id='list-card-container'
                    className='itemsRow'>
                    {fruits?.map(element => {
                        return (
                            <FruitCard
                                key={element.name}
                                id="card-fruit-list"
                                hidden={true}
                                fruitData={element}
                                onClick={() => OnClick(element)}
                            />
                        )
                    })
                    }
                </div>
            }


        </div>
    )
}