import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Session, getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'

type Props = {}

const Billing = async (props: Props) => {
    const session = await getServerSession(authOptions) as Session;
    if (!session) {
      redirect("/login");
    }
  return (
    <div>Billing</div>
  )
}

export default Billing