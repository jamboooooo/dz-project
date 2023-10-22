import { useState } from "react";
import data from "./mokdata";
import Table from "../common/Table/Table";
import Button from "../common/Button/Button";

const AvatarList = () => {
  const [state, setState] = useState(data);

  const onDelete = (id: number) => {
    const filtredList = state.filter((item) => item.id !== id);
    setState(filtredList);
  };

  return (
    <div id="avatar-list">
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
          {state.map((item) => (
            <>
              <Table.Row type="body">
                <Table.Cell type="body">
                  <img
                    width={50}
                    className="object-center"
                    src={item.pic}
                    alt="itemPhoto"
                  />
                </Table.Cell>
                <Table.Cell type="body">{item.fullDesc}</Table.Cell>
                <Table.Cell type="body">{item.source}</Table.Cell>
                <Table.Cell type="body">{item.downloadCount}</Table.Cell>
                <Table.Cell type="body">
                  <Button
                    data-testid="avatar-list-delete-btn"
                    onClick={() => onDelete(item.id)}
                    title="Удалить"
                    variant="secondary"
                  />
                </Table.Cell>
              </Table.Row>
            </>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default AvatarList;
