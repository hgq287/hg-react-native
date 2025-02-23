export interface TypeProps {
  route: {
    params: any;
  };
  navigation: {
    navigate: (screen: string) => void;
  };
}