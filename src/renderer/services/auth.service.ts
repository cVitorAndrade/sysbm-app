import { ILogin, ILoginResponse } from '../interfaces/IUser';
import { Api } from '../provider';

export const AuthService = {
  async login(payload: ILogin) {
    const { data } = await Api.post<ILoginResponse>('/signIn', payload);
    return data;
  },
};
