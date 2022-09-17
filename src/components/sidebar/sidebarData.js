import HomeIcon from '@mui/icons-material/Home';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import DescriptionIcon from '@mui/icons-material/Description';
import ConstructionIcon from '@mui/icons-material/Construction';
import WorkIcon from '@mui/icons-material/Work';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const sidebarData = [
  {
    title: "Home",
    icon: <HomeIcon fontSize='medium' />,
    link: "/"
  },
  {
    title: "About Me",
    icon: <AccessibilityIcon fontSize='medium' />,
    link: "/about"
  },
  {
    title: "Resume",
    icon: <DescriptionIcon fontSize='medium' />,
    link: "/resume"
  },
  {
    title: "Skills",
    icon: <ConstructionIcon fontSize='medium' />,
    link: "/skills"
  },
  {
    title: "Portfolio",
    icon: <WorkIcon fontSize='medium' />,
    link: "/portfolio"
  },
  {
    title: "Contact",
    icon: <ContactPhoneIcon fontSize='medium' />,
    link: "/contact"
  },
];

export default sidebarData;