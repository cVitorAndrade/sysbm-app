import { ILogin } from '../interfaces/IUser';
import { setBearerToken } from '../provider';
import { AuthService } from '../services/auth.service';
// import { AuthService } from '../services';
// import useLoggedUserStore from '../Store/LoggedUserStore';

export default function useAuth() {
  // const { setLoggedUserData } = useLoggedUserStore();
  async function onAuth(payload: ILogin) {
    try {
      const res = await AuthService.login(payload);
      await setBearerToken(res.access_token);
    } catch (error) {
      throw new Error(error);
    }
  }
  return onAuth;
}
