import type { Article } from "@/lib/articles/types";
import { homeServicesArticles } from "@/lib/articles/data/home-services";
import { lawFirmMarketingArticles } from "@/lib/articles/data/law-firm-marketing";
import { personalInjuryArticles } from "@/lib/articles/data/personal-injury";
import { legalGuidesArticles } from "@/lib/articles/data/legal-guides";
import { marketingChannelsArticles } from "@/lib/articles/data/marketing-channels";
import { practiceAreaLeadsArticles } from "@/lib/articles/data/practice-area-leads";
import { practiceAreaLeads2Articles } from "@/lib/articles/data/practice-area-leads-2";
import { cityStatePagesArticles } from "@/lib/articles/data/city-state-pages";
import { leadGenGlossaryArticles } from "@/lib/articles/data/lead-gen-glossary";
import { marketingTacticsArticles } from "@/lib/articles/data/marketing-tactics";
import { seoDeepDiveArticles } from "@/lib/articles/data/seo-deep-dive";
import { consumerGuidesArticles } from "@/lib/articles/data/consumer-guides";
import { seoSynonymsArticles } from "@/lib/articles/data/seo-synonyms";
import { findNewClientsClusterArticles } from "@/lib/articles/data/find-new-clients-cluster";
import { divorceSubnichesArticles } from "@/lib/articles/data/divorce-subniches";
import { carAccidentSubnichesArticles } from "@/lib/articles/data/car-accident-subniches";
import { accidentSubtypes2Articles } from "@/lib/articles/data/accident-subtypes-2";
import { brandReputationArticles } from "@/lib/articles/data/brand-reputation";
import { intakeConversionArticles } from "@/lib/articles/data/intake-conversion";
import { ppcClusterArticles } from "@/lib/articles/data/ppc-cluster";
import { ppcCluster2Articles } from "@/lib/articles/data/ppc-cluster-2";
import { ppcCluster3Articles } from "@/lib/articles/data/ppc-cluster-3";
import { socialMediaClusterArticles } from "@/lib/articles/data/social-media-cluster";
import { cityStatePages2Articles } from "@/lib/articles/data/city-state-pages-2";
import { cityStatePages3Articles } from "@/lib/articles/data/city-state-pages-3";
import { firmGrowthArticles } from "@/lib/articles/data/firm-growth";
import { leadPricingArticles } from "@/lib/articles/data/lead-pricing";
import { immigrationClusterArticles } from "@/lib/articles/data/immigration-cluster";
import { toolsBudgetArticles } from "@/lib/articles/data/tools-budget";
import { bankruptcyClusterArticles } from "@/lib/articles/data/bankruptcy-cluster";
import { findNewClientsCluster2Articles } from "@/lib/articles/data/find-new-clients-cluster-2";
import { cityStatePages4Articles } from "@/lib/articles/data/city-state-pages-4";
import { divorceLeadEconomicsArticles } from "@/lib/articles/data/divorce-lead-economics";
import { piLeadEconomicsArticles } from "@/lib/articles/data/pi-lead-economics";
import { agencySelectionArticles } from "@/lib/articles/data/agency-selection";
import { leadCampaignBasicsArticles } from "@/lib/articles/data/lead-campaign-basics";
import { leadResponseBasicsArticles } from "@/lib/articles/data/lead-response-basics";
import { leadBuyingBasicsArticles } from "@/lib/articles/data/lead-buying-basics";
import { channelBasicsArticles } from "@/lib/articles/data/channel-basics";
import { miscTopics1Articles } from "@/lib/articles/data/misc-topics-1";
import { miscTopics2Articles } from "@/lib/articles/data/misc-topics-2";
import { roiTrackingArticles } from "@/lib/articles/data/roi-tracking";
import { miscTopics3Articles } from "@/lib/articles/data/misc-topics-3";
import { miscTopics4Articles } from "@/lib/articles/data/misc-topics-4";
import { miscTopics5Articles } from "@/lib/articles/data/misc-topics-5";
import { miscTopics6Articles } from "@/lib/articles/data/misc-topics-6";
import { miscTopics7Articles } from "@/lib/articles/data/misc-topics-7";
import { miscTopics8Articles } from "@/lib/articles/data/misc-topics-8";
import { chicagoPiClusterArticles } from "@/lib/articles/data/chicago-pi-cluster";
import { atlantaNycPiClusterArticles } from "@/lib/articles/data/atlanta-nyc-pi-cluster";
import { westSouthPiClusterArticles } from "@/lib/articles/data/west-south-pi-cluster";
import { miamiTampaPhoenixPiClusterArticles } from "@/lib/articles/data/miami-tampa-phoenix-pi-cluster";
import { findNewClientsCluster3Articles } from "@/lib/articles/data/find-new-clients-cluster-3";
import { californiaPiPageArticles } from "@/lib/articles/data/california-pi-page";
import { divorceStates1Articles } from "@/lib/articles/data/divorce-states-1";
import { divorceStates2Articles } from "@/lib/articles/data/divorce-states-2";
import { divorceStates3Articles } from "@/lib/articles/data/divorce-states-3";
import { divorceTxCitiesArticles } from "@/lib/articles/data/divorce-tx-cities";
import { divorceFlCitiesArticles } from "@/lib/articles/data/divorce-fl-cities";
import { divorceCaCitiesArticles } from "@/lib/articles/data/divorce-ca-cities";
import { divorceMoreCitiesArticles } from "@/lib/articles/data/divorce-more-cities";
import { divorceHighAssetClusterArticles } from "@/lib/articles/data/divorce-high-asset-cluster";
import { divorceNicheCluster2Articles } from "@/lib/articles/data/divorce-niche-cluster-2";
import { divorceNicheCluster3Articles } from "@/lib/articles/data/divorce-niche-cluster-3";
import { divorceCollaborativeClusterArticles } from "@/lib/articles/data/divorce-collaborative-cluster";
import { divorceLeadTypeClusterArticles } from "@/lib/articles/data/divorce-lead-type-cluster";
import { divorceLeadTypeCluster2Articles } from "@/lib/articles/data/divorce-lead-type-cluster-2";
import { divorceLeadTypeCluster3Articles } from "@/lib/articles/data/divorce-lead-type-cluster-3";
import { divorceLeadTypeCluster4Articles } from "@/lib/articles/data/divorce-lead-type-cluster-4";
import { divorceRemainingCities1Articles } from "@/lib/articles/data/divorce-remaining-cities-1";
import { divorceRemainingCities2Articles } from "@/lib/articles/data/divorce-remaining-cities-2";
import { divorceNyStateClusterArticles } from "@/lib/articles/data/divorce-ny-state-cluster";
import { divorceNyStateCluster2Articles } from "@/lib/articles/data/divorce-ny-state-cluster-2";
import { divorceProvenGrowthClusterArticles } from "@/lib/articles/data/divorce-proven-growth-cluster";
import { divorceProvenGrowthCluster2Articles } from "@/lib/articles/data/divorce-proven-growth-cluster-2";
import { divorceTxFlCaIlClusterArticles } from "@/lib/articles/data/divorce-tx-fl-ca-il-cluster";
import { marketingListicles1Articles } from "@/lib/articles/data/marketing-listicles-1";
import { marketingListicles2Articles } from "@/lib/articles/data/marketing-listicles-2";
import { marketingListicles3Articles } from "@/lib/articles/data/marketing-listicles-3";
import { findNewClientsCluster4Articles } from "@/lib/articles/data/find-new-clients-cluster-4";
import { findNewClientsCluster5Articles } from "@/lib/articles/data/find-new-clients-cluster-5";
import { findNewClientsCluster6Articles } from "@/lib/articles/data/find-new-clients-cluster-6";
import { findNewClientsCluster7Articles } from "@/lib/articles/data/find-new-clients-cluster-7";
import { findNewClientsCluster8Articles } from "@/lib/articles/data/find-new-clients-cluster-8";
import { findNewClientsCluster9Articles } from "@/lib/articles/data/find-new-clients-cluster-9";
import { findNewClientsCluster10Articles } from "@/lib/articles/data/find-new-clients-cluster-10";
import { findNewClientsCluster11Articles } from "@/lib/articles/data/find-new-clients-cluster-11";
import { findNewClientsCluster12Articles } from "@/lib/articles/data/find-new-clients-cluster-12";
import { listicleCluster1Articles } from "@/lib/articles/data/listicle-cluster-1";
import { listicleCluster2Articles } from "@/lib/articles/data/listicle-cluster-2";
import { listicleCluster3Articles } from "@/lib/articles/data/listicle-cluster-3";
import { piStrategicGuides1Articles } from "@/lib/articles/data/pi-strategic-guides-1";
import { listicleCluster4Articles } from "@/lib/articles/data/listicle-cluster-4";
import { listicleCluster5Articles } from "@/lib/articles/data/listicle-cluster-5";
import { piStrategicGuides2Articles } from "@/lib/articles/data/pi-strategic-guides-2";
import { piStrategicGuides3Articles } from "@/lib/articles/data/pi-strategic-guides-3";
import { piStrategicGuides4Articles } from "@/lib/articles/data/pi-strategic-guides-4";
import { piMiscCluster1Articles } from "@/lib/articles/data/pi-misc-cluster-1";
import { piCityRemaining1Articles } from "@/lib/articles/data/pi-city-remaining-1";
import { piCityRemaining2Articles } from "@/lib/articles/data/pi-city-remaining-2";
import { carAccidentStrategicGuidesArticles } from "@/lib/articles/data/car-accident-strategic-guides";
import { piBuyingGuidesArticles } from "@/lib/articles/data/pi-buying-guides";
import { rideshareDuplicatesArticles } from "@/lib/articles/data/rideshare-duplicates";
import { familyLawClientAcquisitionArticles } from "@/lib/articles/data/family-law-client-acquisition";
import { alimonyClusterArticles } from "@/lib/articles/data/alimony-cluster";
import { attorneyGlossary1Articles } from "@/lib/articles/data/attorney-glossary-1";
import { attorneyGlossary2Articles } from "@/lib/articles/data/attorney-glossary-2";
import { attorneyGlossary3Articles } from "@/lib/articles/data/attorney-glossary-3";
import { attorneyGlossary4Articles } from "@/lib/articles/data/attorney-glossary-4";
import { attorneyGlossary5Articles } from "@/lib/articles/data/attorney-glossary-5";
import { attorneyGlossary6Articles } from "@/lib/articles/data/attorney-glossary-6";
import { attorneyGlossary7Articles } from "@/lib/articles/data/attorney-glossary-7";
import { attorneyGlossary8Articles } from "@/lib/articles/data/attorney-glossary-8";
import { bestXCluster1Articles } from "@/lib/articles/data/best-x-cluster-1";
import { bestXCluster2Articles } from "@/lib/articles/data/best-x-cluster-2";
import { bestXCluster3Articles } from "@/lib/articles/data/best-x-cluster-3";
import { bestXCluster4Articles } from "@/lib/articles/data/best-x-cluster-4";
import { bestXCluster5Articles } from "@/lib/articles/data/best-x-cluster-5";
import { bestXCluster6Articles } from "@/lib/articles/data/best-x-cluster-6";
import { bestXCluster7Articles } from "@/lib/articles/data/best-x-cluster-7";
import { bestXCluster8Articles } from "@/lib/articles/data/best-x-cluster-8";
import { bestXCluster9Articles } from "@/lib/articles/data/best-x-cluster-9";
import { buyPiLeadsCluster1Articles } from "@/lib/articles/data/buy-pi-leads-cluster-1";
import { buyPiLeadsCluster2Articles } from "@/lib/articles/data/buy-pi-leads-cluster-2";
import { buyPiLeadsCluster3Articles } from "@/lib/articles/data/buy-pi-leads-cluster-3";
import { buyPiLeadsCluster4Articles } from "@/lib/articles/data/buy-pi-leads-cluster-4";
import { buildASystemClusterArticles } from "@/lib/articles/data/build-a-system-cluster";
import { piCostCluster1Articles } from "@/lib/articles/data/pi-cost-cluster-1";
import { piCostCluster2Articles } from "@/lib/articles/data/pi-cost-cluster-2";
import { miscBatch1Articles } from "@/lib/articles/data/misc-batch-1";
import { miscBatch2Articles } from "@/lib/articles/data/misc-batch-2";
import { miscBatch3Articles } from "@/lib/articles/data/misc-batch-3";
import { miscBatch4Articles } from "@/lib/articles/data/misc-batch-4";
import { miscBatch5Articles } from "@/lib/articles/data/misc-batch-5";
import { miscBatch6Articles } from "@/lib/articles/data/misc-batch-6";
import { landingPageOptimizationArticles } from "@/lib/articles/data/landing-page-optimization";
import { miscBatch7Articles } from "@/lib/articles/data/misc-batch-7";
import { miscBatch8Articles } from "@/lib/articles/data/misc-batch-8";
import { miscBatch9Articles } from "@/lib/articles/data/misc-batch-9";
import { miscBatch10Articles } from "@/lib/articles/data/misc-batch-10";
import { miscBatch11Articles } from "@/lib/articles/data/misc-batch-11";
import { miscBatch12Articles } from "@/lib/articles/data/misc-batch-12";
import { exclusiveXCluster1Articles } from "@/lib/articles/data/exclusive-x-cluster-1";
import { exclusiveXCluster2Articles } from "@/lib/articles/data/exclusive-x-cluster-2";
import { exclusiveXCluster3Articles } from "@/lib/articles/data/exclusive-x-cluster-3";
import { exclusiveXCluster4Articles } from "@/lib/articles/data/exclusive-x-cluster-4";
import { exclusiveXCluster5Articles } from "@/lib/articles/data/exclusive-x-cluster-5";
import { exclusiveXCluster6Articles } from "@/lib/articles/data/exclusive-x-cluster-6";
import { exclusiveXCluster7Articles } from "@/lib/articles/data/exclusive-x-cluster-7";
import { exclusiveXCluster8Articles } from "@/lib/articles/data/exclusive-x-cluster-8";
import { miscBatch13Articles } from "@/lib/articles/data/misc-batch-13";
import { pipelineManagementArticles } from "@/lib/articles/data/pipeline-management";
import { miscBatch14Articles } from "@/lib/articles/data/misc-batch-14";
import { miscBatch15Articles } from "@/lib/articles/data/misc-batch-15";
import { onlineMarketingArticles } from "@/lib/articles/data/online-marketing";
import { miscBatch16Articles } from "@/lib/articles/data/misc-batch-16";
import { miscBatch17Articles } from "@/lib/articles/data/misc-batch-17";
import { miscBatch18Articles } from "@/lib/articles/data/misc-batch-18";
import { miscBatch19Articles } from "@/lib/articles/data/misc-batch-19";
import { miscBatch20Articles } from "@/lib/articles/data/misc-batch-20";
import { divorceLeadsCluster1Articles } from "@/lib/articles/data/divorce-leads-cluster-1";
import { divorceLeadsCluster2Articles } from "@/lib/articles/data/divorce-leads-cluster-2";
import { piDivorceCluster1Articles } from "@/lib/articles/data/pi-divorce-cluster-1";
import { piDivorceCityCluster1Articles } from "@/lib/articles/data/pi-divorce-city-cluster-1";
import { piDivorceCityCluster2Articles } from "@/lib/articles/data/pi-divorce-city-cluster-2";
import { miscBatch21Articles } from "@/lib/articles/data/misc-batch-21";
import { howACluster1Articles } from "@/lib/articles/data/how-a-cluster-1";
import { howACluster2Articles } from "@/lib/articles/data/how-a-cluster-2";
import { howLawyersCluster1Articles } from "@/lib/articles/data/how-lawyers-cluster-1";
import { howLawyersCluster2Articles } from "@/lib/articles/data/how-lawyers-cluster-2";
import { howPiCluster1Articles } from "@/lib/articles/data/how-pi-cluster-1";
import { howToAcquireConvertCluster1Articles } from "@/lib/articles/data/how-to-acquire-convert-cluster-1";
import { howToCluster1Articles } from "@/lib/articles/data/how-to-cluster-1";
import { howToCluster2Articles } from "@/lib/articles/data/how-to-cluster-2";
import { howToGenerateConvertCluster1Articles } from "@/lib/articles/data/how-to-generate-convert-cluster-1";
import { howToGenerateConvertCluster2Articles } from "@/lib/articles/data/how-to-generate-convert-cluster-2";
import { howToGenerateConvertCluster3Articles } from "@/lib/articles/data/how-to-generate-convert-cluster-3";
import { howToGenerateCluster1Articles } from "@/lib/articles/data/how-to-generate-cluster-1";
import { howToGenerateCluster2Articles } from "@/lib/articles/data/how-to-generate-cluster-2";
import { howToGenerateCluster3Articles } from "@/lib/articles/data/how-to-generate-cluster-3";
import { howToGetCluster1Articles } from "@/lib/articles/data/how-to-get-cluster-1";
import { howToGetCluster2Articles } from "@/lib/articles/data/how-to-get-cluster-2";
import { howToIdentifyCluster1Articles } from "@/lib/articles/data/how-to-identify-cluster-1";
import { miscBatch22Articles } from "@/lib/articles/data/misc-batch-22";
import { batch100_1Articles } from "@/lib/articles/data/batch100-1";
import { batch100_2Articles } from "@/lib/articles/data/batch100-2";
import { batch100_3Articles } from "@/lib/articles/data/batch100-3";
import { batch100_4Articles } from "@/lib/articles/data/batch100-4";
import { batch100_5Articles } from "@/lib/articles/data/batch100-5";
import { batch100_6Articles } from "@/lib/articles/data/batch100-6";
import { batch100_7Articles } from "@/lib/articles/data/batch100-7";
import { batch100_8Articles } from "@/lib/articles/data/batch100-8";
import { batch100_9Articles } from "@/lib/articles/data/batch100-9";
import { batch100_10Articles } from "@/lib/articles/data/batch100-10";
import { batch100_11Articles } from "@/lib/articles/data/batch100-11";
import { batch100_12Articles } from "@/lib/articles/data/batch100-12";
import { medicareBatch1Articles } from "@/lib/articles/data/medicare-batch-1";
import { medicareBatch2Articles } from "@/lib/articles/data/medicare-batch-2";
import { medicareBatch3Articles } from "@/lib/articles/data/medicare-batch-3";
import { medicareBatch4Articles } from "@/lib/articles/data/medicare-batch-4";
import { medicareBatch5Articles } from "@/lib/articles/data/medicare-batch-5";
import { medicareBatch6Articles } from "@/lib/articles/data/medicare-batch-6";
import { medicareBatch7Articles } from "@/lib/articles/data/medicare-batch-7";
import { medicareBatch8Articles } from "@/lib/articles/data/medicare-batch-8";
import { medicareBatch9Articles } from "@/lib/articles/data/medicare-batch-9";
import { medicareBatch10Articles } from "@/lib/articles/data/medicare-batch-10";
import { medicareBatch11Articles } from "@/lib/articles/data/medicare-batch-11";
import { medicareBatch12Articles } from "@/lib/articles/data/medicare-batch-12";
import { medicareBatch13Articles } from "@/lib/articles/data/medicare-batch-13";
import { medicareBatch14Articles } from "@/lib/articles/data/medicare-batch-14";
import { medicareBatch15Articles } from "@/lib/articles/data/medicare-batch-15";
import { medicareBatch16Articles } from "@/lib/articles/data/medicare-batch-16";
import { medicareBatch17Articles } from "@/lib/articles/data/medicare-batch-17";
import { medicareBatch18Articles } from "@/lib/articles/data/medicare-batch-18";
import { medicareBatch19Articles } from "@/lib/articles/data/medicare-batch-19";
import { medicareBatch20Articles } from "@/lib/articles/data/medicare-batch-20";
import { medicareBatch21Articles } from "@/lib/articles/data/medicare-batch-21";
import { keywordBatch1Articles } from "@/lib/articles/data/keyword-batch-1";
import { keywordBatch2Articles } from "@/lib/articles/data/keyword-batch-2";
import { keywordBatch3Articles } from "@/lib/articles/data/keyword-batch-3";
import { keywordBatch4Articles } from "@/lib/articles/data/keyword-batch-4";
import { keywordBatch5Articles } from "@/lib/articles/data/keyword-batch-5";
import { keywordBatch6Articles } from "@/lib/articles/data/keyword-batch-6";
import { keywordBatch7Articles } from "@/lib/articles/data/keyword-batch-7";
import { keywordBatch8Articles } from "@/lib/articles/data/keyword-batch-8";
import { keywordBatch9Articles } from "@/lib/articles/data/keyword-batch-9";
import { keywordBatch10Articles } from "@/lib/articles/data/keyword-batch-10";
import { keywordBatch11Articles } from "@/lib/articles/data/keyword-batch-11";
import { keywordBatch12Articles } from "@/lib/articles/data/keyword-batch-12";
import { keywordBatch13Articles } from "@/lib/articles/data/keyword-batch-13";
import { keywordBatch14Articles } from "@/lib/articles/data/keyword-batch-14";
import { keywordBatch15Articles } from "@/lib/articles/data/keyword-batch-15";
import { keywordBatch16Articles } from "@/lib/articles/data/keyword-batch-16";
import { keywordBatch17Articles } from "@/lib/articles/data/keyword-batch-17";
import { keywordBatch18Articles } from "@/lib/articles/data/keyword-batch-18";
import { keywordBatch19Articles } from "@/lib/articles/data/keyword-batch-19";
import { keywordBatch20Articles } from "@/lib/articles/data/keyword-batch-20";
import { keywordBatch21Articles } from "@/lib/articles/data/keyword-batch-21";
import { keywordBatch22Articles } from "@/lib/articles/data/keyword-batch-22";
import { keywordBatch23Articles } from "@/lib/articles/data/keyword-batch-23";
import { keywordBatch24Articles } from "@/lib/articles/data/keyword-batch-24";
import { keywordBatch25Articles } from "@/lib/articles/data/keyword-batch-25";
import { keywordBatch26Articles } from "@/lib/articles/data/keyword-batch-26";
import { keywordBatch27Articles } from "@/lib/articles/data/keyword-batch-27";
import { keywordBatch28Articles } from "@/lib/articles/data/keyword-batch-28";
import { keywordBatch29Articles } from "@/lib/articles/data/keyword-batch-29";
import { keywordBatch30Articles } from "@/lib/articles/data/keyword-batch-30";
import { keywordBatch31Articles } from "@/lib/articles/data/keyword-batch-31";
import { keywordBatch32Articles } from "@/lib/articles/data/keyword-batch-32";
import { keywordBatch33Articles } from "@/lib/articles/data/keyword-batch-33";
import { keywordBatch34Articles } from "@/lib/articles/data/keyword-batch-34";
import { keywordBatch35Articles } from "@/lib/articles/data/keyword-batch-35";
import { keywordBatch36Articles } from "@/lib/articles/data/keyword-batch-36";
import { keywordBatch37Articles } from "@/lib/articles/data/keyword-batch-37";
import { keywordBatch38Articles } from "@/lib/articles/data/keyword-batch-38";
import { keywordBatch39Articles } from "@/lib/articles/data/keyword-batch-39";
import { keywordBatch40Articles } from "@/lib/articles/data/keyword-batch-40";
import { keywordBatch41Articles } from "@/lib/articles/data/keyword-batch-41";
import { keywordBatch42Articles } from "@/lib/articles/data/keyword-batch-42";
import { keywordBatch43Articles } from "@/lib/articles/data/keyword-batch-43";
import { keywordBatch44Articles } from "@/lib/articles/data/keyword-batch-44";
import { keywordBatch45Articles } from "@/lib/articles/data/keyword-batch-45";
import { keywordBatch46Articles } from "@/lib/articles/data/keyword-batch-46";
import { contractorBatch1Articles } from "@/lib/articles/data/contractor-batch-1";
import { contractorBatch2Articles } from "@/lib/articles/data/contractor-batch-2";
import { contractorBatch3Articles } from "@/lib/articles/data/contractor-batch-3";
import { contractorBatch4Articles } from "@/lib/articles/data/contractor-batch-4";
import { contractorBatch5Articles } from "@/lib/articles/data/contractor-batch-5";
import { leadgenPillar1Articles } from "@/lib/articles/data/leadgen-pillar-1";
import { leadgenPillar2Articles } from "@/lib/articles/data/leadgen-pillar-2";
import { leadgenPillar3Articles } from "@/lib/articles/data/leadgen-pillar-3";
import { leadgenPillar4Articles } from "@/lib/articles/data/leadgen-pillar-4";
import { leadgenPillar5Articles } from "@/lib/articles/data/leadgen-pillar-5";
import { leadgenPillar6Articles } from "@/lib/articles/data/leadgen-pillar-6";
import { leadgenPillar7Articles } from "@/lib/articles/data/leadgen-pillar-7";
import { leadgenPillar8Articles } from "@/lib/articles/data/leadgen-pillar-8";
import { leadgenPillar9Articles } from "@/lib/articles/data/leadgen-pillar-9";
import { leadgenPillar10Articles } from "@/lib/articles/data/leadgen-pillar-10";
import { competitorMatch01Articles } from "@/lib/articles/data/competitor-match-01";
import { competitorMatch02Articles } from "@/lib/articles/data/competitor-match-02";
import { competitorMatch03Articles } from "@/lib/articles/data/competitor-match-03";
import { competitorMatch04Articles } from "@/lib/articles/data/competitor-match-04";
import { competitorMatch05Articles } from "@/lib/articles/data/competitor-match-05";
import { competitorMatch06Articles } from "@/lib/articles/data/competitor-match-06";
import { competitorMatch07Articles } from "@/lib/articles/data/competitor-match-07";
import { competitorMatch08Articles } from "@/lib/articles/data/competitor-match-08";
import { competitorMatch09Articles } from "@/lib/articles/data/competitor-match-09";
import { competitorMatch10Articles } from "@/lib/articles/data/competitor-match-10";
import { competitorMatch11Articles } from "@/lib/articles/data/competitor-match-11";
import { competitorMatch12Articles } from "@/lib/articles/data/competitor-match-12";
import { competitorMatch13Articles } from "@/lib/articles/data/competitor-match-13";
import { competitorMatch14Articles } from "@/lib/articles/data/competitor-match-14";
import { competitorMatch15Articles } from "@/lib/articles/data/competitor-match-15";
import { competitorMatch16Articles } from "@/lib/articles/data/competitor-match-16";
import { competitorMatch17Articles } from "@/lib/articles/data/competitor-match-17";
import { competitorMatch18Articles } from "@/lib/articles/data/competitor-match-18";
import { competitorMatch19Articles } from "@/lib/articles/data/competitor-match-19";

