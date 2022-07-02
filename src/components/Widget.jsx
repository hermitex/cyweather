import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const getTime = (time) =>{
  let date = new Date(time)
  let hours =  date.getHours();
  let minutes = date.getMinutes();  
  return `${hours}:${minutes}`
}

const createChartData = ({ time, ...params }, title) => {
  const chartData = [];
  if (title === "Wind Speed") {
    params.windspeed_120m.map((param, i) =>
      chartData.push({ param, time: getTime(time[i]) })
    );
  } else if (title === "Relative Humidity") {
    params.relativehumidity_2m.map((param, i) =>
      chartData.push({ param, time: getTime(time[i]) })
    );
  } else if (title === "Cloud Cover") {
    params.cloudcover_mid.map((param, i) =>
      chartData.push({ param, time: getTime(time[i]) })
    );
  }
  // else if(title==="Temperature"){
  //   return params.map((param, i)=>chartData.push({param, time: time[i]}))

  // }
  return chartData;
};

function Widget({ data, title }) {
  return (
    <div>
      <Chart data={data} title={title} aspect={2} />
    </div>
  );
}

function Chart({ data, title, aspect }) {
  let chartData = createChartData(data, title);
  console.log(chartData);
  return (
    <div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={chartData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="time" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="param"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Widget;
