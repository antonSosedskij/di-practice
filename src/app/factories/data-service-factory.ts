import { ActivatedRoute, Router } from "@angular/router";
import { LocalStorageDataService } from "../services/local-storage-data.service";
import { inject } from "@angular/core";
import { ApiDataService } from "../services/api-data.service";

export const dataServiceFactory = (router: Router) => {
   const currentUrl = router.url;
   console.log(currentUrl)
   
   if (currentUrl.includes('local-storage-tasks')) 
    return inject(LocalStorageDataService);
   else return inject(ApiDataService)
}