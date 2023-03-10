// taken from https://material-table.com/#/docs/features/editable
import MaterialTable from 'material-table'
import { ThemeProvider, createTheme } from '@mui/material';

import React, { useState, forwardRef } from 'react';

import AddBox from '@mui/icons-material/AddBox';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import Check from '@mui/icons-material/Check';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Clear from '@mui/icons-material/Clear';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import Edit from '@mui/icons-material/Edit';
import FilterList from '@mui/icons-material/FilterList';
import FirstPage from '@mui/icons-material/FirstPage';
import LastPage from '@mui/icons-material/LastPage';
import Remove from '@mui/icons-material/Remove';
import SaveAlt from '@mui/icons-material/SaveAlt';
import Search from '@mui/icons-material/Search';
import ViewColumn from '@mui/icons-material/ViewColumn';

import { SvgIconProps } from '@mui/material';

// const tableIcons = {
//     Add: forwardRef<React.ReactElement<SvgIconProps>,  React.ReactElement<SvgIconProps>>((props, ref) => <AddBox {...props} ref={ref} />),
//     Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
//     Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//     Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
//     DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//     Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
//     Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
//     Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
//     FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
//     LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
//     NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//     PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
//     ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//     Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
//     SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
//     ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
//     ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
//   };
const defaultMaterialTheme = createTheme();
export function Editable() {
    const { useState } = React;
  
    const [columns, setColumns] = useState([
      { title: 'Name', field: 'name' , type: 'string' as const},
      { title: 'Time (to next hall)', field: 'time', initialEditValue: 'enter hall name', type: 'numeric' as const },
    ]);
  
    const [data, setData] = useState([
      { name: 'Mossbank', time: 12 },
      { name: 'Brae Hall', time: 2 },
    ]);
    
  
    return (
      
    <ThemeProvider theme={defaultMaterialTheme}>
          <MaterialTable
              title="Halls"
              columns={columns}
              data={data}
              options={{
                exportButton: true,
                search: false
              }}
              actions={[
                {
                  icon: 'Add',
                  tooltip: 'Upload CSV',
                  isFreeAction: true,
                  onClick: () => {}
                }
              ]}
              editable={{
              onRowAdd: newData =>
                  new Promise<void>((resolve, reject) => {
                  setTimeout(() => {
                      setData([...data, newData]);
                      
                      resolve();
                  }, 1000)
                  }),
              // onRowUpdate: (newData, oldData) =>
              //     new Promise<void>((resolve, reject) => {
              //     setTimeout(() => {
              //         const dataUpdate = [...data];
              //         const index = oldData.tableData.id;
              //         dataUpdate[index] = newData;
              //         setData([...dataUpdate]);
      
              //         resolve(void);
              //     }, 1000)
              //     }),
              // onRowDelete: oldData =>
              //     new Promise<void>((resolve, reject) => {
              //     setTimeout(() => {
              //         const dataDelete = [...data];
              //         const index = oldData.tableData.id;
              //         dataDelete.splice(index, 1);
              //         setData([...dataDelete]);
                      
              //         resolve();
              //     }, 1000)
              //     }),
              }}
          />
          </ThemeProvider>
    )
  }
  