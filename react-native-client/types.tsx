/* eslint-disable prettier/prettier */
export type Nav = {
  navigate: (value: string) => void;
};
export type AuthStackParamList = {
  Landing: undefined;
  SignUp: undefined;
  LogIn: undefined;
  PasswordReset: undefined;
};
export type AppTabsParamList = {
  HomeNavigator: undefined;
  LinksNavigator: undefined;
  NotificationsNavigator: undefined;
  MessagesNavigator: undefined;
  ProfileNavigator: undefined;
};
export type HomeStackParamList = {
  Home: undefined;
  Search: undefined;
  Filter: undefined;
};
export type ProfileStackParamList = {
  Profile: undefined;
  Settings: undefined;
};
export type LinksStackParamList = {
  'My Community': undefined;
  'Pending Links': undefined;
};
export type NotificationsStackParamList = {
  Me: undefined;
  'My Community': undefined;
};
export type MessagesStackParamList = {
  Messages: undefined;
  Conversation: undefined;
};

export type AuthData = {
  token: string;
  email: string;
  username: string;
};

export type AuthContextData = {
  authData?: AuthData;
  loading: boolean;
  signUp(email: string, username: string, password: string): Promise<boolean>;
  signIn(username: string, password: string): Promise<boolean>;
  signOut(): Promise<void>;
  confirmSignUp(username: string, authCode: string): Promise<boolean>;
};
