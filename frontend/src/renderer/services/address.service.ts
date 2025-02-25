import { IAddress, ICreateAddress } from '../interfaces/IAddress';
import { Api } from '../provider';

export const AddressService = {
  async createAddress(payload: ICreateAddress) {
    const { data } = await Api.post<IAddress>('/address', payload);
    return data;
  },
};
