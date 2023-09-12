import { BasicTable } from "../../_metronic/helpers/components/table/BasicTable";
import { useBasicTable } from "../../_metronic/helpers/components/table/useBasicTable";
import { useEffect } from "react";
import { Columns } from "./helpers/_columns";
import { Search } from "../../_metronic/helpers/components/table/components/header/ListSearchComponent";
import { useSelector } from "react-redux";
import { BasicTableState, ReduxState } from "../../providers";
import * as actions from "../../redux/reducers/users/actions";

const ListWrapper = () => {
  const categories: BasicTableState = useSelector((state: ReduxState) => state.categories);
  const { dataList, helpers } = useBasicTable("/categories", categories, actions);

  useEffect(() => {
    if (categories.isFirstTime) {
      helpers.fetchData();
    }
  }, []);
  return (
    <BasicTable
      {...helpers}
      headerAddButton
      columnsList={Columns(categories)}
      dataList={dataList}
    >
      <Search
        onChange={(term: string) => {
          if (term) {
            helpers.setFilters({
              // "email": term,
              // "name": term
            });
          }else{
            helpers.setFilters({});
          }
        }}
      />
    </BasicTable>
  );
};

export { ListWrapper };
