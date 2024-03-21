import React, { useState } from 'react';
const items = [
  { id: 1, name: 'Nguyễn văn An', Age: 18, Role: 'Back-End NodeJS' },
  { id: 2, name: 'Lê Quang Huy', Age: 23, Role: 'Front-End ReactJS' },
  { id: 3, name: 'Trịnh Minh Anh', Age: 35, Role: 'Back-End Dot Net' },
  { id: 4, name: 'Thành Cát Hương', Age: 26, Role: 'Automating Tester' },
];
function SetStructure() {
  const [selectedItems, setSelectedItems] = useState(new Set());
  const handleItemClick = (item) => {
    setSelectedItems((currentItem) => {
      const checkSelectedItem = new Set(currentItem);
      if (checkSelectedItem.has(item)) {
        checkSelectedItem.delete(item);
      } else {
        checkSelectedItem.add(item);
      }
      return checkSelectedItem;
    })
    // const updatedSelectedItems = new Set(selectedItems);
    // if (updatedSelectedItems.has(item)) {
    //   updatedSelectedItems.delete(item);
    // } else {
    //   updatedSelectedItems.add(item);
    // }
    // console.log('this is update', updatedSelectedItems);
    // setSelectedItems(updatedSelectedItems);

  };
  // console.log('this item selcted', selectedItems.values());
  return (
    <>
      <div className='flex justify-around mt-5 ml-5 bg-slate-300 mr-5'>
        <div className="relative overflow-x-auto">
          <table className=" text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Show Infomation
                </th>
              </tr>
            </thead>
            <tbody>
              {
                items.map((item, index) => {
                  return (

                    <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.name}
                      </th>
                      <td className="px-6 py-4">
                        <div onClick={() => handleItemClick(item)} className={`${selectedItems.has(item) ? 'bg-slate-600 text-white ' : 'bg-slate-100'} text-black font-medium bg-slate-100 hover:bg-slate-400  h-7 flex justify-center rounded-lg`}>
                          <button>Show Infomation</button>
                        </div>
                      </td>
                    </tr>

                  )
                })
              }
            </tbody>
          </table>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Age
                </th>
                <th scope="col" className="px-6 py-3">
                  Role
                </th>
              </tr>
            </thead>
            <tbody>
              {
                [...selectedItems].map((item, index) => {
                  return (

                    <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.name}
                      </th>
                      <td className="px-6 py-4">
                        {item.Age}
                      </td>
                      <td className="px-6 py-4">
                        {item.Role}
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>

      </div>
    </>
  );
}
export default SetStructure;
