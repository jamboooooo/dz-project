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
      <Table.Head>
        <Table.Row type="head">
          <Table.Cell type="head">Фото</Table.Cell>
          <Table.Cell type="head">Описание</Table.Cell>
          <Table.Cell type="head">Источник</Table.Cell>
          <Table.Cell type="head">Кол-во скачиваний</Table.Cell>
          <Table.Cell type="head">Действие</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row type="body">
          <Table.Cell type="body">
            <img
              width={50}
              className="object-center"
              src={pic}
              alt="itemPhoto"
            />
          </Table.Cell>
          <Table.Cell type="body">{fullDesc}</Table.Cell>
          <Table.Cell type="body">{source}</Table.Cell>
          <Table.Cell type="body">{downloadCount}</Table.Cell>
          <Table.Cell type="body">
            <Button onClick={onClick} title="Удалить" variant="secondary" />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default ListItem;
