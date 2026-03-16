import { post } from "@app/axios/base/requests"
import { ITableRow, TableComponent } from "@app/modules/common/ui/table/table-component"
import { useEffect } from "react"

interface Int extends ITableRow {
  name: string,
  secondName: string
}

export const GalleryComponent = (): JSX.Element => {

  useEffect(() => {
    post('token', {
      'grant_type': 'client_credentials',
      'client_id': 'aa3577e3763047c18c7c0acc3e4fcd91',
      'client_secret': '7e68841ea40041adb631d8b6b4370cba',
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then((data) => {
      console.log('data', data)
    })
  }, []);

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
