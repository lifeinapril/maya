

import about1 from "./images/maya1.jpeg";
import about2 from "./images/maya2.webp";
import about3 from "./images/maya3.avif";
import about4 from "./images/maya4.jpeg";
import about5 from "./images/maya5.gif";


import slide1 from "./images/sliders/slide1.jpeg";
import slide2 from "./images/sliders/slide2.webp";
import slide3 from "./images/sliders/slide3.jpeg";
import slide4 from "./images/sliders/slide4.jpeg";
import slide5 from "./images/sliders/x.jpeg";



import {RiMagicFill,RiApps2Fill,RiUserVoiceFill,RiShieldCheckFill} from "react-icons/ri";
import {VscTasklist,VscSmiley,VscReactions} from "react-icons/vsc";

import jumbo1 from "./images/maya6.jpeg";
import jumbo2 from "./images/maya5.jpeg";

import appicon from "./logo.png";
import maya from "./App.json";

maya.icon=appicon;
maya.jumbos=[jumbo1,jumbo2];



maya.about[0].image=about1;
maya.about[1].image=about2;
maya.about[2].image=about3;
maya.about[3].image=about4;
maya.about[4].image=about5;


maya.about[0].icon=<VscTasklist size={90}/>;
maya.about[1].icon=<RiUserVoiceFill size={90}/>;
maya.about[2].icon=<RiMagicFill size={90}/>;
maya.about[3].icon=<RiShieldCheckFill size={90}/>;
maya.about[4].icon=<RiApps2Fill size={90}/>;


maya.slides[0].image=slide1;
maya.slides[1].image=slide2;
maya.slides[2].image=slide3;
maya.slides[3].image=slide4;
maya.slides[4].image=slide5;

export default maya;
