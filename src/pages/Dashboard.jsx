import React from "react";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Column } from "@ant-design/plots";
import PlotPie from "../Components/PlotPie";


const Dashboard = () => {
  const data = [
    {
      type: "فروردین",
      بازدید: 38,
    },
    {
      type: "اردیبهشت",
      بازدید: 52,
    },
    {
      type: "خرداد",
      بازدید: 61,
    },
    {
      type: "تیر",
      بازدید: 145,
    },
    {
      type: "مرداد",
      بازدید: 48,
    },
    {
      type: "شهریور",
      بازدید: 38,
    },
    {
      type: "مهر",
      بازدید: 38,
    },
    {
      type: "آبان",
      بازدید: 38,
    },
    {
      type: "آذر",
      بازدید: 38,
    },
    {
      type: "دی",
      بازدید: 38,
    },
    {
      type: "بهمن",
      بازدید: 38,
    },
    {
      type: "اسفند",
      بازدید: 38,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "بازدید",
    color: ({ type }) => {
      return "#ffd333";
    },
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "ماه",
      },
      sales: {
        alias: "بازدید",
      },
    },
  };
  return (
    <div>
      <h3 className='mb-4 text-lg font-bold'> داشبورد </h3>
      <div className="flex ltr-text">
        <div className="flex-auto w-40">
          <Column {...config} />
        </div>
        <div className="flex-auto w-60">
          <PlotPie />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

