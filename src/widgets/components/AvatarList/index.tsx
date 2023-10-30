import { Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import Button from "../../../shared/components/Button/Button";
import Table from "../../../shared/components/Table/Table";
import { deleteListItem } from "../../../store/reducers/AvatarList/actions";

const AvatarList = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector(({ AvatarReducer }) => AvatarReducer.list);

  const onDelete = (id: string) => {
    dispatch(deleteListItem(id));
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
          {list.map((item) => (
            <Fragment key={item?.id}>
              <Table.Row type="body">
                <Table.Cell type="body">
                  <img
                    width={50}
                    className="object-center"
                    src={item.picture}
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
            </Fragment>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default AvatarList;
