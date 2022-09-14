import './index.css';
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Game } from "./scenes/game/Game";
import { Records } from "./scenes/records/Records";
import { Home } from "./scenes/home/Home";
import { Loader } from "./components/loader/Loader";

const queryClient = new QueryClient()

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/play" element={<Game />} />
          <Route path="/records" element={<Records />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
    </Suspense>
  )
}

export default App;
