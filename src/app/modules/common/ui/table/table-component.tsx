import './index.scss'

export interface ITableRow {
	[N: string]: string | React.ReactNode,
}

export interface IColumnsProps {
  name: string;
  className?: string;
}

export interface ITableComponentProps<T extends ITableRow> {
  columns: string[],
	rows: T[],

  columnsProps?: IColumnsProps[],
	isCounted?: boolean,
}

export const TableComponent = <T extends ITableRow>({ columns, rows, isCounted, columnsProps }: ITableComponentProps<T>): JSX.Element => {
  return (
	<table className="table-component">
		<thead className="table-component__header">
			<tr className="table-component__row table-component__header-row">
        {
          isCounted && (
            <th className="table-component__cell table-component__header-cell table-component__counter w-[40px]">#</th>
          )
        }
				{
					columns.map((el, index) => {
						const colName = String(el);
            const columnProperties = columnsProps?.find((el) => el.name === colName);

						return <th
								className={`table-component__cell table-component__header-cell ${ columnProperties?.className }`}
								key={ `${colName}_${index}` }
							>
								{ colName }
							</th>
					})
				}
			</tr>
		</thead>

		<tbody className="table-component__body">
			{
				rows.map((el, index) => {
					const elementValues = Object.values(el);

					return (
						<tr className="table-component__row" key={ `${elementValues[0]}_${index}` }>
              {
                isCounted && (
                  <td className="table-component__cell table-component__counter">
                    { index + 1 }
                  </td>
                )
              }
							{
								elementValues.map((value, index) => {
									return (
										<td className="table-component__cell" key={ `${value}_${index}` }>
											{
												value
											}
										</td>
									)
								})
							}
						</tr>
					)
				})
			}
		</tbody>
	</table>
  )
}
