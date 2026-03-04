export function getRoute(){
  return (location.hash || "#home").slice(1);
}

export function go(id){
  location.hash = "#" + id;
}
