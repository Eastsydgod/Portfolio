import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TabStyle } from "./style";

//Logos
const javascript =
  "https://munachiso.vercel.app/static/media/javascript.f37d2a0de54889e9c3ab52a8f1b5c612.svg";
const htm =
  "https://munachiso.vercel.app/static/media/html5-without-wordmark-color.ed7faa621a87d5ccd4b73edbae4facb7.svg";
const css =
  "https://munachiso.vercel.app/static/media/css-3-seeklogo.com.4e47c3122b8d2476a02f97dcfcb28640.svg";

const node =
  "https://munachiso.vercel.app/static/media/nodejs-seeklogo.com.5a3a9ca294db0539884810b6e6eafedd.svg";
const github =
  "https://munachiso.vercel.app/static/media/github-seeklogo.com.04ed74f38b41cdcbf14f80ae8cd0aa2b.svg";
const boot =
  "https://munachiso.vercel.app/static/media/bootstrap-seeklogo.com.527d0fc09fb3280153c26f0046a517a9.svg";
const material =
  "https://munachiso.vercel.app/static/media/material-ui-seeklogo.com.741a52f5f54e0b6073e48671571738ea.svg";
const mongo =
  "data:image/png;base64,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";
const redux =
  "https://munachiso.vercel.app/static/media/redux-seeklogo.com.a95675408ae17c456965e2f09376c31a.svg";
const router =
  "https://munachiso.vercel.app/static/media/reactrouter-seeklogo.com.c6b4f5f181157d8c5bdd6d741abecfed.svg";
const react =
  "https://munachiso.vercel.app/static/media/react-native-seeklogo.com.55360266b3781dae00a5a77c8916f82d.svg";
const next =
  "https://munachiso.vercel.app/static/media/next-js-seeklogo.com.bfb23e822fc36bcdb6ef5e563dd35342.svg";
const post =
  "https://munachiso.vercel.app/static/media/postman-seeklogo.com.e65afafee644ce9fe8a727d01b403189.svg";
const netlify =
  "https://munachiso.vercel.app/static/media/netlify-seeklogo.com.6fffe72536b6259f0f594d67890e582f.svg";

const express =
  "https://munachiso.vercel.app/static/media/nodejs-seeklogo.com.5a3a9ca294db0539884810b6e6eafedd.svg";
const styled =
  "data:image/png;base64,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";
const npm =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAACMCAMAAABmmcPHAAAAM1BMVEX////LODfLNzbJKyrJJCLKMTDJKCbJLSzIIB/JKijHFhTIHBvKMjHJJiXGCATHFBLEAADURSF8AAACdElEQVR4nO3dyVIrMRAF0aY9tCeG//9aWKNrhYiSkylzXTyVzvMKY/fyZEjLdy/wXxIaSmgooaGEhhIaSmgooaGEhhIaSmgooaGEhhIaSmgooaGEhorQ6+T+yhmVXRL0uptcOHn2GRtwxnBJOkCvx2Vy+/aMbfYZ5+Z262H2GaMdgzQCfRJa6EckNJTQUEJDCQ0lNJTQUEJDCQ0lNJTQUEJDCQ0lNJTQUEJDCQ0lNNR06Oft8KntkuYq0KfmjMNLmqtAXwbvcWzndnFuNvSufaf9lOYq0M/tGa9prgJ9bc+4prmtnYtnTIcO7/FPhw5Lx1dbBbrdL9+jva/QQgsttNBCCy200EILLbTQQg/uLHTeT2ihhe7uLHTeT2ihhe7uLHTeT2ihhe7uLHTeT2ihhe7uLHTeT2ihhe7uLHTeT2ihhe7uLHTeT2ihhe7uLHTeT2ihhe7uLHTe719CP/7DQkJ/9HLaf+4tzQkdL/KzPtAp9BcSOl5EaKGF7id0vIjQQgvdT+h4EaGFFrqf0PEiQgstdD+h40WEFlrofkLHiwgtNAh9Hl0wQO/THPGYvfYhgvOhD+0ZtzTX/qffeXDkrfk60Ngt/HtrGmznvvDdpGO7hDNq9wg/W5mrPQp19GfDVOW7SUu7zL3H+Nw3Pdy39Ac0vzKhoYSGEhpKaCihoYSGEhpKaCihoYSGEhpKaCihoYSGEhpqGf3leKX22Bo0sfPsluZTfA+o8lZWgF6JnWc3et9S1/Ci3A0WXtDxI8q2ROjK+3lC3ytBFxL6XkJDCQ0lNJTQUEJDCQ0lNJTQUEJDCQ0lNJTQUEJDCQ0lNJTQUEIvyzttpI4hRWhHdQAAAABJRU5ErkJggg==";
const yarn =
  "data:image/png;base64,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";
const typescript =
  "data:image/png;base64,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";

const language = [
  {
    text: "Javascript",
    id: 1,
    image: javascript,
  },

  {
    text: "Typescript",
    id: 3,
    image: typescript,
  },
  {
    text: "Html",
    id: 4,
    image: htm,
  },
  {
    text: "Css",
    id: 5,
    image: css,
  },
];

const tools = [
  {
    text: "Redux",
    id: 1,
    image: redux,
  },
  {
    text: "Github",
    id: 2,
    image: github,
  },
  {
    text: "React-Router",
    id: 3,
    image: router,
  },
  {
    text: "Material Ui",
    id: 4,
    image: material,
  },

  {
    text: "Mongo Db",
    id: 5,
    image: mongo,
  },

  {
    text: "Bootstrap",
    id: 7,
    image: boot,
  },
  {
    text: "Styled Components",
    id: 8,
    image: styled,
  },

  {
    text: "Postman",
    id: 10,
    image: post,
  },

  {
    text: "Netlify",
    id: 12,
    image: netlify,
  },
  {
    text: "NPM",
    id: 13,
    image: npm,
  },
  {
    text: "Yarn",
    id: 14,
    image: yarn,
  },
];

const tech = [
  {
    text: "Reactjs",
    id: 1,
    image: react,
  },

  {
    text: "Nodejs",
    id: 2,
    image: node,
  },
  {
    text: "Expressjs",
    id: 3,
    image: express,
  },
  {
    text: "Nextjs",
    id: 4,
    image: next,
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ColorTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Stacks" {...a11yProps(0)} style={{ color: "#8892b0" }} />
          <Tab
            label="Languages"
            {...a11yProps(1)}
            style={{ color: "#8892b0" }}
          />
          <Tab label="Tools" {...a11yProps(2)} style={{ color: "#8892b0" }} />
        </Tabs>
      </Box>
      <TabStyle>
        <TabPanel value={value} index={0}>
          <span className="tab">
            {tech.map((item, i) => (
              <b className="language" key={i}>
                <img src={item.image} alt="img" />
                <b>{item.text}</b>
              </b>
            ))}
          </span>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <span className="tab">
            {language.map((item, i) => (
              <b className="language" key={i}>
                <img src={item.image} alt="img" />
                <b>{item.text}</b>
              </b>
            ))}
          </span>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <span className="tab">
            {tools.map((item, i) => (
              <b className="language" key={i}>
                <img src={item.image} alt="img" />
                <b>{item.text}</b>
              </b>
            ))}
          </span>
        </TabPanel>
      </TabStyle>
    </Box>
  );
}
