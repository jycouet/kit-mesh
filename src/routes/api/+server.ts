import { createBuiltMeshHTTPHandler } from ".mesh";

const meshHttp = createBuiltMeshHTTPHandler();

export { meshHttp as get, meshHttp as post };
