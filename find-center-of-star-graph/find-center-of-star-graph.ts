function findCenter(edges: number[][]): number {
  if (edges[0][0] === edges[1][0] ) return edges[0][0]
  if (edges[0][0] === edges[1][1] ) return edges[0][0]
  if (edges[0][1] === edges[1][0] ) return edges[0][1]
  if (edges[0][1] === edges[1][1] ) return edges[0][1]
};