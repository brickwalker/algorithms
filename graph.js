class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  add(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  addEdge(vertex1, vertex2) {
    if (!(this.adjacencyList[vertex1] && this.adjacencyList[vertex2])) {
      return false;
    }
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
    return true;
  }

  removeEdge(vertex1, vertex2) {
    if (!(this.adjacencyList[vertex1] && this.adjacencyList[vertex2])) {
      return false;
    }
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
    return true;
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return false;
    }
    while (this.adjacencyList[vertex].length) {
      let neighbor = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, neighbor);
    }
    delete this.adjacencyList[vertex];
    return this;
  }
}

const myGraph = new Graph();
console.log(myGraph.add("Artem"));
console.log(myGraph.add("Roland"));
console.log(myGraph.add("Sasha"));
console.log(myGraph.addEdge("Artem", "Sasha"));
console.log(myGraph.addEdge("Artem", "Roland"));
console.log(myGraph);
console.log(myGraph.removeVertex("Roland"));

