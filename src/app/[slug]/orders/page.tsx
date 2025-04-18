import { db } from '@/lib/prisma'

import { isValidCpf, removeCpfPunctuation } from '../menu/helpers/cpf'
import CpfForm from './components/cpf-form'
import OrderList from './components/order-list'

interface OdersPageProps {
  searchParams: Promise<{ cpf: string }>
}

const OdersPage = async ({ searchParams }: OdersPageProps) => {
  const { cpf } = await searchParams
  if (!cpf) {
    return <CpfForm />
  }
  if (!isValidCpf(cpf)) {
    return <CpfForm />
  }
  const orders = await db.order.findMany({
    where: {
      costumerCpf: removeCpfPunctuation(cpf),
    },
    include: {
      restaurant: {
        select: {
          name: true,
          avatarImageUrl: true,
        },
      },
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  })
  return <OrderList orders={orders} />
}

export default OdersPage
