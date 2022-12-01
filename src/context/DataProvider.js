import { createContext, useState } from "react";


export const DataContext = createContext();

const DataProvider =({childern}) =>{
let [ accountValue , setAccountValue] = useState('hello');

    return (
        <DataContext.Provider value={accountValue}>
{childern}
        </DataContext.Provider>
    )
}

export default DataProvider;