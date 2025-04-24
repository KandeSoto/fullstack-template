import { AreaProvider } from "@src/context/area/AreaProvider";
import { AreasListView } from "@src/views/pages/areas/AreasListView";

export const Areas = () => {
  return (    
    <AreaProvider>
      <AreasListView />
    </AreaProvider>    
  )
}
