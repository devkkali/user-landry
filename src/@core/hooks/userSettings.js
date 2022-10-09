import { useContext } from "react";
import { SettingsContext } from "src/@core/context/settingContext";

export const userSettings =()=> useContext(SettingsContext)