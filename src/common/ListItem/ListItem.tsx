import { ListItemTypes } from "./types";
import Button from "../Button/Button";
import Table from "../Table/Table";

const ListItem = ({
  pic,
  fullDesc,
  source,
  downloadCount,
  onClick,
}: ListItemTypes) => {
  return (
    <Table>
      <Table.Head>Фото</Table.Head>
      <Table.Head>Описание</Table.Head>
      <Table.Head>Источник</Table.Head>
      <Table.Head>Кол-во скачиваний</Table.Head>
      <Table.Head>Действие</Table.Head>
      <Table.Body>
        <img width={50} className="object-center" src={pic} alt="itemPhoto" />
      </Table.Body>
      <Table.Body>{fullDesc}</Table.Body>
      <Table.Body>{source}</Table.Body>
      <Table.Body>{downloadCount}</Table.Body>
      <Table.Body>
        <Button onClick={onClick} title="Удалить" variant="secondary" />
      </Table.Body>
    </Table>
  );
};

export default ListItem;
