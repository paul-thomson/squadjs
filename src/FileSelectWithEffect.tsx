/*import { useFilePicker } from 'use-file-picker';
import React, { useState, useEffect } from 'react';

export function FileSelectWithEffect() {
    const { useState } = React;

    const [data, setData] = useState({firstValue: '', secondValue: ''});

    const [openFileSelector, { filesContent, loading }] = useFilePicker({
        accept: '.txt',
      });

    useEffect(() => {
        if (filesContent.length > 0) {
            
        setData({firstValue: filesContent[0].content[0],
            secondValue: filesContent[0].content[1]});
        }
      }, [filesContent]);

    return (
        <div>
        <button onClick={() => openFileSelector()}>Select files</button>
        <button onClick={() => setData({
              ...data,
              secondValue: data.secondValue + "t"
            })}>Modify data</button>
        <br />
        
        <div >
            {data.firstValue}
          </div>
          <div>
            {data.secondValue}
          </div>
      </div>
    )
}*/
import React, { useState, useEffect } from 'react';
import { parse } from '@vanillaes/csv'

function convertCSVToTableData(csv_string: string) {
    const parsed_csv = parse(csv_string);
    const headers = parsed_csv[0];
    let rows = [];
    for (let row_i = 1; row_i < parsed_csv.length; row_i++) {
        let o = {};
        for (let header_i = 0; header_i < headers.length; header_i++) {
            o[headers[header_i]] = parsed_csv[row_i][header_i];
        }
        rows.push(o);
    }
    return rows;
}

export function FileSelectWithEffect() {
    const { useState } = React;

    const [data, setData] = useState({ firstValue: '', secondValue: '' });

    function onFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.currentTarget.files[0]

        let reader = new FileReader();

        reader.readAsText(file);

        reader.onload = function () {
            const csv_string: string = reader.result as string;
            const tableData = convertCSVToTableData(csv_string);
            console.log(tableData);
        };

        reader.onerror = function () {
            console.log(reader.error);
        };



        // Reset the value so if user tries to reupload same file it will still trigger event
        event.target.value = ''
    }

    function onClick(event: React.MouseEvent<HTMLButtonElement>) {
        // var input = document.createElement('input');
        // input.type = 'file';
        // input.onchange = function(e: Event) {
        //     onFileUpload(e);
        // }
        // input.click();

        // console.log(event)
        
    }

    return (
        <div>
            <button onClick={() => document.getElementById("files").click()}>Upload CSV</button>
            <input id="files" type="file" style={{display: "none"}} onChange={onFileUpload}></input>
        </div>
    )
}