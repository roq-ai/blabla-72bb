const mapping: Record<string, string> = {
  audio: 'audio',
  companies: 'company',
  follows: 'follow',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
