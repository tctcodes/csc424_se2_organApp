﻿using System;
using System.Collections.Generic;

namespace csc424_se2_organApp.Models
{
    public partial class Malig
    {
        public int MaligId { get; set; }
        public int? MalDonChemo { get; set; }
        public int? MalDonChemoTy { get; set; }
        public int? MalDonDgnDt { get; set; }
        public int? MalDonImmuno { get; set; }
        public int? MalDonImmunoStat { get; set; }
        public int? MalDonImmunoTy { get; set; }
        public int? MalDonOutcome { get; set; }
        public int? MalDonRadiat { get; set; }
        public int? MalDonSurg { get; set; }
        public string MalDonTumorTy { get; set; }
        public int? MalNatOrgKi { get; set; }
        public int? MalNatOrgLi { get; set; }
        public int? MalNatOrgLu { get; set; }
        public int? MalPostxBasNum { get; set; }
        public int? MalPostxBasSiteExtrem { get; set; }
        public int? MalPostxBasSiteLipheadneck { get; set; }
        public int? MalPostxBasSiteTrunk { get; set; }
        public string MalPostxBasSkinSites { get; set; }
        public int? MalPostxBasSpreadNodes { get; set; }
        public int? MalPostxBasSpreadNone { get; set; }
        public int? MalPostxBasSpreadOther { get; set; }
        public int? MalPostxBrainTumorTy { get; set; }
        public int? MalPostxColorectalDukes { get; set; }
        public int? MalPostxKaposiCutaneous { get; set; }
        public int? MalPostxKaposiVisc { get; set; }
        public int? MalPostxLeukTy { get; set; }
        public string MalPostxLuCellTy { get; set; }
        public int? MalPostxMelNum { get; set; }
        public int? MalPostxMelSiteExtrem { get; set; }
        public int? MalPostxMelSiteLipheadneck { get; set; }
        public int? MalPostxMelSiteTrunk { get; set; }
        public string MalPostxMelSkinSites { get; set; }
        public int? MalPostxMelSpreadNodes { get; set; }
        public int? MalPostxMelSpreadNone { get; set; }
        public int? MalPostxMelSpreadOther { get; set; }
        public int? MalPostxMetastLiTy { get; set; }
        public string MalPostxOtherCancerSites { get; set; }
        public int? MalPostxOutcome { get; set; }
        public int? MalPostxPrimeHepatTy { get; set; }
        public string MalPostxRenalSites { get; set; }
        public string MalPostxSarcomaSites { get; set; }
        public int? MalPostxSarcomaTy { get; set; }
        public int? MalPostxSquNum { get; set; }
        public int? MalPostxSquSiteExtrem { get; set; }
        public int? MalPostxSquSiteLipheadneck { get; set; }
        public int? MalPostxSquSiteTrunk { get; set; }
        public string MalPostxSquSkinSites { get; set; }
        public int? MalPostxSquSpreadNodes { get; set; }
        public int? MalPostxSquSpreadNone { get; set; }
        public int? MalPostxSquSpreadOther { get; set; }
        public int? MalPostxTumorBasSkin { get; set; }
        public int? MalPostxTumorBladder { get; set; }
        public int? MalPostxTumorBrain { get; set; }
        public int? MalPostxTumorBreast { get; set; }
        public int? MalPostxTumorColorectal { get; set; }
        public int? MalPostxTumorEsophagus { get; set; }
        public int? MalPostxTumorLarynx { get; set; }
        public int? MalPostxTumorLeuk { get; set; }
        public int? MalPostxTumorLu { get; set; }
        public int? MalPostxTumorMelSkin { get; set; }
        public int? MalPostxTumorMetastLi { get; set; }
        public int? MalPostxTumorOtherCancer { get; set; }
        public int? MalPostxTumorOvarian { get; set; }
        public int? MalPostxTumorPa { get; set; }
        public int? MalPostxTumorPrimeHepat { get; set; }
        public int? MalPostxTumorPrimeUnk { get; set; }
        public int? MalPostxTumorProstate { get; set; }
        public int? MalPostxTumorRenal { get; set; }
        public int? MalPostxTumorSarcoma { get; set; }
        public int? MalPostxTumorSmIn { get; set; }
        public int? MalPostxTumorSquSkin { get; set; }
        public int? MalPostxTumorStomach { get; set; }
        public int? MalPostxTumorTesticular { get; set; }
        public int? MalPostxTumorThyroid { get; set; }
        public int? MalPostxTumorTongueThroat { get; set; }
        public int? MalPostxTumorUterus { get; set; }
        public int? MalPostxTumorVulvaPenis { get; set; }
        public int? MalPostxUterusTy { get; set; }
        public int? MalPretxChemo { get; set; }
        public int? MalPretxChemoTy { get; set; }
        public int? MalPretxDt { get; set; }
        public int? MalPretxDukes { get; set; }
        public int? MalPretxLeukTy { get; set; }
        public int? MalPretxRadiat { get; set; }
        public int? MalPretxSkinNum { get; set; }
        public int? MalPretxSurg { get; set; }
        public int? MalPretxSurgTy { get; set; }
        public int? MalPretxTumorTy { get; set; }
        public string MalPtldAaStage { get; set; }
        public string MalPtldAnatomyNodes { get; set; }
        public string MalPtldAnatomySite { get; set; }
        public string MalPtldAntivrl { get; set; }
        public string MalPtldAntivrl1Bestresp { get; set; }
        public int? MalPtldAntivrl1Ty { get; set; }
        public string MalPtldAntivrl2Bestresp { get; set; }
        public int? MalPtldAntivrl2Ty { get; set; }
        public string MalPtldChemo { get; set; }
        public string MalPtldChemo1Bestresp { get; set; }
        public int? MalPtldChemo1Ty { get; set; }
        public string MalPtldChemo2Bestresp { get; set; }
        public int? MalPtldChemo2Ty { get; set; }
        public int? MalPtldClonalityTy { get; set; }
        public int? MalPtldDgnDt { get; set; }
        public string MalPtldEbvStat { get; set; }
        public int? MalPtldExnodalAllograft { get; set; }
        public int? MalPtldExnodalBoneMarrow { get; set; }
        public int? MalPtldExnodalCns { get; set; }
        public int? MalPtldExnodalColon { get; set; }
        public int? MalPtldExnodalLi { get; set; }
        public int? MalPtldExnodalLu { get; set; }
        public int? MalPtldExnodalSmIn { get; set; }
        public int? MalPtldExnodalStomach { get; set; }
        public string MalPtldImmuno { get; set; }
        public string MalPtldImmunoBestresp { get; set; }
        public int? MalPtldImmunoTy { get; set; }
        public int? MalPtldPathologyTy { get; set; }
        public int? MalPtldPredomCellTy { get; set; }
        public string MalPtldRadiat { get; set; }
        public string MalPtldRadiatBestresp { get; set; }
        public string MalPtldReducImmuno { get; set; }
        public string MalPtldReducImmunoBestresp { get; set; }
        public string MalPtldSurgBestresp { get; set; }
        public int? MalPtldSurgTy { get; set; }
        public int? MalRecurChemo { get; set; }
        public int? MalRecurChemoTy { get; set; }
        public int? MalRecurDt { get; set; }
        public int? MalRecurImmuno { get; set; }
        public int? MalRecurImmunoStat { get; set; }
        public int? MalRecurImmunoTy { get; set; }
        public int? MalRecurOutcome { get; set; }
        public int? MalRecurRadiat { get; set; }
        public int? MalRecurSiteAdjOrg { get; set; }
        public int? MalRecurSiteLymph { get; set; }
        public int? MalRecurSiteMetast { get; set; }
        public int? MalRecurSitePrimeOrg { get; set; }
        public int? MalRecurSurg { get; set; }
        public int? MalRecurSurgTy { get; set; }
        public string TflNatOrgKiTy { get; set; }
        public string TflNatOrgLiTy { get; set; }
        public string TflNatOrgLuTy { get; set; }
        public string TflPrevTumorLymphTy { get; set; }
        public string TflPtldAntivrlDrug1 { get; set; }
        public string TflPtldAntivrlDrug2 { get; set; }
        public string TflTumOthCancerTy { get; set; }
        public int? TrrFolId { get; set; }

        public virtual TxfLi TrrFol { get; set; }
        public virtual Treatment Treatment { get; set; }
    }
}