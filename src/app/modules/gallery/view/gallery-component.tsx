import { ITableRow, TableComponent } from "@app/modules/common/ui/table/table-component"
import { useSelector } from "react-redux"
import { RootState } from "redux/store"

interface Int extends ITableRow {
  name: string,
  secondName: string
}

export const GalleryComponent = (): JSX.Element => {
  const { baseURL } = useSelector((state: RootState) => state.appConfig)
  console.log('baseURL', baseURL);

  const rows: Int[] = [
    {
      name: 'name1',
      secondName: 'second1'
    },
    {
      name: 'name2',
      secondName: 'second2'
    },
    {
      name: 'name3',
      secondName: 'second3'
    }
  ]

  return (
    <>
      <div className="block-container">
        <TableComponent
          isCounted
          rows={ rows }
          columns={['name', "secondName"]}
        />
      </div>
    </>
  )
}