export type { Article, ArticleBlock } from "@/lib/articles/types";

export const articles: Article[] = [
  ...homeServicesArticles,
  ...lawFirmMarketingArticles,
  ...personalInjuryArticles,
  ...legalGuidesArticles,
  ...marketingChannelsArticles,
  ...practiceAreaLeadsArticles,
  ...practiceAreaLeads2Articles,
  ...cityStatePagesArticles,
  ...leadGenGlossaryArticles,
  ...marketingTacticsArticles,
  ...seoDeepDiveArticles,
  ...consumerGuidesArticles,
  ...seoSynonymsArticles,
  ...findNewClientsClusterArticles,
  ...divorceSubnichesArticles,
  ...carAccidentSubnichesArticles,
  ...accidentSubtypes2Articles,
  ...brandReputationArticles,
  ...intakeConversionArticles,
  ...ppcClusterArticles,
  ...ppcCluster2Articles,
  ...ppcCluster3Articles,
  ...socialMediaClusterArticles,
  ...cityStatePages2Articles,
  ...cityStatePages3Articles,
  ...firmGrowthArticles,
  ...leadPricingArticles,
  ...immigrationClusterArticles,
  ...toolsBudgetArticles,
  ...bankruptcyClusterArticles,
  ...findNewClientsCluster2Articles,
  ...cityStatePages4Articles,
  ...divorceLeadEconomicsArticles,
  ...piLeadEconomicsArticles,
  ...agencySelectionArticles,
  ...leadCampaignBasicsArticles,
  ...leadResponseBasicsArticles,
  ...leadBuyingBasicsArticles,
  ...channelBasicsArticles,
  ...miscTopics1Articles,
  ...miscTopics2Articles,
  ...roiTrackingArticles,
  ...miscTopics3Articles,
  ...miscTopics4Articles,
  ...miscTopics5Articles,
  ...miscTopics6Articles,
  ...miscTopics7Articles,
  ...miscTopics8Articles,
  ...chicagoPiClusterArticles,
  ...atlantaNycPiClusterArticles,
  ...westSouthPiClusterArticles,
  ...miamiTampaPhoenixPiClusterArticles,
  ...findNewClientsCluster3Articles,
  ...californiaPiPageArticles,
  ...divorceStates1Articles,
  ...divorceStates2Articles,
  ...divorceStates3Articles,
  ...divorceTxCitiesArticles,
  ...divorceFlCitiesArticles,
  ...divorceCaCitiesArticles,
  ...divorceMoreCitiesArticles,
  ...divorceHighAssetClusterArticles,
  ...divorceNicheCluster2Articles,
  ...divorceNicheCluster3Articles,
  ...divorceCollaborativeClusterArticles,
  ...divorceLeadTypeClusterArticles,
  ...divorceLeadTypeCluster2Articles,
  ...divorceLeadTypeCluster3Articles,
  ...divorceLeadTypeCluster4Articles,
  ...divorceRemainingCities1Articles,
  ...divorceRemainingCities2Articles,
  ...divorceNyStateClusterArticles,
  ...divorceNyStateCluster2Articles,
  ...divorceProvenGrowthClusterArticles,
  ...divorceProvenGrowthCluster2Articles,
  ...divorceTxFlCaIlClusterArticles,
  ...marketingListicles1Articles,
  ...marketingListicles2Articles,
  ...marketingListicles3Articles,
  ...findNewClientsCluster4Articles,
  ...findNewClientsCluster5Articles,
  ...findNewClientsCluster6Articles,
  ...findNewClientsCluster7Articles,
  ...findNewClientsCluster8Articles,
  ...findNewClientsCluster9Articles,
  ...findNewClientsCluster10Articles,
  ...findNewClientsCluster11Articles,
  ...findNewClientsCluster12Articles,
  ...listicleCluster1Articles,
  ...listicleCluster2Articles,
  ...listicleCluster3Articles,
  ...piStrategicGuides1Articles,
  ...listicleCluster4Articles,
  ...listicleCluster5Articles,
  ...piStrategicGuides2Articles,
  ...piStrategicGuides3Articles,
  ...piStrategicGuides4Articles,
  ...piMiscCluster1Articles,
  ...piCityRemaining1Articles,
  ...piCityRemaining2Articles,
  ...carAccidentStrategicGuidesArticles,
  ...piBuyingGuidesArticles,
  ...rideshareDuplicatesArticles,
  ...familyLawClientAcquisitionArticles,
  ...alimonyClusterArticles,
  ...attorneyGlossary1Articles,
  ...attorneyGlossary2Articles,
  ...attorneyGlossary3Articles,
  ...attorneyGlossary4Articles,
  ...attorneyGlossary5Articles,
  ...attorneyGlossary6Articles,
  ...attorneyGlossary7Articles,
  ...attorneyGlossary8Articles,
  ...bestXCluster1Articles,
  ...bestXCluster2Articles,
  ...bestXCluster3Articles,
  ...bestXCluster4Articles,
  ...bestXCluster5Articles,
  ...bestXCluster6Articles,
  ...bestXCluster7Articles,
  ...bestXCluster8Articles,
  ...bestXCluster9Articles,
  ...buyPiLeadsCluster1Articles,
  ...buyPiLeadsCluster2Articles,
  ...buyPiLeadsCluster3Articles,
  ...buyPiLeadsCluster4Articles,
  ...buildASystemClusterArticles,
  ...piCostCluster1Articles,
  ...piCostCluster2Articles,
  ...miscBatch1Articles,
  ...miscBatch2Articles,
  ...miscBatch3Articles,
  ...miscBatch4Articles,
  ...miscBatch5Articles,
  ...miscBatch6Articles,
  ...landingPageOptimizationArticles,
  ...miscBatch7Articles,
  ...miscBatch8Articles,
  ...miscBatch9Articles,
  ...miscBatch10Articles,
  ...miscBatch11Articles,
  ...miscBatch12Articles,
  ...exclusiveXCluster1Articles,
  ...exclusiveXCluster2Articles,
  ...exclusiveXCluster3Articles,
  ...exclusiveXCluster4Articles,
  ...exclusiveXCluster5Articles,
  ...exclusiveXCluster6Articles,
  ...exclusiveXCluster7Articles,
  ...exclusiveXCluster8Articles,
  ...miscBatch13Articles,
  ...pipelineManagementArticles,
  ...miscBatch14Articles,
  ...miscBatch15Articles,
  ...onlineMarketingArticles,
  ...miscBatch16Articles,
  ...miscBatch17Articles,
  ...miscBatch18Articles,
  ...miscBatch19Articles,
  ...miscBatch20Articles,
  ...divorceLeadsCluster1Articles,
  ...divorceLeadsCluster2Articles,
  ...piDivorceCluster1Articles,
  ...piDivorceCityCluster1Articles,
  ...piDivorceCityCluster2Articles,
  ...miscBatch21Articles,
  ...howACluster1Articles,
  ...howACluster2Articles,
  ...howLawyersCluster1Articles,
  ...howLawyersCluster2Articles,
  ...howPiCluster1Articles,
  ...howToAcquireConvertCluster1Articles,
  ...howToCluster1Articles,
  ...howToCluster2Articles,
  ...howToGenerateConvertCluster1Articles,
  ...howToGenerateConvertCluster2Articles,
  ...howToGenerateConvertCluster3Articles,
  ...howToGenerateCluster1Articles,
  ...howToGenerateCluster2Articles,
  ...howToGenerateCluster3Articles,
  ...howToGetCluster1Articles,
  ...howToGetCluster2Articles,
  ...howToIdentifyCluster1Articles,
  ...miscBatch22Articles,
  ...batch100_1Articles,
  ...batch100_2Articles,
  ...batch100_3Articles,
  ...batch100_4Articles,
  ...batch100_5Articles,
  ...batch100_6Articles,
  ...batch100_7Articles,
  ...batch100_8Articles,
  ...batch100_9Articles,
  ...batch100_10Articles,
  ...batch100_11Articles,
  ...batch100_12Articles,
  ...medicareBatch1Articles,
  ...medicareBatch2Articles,
  ...medicareBatch3Articles,
  ...medicareBatch4Articles,
  ...medicareBatch5Articles,
  ...medicareBatch6Articles,
  ...medicareBatch7Articles,
  ...medicareBatch8Articles,
  ...medicareBatch9Articles,
  ...medicareBatch10Articles,
  ...medicareBatch11Articles,
  ...medicareBatch12Articles,
  ...medicareBatch13Articles,
  ...medicareBatch14Articles,
  ...medicareBatch15Articles,
  ...medicareBatch16Articles,
  ...medicareBatch17Articles,
  ...medicareBatch18Articles,
  ...medicareBatch19Articles,
  ...medicareBatch20Articles,
  ...medicareBatch21Articles,
  ...keywordBatch1Articles,
  ...keywordBatch2Articles,
  ...keywordBatch3Articles,
  ...keywordBatch4Articles,
  ...keywordBatch5Articles,
  ...keywordBatch6Articles,
  ...keywordBatch7Articles,
  ...keywordBatch8Articles,
  ...keywordBatch9Articles,
  ...keywordBatch10Articles,
  ...keywordBatch11Articles,
  ...keywordBatch12Articles,
  ...keywordBatch13Articles,
  ...keywordBatch14Articles,
  ...keywordBatch15Articles,
  ...keywordBatch16Articles,
  ...keywordBatch17Articles,
  ...keywordBatch18Articles,
  ...keywordBatch19Articles,
  ...keywordBatch20Articles,
  ...keywordBatch21Articles,
  ...keywordBatch22Articles,
  ...keywordBatch23Articles,
  ...keywordBatch24Articles,
  ...keywordBatch25Articles,
  ...keywordBatch26Articles,
  ...keywordBatch27Articles,
  ...keywordBatch28Articles,
  ...keywordBatch29Articles,
  ...keywordBatch30Articles,
  ...keywordBatch31Articles,
  ...keywordBatch32Articles,
  ...keywordBatch33Articles,
  ...keywordBatch34Articles,
  ...keywordBatch35Articles,
  ...keywordBatch36Articles,
  ...keywordBatch37Articles,
  ...keywordBatch38Articles,
  ...keywordBatch39Articles,
  ...keywordBatch40Articles,
  ...keywordBatch41Articles,
  ...keywordBatch42Articles,
  ...keywordBatch43Articles,
  ...keywordBatch44Articles,
  ...keywordBatch45Articles,
  ...keywordBatch46Articles,
  ...contractorBatch1Articles,
  ...contractorBatch2Articles,
  ...contractorBatch3Articles,
  ...contractorBatch4Articles,
  ...contractorBatch5Articles,
  ...leadgenPillar1Articles,
  ...leadgenPillar2Articles,
  ...leadgenPillar3Articles,
  ...leadgenPillar4Articles,
  ...leadgenPillar5Articles,
  ...leadgenPillar6Articles,
  ...leadgenPillar7Articles,
  ...leadgenPillar8Articles,
  ...leadgenPillar9Articles,
  ...leadgenPillar10Articles,
  ...competitorMatch01Articles,
  ...competitorMatch02Articles,
  ...competitorMatch03Articles,
  ...competitorMatch04Articles,
  ...competitorMatch05Articles,
  ...competitorMatch06Articles,
  ...competitorMatch07Articles,
  ...competitorMatch08Articles,
  ...competitorMatch09Articles,
  ...competitorMatch10Articles,
  ...competitorMatch11Articles,
  ...competitorMatch12Articles,
  ...competitorMatch13Articles,
  ...competitorMatch14Articles,
  ...competitorMatch15Articles,
  ...competitorMatch16Articles,
  ...competitorMatch17Articles,
  ...competitorMatch18Articles,
  ...competitorMatch19Articles,
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getCategories(): string[] {
  return Array.from(new Set(articles.map((a) => a.category)));
}

export function getArticlesByCategories(categories: string[], limit = 6): Article[] {
  return articles.filter((a) => categories.includes(a.category)).slice(0, limit);
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  if (article.relatedSlugs?.length) {
    const resolved = article.relatedSlugs
      .map((slug) => getArticleBySlug(slug))
      .filter((a): a is Article => Boolean(a));
    if (resolved.length) return resolved.slice(0, limit);
  }
  return articles.filter((a) => a.category === article.category && a.slug !== article.slug).slice(0, limit);
}
