import { ListItemTypes } from "./types";
import Button from "../Button/Button";

const ListItem = ({ pic, fullDesc, source, downloadCount }: ListItemTypes) => {
  return (
    <table className="min-w-full text-center text-sm font-light table-fixed">
      <thead className="border-b font-medium">
        <tr>
          <th scope="col" className="px-6 py-4">
            Фото
          </th>
          <th scope="col" className="px-6 py-4">
            Описание
          </th>
          <th scope="col" className="px-6 py-4">
            Источник
          </th>
          <th scope="col" className="px-6 py-4">
            Кол-во скачиваний
          </th>
          <th scope="col" className="px-6 py-4">
            Действие
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b hover:bg-neutral-100">
          <td className="whitespace-nowrap px-6 py-4">
            <img width={50} src={pic} alt="itemPhoto" />
          </td>
          <td className="whitespace-nowrap px-6 py-4 ">{fullDesc}</td>
          <td className="whitespace-nowrap px-6 py-4">{source}</td>
          <td className="whitespace-nowrap px-6 py-4">{downloadCount}</td>
          <td className="whitespace-nowrap px-6 py-4">
            <Button title="СКАЧАТЬ" variant="secondary" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ListItem;
