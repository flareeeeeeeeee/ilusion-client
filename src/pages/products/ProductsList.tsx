import { BasicTable } from "../../_metronic/helpers/components/table/BasicTable";
import { useBasicTable } from "../../_metronic/helpers/components/table/useBasicTable";
import { useEffect } from "react";
import { Columns } from "./helpers/_columns";
import { Search } from "../../_metronic/helpers/components/table/components/header/ListSearchComponent";
import { useSelector } from "react-redux";
import { BasicTableState, ReduxState } from "../../providers";
import * as actions from "../../redux/reducers/users/actions";
import InputFile from "../../components/inputs/File";
import { uploadFile } from "./helpers/_requests";

const ListWrapper = () => {
  const products: BasicTableState = useSelector((state: ReduxState) => state.products);
  const { dataList, helpers } = useBasicTable("/products", products, actions);

  async function onUpload(file: File) {

    const form = new FormData()
    form.append("file", file)
    await uploadFile(form)
    helpers.fetchData();
  }

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
      <div className="d-flex w-100 justify-content-between">

        <Search
          onChange={(term: string) => {
            if (term) {
              helpers.setFilters({
                // "email": term,
                "name": term
              });
            } else {
              helpers.setFilters({});
            }
          }}
        />
        <InputFile
          title="Cargar productos"
          onChange={onUpload}
        />
      </div>
    </BasicTable>
  );
};

export { ListWrapper };
