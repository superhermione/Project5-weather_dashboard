const TableRow = ({ rowContent }) => {
  return (
    <tr>
      {rowContent.map((item, index) => {
        if (index === rowContent.length - 1) { // Check if it's the last item (weather.icon)
          return (
            <td key={index}>
              <img className="weather-icon" src={`https://www.weatherbit.io/static/img/icons/${item}.png`} alt="Weather Icon" />
            </td>
          );
        }
        return <td key={index}>{item}</td>;
      })}
    </tr>
  );
};

export default TableRow;
