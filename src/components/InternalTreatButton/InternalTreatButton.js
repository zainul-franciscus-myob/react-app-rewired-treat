import React from "react";
import * as styles from "./InternalTreatButton.css";

const InternalTreatButton = ({ children }) => (
  <button className={styles.button}>{children}</button>
);

export default InternalTreatButton;
