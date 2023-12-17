import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Background from "../src/components/Background";
import SelectYourPlan from "./pages/SelectYourPlan";
import PickAddOns from "./pages/PickAddOns";
import FinishingUp from "./pages/FinishingUp";

function App() {
  const [monthly, setMonthly] = useState<Boolean>(true);

  ///SelectYourPlan state
  const [arcade, setArcade] = useState<boolean>();
  const [advanced, setAdvanced] = useState<boolean>();
  const [pro, setPro] = useState<boolean>();
  //// PickAddOns state
  const [service, setService] = useState<boolean>(false);
  const [storage, setStorage] = useState<boolean>(false);
  const [profile, setProfile] = useState<boolean>(false);
  /////

  return (
    <>
      <BrowserRouter>
        <div className=" relative">
          <Background />

          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route
              path="/select_your_plan"
              element={
                <SelectYourPlan
                  monthly={!!monthly}
                  setMonthly={setMonthly}
                  ////
                  arcade={!!arcade}
                  setArcade={setArcade}
                  advanced={!!advanced}
                  setAdvanced={setAdvanced}
                  pro={!!pro}
                  setPro={setPro}
                />
              }
            />

            <Route
              path="/pick_add_ons"
              element={
                <PickAddOns
                  monthly={!!monthly}
                  ///
                  service={!!service}
                  setService={setService}
                  storage={!!storage}
                  setStorage={setStorage}
                  profile={!!profile}
                  setProfile={setProfile}
                />
              }
            />
            <Route
              path="/finishing_up"
              element={
                <FinishingUp
                  monthly={!!monthly}
                  ////
                  arcade={!!arcade}
                  advanced={!!advanced}
                  pro={!!pro}
                  ///
                  service={!!service}
                  storage={!!storage}
                  profile={!!profile}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
