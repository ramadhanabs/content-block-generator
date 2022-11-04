import React, { PropsWithChildren, useState, useEffect } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import {dataDummy} from '../../../constants/dummyAPI';

interface MenuItem {
  identifier: string;
  to?: string | "#";
  iconMenu?: ReactElement | null;
  label?: string;
}

const MenuItem = (props: PropsWithChildren<MenuItem>) => {
  const { identifier, iconMenu, label, ...others } = props;

  const [menu, setMenu] = useState(null)

  useEffect(()=>{
    const getData = () => {
        const data = dataDummy.find(item => item.identifier === identifier)
        console.log(data)
    }

    getData()
  },[])

  return (
    <button
      className="w-full flex items-center justify-between p-2 text-base font-normal text-slate-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      {...others}
    >
      <div className="flex items-center">
        <span className="w-5 h-5">{iconMenu}</span>
        <span className="ml-3 font-bold">{label}</span>
      </div>

      <span className="w-5 h-5 opacity-0 group-hover:opacity-100 transition ease-in-out">
        <ChevronRightIcon />
      </span>
    </button>
  );
};

export default MenuItem;
