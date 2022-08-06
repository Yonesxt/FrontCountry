import React from "react";
import c from "./css/Pagination.modules.css"
const pagination = ({ countriesperpage, totalCountries, paginate }) => {
    const countriesPage = [];
    for (let i = 1; i <= Math.ceil(totalCountries / countriesperpage); i++) {
        countriesPage.push(i);
    }
    return (
        <div >
            <nav >
                <ul id="ul"  >
                    {
                        countriesPage && countriesPage.map(n => (
                            <li id="il" key={n}>
                                <button id="button" className={c.btn} onClick={() => paginate(n)}>{n}</button>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default pagination;