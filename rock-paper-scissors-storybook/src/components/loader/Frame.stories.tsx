import React from 'react';
import { MemoryRouter } from "react-router";
import Loader from "./Loader";

export default {
  title: 'Loader',
  component: Loader,
}

export const Normal = () => <Loader />
