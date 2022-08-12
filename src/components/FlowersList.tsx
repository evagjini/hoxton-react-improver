import { SingleFlower } from "./SingleFlower";
type Flower = {
    id: number
    price: number
    instructions: string
    photo: string
    name: string
}



type Props = {
    flowers: Flower[]
}

export function FlowersList({ flowers }: Props) {
    return (
        <main>
            <div className='flower-container'>
                <ul>
                    {flowers.map((flower) => (
                        < SingleFlower key={flower.id} flower={flower} />

                    ))}

                </ul>

            </div>
        </main>


    )
}