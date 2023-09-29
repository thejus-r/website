export function PathToCrumbs(path: string): string[] {
  if (path[0] == "/" && path.length == 1) {
    console.log("Home");
  }

  path = path.substring(1);
  console.log(path);
  return ["home", "/", "case-studies", "/", "scout"];
}

//TODO: Implement input is a path "/case-studies/scout" => output should be an array of crumbs with "/" inbetween.
