import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card, { cardClasses } from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { List, ListItem, ListItemText, Divider } from "@mui/material";
import React, { useState, useEffect } from "react";
import HeroMain from "./HeroMain";
import {
  listTimeZones,
  findTimeZone,
  getZonedTime,
  getUnixTime,
} from "timezone-support";
// America/Argentina/Buenos_Aires
// America/Los_Angeles
// Europe/Madrid

const Header = () => {
  const [time, setTime] = useState([]);
  const ArgentinaTZ = "America/Argentina/Buenos_Aires";
  const UsaLosAngeles = "America/Los_Angeles";
  const Madrid = "Europe/Madrid";
  const cards = [
    {
      name: "argentina",
      tz: ArgentinaTZ,
    },
    {
      name: "Los Angeles",
      tz: UsaLosAngeles,
    },
    {
      name: "madrid",
      tz: Madrid,
    },
  ];
  const tick = () => {
    // setTime(()=>[...time, {time: "holaaaaa"}])
    const timeZones = cards.map((element) => {
      const tz = findTimeZone(element.tz);
      const today = new Date();
      const transformedTime = getZonedTime(today, tz);
      return {
        country: element.name,
        time: `${transformedTime.hours}:${transformedTime.minutes}:${transformedTime.seconds}`,
      };
    });
    setTime(timeZones);
  };
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);
  //   console.log(time);
  console.log(time)
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            My time app
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <HeroMain />
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {time.map((timeField) => (
              <Grid item key={timeField.time} xs={12} sm={12} md={12}>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                >
                  <ListItem>
                    <ListItemText
                      primary={timeField.country}
                      secondary={timeField.time}
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </List>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
};
export default Header;
