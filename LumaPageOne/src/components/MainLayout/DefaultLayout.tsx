import { PontoHome } from "../../pages/Ponto/Ponto";
import { PersistentDrawerLeft } from "../SideBarPages";

export function DefaultLayout() {
  return (
    <div>
      <PersistentDrawerLeft />
      <PontoHome />
    </div>
  );
}
