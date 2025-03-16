import { ChevronLeftIcon, ChevronRightIcon, Trash2Icon } from 'lucide-react'
import Image from 'next/image'
import { useContext } from 'react'

import { Button } from '@/components/ui/button'
import { FormatCurrency } from '@/helpers/format-currency'

import { CartContext, CartProduct } from '../contexts/cart'

interface CartItemProps {
  product: CartProduct
}

const CartProductItem = ({ product }: CartItemProps) => {
  const { decreaseProductQuantity, increaseProductQuantity, removeProduct } =
    useContext(CartContext)
  return (
    <div className='flex items-center justify-between'>
      {/* Esquerda */}
      <div className='flex items-center gap-3'>
        <div className='relative h-20 w-20 bg-gray-100 rounded-xl'>
          <Image src={product.imageUrl} alt={product.name} fill />
        </div>
        <div className='space-y-1'>
          <p className='text-xs max-w[90%] truncate text-ellipsis'>
            {product.name}
          </p>
          <p className='text-sm font-semibold'>
            {FormatCurrency(product.price)}
          </p>
          {/* Quantidade */}
          <div className='flex items-center gap-1 text-center'>
            <Button
              className='w-7 h-7 rounded-lg'
              variant='outline'
              onClick={() => decreaseProductQuantity(product.id)}
            >
              <ChevronLeftIcon size={16} />
            </Button>
            <p className='w-7 text-xs'>{product.quantity}</p>
            <Button
              className='w-7 h-7 rounded-lg '
              variant='destructive'
              onClick={() => increaseProductQuantity(product.id)}
            >
              <ChevronRightIcon size={16} />
            </Button>
          </div>
        </div>
      </div>
      {/* Deletar */}
      <Button
        className='h-7 w-7 rounded-lg'
        variant='outline'
        onClick={() => removeProduct(product.id)}
      >
        <Trash2Icon />
      </Button>
    </div>
  )
}

export default CartProductItem
