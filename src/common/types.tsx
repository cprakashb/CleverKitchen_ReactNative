export interface User {
  id: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  emailId: string | null;
}

export interface AppData {
  activeUser: User | undefined;
}
