import React from 'react'
import { Pie } from '@ant-design/plots';

const data = [
  { type: 'تولید محتوا', value: 27 },
  { type: 'فضاسازی محیطی', value: 25 },
  { type: 'فعالیت‌های ابتکاری شعب', value: 18 },
  { type: 'برگزاری اردو', value: 15 },
  { type: 'برگزاری دوره‌های آموزشی', value: 10 },
  { type: 'برگزاری مسابقات', value: 5 },
];

const customLabel = (_, datum) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
    <div style={{ width: 8, height: 8, background: 'rgba(0,0,0,0.4)', borderRadius: '50%' }} />
    <div>
      {datum.type} : <b>{datum.value}</b>
    </div>
  </div>
);

const PlotPie = () => {
    const config = {
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        label: {
          text: 'type',
          position: 'outside',
          textAlign: 'center',
          transform: [
            {
              type: 'contrastReverse',
            },
          ],
          render: customLabel,
          position: 'outside',
        },
        legend: false
      };
  return (
    <Pie {...config} />
  )
}

export default PlotPie