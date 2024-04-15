import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { DashboardHeader } from '@/components/ui/header';
import { DashboardShell } from '@/components/ui/shell';
import { Session, getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'

type Props = {}

const Settings = async (props: Props) => {
    const session = await getServerSession(authOptions) as Session;
    if (!session) {
      redirect("/login");
    }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
      />
      <div className="grid gap-10">
        <span>Settings.</span>
      </div>
    </DashboardShell>
  )
}

export default Settings