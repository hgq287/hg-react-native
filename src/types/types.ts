export interface TypeProps {
  route: {
    params: any;
  };
  navigation: {
    navigate: (screen: string) => void;
    push: (screen: string) => void;
    goBack: () => void;
  };
}