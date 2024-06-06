import { formatCurrency } from "../helpers"
import { Product } from "../types"

type ProductDetailsProps = {
    product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {

    const isAvailability = product.availability

    return (
        <tr className=" border-b">
            <td className=" p-3 text-lg text-gray-800">
                {product.name}
            </td>
            <td className=" p-3 text-lg text-gray-800">
                {formatCurrency(product.price)}
            </td>
            <td className=" p-3 text-lg text-gray-800">
                {isAvailability ? 'Disponible' : 'No disponible'}
            </td>
            <td className=" p-3 text-lg text-gray-800">
                <div>
                    <button>Editar</button>
                </div>
            </td>
        </tr>
    )
}
