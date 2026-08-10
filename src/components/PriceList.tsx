import { languageText } from "./languageData"
import type { Language } from "./languageData"

interface Props {
  language: Language,
  tableVis: number,
  setTableVis: (index: number) => void
}

export const PriceList = ({ language, tableVis, setTableVis }: Props) => {

  const tableData = (languageText[language].priceList)
  const kategorie = tableData.table.categories
  console.log('kategorie', tableData.table.people.header)

  return (
    <section className='py-12 2xl:py-25 pb-36 px-6 flex flex-col items-center scroll-mt-16 md:px-26 lg:px-50 xl:px-80 2xl:px-90 3xl:px-120!' id='priceList'>
      <h2 className='font-bold text-[2.5rem] md:text-[3rem] lg:text-[3.2rem] xl:text-[3.6rem] mb-14'>{tableData.header}</h2>
      <div className='flex flex-row gap-6 md:gap-10 lg:gap-14 xl:gap-18 mb-10 lg:mb-14 border-b-2 border-t-2 font-medium px-4'>
        {tableData.table.categories.map((e, i) => (
            <button onClick={() => setTableVis(i)} className={`${tableVis == i ? "border-b-3 border-blue-600" : "border-b-3 border-white"} cursor-pointer py-4 pt-5 md:text-lg xl:text-xl hover:text-blue-800 transition`}>
              {e.category.header}
            </button>
        ))}
      </div>
      <table className='table-auto border-collapse border md:text-lg lg:text-xl w-full'>
        <thead className='text-lg md:text-xl lg:text-2xl xl:text-3xl'>
          <tr>
            <th className='border py-4'>{tableData.service}</th>
            <th className='border py-4'>{tableData.price}</th>
          </tr>
        </thead>
        <tbody>
          {tableVis == 0 && (
            <>
              {kategorie[0].category.services.map((e) => (
                  <tr>
                    <td className='border p-4'>{e.service}</td>
                    <td className='border p-4'>{e.price}</td>
                  </tr>
              ))}
            </>
          )}
          {tableVis == 1 && (
            <>
              {kategorie[1].category.services.map((e) => (
                  <tr>
                    <td className='border p-4'>{e.service}</td>
                    <td className='border p-4'>{e.price}</td>
                  </tr>
              ))}
            </>
          )}
          {tableVis == 2 && (
            <>
              {kategorie[2].category.services.map((e) => (
                  <tr>
                    <td className='border p-4 max-xs:text-sm!'>{e.service}</td>
                    <td className='border p-4'>{e.price}</td>
                  </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
      {!(tableVis == 2) && (
        <>
          <h3 className='font-bold text-[2rem] md:text-[2.5rem] lg:text-[2.8rem] xl:text-[3rem] mt-14 lg:mt-28 mb-10 lg:mb-14 border-b-2 border-t-2 py-2 px-8'>{tableData.table.people.header}</h3>
          <div className='w-full lg:px-20 xl:px-30 3xl:px-50!'>
            <table className='table-auto border-collapse border md:text-lg lg:text-xl w-full'>
              <thead className='text-lg md:text-xl lg:text-2xl xl:text-3xl'>
                <tr>
                  <th className='border p-4'>{tableData.table.people.age}</th>
                  <th className='border p-4'>{tableData.table.people.price}</th>
                </tr>
              </thead>
              <tbody>
                {tableData.table.people.prices.map((e) => (
                    <tr>
                      <td className='border p-4'>{e.age}</td>
                      <td className='border p-4'>{e.price}</td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      
    </section>
  )
}