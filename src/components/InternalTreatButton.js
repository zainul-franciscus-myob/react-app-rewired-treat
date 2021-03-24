import React from "react";
import * as styles from "./InternalTreatButton.treat";

const InternalTreatButton = ({ children }) => (
  <button className={styles.button}>{children}</button>
);

export default InternalTreatButton;
