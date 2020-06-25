//@ts-check
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useState } from "react";
import { ResponsiveCalendar } from "@nivo/calendar";
import jsonfile from "jsonfile";

const Stats = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("mounted");
    jsonfile.readFile("./data/calendarData.json", (err, data) => {
      if (err) console.log("error:", err);
      else setData(data);
    });
    return () => {
      console.log("unmounting");
    };
  }, []);
  if (data.length)
    return (
      <div style={{ height: 500, color: "black" }}>
        <ResponsiveCalendar
          data={data}
          from="2018-1-1"
          to="2018-12-25"
          emptyColor="#eee"
          colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
          margin={{ top: 40, right: 40, bottom: 50, left: 40 }}
          yearSpacing={40}
          monthBorderColor="#ffffff"
          dayBorderWidth={2}
          dayBorderColor="#ffffff"
          legends={[
            {
              anchor: "bottom-right",
              direction: "row",
              translateY: 36,
              itemCount: 4,
              itemWidth: 42,
              itemHeight: 36,
              itemsSpacing: 14,
              itemDirection: "right-to-left",
            },
          ]}
        />
      </div>
    );
  return <main>This is stats</main>;
};

const mapStateToProps = (state) => ({
  // state
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  // props
});

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
