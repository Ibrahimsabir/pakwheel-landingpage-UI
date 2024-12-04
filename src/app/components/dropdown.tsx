"use client"
import { FaSearch } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";


const DropdownData: {icon:unknown,title:string,description:string}[]=[
    {icon:(<FaSearch/>) as unknown as string,
        title:"Find Used Cars For Sale",
        description:"Search from above 100k+ options"
    },
    {icon:(<FaTag/>) as unknown as string,
        title:"Find Used Cars For Sale",
        description:"Search from above 100k+ options"
    }
]
export default function DropdownButton(props:any){
    return DropdownData.map(item=>(
        <button key={item.title} className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded-md text-sm font-medium">
            {item.icon as string} {item.title}
            <span className="sr-only">{item.description}</span>
        </button>
    ))

}