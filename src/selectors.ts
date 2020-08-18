import { TransferType } from "./store/types";

const isAll = (filter: TransferType[]): boolean => {
    const allFilterTypes = Object.values(TransferType);
    return filter.length === allFilterTypes.length;
}

export default isAll;