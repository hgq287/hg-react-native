declare module 'react-native-config' {
  export interface NativeConfig {
    API_BASE_URL?: string;
    API_NAMESPACE?: string;

  }
  
  export const Config: NativeConfig
  export default Config
}