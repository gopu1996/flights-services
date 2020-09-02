import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "20px",
    marginTop: "60px",
    display: "flex",
    flexWrap: "wrap",
    position: "fixed",
    overflow: "scroll",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 345,
    height: 350,
  },
}));

const SeatMap = (props) => {
  const classes = useStyles();
  const checkinComp = props.gridForCheckin;
  return (
    <div className="table-responsive">
      <section className={classes.root}>
        <table className="table">
          <GridList cellHeight={50} className={classes.gridList} cols={5}>
            {props.seatList.map((seat) => (
              <GridListTile key={seat.id} cols={seat.cols || 1}>
                <Button
                  className="btn btn-link"
                  disabled={
                    seat.paxId > 0 ? true : false || !props.isSeatMapEnabled
                  }
                >
                  <i
                    onClick={() => {
                      props.seatHandler(seat);
                    }}
                    className="fas fa-couch"
                    style={
                      seat.mealId > 0 && !checkinComp
                        ? { color: "brown", fontSize: "30px" }
                        : seat.wheelChairId > 0 && checkinComp
                        ? { color: "blue", fontSize: "30px" }
                        : seat.infantId > 0 && checkinComp
                        ? { color: "orange", fontSize: "30px" }
                        : seat.passengerId > 0 && checkinComp
                        ? { color: "red", fontSize: "30px" }
                        : { color: "#B3B6B7", fontSize: "30px" }
                    }
                  ></i>
                  <b style={{ color: "#5B2C6F", fontSize: "12px" }}>
                    {seat.seatNo}
                  </b>
                </Button>
              </GridListTile>
            ))}
          </GridList>
        </table>
      </section>
    </div>
  );
};
export default SeatMap;
