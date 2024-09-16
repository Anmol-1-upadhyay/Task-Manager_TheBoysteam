import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Custom tick component to apply text transformations
const CustomTick = ({ x, y, payload }) => (
  <text x={x} y={y} dy={16} textAnchor='middle' fill='#fff' style={{ textTransform: 'capitalize' }}>
    {payload.value}
  </text>
);

export const Chart = ({ data }) => {
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray='3 3' stroke='#333' />
        <XAxis 
          dataKey='name' 
          tick={<CustomTick />} // Use custom tick component for XAxis
          axisLine={{ stroke: '#fff' }} // Optional: Set the color of the axis line
        />
        <YAxis 
          tick={<CustomTick />} // Use custom tick component for YAxis
          axisLine={{ stroke: '#fff' }} // Optional: Set the color of the axis line
        />
        <Tooltip 
          contentStyle={{ backgroundColor: '#333', color: '#fff' }} // Customize tooltip background and text color
        />
        <Legend 
          wrapperStyle={{ color: '#fff', textTransform: 'capitalize' }} // Customize legend text color and capitalization
        />
        <Bar 
          dataKey='total'
          fill='#1d4ed8' // Default color for bars
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
