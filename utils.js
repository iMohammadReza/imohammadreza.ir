// eslint-disable-next-line import/prefer-default-export
export function isClientSide() {
  return !(typeof window === 'undefined');
}
