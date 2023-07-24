import DataTable from 'react-data-table-component'
import CustomPage from './custom_page';

const CustomTable = ({ title, datas, columns, actionsMemo, FilterComponent, resetPaginationToggle, noDataComponent }: any) => {

    return (
        <CustomPage>
            <DataTable
                columns={columns || []}
                data={datas || []}
                title={title || ''}
                highlightOnHover={true}
                noHeader={false}
                pagination
                paginationResetDefaultPage={resetPaginationToggle}
                responsive={true}
                actions={actionsMemo}
                subHeader
                subHeaderComponent={FilterComponent}
                customStyles={customStyles}
                noDataComponent={noDataComponent}
            />
        </CustomPage>
    )
}

export default CustomTable

const customStyles = {
    headRow: {
        style: {
            border: 'none',
        },
    },
    headCells: {
        style: {
            color: '#fff',
            fontSize: '14px',
            padding: '0 0.4rem',
            background: '#11101d'
        },
    },
    rows: {
        highlightOnHoverStyle: {
            borderBottomColor: '#FFFFFF',
            outline: 'none',
            border: 'none',
            cursor: 'default'
        },
    },
    pagination: {
        style: { border: 'none', },
    },
    cells: {
        style: {
            paddingLeft: '8px',
            paddingRight: '8px', border: 'none'
        },
    },
};



//---------------------------

    // const [filterText, setFilterText] = React.useState('');
    // const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    // const filteredItems = fakeUsers.filter(
    //     item => item.name && item.name.toString().toLowerCase().includes(filterText.toLowerCase()),
    // );

    // const subHeaderComponentMemo = React.useMemo(() => {
    //     return (<FilterComponent onFilter={(e: any) => setFilterText(e.target.value)} filterText={filterText} />);
    // }, [filterText, resetPaginationToggle]);


// const Tooltip = () => (
//     <Popup
//         trigger={() => (<i className="ti ti-more-alt"></i>)}
//         position="left top"
//         closeOnDocumentClick
//         arrow={false}
//         arrowStyle={{ color: '#11101d' }}
//     >
//         <ul style={{ width: 120, height: 'auto', backgroundColor: 'white', borderRadius: 5, padding: 5, fontSize: 12, background: '#11101d', color: 'white' }}>
//             <li style={{ padding: '2px' }}>Afficher</li>
//             <li style={{ padding: '2px' }}>Modifier</li>
//             <li style={{ padding: '2px' }}>Supprimer</li>
//             <li style={{ padding: '2px' }}>Exporter</li>
//         </ul>
//     </Popup>
// );



// const createUser = () => ({
//     id: faker.datatype.uuid(),
//     name: faker.name.fullName(),
//     email: faker.internet.email(),
//     address: faker.address.streetAddress(),
//     bio: faker.lorem.sentence(),
//     image: faker.image.avatar(),
// });

// const createUsers = (numUsers = 5) => new Array(numUsers).fill(undefined).map(createUser);

// const fakeUsers = createUsers(5);


// const FilterComponent = ({ filterText, onFilter, onClear }: any) => (
//     <>
//         <input
//             id="search"
//             type="text"
//             placeholder="Filtrer les données"
//             aria-label="Search Input"
//             value={filterText}
//             onChange={onFilter}
//             className='filter-input'
//         />
//     </>
// );



// const Tooltip = () => (
//     <Popup
//         trigger={() => (<i className="ti ti-more-alt"></i>)}
//         position="left top"
//         closeOnDocumentClick
//         arrow={false}
//         arrowStyle={{ color: '#11101d' }}
//     >
//         <ul style={{ width: 120, height: 'auto', backgroundColor: 'white', borderRadius: 5, padding: 5, fontSize: 12, background: '#11101d', color: 'white' }}>
//             <li style={{ padding: '2px' }}>Afficher</li>
//             <li style={{ padding: '2px' }}>Modifier</li>
//             <li style={{ padding: '2px' }}>Supprimer</li>
//             <li style={{ padding: '2px' }}>Exporter</li>
//         </ul>
//     </Popup>
// );





// const data = [
//     { id: 1, title: 'Beetlejuice', year: '1988', },
//     { id: 2, title: 'Ghostbusters', year: '1984', },
// ]

// function convertArrayOfObjectsToCSV(array: any) {
//     let result: any;

//     const columnDelimiter = ',';
//     const lineDelimiter = '\n';
//     const keys = Object.keys(data[0]);

//     result = '';
//     result += keys.join(columnDelimiter);
//     result += lineDelimiter;

//     array.forEach((item: any) => {
//         let ctr = 0;
//         keys.forEach(key => {
//             if (ctr > 0) result += columnDelimiter;

//             result += item[key];

//             ctr++;
//         });
//         result += lineDelimiter;
//     });

//     return result;
// }

//const Export = ({ onExport }: any) => <button className='header-button' onClick={(e: any) => onExport(e.target.value)}>Export tout</button>;

// function downloadCSV(array: any) {
//     const link = document.createElement('a');
//     let csv = convertArrayOfObjectsToCSV(array);
//     if (csv == null) return;

//     const filename = 'export.csv';

//     if (!csv.match(/^data:text\/csv/i)) {
//         csv = `data:text/csv;charset=utf-8,${csv}`;
//     }

//     link.setAttribute('href', encodeURI(csv));
//     link.setAttribute('download', filename);
//     link.click();
// }


// const actionsMemo = React.useMemo(() => {
//     return (
//         <div style={{ display: 'flex', gap: '10px' }}>
//             <Export onExport={() => downloadCSV(data)} />
//         </div>
//     )
// }, []);


// const columns = [
//     {
//         name: 'Name',
//         selector: (row: any) => row.name,
//         sortable: true,
//     },
//     {
//         name: 'Email',
//         selector: (row: any) => row.email,
//         sortable: true,
//     },
//     {
//         name: 'Address',
//         selector: (row: any) => row.address,
//         sortable: true,
//     },
//     {
//         cell: (row: any) => <Tooltip /*size="small" row={row}*/ />,
//         allowOverflow: true,
//         button: true,
//         width: '56px',
//     }
// ];