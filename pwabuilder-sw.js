// This is the service worker with the Cache-first network

const CACHE = "pwabuilder-precache";
const precacheFiles = [
  /* Add an array of files to precache for your app */
  '/', // do not remove this
				'/index.html', //default
				'/Acute_kidney_injury_MeG-CLS-071.html',
				'/Acute_rheumatic_fever__MeG-CLS-048.html',
				'/Acute_rheumatic_fever__MeG-CLS-048.zip',
				'/Animal_bites_MeG-CLS-049.html',
				'/asthma_image001.png',
				'/asthma_image002.png',
				'/asthma_image003.png',
				'/Asthma_MeG-CLS-001.html',
				'/Bone_and_joint_infections_guidelines_MeG-CLS-050.html',
				'/Cellulitis_MeG-CLS-051.html',
				'/Chest_pain_and_Acute_Coronary_Syndrome_MeG-CLS-052.html',
				'/Chronic_kidney_disease_MeG-CLS-053.html',
				'/ckd_image001.png',
				'/config.xml',
				'/Congenital_heart_disease_MeG-CLS-039.html',
				'/Constipation_MeG-CLS-003.html',
				'/COPD_MeG-CLS-032.html',
				'/croup_image001.jpg',
				'/Croup_MeG-CLS-059.html',
				'/Deep_venous_thombosis_and_pulmonary_embolism_MeG-CLS-055.html',
				'/Depression_MeG-CLS-075.html',
				'/Developmental_delay_MeG-CLS-054.html',
				'/Diabetes_Mellitus_MeG-CLS-004.html',
				'/DKA_MeG-CLS-021.html',
				'/dyspepsia_image002.png',
				'/Dyspepsia_MeG-CLS-034.html',
				'/ear_pain_image001.png',
				'/Ear_pain_MeG-CLS-070.html',
				'/Epiglottitis_MeG-CLS-063.html',
				'/Epilepsy_MeG-CLS-056.html',
				'/footer.html',
				'/header.html',
				'/Heart_failure_adults_MeG-CLS-040.html',
				'/HHS_MeG-CLS-046.html',
				'/HIV_MeG-CLS-035.html',
				'/htn_image001.png',
				'/Hypertension_MeG-CLS-010.html',
				'/Hyperthyroidism_and_goitre_MeG-CLS-027.html',
				'/Hypocalcaemia_and_hypercalcaemia_MeG-CLS-074.html',
				'/Hypokalaemia_hyperkalaemia_hypermagnesaemia_MeG-CLS-073.html',
				'/Hyponatraemia_and_hypernatraemia_MeG-CLS-072.html',
				'/hypothyroidism_image001.png',
				'/hypothyroidism_image002.png',
				'/Hypothyroidism_MeG-CLS-036.html',
				'/Infective_Endocarditis_MeG-CLS-058.html',
				'/Inflammatory_arthritis_and_connective_tissue_disease_MeG-CLS-041.html',
				'/Intestinal_helminths_MeG-CLS-009.html',
				'/jquery-1.11.1.min.js',
				'/jquery.mobile-1.4.5.css',
				'/jquery.mobile-1.4.5.js',
				'/jquery.mobile-1.4.5.min.css',
				'/jquery.mobile-1.4.5.min.js',
				'/jquery.mobile.structure-1.4.5.css',
				'/jquery.mobile.structure-1.4.5.min.css',
				'/lbp_image001.jpg',
				'/lbp_image002.jpg',
				'/Liver_disease_MeG-CLS-031.html',
				'/Lower_back_pain_MeG-CLS-022.html',
				'/LRI_MeG-CLS-011.html',
				'/Malaria_MeG-CLS-012.html',
				'/malnutrition_image001.png',
				'/malnutrition_image002.png',
				'/Malnutrition_MeG-CLS-037.html',
				'/manifest.json',
				'/manifest.manifest',
				'/Meningitis_MeG-CLS-028.html',
				'/MRC_Icon.png',
				'/mystyle.css',
				'/Neonatal_jaundice_MeG-CLS-060.html',
				'/Nephrotic_Syndrome_MeG-CLS-061.html',
				'/Osteoarthritis_MeG-CLS-042.html',
				'/Otitis_media_MeG-CLS-023.html',
				'/Palliative_Care_MeG-CLS-064.html',
				'/panel.html',
				'/Rectal_prolapse_MeG-CLS-015.html',
				'/Rheumatic_heart_disease_MeG-CLS-065.html',
				'/Scabies_MeG-CLS-066.html',
				'/Sepsis_in_adults_MeG-CLS-043.html',
				'/pwabuilder-sw.js',
				'/Sinusitis_MeG-CLS-062.html',
				'/splash.9.png',
				'/Stevens-Johnsons_syndrome_MeG-CLS-067.html',
				'/STI_MeG-CLS-038.html',
				'/Stroke_MeG-CLS-020.html',
				'/TB_MeG-CLS-044.html',
				'/Tonsillitis_and_pharyngitis_MeG-CLS-024.html',
				'/Trauma_MeG-CLS-068.html',
				'/Upper_respiratory_tract_infections_MeG-CLS-018.html',
				'/UTI_MeG-CLS-019.html',
				'/images/ajax-loader.gif',
				'/images/icons/icon-128x128.png',
				'/images/icons/icon-144x144.png',
				'/images/icons/icon-152x152.png',
				'/images/icons/icon-192x192.png',
				'/images/icons/icon-384x384.png',
				'/images/icons/icon-512x512.png',
				'/images/icons/icon-72x72.png',
				'/images/icons/icon-96x96.png',
				'/images/icons-png/bars-black.png',
				'/images/icons-png/bars-white.png',
				'/images/icons-png/carat-d-black.png',
				'/images/icons-png/carat-d-white.png',
				'/images/icons-png/carat-l-black.png',
				'/images/icons-png/carat-l-white.png',
				'/images/icons-png/carat-r-black.png',
				'/images/icons-png/carat-r-white.png',
				'/images/icons-png/carat-u-black.png',
				'/images/icons-png/carat-u-white.png',
				'/images/icons-png/delete-black.png',
				'/images/icons-png/delete-white.png',
				'/images/icons-png/home-black.png',
				'/images/icons-png/home-white.png',
				'/images/icons-png/info-black.png',
				'/images/icons-png/info-white.png',
				'/images/icons-png/search-black.png',
				'/images/icons-png/search-white.png',
				'/images/icons-svg/bars-black.svg',
				'/images/icons-svg/bars-white.svg',
				'/images/icons-svg/carat-d-black.svg',
				'/images/icons-svg/carat-d-white.svg',
				'/images/icons-svg/carat-l-black.svg',
				'/images/icons-svg/carat-l-white.svg',
				'/images/icons-svg/carat-r-black.svg',
				'/images/icons-svg/carat-r-white.svg',
				'/images/icons-svg/carat-u-black.svg',
				'/images/icons-svg/carat-u-white.svg',
				'/images/icons-svg/delete-black.svg',
				'/images/icons-svg/delete-white.svg',
				'/images/icons-svg/home-black.svg',
				'/images/icons-svg/home-white.svg',
				'/images/icons-svg/info-black.svg',
				'/images/icons-svg/info-white.svg',
				'/images/icons-svg/search-black.svg',
				'/images/icons-svg/search-white.svg'
];

