"use client"
import Image from "next/image";
import styles from "./page.module.css";

// import react-google-chart
import { Chart } from "react-google-charts";

// define data for chart
export const data = [
  ["Element", "Density", { role: "style" }],
  ["Copper", 8.94, "#b87333"], // RGB value
  ["Silver", 10.49, "silver"], // English color name
  ["Gold", 19.3, "gold"],
  ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
];

export default function Home() {
  return (
        <div>
            <center><h1>Example of Column Chart</h1></center>
            <Chart chartType="ColumnChart" width="100%" height="100%" data={data} />
        </div>
  );
}
