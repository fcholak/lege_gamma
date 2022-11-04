import PocketBase from "pocketbase";

export async function initDb() {
  return new PocketBase("http://127.0.0.1:8090");
}
