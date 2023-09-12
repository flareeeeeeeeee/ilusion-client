import { BasicTable } from "../../_metronic/helpers/components/table/BasicTable";
import { useBasicTable } from "../../_metronic/helpers/components/table/useBasicTable";
import { useEffect } from "react";
import { Columns } from "./helpers/_columns";
import { Search } from "../../_metronic/helpers/components/table/components/header/ListSearchComponent";
import { useSelector } from "react-redux";
import { BasicTableState, ReduxState } from "../../providers";
import * as actions from "../../redux/reducers/users/actions";

const ListWrapper = () => {
  const products: BasicTableState = useSelector((state: ReduxState) => state.products);
  const { dataList, helpers } = useBasicTable("/products", products, actions);

  useEffect(() => {
    if (products.isFirstTime) {
      helpers.fetchData();
    }
  }, []);
  return (
    <BasicTable
      {...helpers}
      headerAddButton
      columnsList={Columns}
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
