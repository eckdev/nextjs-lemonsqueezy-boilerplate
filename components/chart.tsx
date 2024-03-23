import { SparkAreaChart } from '@tremor/react';
import React from 'react'

type Props = {}
const chartdata = [
    {
      month: 'Jan 21',
      Performance: 4000,
    },
    {
      month: 'Feb 21',
      Performance: 3000,
    },
    {
      month: 'Mar 21',
      Performance: 2000,
    },
    {
      month: 'Apr 21',
      Performance: 2780,
    },
    {
      month: 'May 21',
      Performance: 1890,
    },
    {
      month: 'Jun 21',
      Performance: 2390,
    },
    {
      month: 'Jul 21',
      Performance: 3490,
    },
  ];
  

export const Chart = (props: Props) => {
  return (
    <div className="flex justify-center">
      <SparkAreaChart
        data={chartdata}
        categories={['Performance']}
        index={'month'}
        colors={['#ff0000']}
        className="h-10 w-40"
      />
    </div>

  )
}