import React, {ReactElement} from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {Server} from "../../types/server/server";


type DataTableProps = {
    servers: Server[];
}


function DataTable({servers}: DataTableProps) : ReactElement {
    console.log(servers)

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'id', width: 150, type: 'string' },
        { field: 'name', headerName: 'name', width: 150, type: 'string' },
        { field: 'ip', headerName: 'ip', width: 150, type: 'string' },
        { field: 'maxPlayers', headerName: 'maxPlayers', width: 150, type: 'number' },
        { field: 'currentPlayers', headerName: 'currentPlayers', width: 150, type: 'number' },
        { field: 'region', headerName: 'region', width: 150, type: 'string' },
        { field: 'ping', headerName: 'ping', width: 150, type: 'number' },
        { field: 'description', headerName: 'description', width: 150, type: 'string' },

    ];

    return (
        <div style={{height: 700, width: '100%'}}>
            <DataGrid
                rows={servers}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {page: 0, pageSize: 15},
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
}

export default DataTable;
