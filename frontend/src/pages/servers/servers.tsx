import React, {ReactElement} from "react";
import {useAppSelector} from "../../hooks/hooks";
import {getServers} from "../../store/servers/selectors";
import DataTable from "../../components/data-table/data-table";


function Servers(): ReactElement {
    const servers = useAppSelector(getServers);

    return (
       <DataTable servers={servers}/>
    );
}

export default Servers;
