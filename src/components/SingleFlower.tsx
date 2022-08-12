
type Flower = {
    id: number
    price: number
    instructions: string
    photo: string
    name: string
}
type Props = {
    flower: Flower
}

export function SingleFlower({ flower }: Props) {
    return (
        <li className='flower'>
            <h2>{flower.name}</h2>
            <img
                src={flower.photo}
                width={200}
            />
            < div className='instructions'>
                <p>{flower.instructions}</p>
                <span>{flower.price}</span>

            </div>
        </li>
    )
}