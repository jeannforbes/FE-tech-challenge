import { Breadcrumbs, Typography, Link } from "@mui/joy";
import { Link as ReactLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/// A pseudo-breadcrumb component that uses the existing path to mock
/// a breadcrumb-like UI component.
const CustomBreadcrumbs = () => {
  const [crumbs, setCrumbs] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setCrumbs(location.pathname.split("/"));
  }, [location]);

  const isVisible = () => location.pathname.replace("/", "").length > 0;

  return (
    <>
      {isVisible() && (
        <Breadcrumbs aria-label="breadcrumbs">
          {crumbs.slice(0, crumbs.length - 1).map((item: string, i) => (
            <ReactLink key={`react-link-${i}`} to={`/${item}`}>
              {item}
            </ReactLink>
          ))}
          <Typography>{crumbs[crumbs.length - 1]}</Typography>
        </Breadcrumbs>
      )}
    </>
  );
};

export default CustomBreadcrumbs;
