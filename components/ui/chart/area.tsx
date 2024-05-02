"use client"
import { AreaChart } from '@tremor/react';

const chartdata = [
  {
    date: 'Jan 22',
    'Page views': 2890,
    'Unique visitors': 2338,
  },
  {
    date: 'Feb 22',
    'Page views': 2756,
    'Unique visitors': 2103,
  },
  {
    date: 'Mar 22',
    'Page views': 3322,
    'Unique visitors': 2194,
  },
  {
    date: 'Apr 22',
    'Page views': 3470,
    'Unique visitors': 2108,
  },
  {
    date: 'May 22',
    'Page views': 3475,
    'Unique visitors': 1812,
  },
  {
    date: 'Jun 22',
    'Page views': 3129,
    'Unique visitors': 1726,
  },
  {
    date: 'Jul 22',
    'Page views': 3490,
    'Unique visitors': 1982,
  },
  {
    date: 'Aug 22',
    'Page views': 2903,
    'Unique visitors': 2012,
  },
  {
    date: 'Sep 22',
    'Page views': 2643,
    'Unique visitors': 2342,
  },
  {
    date: 'Oct 22',
    'Page views': 2837,
    'Unique visitors': 2473,
  },
  {
    date: 'Nov 22',
    'Page views': 2954,
    'Unique visitors': 3848,
  },
  {
    date: 'Dec 22',
    'Page views': 3239,
    'Unique visitors': 3736,
  },
];

const dataFormatter = (number:number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`;

export function AreaChartHero() {
  return (
    <AreaChart
      className="h-80"
      data={chartdata}
      index="date"
      categories={['Page views', 'Unique visitors']}
      colors={['#2e9fff', '#6c6cf5']}
      showTooltip={false}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
    />
  );
}