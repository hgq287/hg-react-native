import { signIn } from '../apiAuth';
import * as indexModule from '../index';

describe('apiAuth', () => {
  it('should call post with correct arguments', async () => {
    const mockPost = jest.spyOn(indexModule, 'post').mockResolvedValue({ token: '1234' });

    const body = { email: 'test@example.com', password: '123456' };
    const result = await signIn(body);

    expect(mockPost).toHaveBeenCalledWith(`${indexModule.routes.signIn}`, { body });
    expect(result).toEqual({ token: '1234' });

    mockPost.mockRestore();
  });
});