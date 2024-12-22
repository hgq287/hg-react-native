declare module 'react-native-config' {
  export interface NativeConfig {
    API_BASE_URL?: string;
    API_NAMESPACE?: string;
    DB_VERSION?: number;
  }

  export const Config: NativeConfig
  export default Config
}