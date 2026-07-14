import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useColorScheme } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import Box from "@mui/material/Box";

function ModeSelect() {
  // const [age, setAge] = React.useState("");
  const { mode, setMode } = useColorScheme();

  const handleChange = (event) => {
    const seletedMode = event.target.value;
    setMode(seletedMode);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LightModeIcon fontSize="small" /> Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <DarkModeOutlinedIcon fontSize="small" /> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <SettingsBrightnessIcon fontSize="small" /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  // const prefersLightMode = useMediaQuery("(prefers-color-scheme: light)");

  // console.log("prefersDarkMode", prefersDarkMode);
  // console.log("prefersLightMode", prefersLightMode);

  return (
    <Button
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "dark" : "light"}
    </Button>
  );
}

function App() {
  return (
    <>
      <ModeSelect />
      <hr />
      <ModeToggle />
      <hr />
      <div>ngueyndacson</div>
      <Typography variant="body2" color="text.secondary">
        Test
      </Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <AccessAlarmIcon></AccessAlarmIcon>
      <ThreeDRotation></ThreeDRotation>
    </>
  );
}

export default App;
