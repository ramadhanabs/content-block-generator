import React from 'react'
import MenuItem from '../Link/MenuItem';
import { CubeIcon, FilmIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <aside
      className="w-64 fixed bg-white left-[20px] shadow-smooth rounded-lg"
      aria-label="Sidebar"
    >
      <div className="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
        <ul className="my-3">
          <li>
            <MenuItem label="Eraspace" iconMenu={<CubeIcon />} identifier="eraspace" />
          </li>
        </ul>
        <ul className="my-3">
          <li>
            <MenuItem label="iBox" iconMenu={<FilmIcon />} identifier="ibox" />
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar
