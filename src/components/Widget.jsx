import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";

const getTime = (time) => {
  let date = new Date(time);

  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
    return `${hours}:${minutes}`;
  }

  return `${hours}:${minutes}`;
};

const filterTime = (data) => {
  let hours = +data.time.split(":")[0];

  return hours >= 6 && hours <= 18;
};

const createChartData = ({ time, ...params }, title) => {
  let chartData = [];
  if (title === "Wind Speed") {
    params.windspeed_120m.map((param, i) =>
      chartData.push({ "Wind Speed": param, time: getTime(time[i]) })
    );
  } else if (title === "Relative Humidity") {
    params.relativehumidity_2m.map((param, i) =>
      chartData.push({ "Relative Humidity": param, time: getTime(time[i]) })
    );
  } else if (title === "Cloud Cover") {
    params.cloudcover_mid.map((param, i) =>
      chartData.push({ "Cloud Cover": param, time: getTime(time[i]) })
    );
  } else if (title === "Temperature") {
    console.log(params)
    params.temperature_2m.map((param, i) =>
      chartData.push({ Temperature: param, time: getTime(time[i]) })
    );
  }
  chartData = chartData
    .filter(filterTime)
    .sort((a, b) => +a.time.split(":")[0] - +b.time.split(":")[0]);

  return chartData;
};

function Widget({ data, title }) {
  console.log(data);
  return (
    <div>
      <Chart data={data} title={title} aspect={2} />
    </div>
  );
}

function Chart({ data, title, aspect }) {
  let chartData = createChartData(data, title);
  // console.log(chartData);
  return (
    <div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={830}
          height={250}
          data={chartData}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="time" stroke="gray" />
          <YAxis dataKey={title} stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={title}
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
