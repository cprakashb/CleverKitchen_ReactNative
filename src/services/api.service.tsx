import { sleep } from '../helpers';
import auth from '@react-native-firebase/auth';
import { User } from '../common/types';

export function signUpUser(username: string, password: string): Promise<any> {
  return auth().createUserWithEmailAndPassword(username, password);
}

export function signInAsync(username: string, password: string) {
  return auth().signInWithEmailAndPassword(username, password);
}

export async function fetchUser(userId: string): Promise<User | undefined> {
  await sleep(2000);
  //Assumed here a user fetched from DB
  //... Put code here
  //Success
  const avt =
    'https://gravatar.com/avatar/c804fa4eac7ccd9b835d4cf4552b5140?s=400&d=robohash&r=x';
  return {
    id: userId,
    firstName: 'Mostafa',
    lastName: 'Gamal',
    avatarUrl: avt,
  };
}
