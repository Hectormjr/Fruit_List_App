import { Button, Card, Divider } from '@mui/material';
import './styles.css'

export default function FruitCard({ fruitData, onClick, onButtonClick, hidden }) {
    return (
        <Card
            sx={{ position: 'relative'}}
            id='card'
            className='itemListContainer'
            onClick={onClick}
        >
            <div id='card-title' className='cardTitle'>
                <h2 style={{ margin: '0px' }}>
                    {fruitData?.name}
                </h2>
            </div>

            <Divider
                variant='fullWidth'
                sx={{ color: 'black', width: '100%', marginBottom: '5px' }} />

            <div className='cardContent' id='fruit-infos' >
                <img
                    id='fruit-image'
                    className='image'
                    src={fruitData?.photo}
                    alt='imagem da fruta'
                />

                <ul id='list-infos' className='list'>
                    <li>
                        Calorias: {fruitData?.calories}
                    </li>
                    <li>
                        Carboidratos: {fruitData?.carbohydrates}
                    </li>
                    <li>
                        Gordura: {fruitData?.blubber}
                    </li>
                    <li>
                        Fibras: {fruitData?.fiber}
                    </li>
                    <li>
                        Proteina: {fruitData?.protein}
                    </li>
                    <li className='test'>
                        Porção: {fruitData?.portion}
                    </li>
                </ul>
            </div>
            {!hidden &&
                <Button
                    variant='outlined'
                    size="small"
                    onClick={onButtonClick}>
                    Voltar
                </Button>}
        </Card>
    )
}



