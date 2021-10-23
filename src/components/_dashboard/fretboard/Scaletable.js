import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTable } from 'react-table';
import { maketableData } from '../../../utils/music';
import palette from '../../../theme/palette';
import { FretboardPanelBaseSelector } from './FretboardPanelBaseSelector';

const Styles = styled.div`
  /* This is required to make the table full-width */
  display: block;
  min-width: 100%;

  /* This will make the table scrollable when it gets too small */
  .tablewrap {
    display: block;
    max-width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    border-bottom: 1px solid black;
  }

  table {
    /* Make sure the inner table is always as wide as needed */
    min-width: 400px;
    table-layout: fixed;
    width: 100%;
    border-spacing: 0;
    border-left: 1;
    font-size: 80%;
    text-align: center;

    tr {
      .base {
        background-color: ${palette.primary.lighter};
      }
      .tension {
        background-color: ${palette.success.lighter};
      }
      .note {
        font-weight: bold;
      }
      :last-child {
        td {
          border-bottom: 1;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0rem 0.5rem;
      border-bottom: 1px solid black;
      border-left: 1px solid black;
      /* The secret sauce */
      /* Each cell should grow equally */
      width: 1%;

      :last-child {
        border-right: 1px solid black;
      }
    }
  }
`;

function cellClassName(original) {
  let str = original.base ? 'base' : '';
  str += original.tension ? ' tension' : '';
  str += original.note ? ' note' : '';
  return str;
}

function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  });
  // Render the UI for your table
  return (
    <div className="tablewrap">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps({
                    className: column.collapse ? 'collapse' : ''
                  })}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps({
                      className: cellClassName(row.original)
                    })}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function Scaletable({
  scaletable,
  index,
  changeScaletable,
  changeScaletablePanelType,
  isSharp
}) {
  const data = React.useMemo(
    () =>
      maketableData(
        scaletable.key,
        scaletable.chord,
        scaletable.scale,
        scaletable.scaletabletype,
        isSharp
      ),
    [scaletable]
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'scale table',
        columns: [
          {
            Header: '0',
            accessor: '0'
          },
          {
            Header: '1',
            accessor: '1'
          },
          {
            Header: '2',
            accessor: '2'
          },
          {
            Header: '3',
            accessor: '3'
          },
          {
            Header: '4',
            accessor: '4'
          },
          {
            Header: '5',
            accessor: '5'
          },
          {
            Header: '6',
            accessor: '6'
          },
          {
            Header: '7',
            accessor: '7'
          },
          {
            Header: '8',
            accessor: '8'
          },
          {
            Header: '9',
            accessor: '9'
          },
          {
            Header: '10',
            accessor: '10'
          },
          {
            Header: '11',
            accessor: '11'
          }
        ]
      }
    ],
    []
  );

  return (
    <div>
      <Styles>
        <Table columns={columns} data={data} />
      </Styles>
      <FretboardPanelBaseSelector
        panel={{ ...scaletable, fretboardPanelType: scaletable.scaletabletype }}
        index={index}
        changeFretboard={changeScaletable}
        changeFretboardPanelType={changeScaletablePanelType}
        isSharp={isSharp}
      />
    </div>
  );
}

Scaletable.propTypes = {
  scaletable: PropTypes.shape({
    key: PropTypes.number.isRequired,
    chord: PropTypes.number.isRequired,
    scale: PropTypes.string.isRequired,
    scaletabletype: PropTypes.number.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  changeScaletable: PropTypes.func.isRequired,
  changeScaletablePanelType: PropTypes.func.isRequired,
  isSharp: PropTypes.bool
};
