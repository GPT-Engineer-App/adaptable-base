import React from "react";

export const List = ({ children }) => {
  return <ul className="list-disc pl-5">{children}</ul>;
};

export const ListItem = ({ children, className }) => {
  return <li className={className}>{children}</li>;
};