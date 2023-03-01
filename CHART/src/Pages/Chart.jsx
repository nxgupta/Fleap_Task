import React, { useEffect, useState } from "react";
import data from "../db/data.json"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";
export default function Chart() {
    const [chartData, setChartData] = useState([]);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        // Create a timer that updates the chart data and startIndex after every 1 second
        const timer = setInterval(() => {
            // Get the current time
            const currentTime = parseFloat(startIndex);

            // Filter the data to get the data of last 5 seconds
            const newData = data.filter((d) => d.time >= currentTime - 5 && d.time <= currentTime);

            // Update the chart data and startIndex
            setChartData(newData);
            setStartIndex(startIndex + 1);
        }, 1000);

        // Clear the timer on component unmount
        return () => clearInterval(timer);
    }, [startIndex]);

    const formatXAxis = (tickItem) => {
        return tickItem.toFixed(2);
    }

    return (
        <div className="container">
            <LineChart
                width={400}
                height={400}
                data={chartData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 20
                }}
            >
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey="time" tickFormatter={formatXAxis} />
                <YAxis dataKey="ECG" type="number" label={{ value: 'Time', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="ECG" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    );
}
