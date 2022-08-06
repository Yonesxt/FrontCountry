import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry, getActividad } from "../../redux/actions";
import Countrys from "../dumbs/Countrys";
import Nav from "./Nav"
import Pagination from "../dumbs/Pagination"
import Searchbar from "./Searchbar"
import h from "./css/Home.module.css"


function Home() {
  const dispatch = useDispatch()
  const [currentpage, setcurrentpage] = useState(1);
  useEffect(() => {
    dispatch(getCountry())
    dispatch(getActividad());
  }, [dispatch]);
  const countriesperpage = 10
  const countries = useSelector(state => state.country);
  
  const indexLastCountries = currentpage * countriesperpage;
  const indexFirtsCountries = indexLastCountries - countriesperpage;
  const currentCountries = countries.slice(indexFirtsCountries, indexLastCountries);

  return (
    <div className={h.fondo}>
      <div><Nav /></div>
      <div><Searchbar paginate={setcurrentpage} /></div>
      <div>
        <Countrys country={currentCountries} />
      </div>
       <div>
        <Pagination countriesperpage={countriesperpage} totalCountries={countries.length} paginate={setcurrentpage} />
      </div>
    </div>
  );
}

export default Home;