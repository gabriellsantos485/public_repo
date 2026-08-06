(function () {
  "use strict";

  var WEBSITE_ID = "3";
  var CHAVE_STORAGE = "bannercookies_consentimento_" + WEBSITE_ID;
  var NOME_COOKIE = "bannercookies_consentimento_" + WEBSITE_ID;
  var CATEGORIAS = [{"chave": "necessario", "titulo": "Necessários", "descricao": "Essenciais para o funcionamento do site (sessão, segurança, carrinho de compras). Não podem ser desativados.", "obrigatorio": true, "servicos": [{"chave": "piano_io", "nome": "piano.io", "dominio": "piano.io", "cookies": [["__cf_bm", "/", ".piano.io"]]}, {"chave": "linkedin_com", "nome": "linkedin.com", "dominio": "linkedin.com", "cookies": [["__cf_bm", "/", ".linkedin.com"]]}, {"chave": "temu_com", "nome": "temu.com", "dominio": "temu.com", "cookies": [["__cf_bm", "/", ".temu.com"]]}, {"chave": "uol_com_br", "nome": "uol.com.br", "dominio": "uol.com.br", "cookies": [["__cf_bm", "/", ".dna.uol.com.br"], ["INGRESSCOOKIE", "/", "produtos.uol.com.br"]]}]}, {"chave": "analitico", "titulo": "Estatísticas", "descricao": "Ajudam a entender como os visitantes usam o site (métricas de uso, mapas de calor).", "obrigatorio": false, "servicos": [{"chave": "uol_com_br", "nome": "uol.com.br", "dominio": "uol.com.br", "cookies": [["_gid", "/", ".uol.com.br"], ["_ga_BS4Q6LCGB1", "/", ".uol.com.br"], ["_clck", "/", ".uol.com.br"], ["_ga", "/", ".uol.com.br"], ["_ga_3PRZV9C53Y", "/", ".uol.com.br"], ["_clsk", "/", ".uol.com.br"]]}, {"chave": "clarity_ms", "nome": "clarity.ms", "dominio": "clarity.ms", "cookies": [["CLID", "/", "www.clarity.ms"], ["SM", "/", ".c.clarity.ms"], ["MUID", "/", ".clarity.ms"], ["MR", "/", ".c.clarity.ms"], ["ANONCHK", "/", ".c.clarity.ms"]]}]}, {"chave": "publicidade", "titulo": "Marketing", "descricao": "Usados para exibir anúncios relevantes e medir campanhas publicitárias.", "obrigatorio": false, "servicos": [{"chave": "criteo_com", "nome": "criteo.com", "dominio": "criteo.com", "cookies": [["uid", "/", ".criteo.com"], ["cto_bundle", "/", ".criteo.com"]]}, {"chave": "doubleclick_net", "nome": "doubleclick.net", "dominio": "doubleclick.net", "cookies": [["IDE", "/", ".doubleclick.net"]]}, {"chave": "outbrain_com", "nome": "outbrain.com", "dominio": "outbrain.com", "cookies": [["obuid", "/", ".outbrain.com"]]}, {"chave": "adsrvr_org", "nome": "adsrvr.org", "dominio": "adsrvr.org", "cookies": [["TDID", "/", ".adsrvr.org"], ["TDCPM", "/", ".adsrvr.org"]]}, {"chave": "rlcdn_com", "nome": "rlcdn.com", "dominio": "rlcdn.com", "cookies": [["rlas3", "/", ".rlcdn.com"], ["pxrc", "/", ".rlcdn.com"]]}, {"chave": "linkedin_com", "nome": "linkedin.com", "dominio": "linkedin.com", "cookies": [["bcookie", "/", ".linkedin.com"], ["lidc", "/", ".linkedin.com"]]}, {"chave": "uol_com_br", "nome": "uol.com.br", "dominio": "uol.com.br", "cookies": [["_fbp", "/", ".uol.com.br"]]}, {"chave": "bing_com", "nome": "bing.com", "dominio": "bing.com", "cookies": [["MUID", "/", ".bing.com"], ["MR", "/", ".c.bing.com"], ["SRM_B", "/", ".c.bing.com"]]}]}, {"chave": "nao_classificado", "titulo": "Outros", "descricao": "Cookies detectados que ainda não foram classificados. Recomendamos revisão manual.", "obrigatorio": false, "servicos": [{"chave": "jsuol_com_br", "nome": "jsuol.com.br", "dominio": "jsuol.com.br", "cookies": [["tp_cookie_test", "/modules/external/admanager", "tm.jsuol.com.br"]]}, {"chave": "youtube_com", "nome": "youtube.com", "dominio": "youtube.com", "cookies": [["YSC", "/", ".youtube.com"], ["VISITOR_INFO1_LIVE", "/", ".youtube.com"], ["VISITOR_PRIVACY_METADATA", "/", ".youtube.com"], ["__Secure-YNID", "/", ".youtube.com"], ["__Secure-ROLLOUT_TOKEN", "/", ".youtube.com"]]}, {"chave": "uol_com_br", "nome": "uol.com.br", "dominio": "uol.com.br", "cookies": [["UOLID", "/", ".udr.uol.com.br"], ["_scor_uid", "/", ".uol.com.br"], ["geoloc", "/", ".uol.com.br"], ["_pctx", "/", ".uol.com.br"], ["_pcid", "/", ".uol.com.br"], ["permutive-id", "/", ".uol.com.br"], ["_cb", "/", ".uol.com.br"], ["_chartbeat2", "/", ".uol.com.br"], ["_cb_svref", "/", ".uol.com.br"], ["__tbc", "/", ".uol.com.br"], ["__pat", "/", ".uol.com.br"], ["__pvi", "/", ".uol.com.br"], ["xbc", "/", ".uol.com.br"], ["_pcus", "/", ".uol.com.br"], ["cto_bundle", "/", ".uol.com.br"], ["cto_bidid", "/", ".uol.com.br"], ["cX_P", "/", ".uol.com.br"], ["__gads", "/", ".uol.com.br"], ["__gpi", "/", ".uol.com.br"], ["__eoi", "/", ".uol.com.br"], ["_pubcid", "/", ".uol.com.br"], ["_cc_id", "/", ".uol.com.br"], ["panoramaId_expiry", "/", ".uol.com.br"], ["cX_G", "/", ".uol.com.br"], ["_lr_geo_location_state", "/", "www.uol.com.br"], ["_lr_geo_location", "/", "www.uol.com.br"], ["FCCDCF", "/", ".uol.com.br"], ["FCNEC", "/", ".uol.com.br"], ["_chartbeat4", "/", ".uol.com.br"], ["_mkto_trk", "/", ".uol.com.br"]]}, {"chave": "scorecardresearch_com", "nome": "scorecardresearch.com", "dominio": "scorecardresearch.com", "cookies": [["UID", "/", ".scorecardresearch.com"], ["XID", "/", ".scorecardresearch.com"]]}, {"chave": "prmutv_co", "nome": "prmutv.co", "dominio": "prmutv.co", "cookies": [["pxid", "/", ".4b91477e-f67b-4d81-86db-a9742bd41e9c.prmutv.co"]]}, {"chave": "seedtag_com", "nome": "seedtag.com", "dominio": "seedtag.com", "cookies": [["st_ssp", "/", ".seedtag.com"], ["st_uid", "/", ".seedtag.com"], ["st_cs", "/", ".seedtag.com"], ["st_csd", "/", ".seedtag.com"], ["st_par", "/", ".seedtag.com"]]}, {"chave": "rubiconproject_com", "nome": "rubiconproject.com", "dominio": "rubiconproject.com", "cookies": [["khaos", "/", ".rubiconproject.com"], ["khaos_p", "/", ".rubiconproject.com"], ["receive-cookie-deprecation", "/", ".rubiconproject.com"], ["audit_p", "/", ".rubiconproject.com"], ["audit", "/", ".rubiconproject.com"]]}, {"chave": "crwdcntrl_net", "nome": "crwdcntrl.net", "dominio": "crwdcntrl.net", "cookies": [["_cc_dc", "/", ".crwdcntrl.net"], ["_cc_id", "/", ".crwdcntrl.net"]]}, {"chave": "cxense_com", "nome": "cxense.com", "dominio": "cxense.com", "cookies": [["gckp", "/", ".cxense.com"]]}, {"chave": "smartadserver_com", "nome": "smartadserver.com", "dominio": "smartadserver.com", "cookies": [["pbw", "/", ".smartadserver.com"], ["TestIfCookieP", "/", ".smartadserver.com"], ["receive-cookie-deprecation", "/", ".smartadserver.com"], ["sasd", "/", ".smartadserver.com"], ["pid", "/", ".smartadserver.com"], ["sasd2", "/", ".smartadserver.com"], ["csync", "/", ".smartadserver.com"]]}, {"chave": "amazon-adsystem_com", "nome": "amazon-adsystem.com", "dominio": "amazon-adsystem.com", "cookies": [["ad-id", "/", ".amazon-adsystem.com"], ["ad-privacy", "/", ".amazon-adsystem.com"]]}, {"chave": "mygaru_com", "nome": "mygaru.com", "dominio": "mygaru.com", "cookies": [["iuid", "/", ".mygaru.com"]]}, {"chave": "media_net", "nome": "media.net", "dominio": "media.net", "cookies": [["visitor-id", "/", ".media.net"], ["data-pbs", "/", ".media.net"]]}, {"chave": "everesttech_net", "nome": "everesttech.net", "dominio": "everesttech.net", "cookies": [["everest_g_v2", "/", ".everesttech.net"]]}, {"chave": "openx_net", "nome": "openx.net", "dominio": "openx.net", "cookies": [["i", "/", ".openx.net"], ["pd", "/", ".openx.net"]]}, {"chave": "connectad_io", "nome": "connectad.io", "dominio": "connectad.io", "cookies": [["uid", "/", ".connectad.io"], ["id", "/", ".connectad.io"]]}, {"chave": "simpli_fi", "nome": "simpli.fi", "dominio": "simpli.fi", "cookies": [["suid", "/", ".simpli.fi"]]}, {"chave": "onetag-sys_com", "nome": "onetag-sys.com", "dominio": "onetag-sys.com", "cookies": [["OTP", "/", ".onetag-sys.com"]]}, {"chave": "smaato_net", "nome": "smaato.net", "dominio": "smaato.net", "cookies": [["SCM", "/", ".smaato.net"], ["SCMaps", "/", ".smaato.net"], ["SCMrktn", "/", ".smaato.net"], ["SCMmf", "/", ".smaato.net"], ["SCM723", "/", ".smaato.net"], ["SCMs", "/", ".smaato.net"], ["SCM1172", "/", ".smaato.net"], ["SCMroqads", "/", ".smaato.net"], ["SCMsas", "/", ".smaato.net"]]}, {"chave": "startappnetwork_com", "nome": "startappnetwork.com", "dominio": "startappnetwork.com", "cookies": [["siouid", "/", ".startappnetwork.com"], ["siod-mxgufvoz", "/", ".startappnetwork.com"], ["siod-mzpiak2k", "/", ".startappnetwork.com"], ["siod-m6gu2kjc", "/", ".startappnetwork.com"], ["siod-m2xvubfy", "/", ".startappnetwork.com"], ["siod-mgitwnra", "/", ".startappnetwork.com"], ["siopnc", "/", ".startappnetwork.com"], ["siod-mgaui9c3", "/", ".startappnetwork.com"]]}, {"chave": "creativecdn_com", "nome": "creativecdn.com", "dominio": "creativecdn.com", "cookies": [["ts", "/", ".creativecdn.com"], ["g", "/", ".creativecdn.com"]]}, {"chave": "kargo_com", "nome": "kargo.com", "dominio": "kargo.com", "cookies": [["ktcid", "/", ".kargo.com"]]}, {"chave": "loopme_me", "nome": "loopme.me", "dominio": "loopme.me", "cookies": [["viewer_token", "/", ".csync.loopme.me"]]}, {"chave": "yieldmo_com", "nome": "yieldmo.com", "dominio": "yieldmo.com", "cookies": [["yieldmo_id", "/", ".yieldmo.com"], ["re_sync", "/", ".ads.yieldmo.com"]]}, {"chave": "bidr_io", "nome": "bidr.io", "dominio": "bidr.io", "cookies": [["bito", "/", ".bidr.io"], ["bitoIsSecure", "/", ".bidr.io"]]}, {"chave": "minutemedia-prebid_com", "nome": "minutemedia-prebid.com", "dominio": "minutemedia-prebid.com", "cookies": [["wrvUserID", "/", ".minutemedia-prebid.com"]]}, {"chave": "lijit_com", "nome": "lijit.com", "dominio": "lijit.com", "cookies": [["ljt_reader", "/", ".lijit.com"], ["ljtrtbexp", "/", ".lijit.com"]]}, {"chave": "sonobi_com", "nome": "sonobi.com", "dominio": "sonobi.com", "cookies": [["__uis", "/", ".go.sonobi.com"], ["__uin_z1", "/", ".go.sonobi.com"], ["__uir_z1", "/", ".go.sonobi.com"], ["__uin_mg", "/", ".go.sonobi.com"], ["__uir_mg", "/", ".go.sonobi.com"], ["__uin_a9", "/", ".go.sonobi.com"], ["__uir_a9", "/", ".go.sonobi.com"], ["__uin_cx", "/", ".go.sonobi.com"], ["__uir_cx", "/", ".go.sonobi.com"], ["HAPLB8G", "/", ".go.sonobi.com"], ["__uir_td", "/", ".go.sonobi.com"], ["__uin_td", "/", ".go.sonobi.com"], ["__uir_bs", "/", ".go.sonobi.com"], ["__uin_bs", "/", ".go.sonobi.com"], ["__uir_vt", "/", ".go.sonobi.com"], ["__uin_vt", "/", ".go.sonobi.com"], ["__uir_st", "/", ".go.sonobi.com"], ["__uin_st", "/", ".go.sonobi.com"], ["__uir_bw", "/", ".go.sonobi.com"], ["__uin_bw", "/", ".go.sonobi.com"]]}, {"chave": "adnxs_com", "nome": "adnxs.com", "dominio": "adnxs.com", "cookies": [["uids", "/", ".adnxs.com"], ["XANDR_PANID", "/", ".adnxs.com"], ["uuid2", "/", ".adnxs.com"], ["anj", "/", ".adnxs.com"]]}, {"chave": "360yield_com", "nome": "360yield.com", "dominio": "360yield.com", "cookies": [["tuuid", "/", ".360yield.com"], ["tuuid_lu", "/", ".360yield.com"]]}, {"chave": "rakuten_com", "nome": "rakuten.com", "dominio": "rakuten.com", "cookies": [["Rp", "/", ".rmp.rakuten.com"]]}, {"chave": "yellowblue_io", "nome": "yellowblue.io", "dominio": "yellowblue.io", "cookies": [["wrvUserID", "/", ".yellowblue.io"]]}, {"chave": "contextweb_com", "nome": "contextweb.com", "dominio": "contextweb.com", "cookies": [["INGRESSCOOKIE", "/", "bh.contextweb.com"], ["V", "/", ".contextweb.com"], ["VP", "/", ".contextweb.com"], ["pb_rtb_ev", "/", ".contextweb.com"], ["pb_rtb_ev_part", "/", ".contextweb.com"]]}, {"chave": "admanmedia_com", "nome": "admanmedia.com", "dominio": "admanmedia.com", "cookies": [["admtr", "/", ".admanmedia.com"], ["ac_r", "/", ".admanmedia.com"]]}, {"chave": "bfmio_com", "nome": "bfmio.com", "dominio": "bfmio.com", "cookies": [["__106_cid", "/", ".bfmio.com"], ["__bfio_sync", "/", ".bfmio.com"], ["__io_cid", "/", ".bfmio.com"], ["__141_cid", "/", ".bfmio.com"], ["__141_exp", "/", ".bfmio.com"], ["__157_cid", "/", ".bfmio.com"], ["__157_exp", "/", ".bfmio.com"]]}, {"chave": "blismedia_com", "nome": "blismedia.com", "dominio": "blismedia.com", "cookies": [["b", "/", ".blismedia.com"]]}, {"chave": "gumgum_com", "nome": "gumgum.com", "dominio": "gumgum.com", "cookies": [["vst", "/", ".gumgum.com"]]}, {"chave": "bidswitch_net", "nome": "bidswitch.net", "dominio": "bidswitch.net", "cookies": [["c", "/", ".bidswitch.net"], ["tuuid_lu", "/", ".bidswitch.net"], ["tuuid", "/", ".bidswitch.net"]]}, {"chave": "richaudience_com", "nome": "richaudience.com", "dominio": "richaudience.com", "cookies": [["pdid", "/", ".richaudience.com"], ["avcid-gdv-uid", "/", ".richaudience.com"], ["avcid-opx-uid", "/", ".richaudience.com"], ["avcid-eps-uid", "/", ".richaudience.com"], ["avcid-pmr-uid", "/", ".richaudience.com"]]}, {"chave": "turn_com", "nome": "turn.com", "dominio": "turn.com", "cookies": [["uid", "/", ".turn.com"]]}, {"chave": "sharethrough_com", "nome": "sharethrough.com", "dominio": "sharethrough.com", "cookies": [["stx_user_id", "/", ".sharethrough.com"]]}, {"chave": "cadent_com", "nome": "cadent.com", "dominio": "cadent.com", "cookies": [["uid", "/", ".ssp.cadent.com"], ["ps", "/", ".ssp.cadent.com"], ["apn_id", "/", ".ssp.cadent.com"], ["dt", "/", ".ssp.cadent.com"]]}, {"chave": "tapad_com", "nome": "tapad.com", "dominio": "tapad.com", "cookies": [["TapAd_TS", "/", ".tapad.com"], ["TapAd_DID", "/", ".tapad.com"], ["TapAd_3WAY_SYNCS", "/", ".tapad.com"]]}, {"chave": "yahoo_com", "nome": "yahoo.com", "dominio": "yahoo.com", "cookies": [["A3", "/", ".yahoo.com"], ["uids", "/", ".pbs.yahoo.com"], ["IDSYNC", "/", ".analytics.yahoo.com"]]}, {"chave": "sitescout_com", "nome": "sitescout.com", "dominio": "sitescout.com", "cookies": [["ssi", "/", ".sitescout.com"], ["_ssuma", "/", ".sitescout.com"]]}, {"chave": "adform_net", "nome": "adform.net", "dominio": "adform.net", "cookies": [["uid", "/", ".adform.net"], ["C", "/", ".adform.net"]]}, {"chave": "connatix_com", "nome": "connatix.com", "dominio": "connatix.com", "cookies": [["cnx_userId", "/", ".connatix.com"]]}, {"chave": "disqus_com", "nome": "disqus.com", "dominio": "disqus.com", "cookies": [["zeta-ssp-user-id", "/", ".disqus.com"]]}, {"chave": "stackadapt_com", "nome": "stackadapt.com", "dominio": "stackadapt.com", "cookies": [["sa-user-id", "/", "sync.srv.stackadapt.com"], ["sa-user-id", "/", ".srv.stackadapt.com"], ["sa-user-id-v2", "/", "sync.srv.stackadapt.com"], ["sa-user-id-v2", "/", ".srv.stackadapt.com"], ["sa-user-id-v3", "/", "sync.srv.stackadapt.com"], ["sa-user-id-v3", "/", ".srv.stackadapt.com"]]}, {"chave": "ipredictive_com", "nome": "ipredictive.com", "dominio": "ipredictive.com", "cookies": [["cu", "/", ".ipredictive.com"]]}, {"chave": "deepintent_com", "nome": "deepintent.com", "dominio": "deepintent.com", "cookies": [["CDIUSER", "/", ".deepintent.com"], ["CDIPARTNERS", "/", ".deepintent.com"]]}, {"chave": "pubmatic_com", "nome": "pubmatic.com", "dominio": "pubmatic.com", "cookies": [["KADUSERCOOKIE", "/", ".pubmatic.com"], ["KRTBCOOKIE_80", "/", ".pubmatic.com"], ["KRTBCOOKIE_148", "/", ".pubmatic.com"], ["KRTBCOOKIE_377", "/", ".pubmatic.com"], ["KRTBCOOKIE_1251", "/", ".pubmatic.com"], ["KRTBCOOKIE_452", "/", ".pubmatic.com"], ["DPSync4", "/", ".pubmatic.com"], ["KRTBCOOKIE_218", "/", ".pubmatic.com"], ["KRTBCOOKIE_860", "/", ".pubmatic.com"], ["KRTBCOOKIE_279", "/", ".pubmatic.com"], ["KRTBCOOKIE_188", "/", ".pubmatic.com"], ["KRTBCOOKIE_964", "/", ".pubmatic.com"], ["KRTBCOOKIE_18", "/", ".pubmatic.com"], ["KRTBCOOKIE_32", "/", ".pubmatic.com"], ["KRTBCOOKIE_22", "/", ".pubmatic.com"], ["KRTBCOOKIE_466", "/", ".pubmatic.com"], ["SyncRTB4", "/", ".pubmatic.com"], ["KRTBCOOKIE_740", "/", ".pubmatic.com"], ["KRTBCOOKIE_391", "/", ".pubmatic.com"], ["KRTBCOOKIE_153", "/", ".pubmatic.com"], ["KRTBCOOKIE_632", "/", ".pubmatic.com"], ["KRTBCOOKIE_1323", "/", ".pubmatic.com"], ["KRTBCOOKIE_57", "/", ".pubmatic.com"], ["KRTBCOOKIE_945", "/", ".pubmatic.com"], ["KRTBCOOKIE_27", "/", ".pubmatic.com"], ["KRTBCOOKIE_1481", "/", ".pubmatic.com"], ["KRTBCOOKIE_1540", "/", ".pubmatic.com"], ["KRTBCOOKIE_1515", "/", ".pubmatic.com"], ["KRTBCOOKIE_1253", "/", ".pubmatic.com"], ["KRTBCOOKIE_1278", "/", ".pubmatic.com"], ["KRTBCOOKIE_1531", "/", ".pubmatic.com"], ["KRTBCOOKIE_1466", "/", ".pubmatic.com"], ["KRTBCOOKIE_904", "/", ".pubmatic.com"], ["PugT", "/", ".pubmatic.com"], ["SPugT", "/", ".pubmatic.com"], ["chkChromeAb67Sec", "/", ".pubmatic.com"], ["pi", "/", ".pubmatic.com"], ["pubsyncexp", "/", ".ads.pubmatic.com"]]}, {"chave": "ctnsnet_com", "nome": "ctnsnet.com", "dominio": "ctnsnet.com", "cookies": [["cid_146122ed559541d1a8f559da9c4d8edd", "/", ".ctnsnet.com"]]}, {"chave": "adentifi_com", "nome": "adentifi.com", "dominio": "adentifi.com", "cookies": [["adtheorent[cuid]", "/", ".adentifi.com"]]}, {"chave": "unrulymedia_com", "nome": "unrulymedia.com", "dominio": "unrulymedia.com", "cookies": [["_rxuuid", "/", ".targeting.unrulymedia.com"]]}, {"chave": "demdex_net", "nome": "demdex.net", "dominio": "demdex.net", "cookies": [["demdex", "/", ".demdex.net"], ["dpm", "/", ".dpm.demdex.net"]]}, {"chave": "rqtrk_eu", "nome": "rqtrk.eu", "dominio": "rqtrk.eu", "cookies": [["browser_id", "/", ".rqtrk.eu"]]}, {"chave": "opera_com", "nome": "opera.com", "dominio": "opera.com", "cookies": [["OAU", "/", ".opera.com"]]}, {"chave": "fwmrm_net", "nome": "fwmrm.net", "dominio": "fwmrm.net", "cookies": [["_uid", "/", ".fwmrm.net"], ["dsp_64", "/", ".user-sync.fwmrm.net"], ["dsp_4", "/", ".user-sync.fwmrm.net"], ["dsp_97", "/", ".user-sync.fwmrm.net"], ["dsp_22", "/", ".user-sync.fwmrm.net"], ["dsp_20", "/", ".user-sync.fwmrm.net"], ["dsp_79", "/", ".user-sync.fwmrm.net"], ["dsp_55", "/", ".user-sync.fwmrm.net"], ["dsp_7", "/", ".user-sync.fwmrm.net"], ["dsp_71", "/", ".user-sync.fwmrm.net"], ["dsp_48", "/", ".user-sync.fwmrm.net"]]}, {"chave": "mfadsrvr_com", "nome": "mfadsrvr.com", "dominio": "mfadsrvr.com", "cookies": [["c", "/", ".mfadsrvr.com"], ["tuuid_lu", "/", ".mfadsrvr.com"], ["tuuid", "/", ".mfadsrvr.com"], ["ssh", "/", ".mfadsrvr.com"]]}, {"chave": "nrich_ai", "nome": "nrich.ai", "dominio": "nrich.ai", "cookies": [["_nauid", "/", ".nrich.ai"]]}, {"chave": "sportradarserving_com", "nome": "sportradarserving.com", "dominio": "sportradarserving.com", "cookies": [["zuuid", "/", ".sportradarserving.com"], ["c", "/", ".sportradarserving.com"], ["zuuid_lu", "/", ".sportradarserving.com"], ["zuuid_k", "/", ".sportradarserving.com"], ["zuuid_k_lu", "/", ".sportradarserving.com"]]}, {"chave": "creative-serving_com", "nome": "creative-serving.com", "dominio": "creative-serving.com", "cookies": [["c", "/", ".creative-serving.com"], ["tuuid_lu", "/", ".creative-serving.com"], ["tuuid", "/", ".creative-serving.com"]]}, {"chave": "quantserve_com", "nome": "quantserve.com", "dominio": "quantserve.com", "cookies": [["mc", "/", ".quantserve.com"], ["sp", "/", ".quantserve.com"]]}, {"chave": "rfihub_com", "nome": "rfihub.com", "dominio": "rfihub.com", "cookies": [["ruds", "/", ".rfihub.com"], ["rud", "/", ".rfihub.com"], ["eud", "/", ".rfihub.com"]]}, {"chave": "socdm_com", "nome": "socdm.com", "dominio": "socdm.com", "cookies": [["SOC", "/", ".socdm.com"]]}, {"chave": "onaudience_com", "nome": "onaudience.com", "dominio": "onaudience.com", "cookies": [["cookie", "/", ".onaudience.com"], ["done_redirects252", "/", ".onaudience.com"], ["done_redirects297", "/", ".onaudience.com"], ["done_redirects271", "/", ".onaudience.com"]]}, {"chave": "liftdsp_com", "nome": "liftdsp.com", "dominio": "liftdsp.com", "cookies": [["tuuid", "/", "pool.liftdsp.com"], ["c", "/", "pool.liftdsp.com"], ["tuuid_lu", "/", "pool.liftdsp.com"]]}, {"chave": "wp_pl", "nome": "wp.pl", "dominio": "wp.pl", "cookies": [["statid", "/", ".wp.pl"]]}, {"chave": "semasio_net", "nome": "semasio.net", "dominio": "semasio.net", "cookies": [["SEUNCY", "/", ".semasio.net"]]}, {"chave": "dotomi_com", "nome": "dotomi.com", "dominio": "dotomi.com", "cookies": [["DotomiTest", "/", ".dotomi.com"]]}, {"chave": "tracookiepixel_xyz", "nome": "tracookiepixel.xyz", "dominio": "tracookiepixel.xyz", "cookies": [["server_tracking_bdsp_uid", "/", ".tracookiepixel.xyz"]]}, {"chave": "mgid_com", "nome": "mgid.com", "dominio": "mgid.com", "cookies": [["muidn", "/", ".mgid.com"], ["mg_sync", "/", "cm.mgid.com"]]}, {"chave": "acuityplatform_com", "nome": "acuityplatform.com", "dominio": "acuityplatform.com", "cookies": [["auid", "/", ".acuityplatform.com"]]}, {"chave": "tribalfusion_com", "nome": "tribalfusion.com", "dominio": "tribalfusion.com", "cookies": [["ANON_ID", "/", ".tribalfusion.com"]]}, {"chave": "cognitivlabs_com", "nome": "cognitivlabs.com", "dominio": "cognitivlabs.com", "cookies": [["UID", "/", "beacon.lynx.cognitivlabs.com"], ["ss", "/", "beacon.lynx.cognitivlabs.com"]]}, {"chave": "mathtag_com", "nome": "mathtag.com", "dominio": "mathtag.com", "cookies": [["uuid", "/", ".mathtag.com"]]}, {"chave": "krushmedia_com", "nome": "krushmedia.com", "dominio": "krushmedia.com", "cookies": [["krm_usr", "/", ".krushmedia.com"], ["krm_r", "/", ".krushmedia.com"]]}, {"chave": "loudecho_ai", "nome": "loudecho.ai", "dominio": "loudecho.ai", "cookies": [["LoudEcho", "/", ".loudecho.ai"]]}, {"chave": "advolve_io", "nome": "advolve.io", "dominio": "advolve.io", "cookies": [["x", "/", ".advolve.io"]]}, {"chave": "1rx_io", "nome": "1rx.io", "dominio": "1rx.io", "cookies": [["_rxuuid", "/", ".1rx.io"]]}, {"chave": "pacvue_com", "nome": "pacvue.com", "dominio": "pacvue.com", "cookies": [["prism_dsp_uid", "/", "prism-tracking.pacvue.com"]]}, {"chave": "aniview_com", "nome": "aniview.com", "dominio": "aniview.com", "cookies": [["aniC", "/", ".aniview.com"], ["aniC", "/", "sync.aniview.com"]]}, {"chave": "iqzonertb_live", "nome": "iqzonertb.live", "dominio": "iqzonertb.live", "cookies": [["xeiqid", "/", ".iqzonertb.live"], ["s-444", "/", ".iqzonertb.live"]]}, {"chave": "casalemedia_com", "nome": "casalemedia.com", "dominio": "casalemedia.com", "cookies": [["CMID", "/", ".casalemedia.com"], ["CMPS", "/", ".casalemedia.com"], ["CMPRO", "/", ".casalemedia.com"]]}, {"chave": "appier_net", "nome": "appier.net", "dominio": "appier.net", "cookies": [["_auid", "/", ".c.appier.net"]]}]}];

  var CSS = `.bannercookies {
  --bc-bg: #1f2933;
  --bc-fg: #f5f7fa;
  --bc-muted: #cbd2d9;
  --bc-accent: #2f80ed;
  --bc-accent-fg: #ffffff;
  --bc-surface: #2b3642;
  --bc-border: #3e4c59;
  --bc-radius: 10px;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 14px;
  line-height: 1.5;
}

.bannercookies * {
  box-sizing: border-box;
}

.bannercookies-barra {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2147483000;
  background: var(--bc-bg);
  color: var(--bc-fg);
  padding: 16px 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px 20px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.25);
}

.bannercookies-barra p {
  margin: 0;
  max-width: 640px;
  color: var(--bc-muted);
}

.bannercookies-barra strong {
  color: var(--bc-fg);
}

.bannercookies-acoes {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.bannercookies button {
  font: inherit;
  cursor: pointer;
  border-radius: calc(var(--bc-radius) / 1.6);
  padding: 9px 16px;
  border: 1px solid transparent;
  white-space: nowrap;
}

.bannercookies-btn-primaria {
  background: var(--bc-accent);
  color: var(--bc-accent-fg);
}

.bannercookies-btn-secundaria {
  background: transparent;
  color: var(--bc-fg);
  border-color: var(--bc-border);
}

.bannercookies-btn-texto {
  background: transparent;
  color: var(--bc-muted);
  text-decoration: underline;
  padding: 9px 4px;
}

.bannercookies-overlay {
  position: fixed;
  inset: 0;
  z-index: 2147483001;
  background: rgba(15, 20, 25, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.bannercookies-painel {
  background: var(--bc-surface);
  color: var(--bc-fg);
  border-radius: var(--bc-radius);
  max-width: 560px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  padding: 24px;
  border: 1px solid var(--bc-border);
}

.bannercookies-painel h2 {
  margin: 0 0 12px;
  font-size: 18px;
}

.bannercookies-categoria {
  border-top: 1px solid var(--bc-border);
  padding: 14px 0;
}

.bannercookies-categoria:first-of-type {
  border-top: none;
}

.bannercookies-categoria-cabecalho {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.bannercookies-categoria-cabecalho h3 {
  margin: 0;
  font-size: 15px;
}

.bannercookies-categoria p {
  margin: 6px 0 0;
  color: var(--bc-muted);
  font-size: 13px;
}

.bannercookies-servicos {
  margin: 8px 0 0;
  padding-left: 18px;
  color: var(--bc-muted);
  font-size: 12px;
}

.bannercookies-switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 22px;
  flex-shrink: 0;
}

.bannercookies-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.bannercookies-switch-trilho {
  position: absolute;
  inset: 0;
  background: var(--bc-border);
  border-radius: 999px;
  transition: background 0.15s;
}

.bannercookies-switch-trilho::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  left: 3px;
  top: 3px;
  background: white;
  border-radius: 50%;
  transition: transform 0.15s;
}

.bannercookies-switch input:checked + .bannercookies-switch-trilho {
  background: var(--bc-accent);
}

.bannercookies-switch input:checked + .bannercookies-switch-trilho::before {
  transform: translateX(18px);
}

.bannercookies-switch input:disabled + .bannercookies-switch-trilho {
  opacity: 0.6;
}

.bannercookies-painel-rodape {
  margin-top: 18px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
`;

  function ativarScriptsPermitidos(categoriasPermitidas) {
  document.querySelectorAll('script[type="text/plain"][data-categoria]').forEach(function (script) {
    if (script.dataset.ativado === "1") return;
    if (!categoriasPermitidas.includes(script.getAttribute('data-categoria'))) return;

    var novo = document.createElement('script');
    for (var i = 0; i < script.attributes.length; i++) {
      var attr = script.attributes[i];
      if (attr.name === 'type') continue;
      if (attr.name === 'data-src') { novo.setAttribute('src', attr.value); continue; }
      novo.setAttribute(attr.name, attr.value);
    }
    novo.type = 'text/javascript';
    if (script.textContent && !script.getAttribute('data-src')) {
      novo.textContent = script.textContent;
    }
    script.dataset.ativado = "1";
    script.replaceWith(novo);
  });
}

  function lerConsentimentoSalvo() {
    try {
      var bruto = localStorage.getItem(CHAVE_STORAGE);
      return bruto ? JSON.parse(bruto) : null;
    } catch (e) {
      return null;
    }
  }

  function salvarConsentimento(decisao) {
    try {
      localStorage.setItem(CHAVE_STORAGE, JSON.stringify(decisao));
    } catch (e) {}
    var expira = new Date();
    expira.setFullYear(expira.getFullYear() + 1);
    document.cookie =
      NOME_COOKIE + "=1; expires=" + expira.toUTCString() + "; path=/; SameSite=Lax";
  }

  function categoriasPermitidas(decisao) {
    var permitidas = [];
    CATEGORIAS.forEach(function (cat) {
      if (cat.obrigatorio || decisao[cat.chave]) permitidas.push(cat.chave);
    });
    return permitidas;
  }

  function aplicarDecisao(decisao) {
    ativarScriptsPermitidos(categoriasPermitidas(decisao));
  }

  function injetarEstilo() {
    if (document.getElementById("bannercookies-estilo")) return;
    var style = document.createElement("style");
    style.id = "bannercookies-estilo";
    style.textContent = CSS;
    document.head.appendChild(style);
  }

  function elemento(tag, atributos, filhos) {
    var el = document.createElement(tag);
    Object.keys(atributos || {}).forEach(function (chave) {
      if (chave === "texto") {
        el.textContent = atributos[chave];
      } else {
        el.setAttribute(chave, atributos[chave]);
      }
    });
    (filhos || []).forEach(function (filho) {
      el.appendChild(filho);
    });
    return el;
  }

  function removerNo(id) {
    var no = document.getElementById(id);
    if (no) no.remove();
  }

  function montarPainel(decisaoAtual, aoSalvar) {
    removerNo("bannercookies-overlay");

    var toggles = {};
    var categoriasEl = CATEGORIAS.map(function (cat) {
      var marcado = cat.obrigatorio || !!decisaoAtual[cat.chave];
      var input = elemento("input", { type: "checkbox" });
      input.checked = marcado;
      input.disabled = cat.obrigatorio;
      toggles[cat.chave] = input;

      var trilho = elemento("span", { class: "bannercookies-switch-trilho" });
      var switchLabel = elemento("label", { class: "bannercookies-switch" }, [
        input,
        trilho,
      ]);

      var servicos =
        cat.servicos && cat.servicos.length
          ? elemento(
              "ul",
              { class: "bannercookies-servicos" },
              cat.servicos.map(function (s) {
                return elemento("li", {
                  texto: s.nome + " (" + s.cookies.length + " cookie" + (s.cookies.length === 1 ? "" : "s") + ")",
                });
              })
            )
          : null;

      var filhosCategoria = [
        elemento("div", { class: "bannercookies-categoria-cabecalho" }, [
          elemento("h3", { texto: cat.titulo }),
          switchLabel,
        ]),
        elemento("p", { texto: cat.descricao }),
      ];
      if (servicos) filhosCategoria.push(servicos);

      return elemento("div", { class: "bannercookies-categoria" }, filhosCategoria);
    });

    function coletarDecisao() {
      var decisao = {};
      Object.keys(toggles).forEach(function (chave) {
        decisao[chave] = toggles[chave].checked;
      });
      return decisao;
    }

    var btnSalvar = elemento("button", {
      class: "bannercookies-btn-primaria",
      texto: "Salvar preferências",
    });
    btnSalvar.addEventListener("click", function () {
      aoSalvar(coletarDecisao());
      removerNo("bannercookies-overlay");
    });

    var btnAceitarTodos = elemento("button", {
      class: "bannercookies-btn-secundaria",
      texto: "Aceitar todos",
    });
    btnAceitarTodos.addEventListener("click", function () {
      var decisao = {};
      CATEGORIAS.forEach(function (cat) {
        decisao[cat.chave] = true;
      });
      aoSalvar(decisao);
      removerNo("bannercookies-overlay");
    });

    var painel = elemento("div", { class: "bannercookies-painel" }, [
      elemento("h2", { texto: "Preferências de cookies" }),
      elemento("div", {}, categoriasEl),
      elemento("div", { class: "bannercookies-painel-rodape" }, [
        btnAceitarTodos,
        btnSalvar,
      ]),
    ]);

    var overlay = elemento(
      "div",
      { id: "bannercookies-overlay", class: "bannercookies bannercookies-overlay" },
      [painel]
    );
    overlay.addEventListener("click", function (evento) {
      if (evento.target === overlay) removerNo("bannercookies-overlay");
    });

    document.body.appendChild(overlay);
  }

  function montarBanner() {
    removerNo("bannercookies-barra");

    var texto = elemento("p", {}, [
      document.createTextNode(
        "Usamos cookies para o funcionamento do site e, com sua permissão, para "
      ),
      elemento("strong", { texto: "estatísticas e marketing" }),
      document.createTextNode(". Você pode personalizar suas escolhas a qualquer momento."),
    ]);

    var btnRejeitar = elemento("button", {
      class: "bannercookies-btn-secundaria",
      texto: "Rejeitar não essenciais",
    });
    btnRejeitar.addEventListener("click", function () {
      salvarConsentimento({});
      aplicarDecisao({});
      removerNo("bannercookies-barra");
    });

    var btnPersonalizar = elemento("button", {
      class: "bannercookies-btn-texto",
      texto: "Personalizar",
    });
    btnPersonalizar.addEventListener("click", function () {
      montarPainel(lerConsentimentoSalvo() || {}, function (decisao) {
        salvarConsentimento(decisao);
        aplicarDecisao(decisao);
        removerNo("bannercookies-barra");
      });
    });

    var btnAceitar = elemento("button", {
      class: "bannercookies-btn-primaria",
      texto: "Aceitar todos",
    });
    btnAceitar.addEventListener("click", function () {
      var decisao = {};
      CATEGORIAS.forEach(function (cat) {
        decisao[cat.chave] = true;
      });
      salvarConsentimento(decisao);
      aplicarDecisao(decisao);
      removerNo("bannercookies-barra");
    });

    var barra = elemento(
      "div",
      { id: "bannercookies-barra", class: "bannercookies bannercookies-barra" },
      [
        texto,
        elemento("div", { class: "bannercookies-acoes" }, [
          btnPersonalizar,
          btnRejeitar,
          btnAceitar,
        ]),
      ]
    );

    document.body.appendChild(barra);
  }

  function iniciar() {
    injetarEstilo();
    var decisaoSalva = lerConsentimentoSalvo();
    if (decisaoSalva) {
      aplicarDecisao(decisaoSalva);
      return;
    }
    aplicarDecisao({});
    montarBanner();
  }

  window.abrirConfiguracoesCookies = function () {
    injetarEstilo();
    montarPainel(lerConsentimentoSalvo() || {}, function (decisao) {
      salvarConsentimento(decisao);
      aplicarDecisao(decisao);
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();