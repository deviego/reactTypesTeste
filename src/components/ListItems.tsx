import React from "react";


export default function ListItem<ItemType> ({items, render} : {items: ItemType[]; render: (item: ItemType, index: number) => React.ReactNode}){
    return(
        <ul>
            {items.map((item, index) => {
               return render(item, index) 
            })}
        </ul>
    )
}