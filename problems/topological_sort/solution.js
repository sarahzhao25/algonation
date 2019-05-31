function topSort(graph) {
  const vertices = Object.keys(graph);
  const visited = {};

  function subTopoSort(vertices) {
    const sortedNums = [];
    for (let i = 0; i < vertices.length; i++) {
      const vertex = vertices[i];
      const vertexNeighbors = graph[vertex];
      if (vertexNeighbors.length) {
        sortedNums.unshift(...subTopoSort(vertexNeighbors));
      }
      if (!visited[vertex]) {
        sortedNums.unshift(vertex);
        visited[vertex] = true;
      }
    }
    return sortedNums;
  }

  return subTopoSort(vertices);
}

// const graph = {
//   0: [],
//   1: ['5'],
//   5: ['7'],
//   7: []
// }

const graph = {
  0: [],
  1: ['5','6'],
  2: [],
  3: ['5'],
  4: ['6', '7'],
  5: ['7'],
  6: [],
  7: []
}

topSort(graph);
