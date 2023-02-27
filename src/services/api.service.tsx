import { sleep } from '../helpers';
import auth from '@react-native-firebase/auth';
import { User } from '../common/types';

export function signUpUser(username: string, password: string): Promise<any> {
  return auth().createUserWithEmailAndPassword(username, password);
}

export function signInAsync(username: string, password: string) {
  return auth().signInWithEmailAndPassword(username, password);
}

export async function fetchUser(userDetails: User): Promise<User | undefined> {
  await sleep(2000);
  const avtar = 'https://bootdey.com/img/Content/avatar/avatar6.png';
  return {
    id: userDetails.id,
    firstName: 'Jeevahasan',
    lastName: 'Mahadevan',
    avatarUrl: avtar,
    emailId: userDetails.emailId
  };
}


