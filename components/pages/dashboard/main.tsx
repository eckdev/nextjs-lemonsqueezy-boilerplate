import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AreaChartHero } from '@/components/ui/chart/area'
import React from 'react'

type Props = {}

const Main = (props: Props) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <AreaChartHero />
      </CardContent>
    </Card>
  )
}

export default Main