'use client'
import { Prisma } from '@prisma/client'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'
import { useContext, useState } from 'react'

import { Button } from '@/components/ui/button'
import { FormatCurrency } from '@/helpers/format-currency'

import { CartContext } from '../../contexts/cart'
import CartSheet from './cart-sheet'

interface ProductDetailsProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true
          avatarImageUrl: true
        }
      }
    }
  }>
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { toggleCart } = useContext(CartContext)
  const {} = useContext(CartContext)
  const [quantity, setQuantity] = useState<number>(1)

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => {
      if (prev == 1) {
        return 1
      }
      return prev - 1
    })
  }

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const handleAddToCart = () => {
    toggleCart()
  }

  return (
    <>
      <div className='relative z-50 rounded-t-3xl mt-[-1.5rem] p-5 flex flex-auto flex-col'>
        <div className='flex-auto'>
          {/* Restaurante */}
          <div className='flex items-center gap-1.5'>
            <Image
              src={product.restaurant.avatarImageUrl}
              alt={product.restaurant.name}
              width={16}
              height={16}
              className='rounded-full'
            />
            <p className=' space-x-1 text-xs text-muted-foreground'>
              {product.restaurant.name}
            </p>
          </div>

          {/* Nome do produto */}
          <h2 className='mt-1 text-xl font-semibold'>{product.name}</h2>
          {/* Preço e quantidade */}
          <div className='flex items-center justify-between'>
            <h3 className='text-xl font-semibold'>
              {FormatCurrency(product.price)}
            </h3>
            <div className='flex items-center gap-3 text-center'>
              <Button
                variant='outline'
                className='w-8 h-8 rounded-xl'
                onClick={handleDecreaseQuantity}
              >
                <ChevronLeftIcon />
              </Button>
              <p className='w-4'>{quantity}</p>
              <Button
                variant='destructive'
                className='w-8 h-8 rounded-xl'
                onClick={handleIncreaseQuantity}
              >
                <ChevronRightIcon />
              </Button>
            </div>
          </div>

          {/* Sobre */}
          <div className='mt-6 space-y-3'>
            <h4 className='font-semibold'>Sobre</h4>
            <p className='text-sm text-muted-foreground'>
              {product.description}
            </p>
          </div>
        </div>
        <Button className='rounded-full w-full mt-6' onClick={handleAddToCart}>
          Adicionar à sacola
        </Button>
      </div>
      <CartSheet />
    </>
  )
}

export default ProductDetails
