import React from 'react';
import { MemoryRouter } from "react-router";
import Frame from "./Frame";

export default {
  title: 'Frame',
  component: Frame,
  decorators: [
    (Story: any) => {
      return (
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      );
    },
  ],
}

export const Normal = () => <Frame>
  <div>
    <h1>Title</h1>
    <h2>Subtitle</h2>
  </div>
</Frame>