self.addEventListener("install", function (event) {
  console.log("[PWA Builder] Install Event processing");

  console.log("[PWA Builder] Skip waiting on install");
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      console.log("[PWA Builder] Caching pages during install");
      return cache.addAll(precacheFiles);
    })
  );
});

// Allow sw to control of current page
self.addEventListener("activate", function (event) {
  console.log("[PWA Builder] Claiming clients for current page");
  event.waitUntil(self.clients.claim());
});

// If any fetch fails, it will look for the request in the cache and serve it from there first
self.addEventListener("fetch", function (event) { 
  if (event.request.method !== "GET") return;

  event.respondWith(
    fromCache(event.request).then(
      function (response) {
        // The response was found in the cache so we responde with it and update the entry

        // This is where we call the server to get the newest version of the
        // file to use the next time we show view
        event.waitUntil(
          fetch(event.request).then(function (response) {
            return updateCache(event.request, response);
          })
        );

        return response;
      },
      function () {
        // The response was not found in the cache so we look for it on the server
        return fetch(event.request)
          .then(function (response) {
            // If request was success, add or update it in the cache
            event.waitUntil(updateCache(event.request, response.clone()));

            return response;
          })
          .catch(function (error) {
            console.log("[PWA Builder] Network request failed and no cache." + error);
          });
      }
    )
  );
});

function fromCache(request) {
  // Check to see if you have it in the cache
  // Return response
  // If not in the cache, then return
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      if (!matching || matching.status === 404) {
        return Promise.reject("no-match");
      }

      return matching;
    });
  });
}

function updateCache(request, response) {
  return caches.open(CACHE).then(function (cache) {
    return cache.put(request, response);
  });
}
