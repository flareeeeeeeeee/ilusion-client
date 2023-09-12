import * as XLSX from "xlsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Papa from "papaparse";


export const readFile = (file: any): Promise<Array<any>> => {
  return new Promise(async (resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results: any) {
        console.log(results.data);
        resolve(results.data);
      },
    });
  });
};
